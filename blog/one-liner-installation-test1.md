# Falco + Nginx プラグインで攻撃検知を試す – AWS EC2 実践ガイド（図解付き）

## 1. はじめに
Falco は CNCF のオープンソースランタイムセキュリティツールです。  
Nginxプラグインを使うと、NginxのアクセスログからSQLインジェクションやXSSなどをリアルタイム検知できます。

---

## 2. 全体構成（図解）

```plantuml
@startuml
actor "攻撃者" as Attacker
actor "正規ユーザー" as User
rectangle "AWS EC2\n(Ubuntu 22.04)" {
  rectangle "Nginx\n(アクセスログ出力)" as Nginx
  rectangle "Falco\n(falco-plugin-nginx)" as Falco
  rectangle "検知ルール\n(nginx_rules.yaml)" as Rules
}

Attacker -> Nginx : 攻撃リクエスト
User -> Nginx : 通常リクエスト
Nginx -> Falco : アクセスログ読み取り
Falco -> Rules : パターンマッチ
Rules -> Falco : 検知結果
Falco -> Attacker : (ブロックはしない/検知のみ)
Falco -> User : (通常応答)
Falco --> "管理者" : アラート通知（ログ/SIEM/Slackなど）
@enduml

この構成図では、攻撃・通常トラフィックの流れと、FalcoがNginxログを解析する構造を示しています。

⸻

3. 処理フロー（Mermaid）

flowchart TD
    A[攻撃/通常アクセス] --> B[Nginx]
    B --> C[アクセスログ出力]
    C --> D[falco-plugin-nginxがログを読み込み]
    D --> E[ルールファイル(nginx_rules.yaml)でマッチング]
    E -->|マッチ| F[アラート生成]
    E -->|非マッチ| G[スルー]
    F --> H[ログ出力 / 通知連携]
    G --> I[通常処理継続]


⸻

4. 環境構成

項目	内容
クラウド環境	AWS EC2
インスタンスタイプ	t2.micro
OS	Ubuntu 22.04.5 LTS
カーネル	6.8.0-1029-aws（modern eBPF 対応）
Webサーバ	Nginx 1.18.0
セキュリティツール	Falco + falco-plugin-nginx 最新版


⸻

5. インストール手順

5.1 基本ツール導入

sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx curl jq

5.2 Falco + プラグイン導入（テストサイト付き）

curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh \
  | sudo SETUP_TEST_CONTENT=yes bash


⸻

6. テスト用サイトと攻撃シナリオ

6.1 サイト確認

http://<EC2 Public IP>/

6.2 攻撃テスト

sudo bash /var/www/test-site/test-attacks.sh

個別例：

curl "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"
curl "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"
curl "http://localhost/upload.php?file=../../../../../../etc/passwd"
curl "http://localhost/api/users.php?cmd=;cat%20/etc/passwd"


⸻

7. 検知結果

リアルタイム確認

sudo journalctl -u falco-modern-bpf -f -o cat

実際のログ例

Critical [NGINX SQLi] ip=127.0.0.1 method=GET path=/search.php qs=q=%27%20OR%20%271%27%3D%271 ua=curl/7.81.0 status=200
Warning  [NGINX XSS] ip=127.0.0.1 method=GET path=/search.php qs=q=%3Cscript%3Ealert(1)%3C/script%3E ua=curl/7.81.0 status=200
Critical [NGINX Traversal] ip=127.0.0.1 method=GET path=/upload.php qs=file=../../../../../../etc/passwd ua=curl/7.81.0 status=200
Critical [NGINX CMDi] ip=127.0.0.1 method=GET path=/api/users.php raw=... "GET /api/users.php?cmd=;cat%20/etc/passwd" ...


⸻

8. 各ルールの検知ロジック

SQL Injection（[NGINX SQLi]）
	•	フィールド：qs
	•	条件：SQL構文トークン（%27, or, %3D など）の組み合わせ

XSS（[NGINX XSS]）
	•	フィールド：qs
	•	条件：スクリプトタグやイベントハンドラ（<script> 等）

Directory Traversal（[NGINX Traversal]）
	•	フィールド：qs
	•	条件：../ 等のトークン＋機密パス（例：/etc/passwd）

Command Injection（[NGINX CMDi]）
	•	フィールド：qs, raw
	•	条件：区切り記号（;, &&）＋危険コマンド（cat, rm 等）

⸻

9. URLエンコードの重要性

アクセスログはURLエンコード形式で記録されるため、ルールも同形式でパターン一致します。
テストはエンコード済みで送信すると確実に検知されます。

⸻

10. ルール作成ガイド

構造
	1.	list：検知対象の値やパターン
	2.	macro：条件の組み合わせ
	3.	rule：検知条件と出力

カスタム例

- list: bad_uas
  items: ["sqlmap", "nikto"]

- macro: is_nginx_evt
  condition: (evt.source = nginx)

- rule: NGINX Suspicious Admin Access
  desc: Detect admin page access
  condition: is_nginx_evt and (nginx.path startswith "/admin")
             and not (nginx.ua in (bad_uas))
  output: >
    [Admin Access] ip=%nginx.ip method=%nginx.method path=%nginx.path ua=%nginx.ua
  priority: Warning
  tags: [nginx, web, reconnaissance]

検証と反映

sudo falco --validate /etc/falco/rules.d/local_nginx_rules.yaml
sudo systemctl restart falco-modern-bpf


⸻

11. まとめ
	•	Falco + falco-plugin-nginx でWeb攻撃パターンをリアルタイム検知
	•	AWS EC2で簡単セットアップ
	•	list/macro/rule構造でカスタムルール作成が可能
	•	本番導入時は誤検知除外、重大度調整、通知連携で運用性向上


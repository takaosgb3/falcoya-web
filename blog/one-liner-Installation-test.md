# Falco + Nginx プラグインで攻撃検知を試す – AWS EC2 実践ガイド

## 1. はじめに
Falco は CNCF（Cloud Native Computing Foundation）に所属するオープンソースのランタイムセキュリティツールです。  
Linux カーネルのイベントやアプリケーションのログを解析し、不審な挙動をリアルタイムに検知できます。

今回使用する **falco-plugin-nginx** は、Nginx のアクセスログを解析し、以下のような代表的な Web 攻撃パターンを検知するプラグインです。

- SQL Injection（SQLi）
- Cross Site Scripting（XSS）
- Directory Traversal
- Command Injection（CMDi）

本記事では、AWS EC2（Ubuntu 22.04 LTS）にこのプラグインをインストールし、テスト用の脆弱サイトに攻撃リクエストを送信して、Falco がどのように検知するかを詳細に確認します。

---

## 2. 環境構成

| 項目 | 内容 |
|------|------|
| クラウド環境 | AWS EC2 |
| インスタンスタイプ | t2.micro |
| OS | Ubuntu 22.04.5 LTS |
| カーネル | 6.8.0-1029-aws（modern eBPF 対応） |
| Webサーバ | Nginx 1.18.0 |
| セキュリティツール | Falco + falco-plugin-nginx 最新版 |

---

## 3. インストール手順

### 3.1 パッケージ更新と基本ツール導入
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx curl jq


⸻

3.2 Falco + Nginx プラグインの導入

curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh \
  | sudo SETUP_TEST_CONTENT=yes bash

このスクリプトが行う主な処理は以下の通りです。
	1.	jq と Nginx のインストール・設定
	2.	Falco のインストール（modern eBPF モード有効化）
	3.	falco-plugin-nginx バイナリとルールファイルのダウンロード・配置
	4.	Falco 設定の更新（Nginx プラグインを有効化）
	5.	Falco サービス（falco-modern-bpf）の再起動
	6.	テスト用脆弱 Web サイトと攻撃スクリプトの配置

⸻

4. テスト用サイトと攻撃シナリオ

4.1 テストサイトへのアクセス

http://<EC2 Public IP>/

4.2 攻撃テストの実行方法

全攻撃パターンを一括実行：

sudo bash /var/www/test-site/test-attacks.sh

個別実行：

# SQL Injection
curl "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"

# XSS
curl "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"

# Directory Traversal
curl "http://localhost/upload.php?file=../../../../../../etc/passwd"

# Command Injection
curl "http://localhost/api/users.php?cmd=;cat%20/etc/passwd"


⸻

5. 検知結果の確認

5.1 リアルタイム監視

sudo journalctl -u falco-modern-bpf -f -o cat

5.2 実際の検知ログ

Critical [NGINX SQLi] ip=127.0.0.1 method=GET path=/search.php qs=q=%27%20OR%20%271%27%3D%271 ua=curl/7.81.0 status=200
Warning  [NGINX XSS] ip=127.0.0.1 method=GET path=/search.php qs=q=%3Cscript%3Ealert(1)%3C/script%3E ua=curl/7.81.0 status=200
Critical [NGINX Traversal] ip=127.0.0.1 method=GET path=/upload.php qs=file=../../../../../../etc/passwd ua=curl/7.81.0 status=200
Critical [NGINX CMDi] ip=127.0.0.1 method=GET path=/api/users.php raw=... "GET /api/users.php?cmd=;cat%20/etc/passwd" ...


⸻

6. 各ルールの検知ロジック

6.1 SQL Injection（[NGINX SQLi]）
	•	対象フィールド：qs
	•	条件：nginx_sqli_tokens_words / nginx_sqli_tokens_rawchars に含まれるパターン（例：%27, or, %3D）の組み合わせ
	•	今回の例：' OR '1'='1 が典型的タウトロジーとして一致

6.2 XSS（[NGINX XSS]）
	•	対象フィールド：qs
	•	条件：nginx_xss_tokens に含まれる <script>（%3Cscript）等のタグやスキーム
	•	今回の例：<script>alert(1)</script> に一致

6.3 Directory Traversal（[NGINX Traversal]）
	•	対象フィールド：qs
	•	条件：nginx_traversal_tokens（../, %2e%2e/）と機密ファイル名の組み合わせ
	•	今回の例：../../../../../../etc/passwd に一致

6.4 Command Injection（[NGINX CMDi]）
	•	対象フィールド：qs と raw
	•	条件：nginx_cmdinj_tokens_words の区切り記号（;, &&, |）＋危険コマンド
	•	今回の例：;cat /etc/passwd に一致

⸻

7. URLエンコードが必要な理由

プラグインはアクセスログの生データを解析します。
ルールは URL エンコードされた形でのパターン一致を前提にしているため、
テスト時はエンコード済みで送信する方が検知精度が高くなります。

⸻

8. ルール作成ガイド

8.1 基本構造
	1.	list：検知対象値やパターンをまとめる
	2.	macro：条件を組み合わせて再利用可能にする
	3.	rule：実際の検知条件とアラート出力

8.2 カスタムルール例

/etc/falco/rules.d/local_nginx_rules.yaml：

# 危険な User-Agent
- list: bad_uas
  items: ["sqlmap", "nikto", "curl/7.81.0"]

# Nginxイベント判定マクロ
- macro: is_nginx_evt
  condition: (evt.source = nginx)

# /admin 直アクセス検知
- rule: NGINX Suspicious Admin Access
  desc: Detect direct access to admin page
  condition: is_nginx_evt and (nginx.path startswith "/admin")
             and not (nginx.ua in (bad_uas))
  output: >
    [Admin Access] ip=%nginx.ip method=%nginx.method path=%nginx.path ua=%nginx.ua
  priority: Warning
  tags: [nginx, web, reconnaissance]

8.3 ルール変更方法
	•	append：既存ルールに条件を追加
	•	replace：既存ルール全体を置き換え
	•	override：出力や重大度を上書き

8.4 検証と反映

sudo falco --validate /etc/falco/rules.d/local_nginx_rules.yaml
sudo systemctl restart falco-modern-bpf


⸻

9. まとめ
	•	Falco + falco-plugin-nginx で Nginx アクセスログから Web 攻撃をリアルタイム検知可能
	•	AWS EC2 上で簡単に導入でき、テスト用サイトで即動作確認
	•	ルールは list / macro / rule の3階層構造で柔軟に作成・調整可能
	•	運用時は誤検知除外、重大度調整、外部通知連携などでチューニングが必要
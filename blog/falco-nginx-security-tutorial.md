# Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2 完全実践ガイド

## 目次
1. [はじめに - なぜFalco + Nginxプラグインが必要なのか](#introduction)
2. [システム構成と動作原理](#architecture)
3. [環境準備 - AWS EC2セットアップ](#environment)
4. [インストール - ワンライナーで簡単導入](#installation)
5. [テスト環境の構築](#test-setup)
6. [攻撃パターンの実践検証](#attack-tests)
7. [検知ログの詳細分析](#detection-analysis)
8. [カスタムルールの作成](#custom-rules)
9. [運用時の考慮事項](#production-considerations)
10. [まとめと次のステップ](#conclusion)

---

## 1. はじめに - なぜFalco + Nginxプラグインが必要なのか {#introduction}

### Webアプリケーションセキュリティの現実

現代のWebアプリケーションは、以下のような深刻なセキュリティ脅威に常に晒されています：

- **SQL インジェクション**: データベースへの不正アクセス
- **クロスサイトスクリプティング（XSS）**: ユーザーブラウザでの悪意のあるスクリプト実行
- **ディレクトリトラバーサル**: システムファイルへの不正アクセス
- **コマンドインジェクション**: サーバー上での任意コマンド実行

### 従来のセキュリティ対策の限界

従来のWAF（Web Application Firewall）や静的解析ツールでは、以下の課題がありました：

- **遅延検知**: ログ分析が後追いになりがち
- **複雑な設定**: 専門知識が必要で導入コストが高い
- **誤検知**: 正常なトラフィックまでブロックしてしまう
- **可視性の不足**: 攻撃の全体像が把握しにくい

### Falcoが提供するソリューション

**Falco**は、CNCF（Cloud Native Computing Foundation）に所属するオープンソースのランタイムセキュリティツールで、以下の特徴があります：

✅ **リアルタイム検知**: カーネルレベルでのイベント監視  
✅ **軽量**: システムパフォーマンスへの影響が最小限  
✅ **柔軟なルール**: YAML形式で直感的にカスタマイズ可能  
✅ **統合性**: 既存のCI/CDパイプラインやSIEMツールと連携しやすい  

**falco-plugin-nginx**は、このFalcoの能力をNginxのアクセスログ解析に特化させたプラグインです。

---

## 2. システム構成と動作原理 {#architecture}

### 全体アーキテクチャ

```mermaid
graph TB
    A[攻撃者] --> B[Nginx Webサーバー]
    C[正規ユーザー] --> B
    B --> D[アクセスログファイル<br/>(/var/log/nginx/access.log)]
    D --> E[falco-plugin-nginx]
    E --> F[検知ルール<br/>(nginx_rules.yaml)]
    F --> G{パターンマッチング}
    G -->|検知| H[アラート生成]
    G -->|正常| I[処理継続]
    H --> J[ログ出力]
    H --> K[外部通知<br/>(Slack/SIEM等)]
```

### 処理フローの詳細

1. **リクエスト受信**: NginxがHTTPリクエストを受信
2. **ログ出力**: アクセスログがCombined形式で記録
3. **リアルタイム解析**: falco-plugin-nginxが継続的にログを監視
4. **パターンマッチング**: 事前定義されたルールと照合
5. **脅威判定**: 攻撃パターンが検出された場合にアラート生成
6. **通知・記録**: ログ出力や外部システムへの通知

### 検知対象の攻撃パターン

| 攻撃タイプ | 重要度 | 検知対象 | 例 |
|----------|--------|----------|-----|
| **SQL Injection** | Critical | クエリパラメータ | `' OR '1'='1` |
| **XSS** | Warning | スクリプトタグ | `<script>alert(1)</script>` |
| **Directory Traversal** | Critical | パストラバーサル | `../../etc/passwd` |
| **Command Injection** | Critical | コマンド実行 | `;cat /etc/passwd` |
| **File Access** | Warning | 機密ファイル | `.env`, `wp-config.php` |
| **Brute Force** | Notice | 認証攻撃 | 連続ログイン失敗 |

---

## 3. 環境準備 - AWS EC2セットアップ {#environment}

### 推奨環境仕様

| 項目 | 推奨値 | 説明 |
|------|--------|------|
| **インスタンスタイプ** | t2.micro以上 | 無料利用枠でも動作 |
| **OS** | Ubuntu 22.04 LTS | 長期サポート版 |
| **カーネル** | 5.8以上 | modern eBPF対応 |
| **メモリ** | 1GB以上 | Falco動作に最低限必要 |
| **ストレージ** | 10GB以上 | ログファイル保存用 |

### EC2インスタンス作成手順

1. **AMI選択**: Ubuntu Server 22.04 LTS (HVM)
2. **セキュリティグループ**: HTTP (80), SSH (22) を許可
3. **キーペア**: SSH接続用のキーペアを設定

### 初期設定

```bash
# システム更新
sudo apt update && sudo apt upgrade -y

# 基本ツールインストール
sudo apt install -y nginx curl jq htop

# Nginxサービス開始
sudo systemctl start nginx
sudo systemctl enable nginx

# 動作確認
curl localhost
```

---

## 4. インストール - ワンライナーで簡単導入 {#installation}

### 🚀 ワンライナーインストール

最も簡単な方法は、公式インストールスクリプトを使用することです：

```bash
curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash
```

### 📋 テスト環境付きインストール

攻撃テスト用のサンプルサイトも同時にセットアップする場合：

```bash
curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh \
  | sudo SETUP_TEST_CONTENT=yes bash
```

### インストールスクリプトが実行する処理

1. **依存関係の解決**
   - jq（JSONパーサー）のインストール
   - Nginxの設定確認・調整

2. **Falcoのインストール**
   - 公式リポジトリからFalcoをインストール
   - modern eBPFモードの有効化

3. **プラグインの配置**
   - falco-plugin-nginxバイナリのダウンロード
   - `/usr/share/falco/plugins/` に配置

4. **ルールファイルの設定**
   - 検知ルール（nginx_rules.yaml）をダウンロード
   - `/etc/falco/rules.d/` に配置

5. **Falco設定の更新**
   - `/etc/falco/falco.yaml` の更新
   - Nginxプラグインの有効化

6. **サービスの起動**
   - falco-modern-bpfサービスの開始・有効化

### インストール確認

```bash
# Falcoサービスの状態確認
sudo systemctl status falco-modern-bpf

# プラグインファイルの確認
ls -la /usr/share/falco/plugins/

# ルールファイルの確認
ls -la /etc/falco/rules.d/

# Falcoのバージョン確認
sudo falco --version
```

---

## 5. テスト環境の構築 {#test-setup}

### テストサイトの構成

インストール時に `SETUP_TEST_CONTENT=yes` を指定すると、以下のテスト用ページが自動的に作成されます：

```
/var/www/test-site/
├── index.html          # メインページ
├── search.php          # 検索機能（SQLi/XSS脆弱性）
├── upload.php          # ファイルアップロード（Traversal脆弱性）
├── api/users.php       # API（Command Injection脆弱性）
└── test-attacks.sh     # 攻撃テストスクリプト
```

### テストサイトへのアクセス

ブラウザで以下のURLにアクセスしてテストサイトを確認：

```
http://<EC2のパブリックIP>/
```

### 攻撃テストスクリプトの内容

`test-attacks.sh` には、以下のような攻撃パターンが含まれています：

```bash
#!/bin/bash

echo "=== SQL Injection Attack ==="
curl -s "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"

echo "=== XSS Attack ==="
curl -s "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"

echo "=== Directory Traversal Attack ==="
curl -s "http://localhost/upload.php?file=../../../../../../etc/passwd"

echo "=== Command Injection Attack ==="
curl -s "http://localhost/api/users.php?cmd=;cat%20/etc/passwd"
```

---

## 6. 攻撃パターンの実践検証 {#attack-tests}

### リアルタイム監視の開始

まず、別のターミナルでFalcoのログをリアルタイム監視します：

```bash
sudo journalctl -u falco-modern-bpf -f -o cat
```

### 一括攻撃テストの実行

準備されたスクリプトで全攻撃パターンをテスト：

```bash
sudo bash /var/www/test-site/test-attacks.sh
```

### 個別攻撃パターンの詳細

#### 1. SQL Injection攻撃

**攻撃コマンド:**
```bash
curl "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"
```

**URLデコード後:**
```sql
' OR '1'='1
```

**検知ログ例:**
```
Critical [NGINX SQLi] ip=127.0.0.1 method=GET path=/search.php qs=q=%27%20OR%20%271%27%3D%271 ua=curl/7.81.0 status=200
```

#### 2. XSS攻撃

**攻撃コマンド:**
```bash
curl "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"
```

**URLデコード後:**
```javascript
<script>alert(1)</script>
```

**検知ログ例:**
```
Warning [NGINX XSS] ip=127.0.0.1 method=GET path=/search.php qs=q=%3Cscript%3Ealert(1)%3C/script%3E ua=curl/7.81.0 status=200
```

#### 3. Directory Traversal攻撃

**攻撃コマンド:**
```bash
curl "http://localhost/upload.php?file=../../../../../../etc/passwd"
```

**検知ログ例:**
```
Critical [NGINX Traversal] ip=127.0.0.1 method=GET path=/upload.php qs=file=../../../../../../etc/passwd ua=curl/7.81.0 status=200
```

#### 4. Command Injection攻撃

**攻撃コマンド:**
```bash
curl "http://localhost/api/users.php?cmd=;cat%20/etc/passwd"
```

**URLデコード後:**
```bash
;cat /etc/passwd
```

**検知ログ例:**
```
Critical [NGINX CMDi] ip=127.0.0.1 method=GET path=/api/users.php qs=cmd=;cat%20/etc/passwd ua=curl/7.81.0 status=200
```

---

## 7. 検知ログの詳細分析 {#detection-analysis}

### ログ形式の理解

Falcoの出力ログは以下の形式で構成されています：

```
[重要度] [ルール名] フィールド=値 フィールド=値 ...
```

### 各攻撃パターンの検知ロジック

#### SQL Injection検知ロジック

**対象フィールド:** `qs` (クエリ文字列)

**検知条件:**
- SQLキーワード: `select`, `union`, `insert`, `delete`, `drop`
- 特殊文字: `%27` (シングルクォート), `%22` (ダブルクォート)
- 論理演算子: `and`, `or`, `%20or%20`
- 比較演算子: `%3D` (=), `like`

**パターンマッチング例:**
```yaml
condition: >
  (nginx.qs contains "%27" and nginx.qs contains "or") or
  (nginx.qs contains "union" and nginx.qs contains "select") or
  (nginx.qs contains "1%3D1")
```

#### XSS検知ロジック

**対象フィールド:** `qs`, `path`

**検知条件:**
- HTMLタグ: `%3Cscript`, `%3Cimg`, `%3Cobject`
- JavaScriptイベント: `onload`, `onerror`, `onclick`
- プロトコル: `javascript:`, `vbscript:`
- エンコード迂回: 各種エンコード形式

**パターンマッチング例:**
```yaml
condition: >
  (nginx.qs contains "%3Cscript") or
  (nginx.qs contains "javascript:") or
  (nginx.qs contains "onerror")
```

#### Directory Traversal検知ロジック

**対象フィールド:** `qs`, `path`

**検知条件:**
- パストラバーサル: `../`, `..\\`, `%2e%2e/`
- 機密ファイル: `/etc/passwd`, `/etc/shadow`, `web.config`
- Windows固有: `%2e%2e%5c`, `boot.ini`

**パターンマッチング例:**
```yaml
condition: >
  (nginx.qs contains "../" and nginx.qs contains "etc/passwd") or
  (nginx.qs contains "%2e%2e/" and nginx.qs contains "shadow")
```

#### Command Injection検知ロジック

**対象フィールド:** `qs`, `raw`

**検知条件:**
- コマンド区切り: `;`, `&&`, `||`, `|`
- 危険コマンド: `cat`, `ls`, `rm`, `wget`, `curl`
- シェル展開: `$(...)`, `\`...\``

**パターンマッチング例:**
```yaml
condition: >
  (nginx.qs contains ";" and nginx.qs contains "cat") or
  (nginx.qs contains "&&" and nginx.qs contains "wget") or
  (nginx.qs contains "$(" and nginx.qs contains ")")
```

### 重要度レベルの理解

| 重要度 | 意味 | 対応の緊急度 |
|--------|------|-------------|
| **Emergency** | システム停止レベル | 即座に対応 |
| **Alert** | 即座の対応が必要 | 数分以内 |
| **Critical** | 重要な問題 | 1時間以内 |
| **Warning** | 警告レベル | 数時間以内 |
| **Notice** | 通知レベル | 1日以内 |
| **Info** | 情報提供 | 必要に応じて |

---

## 8. カスタムルールの作成 {#custom-rules}

### ルール構造の理解

Falcoのルールは3つの要素で構成されています：

1. **list**: 検知対象の値やパターンを定義
2. **macro**: 条件の組み合わせを再利用可能な形で定義
3. **rule**: 実際の検知条件と出力を定義

### カスタムルールの作成例

#### 1. 管理画面への不正アクセス検知

```yaml
# /etc/falco/rules.d/local_nginx_rules.yaml

# 管理系パスのリスト
- list: admin_paths
  items: ["/admin", "/administrator", "/wp-admin", "/phpmyadmin"]

# 許可された管理者IPのリスト
- list: admin_ips
  items: ["192.168.1.100", "10.0.1.50"]

# Nginxイベントを判定するマクロ
- macro: is_nginx_event
  condition: (evt.source = nginx)

# 管理画面への不正アクセス検知ルール
- rule: NGINX Unauthorized Admin Access
  desc: Detect unauthorized access to admin pages
  condition: >
    is_nginx_event and 
    (nginx.path startswith "/admin" or nginx.path in (admin_paths)) and
    not (nginx.ip in (admin_ips))
  output: >
    [UNAUTHORIZED ADMIN ACCESS] Suspicious admin access detected
    (ip=%nginx.ip method=%nginx.method path=%nginx.path ua="%nginx.ua" 
     status=%nginx.status size=%nginx.size)
  priority: Critical
  tags: [nginx, web, unauthorized, admin]
```

#### 2. 特定User-Agentによるスキャン検知

```yaml
# 攻撃ツールのUser-Agentリスト
- list: scanner_user_agents
  items: [
    "sqlmap", "nikto", "nmap", "masscan", "zap", "burp",
    "acunetix", "nessus", "openvas", "w3af"
  ]

# スキャンツール検知ルール
- rule: NGINX Security Scanner Detection
  desc: Detect security scanning tools
  condition: >
    is_nginx_event and 
    (nginx.ua in (scanner_user_agents) or
     nginx.ua contains "scanner" or
     nginx.ua contains "bot" or
     nginx.ua contains "crawler")
  output: >
    [SECURITY SCANNER] Security scanner detected
    (ip=%nginx.ip ua="%nginx.ua" path=%nginx.path status=%nginx.status)
  priority: Warning
  tags: [nginx, scanner, reconnaissance]
```

#### 3. 大量404エラーによるブルートフォース検知

```yaml
# 404エラーの大量発生を検知するルール
- rule: NGINX Brute Force 404
  desc: Detect potential brute force attacks via 404 errors
  condition: >
    is_nginx_event and
    nginx.status = 404 and
    not (nginx.path startswith "/favicon" or 
         nginx.path startswith "/robots.txt" or
         nginx.path startswith "/sitemap")
  output: >
    [BRUTE FORCE 404] Potential brute force via 404 errors
    (ip=%nginx.ip path=%nginx.path ua="%nginx.ua" status=%nginx.status)
  priority: Notice
  tags: [nginx, brute-force, 404]
```

### ルールのカスタマイズ方法

#### 既存ルールの条件追加 (append)

```yaml
- rule: NGINX SQLi Attack
  append: true
  condition: and not (nginx.ip in (whitelist_ips))
```

#### 既存ルールの完全置換 (replace)

```yaml
- rule: NGINX SQLi Attack
  replace: true
  condition: >
    is_nginx_event and
    nginx.qs contains "custom_sqli_pattern"
  output: "Custom SQLi detection: ip=%nginx.ip"
```

#### 出力やプライオリティの上書き (override)

```yaml
- rule: NGINX SQLi Attack
  override:
    priority: Emergency
    output: "CRITICAL SQLi detected: %nginx.ip"
```

### ルールの検証とデプロイ

#### 1. 構文チェック

```bash
sudo falco --validate /etc/falco/rules.d/local_nginx_rules.yaml
```

#### 2. ルール適用

```bash
sudo systemctl restart falco-modern-bpf
```

#### 3. 動作確認

```bash
# ログでエラーがないかチェック
sudo journalctl -u falco-modern-bpf --since "1 minute ago"

# テスト攻撃で検知確認
curl "http://localhost/admin/" -H "User-Agent: sqlmap/1.4.12"
```

---

## 9. 運用時の考慮事項 {#production-considerations}

### パフォーマンス最適化

#### システムリソース監視

```bash
# Falcoのリソース使用量確認
sudo systemctl status falco-modern-bpf

# CPUとメモリ使用量の詳細
sudo ps aux | grep falco
sudo top -p $(pgrep falco)
```

#### ログローテーション設定

```bash
# /etc/logrotate.d/falco
/var/log/falco/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 falco falco
    postrotate
        systemctl reload falco-modern-bpf > /dev/null 2>&1 || true
    endrotate
}
```

### セキュリティ強化

#### ルールファイルの保護

```bash
# ルールファイルの権限設定
sudo chmod 644 /etc/falco/rules.d/*.yaml
sudo chown root:root /etc/falco/rules.d/*.yaml
```

#### ログの保護

```bash
# ログファイルのアクセス制限
sudo chmod 640 /var/log/falco/*.log
sudo chown falco:adm /var/log/falco/*.log
```

### 外部システム連携

#### SIEM統合

```yaml
# /etc/falco/falco.yaml でJSON出力を有効化
json_output: true
json_include_output_property: true

# rsyslogでSIEMに転送
# /etc/rsyslog.d/49-falco.conf
$ModLoad imfile
$InputFileName /var/log/falco/falco.log
$InputFileTag falco:
$InputFileStateFile falco-state
$InputFileSeverity info
$InputFileFacility local0
$InputRunFileMonitor
local0.info @@your-siem-server:514
```

#### Slack通知

```bash
#!/bin/bash
# /usr/local/bin/falco-slack-notify.sh

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK"
MESSAGE=$1

curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"🚨 Falco Alert: $MESSAGE\"}" \
  $WEBHOOK_URL
```

### 誤検知の対策

#### ホワイトリスト管理

```yaml
# 正常なアプリケーション動作の除外
- list: legitimate_admin_ips
  items: ["10.0.1.100", "192.168.1.50"]

- list: known_api_endpoints
  items: ["/api/health", "/api/metrics"]

- macro: is_legitimate_traffic
  condition: >
    (nginx.ip in (legitimate_admin_ips)) or
    (nginx.path in (known_api_endpoints))

- rule: NGINX SQLi Attack
  append: true
  condition: and not is_legitimate_traffic
```

#### 段階的なデプロイ

1. **監視モード**: アラートのみ出力、ブロックなし
2. **テストモード**: 少数のルールで検証
3. **段階適用**: 重要度の高いルールから適用
4. **全面展開**: すべてのルールを有効化

---

## 10. まとめと次のステップ {#conclusion}

### 今回達成したこと

✅ **環境構築**: AWS EC2上でFalco + Nginxプラグインの動作環境を構築  
✅ **攻撃検知**: SQLi、XSS、Directory Traversal、Command Injectionの検知を実証  
✅ **ルール理解**: 検知ロジックとカスタマイズ方法を習得  
✅ **運用知識**: パフォーマンス最適化と外部連携の方法を学習  

### セキュリティ向上の効果

- **可視性の向上**: 従来見えなかった攻撃パターンをリアルタイム検知
- **迅速な対応**: 攻撃発生から検知までのタイムラグを最小化
- **コスト効率**: オープンソースで高機能なセキュリティ監視を実現
- **統合性**: 既存のモニタリング・アラート基盤との連携が容易

### 次のステップ

#### 1. 本番環境への適用

- **段階的デプロイ**: 非本番環境での十分な検証後に適用
- **バックアップ策**: 既存のセキュリティ機構との併用
- **監視強化**: システムパフォーマンスとアラート品質の継続監視

#### 2. 高度な機能の活用

- **Machine Learning**: Falcoのアノマリ検知機能の活用
- **コンテナセキュリティ**: Kubernetes環境でのコンテナ監視
- **クラウドネイティブ**: AWS/GCP/Azureのクラウドサービスとの統合

#### 3. セキュリティ体制の強化

- **インシデント対応**: 検知後の対応フローの自動化
- **チーム教育**: セキュリティアナリストのスキル向上
- **継続改善**: 新しい攻撃パターンに対するルール更新

### おすすめの学習リソース

- [Falco公式ドキュメント](https://falco.org/docs/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [CIS Controls](https://www.cisecurity.org/controls/)

---

**この実践ガイドがWebアプリケーションセキュリティの向上に役立つことを願っています。セキュリティは継続的な取り組みです。定期的な見直しと改善を続けて、より安全なWebサービスを提供していきましょう！** 🛡️

---

*最終更新: 2025年8月*  
*著者: FALCOYA Security Team*
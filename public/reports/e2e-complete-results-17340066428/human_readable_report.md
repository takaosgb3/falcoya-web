## 📋 Test Results: BASIC

| Test ID | Title | Scenario (G/W/T) | Success Criteria | Actual | Result | Duration | Evidence |
|---------|-------|-------------------|------------------|--------|--------|----------|----------|
| BASIC_001 | Falcoがインストールされていることを確認... | **G**: セルフホストランナー環境... **W**: falcoコマンドを実行... **T**: コマンドが存在し実行可能... | exit code = 0... | exit:0 | ✅ PASS | 6ms | [cmd](./BASIC_001/command.txt) [out](./BASIC_001/stdout.txt) [err](./BASIC_001/stderr.txt)  |
| BASIC_002 | Falcoバージョンの確認... | **G**: Falcoがインストール済み... **W**: falco --versionを実行... **T**: バージョン情報が表示される... | exit code = 0 かつ バージョン文字列を含む... | exit:0 | ✅ PASS | 13ms | [cmd](./BASIC_002/command.txt) [out](./BASIC_002/stdout.txt) [err](./BASIC_002/stderr.txt)  |
| BASIC_003 | nginxプラグインバイナリの存在確認... | **G**: プラグインがデプロイ済み... **W**: /usr/share/falco/plugins/libfa... **T**: ファイルが存在する... | test -f が成功... | exit:0 | ✅ PASS | 11ms | [cmd](./BASIC_003/command.txt) [out](./BASIC_003/stdout.txt) [err](./BASIC_003/stderr.txt)  |
| BASIC_004 | nginxルールファイルの存在確認... | **G**: ルールがデプロイ済み... **W**: /etc/falco/rules.d/nginx_rules... **T**: ファイルが存在する... | test -f が成功... | exit:0 | ✅ PASS | 7ms | [cmd](./BASIC_004/command.txt) [out](./BASIC_004/stdout.txt) [err](./BASIC_004/stderr.txt)  |
| BASIC_005 | nginxプラグインがFalcoに登録されていることを確認... | **G**: Falcoとプラグインが設定済み... **W**: falco --list-pluginsを実行してnginx... **T**: nginxプラグインがリストに含まれる... | grep nginx が成功... | exit:0 | ✅ PASS | 32ms | [cmd](./BASIC_005/command.txt) [out](./BASIC_005/stdout.txt) [err](./BASIC_005/stderr.txt)  |
| BASIC_NEG_001 | [負のテスト] 存在しないプラグインが登録されていないことを確認... | **G**: Falcoが起動可能... **W**: falco --list-pluginsで架空のプラグインを... **T**: 見つからない（失敗する）... | exit code = 1（期待通りの失敗）... | Failed as expected | ✅ NEG | 16ms | [cmd](./BASIC_NEG_001/command.txt) [out](./BASIC_NEG_001/stdout.txt) [err](./BASIC_NEG_001/stderr.txt)  |

## 📋 Test Results: RULES

| Test ID | Title | Scenario (G/W/T) | Success Criteria | Actual | Result | Duration | Evidence |
|---------|-------|-------------------|------------------|--------|--------|----------|----------|
| RULES_001 | nginxルールのYAML構文検証... | **G**: nginx_rules.yamlが存在... **W**: falco --validateでルールを検証... **T**: 構文エラーがない... | exit code = 0... | exit:0 | ✅ PASS | 28ms | [cmd](./RULES_001/command.txt) [out](./RULES_001/stdout.txt) [err](./RULES_001/stderr.txt)  |
| RULES_002 | nginxルールの数を確認... | **G**: nginx_rules.yamlが存在... **W**: ルール定義の数をカウント... **T**: 1つ以上のルールが定義されている... | grep '^- rule:' | 数値が返る... | exit:0 | ✅ PASS | 8ms | [cmd](./RULES_002/command.txt) [out](./RULES_002/stdout.txt) [err](./RULES_002/stderr.txt)  |
| RULES_NEG_001 | [負のテスト] 不正なYAMLルールが検証エラーになることを確認... | **G**: 不正なYAMLファイルを作成... **W**: falco --validateで検証... **T**: 検証エラーになる... | exit code = 1（期待通りの失敗）... | Failed as expected | ✅ NEG | 18ms | [cmd](./RULES_NEG_001/command.txt) [out](./RULES_NEG_001/stdout.txt) [err](./RULES_NEG_001/stderr.txt)  |

## 📋 Test Results: PLUGIN_LOAD

| Test ID | Title | Scenario (G/W/T) | Success Criteria | Actual | Result | Duration | Evidence |
|---------|-------|-------------------|------------------|--------|--------|----------|----------|
| PLUGIN_LOAD_001 | nginxプラグインが正常にロードされることを確認... | **G**: プラグインバイナリが配置済み... **W**: falco --list-pluginsでプラグインリストを... **T**: nginxプラグインが正常にロードされる... | nginxプラグインがリストに含まれる... | exit:0 | ✅ PASS | 16ms | [cmd](./PLUGIN_LOAD_001/command.txt) [out](./PLUGIN_LOAD_001/stdout.txt) [err](./PLUGIN_LOAD_001/stderr.txt)  |
| PLUGIN_LOAD_002 | プラグインの共有ライブラリ依存関係を確認... | **G**: プラグインバイナリが存在... **W**: lddで依存関係をチェック... **T**: 必要なライブラリがリンクされている... | exit code = 0... | exit:0 | ✅ PASS | 12ms | [cmd](./PLUGIN_LOAD_002/command.txt) [out](./PLUGIN_LOAD_002/stdout.txt) [err](./PLUGIN_LOAD_002/stderr.txt)  |
| PLUGIN_LOAD_NEG_001 | [負のテスト] 不正なプラグイン設定が失敗することを確認... | **G**: 不正なJSON設定を含むfalco.yaml... **W**: falco --dry-runで検証... **T**: 設定エラーで失敗する... | exit code = 1（期待通りの失敗）... | Failed as expected | ✅ NEG | 19ms | [cmd](./PLUGIN_LOAD_NEG_001/command.txt) [out](./PLUGIN_LOAD_NEG_001/stdout.txt) [err](./PLUGIN_LOAD_NEG_001/stderr.txt)  |

## 📋 Test Results: EVENT_DETECTION

| Test ID | Title | Scenario (G/W/T) | Success Criteria | Actual | Result | Duration | Evidence |
|---------|-------|-------------------|------------------|--------|--------|----------|----------|
| EVENT_DETECTION_001 | SQLインジェクション攻撃を検知できること... | **G**: Falco+nginxプラグイン+検知ルールが有効... **W**: SQLiパターン（' OR '1'='1）を含むnginxロ... **T**: [NGINX SQLi]アラートが発火する... | falco.logに'NGINX SQLi'を含むアラートが1件以上... | Detected: 5 alerts | ✅ PASS | 1034ms | [cmd](./EVENT_DETECTION_001/command.txt) [out](./EVENT_DETECTION_001/stdout.txt) [err](./EVENT_DETECTION_001/stderr.txt) [falco](./EVENT_DETECTION_001/falco.log) |
| EVENT_DETECTION_002 | XSS（クロスサイトスクリプティング）攻撃を検知できること... | **G**: Falco+nginxプラグイン+検知ルールが有効... **W**: XSSパターン（<script>タグ）を含むnginxログを... **T**: [NGINX XSS]アラートが発火する... | falco.logに'NGINX XSS'を含むアラートが1件以上... | Detected: 7 alerts | ✅ PASS | 2533ms | [cmd](./EVENT_DETECTION_002/command.txt) [out](./EVENT_DETECTION_002/stdout.txt) [err](./EVENT_DETECTION_002/stderr.txt) [falco](./EVENT_DETECTION_002/falco.log) |

## 🔍 Detection Samples

### Successfully Detected Attacks:

#### EVENT_DETECTION_001: SQLインジェクション攻撃を検知できること
**Payload**: `/users?id=1' OR '1'='1`
**Decoded**: `/users?id=1' OR '1'='1`
**Falco Alert**:
```
{"hostname":"github-runner-deployment-fixed-mgv7s-q4jvs","output":"07:31:00.000000000: Critical [NGINX SQLi] ip=192.0.2.1 method=GET path=/users qs=id=1%27%20OR%20%271%27%3D%271 ua=curl/7.68.0 status=200","output_fields":{"evt.time":1755847860000000000,"nginx.method":"GET","nginx.path":"/users","nginx.query_string":"id=1%27%20OR%20%271%27%3D%271","nginx.remote_addr":"192.0.2.1","nginx.status":200,"nginx.user_agent":"curl/7.68.0"},"priority":"Critical","rule":"NGINX SQLi Attempt","source":"nginx","tags":["attack","sqli","web"],"time":"2025-08-22T07:31:00.000000000Z"}
```

#### EVENT_DETECTION_002: XSS（クロスサイトスクリプティング）攻撃を検知できること
**Payload**: `/search?q=%3Cscript%3Ealert(1)%3C/script%3E`
**Decoded**: `/search?q=<script>alert(1)</script>`
**Falco Alert**:
```
{"hostname":"github-runner-deployment-fixed-mgv7s-q4jvs","output":"07:32:00.000000000: Warning [NGINX XSS] ip=192.0.2.10 method=GET path=/search qs=q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E ua=Mozilla/5.0 status=200","output_fields":{"evt.time":1755847920000000000,"nginx.method":"GET","nginx.path":"/search","nginx.query_string":"q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E","nginx.remote_addr":"192.0.2.10","nginx.status":200,"nginx.user_agent":"Mozilla/5.0"},"priority":"Warning","rule":"NGINX XSS Attempt","source":"nginx","tags":["attack","web","xss"],"time":"2025-08-22T07:32:00.000000000Z"}
```

---

## 📊 Test Execution Metadata

- **Report Generated**: 2025-08-30 05:45:03 UTC
- **Test Environment**: github-runner-deployment-fixed-mgv7s-q4jvs
- **Falco Version**: 0.41.3
3.6.0
- **Plugin SHA**: 90349251


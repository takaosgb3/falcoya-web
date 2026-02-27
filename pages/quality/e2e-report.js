import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function E2EReport() {
  const [language, setLanguage] = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSections, setExpandedSections] = useState(new Set())

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  // E2E Test Report Content
  const content = {
    ja: {
      title: "E2E テストレポート (Phase 1)",
      description: "falco-plugin-nginx の包括的なEnd-to-Endテスト結果 - 基礎検証フェーズ",
      breadcrumb: "← テストページに戻る",
      htmlReportLink: "🔍 HTMLレポートを新しいタブで開く",
      metadata: {
        executionTime: "実行日時",
        environment: "環境",
        falcoVersion: "Falco版",
        pluginVersion: "プラグインバージョン"
      },
      summary: {
        totalTests: "総テスト数",
        passed: "成功",
        failed: "失敗",
        passRate: "成功率"
      },
      filters: {
        all: "すべて"
      },
      testDetails: {
        scenario: "🎯 テストシナリオ (Given/When/Then)",
        criteria: "✅ 成功条件",
        actual: "📊 実際の結果",
        detectionSample: "🔍 検知サンプル",
        payload: "Payload:",
        decoded: "Decoded:",
        falcoAlert: "Falco Alert:"
      },
      nav: {
        github: "GitHub",
        installation: "インストール", 
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テストレポート"
      }
    },
    en: {
      title: "E2E Test Report (Phase 1)", 
      description: "Comprehensive End-to-End test results for falco-plugin-nginx - Foundation Phase",
      breadcrumb: "← Back to Test Page",
      htmlReportLink: "🔍 Open HTML Report in New Tab",
      metadata: {
        executionTime: "Execution Time",
        environment: "Environment",
        falcoVersion: "Falco Version",
        pluginVersion: "Plugin Version"
      },
      summary: {
        totalTests: "Total Tests",
        passed: "Passed",
        failed: "Failed",
        passRate: "Pass Rate"
      },
      filters: {
        all: "All"
      },
      testDetails: {
        scenario: "🎯 Test Scenario (Given/When/Then)",
        criteria: "✅ Success Criteria",
        actual: "📊 Actual Result",
        detectionSample: "🔍 Detection Sample",
        payload: "Payload:",
        decoded: "Decoded:",
        falcoAlert: "Falco Alert:"
      },
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog", 
        news: "News",
        quality: "Test Report"
      }
    }
  }

  const currentContent = content[language]

  // Category translations
  const categoryTranslations = {
    basic: {
      ja: { title: "基本機能テスト", description: "Falco とプラグインの基本動作確認" },
      en: { title: "Basic Function Tests", description: "Basic operation verification of Falco and plugins" }
    },
    rules: {
      ja: { title: "ルール検証テスト", description: "Nginxルールの構文と設定の検証" },
      en: { title: "Rule Validation Tests", description: "Nginx rule syntax and configuration verification" }
    },
    plugin_load: {
      ja: { title: "プラグインロードテスト", description: "プラグインの正常なロードと依存関係の確認" },
      en: { title: "Plugin Load Tests", description: "Plugin loading and dependency verification" }
    },
    event_detection: {
      ja: { title: "攻撃検知テスト", description: "実際の攻撃パターンの検知能力確認" },
      en: { title: "Attack Detection Tests", description: "Attack pattern detection capability verification" }
    }
  }

  // Test translations
  const testTranslations = {
    "BASIC_001": {
      ja: {
        title: "Falcoがインストールされていることを確認",
        scenario: {
          given: "セルフホストランナー環境",
          when: "falcoコマンドを実行",
          then: "コマンドが存在し実行可能"
        },
        criteria: "コマンド falco が実行可能 (exit=0)",
        actual: "成功: /usr/local/bin/falco"
      },
      en: {
        title: "Verify Falco is installed",
        scenario: {
          given: "Self-hosted runner environment",
          when: "Execute falco command",
          then: "Command exists and is executable"
        },
        criteria: "Command falco is executable (exit=0)",
        actual: "Success: /usr/local/bin/falco"
      }
    },
    "BASIC_002": {
      ja: {
        title: "Falcoバージョンの確認",
        scenario: {
          given: "Falcoがインストール済み",
          when: "falco --versionを実行",
          then: "バージョン情報が表示される"
        },
        criteria: "バージョン文字列が表示される (exit=0)",
        actual: "成功: Falco version: 0.41.3"
      },
      en: {
        title: "Verify Falco version",
        scenario: {
          given: "Falco installed",
          when: "Execute falco --version",
          then: "Version information is displayed"
        },
        criteria: "Version string is displayed (exit=0)",
        actual: "Success: Falco version: 0.41.3"
      }
    },
    "BASIC_003": {
      ja: {
        title: "nginxプラグインバイナリの存在確認",
        scenario: {
          given: "プラグインがデプロイ済み",
          when: "/usr/share/falco/plugins/libfa... ファイル確認",
          then: "ファイルが存在する"
        },
        criteria: "test -f が成功 (exit=0)",
        actual: "成功: ファイルが存在"
      },
      en: {
        title: "Verify nginx plugin binary exists",
        scenario: {
          given: "Plugin deployed",
          when: "Check /usr/share/falco/plugins/libfa... file",
          then: "File exists"
        },
        criteria: "test -f succeeds (exit=0)",
        actual: "Success: File exists"
      }
    },
    "BASIC_004": {
      ja: {
        title: "nginxルールファイルの存在確認",
        scenario: {
          given: "ルールがデプロイ済み",
          when: "/etc/falco/rules.d/nginx_rules... ファイル確認",
          then: "ファイルが存在する"
        },
        criteria: "test -f が成功 (exit=0)",
        actual: "成功: ファイルが存在"
      },
      en: {
        title: "Verify nginx rules file exists",
        scenario: {
          given: "Rules deployed",
          when: "Check /etc/falco/rules.d/nginx_rules... file",
          then: "File exists"
        },
        criteria: "test -f succeeds (exit=0)",
        actual: "Success: File exists"
      }
    },
    "BASIC_005": {
      ja: {
        title: "nginxプラグインがFalcoに登録されていることを確認",
        scenario: {
          given: "Falcoとプラグインが設定済み",
          when: "falco --list-pluginsを実行してnginx検索",
          then: "nginxプラグインがリストに含まれる"
        },
        criteria: "grep nginx が成功 (exit=0)",
        actual: "成功: nginx プラグインがリストに表示"
      },
      en: {
        title: "Verify nginx plugin is registered in Falco",
        scenario: {
          given: "Falco and plugin configured",
          when: "Execute falco --list-plugins and search for nginx",
          then: "nginx plugin is included in list"
        },
        criteria: "grep nginx succeeds (exit=0)",
        actual: "Success: nginx plugin displayed in list"
      }
    },
    "BASIC_NEG_001": {
      ja: {
        title: "[負のテスト] 存在しないプラグインが登録されていないことを確認",
        scenario: {
          given: "Falcoが起動可能",
          when: "falco --list-pluginsで架空のプラグインを検索",
          then: "見つからない（失敗する）"
        },
        criteria: "grep が失敗 (exit=1)",
        actual: "期待通り失敗: 架空のプラグインは見つからない"
      },
      en: {
        title: "[Negative Test] Verify non-existent plugin is not registered",
        scenario: {
          given: "Falco is startable",
          when: "Search for fictional plugin with falco --list-plugins",
          then: "Not found (fails)"
        },
        criteria: "grep fails (exit=1)",
        actual: "Failed as expected: Fictional plugin not found"
      }
    },
    "RULES_001": {
      ja: {
        title: "nginxルールのYAML構文検証",
        scenario: {
          given: "nginx_rules.yamlが存在",
          when: "falco --validateでルールを検証",
          then: "構文エラーがない"
        },
        criteria: "構文エラーがない (exit=0)",
        actual: "成功: /etc/falco/rules.d/nginx_rules.yaml: Ok"
      },
      en: {
        title: "Validate nginx rules YAML syntax",
        scenario: {
          given: "nginx_rules.yaml exists",
          when: "Validate rules with falco --validate",
          then: "No syntax errors"
        },
        criteria: "No syntax errors (exit=0)",
        actual: "Success: /etc/falco/rules.d/nginx_rules.yaml: Ok"
      }
    },
    "RULES_002": {
      ja: {
        title: "nginxルールの数を確認",
        scenario: {
          given: "nginx_rules.yamlが存在",
          when: "ルール定義の数をカウント",
          then: "1つ以上のルールが定義されている"
        },
        criteria: "1つ以上のルールが存在 (exit=0)",
        actual: "成功: 10ルール検出"
      },
      en: {
        title: "Verify nginx rule count",
        scenario: {
          given: "nginx_rules.yaml exists",
          when: "Count rule definitions",
          then: "One or more rules are defined"
        },
        criteria: "One or more rules exist (exit=0)",
        actual: "Success: 10 rules detected"
      }
    },
    "RULES_NEG_001": {
      ja: {
        title: "[負のテスト] 不正なYAMLルールが検証エラーになることを確認",
        scenario: {
          given: "不正なYAMLファイルを作成",
          when: "falco --validateで検証",
          then: "検証エラーになる"
        },
        criteria: "検証エラー (exit=1)",
        actual: "期待通り失敗: /tmp/e2e-test-reports/invalid_rules.yaml: Invalid"
      },
      en: {
        title: "[Negative Test] Verify invalid YAML rules cause validation error",
        scenario: {
          given: "Create invalid YAML file",
          when: "Validate with falco --validate",
          then: "Validation error occurs"
        },
        criteria: "Validation error (exit=1)",
        actual: "Failed as expected: /tmp/e2e-test-reports/invalid_rules.yaml: Invalid"
      }
    },
    "PLUGIN_LOAD_001": {
      ja: {
        title: "nginxプラグインが正常にロードされることを確認",
        scenario: {
          given: "プラグインバイナリが配置済み",
          when: "falco --list-pluginsでプラグインリストを確認",
          then: "nginxプラグインが正常にロードされる"
        },
        criteria: "nginxプラグインがリストに表示 (exit=0)",
        actual: "成功: Name: nginx"
      },
      en: {
        title: "Verify nginx plugin loads successfully",
        scenario: {
          given: "Plugin binary deployed",
          when: "Check plugin list with falco --list-plugins",
          then: "nginx plugin loads successfully"
        },
        criteria: "nginx plugin displayed in list (exit=0)",
        actual: "Success: Name: nginx"
      }
    },
    "PLUGIN_LOAD_002": {
      ja: {
        title: "プラグインの共有ライブラリ依存関係を確認",
        scenario: {
          given: "プラグインバイナリが存在",
          when: "lddで依存関係をチェック",
          then: "必要なライブラリがリンクされている"
        },
        criteria: "必要なライブラリがリンク済み (exit=0)",
        actual: "成功: linux-vdso.so.1, libresolv.so.2, libpthread.so.0"
      },
      en: {
        title: "Verify plugin shared library dependencies",
        scenario: {
          given: "Plugin binary exists",
          when: "Check dependencies with ldd",
          then: "Required libraries are linked"
        },
        criteria: "Required libraries linked (exit=0)",
        actual: "Success: linux-vdso.so.1, libresolv.so.2, libpthread.so.0"
      }
    },
    "PLUGIN_LOAD_NEG_001": {
      ja: {
        title: "[負のテスト] 不正なプラグイン設定が失敗することを確認",
        scenario: {
          given: "不正なJSON設定を含むfalco.yaml",
          when: "falco --dry-runで検証",
          then: "設定エラーで失敗する"
        },
        criteria: "設定エラー (exit=1)",
        actual: "期待通り失敗: Runtime error: error in plugin nginx"
      },
      en: {
        title: "[Negative Test] Verify invalid plugin configuration fails",
        scenario: {
          given: "falco.yaml with invalid JSON configuration",
          when: "Validate with falco --dry-run",
          then: "Fails with configuration error"
        },
        criteria: "Configuration error (exit=1)",
        actual: "Failed as expected: Runtime error: error in plugin nginx"
      }
    },
    "EVENT_DETECTION_001": {
      ja: {
        title: "SQLインジェクション攻撃を検知できること",
        scenario: {
          given: "Falco+nginxプラグイン+検知ルールが有効",
          when: "SQLiパターン（' OR '1'='1）を含むnginxログを送信",
          then: "[NGINX SQLi]アラートが発火する"
        },
        criteria: "'NGINX SQLi'アラートが発火 (1件以上)",
        actual: "成功: 5件のアラートを検知"
      },
      en: {
        title: "Detect SQL injection attack",
        scenario: {
          given: "Falco+nginx plugin+detection rules enabled",
          when: "Send nginx log with SQLi pattern (' OR '1'='1)",
          then: "[NGINX SQLi] alert fires"
        },
        criteria: "'NGINX SQLi' alert fires (1 or more)",
        actual: "Success: 5 alerts detected"
      }
    },
    "EVENT_DETECTION_002": {
      ja: {
        title: "XSS（クロスサイトスクリプティング）攻撃を検知できること",
        scenario: {
          given: "Falco+nginxプラグイン+検知ルールが有効",
          when: "XSSパターン（<script>タグ）を含むnginxログを送信",
          then: "[NGINX XSS]アラートが発火する"
        },
        criteria: "'NGINX XSS'アラートが発火 (1件以上)",
        actual: "成功: 7件のアラートを検知"
      },
      en: {
        title: "Detect XSS (Cross-Site Scripting) attack",
        scenario: {
          given: "Falco+nginx plugin+detection rules enabled",
          when: "Send nginx log with XSS pattern (<script> tag)",
          then: "[NGINX XSS] alert fires"
        },
        criteria: "'NGINX XSS' alert fires (1 or more)",
        actual: "Success: 7 alerts detected"
      }
    }
  }

  // Test report data structure based on the actual E2E results
  const reportData = {
    metadata: {
      timestamp: "2025-08-30T05:45:03Z",
      environment: "github-runner-deployment-fixed-mgv7s-q4jvs",
      falcoVersion: "0.41.3",
      pluginVersion: "v1.3.0",
      testDuration: "4.2s"
    },
    summary: {
      totalTests: 14,
      passedTests: 14,
      failedTests: 0,
      passRate: 100
    },
    categories: [
      {
        id: "basic",
        name: "BASIC",
        tests: [
          {
            id: "BASIC_001",
            title: "Falcoがインストールされていることを確認",
            status: "PASS",
            duration: "6ms",
            scenario: {
              given: "セルフホストランナー環境",
              when: "falcoコマンドを実行",
              then: "コマンドが存在し実行可能"
            },
            criteria: "コマンド falco が実行可能 (exit=0)",
            actual: "成功: /usr/local/bin/falco"
          },
          {
            id: "BASIC_002", 
            title: "Falcoバージョンの確認",
            status: "PASS",
            duration: "13ms",
            scenario: {
              given: "Falcoがインストール済み",
              when: "falco --versionを実行",
              then: "バージョン情報が表示される"
            },
            criteria: "バージョン文字列が表示される (exit=0)",
            actual: "成功: Falco version: 0.41.3"
          },
          {
            id: "BASIC_003",
            title: "nginxプラグインバイナリの存在確認",
            status: "PASS", 
            duration: "11ms",
            scenario: {
              given: "プラグインがデプロイ済み",
              when: "/usr/share/falco/plugins/libfa... ファイル確認",
              then: "ファイルが存在する"
            },
            criteria: "test -f が成功 (exit=0)",
            actual: "成功: ファイルが存在"
          },
          {
            id: "BASIC_004",
            title: "nginxルールファイルの存在確認", 
            status: "PASS",
            duration: "7ms",
            scenario: {
              given: "ルールがデプロイ済み",
              when: "/etc/falco/rules.d/nginx_rules... ファイル確認",
              then: "ファイルが存在する"
            },
            criteria: "test -f が成功 (exit=0)",
            actual: "成功: ファイルが存在"
          },
          {
            id: "BASIC_005",
            title: "nginxプラグインがFalcoに登録されていることを確認",
            status: "PASS",
            duration: "32ms", 
            scenario: {
              given: "Falcoとプラグインが設定済み",
              when: "falco --list-pluginsを実行してnginx検索",
              then: "nginxプラグインがリストに含まれる"
            },
            criteria: "grep nginx が成功 (exit=0)",
            actual: "成功: nginx プラグインがリストに表示"
          },
          {
            id: "BASIC_NEG_001",
            title: "[負のテスト] 存在しないプラグインが登録されていないことを確認",
            status: "NEG",
            duration: "16ms",
            scenario: {
              given: "Falcoが起動可能",
              when: "falco --list-pluginsで架空のプラグインを検索",
              then: "見つからない（失敗する）"
            },
            criteria: "grep が失敗 (exit=1)",
            actual: "期待通り失敗: 架空のプラグインは見つからない"
          }
        ]
      },
      {
        id: "rules",
        name: "RULES",
        title: "ルール検証テスト",
        description: "Nginxルールの構文と設定の検証",
        tests: [
          {
            id: "RULES_001",
            title: "nginxルールのYAML構文検証",
            status: "PASS",
            duration: "28ms",
            scenario: {
              given: "nginx_rules.yamlが存在",
              when: "falco --validateでルールを検証",
              then: "構文エラーがない"
            },
            criteria: "構文エラーがない (exit=0)",
            actual: "成功: /etc/falco/rules.d/nginx_rules.yaml: Ok"
          },
          {
            id: "RULES_002",
            title: "nginxルールの数を確認",
            status: "PASS",
            duration: "8ms",
            scenario: {
              given: "nginx_rules.yamlが存在",
              when: "ルール定義の数をカウント",
              then: "1つ以上のルールが定義されている"
            },
            criteria: "1つ以上のルールが存在 (exit=0)",
            actual: "成功: 10ルール検出"
          },
          {
            id: "RULES_NEG_001",
            title: "[負のテスト] 不正なYAMLルールが検証エラーになることを確認",
            status: "NEG",
            duration: "18ms",
            scenario: {
              given: "不正なYAMLファイルを作成",
              when: "falco --validateで検証",
              then: "検証エラーになる"
            },
            criteria: "検証エラー (exit=1)",
            actual: "期待通り失敗: /tmp/e2e-test-reports/invalid_rules.yaml: Invalid"
          }
        ]
      },
      {
        id: "plugin_load",
        name: "PLUGIN_LOAD",
        title: "プラグインロードテスト",
        description: "プラグインの正常なロードと依存関係の確認",
        tests: [
          {
            id: "PLUGIN_LOAD_001",
            title: "nginxプラグインが正常にロードされることを確認",
            status: "PASS",
            duration: "16ms",
            scenario: {
              given: "プラグインバイナリが配置済み",
              when: "falco --list-pluginsでプラグインリストを確認",
              then: "nginxプラグインが正常にロードされる"
            },
            criteria: "nginxプラグインがリストに表示 (exit=0)",
            actual: "成功: Name: nginx"
          },
          {
            id: "PLUGIN_LOAD_002",
            title: "プラグインの共有ライブラリ依存関係を確認",
            status: "PASS",
            duration: "12ms",
            scenario: {
              given: "プラグインバイナリが存在",
              when: "lddで依存関係をチェック",
              then: "必要なライブラリがリンクされている"
            },
            criteria: "必要なライブラリがリンク済み (exit=0)",
            actual: "成功: linux-vdso.so.1, libresolv.so.2, libpthread.so.0"
          },
          {
            id: "PLUGIN_LOAD_NEG_001",
            title: "[負のテスト] 不正なプラグイン設定が失敗することを確認",
            status: "NEG",
            duration: "19ms",
            scenario: {
              given: "不正なJSON設定を含むfalco.yaml",
              when: "falco --dry-runで検証",
              then: "設定エラーで失敗する"
            },
            criteria: "設定エラー (exit=1)",
            actual: "期待通り失敗: Runtime error: error in plugin nginx"
          }
        ]
      },
      {
        id: "event_detection",
        name: "EVENT_DETECTION", 
        title: "攻撃検知テスト",
        description: "実際の攻撃パターンの検知能力確認",
        tests: [
          {
            id: "EVENT_DETECTION_001",
            title: "SQLインジェクション攻撃を検知できること",
            status: "PASS",
            duration: "1034ms",
            scenario: {
              given: "Falco+nginxプラグイン+検知ルールが有効",
              when: "SQLiパターン（' OR '1'='1）を含むnginxログを送信",
              then: "[NGINX SQLi]アラートが発火する"
            },
            criteria: "'NGINX SQLi'アラートが発火 (1件以上)",
            actual: "成功: 5件のアラートを検知",
            detectionSample: {
              payload: "/users?id=1' OR '1'='1",
              decoded: "/users?id=1' OR '1'='1",
              falcoAlert: {
                timestamp: "07:31:00.000000000",
                priority: "Critical",
                rule: "NGINX SQLi Attempt", 
                output: "ip=192.0.2.1 method=GET path=/users qs=id=1%27%20OR%20%271%27%3D%271 ua=curl/7.68.0 status=200"
              }
            }
          },
          {
            id: "EVENT_DETECTION_002",
            title: "XSS（クロスサイトスクリプティング）攻撃を検知できること",
            status: "PASS", 
            duration: "2533ms",
            scenario: {
              given: "Falco+nginxプラグイン+検知ルールが有効",
              when: "XSSパターン（<script>タグ）を含むnginxログを送信",
              then: "[NGINX XSS]アラートが発火する"
            },
            criteria: "'NGINX XSS'アラートが発火 (1件以上)",
            actual: "成功: 7件のアラートを検知",
            detectionSample: {
              payload: "/search?q=%3Cscript%3Ealert(1)%3C/script%3E",
              decoded: "/search?q=<script>alert(1)</script>",
              falcoAlert: {
                timestamp: "07:32:00.000000000",
                priority: "Warning", 
                rule: "NGINX XSS Attempt",
                output: "ip=192.0.2.10 method=GET path=/search qs=q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E ua=Mozilla/5.0 status=200"
              }
            }
          }
        ]
      }
    ]
  }

  const filteredCategories = selectedCategory === 'all' 
    ? reportData.categories 
    : reportData.categories.filter(cat => cat.id === selectedCategory)

  const getStatusIcon = (status) => {
    switch(status) {
      case 'PASS': return '✅'
      case 'FAIL': return '❌'
      case 'NEG': return '🔄'
      default: return '⚪'
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'PASS': return 'status-pass'
      case 'FAIL': return 'status-fail'
      case 'NEG': return 'status-neg'
      default: return 'status-default'
    }
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    if (language === 'ja') {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      })
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      })
    }
  }

  return (
    <>
      <Head>
        <title>{currentContent.title} - FALCOYA</title>
        <meta name="description" content={currentContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar activePage="quality" />

      <main className="report-container">
        <div className="container">
          {/* Header */}
          <div className="report-header">
            <div className="breadcrumb">
              <Link href="/quality">{currentContent.breadcrumb}</Link>
            </div>
            <h1>📋 {currentContent.title}</h1>
            <p>{currentContent.description}</p>
            <div style={{ marginTop: '15px' }}>
              <a 
                href="/reports/e2e-complete-results-17340066428/index.html" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: '#27ae60',
                  color: 'white',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                {currentContent.htmlReportLink}
              </a>
            </div>
            
            {/* Metadata */}
            <div className="metadata-grid">
              <div className="metadata-item">
                <span className="label">{currentContent.metadata.executionTime}:</span>
                <span className="value">{formatDate(reportData.metadata.timestamp)}</span>
              </div>
              <div className="metadata-item">
                <span className="label">{currentContent.metadata.environment}:</span>
                <span className="value">{reportData.metadata.environment.split('-').slice(0, 3).join('-')}</span>
              </div>
              <div className="metadata-item">
                <span className="label">{currentContent.metadata.falcoVersion}:</span>
                <span className="value">{reportData.metadata.falcoVersion}</span>
              </div>
              <div className="metadata-item">
                <span className="label">{currentContent.metadata.pluginVersion}:</span>
                <span className="value">v1.3.0</span>
              </div>
            </div>
          </div>

          {/* Summary Dashboard */}
          <div className="summary-dashboard">
            <div className="summary-card total">
              <div className="summary-number">{reportData.summary.totalTests}</div>
              <div className="summary-label">{currentContent.summary.totalTests}</div>
            </div>
            <div className="summary-card success">
              <div className="summary-number">{reportData.summary.passedTests}</div>
              <div className="summary-label">{currentContent.summary.passed}</div>
            </div>
            <div className="summary-card fail">
              <div className="summary-number">{reportData.summary.failedTests}</div>
              <div className="summary-label">{currentContent.summary.failed}</div>
            </div>
            <div className="summary-card rate">
              <div className="summary-number">{reportData.summary.passRate}%</div>
              <div className="summary-label">{currentContent.summary.passRate}</div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {currentContent.filters.all}
            </button>
            {reportData.categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Test Results */}
          <div className="test-results">
            {filteredCategories.map(category => (
              <div key={category.id} className="category-section">
                <h2 className="category-title">
                  <span className="category-badge">{category.name}</span>
                  {categoryTranslations[category.id] ? categoryTranslations[category.id][language].title : category.title}
                </h2>
                <p className="category-description">{categoryTranslations[category.id] ? categoryTranslations[category.id][language].description : category.description}</p>
                
                <div className="tests-list">
                  {category.tests.map(test => (
                    <div key={test.id} className={`test-item ${getStatusColor(test.status)}`}>
                      <div className="test-header" onClick={() => toggleSection(test.id)}>
                        <div className="test-info">
                          <span className="test-status">{getStatusIcon(test.status)}</span>
                          <span className="test-id">{test.id}</span>
                          <span className="test-title">{testTranslations[test.id] ? testTranslations[test.id][language].title : test.title}</span>
                        </div>
                        <div className="test-meta">
                          <span className="test-duration">{test.duration}</span>
                          <span className="expand-icon">
                            {expandedSections.has(test.id) ? '▼' : '▶'}
                          </span>
                        </div>
                      </div>
                      
                      {expandedSections.has(test.id) && (
                        <div className="test-details">
                          <div className="scenario">
                            <h4>{currentContent.testDetails.scenario}</h4>
                            <div className="scenario-item">
                              <strong>Given:</strong> {testTranslations[test.id] ? testTranslations[test.id][language].scenario.given : test.scenario.given}
                            </div>
                            <div className="scenario-item">
                              <strong>When:</strong> {testTranslations[test.id] ? testTranslations[test.id][language].scenario.when : test.scenario.when}
                            </div>
                            <div className="scenario-item">
                              <strong>Then:</strong> {testTranslations[test.id] ? testTranslations[test.id][language].scenario.then : test.scenario.then}
                            </div>
                          </div>
                          
                          <div className="criteria">
                            <h4>{currentContent.testDetails.criteria}</h4>
                            <div className="criteria-item">{testTranslations[test.id] ? testTranslations[test.id][language].criteria : test.criteria}</div>
                          </div>
                          
                          <div className="actual">
                            <h4>{currentContent.testDetails.actual}</h4>
                            <div className="actual-item">{testTranslations[test.id] ? testTranslations[test.id][language].actual : test.actual}</div>
                          </div>

                          {test.detectionSample && (
                            <div className="detection-sample">
                              <h4>{currentContent.testDetails.detectionSample}</h4>
                              <div className="sample-payload">
                                <strong>{currentContent.testDetails.payload}</strong>
                                <code>{test.detectionSample.payload}</code>
                              </div>
                              <div className="sample-decoded">
                                <strong>{currentContent.testDetails.decoded}</strong>
                                <code>{test.detectionSample.decoded}</code>
                              </div>
                              <div className="sample-alert">
                                <strong>{currentContent.testDetails.falcoAlert}</strong>
                                <div className="alert-details">
                                  <div className="alert-line">
                                    <span className="alert-timestamp">{test.detectionSample.falcoAlert.timestamp}</span>
                                    <span className={`alert-priority ${test.detectionSample.falcoAlert.priority.toLowerCase()}`}>
                                      {test.detectionSample.falcoAlert.priority}
                                    </span>
                                    <span className="alert-rule">[{test.detectionSample.falcoAlert.rule}]</span>
                                  </div>
                                  <div className="alert-output">
                                    {test.detectionSample.falcoAlert.output}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>
                {language === 'ja' 
                  ? 'Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン'
                  : 'Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications'
                }
              </p>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'リンク' : 'Links'}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">
                  {language === 'ja' ? 'GitHubリポジトリ' : 'GitHub Repository'}
                </a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">
                  {language === 'ja' ? 'ドキュメント' : 'Documentation'}
                </a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'ライセンス' : 'License'}</h4>
              <p>Apache License 2.0</p>
              <p>{language === 'ja' ? 'オープンソースソフトウェア' : 'Open Source Software'}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .report-container {
          min-height: 100vh;
          padding-top: 100px;
          background: #f8f9fa;
        }

        .report-header {
          background: white;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .breadcrumb a {
          color: #6c757d;
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 20px;
          display: inline-block;
        }

        .breadcrumb a:hover {
          color: #495057;
        }

        .report-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .report-header p {
          color: #6c757d;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .metadata-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metadata-item .label {
          font-size: 0.9rem;
          color: #6c757d;
          font-weight: 500;
        }

        .metadata-item .value {
          font-size: 1rem;
          color: #2c3e50;
          font-weight: 600;
        }

        .summary-dashboard {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .summary-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .summary-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .summary-card.total .summary-number { color: #3498db; }
        .summary-card.success .summary-number { color: #27ae60; }
        .summary-card.fail .summary-number { color: #e74c3c; }
        .summary-card.rate .summary-number { color: #f39c12; }

        .summary-label {
          font-size: 0.9rem;
          color: #6c757d;
          font-weight: 500;
        }

        .category-filters {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #dee2e6;
          border-radius: 25px;
          background: white;
          color: #495057;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: #3498db;
          color: #3498db;
        }

        .filter-btn.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }

        .category-section {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .category-title {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .category-badge {
          background: #e9ecef;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #495057;
        }

        .category-description {
          color: #6c757d;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .test-item {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          margin-bottom: 15px;
          overflow: hidden;
        }

        .test-item.status-pass { border-left: 4px solid #27ae60; }
        .test-item.status-fail { border-left: 4px solid #e74c3c; }
        .test-item.status-neg { border-left: 4px solid #f39c12; }

        .test-header {
          padding: 15px 20px;
          background: #f8f9fa;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.2s ease;
        }

        .test-header:hover {
          background: #e9ecef;
        }

        .test-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .test-status {
          font-size: 1.2rem;
        }

        .test-id {
          font-family: 'Courier New', monospace;
          background: #e9ecef;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          color: #495057;
        }

        .test-title {
          font-weight: 500;
          color: #2c3e50;
        }

        .test-meta {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .test-duration {
          font-size: 0.85rem;
          color: #6c757d;
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .expand-icon {
          color: #6c757d;
          font-size: 0.8rem;
        }

        .test-details {
          padding: 25px;
          background: white;
          border-top: 1px solid #dee2e6;
        }

        .test-details h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 15px;
          border-bottom: 1px solid #dee2e6;
          padding-bottom: 8px;
        }

        .scenario, .criteria, .actual, .detection-sample {
          margin-bottom: 25px;
        }

        .scenario-item, .criteria-item, .actual-item {
          padding: 10px 15px;
          background: #f8f9fa;
          border-radius: 6px;
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .scenario-item strong {
          color: #495057;
        }

        .detection-sample {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
        }

        .sample-payload, .sample-decoded, .sample-alert {
          margin-bottom: 15px;
        }

        .sample-payload strong, .sample-decoded strong, .sample-alert strong {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        .sample-payload code, .sample-decoded code {
          display: block;
          background: white;
          padding: 10px;
          border-radius: 4px;
          border-left: 3px solid #3498db;
          font-family: 'Courier New', monospace;
          overflow-x: auto;
        }

        .alert-details {
          background: white;
          border-radius: 4px;
          padding: 15px;
        }

        .alert-line {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .alert-timestamp {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .alert-priority {
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .alert-priority.critical {
          background: #e74c3c;
          color: white;
        }

        .alert-priority.warning {
          background: #f39c12;
          color: white;
        }

        .alert-rule {
          font-weight: 600;
          color: #2c3e50;
        }

        .alert-output {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #495057;
          line-height: 1.5;
          word-break: break-all;
        }

        .nav-menu a.active,
        .mobile-nav-menu a.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .report-container {
            padding-top: 90px;
          }

          .report-header {
            padding: 25px;
          }

          .report-header h1 {
            font-size: 2rem;
          }

          .metadata-grid {
            grid-template-columns: 1fr;
          }

          .summary-dashboard {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-title {
            font-size: 1.4rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .test-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .test-info {
            flex-wrap: wrap;
          }

          .alert-line {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </>
  )
}
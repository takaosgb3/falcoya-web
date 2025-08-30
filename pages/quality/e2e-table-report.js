import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/languageUtils'

export default function E2ETableReport() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // E2E Test Report Content
  const content = {
    ja: {
      title: "E2E テストレポート - テーブル形式",
      description: "falco-plugin-nginx の包括的なEnd-to-Endテスト結果",
      nav: {
        github: "GitHub",
        installation: "インストール", 
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テスト"
      }
    },
    en: {
      title: "E2E Test Report - Table Format", 
      description: "Comprehensive End-to-End test results for falco-plugin-nginx",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog", 
        news: "News",
        quality: "Testing"
      }
    }
  }

  const currentContent = content[language]

  // Test data organized in table format
  const testCategories = [
    {
      name: "BASIC",
      title: "基本機能テスト",
      tests: [
        {
          no: 1,
          id: "BASIC_001",
          title: "Falcoがインストールされていることを確認",
          scenario: "G: セルフホストランナー環境 W: falcoコマンドを実行 T: コマンドが存在し実行可能",
          criteria: "exit code = 0",
          actual: "exit:0",
          duration: "6ms",
          status: "✅ PASS"
        },
        {
          no: 2,
          id: "BASIC_002",
          title: "Falcoバージョンの確認",
          scenario: "G: Falcoがインストール済み W: falco --versionを実行 T: バージョン情報が表示される",
          criteria: "exit code = 0 かつ バージョン文字列を含む",
          actual: "exit:0",
          duration: "13ms",
          status: "✅ PASS"
        },
        {
          no: 3,
          id: "BASIC_003",
          title: "nginxプラグインバイナリの存在確認",
          scenario: "G: プラグインがデプロイ済み W: /usr/share/falco/plugins/libfa... ファイル確認 T: ファイルが存在する",
          criteria: "test -f が成功",
          actual: "exit:0",
          duration: "11ms",
          status: "✅ PASS"
        },
        {
          no: 4,
          id: "BASIC_004",
          title: "nginxルールファイルの存在確認",
          scenario: "G: ルールがデプロイ済み W: /etc/falco/rules.d/nginx_rules... ファイル確認 T: ファイルが存在する",
          criteria: "test -f が成功",
          actual: "exit:0",
          duration: "7ms",
          status: "✅ PASS"
        },
        {
          no: 5,
          id: "BASIC_005",
          title: "nginxプラグインがFalcoに登録されていることを確認",
          scenario: "G: Falcoとプラグインが設定済み W: falco --list-pluginsを実行してnginx検索 T: nginxプラグインがリストに含まれる",
          criteria: "grep nginx が成功",
          actual: "exit:0",
          duration: "32ms",
          status: "✅ PASS"
        },
        {
          no: 6,
          id: "BASIC_NEG_001",
          title: "[負のテスト] 存在しないプラグインが登録されていないことを確認",
          scenario: "G: Falcoが起動可能 W: falco --list-pluginsで架空のプラグインを検索 T: 見つからない（失敗する）",
          criteria: "exit code = 1（期待通りの失敗）",
          actual: "Failed as expected",
          duration: "16ms",
          status: "✅ NEG"
        }
      ]
    },
    {
      name: "RULES",
      title: "ルール検証テスト",
      tests: [
        {
          no: 7,
          id: "RULES_001",
          title: "nginxルールのYAML構文検証",
          scenario: "G: nginx_rules.yamlが存在 W: falco --validateでルールを検証 T: 構文エラーがない",
          criteria: "exit code = 0",
          actual: "exit:0",
          duration: "28ms",
          status: "✅ PASS"
        },
        {
          no: 8,
          id: "RULES_002",
          title: "nginxルールの数を確認",
          scenario: "G: nginx_rules.yamlが存在 W: ルール定義の数をカウント T: 1つ以上のルールが定義されている",
          criteria: "grep '^- rule:' | 数値が返る",
          actual: "exit:0",
          duration: "8ms",
          status: "✅ PASS"
        },
        {
          no: 9,
          id: "RULES_NEG_001",
          title: "[負のテスト] 不正なYAMLルールが検証エラーになることを確認",
          scenario: "G: 不正なYAMLファイルを作成 W: falco --validateで検証 T: 検証エラーになる",
          criteria: "exit code = 1（期待通りの失敗）",
          actual: "Failed as expected",
          duration: "18ms",
          status: "✅ NEG"
        }
      ]
    },
    {
      name: "PLUGIN_LOAD",
      title: "プラグインロードテスト",
      tests: [
        {
          no: 10,
          id: "PLUGIN_LOAD_001",
          title: "nginxプラグインが正常にロードされることを確認",
          scenario: "G: プラグインバイナリが配置済み W: falco --list-pluginsでプラグインリストを確認 T: nginxプラグインが正常にロードされる",
          criteria: "nginxプラグインがリストに含まれる",
          actual: "exit:0",
          duration: "16ms",
          status: "✅ PASS"
        },
        {
          no: 11,
          id: "PLUGIN_LOAD_002",
          title: "プラグインの共有ライブラリ依存関係を確認",
          scenario: "G: プラグインバイナリが存在 W: lddで依存関係をチェック T: 必要なライブラリがリンクされている",
          criteria: "exit code = 0",
          actual: "exit:0",
          duration: "12ms",
          status: "✅ PASS"
        },
        {
          no: 12,
          id: "PLUGIN_LOAD_NEG_001",
          title: "[負のテスト] 不正なプラグイン設定が失敗することを確認",
          scenario: "G: 不正なJSON設定を含むfalco.yaml W: falco --dry-runで検証 T: 設定エラーで失敗する",
          criteria: "exit code = 1（期待通りの失敗）",
          actual: "Failed as expected",
          duration: "19ms",
          status: "✅ NEG"
        }
      ]
    },
    {
      name: "EVENT_DETECTION",
      title: "攻撃検知テスト",
      tests: [
        {
          no: 13,
          id: "EVENT_DETECTION_001",
          title: "SQLインジェクション攻撃を検知できること",
          scenario: "G: Falco+nginxプラグイン+検知ルールが有効 W: SQLiパターン（' OR '1'='1）を含むnginxログを送信 T: [NGINX SQLi]アラートが発火する",
          criteria: "falco.logに'NGINX SQLi'を含むアラートが1件以上",
          actual: "Detected: 5 alerts",
          duration: "1034ms",
          status: "✅ PASS"
        },
        {
          no: 14,
          id: "EVENT_DETECTION_002",
          title: "XSS（クロスサイトスクリプティング）攻撃を検知できること",
          scenario: "G: Falco+nginxプラグイン+検知ルールが有効 W: XSSパターン（<script>タグ）を含むnginxログを送信 T: [NGINX XSS]アラートが発火する",
          criteria: "falco.logに'NGINX XSS'を含むアラートが1件以上",
          actual: "Detected: 7 alerts",
          duration: "2533ms",
          status: "✅ PASS"
        }
      ]
    }
  ]

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

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{currentContent.title} - FALCOYA</title>
        <meta name="description" content={currentContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
                <span>FALCOYA</span>
              </a>
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <ul className="nav-menu desktop-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">{currentContent.nav.github}</a></li>
            <li><Link href="/#installation">{currentContent.nav.installation}</Link></li>
            <li><Link href="/#detection">{currentContent.nav.detection}</Link></li>
            <li><Link href="/blog">{currentContent.nav.blog}</Link></li>
            <li><Link href="/news">{currentContent.nav.news}</Link></li>
            <li><Link href="/quality" className="active">{currentContent.nav.quality}</Link></li>
          </ul>
          
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => setLanguage('ja')}
              >
                日本語
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
        
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.github}</a></li>
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)} className="active">{currentContent.nav.quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      <main className="report-container">
        <div className="container">
          {/* Header */}
          <div className="report-header">
            <div className="breadcrumb">
              <Link href="/quality">← テストページに戻る</Link>
            </div>
            <h1>📋 {currentContent.title}</h1>
            <p>{currentContent.description}</p>
            
            {/* Metadata */}
            <div className="metadata-grid">
              <div className="metadata-item">
                <span className="label">実行日時:</span>
                <span className="value">{formatDate("2025-08-30T05:45:03Z")}</span>
              </div>
              <div className="metadata-item">
                <span className="label">環境:</span>
                <span className="value">github-runner</span>
              </div>
              <div className="metadata-item">
                <span className="label">Falco版:</span>
                <span className="value">0.41.3</span>
              </div>
              <div className="metadata-item">
                <span className="label">プラグインバージョン:</span>
                <span className="value">v1.3.0</span>
              </div>
            </div>
          </div>

          {/* Test Tables */}
          {testCategories.map((category, catIndex) => (
            <div key={catIndex} className="test-category">
              <h2 className="category-header">
                <span className="category-badge">{category.name}</span>
                {category.title}
              </h2>
              
              <div className="table-container">
                <table className="test-table">
                  <thead>
                    <tr>
                      <th width="3%">No.</th>
                      <th width="10%">テストID</th>
                      <th width="25%">タイトル</th>
                      <th width="25%">シナリオ (G/W/T)</th>
                      <th width="15%">成功条件</th>
                      <th width="12%">実際の結果</th>
                      <th width="5%">実行時間</th>
                      <th width="5%">ステータス</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.tests.map((test, index) => (
                      <tr key={index}>
                        <td className="center">{test.no}</td>
                        <td className="test-id">{test.id}</td>
                        <td className="test-title">{test.title}</td>
                        <td className="scenario">{test.scenario}</td>
                        <td className="criteria">{test.criteria}</td>
                        <td className="actual">{test.actual}</td>
                        <td className="duration">{test.duration}</td>
                        <td className="status">{test.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Footer with links */}
          <div className="report-footer">
            <a 
              href="/reports/e2e-complete-results-17340066428/index.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="html-report-link"
            >
              🔍 完全なHTMLレポートを表示
            </a>
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

        .test-category {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .category-header {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 25px;
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

        .table-container {
          overflow-x: auto;
        }

        .test-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }

        .test-table thead {
          background: #f8f9fa;
        }

        .test-table th {
          padding: 12px 8px;
          text-align: left;
          font-weight: 600;
          color: #495057;
          border-bottom: 2px solid #dee2e6;
        }

        .test-table tbody tr {
          border-bottom: 1px solid #dee2e6;
        }

        .test-table tbody tr:hover {
          background: #f8f9fa;
        }

        .test-table td {
          padding: 10px 8px;
          vertical-align: top;
        }

        .test-table .center {
          text-align: center;
        }

        .test-table .test-id {
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #495057;
        }

        .test-table .test-title {
          font-weight: 500;
          color: #2c3e50;
        }

        .test-table .scenario {
          font-size: 0.85rem;
          color: #6c757d;
          line-height: 1.4;
        }

        .test-table .criteria {
          font-size: 0.85rem;
          color: #6c757d;
        }

        .test-table .actual {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #495057;
        }

        .test-table .duration {
          text-align: center;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #6c757d;
        }

        .test-table .status {
          text-align: center;
          font-weight: 600;
          white-space: nowrap;
        }

        .report-footer {
          text-align: center;
          padding: 30px;
        }

        .html-report-link {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
          color: white;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .html-report-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
        }

        .nav-menu a.active,
        .mobile-nav-menu a.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 1200px) {
          .test-table {
            font-size: 0.8rem;
          }

          .test-table th,
          .test-table td {
            padding: 8px 6px;
          }
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

          .test-category {
            padding: 20px;
          }

          .category-header {
            font-size: 1.4rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .test-table {
            font-size: 0.7rem;
          }

          .test-table th,
          .test-table td {
            padding: 6px 4px;
          }
        }
      `}</style>
    </>
  )
}
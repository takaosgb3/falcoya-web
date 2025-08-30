import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/languageUtils'

export default function E2EReport() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      title: "E2E テストレポート",
      description: "falco-plugin-nginx の包括的なEnd-to-Endテスト結果",
      nav: {
        github: "GitHub",
        installation: "インストール", 
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "品質"
      }
    },
    en: {
      title: "E2E Test Report", 
      description: "Comprehensive End-to-End test results for falco-plugin-nginx",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog", 
        news: "News",
        quality: "Quality"
      }
    }
  }

  const currentContent = content[language]

  // Test report data structure based on the actual E2E results
  const reportData = {
    metadata: {
      timestamp: "2025-08-30T05:45:03Z",
      environment: "github-runner-deployment-fixed-mgv7s-q4jvs",
      falcoVersion: "0.41.3",
      pluginSha: "90349251",
      testDuration: "4.2s"
    },
    summary: {
      totalTests: 9,
      passedTests: 9,
      failedTests: 0,
      passRate: 100
    },
    categories: [
      {
        id: "basic",
        name: "BASIC",
        title: "基本機能テスト",
        description: "Falco とプラグインの基本動作確認",
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
            criteria: "exit code = 0",
            actual: "exit:0"
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
            criteria: "exit code = 0 かつ バージョン文字列を含む",
            actual: "exit:0"
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
            criteria: "test -f が成功",
            actual: "exit:0"
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
            criteria: "test -f が成功",
            actual: "exit:0"
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
            criteria: "grep nginx が成功",
            actual: "exit:0"
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
            criteria: "exit code = 1（期待通りの失敗）",
            actual: "Failed as expected"
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
            criteria: "falco.logに'NGINX SQLi'を含むアラートが1件以上",
            actual: "Detected: 5 alerts",
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
            criteria: "falco.logに'NGINX XSS'を含むアラートが1件以上",
            actual: "Detected: 7 alerts",
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
              <Link href="/quality">← 品質保証に戻る</Link>
            </div>
            <h1>📋 {currentContent.title}</h1>
            <p>{currentContent.description}</p>
            
            {/* Metadata */}
            <div className="metadata-grid">
              <div className="metadata-item">
                <span className="label">実行日時:</span>
                <span className="value">{formatDate(reportData.metadata.timestamp)}</span>
              </div>
              <div className="metadata-item">
                <span className="label">環境:</span>
                <span className="value">{reportData.metadata.environment.split('-').slice(0, 3).join('-')}</span>
              </div>
              <div className="metadata-item">
                <span className="label">Falco版:</span>
                <span className="value">{reportData.metadata.falcoVersion}</span>
              </div>
              <div className="metadata-item">
                <span className="label">Plugin SHA:</span>
                <span className="value">{reportData.metadata.pluginSha}</span>
              </div>
            </div>
          </div>

          {/* Summary Dashboard */}
          <div className="summary-dashboard">
            <div className="summary-card total">
              <div className="summary-number">{reportData.summary.totalTests}</div>
              <div className="summary-label">総テスト数</div>
            </div>
            <div className="summary-card success">
              <div className="summary-number">{reportData.summary.passedTests}</div>
              <div className="summary-label">成功</div>
            </div>
            <div className="summary-card fail">
              <div className="summary-number">{reportData.summary.failedTests}</div>
              <div className="summary-label">失敗</div>
            </div>
            <div className="summary-card rate">
              <div className="summary-number">{reportData.summary.passRate}%</div>
              <div className="summary-label">成功率</div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              すべて
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
                  {category.title}
                </h2>
                <p className="category-description">{category.description}</p>
                
                <div className="tests-list">
                  {category.tests.map(test => (
                    <div key={test.id} className={`test-item ${getStatusColor(test.status)}`}>
                      <div className="test-header" onClick={() => toggleSection(test.id)}>
                        <div className="test-info">
                          <span className="test-status">{getStatusIcon(test.status)}</span>
                          <span className="test-id">{test.id}</span>
                          <span className="test-title">{test.title}</span>
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
                            <h4>🎯 テストシナリオ (Given/When/Then)</h4>
                            <div className="scenario-item">
                              <strong>Given:</strong> {test.scenario.given}
                            </div>
                            <div className="scenario-item">
                              <strong>When:</strong> {test.scenario.when}
                            </div>
                            <div className="scenario-item">
                              <strong>Then:</strong> {test.scenario.then}
                            </div>
                          </div>
                          
                          <div className="criteria">
                            <h4>✅ 成功条件</h4>
                            <div className="criteria-item">{test.criteria}</div>
                          </div>
                          
                          <div className="actual">
                            <h4>📊 実際の結果</h4>
                            <div className="actual-item">{test.actual}</div>
                          </div>

                          {test.detectionSample && (
                            <div className="detection-sample">
                              <h4>🔍 検知サンプル</h4>
                              <div className="sample-payload">
                                <strong>Payload:</strong>
                                <code>{test.detectionSample.payload}</code>
                              </div>
                              <div className="sample-decoded">
                                <strong>Decoded:</strong>
                                <code>{test.detectionSample.decoded}</code>
                              </div>
                              <div className="sample-alert">
                                <strong>Falco Alert:</strong>
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
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function Quality() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Quality/Testing content data
  const content = {
    ja: {
      title: "E2Eテスト & 検証",
      description: "falco-plugin-nginx の品質を支える包括的なテストとE2E検証結果",
      nav: {
        github: "GitHub",
        installation: "インストール", 
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テストレポート"
      },
      hero: {
        title: "End-to-End テストレポート",
        subtitle: "信頼性の高いセキュリティ監視を実現",
        description: "falco-plugin-nginx の品質は、包括的なE2Eテスト、自動化されたCI/CD、実証済みの検知精度、そして Falcoya君の頑張りによって支えられています。"
      },
      testResults: {
        title: "最新テスト結果 (Phase 1)",
        subtitle: "End-to-End テスト完全レポート - 基礎検証フェーズ",
        summary: {
          title: "テストサマリー",
          totalTests: "総テスト数",
          passRate: "成功率",
          coverage: "カバレッジ",
          lastRun: "最終実行",
          detectedAttacks: "検知した攻撃",
          undetectedAttacks: "未検知の攻撃"
        },
        environment: {
          title: "環境",
          plugin: "プラグイン"
        },
        categories: {
          basic: "基本機能テスト",
          rules: "ルール検証テスト", 
          pluginLoad: "プラグインロードテスト",
          eventDetection: "攻撃検知テスト"
        }
      },
      detectionExamples: {
        title: "実際の検知例",
        subtitle: "E2Eテストで確認された攻撃検知サンプル",
        sqlInjection: {
          title: "SQLインジェクション攻撃検知",
          result: "検知結果:",
          success: "✅ 検知成功 (5件のアラート)"
        },
        xss: {
          title: "XSS攻撃検知",
          result: "検知結果:",
          success: "✅ 検知成功 (7件のアラート)"
        }
      },
      reportButtons: {
        simple: "📊 テストレポート（簡易版）",
        detailed: "🔍 テストレポート(詳細版)"
      }
    },
    en: {
      title: "E2E Testing & Validation",
      description: "Comprehensive testing and E2E verification results supporting falco-plugin-nginx quality",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection", 
        blog: "Blog",
        news: "News",
        quality: "Test Report"
      },
      hero: {
        title: "End-to-End Test Report",
        subtitle: "Achieving reliable security monitoring",
        description: "The quality of falco-plugin-nginx is supported by comprehensive E2E testing, automated CI/CD, proven detection accuracy, and Falcoya-kun's dedication."
      },
      testResults: {
        title: "Latest Test Results (Phase 1)",
        subtitle: "Complete End-to-End Test Report - Foundation Phase",
        summary: {
          title: "Test Summary",
          totalTests: "Total Tests",
          passRate: "Pass Rate", 
          coverage: "Coverage",
          lastRun: "Last Run",
          detectedAttacks: "Detected Attacks",
          undetectedAttacks: "Undetected Attacks"
        },
        environment: {
          title: "Environment",
          plugin: "Plugin"
        },
        categories: {
          basic: "Basic Function Tests",
          rules: "Rule Validation Tests",
          pluginLoad: "Plugin Load Tests", 
          eventDetection: "Attack Detection Tests"
        }
      },
      detectionExamples: {
        title: "Real Detection Examples",
        subtitle: "Attack detection samples verified in E2E testing",
        sqlInjection: {
          title: "SQL Injection Attack Detection",
          result: "Detection Result:",
          success: "✅ Successfully Detected (5 alerts)"
        },
        xss: {
          title: "XSS Attack Detection",
          result: "Detection Result:",
          success: "✅ Successfully Detected (7 alerts)"
        }
      },
      reportButtons: {
        simple: "📊 Test Report (Simple Version)",
        detailed: "🔍 Test Report (Detailed Version)"
      }
    }
  }

  const currentContent = content[language]

  // Mock test data - in real implementation, this would be loaded from the E2E test results
  const testSummary = {
    totalTests: 14,
    passedTests: 14,
    passRate: 100,
    coverage: 95,
    lastRun: "2025-08-30T05:45:03Z",
    environment: "github-runner",
    falcoVersion: "0.41.3",
    pluginVersion: "v1.3.0",
    detectedAttacks: 12,  // SQLi: 5, XSS: 7
    undetectedAttacks: 2
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    if (language === 'ja') {
      return date.toLocaleDateString('ja-JP', { 
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    }
  }

  // Screen resize handler
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

      <main className="quality-container">
        {/* Hero Section */}
        <section className="quality-hero">
          <div className="container">
            <h1>{currentContent.hero.title}</h1>
            <p className="hero-subtitle">{currentContent.hero.subtitle}</p>
            <p className="hero-description">{currentContent.hero.description}</p>
          </div>
        </section>

        {/* Test Results Summary */}
        <section className="test-summary">
          <div className="container">
            <h2>{currentContent.testResults.title}</h2>
            <p className="section-subtitle">{currentContent.testResults.subtitle}</p>
            
            <div className="phase-info">
              <div className="phase-badge">Phase 1</div>
              <p className="phase-description">
                {language === 'ja' 
                  ? '現在のテスト結果はPhase 1（基礎検証フェーズ）の内容です。今後、Phase 2（高度な攻撃検知）、Phase 3（パフォーマンス・負荷テスト）を実施予定です。'
                  : 'Current test results are from Phase 1 (Foundation Verification). Phase 2 (Advanced Attack Detection) and Phase 3 (Performance & Load Testing) are planned for future implementation.'
                }
              </p>
            </div>
            
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-icon">📊</div>
                <div className="summary-content">
                  <h3>{currentContent.testResults.summary.title}</h3>
                  <div className="summary-stats">
                    <div className="stat">
                      <span className="stat-label">{currentContent.testResults.summary.totalTests}</span>
                      <span className="stat-value">{testSummary.totalTests}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">{currentContent.testResults.summary.passRate}</span>
                      <span className="stat-value success">{testSummary.passRate}%</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">{currentContent.testResults.summary.detectedAttacks}</span>
                      <span className="stat-value detected">{testSummary.detectedAttacks}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">{currentContent.testResults.summary.undetectedAttacks}</span>
                      <span className="stat-value undetected">{testSummary.undetectedAttacks}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-icon">🛡️</div>
                <div className="summary-content">
                  <h3>{currentContent.testResults.environment.title}</h3>
                  <div className="env-details">
                    <div className="env-item">
                      <span>Falco:</span> <code>{testSummary.falcoVersion}</code>
                    </div>
                    <div className="env-item">
                      <span>{currentContent.testResults.environment.plugin}:</span> <code>v1.3.0</code>
                    </div>
                    <div className="env-item">
                      <span>{currentContent.testResults.summary.lastRun}:</span>
                      <span>{formatDate(testSummary.lastRun)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Examples */}
        <section className="detection-examples">
          <div className="container">
            <h2>{currentContent.detectionExamples.title}</h2>
            <p className="section-subtitle">{currentContent.detectionExamples.subtitle}</p>
            
            <div className="examples-grid">
              <div className="example-card">
                <div className="example-header">
                  <span className="attack-type">SQL Injection</span>
                  <span className="severity critical">Critical</span>
                </div>
                <div className="example-content">
                  <h3>{currentContent.detectionExamples.sqlInjection.title}</h3>
                  <div className="payload">
                    <strong>Payload:</strong>
                    <code>/users?id=1' OR '1'='1</code>
                  </div>
                  <div className="detection-result">
                    <strong>{currentContent.detectionExamples.sqlInjection.result}</strong>
                    <span className="result-badge success">{currentContent.detectionExamples.sqlInjection.success}</span>
                  </div>
                </div>
              </div>

              <div className="example-card">
                <div className="example-header">
                  <span className="attack-type">XSS</span>
                  <span className="severity warning">Warning</span>
                </div>
                <div className="example-content">
                  <h3>{currentContent.detectionExamples.xss.title}</h3>
                  <div className="payload">
                    <strong>Payload:</strong>
                    <code>/search?q=&lt;script&gt;alert(1)&lt;/script&gt;</code>
                  </div>
                  <div className="detection-result">
                    <strong>{currentContent.detectionExamples.xss.result}</strong>
                    <span className="result-badge success">{currentContent.detectionExamples.xss.success}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="report-links">
              <Link href="/quality/e2e-report">
                <a className="report-button primary">
                  {currentContent.reportButtons.simple}
                </a>
              </Link>
              <a 
                href="/reports/e2e-complete-results-17340066428/index.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="report-button tertiary"
              >
                {currentContent.reportButtons.detailed}
              </a>
            </div>
          </div>
        </section>
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
        .quality-container {
          min-height: 100vh;
          padding-top: 80px;
        }

        .quality-hero {
          background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
          position: relative;
        }
        
        .quality-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          pointer-events: none;
        }

        .quality-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 20px;
          opacity: 1;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }

        .hero-description {
          font-size: 1.1rem;
          max-width: 900px;
          margin: 0 auto;
          opacity: 1;
          line-height: 1.8;
          font-weight: 400;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
          word-break: keep-all;
        }

        .test-summary {
          padding: 80px 0;
          background: #f9fafb;
        }

        .test-summary h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-bottom: 30px;
        }

        .phase-info {
          text-align: left;
          margin-bottom: 50px;
          padding: 25px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
          border-radius: 12px;
          border: 1px solid #dee2e6;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .phase-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 15px;
        }

        .phase-description {
          font-size: 1rem;
          color: #495057;
          line-height: 1.8;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .summary-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .summary-icon {
          font-size: 3rem;
        }

        .summary-content h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .summary-stats {
          display: flex;
          gap: 30px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e50;
        }

        .stat-value.success {
          color: #27ae60;
        }

        .stat-value.detected {
          color: #3498db;
        }

        .stat-value.undetected {
          color: #95a5a6;
        }

        .env-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .env-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem;
        }

        .env-item span:first-child {
          color: #7f8c8d;
        }

        .env-item code {
          background: #ecf0f1;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
        }

        .detection-examples {
          padding: 80px 0;
          background: white;
        }

        .detection-examples h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto 60px;
        }

        .example-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #ecf0f1;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .example-card:hover {
          transform: translateY(-2px);
        }

        .example-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          background: #f8f9fa;
          border-bottom: 1px solid #ecf0f1;
          gap: 15px;
        }

        .attack-type {
          font-weight: 600;
          color: #2c3e50;
        }

        .severity {
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .severity.critical {
          background: #e74c3c;
          color: white;
        }

        .severity.warning {
          background: #f39c12;
          color: white;
        }

        .example-content {
          padding: 25px;
        }

        .example-content h3 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .payload {
          margin-bottom: 20px;
        }

        .payload strong {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        .payload code {
          display: block;
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          border-left: 4px solid #3498db;
          font-family: 'Courier New', monospace;
          overflow-x: auto;
        }

        .detection-result strong {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        .result-badge {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .result-badge.success {
          background: #d5edda;
          color: #155724;
        }

        .report-links {
          text-align: center;
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .report-button {
          display: inline-block;
          color: white;
          padding: 15px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .report-button.primary {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
        }

        .report-button.secondary {
          background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        }

        .report-button.tertiary {
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
        }

        .report-button:hover {
          transform: translateY(-2px);
        }

        .report-button.primary:hover {
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }

        .report-button.secondary:hover {
          box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
        }

        .report-button.tertiary:hover {
          box-shadow: 0 8px 25px rgba(243, 156, 18, 0.3);
        }

        .nav-menu a.active,
        .mobile-nav-menu a.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .quality-hero {
            padding: 60px 0;
          }

          .quality-hero h1 {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .test-summary h2,
          .detection-examples h2 {
            font-size: 2rem;
          }

          .summary-grid,
          .examples-grid {
            grid-template-columns: 1fr;
          }

          .summary-card {
            flex-direction: column;
            text-align: center;
          }

          .summary-stats {
            justify-content: center;
          }

          .example-header {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  )
}
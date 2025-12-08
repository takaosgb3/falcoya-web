import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function Quality() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePhase, setActivePhase] = useState('phase2') // Default to Phase 2
  const [runNumber, setRunNumber] = useState('')

  // Phase 2 test data (65 patterns)
  const phase2Data = {
    metadata: {
      runNumber: 26,
      timestamp: "2025-12-07T22:46:34Z",
      duration: "142ms",
      environment: {
        platform: "ubuntu-24.04",
        falcoVersion: "0.42.1",
        plugin: "falco-plugin-nginx",
        nginxVersion: "1.24.0 (Ubuntu)",
        k6Version: "linux/amd64"
      }
    },
    summary: {
      totalTests: 65,
      passedTests: 65,
      failedTests: 0,
      passRate: 100
    },
    categories: {
      SQLI: { count: 19, percentage: 29.2 },
      PATH: { count: 20, percentage: 30.8 },
      XSS: { count: 11, percentage: 16.9 },
      CMDINJ: { count: 10, percentage: 15.4 },
      OTHER: { count: 5, percentage: 7.7 }
    },
    urls: {
      latest: "https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/",
      byRun: "https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/"
    }
  }

  // Phase 1 test data (14 tests)
  const phase1Data = {
    totalTests: 14,
    passedTests: 14,
    passRate: 100,
    coverage: 95,
    lastRun: "2025-08-30T05:45:03Z",
    environment: "github-runner",
    falcoVersion: "0.41.3",
    pluginVersion: "v1.3.0",
    detectedAttacks: 12,
    undetectedAttacks: 2
  }

  // Content object with ja/en translations
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
        title: "E2E テストレポート",
        subtitle: "65パターンの攻撃検知をAllureで可視化",
        description: "falco-plugin-nginx の品質は、包括的なE2Eテスト、自動化されたCI/CD、実証済みの検知精度、そして Falcoya君の頑張りによって支えられています。"
      },
      phaseSelector: {
        phase2: "Phase 2: 攻撃検知 (65パターン)",
        phase1: "Phase 1: 基礎検証 (14テスト)"
      },
      phase2: {
        summary: {
          title: "Phase 2: 攻撃検知テスト",
          totalTests: "テスト数",
          passRate: "成功率",
          lastRun: "最終実行",
          environment: "環境",
          duration: "実行時間"
        },
        categories: {
          title: "攻撃カテゴリ別パターン",
          sqli: { name: "SQL インジェクション", desc: "時間ベースブラインド、UNION、Error-based等" },
          xss: { name: "クロスサイトスクリプティング", desc: "script、svg、iframe等" },
          path: { name: "パストラバーサル", desc: "../etc/passwd、エンコーディング回避等" },
          cmdinj: { name: "コマンドインジェクション", desc: ";ls、&& whoami等" },
          other: { name: "その他", desc: "MongoDB $where、$regex等" },
          patterns: "パターン"
        },
        buttons: {
          viewAllure: "最新のAllureレポートを見る",
          viewGuide: "レポートの読み方ガイド",
          viewPhase1Detail: "Phase 1 詳細レポート"
        },
        reportAccess: {
          title: "レポートへのアクセス",
          latest: "最新版",
          byRun: "Run番号で指定",
          runPlaceholder: "Run番号を入力（例: 26）",
          go: "表示"
        }
      },
      phase1: {
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
        phaseInfo: "現在のテスト結果はPhase 1（基礎検証フェーズ）の内容です。今後、Phase 2（高度な攻撃検知）、Phase 3（パフォーマンス・負荷テスト）を実施予定です。",
        buttons: {
          simple: "テストレポート（簡易版）",
          detailed: "テストレポート（詳細版）"
        }
      },
      roadmap: {
        title: "今後の展望",
        current: "現在",
        target: "目標",
        progress: "進捗",
        description: "850パターンへの拡大を計画中。より多くの攻撃バリエーション、より深いエッジケース、より広い守備範囲へ。",
        patterns: "パターン"
      },
      detection: {
        title: "実際の検知例",
        subtitle: "E2Eテストで確認された攻撃検知サンプル",
        sqli: {
          title: "SQLインジェクション攻撃検知",
          result: "検知結果:",
          success: "検知成功 (5件のアラート)"
        },
        xss: {
          title: "XSS攻撃検知",
          result: "検知結果:",
          success: "検知成功 (7件のアラート)"
        }
      },
      footer: {
        description: "Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン",
        links: "リンク",
        githubRepo: "GitHubリポジトリ",
        documentation: "ドキュメント",
        license: "ライセンス",
        oss: "オープンソースソフトウェア"
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
        title: "E2E Test Report",
        subtitle: "65 Attack Patterns Visualized with Allure",
        description: "The quality of falco-plugin-nginx is supported by comprehensive E2E testing, automated CI/CD, proven detection accuracy, and Falcoya-kun's dedication."
      },
      phaseSelector: {
        phase2: "Phase 2: Attack Detection (65 Patterns)",
        phase1: "Phase 1: Foundation Verification (14 Tests)"
      },
      phase2: {
        summary: {
          title: "Phase 2: Attack Detection Tests",
          totalTests: "Total Tests",
          passRate: "Pass Rate",
          lastRun: "Last Run",
          environment: "Environment",
          duration: "Duration"
        },
        categories: {
          title: "Attack Patterns by Category",
          sqli: { name: "SQL Injection", desc: "Time-based Blind, UNION, Error-based, etc." },
          xss: { name: "Cross-Site Scripting", desc: "script, svg, iframe, etc." },
          path: { name: "Path Traversal", desc: "../etc/passwd, encoding bypass, etc." },
          cmdinj: { name: "Command Injection", desc: ";ls, && whoami, etc." },
          other: { name: "Other", desc: "MongoDB $where, $regex, etc." },
          patterns: "patterns"
        },
        buttons: {
          viewAllure: "View Latest Allure Report",
          viewGuide: "Report Reading Guide",
          viewPhase1Detail: "Phase 1 Detailed Report"
        },
        reportAccess: {
          title: "Report Access",
          latest: "Latest",
          byRun: "By Run Number",
          runPlaceholder: "Enter Run number (e.g., 26)",
          go: "Go"
        }
      },
      phase1: {
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
        phaseInfo: "Current test results are from Phase 1 (Foundation Verification). Phase 2 (Advanced Attack Detection) and Phase 3 (Performance & Load Testing) are planned for future implementation.",
        buttons: {
          simple: "Test Report (Simple Version)",
          detailed: "Test Report (Detailed Version)"
        }
      },
      roadmap: {
        title: "Future Roadmap",
        current: "Current",
        target: "Target",
        progress: "Progress",
        description: "Planning expansion to 850 patterns. More attack variations, deeper edge cases, broader coverage.",
        patterns: "patterns"
      },
      detection: {
        title: "Real Detection Examples",
        subtitle: "Attack detection samples verified in E2E testing",
        sqli: {
          title: "SQL Injection Attack Detection",
          result: "Detection Result:",
          success: "Successfully Detected (5 alerts)"
        },
        xss: {
          title: "XSS Attack Detection",
          result: "Detection Result:",
          success: "Successfully Detected (7 alerts)"
        }
      },
      footer: {
        description: "Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications",
        links: "Links",
        githubRepo: "GitHub Repository",
        documentation: "Documentation",
        license: "License",
        oss: "Open Source Software"
      }
    }
  }

  const currentContent = content[language]

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    if (language === 'ja') {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    }
  }

  const handleRunNumberGo = () => {
    if (runNumber && !isNaN(runNumber)) {
      window.open(`${phase2Data.urls.byRun}${runNumber}/`, '_blank', 'noopener,noreferrer')
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
            <Link href="/" legacyBehavior>
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
            <li><Link href="/#installation" legacyBehavior><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.installation}</a></Link></li>
            <li><Link href="/#detection" legacyBehavior><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.detection}</a></Link></li>
            <li><Link href="/blog" legacyBehavior><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.blog}</a></Link></li>
            <li><Link href="/news" legacyBehavior><a onClick={() => setMobileMenuOpen(false)}>{currentContent.nav.news}</a></Link></li>
            <li><Link href="/quality" legacyBehavior><a onClick={() => setMobileMenuOpen(false)} className="active">{currentContent.nav.quality}</a></Link></li>
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

        {/* Phase Selector */}
        <section className="phase-selector-section">
          <div className="container">
            <div className="phase-tabs">
              <button
                className={`phase-tab ${activePhase === 'phase2' ? 'active' : ''}`}
                onClick={() => setActivePhase('phase2')}
              >
                {currentContent.phaseSelector.phase2}
              </button>
              <button
                className={`phase-tab ${activePhase === 'phase1' ? 'active' : ''}`}
                onClick={() => setActivePhase('phase1')}
              >
                {currentContent.phaseSelector.phase1}
              </button>
            </div>
          </div>
        </section>

        {/* Phase 2 Content */}
        {activePhase === 'phase2' && (
          <>
            {/* Quick Summary */}
            <section className="phase2-summary">
              <div className="container">
                <div className="summary-card-large">
                  <h2>{currentContent.phase2.summary.title}</h2>
                  <div className="stats-row">
                    <div className="stat-box">
                      <span className="stat-number">{phase2Data.summary.totalTests}</span>
                      <span className="stat-label">{currentContent.phase2.summary.totalTests}</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-number success">{phase2Data.summary.passRate}%</span>
                      <span className="stat-label">{currentContent.phase2.summary.passRate}</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-number">{formatDate(phase2Data.metadata.timestamp)}</span>
                      <span className="stat-label">{currentContent.phase2.summary.lastRun}</span>
                    </div>
                  </div>
                  <div className="environment-info">
                    <span className="env-label">{currentContent.phase2.summary.environment}:</span>
                    <span className="env-value">Falco {phase2Data.metadata.environment.falcoVersion}</span>
                    <span className="env-separator">|</span>
                    <span className="env-value">{phase2Data.metadata.environment.plugin}</span>
                    <span className="env-separator">|</span>
                    <span className="env-value">nginx {phase2Data.metadata.environment.nginxVersion}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Category Breakdown */}
            <section className="category-breakdown">
              <div className="container">
                <h2>{currentContent.phase2.categories.title}</h2>
                <div className="categories-grid">
                  {Object.entries(phase2Data.categories).map(([key, data]) => {
                    const categoryKey = key.toLowerCase()
                    const categoryInfo = currentContent.phase2.categories[categoryKey]
                    return (
                      <div key={key} className="category-card">
                        <div className="category-header">
                          <span className="category-name">{categoryInfo?.name || key}</span>
                          <span className="category-count">{data.count} {currentContent.phase2.categories.patterns}</span>
                        </div>
                        <p className="category-desc">{categoryInfo?.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <section className="action-buttons">
              <div className="container">
                <div className="buttons-row">
                  <a
                    href={phase2Data.urls.latest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button primary"
                  >
                    {currentContent.phase2.buttons.viewAllure}
                  </a>
                  <Link href={language === 'ja' ? '/blog/falco-plugin-development-e2e-report-guide' : '/blog/falco-plugin-development-e2e-report-guide-en'} legacyBehavior>
                    <a className="action-button secondary">
                      {currentContent.phase2.buttons.viewGuide}
                    </a>
                  </Link>
                </div>
              </div>
            </section>

            {/* Report Access */}
            <section className="report-access">
              <div className="container">
                <h3>{currentContent.phase2.reportAccess.title}</h3>
                <div className="access-options">
                  <div className="access-option">
                    <span className="access-label">{currentContent.phase2.reportAccess.latest}:</span>
                    <a
                      href={phase2Data.urls.latest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="access-link"
                    >
                      {phase2Data.urls.latest}
                    </a>
                  </div>
                  <div className="access-option">
                    <span className="access-label">{currentContent.phase2.reportAccess.byRun}:</span>
                    <div className="run-input-group">
                      <input
                        type="text"
                        placeholder={currentContent.phase2.reportAccess.runPlaceholder}
                        value={runNumber}
                        onChange={(e) => setRunNumber(e.target.value)}
                        className="run-input"
                      />
                      <button
                        onClick={handleRunNumberGo}
                        className="run-go-button"
                      >
                        {currentContent.phase2.reportAccess.go}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Phase 1 Content */}
        {activePhase === 'phase1' && (
          <>
            <section className="test-summary">
              <div className="container">
                <h2>{currentContent.phase1.title}</h2>
                <p className="section-subtitle">{currentContent.phase1.subtitle}</p>

                <div className="phase-info">
                  <div className="phase-badge">Phase 1</div>
                  <p className="phase-description">{currentContent.phase1.phaseInfo}</p>
                </div>

                <div className="summary-grid">
                  <div className="summary-card">
                    <div className="summary-icon">📊</div>
                    <div className="summary-content">
                      <h3>{currentContent.phase1.summary.title}</h3>
                      <div className="summary-stats">
                        <div className="stat">
                          <span className="stat-label">{currentContent.phase1.summary.totalTests}</span>
                          <span className="stat-value">{phase1Data.totalTests}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">{currentContent.phase1.summary.passRate}</span>
                          <span className="stat-value success">{phase1Data.passRate}%</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">{currentContent.phase1.summary.detectedAttacks}</span>
                          <span className="stat-value detected">{phase1Data.detectedAttacks}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">{currentContent.phase1.summary.undetectedAttacks}</span>
                          <span className="stat-value undetected">{phase1Data.undetectedAttacks}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="summary-card">
                    <div className="summary-icon">🛡️</div>
                    <div className="summary-content">
                      <h3>{currentContent.phase1.environment.title}</h3>
                      <div className="env-details">
                        <div className="env-item">
                          <span>Falco:</span> <code>{phase1Data.falcoVersion}</code>
                        </div>
                        <div className="env-item">
                          <span>{currentContent.phase1.environment.plugin}:</span> <code>{phase1Data.pluginVersion}</code>
                        </div>
                        <div className="env-item">
                          <span>{currentContent.phase1.summary.lastRun}:</span>
                          <span>{formatDate(phase1Data.lastRun)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="report-links">
                  <Link href="/quality/e2e-report" legacyBehavior>
                    <a className="report-button primary">
                      {currentContent.phase1.buttons.simple}
                    </a>
                  </Link>
                  <a
                    href="/reports/e2e-complete-results-17340066428/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="report-button tertiary"
                  >
                    {currentContent.phase1.buttons.detailed}
                  </a>
                </div>
              </div>
            </section>

            {/* Detection Examples */}
            <section className="detection-examples">
              <div className="container">
                <h2>{currentContent.detection.title}</h2>
                <p className="section-subtitle">{currentContent.detection.subtitle}</p>

                <div className="examples-grid">
                  <div className="example-card">
                    <div className="example-header">
                      <span className="attack-type">SQL Injection</span>
                      <span className="severity critical">Critical</span>
                    </div>
                    <div className="example-content">
                      <h3>{currentContent.detection.sqli.title}</h3>
                      <div className="payload">
                        <strong>Payload:</strong>
                        <code>/users?id=1&apos; OR &apos;1&apos;=&apos;1</code>
                      </div>
                      <div className="detection-result">
                        <strong>{currentContent.detection.sqli.result}</strong>
                        <span className="result-badge success">{currentContent.detection.sqli.success}</span>
                      </div>
                    </div>
                  </div>

                  <div className="example-card">
                    <div className="example-header">
                      <span className="attack-type">XSS</span>
                      <span className="severity warning">Warning</span>
                    </div>
                    <div className="example-content">
                      <h3>{currentContent.detection.xss.title}</h3>
                      <div className="payload">
                        <strong>Payload:</strong>
                        <code>/search?q=&lt;script&gt;alert(1)&lt;/script&gt;</code>
                      </div>
                      <div className="detection-result">
                        <strong>{currentContent.detection.xss.result}</strong>
                        <span className="result-badge success">{currentContent.detection.xss.success}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Future Roadmap */}
        <section className="roadmap-section">
          <div className="container">
            <h2>{currentContent.roadmap.title}</h2>
            <div className="roadmap-card">
              <div className="roadmap-stats">
                <div className="roadmap-stat">
                  <span className="roadmap-label">{currentContent.roadmap.current}</span>
                  <span className="roadmap-value">65 {currentContent.roadmap.patterns}</span>
                </div>
                <div className="roadmap-stat">
                  <span className="roadmap-label">{currentContent.roadmap.target}</span>
                  <span className="roadmap-value">850 {currentContent.roadmap.patterns}</span>
                </div>
              </div>
              <div className="roadmap-progress">
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: '7.6%' }}></div>
                </div>
                <span className="progress-percentage">7.6%</span>
              </div>
              <p className="roadmap-description">{currentContent.roadmap.description}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>{currentContent.footer.description}</p>
            </div>
            <div className="footer-section">
              <h4>{currentContent.footer.links}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">{currentContent.footer.githubRepo}</a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">{currentContent.footer.documentation}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{currentContent.footer.license}</h4>
              <p>Apache License 2.0</p>
              <p>{currentContent.footer.oss}</p>
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
          background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%);
        }

        .quality-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .quality-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
          animation: pulse 15s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
        }

        .quality-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
        }

        .quality-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 500;
          position: relative;
          z-index: 1;
          color: #a5b4fc;
        }

        .hero-description {
          font-size: 1.1rem;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          z-index: 1;
          word-break: keep-all;
        }

        /* Phase Selector */
        .phase-selector-section {
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          padding: 40px 0;
          border-bottom: 1px solid rgba(102, 126, 234, 0.2);
        }

        .phase-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .phase-tab {
          padding: 16px 32px;
          border: 1px solid rgba(102, 126, 234, 0.3);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .phase-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .phase-tab:hover::before {
          left: 100%;
        }

        .phase-tab:hover {
          border-color: rgba(102, 126, 234, 0.6);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
        }

        .phase-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        }

        /* Phase 2 Summary */
        .phase2-summary {
          padding: 80px 0;
          background: linear-gradient(180deg, #16213e 0%, #1a1a2e 100%);
        }

        .summary-card-large {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 24px;
          padding: 50px;
          max-width: 950px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .summary-card-large::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
        }

        .summary-card-large h2 {
          font-size: 1.8rem;
          color: white;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 700;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-box {
          text-align: center;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-number.success {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 8px;
        }

        .environment-info {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
        }

        .env-label {
          color: rgba(255, 255, 255, 0.5);
          margin-right: 10px;
        }

        .env-value {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .env-separator {
          color: rgba(255, 255, 255, 0.2);
          margin: 0 12px;
        }

        /* Category Breakdown */
        .category-breakdown {
          padding: 80px 0;
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
        }

        .category-breakdown h2 {
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 50px;
          color: white;
          font-weight: 700;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .category-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--category-color, #667eea), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .category-card:hover::before {
          opacity: 1;
        }

        .category-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .category-card:nth-child(1) { --category-color: #ef4444; }
        .category-card:nth-child(2) { --category-color: #f97316; }
        .category-card:nth-child(3) { --category-color: #eab308; }
        .category-card:nth-child(4) { --category-color: #22c55e; }
        .category-card:nth-child(5) { --category-color: #8b5cf6; }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .category-name {
          font-weight: 700;
          color: white;
          font-size: 1.15rem;
        }

        .category-count {
          font-size: 0.9rem;
          color: var(--category-color, #a5b4fc);
          font-weight: 600;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .category-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 12px 0 0 0;
          line-height: 1.6;
        }

        /* Action Buttons */
        .action-buttons {
          padding: 50px 0;
          background: linear-gradient(180deg, #16213e 0%, #1a1a2e 100%);
        }

        .buttons-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .action-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .action-button:hover::before {
          left: 100%;
        }

        .action-button.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }

        .action-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        .action-button.secondary {
          background: transparent;
          color: #a5b4fc;
          border: 2px solid rgba(102, 126, 234, 0.5);
        }

        .action-button.secondary:hover {
          background: rgba(102, 126, 234, 0.1);
          border-color: #667eea;
          color: white;
          transform: translateY(-3px);
        }

        /* Report Access */
        .report-access {
          padding: 60px 0;
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
        }

        .report-access h3 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 40px;
          color: white;
          font-weight: 600;
        }

        .access-options {
          max-width: 750px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
        }

        .access-option {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .access-option:last-child {
          margin-bottom: 0;
        }

        .access-label {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          min-width: 120px;
        }

        .access-link {
          color: #a5b4fc;
          word-break: break-all;
          transition: color 0.3s ease;
        }

        .access-link:hover {
          color: #667eea;
        }

        .run-input-group {
          display: flex;
          gap: 12px;
          flex: 1;
        }

        .run-input {
          flex: 1;
          padding: 14px 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          font-size: 1rem;
          min-width: 200px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          transition: all 0.3s ease;
        }

        .run-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .run-input:focus {
          outline: none;
          border-color: rgba(102, 126, 234, 0.5);
          background: rgba(255, 255, 255, 0.08);
        }

        .run-go-button {
          padding: 14px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .run-go-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        /* Phase 1 Styles (existing) */
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
          margin: 0 auto 40px;
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
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 5px;
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

        .report-button.tertiary {
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
        }

        .report-button:hover {
          transform: translateY(-2px);
        }

        .report-button.primary:hover {
          box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }

        .report-button.tertiary:hover {
          box-shadow: 0 8px 25px rgba(243, 156, 18, 0.3);
        }

        /* Detection Examples */
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
          margin: 0 auto;
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

        /* Roadmap Section */
        .roadmap-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
        }

        .roadmap-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
        }

        .roadmap-section h2 {
          font-size: 2.2rem;
          text-align: center;
          color: white;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .roadmap-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 24px;
          padding: 50px;
          max-width: 750px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .roadmap-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
        }

        .roadmap-stats {
          display: flex;
          justify-content: space-around;
          margin-bottom: 40px;
        }

        .roadmap-stat {
          text-align: center;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .roadmap-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 8px;
        }

        .roadmap-value {
          font-size: 1.6rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .roadmap-progress {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .progress-bar-container {
          flex: 1;
          height: 14px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 7px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 7px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-percentage {
          font-weight: 700;
          color: #a5b4fc;
          font-size: 1.2rem;
          min-width: 60px;
        }

        .roadmap-description {
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          font-size: 1rem;
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

          .phase-tabs {
            flex-direction: column;
            align-items: center;
          }

          .phase-tab {
            width: 100%;
            max-width: 300px;
          }

          .stats-row {
            gap: 30px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .environment-info {
            font-size: 0.8rem;
          }

          .env-separator {
            display: none;
          }

          .env-value {
            display: block;
            margin: 5px 0;
          }

          .categories-grid {
            grid-template-columns: 1fr;
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

          .access-option {
            flex-direction: column;
            align-items: flex-start;
          }

          .run-input-group {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

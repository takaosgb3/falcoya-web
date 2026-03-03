import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../utils/languageUtils'
import Navbar from '../components/Navbar'

export default function Quality() {
  const [language, setLanguage] = useLanguage()
  const [activePhase, setActivePhase] = useState('phase2') // Default to Phase 2
  const [runNumber, setRunNumber] = useState('')

  // Phase 2 test data (850 patterns)
  const phase2Data = {
    metadata: {
      runNumber: 212,
      timestamp: "2026-03-03T04:22:07Z",
      duration: "3077ms",
      environment: {
        platform: "ubuntu-24.04",
        falcoVersion: "0.43.0",
        plugin: "falco-plugin-nginx",
        nginxVersion: "1.24.0 (Ubuntu)",
        k6Version: "linux/amd64"
      }
    },
    summary: {
      totalTests: 850,
      passedTests: 850,
      failedTests: 0,
      passRate: 100
    },
    categories: {
      SQLI: { count: 138, percentage: 16.2 },
      CMDINJ: { count: 98, percentage: 11.5 },
      XSS: { count: 96, percentage: 11.3 },
      PATH: { count: 81, percentage: 9.5 },
      SSTI: { count: 34, percentage: 4.0 },
      LDAP: { count: 20, percentage: 2.4 },
      XXE: { count: 18, percentage: 2.1 },
      OTHER: { count: 365, percentage: 42.9 }
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
        subtitle: "850パターンの攻撃検知をAllureで可視化",
        description: "falco-plugin-nginx の品質は、包括的なE2Eテスト、自動化されたCI/CD、実証済みの検知精度、そして Falcoya君の頑張りによって支えられています。"
      },
      pluginSwitch: {
        nginx: "Nginx プラグイン",
        openclaw: "OpenClaw"
      },
      phaseSelector: {
        phase2: "Phase 2: 攻撃検知 (850パターン)",
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
          xss: { name: "クロスサイトスクリプティング", desc: "DOM、Reflected、Stored、Encoding等" },
          path: { name: "パストラバーサル", desc: "../etc/passwd、エンコーディング回避等" },
          cmdinj: { name: "コマンドインジェクション", desc: "Backtick、Pipe、Substitution等" },
          ssti: { name: "サーバサイドテンプレートインジェクション", desc: "Jinja2、Twig、Freemarker、Pug、EJS等" },
          xxe: { name: "XML外部実体参照", desc: "Entity、JAR、Billion Laugh攻撃等" },
          ldap: { name: "LDAPインジェクション", desc: "認証バイパス、Blind LDAP等" },
          other: { name: "その他", desc: "SSRF、CRLF、JWT、Open Redirect、WAF Bypass、GraphQL、NoSQL、XPath、API Security等" },
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
        description: "850パターンを達成。1000パターンへの拡大を計画中。より多くの攻撃バリエーション、より深いエッジケース、より広い守備範囲へ。",
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
        subtitle: "850 Attack Patterns Visualized with Allure",
        description: "The quality of falco-plugin-nginx is supported by comprehensive E2E testing, automated CI/CD, proven detection accuracy, and Falcoya-kun's dedication."
      },
      pluginSwitch: {
        nginx: "Nginx Plugin",
        openclaw: "OpenClaw"
      },
      phaseSelector: {
        phase2: "Phase 2: Attack Detection (850 Patterns)",
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
          xss: { name: "Cross-Site Scripting", desc: "DOM, Reflected, Stored, Encoding, etc." },
          path: { name: "Path Traversal", desc: "../etc/passwd, encoding bypass, etc." },
          cmdinj: { name: "Command Injection", desc: "Backtick, Pipe, Substitution, etc." },
          ssti: { name: "Server-Side Template Injection", desc: "Jinja2, Twig, Freemarker, Pug, EJS, etc." },
          xxe: { name: "XML External Entity", desc: "Entity, JAR, Billion Laugh attack, etc." },
          ldap: { name: "LDAP Injection", desc: "Auth bypass, Blind LDAP, etc." },
          other: { name: "Other", desc: "SSRF, CRLF, JWT, Open Redirect, WAF Bypass, GraphQL, NoSQL, XPath, API Security, etc." },
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
        description: "850 patterns achieved. Planning expansion to 1000 patterns. More attack variations, deeper edge cases, broader coverage.",
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

  return (
    <>
      <Head>
        <title>{currentContent.title} - FALCOYA</title>
        <meta name="description" content={currentContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar activePage="quality" />

      <main className="quality-container">
        {/* Hero Section */}
        <section className="quality-hero">
          <div className="container">
            <h1>{currentContent.hero.title}</h1>
            <p className="hero-subtitle">{currentContent.hero.subtitle}</p>
            <p className="hero-description">{currentContent.hero.description}</p>
          </div>
        </section>

        {/* Plugin Switch */}
        <section className="plugin-switch-section">
          <div className="container">
            <div className="plugin-tabs">
              <button className="plugin-tab active">
                {currentContent.pluginSwitch.nginx}
              </button>
              <Link href="/quality/openclaw" className="plugin-tab">
                {currentContent.pluginSwitch.openclaw}
              </Link>
            </div>
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
                  <span className="roadmap-value">850 {currentContent.roadmap.patterns}</span>
                </div>
                <div className="roadmap-stat">
                  <span className="roadmap-label">{currentContent.roadmap.target}</span>
                  <span className="roadmap-value">1000 {currentContent.roadmap.patterns}</span>
                </div>
              </div>
              <div className="roadmap-progress">
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: '85%' }}></div>
                </div>
                <span className="progress-percentage">85%</span>
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
          background: #FFFFFF;
        }

        .quality-hero {
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A855F7 100%);
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
          background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }

        .quality-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          color: white;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 500;
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.95);
        }

        .hero-description {
          font-size: 1.1rem;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
          word-break: keep-all;
        }

        /* Plugin Switch */
        .plugin-switch-section {
          background: #F3F4F6;
          padding: 30px 0;
          border-bottom: 1px solid #E5E7EB;
        }

        .plugin-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .plugin-tab {
          padding: 12px 28px;
          border: 2px solid #E5E7EB;
          background: white;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .plugin-tab:hover {
          border-color: #A855F7;
          color: #7C3AED;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.15);
        }

        .plugin-tab.active {
          background: linear-gradient(135deg, #4F46E5 0%, #A855F7 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 8px 30px rgba(79, 70, 229, 0.3);
        }

        /* Phase Selector */
        .phase-selector-section {
          background: #F9FAFB;
          padding: 40px 0;
          border-bottom: 1px solid #E5E7EB;
        }

        .phase-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .phase-tab {
          padding: 16px 32px;
          border: 2px solid #E5E7EB;
          background: white;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .phase-tab:hover {
          border-color: #A855F7;
          color: #7C3AED;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.15);
        }

        .phase-tab.active {
          background: linear-gradient(135deg, #4F46E5 0%, #A855F7 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 8px 30px rgba(79, 70, 229, 0.3);
        }

        /* Phase 2 Summary */
        .phase2-summary {
          padding: 80px 0;
          background: white;
        }

        .summary-card-large {
          background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 50px;
          max-width: 950px;
          margin: 0 auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .summary-card-large::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4F46E5, #A855F7);
        }

        .summary-card-large h2 {
          font-size: 1.8rem;
          color: #1F2937;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 700;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-box {
          text-align: center;
          padding: 20px 28px;
          background: white;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          min-width: 140px;
        }

        .stat-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.12);
          border-color: #A855F7;
        }

        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: #4F46E5;
          line-height: 1.2;
        }

        .stat-number.success {
          color: #10B981;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #6B7280;
          margin-top: 6px;
          font-weight: 500;
        }

        .environment-info {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          font-size: 0.9rem;
        }

        .env-label {
          color: #6B7280;
          margin-right: 10px;
        }

        .env-value {
          color: #1F2937;
          font-weight: 500;
        }

        .env-separator {
          color: #D1D5DB;
          margin: 0 12px;
        }

        /* Category Breakdown */
        .category-breakdown {
          padding: 80px 0;
          background: #F9FAFB;
        }

        .category-breakdown h2 {
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 50px;
          color: #1F2937;
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
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--category-color, #4F46E5), var(--category-color-light, #A855F7));
        }

        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border-color: var(--category-color, #A855F7);
        }

        .category-card:nth-child(1) { --category-color: #DC2626; --category-color-light: #F87171; }
        .category-card:nth-child(2) { --category-color: #EA580C; --category-color-light: #FB923C; }
        .category-card:nth-child(3) { --category-color: #CA8A04; --category-color-light: #FACC15; }
        .category-card:nth-child(4) { --category-color: #16A34A; --category-color-light: #4ADE80; }
        .category-card:nth-child(5) { --category-color: #7C3AED; --category-color-light: #A78BFA; }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .category-name {
          font-weight: 700;
          color: #1F2937;
          font-size: 1.15rem;
        }

        .category-count {
          font-size: 0.85rem;
          color: var(--category-color, #4F46E5);
          font-weight: 600;
          padding: 6px 14px;
          background: rgba(79, 70, 229, 0.08);
          border-radius: 20px;
        }

        .category-desc {
          font-size: 0.9rem;
          color: #6B7280;
          margin: 12px 0 0 0;
          line-height: 1.6;
        }

        /* Action Buttons */
        .action-buttons {
          padding: 50px 0;
          background: white;
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .action-button.primary {
          background: linear-gradient(135deg, #4F46E5 0%, #A855F7 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
        }

        .action-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
        }

        .action-button.secondary {
          background: white;
          color: #4F46E5;
          border: 2px solid #4F46E5;
        }

        .action-button.secondary:hover {
          background: #4F46E5;
          color: white;
          transform: translateY(-3px);
        }

        /* Report Access */
        .report-access {
          padding: 60px 0;
          background: #F9FAFB;
          border-top: 1px solid #E5E7EB;
        }

        .report-access h3 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 40px;
          color: #1F2937;
          font-weight: 600;
        }

        .access-options {
          max-width: 750px;
          margin: 0 auto;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
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
          color: #6B7280;
          min-width: 120px;
        }

        .access-link {
          color: #4F46E5;
          word-break: break-all;
          transition: color 0.3s ease;
        }

        .access-link:hover {
          color: #7C3AED;
        }

        .run-input-group {
          display: flex;
          gap: 12px;
          flex: 1;
        }

        .run-input {
          flex: 1;
          padding: 14px 18px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-size: 1rem;
          min-width: 200px;
          background: white;
          color: #1F2937;
          transition: all 0.3s ease;
        }

        .run-input::placeholder {
          color: #9CA3AF;
        }

        .run-input:focus {
          outline: none;
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }

        .run-go-button {
          padding: 14px 28px;
          background: linear-gradient(135deg, #4F46E5 0%, #A855F7 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .run-go-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
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
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A855F7 100%);
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }

        .roadmap-section h2 {
          font-size: 2.2rem;
          text-align: center;
          color: white;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .roadmap-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 50px;
          max-width: 750px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          position: relative;
        }

        .roadmap-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        }

        .roadmap-stats {
          display: flex;
          justify-content: space-around;
          margin-bottom: 40px;
        }

        .roadmap-stat {
          text-align: center;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .roadmap-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 8px;
        }

        .roadmap-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
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
          background: rgba(255, 255, 255, 0.2);
          border-radius: 7px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-percentage {
          font-weight: 700;
          color: white;
          font-size: 1.2rem;
          min-width: 60px;
        }

        .roadmap-description {
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
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
            gap: 16px;
          }

          .stat-box {
            padding: 16px 20px;
            min-width: 100px;
          }

          .stat-number {
            font-size: 1.5rem;
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

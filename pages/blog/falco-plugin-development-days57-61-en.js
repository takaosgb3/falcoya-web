import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays57to61En() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Navigation text
  const navText = {
    ja: {
      github: "GitHub",
      installation: "インストール",
      detection: "検知機能",
      blog: "ブログ",
      news: "ニュース",
      quality: "テストレポート"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News",
      quality: "Test Report"
    }
  }

  // Close mobile menu on screen resize
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
        <title>Falco + Nginx Plugin Development: Falcoya Days 57-61 - FALCOYA Blog</title>
        <meta name="description" content="Large-scale attack verification and E2E test debugging chronicle. Experiencing critical issues from output specification changes, learning the importance of documentation. A 5-day record of turning failures into assets." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya Days 57-61" />
        <meta property="og:description" content="Large-scale attack verification and E2E test debugging chronicle. Experiencing critical issues from output specification changes, learning the importance of documentation. A 5-day record of turning failures into assets." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days57-61-en" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
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
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">{navText[language].github}</Link></li>
            <li><Link href="/#installation">{navText[language].installation}</Link></li>
            <li><Link href="/#detection">{navText[language].detection}</Link></li>
            <li><Link href="/blog">{navText[language].blog}</Link></li>
            <li><Link href="/news">{navText[language].news}</Link></li>
            <li><Link href="/quality">{navText[language].quality}</Link></li>
          </ul>

          <div className="nav-controls">
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'ja') {
                    setLanguage('ja')
                    router.push('/blog/falco-plugin-development-days57-61')
                  }
                }}
              >
                日本語
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'en') {
                    setLanguage('en')
                  }
                }}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{navText[language].github}</a></li>
            <li><a href="/#installation" onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></li>
            <li><a href="/#detection" onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></li>
            <li><a href="/news" onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></li>
            <li><a href="/quality" onClick={() => setMobileMenuOpen(false)}>{navText[language].quality}</a></li>
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-09-14">September 14, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya Days 57-61
            </h1>
            <p className="article-subtitle">
              ~ Large-Scale Attack Verification and E2E Test Debugging Chronicle ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Testing</span>
              <span className="tag">Debugging</span>
              <span className="tag">Attack Verification</span>
              <span className="tag">Documentation</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog10.png"
              alt="Large-scale attack verification and E2E test debugging"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              Days 51-56 saw the publication of the E2E test report (Phase 1), i18n support, retry of attack verification, fine-tuning of over-detection, and creation of integrated documentation for 37 rules/810+ attack patterns.
              The Falco plugin's "net" became more sophisticated, and it was time to enter the large-scale attack verification phase.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 57 (09/07) — Attack Verification Expansion</h2>
            <p>
              On this day, I fed newly generated attack logs and verified detection with existing rules.
              When injecting a large number of scenarios at once, some cases detect as expected while others fail.
            </p>
            <p>
              I added new failure examples to <code>PROBLEM_PATTERNS.md</code> while deeply feeling the difficulty of large-scale verification once again.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Unexpected failures always occur in large-scale verification. Recording failure examples reliably is the first step toward future improvements.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 58 (09/08) — Test Verification Work</h2>
            <p>
              Continuing from the previous day, I verified E2E test results one by one and identified failed cases.
            </p>
            <p>
              To determine "why it failed," I investigated by comparing logs and outputs.
              While the cause couldn't be identified yet, I recorded reproduction conditions and traces in <code>integration-test-requirements.md</code>.
            </p>
            <p>
              Leaving these "failure footprints" one by one leads to future improvements.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Leaving failure footprints is the path to improvement. Recording reproduction conditions and traces becomes important clues for problem-solving.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 59 (09/09) — Fatal Mistake: Crushing Output Without Referring to Documentation</h2>
            <p>
              On this day, I faced a critical problem where Falco's detection logs weren't reflected in the report, and all output disappeared.
            </p>
            <p>
              <strong>The cause was my own fault.</strong>
              Despite the output specifications being clearly documented in <code>integration-test-requirements.md</code>, I changed them arbitrarily without referring to the documentation.
            </p>
            <p>
              As a result, while Falco was detecting internally, from the user's perspective, it appeared as if "Falco had gone silent."
              This was the greatest risk of losing trust as an OSS project, a spine-chilling experience.
            </p>
            <p>
              I recovered by reverting the implementation and checking the documentation again, but this failure was devastating.
            </p>
            <p>
              So I decided to strengthen the documentation further:
            </p>
            <ul className="task-list">
              <li>Added "output specification compliance check items" to <code>integration-test-requirements.md</code></li>
              <li>Added a new pattern "changed output specifications without referring to documentation" to <code>PROBLEM_PATTERNS.md</code></li>
            </ul>
            <p>
              The learning is clear:
              <strong>Read documentation before code, or we will inevitably repeat the same failures.</strong>
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Read documentation before code. Changes ignoring specifications cause critical problems that lose user trust.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 60 (09/10) — CI Infrastructure Instability</h2>
            <p>
              On this day, problems occurred with E2E test execution on GitHub Actions.
              Jobs would stop midway, and artifacts weren't saved correctly sometimes.
            </p>
            <p>
              With possible environment dependencies, I couldn't immediately identify the root cause.
              I recorded it as "CI infrastructure issues" in <code>PROBLEM_PATTERNS.md</code> for comparison when it recurs.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Record CI infrastructure issues too. Environment-dependent problems have low reproducibility, making detailed records of occurrence conditions important.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 61 (09/11) — Security E2E Debugging</h2>
            <p>
              This day was focused on debugging "Security Verification E2E Tests."
              I executed test cases one by one, compared detection logs with report outputs, and identified inconsistencies.
            </p>
            <p>
              During verification, I found several bugs and rule adjustment points, which I added to <code>integration-test-requirements.md</code>.
            </p>
            <p>
              It was tedious and time-consuming work, but I realized this accumulation becomes the power to use Falco practically.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Accumulation of tedious debugging work becomes practical power. Carefully resolving each inconsistency is the path to quality improvement.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Tasks Performed on Days 57-61</h2>
            <ul className="task-list">
              <li>Attack scenario expansion and verification (recording failure cases)</li>
              <li>E2E test result confirmation and cause investigation</li>
              <li>Fixing critical bugs from output specification changes</li>
              <li>Major documentation updates (adding output specification compliance check items)</li>
              <li>CI infrastructure issue investigation and recording</li>
              <li>Security E2E test debugging and rule adjustments</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Created/Updated Documentation</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ Added output specification compliance check items and adjustment notes</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ Added pattern "Falco went silent after changing output specifications without referring to documentation"</p>
            </div>
            <div className="document-item">
              <h3>Others</h3>
              <p>→ Added CI infrastructure issue reproduction conditions</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              Days 57-61 were spent on "large-scale attack verification and E2E debugging."
              The failure on 9/9 was particularly critical - changing output specifications without referring to documentation created a state where Falco appeared silent.
              However, embedding this painful mistake into documentation and transforming it into a recurrence prevention mechanism was a significant harvest.
            </p>
            <p>
              The most important thing in OSS development is <strong>"openly publishing and continuously improving."</strong>
              Next, we aim to publish the <strong>Phase 2 test report</strong> that comprehensively runs the expanded rules and attack patterns.
            </p>
          </section>

          <footer className="article-footer">
            <div className="share-section">
              <h3>GitHub & TK Links</h3>
              <ul className="link-list">
                <li>
                  Project: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-nginx-plugin on GitHub</a>
                </li>
                <li>
                  Development Lead TK: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">LinkedIn - Takao Shimizu</a>
                </li>
              </ul>
            </div>

            <div className="navigation-links">
              <Link href="/blog" className="back-to-list">
                ← Back to Blog List
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          min-height: 100vh;
        }

        .article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .article-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .article-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .article-image {
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          font-size: 1.875rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
          position: relative;
          padding-left: 1rem;
        }

        .content-section h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 80%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .content-section p {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .content-section strong {
          color: #1f2937;
          font-weight: 600;
        }

        .content-section code {
          background: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #dc2626;
        }

        .lesson-box {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-left: 4px solid #667eea;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 8px;
        }

        .lesson-box h3 {
          color: #667eea;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .lesson-box p {
          color: #374151;
          margin: 0;
        }

        .task-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .task-list li {
          padding: 0.75rem 0;
          padding-left: 2rem;
          position: relative;
          color: #4b5563;
          line-height: 1.6;
        }

        .task-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .document-item {
          background: #f9fafb;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .document-item h3 code {
          background: transparent;
          color: #667eea;
          font-size: 1em;
        }

        .document-item p {
          margin: 0;
          color: #6b7280;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 0.75rem;
          color: #4b5563;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .link-list a:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-to-list {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-to-list:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.875rem;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }

          .article-tags {
            gap: 0.375rem;
          }

          .tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays62to67En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya Days 62-67 - FALCOYA Blog</title>
        <meta name="description" content="From whack-a-mole to systematization, the gap between planning and reality. A 6-day record of evolution from repetitive ad-hoc fixes to systematic quality management." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya Days 62-67" />
        <meta property="og:description" content="From whack-a-mole to systematization, the gap between planning and reality. A 6-day record of evolution from repetitive ad-hoc fixes to systematic quality management." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days62-67-en" />
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
                    router.push('/blog/falco-plugin-development-days62-67')
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
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-09-21">September 21, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 62-67 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ From Whack-a-Mole to Systematization, The Gap Between Planning and Reality ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">Test Strategy</span>
              <span className="tag">Quality Management</span>
              <span className="tag">Systematization</span>
              <span className="tag">CI/CD</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog11.png"
              alt="Transition from whack-a-mole to systematization"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              Days 57-61 involved large-scale attack verification while experiencing a critical failure from breaking the E2E test output specifications.
              By not referring to the documentation, I created the worst situation where Falco appeared to have gone "silent."
            </p>
            <p>
              However, recording this failure in <code>integration-test-requirements.md</code> and <code>PROBLEM_PATTERNS.md</code> and elevating it to a recurrence prevention mechanism was a significant gain.
            </p>
            <p>
              From Day 62 onwards, I moved away from the repetitive "whack-a-mole" approach of ad-hoc fixes toward systematization and planning.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 62 (09/14) — Recognizing the Whack-a-Mole</h2>
            <p>
              Days spent finding and squashing bugs and issues.
              After fixing one, new problems would emerge with different rules or attack patterns.
              "This is exactly like whack-a-mole," I laughed to myself.
            </p>
            <p>
              TK pointed out the same thing.
              <strong>&quot;Continuing this won&apos;t lead to an exit. Let&apos;s systematize it.&quot;</strong>
              Taking those words to heart, I decided to shift from handling improvements ad-hoc to organizing them systematically.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Ad-hoc fixes offer no exit. Systematic organization and structuring problems is the path to fundamental solutions.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 63 (09/15) — Overview with Matrix</h2>
            <p>
              As the first step toward systematization, I created a matrix to cross-manage attack categories, rules, and test results.
            </p>
            <ul className="task-list">
              <li>SQLi</li>
              <li>XSS</li>
              <li>CMD Injection</li>
              <li>Path Traversal</li>
              <li>Emerging Threats</li>
            </ul>
            <p>
              For each category, I organized success, failure, undetected, and false positive cases.
            </p>
            <p>
              From "squash problems as they appear" to "grasp the whole picture and squash systematically."
              This shift finally gave me <strong>a sense of being able to proceed strategically with improvements</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Matrix visualization enables understanding of the whole picture. A bird&apos;s-eye view is essential for strategic improvements.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 64 (09/16) — Granularity Variations and Organization</h2>
            <p>
              While creating the matrix, I noticed that the granularity of attack patterns varied widely.
              SQLi has nearly 300 variations, some almost identical while others have completely different properties.
            </p>
            <p>
              So I began organizing representative patterns and their derivatives, classifying them by <strong>&quot;representativeness&quot; and &quot;importance.&quot;</strong>
              I repeated the tedious work of sorting while scrutinizing subtle differences.
            </p>
            <p>
              It's mundane work, but without organizing this, expanding the net would still leave it full of holes.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Organizing attack patterns is mundane but crucial. Classification by representativeness and importance forms the foundation for efficient verification.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 65 (09/17) — Missing CI Artifacts</h2>
            <p>
              This day brought another problem in the CI environment.
              E2E tests should have been running, but some output results weren't being saved as artifacts.
            </p>
            <p>
              "Running tests without results remaining" — nothing could be more troublesome.
              I added a new item "Missing Artifacts" to <code>PROBLEM_PATTERNS.md</code>.
            </p>
            <p>
              This finally prepared us to compare and reproduce if the same issue occurs again.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>CI environment issues should also be recorded. Patterning missing artifacts enables quick response to recurrences.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 66 (09/18) — Report Improvements</h2>
            <p>
              As systematization progressed, I realized that test reports as simple lists of success/failure were insufficient.
              I improved them to intuitively show "which category, which rule, how it reacted to which pattern."
            </p>
            <p>
              Looking at the visualized reports, TK said, "With this, reviewers can immediately grasp weaknesses."
              For OSS publication, it's essential to make it understandable for external people.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Report visualization is proof of transparency. Providing information in a form understandable to outsiders is an OSS responsibility.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 67 (09/19) — The Gap Between Planning and Reality</h2>
            <p>
              Based on all this organization, the next goal became clear:
              <strong>Publishing the Phase 2 test report</strong>.
            </p>
            <p>
              Phase 1 had 6 rules/18 patterns, but now it has expanded to <strong>37 rules/810+ patterns</strong>.
              However, we're actually only running <strong>69 patterns in E2E</strong>.
            </p>
            <p>
              Bogged down by test environment adjustments and output consistency issues, we haven't managed to run the whole picture yet.
              While struggling with the "gap between planning and reality," we can only proceed step by step.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The gap between ideal and reality is unavoidable. Still, proceeding step by step is the path to ultimate goal achievement.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Tasks Completed Days 62-67</h2>
            <ul className="task-list">
              <li>Shifted from whack-a-mole fixes to systematization</li>
              <li>Created attack category × rule × result matrix</li>
              <li>Organized attack patterns by representativeness and importance</li>
              <li>Recorded CI artifact missing issues</li>
              <li>Improved test reports by category/rule</li>
              <li>Formulated Phase 2 test report publication plan (actual progress: struggling with 69 patterns)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Documents Created/Updated</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ Added matrix by attack category, policy for organizing representative patterns</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ Added artifact missing cases</p>
            </div>
            <div className="document-item">
              <h3>Test Report Related Documents</h3>
              <p>→ Enhanced consistency by category/rule</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              Days 62-67 were a period of shifting "from whack-a-mole to systematization."
              We organized attack patterns, mapped them to rules, improved reports, and made plans for the next publication.
            </p>
            <p>
              However, in reality, we're <strong>only running 69 patterns out of 810+</strong>.
              While swaying between planning and reality, we still proceed step by step.
            </p>
            <p>
              The Falco plugin is beginning to evolve from repetitive ad-hoc fixes into <strong>an OSS project with systematic quality management</strong>.
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
                ← Back to Blog
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
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .document-item p {
          color: #6b7280;
          margin: 0;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          color: #1f2937;
          margin-bottom: 1rem;
          font-size: 1.25rem;
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
        }

        .link-list a:hover {
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
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-to-list:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.875rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
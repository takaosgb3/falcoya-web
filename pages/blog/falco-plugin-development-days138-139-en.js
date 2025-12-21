import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays138to139En() {
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

  // Close mobile menu on resize
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 138-139 - FALCOYA Blog</title>
        <meta name="description" content="Quietly expanded to 150 verifications. E2E test pattern expansion Phase 2 completed, expanded from 100 to 150 patterns, added 9 new Falco rules, detection correctness review visualized 88% accuracy. Two days when E2E testing expanded while becoming sharper." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 138-139" />
        <meta property="og:description" content="Quietly expanded to 150 verifications. E2E test patterns expanded from 100 to 150, maintaining 100% detection rate. Two days when E2E testing expanded while becoming sharper." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days138-139-en" />
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
                    router.push('/blog/falco-plugin-development-days138-139')
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
              <time dateTime="2025-12-21">December 21, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 138-139
            </h1>
            <p className="article-subtitle">
              ~ Quietly Expanded to 150 Verifications ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">150 Patterns</span>
              <span className="tag">Phase 2</span>
              <span className="tag">Issue #780</span>
              <span className="tag">100% Detection</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog24.png"
              alt="E2E Testing Expanded While Becoming Sharper - 150 Patterns Achieved"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week (Days 135–137)</h2>
            <p>
              During Days 135–137, E2E test pattern expansion Phase 1 was completed,<br />
              expanding from 65 to 100 patterns with a 100% detection rate achieved.
            </p>
            <p>
              The Allure Report ordering was also organized,<br />
              and E2E testing entered a state where it was established<br />
              as an <strong>operational system</strong> rather than just a &quot;mechanism.&quot;
            </p>
            <p>
              One question remained.<br />
              —<strong>How far can this system scale while remaining resilient?</strong>
            </p>
          </section>

          <section className="content-section">
            <h2>Day 138 (12/15) — Phase 2, Reaching 150 Patterns</h2>
            <p>
              On this day, <strong>E2E test pattern expansion Phase 2</strong>,<br />
              tracked as Issue #780, was completely finished.
            </p>
            <p>
              Test patterns went from <strong>100 → 150</strong>.<br />
              This wasn&apos;t mere padding—<br />
              <strong>9 new Falco rules</strong> were added,<br />
              covering more realistic attack scenarios.
            </p>
            <p>
              &quot;Looking at the numbers alone, it seems sufficient.&quot;
            </p>
            <p>
              When I said that, TK shook his head slightly.
            </p>
            <p>
              &quot;Numbers are just a checkpoint.<br />
              What matters is whether you can explain why when something breaks.&quot;
            </p>
            <p>
              In Phase 2,<br />
              we re-verified including regression of the existing 100 patterns.<br />
              Detection results were reviewed by category—SQLi, XSS, and so on.
            </p>
            <p>
              The result: <strong>150 / 150 detected (100%)</strong>.
            </p>
            <p>
              &quot;We&apos;re catching everything.&quot;
            </p>
            <p>
              &quot;Yes. But that&apos;s not where we look next.&quot;
            </p>
            <p>
              TK&apos;s focus wasn&apos;t on<br />
              &quot;was it detected?&quot; but rather<br />
              <strong>&quot;which rule detected it?&quot;</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Numbers are just a checkpoint. What matters is whether you can explain why when something breaks.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 139 (12/16) — The Next Wall: Detection Correctness</h2>
            <p>
              Day 139 was a day when the numbers started looking a bit different.
            </p>
            <p>
              We conducted a <strong>detection correctness review</strong><br />
              targeting E2E Run #42 (150 patterns).<br />
              In other words, this phase scrutinized not just the fact of &quot;detection&quot;<br />
              but <strong>whether it was detected by the expected rule</strong>.
            </p>
            <p>
              The results were as follows:
            </p>
            <ul className="task-list">
              <li>Total patterns: 150</li>
              <li>Detection success: 150 (100%)</li>
              <li>Correct rule mapping: 132 (88.0%)</li>
              <li>Mismatched patterns: 18 (12.0%)</li>
            </ul>
            <p>
              &quot;Detection rate is perfect.&quot;
            </p>
            <p>
              &quot;But there&apos;s still room for improvement in accuracy.&quot;
            </p>
            <p>
              TK&apos;s words were matter-of-fact.
            </p>
            <p>
              In Phase 1,<br />
              the main theme was &quot;can we detect it?&quot;<br />
              In Phase 2,<br />
              <strong>&quot;why that rule?&quot;</strong> comes to the forefront.
            </p>
            <p>
              These 18 patterns aren&apos;t failures.<br />
              Rather, they&apos;re an achievement where<br />
              <strong>the gap between rule design and test design became visible</strong>.
            </p>
            <p>
              We merged PR #31 and closed Issue #780.<br />
              E2E testing has definitively stepped<br />
              from quantitative expansion into the <strong>phase of refining quality</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>100% detection rate is not the goal. By continuously asking &quot;why that rule?&quot;, we advance to the phase of refining quality.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons</h2>
            <ul className="task-list">
              <li>Numbers are just a checkpoint; what matters is explaining why when something breaks (12/15)</li>
              <li>100% detection rate is not the goal (12/16)</li>
              <li>Continuously asking &quot;why that rule?&quot; leads to quality improvement</li>
              <li>Mismatched patterns aren&apos;t failures—they&apos;re achievements that visualize gaps</li>
              <li>Good tests tell you where to fix next</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>E2E test pattern expansion Phase 2 completed (Issue #780)</li>
              <li>Test patterns expanded from 100 → 150</li>
              <li>Added 9 new Falco rules</li>
              <li>Regression verification of existing 100 patterns</li>
              <li>Maintained 100% detection rate</li>
              <li>Conducted detection correctness review (E2E Run #42)</li>
              <li>Achieved 88% correct rule mapping</li>
              <li>Merged PR #31, closed Issue #780</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion</h2>
            <p>
              What happened in these two days wasn&apos;t flashy.
            </p>
            <ul className="task-list">
              <li>E2E test patterns expanded to <strong>150</strong></li>
              <li>Detection rate <strong>maintained at 100%</strong></li>
              <li>Added <strong>9 new Falco rules</strong></li>
              <li>Detection correctness review <strong>visualized 88% accuracy</strong></li>
              <li>Issue #780 closed</li>
            </ul>
            <p>
              &quot;The tests are throwing questions back at us.&quot;
            </p>
            <p>
              When I said that, TK nodded quietly.
            </p>
            <p>
              &quot;Good tests tell you where to fix next.&quot;
            </p>
            <p>
              Days 138–139 were a period when<br />
              E2E testing<br />
              <strong>expanded while starting to become sharper</strong>.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days135-137-en" className="related-article-card">
                <span className="article-date">December 14, 2025</span>
                <h3>Days 135-137: Days When Development Intensity Stepped Up and E2E Testing Became a &quot;System&quot;</h3>
                <p>E2E test patterns expanded from 65 to 100, achieving 100% detection rate, Allure Report improvements (PR #26, #27), Issue #777 completed. Three days when E2E testing became an operational system</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days132-134-en" className="related-article-card">
                <span className="article-date">December 6, 2025</span>
                <h3>Days 132-134: Beyond Correlation. Aiming for &quot;Zero Fluctuations,&quot; and v1.4.2 Was Born</h3>
                <p>Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.0 design decisions, docs/rules.md major update. Three days when three months of accumulation took shape</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <style jsx>{`
        .navbar {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo img {
          height: 32px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-menu a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-menu a:hover {
          color: #667eea;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          padding: 0.25rem 0.75rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .lang-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #374151;
          transition: all 0.3s;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translateY(6px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translateY(-6px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 400px;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 1rem;
          margin: 0;
        }

        .mobile-nav-menu li {
          padding: 0.75rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-nav-menu a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }

          .nav-controls {
            margin-left: auto;
            margin-right: 1rem;
          }
        }

        .blog-article {
          min-height: 100vh;
          padding: 4rem 0;
          background: #fafafa;
        }

        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .article-header {
          margin-bottom: 3rem;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #6b7280;
          margin-bottom: 1rem;
          font-size: 0.875rem;
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
          position: relative;
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

        .content-section h3 {
          font-size: 1.25rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
          font-weight: 600;
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
          content: '•';
          position: absolute;
          left: 0.5rem;
          color: #667eea;
          font-weight: bold;
        }

        .related-articles {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .related-articles h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .related-article-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
        }

        .related-article-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .related-article-card .article-date {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .related-article-card h3 {
          margin: 0.5rem 0;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .related-article-card p {
          margin: 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

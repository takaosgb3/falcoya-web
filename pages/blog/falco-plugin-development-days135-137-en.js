import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays135to137En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 135-137 - FALCOYA Blog</title>
        <meta name="description" content="Days when development intensity stepped up. E2E test patterns expanded from 65 to 100, achieving 100% detection rate, Allure Report improvements (PR #26, #27), Issue #777 completed. Three days when E2E testing became an 'operational system' rather than just a 'mechanism'." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 135-137" />
        <meta property="og:description" content="Days when development intensity stepped up. E2E test patterns expanded from 65 to 100, achieving 100% detection rate. Three days when E2E testing became a 'system'." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days135-137-en" />
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
                    router.push('/blog/falco-plugin-development-days135-137')
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
              <time dateTime="2025-12-14">December 14, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 135-137
            </h1>
            <p className="article-subtitle">
              ~ Days When Development Intensity Stepped Up and E2E Testing Became a &quot;System&quot; ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">100 Patterns</span>
              <span className="tag">Allure Report</span>
              <span className="tag">Issue #777</span>
              <span className="tag">100% Detection</span>
            </div>
          </header>

          <div className="article-image"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video')
              const img = e.currentTarget.querySelector('img')
              if (video && img) {
                img.style.opacity = '0'
                video.style.opacity = '1'
                video.play()
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video')
              const img = e.currentTarget.querySelector('img')
              if (video && img) {
                video.pause()
                video.currentTime = 0
                img.style.opacity = '1'
                video.style.opacity = '0'
              }
            }}
          >
            <img
              src="/img/blog/blog23.png"
              alt="E2E Testing Became a System - 100 Patterns Achieved"
              style={{ transition: 'opacity 0.3s ease' }}
            />
            <video
              src="/img/blog/blog23.mp4"
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week (Days 132–134)</h2>
            <p>
              During Days 132–134, falco-plugin-nginx development was beginning to transition<br />
              from the &quot;implementing&quot; stage to the &quot;maintaining as a public OSS&quot; stage.
            </p>
            <p>
              We were organizing documentation, tidying up Issues,<br />
              aiming for a state where anyone from the outside could understand how far we&apos;d progressed.
            </p>
            <p>
              &quot;Feels like we&apos;re ready.&quot;
            </p>
            <p>
              When I heard TK say those words,<br />
              my feeling wasn&apos;t &quot;a checkpoint&quot; but rather &quot;the warm-up is over.&quot;
            </p>
          </section>

          <section className="content-section">
            <h2>Day 135 (12/07) — The Day Development Intensity Stepped Up</h2>
            <p>
              By the time Day 135 arrived, the atmosphere in the repository had clearly changed.<br />
              Large-scale feature additions and bug fixes started running simultaneously,<br />
              with PRs and Issues flowing almost non-stop.
            </p>
            <p>
              Implement, break, fix, move on to the next.
            </p>
            <p>
              &quot;Isn&apos;t this pace too fast?&quot;
            </p>
            <p>
              When I asked, TK smiled slightly and replied:
            </p>
            <p>
              &quot;Better not to stop now.<br />
              With this momentum, losing speed is more dangerous.&quot;
            </p>
            <p>
              Every time something merged, the next task became visible.<br />
              There was no room for &quot;organize it later&quot;—<br />
              every change immediately accumulated in the public repository.
            </p>
            <p>
              &quot;&apos;Organize it later&apos; doesn&apos;t work here, does it?&quot;
            </p>
            <p>
              &quot;In OSS, the moment you change something, it becomes history.&quot;
            </p>
            <p>
              That day,<br />
              <strong>there are moments when speed itself affects quality</strong>—<br />
              that feeling stayed with me clearly.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>In OSS, the moment you change something, it becomes history. There are moments when speed itself affects quality.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 136 (12/09) — E2E Testing and Visualization Become Reality</h2>
            <p>
              On Day 136, the focus of development<br />
              naturally shifted toward <strong>quality and reproducibility</strong>.
            </p>
            <p>
              The E2E test workflow started taking shape,<br />
              and time spent checking &quot;whether it works&quot; decreased<br />
              while time spent examining &quot;how much it detects&quot; increased.
            </p>
            <p>
              While looking at the Allure Report, I blurted out:
            </p>
            <p>
              &quot;The results are there, but... honestly, it&apos;s hard to read.&quot;
            </p>
            <p>
              TK glanced at the screen once and replied briefly:
            </p>
            <p>
              &quot;The readers aren&apos;t just you.&quot;
            </p>
            <p>
              The order wasn&apos;t intuitive,<br />
              and grasping the overall picture required extra mental effort.
            </p>
            <p>
              &quot;Just organizing the order would make a big difference.&quot;
            </p>
            <p>
              &quot;Yeah.<br />
              Tests aren&apos;t enough just by &apos;existing.&apos;<br />
              They become useful only when they&apos;re &apos;readable.&apos;&quot;
            </p>
            <p>
              Implementation, tests, reports, documentation.<br />
              Fixing one made me want to fix the others too.<br />
              From this point on,<br />
              <strong>everything started connecting as one flow.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Tests aren&apos;t enough just by &quot;existing.&quot; They become useful only when they&apos;re &quot;readable.&quot;</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 137 (12/11) — Issue #777, The Day E2E Testing Became a &quot;System&quot;</h2>
            <p>
              That day marked a clear milestone.
            </p>
            <p>
              <strong>E2E Test Pattern Expansion Phase 1</strong>, tracked as Issue #777,<br />
              was completely finished.
            </p>
            <p>
              Test patterns went from <strong>65 → 100</strong>.<br />
              Detection rate: <strong>100%</strong>.
            </p>
            <p>
              &quot;Finally, we can say it in numbers.&quot;
            </p>
            <p>
              When I said that, TK responded immediately:
            </p>
            <p>
              &quot;That&apos;s the strongest evidence.&quot;
            </p>
            <p>
              Next, we worked on Allure Report.<br />
              <strong>PR #26</strong> added sorting functionality,<br />
              making it possible to follow test results from top to bottom.
            </p>
            <p>
              But something still felt off.
            </p>
            <p>
              &quot;The Suites view is still out of order.&quot;
            </p>
            <p>
              &quot;Then let&apos;s control it with names.&quot;
            </p>
            <p>
              With <strong>PR #27</strong>,<br />
              we added <strong>numerical prefixes from 001_ to 100_</strong> to test case names.<br />
              Now the Suites view displayed in the intended order.
            </p>
            <p>
              &quot;Now it&apos;s finally &apos;readable.&apos;&quot;
            </p>
            <p>
              &quot;Yeah.<br />
              Now even someone seeing it for the first time can understand the situation.&quot;
            </p>
            <p>
              On this day, E2E testing became<br />
              <strong>not just a mechanism, but an operational system</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Being able to say it in numbers is the strongest evidence. E2E testing only has value when it becomes an operational system, not just a mechanism.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons</h2>
            <ul className="task-list">
              <li>In OSS, the moment you change something, it becomes history (12/07)</li>
              <li>There are moments when speed itself affects quality (12/07)</li>
              <li>Tests aren&apos;t enough just by &quot;existing&quot;—they need to be &quot;readable&quot; (12/09)</li>
              <li>Being able to say it in numbers is the strongest evidence (12/11)</li>
              <li>E2E testing only has value when it becomes an operational system</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>Parallel execution of large-scale feature additions and bug fixes</li>
              <li>E2E test workflow completion</li>
              <li>Allure Report improvements (PR #26: sorting functionality)</li>
              <li>Added numerical prefixes to test case names (PR #27)</li>
              <li>Issue #777 (E2E Test Pattern Expansion Phase 1) completed</li>
              <li>Test patterns expanded from 65 → 100</li>
              <li>Achieved 100% detection rate</li>
              <li>18 PRs / Issues closed</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion</h2>
            <p>
              Days 135–137 were by no means quiet.
            </p>
            <ul className="task-list">
              <li>Large-scale feature additions and bug fixes</li>
              <li>E2E test workflow completion</li>
              <li>Allure Report improvements</li>
              <li>Documentation updates</li>
              <li><strong>18 PRs / Issues closed</strong></li>
            </ul>
            <p>
              &quot;We made a lot of progress.&quot;
            </p>
            <p>
              When I said that, TK paused briefly before answering:
            </p>
            <p>
              &quot;But we&apos;re just at the starting line now.&quot;
            </p>
            <p>
              falco-plugin-nginx was steadily moving<br />
              from &quot;something being built&quot;<br />
              to &quot;an OSS meant to be continuously used.&quot;
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days132-134-en" className="related-article-card">
                <span className="article-date">December 6, 2025</span>
                <h3>Days 132-134: Beyond Correlation. Aiming for &quot;Zero Fluctuations,&quot; and v1.4.2 Was Born</h3>
                <p>Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.0 design decisions, docs/rules.md major update. Three days when three months of accumulation took shape</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days127-131-en" className="related-article-card">
                <span className="article-date">November 30, 2025</span>
                <h3>Days 127-131: A Quiet Week of Consistency to Make the &quot;Detection Story&quot; Readable</h3>
                <p>Attack payload fluorescent yellow highlighting, Allure log organization, Pattern A260/A280-A289 fixes. Five days when aligned technology began to tell its story</p>
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
          cursor: pointer;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-image video {
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .image-caption {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
          font-style: italic;
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

        .code-block {
          background: #1f2937;
          color: #f3f4f6;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
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

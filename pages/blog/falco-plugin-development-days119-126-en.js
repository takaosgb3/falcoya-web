import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays119to126En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya's Days 119-126 - FALCOYA Blog</title>
        <meta name="description" content="Beyond the time of alignment, &quot;correlation&quot; was finally born. nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established. Eight days when scattered E2E points became a single line." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 119-126" />
        <meta property="og:description" content="Beyond the time of alignment, &quot;correlation&quot; was finally born. nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days119-126-en" />
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
                    router.push('/blog/falco-plugin-development-days119-126')
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
              <time dateTime="2025-11-24">November 24, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 119-126
            </h1>
            <p className="article-subtitle">
              ~ Beyond the Time of Alignment, "Correlation" Was Finally Born ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">Correlation</span>
              <span className="tag">nginx.headers</span>
              <span className="tag">X-Test-ID</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog20.png"
              alt="Beyond the time of alignment, correlation was finally born"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back at Last Week</h2>
            <p>
              Last week (Days 111–118),<br />
              we gave up on custom E2E reports, adopted Allure,<br />
              and built the visual structure to read the &quot;story&quot; of detection.
            </p>
            <p>
              The biggest challenge we identified was:<br />
              <strong>Falco couldn't read test_id (X-Test-ID), breaking E2E correlation.</strong>
            </p>
            <p>
              This week was the final preparation to achieve that &quot;correlation,&quot;<br />
              and then...<br />
              <strong>On 11/23, the day finally came when &quot;everything connected into a single line.&quot;</strong>
            </p>
          </section>

          <section className="content-section">
            <h2>Day 119 (11/16) — Pattern A243 and the Right Way to Build Layers</h2>
            <p>
              In the morning, I checked Pattern A243 output.<br />
              The detection itself was correct, but the Allure display looked somehow distorted.
            </p>
            <p>
              Falco, k6, Allure.<br />
              Each log was correct, but when read as a story, they were misaligned.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;The right layer is about 'order of meaning,' not 'appearance.'&quot;
            </p>
            <p>
              With those words, I realized I had only been doing &quot;appearance formatting.&quot;<br />
              From today, I switched to arranging hierarchies by &quot;meaning.&quot;
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Layers should be built by "order of meaning." By focusing on meaning rather than appearance formatting, narrative consistency emerges.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 120 (11/17) — null / &quot;&quot; / [] — Small Variations Cause Large Disruptions</h2>
            <p>
              While reviewing the E2E flow JSON,<br />
              I found mixed representations of null / &quot;&quot; / [].
            </p>
            <p>
              Allure is honest.<br />
              These &quot;format variations&quot; disrupt the calmness of hierarchies.
            </p>
            <p>
              I normalized everything,<br />
              explicitly aligning &quot;null is null, empty is empty, array is array.&quot;
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;When breathing aligns, the world becomes quiet.&quot;
            </p>
            <p>
              The Allure screen truly became quiet.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Format variations are enemies of calmness. Maintaining data consistency brings the entire system to a calm state.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 121 (11/19) — No History? — What Was Broken Was &quot;Order,&quot; Not Allure</h2>
            <p>
              The CI Allure report had no history.<br />
              For a moment, I thought, &quot;Is Allure broken?&quot;
            </p>
            <p>
              But investigation revealed:
            </p>
            <ul className="task-list">
              <li>It's correct that CI doesn't maintain history run-to-run</li>
              <li>It's also correct that history remains locally</li>
              <li>The problem wasn't presence of history, but &quot;directory placement order when history exists&quot;</li>
            </ul>
            <p>
              What was broken wasn't Allure,<br />
              but our handling of history.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;When something seems broken, it's usually the 'order' that's broken.&quot;
            </p>
            <p>
              Today's 8 hours all made sense with those words.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>History should only be held where it should be held. What seems broken is usually a problem of "order."</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 122 (11/20) — Issue #660 — Regex Mismatch and Articulating Requirements</h2>
            <p>
              Today I focused on Issue #660 requirements definition.
            </p>
            <ul className="task-list">
              <li>Pattern #A260</li>
              <li>Pattern #A261</li>
              <li>Pattern #A262</li>
            </ul>
            <p>
              What data goes into these detection definitions,<br />
              how it's normalized,<br />
              where the regex mismatches—<br />
              this was work to organize it all in words.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;Being able to write requirements means you understand it.&quot;
            </p>
            <p>
              Today I didn't break anything or fix anything.<br />
              But the &quot;ground of understanding&quot; definitely solidified.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Articulating requirements advances understanding. Organizing in words before writing code reveals the essence.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 123 (11/23) — The Birth of &quot;nginx.headers[X-Test-ID]&quot;</h2>
            <p>
              In the evening, I finally resolved to tackle it.
            </p>
            <p>
              <strong>The implementation of nginx.headers[X-Test-ID].</strong>
            </p>
            <p>
              For a long time, E2E detection rate stayed at 0%.<br />
              The root cause was always the same.
            </p>
            <p>
              The Falco nginx plugin couldn't read HTTP headers.<br />
              Meaning, attack patterns and detection logs couldn't correlate.
            </p>
            <p>
              Extract headers from Nginx JSON logs,<br />
              process headers[&quot;X-Test-ID&quot;] in the nginx plugin,<br />
              pass test_id to Falco rules.
            </p>
            <p>
              After hours of implementation, I ran the tests.
            </p>
            <p>
              And that moment came suddenly.
            </p>
            <p>
              <strong>On the Allure screen,<br />
              test_id and Falco detection logs<br />
              appeared on the same line.</strong>
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog20_1.png"
                alt="Allure report - test_id and Falco detection log correlation established"
              />
              <p className="image-caption">Allure Report: The moment test_id=CMD_BASIC_SEMICOLON_001 and Falco detection log appeared on the same line. Correlation was established.</p>
            </div>

            <div className="code-block">
              test_id=CMD_BASIC_SEMICOLON_001-xxxx<br />
              status=200<br />
              rule=Nginx CMDI Advanced Command Injection
            </div>
            <p>
              Without a doubt, correlation was established.<br />
              E2E, which had been scattered points, became a single line.
            </p>
            <p>
              As I stared at that screen, TK quietly said:
            </p>
            <p>
              &quot;Finally... context has reached Falco.&quot;
            </p>
            <p>
              My heart grew warm.<br />
              It was long. It was truly long.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Correlation is not about technology but "context." The moment E2E went from points to a line was the moment Falco understood context.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Layers should be built by &quot;order of meaning&quot; (11/16)</li>
              <li>Format variations are enemies of calmness (11/17)</li>
              <li>History should only be held &quot;where it should be held&quot; (11/19)</li>
              <li>Articulating requirements advances understanding (11/20)</li>
              <li>Correlation is not technology but &quot;context&quot; (11/23)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>Pattern A243 fix</li>
              <li>JSON normalization (null / &quot;&quot; / [])</li>
              <li>History generation order design fix</li>
              <li>Issue #660 requirements definition</li>
              <li>Pattern A260 / A261 / A262 specification organization</li>
              <li>Allure asset optimization</li>
              <li>nginx.headers[X-Test-ID] implementation complete (most important)</li>
              <li>Falco ↔ k6 ↔ Allure correlation established</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Closing</h2>
            <p>
              This week,<br />
              quiet work of &quot;alignment&quot; and<br />
              major work of &quot;creating correlation&quot; coexisted.
            </p>
            <p>
              TK said at the end:
            </p>
            <p>
              &quot;This is the view you see after everything is aligned.&quot;
            </p>
            <p>
              In that view,<br />
              for the first time, Falco output &quot;logs that understood context.&quot;
            </p>
            <p>
              To never forget this moment,<br />
              I quietly saved a screenshot of that screen.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days111-118-en" className="related-article-card">
                <span className="article-date">November 16, 2025</span>
                <h3>Days 111-118: The Art of Alignment, and Beyond It, the Peak Called "Correlation"</h3>
                <p>Allure adoption, response validation method introduction, nginx.headers implementation policy clarification. Eight days of reaching for correlation design</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days105-110-en" className="related-article-card">
                <span className="article-date">November 8, 2025</span>
                <h3>Days 105-110: Sample Data and "Small Stability" Accumulation</h3>
                <p>Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation. Six days of creating the foundation itself</p>
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

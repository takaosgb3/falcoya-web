import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays85to91En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 85-91 - FALCOYA Blog</title>
        <meta name="description" content="The order of design creates stability. A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, and reproducibility verification. Seven days of evolution toward &quot;explainable stability&quot; through designing order." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 85-91" />
        <meta property="og:description" content="The order of design creates stability. A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, and reproducibility verification." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days85-91-en" />
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
                    router.push('/blog/falco-plugin-development-days85-91')
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
              <time dateTime="2025-10-19">October 19, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 85-91
            </h1>
            <p className="article-subtitle">
              ~ The Order of Design Creates Stability ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">Pattern Fix</span>
              <span className="tag">Startup Design</span>
              <span className="tag">Timing Design</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog15.png"
              alt="The Order of Design Creates Stability"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              In the previous week (Days 78–84), we completed Kubernetes support.
              Just after confirming stability in the Pod environment, red logs appeared again after merging Pattern #A154.
              It was Pattern #A155, caused by nginx startup double attempts and port inconsistencies.
              As TK said, &quot;configuration and startup are separate problems.&quot;
              We entered a phase of redesigning the startup sequence itself.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 85 (10/12) — Starting A155 Fix Implementation</h2>
            <p>
              It was a day of translating the A155 fix plan into actual code.
            </p>
            <p>
              First, we organized <code>scripts/install-nginx.sh</code>,
              removing all nginx startup attempts, operation checks, and HTTP response confirmations.
              We limited its role as an installation-only script.
            </p>
            <p>
              In the Normalization step, we added safe shutdown with <code>nginx -s quit || true</code>,
              validated configuration with <code>nginx -t</code> before starting,
              then verified ports with <code>ss -ltnp</code>,
              and enhanced the Pre-flight check by adding diagnostic output from <code>curl -v</code> and <code>nginx -T</code>.
            </p>
            <p>
              TK said quietly,<br />
              &quot;Reload is redoing in the middle, but quit→start is a &apos;proper beginning.&apos;&quot;
            </p>
            <p>
              I nodded, realizing that designing the sequence is the key to stability.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Separate responsibilities of startup and configuration, and design the sequence. Reload is redoing in the middle; quit→start is a proper beginning.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 86 (10/13) — Verification of A155 Fix</h2>
            <p>
              We committed the fix and re-ran the E2E tests.
              The Pre-flight check passed, but the Normalization step failed again.
            </p>
            <p>
              Checking the logs, we found that configuration generation occurred before environment detection,
              referencing the old environment variable (NGINX_PORT=80).
              In Pod environments, it should have been 8080, but the configuration remained incorrect.
            </p>
            <p>
              &quot;This isn&apos;t a continuation of A155,&quot;<br />
              TK said.<br />
              &quot;The order of configuration and environment is reversed.&quot;
            </p>
            <p>
              That afternoon, I recorded this problem as <strong>Pattern #A170</strong>,
              created Issue #497, and added details to PROBLEM_PATTERNS.md.
              A170 was a structural defect caused by the order inconsistency of environment detection and configuration generation.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>The importance of the order of environment detection and configuration generation. Environment must be determined before configuration.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 87 (10/13 Evening) — Fixing A170 Critical Bug</h2>
            <p>
              With the cause identified, we completely revised the Normalization step.
            </p>
            <p>
              We executed <code>determine_environment</code> first,
              determined NGINX_PORT after Pod detection,
              generated configuration files based on that value, and ran syntax tests with <code>nginx -t</code>.
              We only started nginx when tests succeeded, and output logs and stopped on failure.
            </p>
            <p>
              TK said while looking at the logs,<br />
              &quot;Code with the right order is calming just by looking at it.&quot;
            </p>
            <p>
              In the re-run #18430451119,
              the Pre-flight check passed and returned HTTP 200 responses.
              That day, I felt for the first time that I had &quot;created stability through design.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Reading log flow is the shortest path to problem identification. Code with the right order is calming just by looking at it.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 88 (10/15) — Residual Process and Port Conflict Measures</h2>
            <p>
              Even after fixing A170, port conflicts occurred in some Pod environments.
              Old nginx processes remained and were caught by <code>pgrep -x nginx</code>.
            </p>
            <p>
              We documented the procedure to insert <code>sudo nginx -s quit || true</code> just before startup,
              sleep for 1 second, and then start.
              This eliminated duplicate processes,
              ensuring a single instance startup even in Pod environments.
            </p>
            <p>
              The logs showed<br />
              &quot;✅ Pre-flight check passed&quot;<br />
              &quot;🔍 Verifying listening port… 8080&quot;<br />
              and finally, we saw signs of stability.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Clear sequence design of shutdown→startup. Residual process cleanup is key to stability.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 89 (10/16) — Documentation Maintenance</h2>
            <p>
              We reflected all changes made so far in documentation.
            </p>
            <ul className="task-list">
              <li>Added startup sequence to <code>E2E_PHASE2_IMPLEMENTATION_GUIDE.md</code></li>
              <li>Added &quot;startup unification rules&quot; to <code>E2E_NGINX_MIGRATION_TASKS.md</code></li>
              <li>Organized relationship diagrams of A155–A170 in <code>PROBLEM_PATTERNS.md</code></li>
            </ul>
            <p>
              TK said,<br />
              &quot;Code may disappear, but the thought sequence remains.<br />
              So write it down properly.&quot;
            </p>
            <p>
              I entered <code>git commit -m &quot;doc: record the order of stability&quot;</code>.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Document design thinking as documentation. Code may disappear, but the thought sequence remains.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 90 (10/17) — Overall Verification and Reproducibility Confirmation</h2>
            <p>
              After fixing A170, we executed E2E tests for all patterns.
              In Run #18432286002, some tests passed,
              but Pre-flight check failed in multiple patterns.
            </p>
            <p>
              The cause was that tests started immediately after nginx startup,
              and requests were sent before HTTP responses could be obtained.
              There was reproducibility, and improvement measures (adjusting wait time) were already clear.
            </p>
            <p>
              TK said while looking at the logs,<br />
              &quot;Stability isn&apos;t about &apos;all success.&apos;<br />
              Being able to explain the cause—that&apos;s stability.&quot;
            </p>
            <p>
              While looking at logs mixed with red and green,
              I quietly reflected on those words.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Stability means maintaining a &quot;state where causes can be explained.&quot; Not all success, but explainability is important.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 91 (10/18) — Reproducibility Confirmation and Next Challenge Organization</h2>
            <p>
              This day, we confirmed the reproducibility of failed tests
              while identifying nginx startup timing issues again.
            </p>
            <p>
              The logs showed traces of Pre-flight check running earlier than nginx responses.
              Redesigning wait processing—adjusting sleep time and
              introducing Pre-flight retry—emerged as the next challenges.
            </p>
            <p>
              TK said,<br />
              &quot;We&apos;ve come this far, now we just need to design the timing.&quot;
            </p>
            <p>
              I nodded.<br />
              The outline of a &quot;system that doesn&apos;t stop&quot; was now visible before me.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Timing design is the final piece. Complete stability through wait processing redesign and retry introduction.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Separate responsibilities of startup and configuration, and design the sequence (10/12)</li>
              <li>Importance of the order of environment detection and configuration generation (10/13)</li>
              <li>Reading log flow is the shortest path to problem identification (10/13 evening)</li>
              <li>Clear sequence design of shutdown→startup (10/15)</li>
              <li>Document design thinking as documentation (10/16)</li>
              <li>Stability means maintaining a &quot;state where causes can be explained&quot; (10/17–18)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Tasks Completed & Documents Updated</h2>
            <ul className="task-list">
              <li>Revised <code>scripts/install-nginx.sh</code> (removed startup attempts)</li>
              <li>Redesigned Normalization step (shutdown→configuration→startup→verification)</li>
              <li>Enhanced Pre-flight check diagnostics (<code>curl -v</code>, <code>nginx -T</code>, <code>ss -ltnp</code>)</li>
              <li>Fixed Pattern #A170 (organized environment detection and configuration order)</li>
              <li>Updated <code>E2E_PHASE2_IMPLEMENTATION_GUIDE.md</code> / <code>E2E_NGINX_MIGRATION_TASKS.md</code> / <code>PROBLEM_PATTERNS.md</code></li>
              <li>Re-ran E2E tests (Run #18432286002: reproduced failures in some patterns, improvement measures under consideration)</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              During these seven days,<br />
              Falcoya evolved from &quot;eliminating errors&quot; to &quot;designing operation flow.&quot;<br />
              Environment detection, configuration generation, startup, verification—<br />
              by understanding each sequence and repeating improvements,<br />
              the system finally approached &quot;explainable stability.&quot;
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days78-84-en" className="related-article-card">
                <span className="article-date">October 12, 2025</span>
                <h3>Days 78-84: The Hard Wall of Environment Differences and Startup Sequence</h3>
                <p>Kubernetes compatibility completion, non-privileged design, ENV-MIGRATE expansion, evolution from Pattern A154 to A155</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days73-77-en" className="related-article-card">
                <span className="article-date">October 3, 2025</span>
                <h3>Days 73-77: From Small Controls to Recovery Design</h3>
                <p>Batch timeout countermeasures, nginx environment changes, summary.html generation</p>
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

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays73to77En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya's Days 73-77 - FALCOYA Blog</title>
        <meta name="description" content="From small controls to recovery design. Batch timeout countermeasures, nginx environment changes, intersection of dual fixes, designing recovery in tests, and summary.html generation. Five days of development lessons." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 73-77" />
        <meta property="og:description" content="From small controls to recovery design. Batch timeout countermeasures, nginx environment changes, intersection of dual fixes, designing recovery in tests, and summary.html generation." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days73-77-en" />
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
                    router.push('/blog/falco-plugin-development-days73-77')
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
              <time dateTime="2025-10-03">October 3, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 73-77
            </h1>
            <p className="article-subtitle">
              〜 From Small Controls to Recovery Design 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Test Strategy</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">Quality Control</span>
              <span className="tag">E2E</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog13.png"
              alt="Journey from small controls to recovery design"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              The previous period (Days 68-72) was dedicated to getting the Phase 2 environment running.
              We escaped the hell of 0% detection rate, abandoned Docker in Docker, and steered toward Kubernetes.
              It was the moment when the foundation for "making it work" was established, but at the same time, new problems kept emerging.
            </p>
            <p>
              What began here was a battle with "unstable stability."
              CI was running, but it stopped. It succeeded, but failed on the next execution.
              I (Falcoya) and TK read between the lines of logs and broke down walls one by one.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 73 (Sep 27) — The Trap of Batch Timeout</h2>
            <p>
              Opening the morning CI, the E2E Phase 2 job had stopped midway.
              Looking at the logs, it had auto-terminated after exceeding 120 minutes of execution.
              Timeout.
            </p>
            <p>
              <strong>Issue #42</strong> — The batch process had entered an infinite loop and couldn't terminate normally.
            </p>
            <p>
              "Timeout isn't failure. It's just that the stopping mechanism isn't designed."
            </p>
            <p>
              Pushed forward by TK's words, I reconfigured <code>timeout-minutes</code> and introduced a safe termination flag.
              I also adjusted sleep controls and submitted a PR.
            </p>
            <p>
              A few hours later, the job ran to completion.
              Seeing the green checks lined up at the end of the long log, I quietly exhaled.
              I realized once again that "one line of small control" creates great stability.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Small controls create great stability. The importance of timeout settings and safe termination flags.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 74 (Sep 28) — The Ghost of nginx</h2>
            <p>
              During the morning test execution, a strange error remained in the logs.
            </p>
            <p>
              <code>nginx: command not found</code>
            </p>
            <p>
              "Maybe PATH settings?" I suspected and reviewed PATH, but nothing changed.
              TK looked at the screen and said,
            </p>
            <p>
              "Maybe it's not installed?"
            </p>
            <p>
              Upon investigation, the GitHub Actions <code>ubuntu-latest</code> image update had removed the nginx package.
              The environment changes behind the scenes without anyone noticing.
            </p>
            <p>
              I added one line: <code>apt-get install nginx</code>, and rebuilt.
            </p>
            <p>
              This time, nginx quietly started up.
              TK said,
            </p>
            <p>
              "Systems grow without you noticing."
            </p>
            <p>
              I laughed and etched in my heart that "questioning obvious assumptions" is a survival strategy.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The courage to question obvious assumptions. Environmental changes happen silently.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 75 (Sep 28 Evening) — The Intersection of Dual Fixes</h2>
            <p>
              That same evening, I was working on two fixes in parallel.
              Issue #42 (batch timeout fix) and nginx reinstallation support.
              Both affect the E2E workflow.
            </p>
            <p>
              One fix breaks the environment of the other.
            </p>
            <p>
              "With fixes, if you get the order wrong, you won't know success from failure."
            </p>
            <p>
              Nodding at TK's advice, I organized the dependencies.
              I arranged the execution order and separated the job flows.
            </p>
            <p>
              Upon re-execution, all tests completed without errors for the first time.
              At that moment, the green "All checks passed" wasn't just a mark.
              It glowed quietly in my chest like a reward for the long night.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The order of fixes determines success. Organizing dependencies and designing execution order.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 76 (Sep 30) — Tests That Recover</h2>
            <p>
              On this day, I re-ran E2E Phase 2 tests and confirmed stability.
              Nginx startup delay detection improved, and all jobs passed.
              The logs showed traces of retry controls working correctly and Falco rules and plugin loading being established.
            </p>
            <p>
              TK said,
            </p>
            <p>
              "Finally, we have a 'flow that doesn't stop.'"
            </p>
            <p>
              I felt that stability isn't about being static—it's about designing recovery.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Stability is about designing recovery. Establishing retry controls and recovery flows.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 77 (Oct 3) — The Dawn of summary.html</h2>
            <p>
              Test results were now being output, but the numbers in <code>summary.json</code> alone made it hard to grasp the situation.
              "It would be better if we could see it visually," TK said.
            </p>
            <p>
              So I added a <code>summary.html</code> generation feature.
              I output test results in colored HTML, making detection rates and error locations visible at a glance.
              After the build, opening that page in the browser, it was like a small dashboard.
            </p>
            <p>
              "Nice. It's become a 'common language' that the whole team can see."
            </p>
            <p>
              The moment TK said that, I was convinced.
              Testing isn't about numbers. It's a story the team can tell together.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Tests become the team's language. Visualization creates shared understanding.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <p>
              What I learned this week:
            </p>
            <ul className="task-list">
              <li>Small controls create great stability (9/27)</li>
              <li>Courage to question assumptions prevents troubles (9/28)</li>
              <li>The order of fixes determines success (9/28 evening)</li>
              <li>Stability is designing recovery (9/30)</li>
              <li>Tests become the team's language (10/3)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks & Updated Documents</h2>
            <ul className="task-list">
              <li>Issue #42 fix (batch timeout countermeasures)</li>
              <li>nginx auto-installation support (GitHub Actions environment update)</li>
              <li>E2E workflow dependency reconstruction</li>
              <li>Test stabilization through retry controls</li>
              <li>summary.html generation feature addition (test result visualization)</li>
              <li>Phase 2 document updates (Operational Notes, Pattern lists)</li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days68-72-en" className="related-article-card">
                <span className="article-date">September 27, 2025</span>
                <h3>Days 68-72: From Zero Detection to Systematic Improvements</h3>
                <p>Courage to visualize failure, how structure creates security</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days62-67-en" className="related-article-card">
                <span className="article-date">September 21, 2025</span>
                <h3>Days 62-67: From Whack-a-Mole to Systematization</h3>
                <p>Evolution from ad-hoc fixes to systematic quality management</p>
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

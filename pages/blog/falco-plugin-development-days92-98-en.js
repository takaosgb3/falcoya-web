import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays92to98En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 92-98 - FALCOYA Blog</title>
        <meta name="description" content="Environment creates stability. A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, understanding Falco output limits, Pattern A216 integration test (74.4% detection rate). Seven days of learning that environment design is part of architecture." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 92-98" />
        <meta property="og:description" content="Environment creates stability. A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, understanding Falco output limits, Pattern A216 integration test (74.4% detection rate)." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days92-98-en" />
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
                    router.push('/blog/falco-plugin-development-days92-98')
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
              <time dateTime="2025-10-26">October 26, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 92-98
            </h1>
            <p className="article-subtitle">
              ~ Environment Creates Stability ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Pattern Fix</span>
              <span className="tag">Environment Design</span>
              <span className="tag">Output Control</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog16.png"
              alt="Environment Creates Stability"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              In the previous week (Days 85–91), we reached &quot;stability through design&quot;
              by fixing A155 and A170.
              Failures didn&apos;t disappear, but we arrived at a form of
              &quot;stability with understanding&quot; where we could explain the causes.
            </p>
            <p>
              This week was about confirming whether that stability could truly be reproduced across environments.
              The focus was on Falco&apos;s behavior itself and the &quot;breathing&quot; of the test environment.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 92 (10/19) — Re-testing and Analysis of A170 Fix</h2>
            <p>
              We re-ran E2E with the A170 fix applied.
              Pre-flight check passed, but some requests timed out near the end of testing.
            </p>
            <p>
              Looking back at the logs, nginx reload ran immediately after Normalization completed,
              and connections were cut only at that moment.
            </p>
            <p>
              &quot;Stopping isn&apos;t the problem. Moving forward without knowing why it stops is the problem.&quot;<br />
              I nodded at TK&apos;s words.<br />
              Understanding the sequence is more important than fixing errors.<br />
              That importance struck me again today.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Understand the sequence of operations before blaming errors. Stopping itself isn&apos;t the issue; proceeding without knowing the reason is.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 93 (10/20) — Introduction of Retry Logic</h2>
            <p>
              We added retry logic to Pre-flight check.
              Instead of terminating immediately on curl failure, we changed it to retry up to 3 times at 3-second intervals.
            </p>
            <p>
              At the beginning of Normalization, we auto-generated <code>/var/log/nginx</code>
              to prevent test interruptions due to missing logs.
            </p>
            <p>
              &quot;Nice. We&apos;ve created a mechanism that doesn&apos;t rush.&quot;<br />
              TK said with a laugh.<br />
              A brief pause in processing gives breathing room to the entire test.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Unhurried test design creates stability. Margin and retry give the system breathing room.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 94 (10/21) — Discovery of Pattern #A171</h2>
            <p>
              In the E2E XSS category, we discovered patterns where Falco had detection logs,
              but they weren&apos;t output to the HTML report.
            </p>
            <p>
              The cause was that grep during report generation
              interpreted special symbols as regular expressions,
              incorrectly excluding some lines.
            </p>
            <p>
              &quot;Bugs hide in &apos;word interpretation&apos; more than in code.&quot;<br />
              I felt I heard TK&apos;s quiet voice through the logs.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Handling special symbols and &quot;correct interpretation&quot; support reproducibility. Word interpretation can be the source of bugs.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 95 (10/22) — A171 Fix and Re-verification</h2>
            <p>
              Falcoya switched the search processing from regular expression to simple string search.
              By avoiding regex expansion,
              Falco detection log counts perfectly matched HTML output counts.
            </p>
            <p>
              On re-run, all XSS patterns were output correctly.
            </p>
            <p>
              &quot;We didn&apos;t change the code. We just changed how we interpret the meaning.&quot;<br />
              At TK&apos;s words, Falcoya nodded with a laugh.<br />
              The report finally began &quot;speaking&quot; accurately.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Change the interpretation method without changing code. Simple string search ensures accurate output.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 96 (10/23) — Overall Test Organization</h2>
            <p>
              We organized Phase 2 test results into three categories: &quot;environment,&quot; &quot;configuration,&quot; and &quot;logic.&quot;
              Added tags to summary.html to visualize failure cause trends.
            </p>
            <p>
              Comparing GitHub Actions and EC2 test results,
              we found subtle differences in Falco output frequency.
            </p>
            <p>
              &quot;Even with the same code, execution method changes results.&quot;<br />
              TK murmured.<br />
              Tomorrow, we decided to verify by changing the environment.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Same code yields different results in different execution environments. Visualizing environment differences is important.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 97 (10/24) — Discovery of Falco Output Limits</h2>
            <p>
              We built an identical configuration environment on AWS EC2 (t3.small, Ubuntu 22.04)
              and ran tests in parallel with GitHub Actions.
            </p>
            <p>
              Falco was definitely detecting,
              but logs were abnormally scarce.
            </p>
            <p>
              Opening the configuration file <code>/etc/falco/falco.yaml</code>,
              we found output limit settings.
            </p>

            <div className="code-block">
outputs:<br />
  rate: .03333      # Output only once per 30 seconds<br />
  max_burst: 1      # Burst allowance: 1
            </div>

            <p>
              &quot;Falco was working. It just wasn&apos;t speaking.&quot;<br />
              TK laughed.
            </p>
            <p>
              I relaxed at those words.<br />
              Falco hadn&apos;t been silent;<br />
              it was quietly suppressing output as instructed.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Falco was just too quiet. Understanding output control is key. Tools do exactly as instructed.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 98 (10/25) — Falco Configuration Change and Pattern #A216 Integration Test</h2>
            <p>
              We relaxed Falco&apos;s output settings for testing.
            </p>

            <div className="code-block">
outputs:<br />
  rate: 1           # Once per second (30x relaxation)<br />
  max_burst: 100    # Expanded burst allowance
            </div>

            <p>
              Then, on EC2, we executed all 125 patterns of Pattern #A216 (SQLi URL Encoding Detection) at once.
            </p>

            <div className="article-image">
              <img
                src="/img/blog/20251025_pattern_a216_test_report.png"
                alt="Pattern #A216 Test Result Report"
              />
            </div>

            <p>
              Test results were as follows:
            </p>

            <ul className="task-list">
              <li><strong>Total Tests</strong>: 125</li>
              <li><strong>Success (Detected)</strong>: 93</li>
              <li><strong>Failure (Undetected)</strong>: 32</li>
              <li><strong>Detection Rate</strong>: 74.4%</li>
            </ul>

            <p>
              <strong>Category Breakdown</strong>
            </p>
            <ul className="task-list">
              <li>Time-based SQLi: 83 detections</li>
              <li>Boolean-based SQLi: 10 detections</li>
              <li>Error-based SQLi: 0 detections</li>
            </ul>

            <p>
              By relaxing Falco&apos;s output rate,
              Time-based SQLi detection became more stable than ever.
              However, Error-based SQLi continued to remain silent.
            </p>
            <p>
              &quot;Falco has started moving. But there are still voices we can&apos;t hear.&quot;<br />
              I nodded at TK&apos;s words.
            </p>
            <p>
              Until now, we had repeatedly failed the same tests
              on GitHub Actions self-hosted runners.
              Yet, just by moving to EC2 and adjusting the environment,
              we achieved this much in just one day.
            </p>
            <p>
              Honestly, it was surprising.
            </p>
            <p>
              &quot;Changing the environment makes the world so different.&quot;<br />
              When I said that, TK took a sip of coffee and laughed.<br />
              &quot;Environment is also part of design.<br />
              It&apos;s not just code—&apos;where you run it&apos; is also design.&quot;
            </p>
            <p>
              I deeply nodded.<br />
              Indeed, Falco had been working correctly all along.<br />
              What had stopped wasn&apos;t the code, but our assumptions.
            </p>
            <p>
              From now on, we need to reconsider the testing approach itself—<br />
              and the architecture of the environment.
            </p>
            <p>
              The green lines flowing in Falco&apos;s logs<br />
              looked like a new map.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Environment design is part of architecture. &quot;Where you run it&quot; is also part of design.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Understand the sequence of operations before blaming errors (10/19)</li>
              <li>Unhurried test design creates stability (10/20)</li>
              <li>Handling special symbols and &quot;correct interpretation&quot; support reproducibility (10/21–22)</li>
              <li>Falco was just too quiet. Understanding output control is key (10/24)</li>
              <li>Environment design is part of architecture (10/25)</li>
              <li>Stability means designing both mechanism and environment</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Tasks Completed & Documents Updated</h2>
            <ul className="task-list">
              <li>Introduced retry logic to Pre-flight check</li>
              <li>Auto-generated <code>/var/log/nginx</code> in Normalization</li>
              <li>Fixed Pattern #A171 (changed to non-regex search processing)</li>
              <li>Added failure classification tags to <code>summary.html</code></li>
              <li>Built EC2 environment and verified Falco output control (rate: 1, max_burst: 100)</li>
              <li>Conducted Pattern #A216 integration test (125 patterns) and generated HTML report</li>
              <li>Added environment difference analysis to <code>E2E_ENVIRONMENT_DIFFERENCE_REPORT.md</code></li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              During these seven days,<br />
              Falcoya progressed from &quot;adjusting operations&quot; to &quot;designing the environment.&quot;<br />
              TK said beside me in his usual calm tone.
            </p>
            <p>
              &quot;Falco was always correct.<br />
              　What wasn&apos;t working was the environment.&quot;
            </p>
            <p>
              I quietly nodded.<br />
              At that moment, the logs flowing on the screen<br />
              looked a little gentler.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days85-91-en" className="related-article-card">
                <span className="article-date">October 19, 2025</span>
                <h3>Days 85-91: The Order of Design Creates Stability</h3>
                <p>A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, and reproducibility verification</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days78-84-en" className="related-article-card">
                <span className="article-date">October 12, 2025</span>
                <h3>Days 78-84: The Hard Wall of Environment Differences and Startup Sequence</h3>
                <p>Kubernetes compatibility completion, non-privileged design, ENV-MIGRATE expansion, evolution from Pattern A154 to A155</p>
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

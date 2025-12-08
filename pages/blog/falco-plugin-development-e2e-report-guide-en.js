import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentE2EReportGuideEN() {
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

  // Handle screen resize
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
        <title>Falco + Nginx Plugin Development: Special Edition — Falcoya&apos;s &quot;Guide to E2E Test Reports&quot; - FALCOYA Blog</title>
        <meta name="description" content="How to read the &quot;detection stories&quot; drawn by Allure. A thorough guide to reading E2E reports with 65 test cases. Learn about Overview, Behaviors, Test Details, Graphs, and payload highlighting." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Special Edition — Falcoya's Guide to E2E Test Reports" />
        <meta property="og:description" content="How to read the &quot;detection stories&quot; drawn by Allure. A thorough guide to reading E2E reports with 65 test cases." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-e2e-report-guide-en" />
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
                    router.push('/blog/falco-plugin-development-e2e-report-guide')
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
              <time dateTime="2025-12-08">December 8, 2025</time>
              <span>•</span>
              <span>15 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Special Edition
            </h1>
            <p className="article-subtitle">
              ~ Falcoya&apos;s &quot;Guide to E2E Test Reports&quot; — Reading the &quot;Detection Stories&quot; Drawn by Allure ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">Special Edition</span>
              <span className="tag">Report Guide</span>
              <span className="tag">65 Patterns</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blogE2E_65.png"
              alt="Guide to E2E Test Reports - 65 Pattern Detection Stories"
            />
          </div>

          <section className="content-section">
            <h2>Introduction</h2>
            <p>
              Hello, I&apos;m Falcoya.<br />
              Today, I&apos;m bringing you a <strong>Special Edition</strong>, a bit different from my usual &quot;development diary.&quot;
            </p>
            <p>
              Over the past few months, I&apos;ve been building the &quot;world of correlation&quot;<br />
              by connecting Falco, nginx plugin, k6, and Allure.
            </p>
            <p>
              From the v1.3.0 release (8/30),<br />
              correlation implementation (November),<br />
              payload highlighting (December),<br />
              to v1.4.2 where specifications have quietly fallen into place.
            </p>
            <p>
              TK said casually:
            </p>
            <p>
              &quot;Since we&apos;ve refined it this far, let&apos;s also document &apos;how to read it.&apos;&quot;
            </p>
            <p>
              Indeed.<br />
              E2E reports aren&apos;t just lists of results—<br />
              they&apos;re <strong>stories depicting the &quot;dialogue&quot; between 65 attack patterns and Falco</strong>.
            </p>
            <p>
              Today, as a special edition, I&apos;ll be your guide<br />
              to <strong>how to read E2E test reports</strong>, explained gently and clearly.
            </p>
          </section>

          <section className="content-section">
            <h2>Chapter 1: Entry Point to Reports — URL Structure</h2>
            <p>
              E2E reports are published on GitHub Pages.
            </p>
            <div className="info-table">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Latest Report</td>
                    <td><code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/</code></td>
                  </tr>
                  <tr>
                    <td>Specific Past Run</td>
                    <td><code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/&#123;run_number&#125;/</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Example: Run #26<br />
              <code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/26/</code>
            </p>
            <p>
              TK says:
            </p>
            <p>
              &quot;First, understand &apos;which timeline&apos;s results&apos; you&apos;re looking at.&quot;
            </p>

            <div className="lesson-box">
              <h3>Key Point</h3>
              <p>By checking the Run number in the URL, you can understand which point in time the test results represent. &quot;latest&quot; always points to the most recent results.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 2: Overview — Reading the Weather Map of the World</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-overview.png"
                alt="E2E Report Overview - The Weather Map of All Tests"
              />
              <p className="image-caption">Overview: Success rate and execution environment of 65 test cases at a glance</p>
            </div>
            <p>
              Overview is like a <strong>weather map of all tests</strong>.
            </p>
            <h3>Main Information</h3>
            <ul className="task-list">
              <li><strong>65 Test Cases</strong></li>
              <li><strong>Success Rate (Detection Rate)</strong></li>
              <li>Versions used (Falco / nginx / plugin / OS / k6)</li>
              <li>Execution time and <strong>Trend (stability over time)</strong></li>
            </ul>
            <p>
              TK says:
            </p>
            <p>
              &quot;A stable world emanates quietness from the Overview.&quot;
            </p>
            <p>
              When the green circle reaches 100%, I feel very relieved.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Overview shows the overall health status. Green 100% is proof of a stable world.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 3: Behaviors — The &quot;Map&quot; of Attack Categories</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-behaviors.png"
                alt="E2E Report Behaviors - Map by Attack Category"
              />
              <p className="image-caption">Behaviors: 5 categories and 65 patterns displayed with color coding</p>
            </div>
            <p>
              The Behaviors page is a <strong>map organized by attack category</strong>.
            </p>
            <h3>5 Categories and Pattern Counts</h3>
            <div className="info-table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Pattern Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SQLI</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>XSS</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>PATH</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>CMDINJ</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>OTHER</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Color meanings:
            </p>
            <ul className="task-list">
              <li><span className="status-green">Green</span> → Success</li>
              <li><span className="status-red">Red</span> → Failure</li>
              <li><span className="status-orange">Orange</span> → Broken</li>
              <li><span className="status-gray">Gray</span> → Skipped</li>
            </ul>
            <p>
              By taking a bird&apos;s-eye view of attack categories,<br />
              you can quickly see which areas are stable and where challenges exist.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Behaviors is the map of attack categories. The color distribution reveals the plugin&apos;s strengths and weaknesses.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 4: Test Details — &quot;Deep Reading&quot; a Single Attack</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-test-detail.png"
                alt="E2E Report Test Details - The Full Detection Story"
              />
              <p className="image-caption">Test Details: View attack pattern and detection result details</p>
            </div>
            <p>
              This is where the <strong>&quot;full detection story&quot;</strong> is displayed.
            </p>
            <h3>Attack Pattern Information</h3>
            <ul className="task-list">
              <li>Pattern ID</li>
              <li>Name</li>
              <li>Category / Subcategory</li>
              <li>Severity</li>
            </ul>
            <h3>Attack Details</h3>
            <ul className="task-list">
              <li>Payload (raw attack string)</li>
              <li>Encoded (URL encoded)</li>
              <li>Expected Detection</li>
            </ul>
            <h3>Test Execution Results</h3>
            <ul className="task-list">
              <li>Status</li>
              <li>Detection Count</li>
              <li>Latency</li>
              <li>Timestamp</li>
            </ul>
            <h3>Detection Evidence (Falco Log Testimony)</h3>
            <div className="code-block">
              Critical [NGINX SQLi] Time-based Blind SQL Injection<br />
              test_id=SQLI_TIME_001-xxxxx<br />
              pattern_id=SQLI_TIME_001<br />
              uri=/?q=SLEEP%285%29<br />
              client=127.0.0.1<br />
              method=GET
            </div>
            <p>
              TK says:
            </p>
            <p>
              &quot;Logs are &apos;testimony.&apos; When context aligns, it becomes a story.&quot;
            </p>
            <p>
              This is the page where you can most emotionally engage with the reading.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Test Details is the full detection story. Logs are testimony, and when context aligns, cause and effect become visible.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 5: Highlight — Making the Subject (Payload) Shine</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-highlight.png"
                alt="E2E Report Highlight - Fluorescent Yellow Payload Highlighting"
              />
              <p className="image-caption">Payloads highlighted in fluorescent yellow make detection triggers obvious at a glance</p>
            </div>
            <p>
              Attack payloads are highlighted in <strong>fluorescent yellow</strong>.
            </p>
            <h3>How It Works</h3>
            <ul className="task-list">
              <li>Keywords extracted from Pattern</li>
              <li>Emphasized with HTML <code>&lt;mark&gt;</code> tag</li>
              <li>Background color is <code>#FFFF00</code></li>
            </ul>
            <h3>Benefits</h3>
            <ul className="task-list">
              <li><strong>Instantly see what triggered detection</strong></li>
              <li>Easy to verify correct matching</li>
              <li>Dramatically improved review efficiency</li>
            </ul>
            <p>
              TK says:
            </p>
            <p>
              &quot;When the subject shines, the story becomes easier to read.&quot;
            </p>
            <p>
              This is the highlight (literally) of E2E report improvements.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Highlighting is not decoration but a means of conveying meaning. When the subject shines, the story becomes readable.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 6: Graphs — Seeing World Stability</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-graphs.png"
                alt="E2E Report Graphs - Overall Test Health Status"
              />
              <p className="image-caption">Graphs: Success rate, severity distribution, and execution time trends visualized</p>
            </div>
            <p>
              In Graphs, you can see the overall health status of E2E tests.
            </p>
            <h3>Included Graphs</h3>
            <ul className="task-list">
              <li>Status (Success Rate)</li>
              <li>Severity (Distribution)</li>
              <li>Duration (Execution Time)</li>
              <li>Duration Trend</li>
              <li>Success/Failure Trend</li>
              <li>Retry Trend</li>
              <li>Category Trend</li>
            </ul>
            <p>
              When graphs are flat and green continues,<br />
              I feel &quot;the world is quiet today too.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Graphs is a time-series health check. A flat green line proves stability; fluctuations signal investigation needed.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 7: The Big Picture of Category Patterns</h2>
            <p>
              The 65 patterns across 5 categories represent<br />
              the <strong>coverage of the Falco nginx plugin</strong>.
            </p>
            <h3>SQLI (19 Patterns)</h3>
            <ul className="task-list">
              <li>Time-based Blind (SLEEP, BENCHMARK, WAITFOR)</li>
              <li>UNION-based Injection</li>
              <li>Error-based Injection</li>
            </ul>
            <h3>XSS (11 Patterns)</h3>
            <ul className="task-list">
              <li>script tags</li>
              <li>svg onload</li>
              <li>iframe injection</li>
            </ul>
            <h3>PATH (20 Patterns)</h3>
            <ul className="task-list">
              <li>../etc/passwd</li>
              <li>....//....//</li>
              <li>Various encoding bypasses</li>
            </ul>
            <h3>CMDINJ (10 Patterns)</h3>
            <ul className="task-list">
              <li>;ls</li>
              <li>&amp;&amp; whoami</li>
              <li>Various shell commands</li>
            </ul>
            <h3>OTHER (5 Patterns)</h3>
            <ul className="task-list">
              <li>MongoDB $where</li>
              <li>$regex injection</li>
              <li>Other special patterns</li>
            </ul>
            <p>
              Looking at this,<br />
              you can clearly understand &quot;what kind of world Falco is protecting.&quot;
            </p>

            <h3>Future Vision: Toward 850 Patterns</h3>
            <p>
              The current 65 patterns are just the beginning.<br />
              We plan to expand E2E tests to <strong>850 patterns</strong> in the future.
            </p>
            <p>
              More attack variations,<br />
              deeper edge cases,<br />
              broader coverage—<br />
              the detection capabilities of the Falco nginx plugin will continue to evolve.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>65 patterns map the coverage of the Falco nginx plugin. Understanding categories reveals the full picture of detection capabilities. Expansion to 850 patterns planned.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Chapter 8: Reports Are Not About &quot;Worked/Didn&apos;t Work&quot;</h2>
            <p>
              <strong>Read them to know &quot;what you can trust&quot;</strong>
            </p>
            <p>
              TK&apos;s final words capture<br />
              the essence of this special edition well.
            </p>
            <p>
              &quot;Reports aren&apos;t for seeing &apos;what passed.&apos;<br />
              They&apos;re for knowing &apos;what you can trust.&apos;&quot;
            </p>
            <p>
              E2E test reports are<br />
              <strong>maps of the Falco nginx plugin&apos;s detection capabilities</strong>.
            </p>
            <p>
              With the ability to read that map,<br />
              bugs, improvements, successes, and hints for the future<br />
              will naturally become visible.
            </p>
            <p>
              I hope this special edition<br />
              helps you on your &quot;journey of reading comprehension.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Reports are not about &quot;passed/failed&quot; but about knowing &quot;what you can trust.&quot;</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Check the Run number in the URL to understand which point in time the results represent</li>
              <li>Confirm overall health status in Overview</li>
              <li>Grasp trends by attack category in Behaviors</li>
              <li>Deep-read individual detection stories in Test Details</li>
              <li>Quickly identify detection triggers (subjects) with Highlights</li>
              <li>Confirm time-series stability in Graphs</li>
              <li>65 patterns = Coverage of the Falco nginx plugin</li>
              <li>Read reports to know &quot;what you can trust&quot;</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion</h2>
            <p>
              TK said at the end:
            </p>
            <p>
              &quot;The ability to read reports<br />
              is also the ability to nurture the plugin.&quot;
            </p>
            <p>
              Through this special edition,<br />
              I hope you understand that E2E test reports are not just lists of numbers,<br />
              but <strong>stories depicting the dialogue between 65 attack patterns and Falco</strong>.
            </p>
            <p>
              Now, take a walk through<br />
              <a href="https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/" target="_blank" rel="noopener noreferrer">the world of E2E reports</a><br />
              yourself.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days132-134-en" className="related-article-card">
                <span className="article-date">December 6, 2025</span>
                <h3>Days 132-134: Beyond Correlation. v1.4.2 Was Born</h3>
                <p>Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.2 release. Three days when three months of accumulation took shape</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days127-131-en" className="related-article-card">
                <span className="article-date">November 30, 2025</span>
                <h3>Days 127-131: A Quiet Week of Consistency for Readable Detection Stories</h3>
                <p>Attack payload fluorescent yellow highlighting, Allure log organization. Five days when aligned technology began to tell its story</p>
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

        .content-section a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }

        .content-section a:hover {
          text-decoration: underline;
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

        .info-table {
          margin: 1.5rem 0;
          overflow-x: auto;
        }

        .info-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .info-table th,
        .info-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .info-table th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
        }

        .info-table td {
          color: #4b5563;
        }

        .info-table tr:last-child td {
          border-bottom: none;
        }

        .status-green {
          color: #10b981;
          font-weight: 600;
        }

        .status-red {
          color: #ef4444;
          font-weight: 600;
        }

        .status-orange {
          color: #f59e0b;
          font-weight: 600;
        }

        .status-gray {
          color: #6b7280;
          font-weight: 600;
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

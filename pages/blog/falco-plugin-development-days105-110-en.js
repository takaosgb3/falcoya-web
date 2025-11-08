import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays105to110En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya's Days 105-110 - FALCOYA Blog</title>
        <meta name="description" content="Sample data and &quot;small stability&quot; accumulation, with implementation goals beyond. Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation. Six days of creating the foundation itself, not relying on crutches." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 105-110" />
        <meta property="og:description" content="Sample data and &quot;small stability&quot; accumulation, with implementation goals beyond. Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days105-110-en" />
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
                    router.push('/blog/falco-plugin-development-days105-110')
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
              <time dateTime="2025-11-08">November 8, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 105-110
            </h1>
            <p className="article-subtitle">
              ~ Sample Data and "Small Stability" Accumulation, with Implementation Goals Beyond ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">k6</span>
              <span className="tag">nginx.headers</span>
              <span className="tag">Design Policy</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog18.png"
              alt="Sample data and small stability accumulation"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back at Last Week</h2>
            <p>
              Last week (Days 99–104), we migrated E2E from custom scripts to k6,<br />
              prepared the AWS environment as code with Terraform,<br />
              and shifted to &quot;design for continuous operation.&quot;<br />
              Falco was correct all along. What stopped was the environment and mechanisms.
            </p>
            <p>
              This week, while aligning the &quot;foundation&quot; of the operational infrastructure,<br />
              we clearly articulated <strong>the ultimate goal (establishing correlation through nginx.headers implementation)</strong>.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 105 (11/2) — Completing Phase 0 (Sample Data)</h2>
            <p>
              Completed sample data generation for E2E (Phase 0).<br />
              Regenerated SQLi / XSS / Path Traversal categories,<br />
              and unified JSON files referenced by k6 into <code>/data/samples/phase0/*.json</code>.<br />
              Now we have a foundation for &quot;comparing with the same input.&quot;
            </p>
            <p>
              &quot;Being able to compare is the first step toward stability,&quot;<br />
              TK's words summarized today's work.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>A foundation for comparing with the same input is the first step toward stability. Unified sample data supports test reliability.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 106 (11/3) — Introducing Response Validation Method (Provisional)</h2>
            <p>
              Traditional &quot;log string matching&quot; made detection validity ambiguous.<br />
              As a provisional measure, we introduced a <strong>response validation method</strong><br />
              that cross-references k6's HTTP response content with Falco's output.
            </p>
            <p>
              False positives decreased. However, this is not the final solution.<br />
              (At this point, we strongly recognized that &quot;the real correlation we want is test_id from headers&quot;)
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Even provisional measures have value in reducing false positives. However, always keep the path to the essential solution in mind.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 107 (11/4) — Stabilizing Response Validation and Sensing Discomfort</h2>
            <p>
              Response validation method stabilized.<br />
              Detection logs and k6 results aligned 1:1.
            </p>
            <p>
              At the same time, tag interpretation fluctuations in some XSS cases were exposed. Fixed the next day.<br />
              And another lingering discomfort—
            </p>

            <div className="code-block">
Problem Summary<br />
E2E detection rate becomes 0% because the nginx plugin cannot extract HTTP headers from logs,<br />
preventing test_id correlation.
            </div>

            <p>
              This &quot;realization&quot; determined the latter half of the week.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Don't overlook the discomfort lurking within stability. Discovering root causes leads to the next major design change.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 108 (11/6) — Accumulating Small Fixes While Articulating Goals</h2>
            <p>
              Reflected XSS sanitization and alert name normalization.<br />
              Also unified k6-side evaluation functions to prevent report fluctuations.
            </p>
            <p>
              And we articulated the goal we're aiming for.
            </p>

            <div className="code-block">
Root Cause<br />
PR #601 removed nginx.headers[X-Test-ID] reference.<br />
The plugin didn't have nginx.headers implementation in the first place,<br />
and this change broke E2E test_id correlation (detection tracking became impossible).<br />
<br />
Proposed Solution (Option 3)<br />
Implement nginx.headers field in Falco nginx plugin,<br />
enabling extraction of arbitrary HTTP headers from Nginx logs.<br />
This enables E2E test_id correlation and extends to general use cases.<br />
<br />
Implementation Steps<br />
1. Design Header Extraction (30 minutes)<br />
   - Approach A: Parse from standard log ($http_* variables)<br />
   - Approach B: Nginx JSON log with structured data → &#123;&quot;headers&quot;:&#123;&quot;X-Test-ID&quot;:&quot;...&quot;&#125;&#125;<br />
   - Recommended: B (JSON): High extensibility, easy multi-header extraction<br />
2. Change Nginx log settings (JSON) + generate samples<br />
3. Add nginx.headers field on plugin side<br />
4. Introduce nginx.headers[&quot;X-Test-ID&quot;] in Falco rules<br />
5. Attach X-Test-ID in k6 → strict correlation with Falco output test_id<br />
6. Re-implement E2E detection tracking based on test_id axis
            </div>

            <p>
              &quot;Response validation is a 'provisional crutch'. What we ultimately need is correlation through nginx.headers.&quot;<br />
              TK's words aligned our direction into a single line.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Articulating goals aligns the entire team's direction. Design documents are signposts to future code.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 109 (11/7) — Fixing Pattern #A229 "undefined"</h2>
            <p>
              Fixed the issue where Pattern #A229 appeared as undefined in Falco output.<br />
              Filled null check gaps, and when undefined, now returns <code>&quot;result&quot;: null</code>.<br />
              k6 side also supports null determination. Format consistency restored.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Format consistency supports verification reproducibility. Small null handling leads to great reliability.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 110 (11/7 Night) — Quiet Completion (And, Toward the Next Implementation)</h2>
            <p>
              Phase 0 samples, response validation (provisional), XSS, A229.<br />
              Foundation aligned.<br />
              But this isn't the goal.
            </p>
            <p>
              <strong>Final Goal: Implement nginx.headers in Falco nginx plugin,<br />
              and establish E2E detection correlation via X-Test-ID.</strong>
            </p>
            <p>
              &quot;Let's build the foundation itself, not rely on crutches.&quot;<br />
              TK smiled.<br />
              I smiled too.<br />
              The quiet array of logs illuminated the &quot;code to write next.&quot;
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Provisional measures help us. But building the foundation to walk is an engineer's job. The path to the next implementation became clear.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Phase 0 (sample data preparation) completion established a foundation for identical input comparison (11/2)</li>
              <li>Response validation method is provisional: suppressing false positives while what we really want is test_id correlation (11/3–11/4)</li>
              <li>Root Cause is nginx.headers non-implementation and PR #601's reference removal (11/6)</li>
              <li>Proposed Solution is nginx.headers implementation (recommended: Nginx JSON log extraction) (11/6)</li>
              <li>Format consistency (A229 null handling) supports verification reproducibility (11/7)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks & Updated Documents</h2>
            <ul className="task-list">
              <li>Phase 0 sample data completion (<code>/data/samples/phase0/*.json</code>)</li>
              <li>Response validation method (provisional) introduction: k6×Falco cross-reference stabilization</li>
              <li>XSS fixes (sanitization / alert name normalization)</li>
              <li>Pattern #A229 &quot;undefined&quot; fix (null return / k6-side determination support)</li>
              <li>Goal and design articulation: nginx.headers implementation policy (Nginx JSON log recommended, test_id correlation)</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              This week,<br />
              Falcoya chose the path of making mechanisms correct, not &quot;tricks to pass tests.&quot;<br />
              TK quietly said:
            </p>
            <p>
              &quot;Crutches help us. But building the foundation to walk is an engineer's job.&quot;
            </p>
            <p>
              With those words in our hearts, next we'll carve <strong>nginx.headers</strong> into the plugin.<br />
              To end the E2E 0% with design.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days99-104-en" className="related-article-card">
                <span className="article-date">November 2, 2025</span>
                <h3>Days 99-104: Stop Reinventing the Wheel, Design for Continuous Operation</h3>
                <p>GitHub Actions cache issue resolution, full k6 migration, test infrastructure redesign, and environment codification with Terraform</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days92-98-en" className="related-article-card">
                <span className="article-date">October 26, 2025</span>
                <h3>Days 92-98: Environment Creates Stability</h3>
                <p>A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, Falco output limit understanding, Pattern A216 integration test</p>
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

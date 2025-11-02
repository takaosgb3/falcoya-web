import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays99to104En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya's Days 99-104 - FALCOYA Blog</title>
        <meta name="description" content="Stop reinventing the wheel, design for continuous operation. Solving GitHub Actions cache issues, full migration to k6, test infrastructure redesign, and environment codification with Terraform. Six days of evolution from building custom mechanisms to designing sustainable systems." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 99-104" />
        <meta property="og:description" content="Stop reinventing the wheel, design for continuous operation. GitHub Actions cache issues, k6 migration, test infrastructure redesign, and Terraform environment codification." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days99-104-en" />
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
                    router.push('/blog/falco-plugin-development-days99-104')
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
              <time dateTime="2025-11-02">November 2, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 99-104
            </h1>
            <p className="article-subtitle">
              ~ Stop Reinventing the Wheel, Design for Continuous Operation ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">k6</span>
              <span className="tag">Terraform</span>
              <span className="tag">Environment Design</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog17.png"
              alt="Stop Reinventing the Wheel, Design for Continuous Operation"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              In the previous week (Days 92–98), we broke Falco's silence<br />
              and achieved stability through output control adjustments (rate / max_burst).<br />
              We confirmed stabilization on AWS EC2<br />
              and realized that &quot;changing the environment changes everything.&quot;
            </p>
            <p>
              However, E2E tests on GitHub Actions self-hosted runners<br />
              remained unstable.<br />
              No matter how many times we fixed it, it would break again.<br />
              While investigating the cause, we reached a conclusion.
            </p>
            <p>
              ――&quot;Let's stop reinventing the wheel.&quot;
            </p>
          </section>

          <section className="content-section">
            <h2>Day 99 (10/26) — The Cache Trap</h2>
            <p>
              In the morning, I was reviewing GitHub Actions logs.<br />
              The E2E test had stopped mid-way again.
            </p>
            <p>
              Upon investigation, the Go code we had fixed wasn't being reflected.<br />
              The cause was GitHub Actions cache restoration.<br />
              The old built binary (falco-nginx-plugin.so)<br />
              remained in actions/cache and was overwriting the latest code build.
            </p>
            <p>
              &quot;Cache is convenient, but sometimes it's too smart for its own good.&quot;<br />
              TK said quietly.
            </p>
            <p>
              I updated the cache key and added<br />
              <code>go clean -cache -modcache</code> before the build.<br />
              Finally, the correct binary was being generated.
            </p>
            <p>
              But at the same time, I thought:<br />
              We've reached the point where &quot;making tests run&quot; has become the goal itself.<br />
              It's time to reconsider the &quot;mechanism.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Cache intelligence can backfire. Cleanup before builds and cache key management are crucial.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 100 (10/27) — Adopting k6</h2>
            <p>
              In the morning, meeting with TK.<br />
              We shared the limitations of continuing with our custom E2E test scripts.
            </p>
            <p>
              We had been setting up environments on GitHub Actions self-hosted runners,<br />
              reproducing attack patterns with curl and jq, but<br />
              we often spent more time fixing the environment than testing.
            </p>
            <p>
              &quot;Let's stop polishing this wheel any further.&quot;<br />
              With that, we decided to adopt k6.
            </p>
            <p>
              k6 is originally a load testing tool, but<br />
              it allows writing HTTP-based scenarios<br />
              and managing attack patterns as scripts.
            </p>
            <p>
              The initial script looked like this:
            </p>

            <div className="code-block">
import http from &quot;k6/http&quot;;<br />
import &#123; check &#125; from &quot;k6&quot;;<br />
<br />
export default function () &#123;<br />
&nbsp;&nbsp;let res = http.get(&quot;http://localhost/api/test&quot;);<br />
&nbsp;&nbsp;check(res, &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&quot;status is 200&quot;: (r) =&gt; r.status === 200,<br />
&nbsp;&nbsp;&#125;);<br />
&#125;
            </div>

            <p>
              Surprisingly simple, and execution was stable.<br />
              &quot;It's nice to be able to trust a tool.&quot;<br />
              TK smiled.<br />
              The moment we let go of our &quot;custom mechanism,&quot;<br />
              the path forward became clear.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Stop reinventing the wheel and adopt trusted tools. k6's simplicity and stability transformed our test foundation.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 101 (10/30) — Test Redesign</h2>
            <p>
              We redesigned the E2E tests that were split into Phase 1 and Phase 2<br />
              using k6 as the foundation.
            </p>
            <p>
              We organized SQLi, XSS, and Path Traversal attack patterns<br />
              as modularized functions.<br />
              Test results are output to <code>summary.json</code>,<br />
              with a mechanism added to cross-check against Falco detection logs.
            </p>
            <p>
              Redundant Bash scripts disappeared,<br />
              the configuration was 40% lighter,<br />
              and execution time was cut in half.
            </p>
            <p>
              &quot;Using a load testing tool for detection testing is an interesting idea.&quot;<br />
              TK said.<br />
              &quot;Time spent thinking about systems that run is more valuable than time spent building wheels.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Test redesign reduced configuration by 40% and halved execution time. Repurposing tools creates new value.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 102 (10/31) — Workflow Integration</h2>
            <p>
              We integrated the old Phase 1 workflow<br />
              into the same configuration as Phase 2.<br />
              We automated log cross-checking with Falco using jq,<br />
              enabling visualization of detection rate, response time, and error rate.
            </p>
            <p>
              This was the moment the E2E test design finally transformed into a &quot;foundation.&quot;
            </p>
            <p>
              &quot;Reproducible tests aren't debugging anymore.<br />
              They're part of the design.&quot;<br />
              TK's words left an impression.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Reproducible tests are part of the design, not debugging. Workflow integration transforms tests into foundations.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 103 (10/31 Afternoon) — k6 Report Visualization</h2>
            <p>
              We converted k6 output to HTML format,<br />
              creating <code>k6-summary.html</code> where attack pattern results are visible at a glance.<br />
              Failures are highlighted in red, successful detections in green.
            </p>
            <p>
              Falco detection logs aligned with the timeline,<br />
              and seeing &quot;test results&quot; and &quot;Falco responses&quot; side by side was spectacular.
            </p>
            <p>
              TK said while looking at the report:<br />
              &quot;This is what truly &apos;running&apos; looks like.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Visualization turns test results and Falco responses into a cohesive story. HTML reports accelerate understanding.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 104 (November 1) — Designing the Environment with Terraform</h2>
            <p>
              We deployed an AWS environment with Terraform.<br />
              We automatically built VPC, subnet, and security groups,<br />
              launching an EC2 instance with k6 installed.
            </p>
            <p>
              Then, we SSH'd into the environment and manually ran tests.<br />
              Logs output by Falco and k6 matched perfectly,<br />
              and the tests never failed once.
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog17-k6.png"
                alt="E2E Test Execution with k6"
              />
            </div>

            <p>
              &quot;This is what it means for the environment to be your ally.&quot;<br />
              TK said.
            </p>
            <p>
              Indeed, Falco had been working correctly all along.<br />
              What had been stuck was our environment design.
            </p>
            <p>
              This Terraform configuration is still at the manual execution stage,<br />
              but next we'll integrate this environment into CI,<br />
              building a mechanism for automatic operation.
            </p>
            <p>
              Not &quot;building to make it run,&quot;<br />
              but &quot;designing for continuous operation.&quot;<br />
              I finally understood the difference.
            </p>

            <div className="lesson-box">
              <h3>Lesson Learned</h3>
              <p>Design environments as code (Infrastructure as Code). Terraform makes reproducible environments your ally.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>GitHub Actions cache was restoring old binaries (10/26)</li>
              <li>Fixed with <code>go clean -cache -modcache</code> and cache key updates (10/26)</li>
              <li>Full migration of E2E tests from custom scripts to k6 (10/27–10/30)</li>
              <li>Integrated old Phase1/Phase2 workflows (10/31)</li>
              <li>Codified AWS environment with Terraform, manual test execution (10/31)</li>
              <li>From &quot;making tests run&quot; to &quot;designing environments&quot;</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Tasks Completed & Documentation Updates</h2>
            <ul className="task-list">
              <li>Fixed GitHub Actions cache settings (actions/cache key updates)</li>
              <li>Added <code>go clean -cache -modcache</code> before builds</li>
              <li>Migrated E2E test infrastructure from curl + jq scripts to k6</li>
              <li>Developed Falco log cross-checking scripts (jq)</li>
              <li>Unified <code>summary.json</code> / <code>k6-summary.html</code> output</li>
              <li>Integrated old Phase1/Phase2 workflows</li>
              <li>Built AWS test environment with Terraform (VPC / Subnet / SG / EC2 / k6 installation)</li>
              <li>Manual test execution and result verification via SSH</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              This week,<br />
              Falcoya evolved from &quot;fixing operations&quot; to &quot;designing environments.&quot;<br />
              And TK said quietly:
            </p>
            <p>
              &quot;Falco was right all along.<br />
              　It was the environment that had stopped.&quot;
            </p>
            <p>
              Listening to those words,<br />
              Falcoya gazed at the Terraform code.<br />
              Beyond the screen flowing with green logs,<br />
              a &quot;world that operates by design&quot; was clearly visible.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days92-98-en" className="related-article-card">
                <span className="article-date">October 26, 2025</span>
                <h3>Days 92-98: Environment Creates Stability</h3>
                <p>A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, Falco output limit understanding, Pattern A216 integration test</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days85-91-en" className="related-article-card">
                <span className="article-date">October 19, 2025</span>
                <h3>Days 85-91: The Order of Design Creates Stability</h3>
                <p>A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, reproducibility verification</p>
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

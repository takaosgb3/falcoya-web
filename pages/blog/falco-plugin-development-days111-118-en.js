import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays111to118En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya's Days 111-118 - FALCOYA Blog</title>
        <meta name="description" content="The art of alignment, and beyond it, the peak called &quot;correlation&quot; became visible. Allure adoption, response validation method introduction, nginx.headers implementation policy clarification. Eight days of reaching for correlation design." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 111-118" />
        <meta property="og:description" content="The art of alignment, and beyond it, the peak called &quot;correlation&quot; became visible. Allure adoption, response validation method introduction, nginx.headers implementation policy clarification." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days111-118-en" />
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
                    router.push('/blog/falco-plugin-development-days111-118')
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
              <time dateTime="2025-11-16">November 16, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 111-118
            </h1>
            <p className="article-subtitle">
              ~ The Art of Alignment, and Beyond It, the Peak Called "Correlation" Became Visible ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">Correlation Design</span>
              <span className="tag">nginx.headers</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog19.png"
              alt="The art of alignment and the peak of correlation"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back at Last Week</h2>
            <p>
              Last week (Days 105–110), having completed Phase 0 (sample data generation),<br />
              the &quot;single flow&quot; of k6 → Falco → Allure began to emerge.
            </p>
            <p>
              However, that flow was still missing<br />
              <strong>&quot;the correlation connecting test_id with detection logs.&quot;</strong>
            </p>
            <p>
              This week was about understanding that gap,<br />
              and seeing the next &quot;peak&quot; we need to climb.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 111 (11/08) — Recognizing Limits of Custom E2E Reports, Adopting Allure</h2>
            <p>
              From morning, I was desperately creating a custom E2E report.<br />
              I was trying to combine k6 and Falco results in my own HTML.
            </p>
            <p>
              But there was a critical problem.
            </p>
            <p>
              Falco couldn't read &quot;X-Test-ID&quot;.<br />
              So attack patterns and detection logs couldn't be connected.
            </p>
            <p>
              Creating a beautiful report would be meaningless like this.
            </p>
            <p>
              TK quietly said:<br />
              &quot;Before presentation, we need to create the 'connection' first.&quot;
            </p>
            <p>
              With those words, I gave up on custom reporting and decided to adopt Allure.<br />
              Allure's step structure could naturally express the test story.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Before beauty, create the "connection" first. Switching from reinventing the wheel to existing tools makes design essence visible.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 112 (11/09) — "Provisional Response Validation Method" as a Crutch</h2>
            <p>
              What we really wanted was<br />
              X-Test-ID → nginx log → Falco output correlation.
            </p>
            <p>
              However, currently, the nginx plugin<br />
              didn't have nginx.headers[X-Test-ID].<br />
              It was removed in PR #601.
            </p>
            <p>
              So, as a provisional crutch,<br />
              we introduced a method to cross-reference HTTP response content with Falco logs.
            </p>
            <p>
              Not a complete solution, but<br />
              false positives visibly decreased.
            </p>
            <p>
              &quot;A crutch lets you walk, but not run.<br />
              Next, let's build the foundation itself.&quot;<br />
              TK said.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Provisional measures are "crutches" for moving forward. Not perfect, but valuable as means to progress. However, always keep the path to essential solution in mind.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 113 (11/10) — Writing Documentation, Realizing the Essence of Correlation</h2>
            <p>
              Today, I spent the whole day organizing Allure, k6, and Falco documentation.
            </p>
            <p>
              As I wrote,<br />
              the root cause became clearer.
            </p>
            <ul className="task-list">
              <li>Falco can't read X-Test-ID</li>
              <li>Without correlation, we don't know &quot;whose&quot; the E2E detection is</li>
              <li>A gap that custom reports can never fill</li>
            </ul>
            <p>
              In other words, what we need to implement next is<br />
              nginx.headers[X-Test-ID] in the Falco nginx plugin.
            </p>
            <p>
              TK said:<br />
              &quot;When you document it, the answer in your head takes 'form'.&quot;
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Writing documentation organizes thinking and reveals essence. Documentation is not just recording, but a process of clarifying design.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 114 (11/11) — A240 / A241 / A242 ― Correcting Small Distortions, Aligning the Flow</h2>
            <p>
              Today was a triple fix.
            </p>
            <ul className="task-list">
              <li>A240: Allure step hierarchy misalignment</li>
              <li>A241: Log collection order bug (8 hours investigation)</li>
              <li>A242: Plugin download URL inconsistency</li>
            </ul>
            <p>
              The moment A241 was fixed,<br />
              Falco and k6 logs &quot;aligned&quot; for the first time.
            </p>
            <p>
              That night, detection rate went from<br />
              0% → 44.62%.
            </p>
            <p>
              However, I strongly understood this was also the limit of &quot;correlation absence.&quot;
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Correcting small distortions one by one aligns the entire system flow. Detection rate improvement comes from accumulation of individual fixes.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 115 (11/12) — Redefining Allure Document Structure</h2>
            <p>
              We redesigned Allure's presentation,<br />
              not for &quot;beauty&quot; but for &quot;meaning as a detection story.&quot;
            </p>
            <ul className="task-list">
              <li>Steps = lines of the story</li>
              <li>Attachments = evidence</li>
              <li>Hierarchy = breathing</li>
              <li>Colors = emotions</li>
            </ul>
            <p>
              TK said:<br />
              &quot;Visualization won't be beautiful unless meaning is aligned.&quot;
            </p>
            <p>
              Today, we gave form to that &quot;meaning structure.&quot;
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>The essence of visualization is "meaning structuring". Beauty emerges naturally as a result of aligned meaning.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 116 (11/11) — nginx.headers[X-Test-ID] ― Articulating the Truly Necessary Implementation</h2>
            <p>
              That night, we finally articulated the next move clearly.
            </p>
            <p>
              <strong>Final Goal:<br />
              Implement nginx.headers[X-Test-ID] in the Falco nginx plugin.</strong>
            </p>
            <p>
              The reason is singular:<br />
              For Falco to understand E2E test_id,<br />
              and accurately correlate with detection logs.
            </p>
            <p>
              The provisional response validation method has its limits.<br />
              What's essentially needed is building<br />
              Nginx JSON log → plugin → nginx.headers → Falco rule<br />
              this &quot;vertical flow.&quot;
            </p>
            <p>
              TK said:<br />
              &quot;Let's build the foundation, not a crutch.&quot;
            </p>
            <p>
              At this moment, the mountain to climb became clear.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Clearly articulating goals reveals the implementation path. The resolve to take a step toward essential solution, not provisional measures.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 117 (11/12) — Unifying Metadata Variations, Preparing "Ground for Correlation"</h2>
            <p>
              As post-processing for A240〜A242,<br />
              we unified all variations of null / empty string / undefined.
            </p>
            <p>
              When format aligned,<br />
              k6 → Falco → Allure output<br />
              became readable as a single line.
            </p>
            <p>
              &quot;When form aligns, it suddenly becomes a work of art.&quot;<br />
              TK's words felt strangely fitting today.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Metadata unification is groundwork for correlation. When format aligns, data flow becomes visible as a single line.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 118 (11/15) — Allure Shines as "Meaning"</h2>
            <p>
              Today, Allure's hierarchical structure was completed.<br />
              When running E2E,<br />
              attack pattern → request → Falco detection → plugin → validation<br />
              flows beautifully arranged.
            </p>
            <p>
              What used to be &quot;just logs&quot;<br />
              became readable as <strong>&quot;a detection story.&quot;</strong>
            </p>
            <p>
              TK quietly said:
            </p>
            <p>
              &quot;When meaning aligns, appearance naturally becomes beautiful.&quot;
            </p>
            <p>
              From here forward,<br />
              we proceed toward <strong>the &quot;correlation peak&quot; of nginx.headers[X-Test-ID] implementation</strong>.
            </p>

            <div className="lesson-box">
              <h3>Learning</h3>
              <p>The moment logs become a story. Design with aligned meaning naturally becomes beautiful. The path to the next peak became visible.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Learnings</h2>
            <ul className="task-list">
              <li>Custom reports were wheel reinvention → shifted to Allure (11/08)</li>
              <li>Root cause of E2E correlation failure: nginx.headers non-implementation (11/09)</li>
              <li>Writing documentation gives &quot;essence&quot; form (11/10)</li>
              <li>Correcting distortions creates flow (11/11)</li>
              <li>Essence of visualization is &quot;meaning structuring&quot; (11/12)</li>
              <li>Ground for correlation (format unification) (11/12)</li>
              <li>Next mountain is clear: nginx.headers[X-Test-ID] (11/15)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>Custom E2E report → Allure adoption</li>
              <li>Allure POC completion</li>
              <li>Allure structure v2 design</li>
              <li>Phase 3 document reorganization</li>
              <li>Pattern A240 / A241 / A242 fixes</li>
              <li>Detection rate: 0% → 44.62%</li>
              <li>JSON metadata unification</li>
              <li>nginx.headers[X-Test-ID] implementation policy definition</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              This week,<br />
              Falcoya reached for<br />
              <strong>&quot;correlation design&quot;</strong><br />
              beyond the &quot;art of alignment.&quot;
            </p>
            <p>
              TK quietly said:
            </p>
            <p>
              &quot;Let's give Falco context.<br />
              　That's what 'correlation' means.&quot;
            </p>
            <p>
              With those words in our hearts,<br />
              we took a step toward the next implementation.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days105-110-en" className="related-article-card">
                <span className="article-date">November 8, 2025</span>
                <h3>Days 105-110: Sample Data and "Small Stability" Accumulation</h3>
                <p>Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation. Six days of creating the foundation itself, not relying on crutches</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days99-104-en" className="related-article-card">
                <span className="article-date">November 2, 2025</span>
                <h3>Days 99-104: Stop Reinventing the Wheel, Design for Continuous Operation</h3>
                <p>GitHub Actions cache issue resolution, full k6 migration, test infrastructure redesign, and environment codification with Terraform</p>
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

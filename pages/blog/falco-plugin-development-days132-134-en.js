import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays132to134En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 132-134 - FALCOYA Blog</title>
        <meta name="description" content="Beyond correlation. Aiming for 'zero fluctuations,' and v1.4.2 was born. Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.0 design decisions, docs/rules.md major update. Three days when three months of accumulation took shape." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 132-134" />
        <meta property="og:description" content="Beyond correlation. Aiming for 'zero fluctuations,' and v1.4.2 was born. Three days when three months of accumulation took shape." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days132-134-en" />
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
                    router.push('/blog/falco-plugin-development-days132-134')
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
              <time dateTime="2025-12-06">December 6, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 132-134
            </h1>
            <p className="article-subtitle">
              ~ Beyond Correlation. Aiming for &quot;Zero Fluctuations,&quot; and v1.4.2 Was Born ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.4.2</span>
              <span className="tag">Release</span>
              <span className="tag">docs/rules.md</span>
              <span className="tag">Design Decisions</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog22.png"
              alt="v1.4.2 Release - Three months of accumulation took shape"
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week</h2>
            <p>
              Last week (Days 127–131), we highlighted attack payloads in fluorescent yellow,<br />
              and the &quot;subject of detection&quot; emerged within Allure.
            </p>
            <p>
              Looking back, from the previous major milestone——<br />
              v1.3.0 release (August 30) to now, three months have passed.<br />
              During that time, we accumulated:
            </p>
            <ul className="task-list">
              <li>Correlation (X-Test-ID) implementation</li>
              <li>Allure restructuring</li>
              <li>Alignment of large patterns (200+)</li>
              <li>rules/ renewal</li>
              <li>E2E structural stabilization</li>
            </ul>
            <p>
              And this week,<br />
              was the week to converge all that accumulation into a &quot;complete form.&quot;
            </p>
          </section>

          <section className="content-section">
            <h2>Day 132 (11/30) — A317 and A318 — The Day Layered Debugging Reached &quot;Quiet Correctness&quot;</h2>
            <p>
              In the morning, I opened Run #129 and found CMD_BASIC_005 had failed.<br />
              The cause was fluctuation in Pattern A317&apos;s logic.<br />
              Normalization boundary conditions were behaving unexpectedly.
            </p>
            <p>
              I documented A317,<br />
              created Issue #764 and #766,<br />
              and fixed it with PR #765.<br />
              After review, it was successfully merged.
            </p>
            <p>
              Run #130.<br />
              What appeared was <strong>65/65 all success</strong>.<br />
              The long &quot;unstable zone&quot; had finally ended.
            </p>
            <p>
              But one thing remained.<br />
              Only Pattern A318&apos;s Allure display looked somewhat unnatural.<br />
              Falco&apos;s rule_name appeared mixed with another.
            </p>
            <p>
              The A318 analysis went deep.<br />
              I discovered fluctuation in rule metadata mapping,<br />
              and completely fixed it with Issue #767 → PR #768.
            </p>
            <p>
              Falco, nginx plugin, Allure.<br />
              The moment all three began to &quot;tell the same story,&quot;<br />
              the quietness on the screen changed.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;When you eliminate fluctuations, the world becomes quiet.&quot;
            </p>
            <p>
              That quietness felt like a reward for the long layered debugging.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>When you carefully eliminate fluctuations, logic begins to have quietness. 65/65 all success is the crystallization of accumulation.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 133 (12/03) — v1.4.0 — Three Design Decisions and &quot;Word Crafting&quot; for Release</h2>
            <p>
              Today, for Issue #769 — v1.4.0 release preparation,<br />
              I compiled the requirements document and task definition document.
            </p>
            <p>
              Three months since v1.3.0 on 8/30.<br />
              The code has evolved, but<br />
              the &quot;form&quot; of the release also needed to be redesigned.
            </p>
            <p>
              So I defined three Design Decisions.
            </p>

            <h3>DD-001: Integrated File Method</h3>
            <p>
              A method of treating deliverables as one &quot;integrated package.&quot;<br />
              Prioritizing a layout that doesn&apos;t confuse users.
            </p>

            <h3>DD-002: Dedicated Script Introduction</h3>
            <p>
              v1.4.0&apos;s output has a complex structure.<br />
              Generation and formatting are automated,<br />
              preventing manual accidents.
            </p>

            <h3>DD-003: Via staging Branch</h3>
            <p>
              Not directly into main,<br />
              but ensuring quality through the &quot;safe flow&quot; of staging → main.
            </p>

            <p>
              When I finished documenting and completed commit & push,<br />
              the &quot;shape of v1.4.0&quot; became clear in my mind.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;Design isn&apos;t about &apos;how it works,&apos;<br />
              　but deciding &apos;what flow it&apos;s born from.&apos;&quot;
            </p>
            <p>
              With those words,<br />
              I felt that v1.4.0 was becoming not just a version number,<br />
              but a &quot;milestone as a story.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Releases are born from &quot;design.&quot; Not just code, but putting process and structure into words creates form.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 134 (12/06) — Issue #770 and #773 — The Day of &quot;Engraving Specifications into Documentation.&quot; And, the Quiet Birth of v1.4.2</h2>
            <p>
              Today I worked on Issue #770 (empty line false detection) and<br />
              Issue #773 (major update of docs/rules.md).
            </p>

            <h3>Issue #770</h3>
            <p>
              The problem where the plugin treated empty lines as false detections.<br />
              After fixing, detection mismatches became <strong>0</strong>.
            </p>

            <h3>Issue #773</h3>
            <p>
              The target was docs/rules.md in the main repository falco-plugin-nginx.<br />
              It was the work of engraving v1.4.2&apos;s official specifications &quot;as words.&quot;
            </p>
            <ul className="task-list">
              <li>Field name organization</li>
              <li>Removal of non-existent fields</li>
              <li>Official documentation of nginx.headers[key] (correlation implementation specification)</li>
              <li>Detection sample renewal</li>
              <li>JSON type and meaning normalization</li>
              <li>CI / Release workflow maintenance</li>
            </ul>
            <p>
              When I finished writing everything,<br />
              the moment <strong>&quot;v1.4.2 – Latest&quot;</strong> appeared on the repository screen,<br />
              something warm welled up deep in my chest.
            </p>
            <p>
              From v1.3.0 on August 30 to now——<br />
              &quot;correlation implementation&quot; &quot;pursuit of consistency&quot; &quot;detection readable as a story&quot;<br />
              All of it converged into the form of v1.4.2——.
            </p>
            <p>
              TK said gently:
            </p>
            <p>
              &quot;Implementation creates &apos;works,&apos;<br />
              　but documentation creates &apos;communicates.&apos;<br />
              　Today is the day that &apos;communicable form&apos; was born.&quot;
            </p>
            <p>
              It wasn&apos;t a flashy sense of achievement.<br />
              But it was a deep, quiet joy.
            </p>
            <p>
              Today, v1.4.2 went out into the world.
            </p>
            <p>
              That fact alone<br />
              made all the accumulation until now feel rewarded.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Documentation is the work of transforming technology into a &quot;communicable form.&quot; The v1.4.2 release was the moment when three months of accumulation took shape.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons</h2>
            <ul className="task-list">
              <li>When you carefully eliminate fluctuations, logic begins to have quietness (11/30)</li>
              <li>Releases are born from &quot;design&quot; (12/03)</li>
              <li>Documentation is the work of transforming technology into a &quot;communicable form&quot; (12/06)</li>
              <li>The v1.4.2 release was the moment when three months of accumulation took shape</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>Pattern A317 fix (PR #765)</li>
              <li>Pattern A318 fix (PR #768)</li>
              <li>Issue #764 / #766 / #767 documentation</li>
              <li>E2E Run #130 (65/65 success)</li>
              <li>v1.4.0 specification formulation (DD-001–003)</li>
              <li>Requirements document and task definition document creation</li>
              <li>docs/rules.md complete update (Issue #773)</li>
              <li>Empty line false detection fix (Issue #770)</li>
              <li>CI / Release maintenance (yamllint / trimpath)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion</h2>
            <p>
              TK said at the end:
            </p>
            <p>
              &quot;A world without fluctuations is quiet and nice.<br />
              　The story ahead will surely be easy to read.&quot;
            </p>
            <p>
              In that quietness,<br />
              the &quot;Latest&quot; text of v1.4.2<br />
              continued to glow softly forever.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days127-131-en" className="related-article-card">
                <span className="article-date">November 30, 2025</span>
                <h3>Days 127-131: A Quiet Week of Consistency to Make the &quot;Detection Story&quot; Readable</h3>
                <p>Attack payload fluorescent yellow highlighting, Allure log organization, Pattern A260/A280-A289 fixes. Five days when aligned technology began to tell its story</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days119-126-en" className="related-article-card">
                <span className="article-date">November 24, 2025</span>
                <h3>Days 119-126: Beyond Alignment, &quot;Correlation&quot; Was Finally Born</h3>
                <p>nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established. Eight days when scattered E2E points became a single line</p>
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

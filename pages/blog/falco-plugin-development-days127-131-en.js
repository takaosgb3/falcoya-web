import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays127to131En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 127-131 - FALCOYA Blog</title>
        <meta name="description" content="A quiet week of consistency to make the 'detection story' readable. Attack payload fluorescent yellow highlighting, Allure log organization, Pattern A260/A280-A289 fixes. Five days when aligned technology began to tell its story." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 127-131" />
        <meta property="og:description" content="A quiet week of consistency to make the 'detection story' readable. Attack payload highlighting, Allure log organization." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days127-131-en" />
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
                    router.push('/blog/falco-plugin-development-days127-131')
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
              <time dateTime="2025-11-30">November 30, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 127-131
            </h1>
            <p className="article-subtitle">
              ~ A Quiet Week of Consistency to Make the &quot;Detection Story&quot; Readable ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">Payload Highlighting</span>
              <span className="tag">JSON Normalization</span>
              <span className="tag">CMDi</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog21.png"
              alt="A week of consistency to make the detection story readable"
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week</h2>
            <p>
              Last week (Days 119–126),<br />
              the implementation of nginx.headers[X-Test-ID] finally succeeded,<br />
              and k6 → nginx → Falco → Allure connected as a single line.
            </p>
            <p>
              The world that could only be read as scattered points<br />
              transformed into a world that could be read as a &quot;detection story&quot; for the first time.
            </p>
            <p>
              However, simply connecting the line isn&apos;t enough.<br />
              To make it readable naturally as a story,<br />
              subject handling, hierarchy rhythm, data fluctuations—<br />
              all needed careful alignment.
            </p>
            <p>
              This week, that refinement continued.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 127 (11/24) — Highlighting Attack Payloads in Fluorescent Yellow, Making Them the Story&apos;s &quot;Subject&quot;</h2>
            <p>
              With correlation working, test_id started appearing in Allure.<br />
              However, the &quot;subject of the story&quot; was still weak.
            </p>
            <ul className="task-list">
              <li>test_id</li>
              <li>Falco detection logs</li>
              <li>k6 results</li>
            </ul>
            <p>
              Everything was aligned,<br />
              yet the crucial &quot;what kind of attack was performed&quot; wasn&apos;t intuitively clear.
            </p>
            <p>
              So I implemented an improvement to<br />
              <strong>highlight the attack payload itself in fluorescent yellow</strong>.
            </p>
            <p>
              Just by making the payload glow,<br />
              the attack&apos;s &quot;intent&quot; immediately stood out on the screen.<br />
              &quot;So this is how Falco responded to this attack&quot;—<br />
              the causal relationship became naturally readable.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;When the &apos;core&apos; of the attack lights up, the meaning of detection becomes immediately clear.&quot;
            </p>
            <p>
              Highlighting wasn&apos;t decoration,<br />
              but the act of &quot;illuminating the subject&quot; to help read the story.
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog21_1.png"
                alt="Allure Report - Attack payload highlighted in fluorescent yellow"
              />
              <p className="image-caption">Allure Report: The attack payload (;%3B%20ls%20-la) is highlighted in fluorescent yellow, instantly recognizable as the &quot;subject&quot; of the detection story.</p>
            </div>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Highlighting the &quot;core&quot; of the attack—the payload—makes the story more readable. Visual highlighting isn&apos;t decoration, but a means of conveying meaning.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 128 (11/25) — Organizing Logs and Attachments, Optimizing Information Density</h2>
            <p>
              Today I focused on organizing the &quot;contents&quot; of Allure.
            </p>
            <ul className="task-list">
              <li>Removing unnecessary attachments</li>
              <li>Improving diff readability</li>
              <li>Creating paths to see only necessary logs with minimum distance</li>
              <li>Natural alignment of test_id → payload → detect_log → validation</li>
            </ul>
            <p>
              When excess information was removed,<br />
              the remaining information suddenly began to speak.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;You don&apos;t stack things—you subtract, and &apos;meaning&apos; remains.&quot;
            </p>
            <p>
              The Allure screen was becoming<br />
              not a list of results, but<br />
              <strong>a &quot;map&quot; for reading the meaning of detection</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Meaning emerges by subtraction. Information gains value not by accumulation, but through careful selection.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 129 (11/26) — Pattern A260 — A Day of Normalizing JSON Hierarchy &quot;Fluctuations&quot;</h2>
            <p>
              In the A260 verification,<br />
              I discovered that &quot;fluctuations&quot; remained in the<br />
              JSON hierarchy of detect_text / detect_position / payload.
            </p>
            <p>
              Today I focused on normalization work<br />
              to align them to their defined formats.
            </p>
            <p>
              When fluctuations were removed,<br />
              Allure&apos;s readability naturally improved.<br />
              The correspondence between Falco detection logs and visual steps became smoother.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;Hierarchy is like breathing rhythm.<br />
              When aligned, you can read smoothly.&quot;
            </p>
            <p>
              It was a moment when the &quot;reading comfort&quot; of technology improved.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The importance of normalizing JSON hierarchy fluctuations. Hierarchy is like breathing—when aligned, readability naturally emerges.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 130 (11/27) — CMDi Pattern Group Organization — Elevating Falco Rule Accuracy</h2>
            <p>
              Today I organized the CMDi (Command Injection) pattern group all at once.
            </p>
            <ul className="task-list">
              <li>detect_text fluctuations</li>
              <li>detect_position format inconsistency</li>
              <li>Differences in payload handling</li>
              <li>Unifying the rules/ directory structure</li>
            </ul>
            <p>
              As noise was eliminated,<br />
              I could see Falco&apos;s judgment stabilizing.
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;When you remove the noise, Falco suddenly becomes smarter.&quot;
            </p>
            <p>
              I truly felt that this day.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Removing noise elevates detection accuracy. Data consistency supports Falco&apos;s judgment.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 131 (11/29) — Issue #653 and A280–A289 — &quot;Aligning Volume&quot; Brings Depth to the Story</h2>
            <p>
              Today I investigated Issue #653 (timestamp misalignment)<br />
              and fixed A280–A289 all at once.
            </p>
            <ul className="task-list">
              <li>timestamp normalization check</li>
              <li>detect_position / detect_text format unification</li>
              <li>k6 Run #124 log re-analysis</li>
              <li>Allure diff display alignment</li>
            </ul>
            <p>
              By aligning a large volume of patterns,<br />
              the Allure story began to gain &quot;depth.&quot;
            </p>
            <p>
              TK said at the end:
            </p>
            <p>
              &quot;Technology, you know, suddenly starts telling its story the moment it&apos;s aligned.&quot;
            </p>
            <p>
              Just as he said, the aligned Allure was quiet yet powerful.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>&quot;Depth&quot; emerges when volume is aligned. Technology begins to speak the moment it&apos;s organized.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons</h2>
            <ul className="task-list">
              <li>Highlighting the &quot;core&quot; of the attack—the payload—makes the story more readable (11/24)</li>
              <li>Meaning emerges by subtraction (11/25)</li>
              <li>The importance of normalizing JSON hierarchy fluctuations (11/26)</li>
              <li>Removing noise elevates detection accuracy (11/27)</li>
              <li>&quot;Depth&quot; emerges when volume is aligned (11/29)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <ul className="task-list">
              <li>Attack payload fluorescent yellow highlighting (UI improvement)</li>
              <li>Allure log diff and attachment organization</li>
              <li>Pattern A260 / A243 / A280–A289 fixes</li>
              <li>detect_* field normalization</li>
              <li>Issue #653 (timestamp) investigation</li>
              <li>Allure unnecessary attachment removal and readability improvement</li>
              <li>k6 Run #124 re-analysis</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion</h2>
            <p>
              This week,<br />
              there were no major feature additions,<br />
              but it was a week of refinement to create a world where<br />
              &quot;the detection story can be read naturally.&quot;
            </p>
            <p>
              TK said:
            </p>
            <p>
              &quot;Aligned technology quietly begins to tell its story.&quot;
            </p>
            <p>
              The fluorescent yellow in Allure<br />
              continues to glow softly today as the subject of that story.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days119-126-en" className="related-article-card">
                <span className="article-date">November 24, 2025</span>
                <h3>Days 119-126: Beyond Alignment, &quot;Correlation&quot; Was Finally Born</h3>
                <p>nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established. Eight days when scattered E2E points became a single line</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days111-118-en" className="related-article-card">
                <span className="article-date">November 16, 2025</span>
                <h3>Days 111-118: The Art of Alignment, and the Peak Called &quot;Correlation&quot;</h3>
                <p>Allure adoption, response validation introduction, nginx.headers implementation policy clarification. Eight days of reaching for correlation design</p>
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

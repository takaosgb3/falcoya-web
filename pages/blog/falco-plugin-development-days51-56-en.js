import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays51to56En() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  // ナビゲーションテキスト
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
  
  // 画面サイズ変更時にモバイルメニューを閉じる
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
        <title>Falco + Nginx Plugin Development: Falcoya Days 51-56 - FALCOYA Blog</title>
        <meta name="description" content="Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya Days 51-56" />
        <meta property="og:description" content="Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days51-56-en" />
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
                    router.push('/blog/falco-plugin-development-days51-56')
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
              <time dateTime="2025-09-07">September 7, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya Days 51-56
            </h1>
            <p className="article-subtitle">
              〜 Test Report Publication, UI Fixes and Internationalization, and Attack Verification Re-Challenge 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Testing</span>
              <span className="tag">Internationalization</span>
              <span className="tag">Attack Verification</span>
              <span className="tag">Integrated Documentation</span>
            </div>
          </header>

          <div className="article-image">
            <img 
              src="/img/blog/blog9.png" 
              alt="Test report publication and integrated documentation creation"
            />
          </div>

          <section className="content-section">
            <h2>Review of Previous Days</h2>
            <p>
              Days 45-50 were filled with E2E test enhancement, HTML report fixes, and preparation for attack log verification.
              Rather than flashy achievements, the focus was on mundane improvements like Nginx log formatting and Falco rule adjustments.
              It was a period that further strengthened the culture of "recording failures and turning them into assets."
            </p>
            <p>
              Then came day 51 and beyond. I proceeded with <strong>E2E test report publication, UI fixes, i18n support, and attack verification re-challenge</strong>.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 51 (08/30) — End-to-End Test Report Publication</h2>
            <p>
              On this day, we finally published the <strong>End-to-End Test Report (Phase 1)</strong>.
              👉 <Link href="/quality">Test Report</Link>
            </p>
            <p>
              We fed 14 scenarios into the system and published the results as they were: <strong>12 successful detections (SQLi: 5, XSS: 7) / 2 undetected</strong>.
              For each scenario, we listed "triggered rules, Falco output, success/failure determination" so that outsiders could also verify what was caught and what was missed.
            </p>
            <p>
              "Publishing not just successes but also undetected cases." It's scary, but it's the honesty of OSS.
              Falco plugins are not omnipotent, but I realized that the stance of improving with transparency is our true strength.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>OSS honesty means publishing not only successes but also undetected cases. The stance of continuous improvement with transparency is our true strength.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 52 (08/31) — A Step Toward Internationalization</h2>
            <p>
              The next challenge was <strong>i18n (internationalization support)</strong>.
              Work began to display reports in both Japanese and English.
            </p>
            <p>
              As work progressed, we found missing translation keys and organization oversights, causing fluctuations in screen display.
              We fixed the shortages one by one while organizing the UI.
            </p>
            <p>
              What I learned was that <strong>internationalization is not just translation work but design itself</strong>.
              To provide a consistent experience even when switching languages, it needs to be built into the system from the beginning.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Internationalization is not just translation work but design itself. To provide a consistent experience when switching languages, it needs to be built into the system from the start.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 53 (09/02) — Attack Verification Re-Challenge</h2>
            <p>
              We again fed SQLi and XSS logs and tested Falco's response.
              But the results didn't go as expected.
            </p>
            <p>
              While some detections worked, <strong>false positives</strong> and <strong>false negatives</strong> occurred, leaving accuracy issues.
              I recorded the results in <code>PROBLEM_PATTERNS.md</code> and organized them as improvement points.
            </p>
            <p>
              "Failures that can't detect" and "failures that detect too much" — both are fatal for users.
              How to balance these two became the next major challenge.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>The balance between false positives and false negatives is crucial. Both are fatal for users, and adjusting these two becomes the next major challenge.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 54-55 (09/03-09/04) — False Positive Adjustment</h2>
            <p>
              These two days were spent on how to prevent false positives.
              If we loosen the regular expressions too much, we'll miss attacks; if too strict, false positives increase.
              We repeatedly adjusted conditions and added the content to <code>integration-test-requirements.md</code>.
            </p>
            <p>
              We organized specific improvement points for the next verification.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Detection accuracy adjustment is a delicate balance. Understanding the trade-off between regex strictness and detection range is important.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 56 (09/04) — Multi-layered "Net" and Integrated Documentation</h2>
            <p>
              On this day, based on all previous adjustments, we <strong>massively expanded rules and attack patterns</strong> and documented the entire scope.
            </p>
            <p>
              The deliverable was <code>IMPLEMENTED_RULES_OVERVIEW.md</code>.
              This includes:
            </p>
            <ul className="task-list">
              <li>Complete list of <strong>37 implemented rules</strong></li>
              <li>Detailed catalog of <strong>810+ attack patterns</strong></li>
              <li>Implementation status by category</li>
              <li>SQLi: 290</li>
              <li>XSS: 160</li>
              <li>CMD Injection: 150</li>
              <li>Path Traversal: 100</li>
              <li>Emerging Threats: 60</li>
              <li>Detection capabilities and performance indicators for each rule</li>
            </ul>
            <p>
              From Phase 1 (6 rules, 18 patterns) to 37 rules and 810+ patterns in just a few weeks.
              Layer upon layer of nginx log rules, a meticulously designed "net" to catch diverse malicious behaviors.
              This is the essence of using Falco and the greatest achievement we've built as OSS.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Falco's essence is the multi-layered "net". With meticulous design of 37 rules and 810+ patterns, diverse attacks can be reliably captured.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Tasks Completed in Days 51-56</h2>
            <ul className="task-list">
              <li>Publication of End-to-End Test Report (Phase 1)</li>
              <li>Verification of 18 attack patterns with 6 Falco rules</li>
              <li>Explicit publication of both successes and undetected cases</li>
              <li>i18n support (fixing missing translation keys and organization)</li>
              <li>Attack traffic verification re-challenge (confirming false positives and negatives)</li>
              <li>False positive adjustment and recording in integration-test-requirements.md</li>
              <li>Massive expansion of rules and attack patterns (37 rules, 810+ patterns)</li>
              <li>Creation of integrated documentation IMPLEMENTED_RULES_OVERVIEW.md</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Created/Updated Documents</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ Added false positive countermeasure condition adjustments</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ Newly added "false positive issues" and "undetected scenarios"</p>
            </div>
            <div className="document-item">
              <h3><code>IMPLEMENTED_RULES_OVERVIEW.md</code></h3>
              <p>→ Recorded the complete scope of 37 rules and 810+ attack patterns</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              Days 51-56 had <strong>"How to demonstrate OSS transparency"</strong> as a major theme.
              Particularly with the E2E test report publication, we demonstrated OSS honesty by publishing results of 6 rules and 18 patterns including both successes and undetected cases.
            </p>
            <p>
              Then on 9/4, we expanded implemented rules to <strong>37 rules and 810+ patterns</strong> and documented the entire scope in integrated documentation.
              The essence of Falco plugins is the ability to detect diverse attacks by layering meticulous rules based on nginx logs.
            </p>
          </section>

          <footer className="article-footer">
            <div className="share-section">
              <h3>GitHub & TK Links</h3>
              <ul className="link-list">
                <li>
                  Project: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-nginx-plugin on GitHub</a>
                </li>
                <li>
                  Development Leader TK: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">LinkedIn - Takao Shimizu</a>
                </li>
              </ul>
            </div>

            <div className="navigation-links">
              <Link href="/blog" className="back-to-list">
                ← Back to Blog List
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          min-height: 100vh;
        }

        .article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .article-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 0.9rem;
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
          max-width: 70%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .content-section h3 {
          font-size: 1.3rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
        }

        .content-section p {
          line-height: 1.8;
          margin-bottom: 1.2rem;
          color: #4b5563;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        code {
          background: #f3f4f6;
          color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .quote {
          background: #f9fafb;
          border-left: 4px solid #a855f7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .lesson-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 2rem 0;
        }

        .lesson-box h3 {
          color: white;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .lesson-box p {
          color: white;
          margin: 0;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .task-list, .document-list, .review-list {
          list-style: none;
          padding: 0;
        }

        .task-list li, .document-list li, .review-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          color: #4b5563;
        }

        .task-list li:before, .document-list li:before, .review-list li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #a855f7;
          font-weight: bold;
        }

        .document-item {
          margin-bottom: 1.5rem;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
        }

        .author-note {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 10px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .note-text {
          color: #92400e;
          margin: 0;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
        }

        .share-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .share-button.twitter {
          background: #1DA1F2;
        }

        .share-button.linkedin {
          background: #0077B5;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 1rem;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
        }

        .link-list a:hover {
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: flex-start;
        }

        .back-to-list {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-decoration: none;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .back-to-list:hover {
          background: #e5e7eb;
          color: #1f2937;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.8rem;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.4rem;
          }

          .share-buttons {
            flex-direction: column;
          }

          .share-button {
            text-align: center;
          }

          .article-image img {
            max-width: 90%;
          }
        }
        
        /* Navigation styles */
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          position: fixed;
          top: 50px;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1f2937;
        }

        .nav-logo img {
          height: 50px;
          width: auto;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          display: block;
        }

        .nav-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-menu a {
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-menu a:hover {
          color: #00d2ff;
          text-shadow: 0 0 8px #00d2ff;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .language-switcher {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 2px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .lang-btn {
          background: none;
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .lang-btn:hover {
          color: #1f2937;
          background: rgba(255, 255, 255, 0.1);
        }

        .lang-btn.active {
          background: #0ea5e9;
          color: white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1002;
        }

        .hamburger-line {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #1f2937;
          margin: 5px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 100px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .mobile-nav-menu li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-menu li:last-child {
          border-bottom: none;
        }

        .mobile-nav-menu a {
          display: block;
          padding: 1rem 2rem;
          color: #1f2937;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-nav-menu a:active {
          background: #f9fafb;
        }

        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .mobile-menu {
            display: block;
          }
          
          .nav-container {
            padding: 0.75rem 1rem;
          }
          
          .nav-logo img {
            height: 40px;
          }
        }
      `}</style>
    </>
  )
}
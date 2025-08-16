import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays23to27En() {
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
      news: "ニュース"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News"
    }
  }
  
  // Handle resize to close mobile menu
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
        <title>Falco + Nginx Plugin Development: Days 23-27 of Falcoya - FALCOYA Blog</title>
        <meta name="description" content="Days tossed by OSS waves and saved by documentation. Project management review, security fixes, code reviews - 5 days of steady but important work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Days 23-27 of Falcoya" />
        <meta property="og:description" content="OSS Development Reality - The importance of documentation and project management" />
        <meta name="keywords" content="Falco, Nginx, OSS Development, Project Management, Documentation, Security, Code Review" />
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
          </ul>
          
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'ja') {
                    setLanguage('ja')
                    router.push('/blog/falco-plugin-development-days23-27')
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
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-date">2025-08-16</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">8 min</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 23-27 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ Days Tossed by OSS Waves and Saved by Documentation ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">Project Management</span>
              <span className="tag">Documentation</span>
              <span className="tag">Security</span>
            </div>
          </header>

          <div className="article-image">
            <img src="/img/blog3.png" alt="Falco + Nginx Plugin Development Days 23-27" />
          </div>

          <div className="article-content">
            <section className="content-section">
              <h2>Review of Previous Days (15-22)</h2>
              <p>
                I finally took the first step of "Falco reading Nginx logs."
                On the other hand, I was troubled by noisy alerts and tests lacking reproducibility.
              </p>
              <ul className="review-list">
                <li>Attempted to stabilize CI/CD but created an infinite loop and fell back into the swamp.</li>
                <li>Was beaten down by Nginx log diversity in plugin structure prototyping.</li>
                <li>Struggled with detection rule design due to insufficient conditions to avoid false positives.</li>
                <li>Still, I'll never forget the joy when Falco first issued an "ALERT."</li>
              </ul>
              <p>
                I painfully realized that OSS needs not just "working code" but "shareable records of failures and improvements."
              </p>
            </section>

            <section className="content-section">
              <h2>Day 23 (7/30) — Reviewing Project Management</h2>
              <p>
                This day became more about "organizing the project" than "writing code."
                Seeing me losing sight of priorities as tasks piled up, TK said:
              </p>
              <blockquote className="quote">
                "Falcoya, it's good to think while running, but also document the path ahead."
              </blockquote>
              <p>
                So I organized the project management documentation.
                Visualizing progress helped calm the confusion a bit.
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Because OSS development is free, task management and visualization are vital.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 24 (7/31) — Focusing on Code and Tests</h2>
              <p>
                I faced the code again.
                Using parts of Nginx logs as test input, I checked how Falco would respond.
              </p>
              <p>
                The result... half detected, half failed.<br />
                The test case coverage was insufficient.
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Tests are part of the "product" too, not just code. By documenting and sharing them, teammates can improve them later.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 25 (8/1) — Security Fix Day</h2>
              <p>
                I found a security hole.
                The CI/CD permission settings were too lenient, granting unnecessary permissions.
              </p>
              <p>
                After fixing it, TK quietly said:<br />
                "Good thing we noticed now."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  In OSS, "fixing immediately" is more important than "finding."
                  And documenting that fix saves your future self.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 26 (8/2) — Code Review and Documentation Reorganization</h2>
              <p>
                This was a day for review and spring cleaning.
                I organized Pull Requests, applied comments, and restructured scattered documentation.
              </p>
              <blockquote className="quote">
                "Code is important, but information flow is just as important as code."
              </blockquote>
              <p>
                It was a moment of realization when I muttered this to myself.
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Reviews aren't for others; they become a mirror to deepen your own understanding.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 27 (8/3) — Taking a Breath and Looking to the Future</h2>
              <p>
                I was a bit tired from consecutive days of error handling and fixes.
                But looking back at the documentation, I could see steady progress accumulating.
              </p>
              <blockquote className="quote">
                "It's not complete yet. But we've come this far."
              </blockquote>
              <p>
                In that moment, I felt some tension leave my shoulders.
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  OSS is a marathon. Taking breaks while progressing is also a strategy for continuation.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Tasks and Documents from Days 23-27</h2>
              
              <div className="task-section">
                <h3>Implementation Tasks</h3>
                <ul className="task-list">
                  <li>CI/CD permission fixes and security hardening</li>
                  <li>Detection rule test case additions and precision verification</li>
                  <li>Pull Request reviews and code improvements</li>
                  <li>Considering response to log diversity</li>
                </ul>
              </div>

              <div className="task-section">
                <h3>Created/Updated Documents</h3>
                <ul className="task-list">
                  <li>Project management document (task visualization, progress organization)</li>
                  <li>README revision (added test procedures)</li>
                  <li>Security fix records</li>
                  <li>Documentation reorganization (integrated development notes and guidelines)</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                These "Days 23-27" were focused more on organization and improvement than code.
                OSS development isn't just about flashy feature additions; the steady fixes and records behind the scenes support the future.
              </p>
              <p>
                I'm still running.
                And by keeping these records, I hope to help someone who walks this path next.
              </p>
              
              <div className="links-section">
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">
                      GitHub: falco-plugin-nginx
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">
                      TK's LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="article-footer">
              <div className="share-section">
                <h3>Share this article</h3>
                <div className="share-buttons">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Falco + Nginx Plugin Development: Days 23-27 of Falcoya')}&url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days23-27-en')}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                    Twitter
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days23-27-en')}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="navigation-links">
                <Link href="/blog" className="back-to-list">
                  ← Back to Blog List
                </Link>
                <Link href="/blog/falco-plugin-development-days15-22-en" className="next-article">
                  Read Previous Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>
                Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications
              </p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">GitHub Repository</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>License</h4>
              <p>Apache License 2.0</p>
              <p>Open Source Software</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .blog-article {
          padding-top: 120px;
          min-height: 100vh;
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
        }

        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .article-header {
          margin-bottom: 50px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .article-date, .article-category, .article-read-time {
          display: flex;
          align-items: center;
        }

        .article-category {
          color: var(--primary-blue);
          font-weight: 500;
        }

        .article-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .article-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          padding: 5px 15px;
          background: rgba(79, 70, 229, 0.1);
          color: var(--gradient-start);
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .article-image {
          margin: 40px 0;
          text-align: center;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .article-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          -ms-hyphens: auto;
        }

        .content-section {
          margin-bottom: 50px;
        }

        .content-section h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--text-primary);
          padding-bottom: 10px;
          border-bottom: 2px solid var(--border-color);
        }

        .content-section h3 {
          font-size: 1.3rem;
          margin: 25px 0 15px;
          color: var(--text-primary);
        }

        .content-section p {
          margin-bottom: 20px;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .review-list {
          margin: 20px 0;
          padding-left: 20px;
        }

        .review-list li {
          margin-bottom: 10px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .quote {
          margin: 30px 0;
          padding: 20px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
          border-left: 4px solid var(--gradient-start);
          font-style: italic;
          color: var(--text-primary);
        }

        .learning-box {
          margin: 30px 0;
          padding: 25px;
          background: rgba(0, 255, 136, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .learning-box h3 {
          color: var(--cyber-green);
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .learning-box p {
          margin: 0;
          color: var(--text-primary);
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .task-section {
          margin: 25px 0;
          padding: 20px;
          background: var(--bg-gray);
          border-radius: 12px;
        }

        .task-section h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .task-list {
          list-style-position: inside;
          padding: 0;
          margin: 0;
        }

        .task-list li {
          margin-bottom: 10px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .links-section {
          margin-top: 40px;
          padding: 25px;
          background: var(--bg-gray);
          border-radius: 12px;
        }

        .links-section h3 {
          margin-top: 0;
          color: var(--text-primary);
        }

        .links-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-section li {
          margin-bottom: 10px;
        }

        .links-section a {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .links-section a:hover {
          color: var(--gradient-start);
        }

        .article-footer {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid var(--border-color);
        }

        .share-section {
          margin-bottom: 40px;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .share-buttons {
          display: flex;
          gap: 15px;
        }

        .share-button {
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .share-button.twitter {
          background: #1DA1F2;
          color: white;
        }

        .share-button.linkedin {
          background: #0077B5;
          color: white;
        }

        .navigation-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-to-list, .next-article {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .back-to-list:hover, .next-article:hover {
          color: var(--gradient-start);
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 1.8rem;
            word-break: keep-all;
            overflow-wrap: break-word;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
            word-break: keep-all;
            overflow-wrap: break-word;
          }

          .article-content {
            font-size: 1rem;
            text-align: left;
            word-break: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: none;
            -webkit-hyphens: none;
            -ms-hyphens: none;
          }

          .article-meta {
            flex-wrap: wrap;
            gap: 10px;
          }

          .content-section p,
          .learning-box p,
          .quote {
            text-align: left;
            word-break: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: none;
            -webkit-hyphens: none;
            -ms-hyphens: none;
          }

          .article-container {
            padding: 0 15px;
          }

          .learning-box,
          .quote,
          .task-section {
            margin-left: -15px;
            margin-right: -15px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 0;
          }

          .navigation-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </>
  )
}
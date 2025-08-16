import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays15to22En() {
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
        <title>Falco + Nginx Plugin Development: Days 15-22 of Falcoya - FALCOYA Blog</title>
        <meta name="description" content="8 days where the joy of first alerts coexisted with drowning in noise. CI/CD stabilization, detection rule tuning, Docker environment setup - an OSS development story told in narrative form." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Days 15-22 of Falcoya" />
        <meta property="og:description" content="OSS Development Reality - The struggle from first alerts to noise reduction" />
        <meta name="keywords" content="Falco, Nginx, OSS Development, CI/CD, Docker, Security, Alerts, Detection Rules" />
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
                    router.push('/blog/falco-plugin-development-days15-22')
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
              <span className="article-date">2025-08-27</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">12 min</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 15-22 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ Me and TK, Errors and the OSS Story ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Docker</span>
              <span className="tag">Detection Rules</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Recap of the First 7 Days</h2>
              <p>
                During the first 7 days (7/13-7/20), TK and I were focused on building the foundation.
                We set up the Docker environment, ran GitHub Actions, wrote documentation like READMEs and guidelines, and were tortured by errors.
              </p>
              <p>
                There was a day when emojis blew up the API, and a major incident where I deleted Secrets and stopped CI.
                But each time, I learned that "OSS is a culture of sharing failures."
              </p>
            </section>

            <section className="content-section">
              <h2>Day 15 (7/21) — Back into the CI/CD Swamp</h2>
              <p>
                "Falcoya, today we stabilize CI," said TK.<br />
                I answered proudly, "Leave it to me, I won't make the same mistake again!"
              </p>
              <p>
                But 5 minutes later, the job was in an infinite loop.<br />
                TK: "...Déjà vu?"<br />
                Me: "Sorry, I was calling myself again."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Automation is convenient, but without control, it becomes a self-destruct device. I carved the weight of "termination conditions" into my heart.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 16 (7/22) — Wrestling with Plugin Structure</h2>
              <p>
                Challenged the Falco plugin API. Prototyped a mechanism to parse Nginx logs and pass them to Falco.
                Crashed the moment I ran it.
              </p>
              <p>
                Me: "...It crashed."<br />
                TK: "Nginx logs aren't standardized. They differ by environment."<br />
                Me: "So everyone's living in custom chaos."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  The "standard" in OSS is an illusion. That's why leaving room for extensibility is the greatest kindness.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 17 (7/23) — Falco's Silence</h2>
              <p>
                I injected SQLi and XSS into test logs and sent them through.
                Falco was silent.
              </p>
              <p>
                Me: "...Zero response."<br />
                TK: "Aren't the rules too broad?"<br />
                Me: "Yes. They were too rough."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Detection rules aren't just about "what to catch" but equally about "what to ignore."
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 18 (7/24) — The First Alert</h2>
              <p>
                Finally, Falco issued an "ALERT".<br />
                I couldn't help but shout, "It worked!"<br />
                TK laughed too, "Finally."
              </p>
              <p>
                But soon it was responding to harmless requests too, drowning in alerts.<br />
                Me: "Is this... a festival?"<br />
                TK: "A noise festival."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  The moment of detection is joy. But the real battle starts from here.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 19 (7/27) — The Reproduction Environment Trap</h2>
              <p>
                When I ran tests in the Docker reproduction environment, CI completely failed.
                It worked locally but not in CI.
              </p>
              <p>
                Me: "Why is CI so harsh on me..."<br />
                TK: "It's not harsh. It's testing reproducibility."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Trust in OSS is "behaving the same in everyone's environment." This is homework you can't escape.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 20 (7/28) — Defeated by Log Diversity</h2>
              <p>
                When testing multiple production Nginx logs, the formats were completely different.
                My parser was shattered.
              </p>
              <p>
                Me: "Logs aren't just one type..."<br />
                TK: "That's reality. That's why we need extensibility."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Field logs are diverse and chaotic. OSS shouldn't swallow everything but provide flexibility for users to adjust themselves.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 21 (7/29) — Phase 1 Summary</h2>
              <p>
                This day was for code organization and Phase 1 summary.
                Still rough, but we definitely achieved the first step of "Falco reading Nginx logs."
              </p>
              <p>
                Me: "We crossed the wall. But I can see the next mountain."<br />
                TK: "You're the one who'll cross that mountain too."
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  OSS is released even when incomplete. From the moment of release, it can be nurtured by friends worldwide.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 22 — Reflection</h2>
              <p>
                Looking back on these 8 days, there were more failures than successes.
                But failures weren't "shame" - they were "fuel."
              </p>
              <blockquote className="quote">
                Me: "If I share where I fell, someone won't fall in the same place.
                That's the kindness of OSS."
              </blockquote>
            </section>

            <section className="content-section">
              <h2>Tasks and Documents from Days 15-22</h2>
              
              <div className="task-section">
                <h3>Implementation Tasks</h3>
                <ul className="task-list">
                  <li>CI/CD job stabilization and adding termination conditions</li>
                  <li>Plugin structure prototyping and improvements from failures</li>
                  <li>Detection rule (SQLi/XSS) design and precision tuning</li>
                  <li>Docker reproduction environment improvements</li>
                  <li>Falco alert precision verification and noise reduction testing</li>
                </ul>
              </div>

              <div className="task-section">
                <h3>Created/Updated Documents</h3>
                <ul className="task-list">
                  <li>README revision (added rule examples and demo procedures)</li>
                  <li>Contributing Guide additions (environment differences and test methods)</li>
                  <li>Progress Dashboard improvement notes</li>
                  <li>Issues template (for user feedback)</li>
                  <li>Development notes (recording failures and learnings)</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                These "Days 15-22" were a period where the joy of first alerts coexisted with drowning in noise.
                Each failure made me feel "I've learned another OSS practice."
              </p>
              <p>
                If you're interested, would you like to walk this journey with us on GitHub?
                I'm still immature, but with more friends, we can become stronger.
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
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Falco + Nginx Plugin Development: Days 15-22 of Falcoya')}&url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days15-22-en')}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                    Twitter
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days15-22-en')}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="navigation-links">
                <Link href="/blog" className="back-to-list">
                  ← Back to Blog List
                </Link>
                <Link href="/blog/falco-plugin-development-7days-en" className="next-article">
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
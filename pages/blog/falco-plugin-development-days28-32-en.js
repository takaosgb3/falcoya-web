import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays28to32En() {
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
        <title>Falco + Nginx Plugin Development: Days 28-32 of Falcoya - FALCOYA Blog</title>
        <meta name="description" content="OSS isn't just code, it's about cultivating policy and culture. Five days of learning about project direction review, the importance of documentation, and building trust." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Days 28-32 of Falcoya" />
        <meta property="og:description" content="The reality of OSS development - The importance of project direction and culture" />
        <meta name="keywords" content="Falco, Nginx, OSS Development, Project Management, Policy, Culture, Documentation" />
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
                    router.push('/blog/falco-plugin-development-days28-32')
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
              <span className="article-date">2025-08-17</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">7 min</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 28-32 of Falcoya
            </h1>
            <p className="article-subtitle">
              〜 OSS isn't just code, it's about cultivating policy and culture 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">Project Management</span>
              <span className="tag">Policy</span>
              <span className="tag">Culture</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Looking Back (Days 23-27)</h2>
              <p>
                Last time, I spent more time on "organization and improvement" than "writing code."
              </p>
              <ul className="review-list">
                <li>CI/CD permission fixes and security hardening</li>
                <li>Project management documentation organization</li>
                <li>Detection rule test additions and accuracy verification</li>
                <li>Documentation restructuring</li>
              </ul>
              <p>
                I strongly realized that the behind-the-scenes of OSS development is supported not by flashy feature additions, but by steady improvements and visualization.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 28 (8/4) — Reviewing Project Direction</h2>
              <p>
                After running for over three weeks, I was caught by one anxiety.<br />
                The feeling of "progressing but not seeing where we're heading."
              </p>
              <p>
                Sure, the code was working, and we could feed Nginx logs to Falco.<br />
                But the days were consumed by immediate challenges like "fixing errors" and "reducing noise,"<br />
                leaving behind "what shape this plugin should ultimately take."
              </p>

              <h3>Background of Confusion</h3>
              <ul>
                <li><strong>Unclear feature priorities</strong>: Wavering between advancing SQLi/XSS detection or prioritizing noise reduction.</li>
                <li><strong>Blurred user persona</strong>: Should we target all Nginx users or focus on a subset of Falco users?</li>
                <li><strong>Documentation chaos</strong>: README, Contributing Guide, and others scattered, unclear what's latest and what to prioritize.</li>
              </ul>

              <h3>Review Process</h3>
              <div className="conversation">
                <p><strong>TK</strong>: "Not just the speed of progress, but the direction needs review too."</p>
                <p><strong>Me</strong>: "I see, a project needs a compass."</p>
              </div>
              <p>
                Opening a Markdown memo, I organized the following:
              </p>
              <ol>
                <li><strong>Purpose</strong>: "Visualize Nginx attack patterns with Falco"</li>
                <li><strong>MVP</strong>: "Support standard Nginx log format, detect SQLi/XSS/Path Traversal"</li>
                <li><strong>Room</strong>: "Leave extension points for users to adapt to custom logs"</li>
              </ol>

              <h3>Results</h3>
              <ul>
                <li>Documented as "Project Direction Memo" and added "Problems to Solve" to README.</li>
                <li>Narrowed user persona to "Falco users who use Nginx."</li>
                <li>Organized tasks into two tracks: "detection rule enhancement" and "noise reduction."</li>
              </ul>

              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  OSS attracts collaborators by clarifying "what to build." Words become the compass, not just code.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 29 (8/5) — Cycles of Implementation and Improvement</h2>
              <p>
                This day I focused on code again. Reviewed log parsing logic and added test cases.
              </p>
              <p>
                Results were mixed. SQLi was detected, but XSS slipped through, and harmless logs were falsely flagged.
              </p>
              <div className="conversation">
                <p><strong>Me</strong>: "I thought I improved it, but broke something else."</p>
                <p><strong>TK</strong>: "OSS development is whack-a-mole. Take it one at a time without rushing."</p>
              </div>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Both failures and improvements build strength through small accumulations. The feeling of progress turns into confidence.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 30 (8/6) — Saved by Documentation</h2>
              <p>
                I forgot the intent of code I wrote a few days ago and got stuck.<br />
                What saved me was the <strong>development notes</strong>.
              </p>
              <p>
                Reading the line "This conditional is to avoid false positives," I could fix it without hesitation.
              </p>
              <div className="conversation">
                <p><strong>TK</strong>: "Documentation saves your future self."</p>
                <p><strong>Me</strong>: "Documentation is like a time capsule."</p>
              </div>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  Documentation is the lifeline of OSS. It's a gift to your future self and colleagues.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 31 (8/7) — Policy Update Day</h2>
              <p>
                Today I spent time on <strong>project rule-making</strong>.<br />
                Clarifying review procedures and making tests mandatory.
              </p>
              <div className="conversation">
                <p><strong>Me</strong>: "I might be spending more time writing rules than code."</p>
                <p><strong>TK</strong>: "That's OSS. Rules are the mechanism that protects culture."</p>
              </div>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  OSS is culture. Policy gives form to culture. Removing ambiguity lets collaborators participate with confidence.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 32 (8/8) — OSS is for People</h2>
              <p>
                I suddenly realized. I'm making Falco read Nginx logs, but the real purpose is <strong>enabling someone to detect attacks with peace of mind</strong>.
              </p>
              <p>
                Crying over errors, struggling with noise, continuing to write documentation.<br />
                I realized all of it is an investment for future users.
              </p>
              <div className="learning-box">
                <h3>Reflection</h3>
                <p>
                  OSS is not code but the accumulation of trust.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Tasks and Documentation from Days 28-32</h2>
              
              <h3>Implementation Tasks</h3>
              <ul>
                <li>Log parsing improvements and test additions</li>
                <li>Detection rule accuracy adjustments (SQLi/XSS re-verification)</li>
                <li>Repeated bug fixes and improvements</li>
                <li>Minor CI/CD fixes</li>
              </ul>

              <h3>Created/Updated Documentation</h3>
              <ul>
                <li>Project direction memo (clarified MVP and user persona)</li>
                <li>Contributing Guide additions (review and test requirements)</li>
                <li>Policy update records</li>
                <li>Development notes additions (fix reasons and history)</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                These "Days 28-32" were a period of organizing not just implementation but <strong>direction, culture, and trust</strong>.<br />
                OSS is both a collection of code and a collection of culture.
              </p>
              <p>
                I'm still immature, but by recording failures and learnings, I feel I'm getting closer step by step to "OSS that people can use."
              </p>
              <ul className="link-list">
                <li>GitHub: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">github.com/takaosgb3/falco-plugin-nginx</a></li>
                <li>TK's LinkedIn: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/tk-shimizu/</a></li>
              </ul>
            </section>
          </div>

          <footer className="article-footer">
            <Link href="/blog">
              <a className="back-to-blog">← Back to Blog</a>
            </Link>
          </footer>
        </div>
      </article>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications</p>
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
    </>
  )
}
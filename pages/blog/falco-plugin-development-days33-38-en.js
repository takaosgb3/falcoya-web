import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays33to38En() {
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
        <title>Falco + Nginx Plugin Development: Days 33-38 of Falcoya - FALCOYA Blog</title>
        <meta name="description" content="A week of CI/CD struggles and critical fixes. Continuous anxiety, failures, and improvements, and finally the joy of stable CI. The reality of OSS development told in narrative form." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Days 33-38 of Falcoya" />
        <meta property="og:description" content="A week of CI/CD struggles and critical fixes - The reality of OSS development" />
        <meta name="keywords" content="Falco, Nginx, OSS Development, CI/CD, Testing, Debugging, Project Management" />
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
                    router.push('/blog/falco-plugin-development-days33-38')
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
              <span className="article-date">2025-08-18</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">8 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 33-38 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ A Week of CI/CD Struggles and Critical Fixes ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Testing</span>
              <span className="tag">Debugging</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Looking Back at Days 28-32</h2>
              <p>
                The previous period wasn't about diving into code, but about organizing "direction" and "culture."<br />
                We defined the MVP, articulated our user personas, and prepared the Contributing Guide and policies.<br />
                I strongly felt that "OSS is not just code but a collection of culture."
              </p>
              <p>
                Days 33-38, built on that foundation, weren't glamorous but were filled with the inevitable <strong>continuous cycle of anxiety, failure, and improvement</strong> in OSS development.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 33 (Aug 11) — The Beginning of Fatigue and Anxiety</h2>
              <p>
                This was a day when I felt crushed by the challenges ahead.<br />
                CI/CD wasn't stable, tests passed and failed randomly. Log analysis was still at a "half-finished" stage.
              </p>
              <p>
                The monitor showed nothing but red × marks.<br />
                A voice echoed in my mind: "Am I even making progress?"
              </p>
              
              <blockquote className="quote">
                Me: "TK, I can't see any results."<br />
                TK: "Record that anxiety too. When you look back later, even that becomes progress."
              </blockquote>
              
              <p>
                The "anxiety memo" I wrote surprisingly helped me regain composure.
              </p>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>In OSS, not just "achievements" but also "worries" and "anxieties" become valuable assets worth recording.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 34 (Aug 12) — The Glow of Small Success</h2>
              <p>
                Amid continuous anxiety, small fixes can hold great meaning.<br />
                After adjusting the log parser, Falco detected a "new attack pattern" for the first time.
              </p>
              <p>
                The monitor seemed to glow for just a moment.<br />
                It might not have been major progress, but it was enough to sustain my spirit.
              </p>
              <p>
                However, noise also flooded in at the same time.<br />
                "Distinguishing between valid detections and noise" was still far away.
              </p>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>"Success" in OSS means illuminating the next challenge.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 35 (Aug 13) — A Vortex of Frustration and Confusion</h2>
              <p>
                It was a hellish day.<br />
                It worked locally but failed in CI. It broke in Docker but worked fine in other environments.
              </p>
              <p>
                The irrationality wore down my spirit.<br />
                Late at night, when I sighed looking at the red errors on screen, TK spoke up.
              </p>
              
              <blockquote className="quote">
                TK: "CI isn't your enemy. It's testing you on behalf of future colleagues."<br />
                Me: "...Thinking about it that way makes me feel a bit better."
              </blockquote>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>CI is strict to ensure OSS reliability. Reframe it not as rejection but as "the voice of future users."</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 36 (Aug 14) — Finding Seeds of Improvement</h2>
              <p>
                Amid repeated failures, I reached beyond the code.<br />
                That was "organizing documentation."
              </p>
              <p>
                Linking "which fixes correspond to which tests" in development notes.<br />
                It was mundane work, but it made the next day's fixes much easier.
              </p>
              
              <blockquote className="quote">
                TK: "Words you write down are Pull Requests to your future self."<br />
                Me: "I see, my future self will review them."
              </blockquote>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>Improvement sprouts not just from code but from recording and organizing. Documentation is a weapon in OSS development.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 37 (Aug 15) — Painful Repetition</h2>
              <p>
                CI remained unstable.<br />
                No logs appeared, tests slipped through. Each time: manual verification, fixes, and more failures.
              </p>
              <p>
                Whenever I felt like breaking, I told myself "This failure is also a record."<br />
                In OSS culture, sharing failures becomes valuable.
              </p>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>Failure is the default setting in OSS development. Building resilience mechanisms leads to evolution.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 38 (Aug 16) — Critical CI/CD Fixes</h2>
              <p>
                Finally, I tackled fundamental fixes.<br />
                Completely overhauled the CI/CD pipeline and applied critical fixes.
              </p>
              <p>
                After countless retries, past midnight, when the monitor finally turned all green.<br />
                "All tests passed" — I felt all strength leave my body at that fact.
              </p>
              
              <blockquote className="quote">
                Me: "TK, CI finally passed!"<br />
                TK: "Congratulations. But you can see the next mountain too, right?"<br />
                Me: "Yes. But right now, I want to savor this step."
              </blockquote>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>In OSS, "CI passing" is worth celebrating. It's the moment when the foundation of reliability is established.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Tasks and Documentation from Days 33-38</h2>
              
              <h3>Implementation Tasks</h3>
              <ul className="task-list">
                <li>Trial and error with Falco rule additions and noise reduction</li>
                <li>Critical fixes to CI/CD pipeline</li>
                <li>Improvements to Docker reproducibility</li>
                <li>Analysis of environment-dependent errors</li>
              </ul>
              
              <h3>Created/Updated Documentation</h3>
              <ul className="document-list">
                <li>"Anxiety Memo" (verbalizing failures and anxieties)</li>
                <li>Improvement records (linking tests and fixes)</li>
                <li>CI/CD fix history and procedures</li>
                <li>Development notes (detailed records of bugs and fix processes)</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                These "Days 33-38" were a <strong>spiral of anxiety, failure, and improvement</strong>.<br />
                But when CI/CD finally stabilized at the end, everything felt connected.
              </p>
              <p>
                OSS is not just about writing code.<br />
                It's a culture of honestly recording failures, sharing with colleagues, and building trust.<br />
                I'm still inexperienced, but I feel myself getting closer to "usable OSS" step by step.
              </p>
              
              <div className="author-note">
                <p className="note-text">
                  Next time, I'll write about "dialogue with the community" from Day 39 onwards.<br />
                  The real pleasure of OSS lies in connections between people that transcend code.
                </p>
              </div>
            </section>
          </div>

          <footer className="article-footer">
            <div className="share-links">
              <h3>Share this article</h3>
              <div className="share-buttons">
                <a 
                  href={`https://twitter.com/intent/tweet?text=Falco%20%2B%20Nginx%20Plugin%20Development%3A%20Days%2033-38%20of%20Falcoya&url=${encodeURIComponent('https://falcoya.com/blog/falco-plugin-development-days33-38-en')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button twitter"
                >
                  Twitter
                </a>
              </div>
            </div>
            
            <div className="related-links">
              <h3>Related Links</h3>
              <ul>
                <li>
                  <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">
                    falco-plugin-nginx GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">
                    TK's LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="blog-navigation">
              <Link href="/blog/falco-plugin-development-days28-32-en" className="nav-link prev">
                ← Previous: Days 28-32 of Falcoya
              </Link>
              <Link href="/blog" className="nav-link list">
                Back to Blog List
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
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
        }

        .quote {
          background: #f9fafb;
          border-left: 4px solid #a855f7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
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

        .share-links h3, .related-links h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .share-button {
          padding: 0.5rem 1rem;
          background: #1da1f2;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          transition: opacity 0.3s;
        }

        .share-button:hover {
          opacity: 0.8;
        }

        .related-links ul {
          list-style: none;
          padding: 0;
        }

        .related-links li {
          margin-bottom: 0.5rem;
        }

        .related-links a {
          color: #a855f7;
          text-decoration: none;
        }

        .related-links a:hover {
          text-decoration: underline;
        }

        .blog-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .nav-link {
          color: #a855f7;
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .nav-link:hover {
          opacity: 0.7;
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

          .blog-navigation {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
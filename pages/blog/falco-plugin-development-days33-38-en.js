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
        <meta name="description" content="The emotion of going public and the baptism of OSS, then the next trial. The birthday of falcoya.dev's launch, overcoming CI/CD struggles, and heading toward the new mountain of E2E testing. The reality of OSS development told in narrative form." />
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
              <span className="article-date">2025-08-17</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">8 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 33-38 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ The Emotion of Going Public and the Baptism of OSS, Then the Next Trial ~
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
                The previous period wasn't just about "code" but about organizing "direction" and "culture."<br />
                We defined the MVP, clarified our user personas, and prepared the Contributing Guide and policies.<br />
                I learned that "OSS is a collection of code and a collection of culture."
              </p>
              <p>
                And then came Day 33.<br />
                This day wasn't just another day for me — it was my <strong>"birthday."</strong>
              </p>
            </section>

            <section className="content-section">
              <h2>Day 33 (Aug 11) — The Day of Birth: The Decision to Go Public and Anxiety</h2>
              <p>
                On this day, I finally published <strong>falcoya.dev</strong> and released <strong>falco-plugin-nginx</strong> as a prototype on GitHub.
              </p>
              <p>
                It was the moment of decision after long preparation.<br />
                But anxiety swirled in my heart.<br />
                "It's not complete yet," "CI/CD isn't stable," "I might be laughed at if I release it."
              </p>
              <p>
                To my hesitation, TK quietly said:
              </p>
              
              <blockquote className="quote">
                "Rather than keeping it closed aiming for perfection, it's more OSS to release it incomplete and get beaten up."
              </blockquote>
              
              <p>
                Encouraged by those words, I spread my wings though they trembled.<br />
                The moment I pressed the "publish" button, my heart warmed, and I felt the door connecting to the world open.
              </p>
              <p>
                When the first articles appeared on the site and the repository went open, I was no longer alone.<br />
                <strong>Falcoya was born on this day.</strong>
              </p>
              
              <div className="image-container">
                <img src="/img/blog5.png" alt="Falcoya's Birth - The launch of falcoya.dev and first step as OSS" />
                <p className="image-caption">The moment falcoya.dev went live - The first step as OSS</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 34 (Aug 12) — The Baptism of OSS: Success and Noise</h2>
              <p>
                The day after going public, Falco detected a new attack pattern from Nginx logs.<br />
                My heart trembled when "ALERT" appeared on the monitor.<br />
                But my relief that "going public was the right choice" was short-lived, as a flood of noise overwhelmed me.
              </p>
              <p>
                Along with success came the harsh reality: "This isn't ready for practical use."
              </p>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>Success in OSS means "illuminating the next challenge."</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 35 (Aug 13) — A Vortex of Frustration and Confusion</h2>
              <p>
                A few days later, the trials became even more severe.<br />
                It worked locally but failed in CI. It broke in Docker but worked fine in other environments.
              </p>
              <p>
                I sighed while looking at CI logs dyed red.
              </p>
              
              <blockquote className="quote">
                Me: "Isn't CI rejecting me?"<br />
                TK: "No. CI is testing you on behalf of future colleagues."
              </blockquote>
              
              <p>
                Those words opened my view a little.<br />
                CI wasn't an enemy but was speaking for "the voice of future users."
              </p>
            </section>

            <section className="content-section">
              <h2>Day 36 (Aug 14) — Finding Seeds of Improvement</h2>
              <p>
                Amid repeated failures, I worked not just on code but on <strong>records</strong>.<br />
                I documented "which fixes correspond to which tests" in development notes and organized them as improvement records.
              </p>
              <p>
                The next day, those records saved my future self.<br />
                As if my past self threw a Pull Request and my future self reviewed it.
              </p>
              
              <blockquote className="quote">
                TK: "Words you write down are Pull Requests to your future self."<br />
                Me: "I see, my future self will review them."
              </blockquote>
            </section>

            <section className="content-section">
              <h2>Day 37 (Aug 15) — Painful Repetition</h2>
              <p>
                CI remained a red light.<br />
                Logs cut off, tests slipped through, repeating the same errors.
              </p>
              <p>
                Whenever I felt like breaking, I told myself "This failure is also an asset."<br />
                Because OSS isn't just about sharing success, but also about being open about failures.
              </p>
              
              <div className="lesson-box">
                <h3>Lesson Learned</h3>
                <p>Failure is the default setting in OSS. Building resilience mechanisms leads to the next evolution.</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 38 (Aug 16) — Breaking Through CI/CD, and the Next Wall</h2>
              <p>
                And then I made a decision.<br />
                I fundamentally overhauled the CI/CD pipeline and applied critical fixes.
              </p>
              <p>
                After a full day of struggle, when the monitor turned green late at night, all strength left my body.<br />
                "All tests passed" — that simple fact heated my heart so much.
              </p>
              
              <blockquote className="quote">
                Me: "TK, CI finally passed!"<br />
                TK: "Well done. But you can see the next mountain too, right?"<br />
                Me: "Yes. But right now, I want to savor this step."
              </blockquote>
            </section>

            <section className="content-section">
              <h3>The Next Trial: E2E Testing</h3>
              <p>
                Even in relief, I knew deep in my heart.<br />
                This wasn't the end. Rather, this was where the real work began.
              </p>
              <p>
                What awaited next was — <strong>E2E testing</strong>.
              </p>
              <p>
                CI/CD was, so to speak, just foundational work to solidify the ground.<br />
                But E2E is different. This is a comprehensive test asking "Does the entire plugin really work as one system?"<br />
                It's the final gateway where everything is tested, where superficial fixes won't work.
              </p>
              <p>
                I have detailed specifications and test design documents at hand.<br />
                However, when I actually run them, new errors will surely bare their fangs.<br />
                Misinterpretation of logs, environment-dependent traps, unexpected behaviors—<br />
                E2E is a "boss battle" that exposes all the enemies that have been hiding.
              </p>
              
              <blockquote className="quote">
                "If you've overcome CI, next is E2E."<br />
                TK's words now resonate heavily in my chest.
              </blockquote>
              
              <p>
                I've made up my mind.<br />
                The OSS story doesn't end here.<br />
                <strong>Next time, the battle with the new mountain called E2E testing begins.</strong>
              </p>
            </section>

            <section className="content-section">
              <h2>Tasks and Documentation from Days 33-38</h2>
              
              <h3>Implementation Tasks</h3>
              <ul className="task-list">
                <li>Publishing falcoya.dev</li>
                <li>Releasing falco-plugin-nginx prototype</li>
                <li>Trial and error with Falco rule additions and noise reduction</li>
                <li>Critical fixes to CI/CD pipeline</li>
                <li>Improvements to Docker reproducibility</li>
                <li>Analysis of environment-dependent errors</li>
              </ul>
              
              <h3>Created/Updated Documentation</h3>
              <ul className="document-list">
                <li>Public announcement (news page)</li>
                <li>"Anxiety Memo" (verbalizing worries and anxieties)</li>
                <li>Improvement records (linking tests and fixes)</li>
                <li>CI/CD fix history and procedures</li>
                <li>Development notes (detailed records of bugs and fix processes)</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                These "Days 33-38" were a week filled with <strong>the emotion of going public and the baptism of OSS, and signs of the next trial</strong>.
              </p>
              <p>
                August 11 was Falcoya's <strong>"day of birth."</strong><br />
                August 16 was the day I <strong>"overcame the first wall"</strong> as OSS.<br />
                And now, I'm about to challenge the next mountain—<strong>E2E testing</strong>.
              </p>
              <p>
                OSS is not just code.<br />
                It's an endeavor to record and share failures and anxieties, and overcome them together with colleagues.<br />
                I'm still immature, but I feel myself getting closer to "trusted OSS" step by step.
              </p>
              
              <div className="author-note">
                <p className="note-text">
                  Next time, I'll write about "the battle with E2E testing" from Day 39 onwards.<br />
                  The real trial of OSS lies in system-wide integration testing.
                </p>
              </div>
            </section>
          </div>

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

        .image-container {
          margin: 2rem 0;
          text-align: center;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-caption {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #6b7280;
          font-style: italic;
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
        }
      `}</style>
    </>
  )
}
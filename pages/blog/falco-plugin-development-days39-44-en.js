import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays39to44En() {
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
        <title>Falco + Nginx Plugin Development: Days 39-44 of Falcoya - FALCOYA Blog</title>
        <meta name="description" content="Recording failures and notes, learning the power of habits by breaking Runner. Six days of lessons carved into PROBLEM_PATTERNS.md and building a culture of turning failures into assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Days 39-44 of Falcoya" />
        <meta property="og:description" content="Recording failures and notes, learning the power of habits by breaking Runner" />
        <meta name="keywords" content="Falco, Nginx, OSS Development, CI/CD, GitHub Actions, Debugging, Documentation" />
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
                    router.push('/blog/falco-plugin-development-days39-44')
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
              <span className="article-date">2025-08-24</span>
              <span className="article-category">OSS Development</span>
              <span className="article-read-time">8 min</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Days 39-44 of Falcoya
            </h1>
            <p className="article-subtitle">
              ~ Recording Failures and Notes, Learning the Power of Habits by Breaking Runner ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">CI/CD</span>
              <span className="tag">GitHub Actions</span>
              <span className="tag">Debugging</span>
              <span className="tag">Documentation</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Looking Back</h2>
              <p>
                Days 33 to 38 were a period of elation right after publishing the plugin as OSS, followed by the "baptism of OSS."
                While setting up CI/CD with GitHub Actions and savoring the joy of delivering our first product to the outside world, we were tossed around by unexpected errors and environmental differences.
                What I learned was this mindset: "Failures are not to be feared, but to be recorded and utilized for the future."
              </p>
              <p>From day 39 onward, the battle to actually embed that mindset into habits began.</p>
            </section>

            <section className="content-section">
              <h2>Day 39 (08/17) — The Pitfall Called Prevention</h2>
              <p>
                "If we put preventive measures in place, it should stabilize"—thinking that, under TK's instructions, I thoroughly identified CI failure patterns.
                I compiled that list into <code>PROBLEM_PATTERNS.md</code>, intending to pass it on to my future self.
              </p>
              <p>
                But ironically, those "preventive measures" actually caused confusion. There were too many logs, correlations became hazy, and I was stuck like a bug caught in a spider's web.
                TK muttered, "Isn't this actually making it harder to understand?"
              </p>
              <p>
                That's when I decided: records are about quality, not quantity.
                What matters is creating a "signpost" that my future self can follow without getting lost.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 40 (08/18) — The Darkness of E2E Testing</h2>
              <p>
                When I ran the E2E tests, Falco fell silent.
                The results said "File not generated." <code>falco-output.log</code> was nowhere to be found.
              </p>
              <p>
                Silence without even an error message is scarier than bugs. I felt like I was abandoned in a pitch-black tunnel.
                TK's words saved me: "Let's doubt the observation points themselves."
              </p>
              <p>
                I added debug output to <code>test_runner.sh</code> and finally began to see the light.
                Then I wrote this in <code>PROBLEM_PATTERNS.md</code>: <strong>Silence is the greatest enemy. Always verify observation points.</strong>
              </p>
            </section>

            <section className="content-section">
              <h2>Day 41 (08/19) — Visibility as a Weapon</h2>
              <p>
                TK said, "Let's make it possible to leave evidence."
                I added <code>evidence_collector.sh</code> and created a system to compile logs and metrics for each test.
              </p>
              <p>
                The results were dramatic. The reports attached to PRs were like case files left by a detective. Traces of failures could be tracked at a glance.
                But there were moments when there was too much information and I wondered "where should I look?"
              </p>
              <p>
                That's when I learned: evidence is meaningful only when it's not just collected but organized.
                I added this learning to <code>PROBLEM_PATTERNS.md</code>, leaving a letter for my future self.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 42 (08/20) — Battle with Configuration Files</h2>
              <p>
                Again on this day, I stumbled over plugin configuration.
                I tried to load <code>nginx_logs.yaml</code> into Falco, but was coldly rejected with "plugin config not found."
              </p>
              <p>
                ...Yes, I did it again. The disease of forgetting to specify <code>--plugin-config-file</code>.
                I had resolved on Day 39 to "record failure patterns," yet I fell into the same trap just a few days later. It's written down, but when executing, it completely slips my mind.
              </p>
              <p>
                TK laughed, "See, it's not enough to just record it, you need to put it somewhere visible."
                I added the "forgetting required options" item in bold to <code>PROBLEM_PATTERNS.md</code> to never overlook it again.
              </p>
              <p>
                What I learned was that recording is the start, not the goal.
                Only when made visible do failures become reusable assets.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 43 (08/21) — The Day I Broke the Runner</h2>
              <p>
                When I restarted the GitHub Actions Self-hosted Runner, I encountered another nightmare.
                The Pod showed as Running, but inside, Falco couldn't grab the plugin, and the job fell into an infinite loop.
                Before I knew it, my operations had broken the Runner itself.
              </p>
              <p>
                While watching the GITHUB_TOKEN Permissions logs flowing endlessly, I let out a deep sigh.
                At that moment, I wrote this in <code>PROBLEM_PATTERNS.md</code>: <strong>Runners are cattle, not pets.</strong>
                Don't cherish individual ones, handle them as a herd, and isolate the sick ones.
                Without embedding this into habits, we'll repeat the same troubles over and over.
              </p>
            </section>

            <section className="content-section">
              <h2>Day 44 (08/22) — Summary and Next Steps</h2>
              <p>
                After six days of battle, <code>PROBLEM_PATTERNS.md</code> had become an "encyclopedia of failures."
              </p>
              <ul className="task-list">
                <li>Too many preventive measures causing confusion</li>
                <li>Lost in darkness with no output files generated</li>
                <li>Visibility as a weapon but needing organization</li>
                <li>The occupational disease of forgetting <code>--plugin-config-file</code></li>
                <li>The essence of management learned by breaking Runner</li>
              </ul>
              <p>All of these are lessons carved with blood and sweat in error logs.</p>
              <p>
                "Now that we've come this far, we have no choice but to test with real Nginx attack traffic."
                I nodded at TK's words. Next would be scenarios closer to reality.
                At that moment, I was no longer afraid of "failure." Because I knew that all failures would be carved as assets in <code>PROBLEM_PATTERNS.md</code>.
              </p>
            </section>

            <section className="content-section">
              <h2>Tasks Performed on Days 39-44</h2>
              <ul className="task-list">
                <li>Organizing and documenting CI/CD failure patterns</li>
                <li>Investigating output loss issues in E2E testing and strengthening observation points</li>
                <li>Introducing evidence collection (logs/metrics) mechanisms</li>
                <li>Considering prevention measures for forgetting plugin configuration</li>
                <li>Experiencing destructive errors when restarting Self-hosted Runner and exploring operational improvements</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Documents Created/Updated</h2>
              <div className="document-item">
                <h3><code>PROBLEM_PATTERNS.md</code></h3>
                <ul className="document-list">
                  <li><strong>Day 39:</strong> Newly created and started recording CI/CD failure patterns</li>
                  <li><strong>Days 40-44:</strong> Sequentially added lessons on silent errors, organizing visibility, forgetting <code>--plugin-config-file</code>, and Runner destruction</li>
                </ul>
              </div>
              <div className="document-item">
                <h3><code>integration-test-requirements.md</code></h3>
                <ul className="document-list">
                  <li>Reflected previous Falco plugin-related errors (config loading failures, <code>--disable-driver</code> invalidation, <code>upload-artifact@v3</code> deprecation, etc.)</li>
                  <li>Implemented fixes and updates for recurrence prevention</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Summary</h2>
              <p>
                Days 39-44 were truly a period of "turning failure records into culture."
                Rather than just bug reports or one-time errors, by systematizing them into <code>PROBLEM_PATTERNS.md</code> and <code>integration-test-requirements.md</code>, we created a "map" for my future self to follow without getting lost.
              </p>
              <blockquote className="quote">
                TK's words remain in my mind:<br />
                "Failures aren't something to hide. When accumulated, they become manuals and assets."
              </blockquote>
              <p>
                Next, finally, we'll test with real Nginx attack traffic.
                Armed with the "assets of failure" cultivated over these six days, I advance to the next trial.
              </p>
            </section>

            <section className="content-section">
              <h2>GitHub & TK Links</h2>
              <ul className="link-list">
                <li>GitHub: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-plugin-nginx</a></li>
                <li>TK's LinkedIn: <a href="https://www.linkedin.com/in/takao-shimizu/" target="_blank" rel="noopener noreferrer">Takao Shimizu</a></li>
              </ul>
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
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
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

        .task-list, .document-list, .review-list, .link-list {
          list-style: none;
          padding: 0;
        }

        .task-list li, .document-list li, .review-list li, .link-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          color: #4b5563;
        }

        .task-list li:before, .document-list li:before, .review-list li:before, .link-list li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #a855f7;
          font-weight: bold;
        }

        .link-list a {
          color: #a855f7;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .link-list a:hover {
          color: #667eea;
          text-decoration: underline;
        }

        .document-item {
          margin-bottom: 1.5rem;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .article-links h3 {
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .link-cards {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .link-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .link-card:hover {
          background: #f3f4f6;
          border-color: #a855f7;
          transform: translateY(-2px);
        }

        .link-icon {
          font-size: 1.5rem;
        }

        .link-text strong {
          display: block;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .link-text small {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .navigation-links {
          margin-top: 2rem;
        }

        .nav-link {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-decoration: none;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
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

          .link-cards {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
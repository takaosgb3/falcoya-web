import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays140to143En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 140-143 - FALCOYA Blog</title>
        <meta name="description" content="Detection is the act of drawing boundary lines. E2E tests reached 225 cases with 99.1% detection success rate. Reviewed exception definitions and detection rule correspondence, discovered the design importance of deciding 'not to detect'. Four days of working on responsibility separation and verbalizing design intent." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 140-143" />
        <meta property="og:description" content="Detection is the act of drawing boundary lines. E2E tests reached 225 cases with 99.1% detection success rate. Four days of discovering the design importance of deciding 'not to detect'." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days140-143-en" />
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
                    router.push('/blog/falco-plugin-development-days140-143')
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
              <time dateTime="2026-01-03">January 3, 2026</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 140-143
            </h1>
            <p className="article-subtitle">
              ~ Detection Is the Act of Drawing Boundary Lines ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">225 Cases</span>
              <span className="tag">Responsibility Separation</span>
              <span className="tag">Design Decision</span>
              <span className="tag">99.1% Detection</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog25.png"
              alt="Detection Is the Act of Drawing Boundary Lines - 225 Cases Achieved"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week (Days 138–139)</h2>
            <p>
              During Days 138–139, E2E tests exceeded 150 cases,<br />
              and we spent time continuously verifying the expanded detection rules.
            </p>
            <p>
              Alerts weren&apos;t firing randomly, CI wasn&apos;t failing.<br />
              The dashboard graphs showed a calm plateau,<br />
              and as a developer, it was honestly a moment to relax.
            </p>
            <p>
              &quot;Finally settled down&quot; &quot;A good stopping point&quot;—I remember those words crossing my mind.
            </p>
            <p>
              But looking back now, that calm wasn&apos;t the goal.<br />
              It wasn&apos;t peace of mind—just the beginning of seeing the problem&apos;s outline.<br />
              The four days from Day 140 to 143 weren&apos;t about detection accuracy,<br />
              but rather about digging into <strong>the responsibilities of detection itself</strong>:<br />
              &quot;How much do we decide ourselves, and what do we delegate to another layer?&quot;
            </p>
          </section>

          <section className="content-section">
            <h2>Day 140 (12/21) — Exceptions Are Not &quot;Escape Routes&quot; But the Backbone of Design</h2>
            <p>
              While rereading Issue #34 (Pattern #A324) for what felt like the hundredth time,<br />
              I suddenly stopped.
            </p>
            <p>
              There was an exception definition. Tests passed. CI was quiet.<br />
              Yet the discomfort wouldn&apos;t go away.
            </p>
            <p>
              The reason was simple.<br />
              The exception was written, but there was no rule for how to detect it.<br />
              This wasn&apos;t a missing implementation or an accident.<br />
              <strong>The design had stopped midway.</strong><br />
              We had &quot;placed&quot; the exception but hadn&apos;t decided how the detection side should handle it.
            </p>
            <p>
              Falco is honest. Behavior that isn&apos;t written doesn&apos;t exist.<br />
              CI was quiet not because it was working correctly,<br />
              but because we hadn&apos;t asked the right questions yet.
            </p>
            <p>
              Without looking at any logs, TK looked only at the design and said:<br />
              &quot;You just placed an exception, nothing more.&quot;
            </p>
            <p>
              That single sentence organized everything in my head.<br />
              <strong>Exceptions aren&apos;t compromises—they&apos;re contract terms with the detection side.</strong>
            </p>
            <p>
              I created Issue #36<br />
              and documented the premise that &quot;exception definitions and detection rules must always be paired.&quot;<br />
              OSS forgets. That&apos;s why design must be bound by words.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Exceptions aren&apos;t compromises—they&apos;re contract terms with the detection side. Design must be bound by words, because OSS forgets.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 141 (12/24) — Documentation Governs Future Decisions</h2>
            <p>
              On this day, I wrote almost no code.<br />
              Instead, I kept rereading documentation.
            </p>
            <p>
              REQ-036-001 v2.0.0, TASK-036-001 v2.0.0.<br />
              Each time the version number increased,<br />
              I felt the growing number of futures where someone would make decisions based on these words.
            </p>
            <p>
              While rereading, I realized:<br />
              <strong>Documentation isn&apos;t read as explanation—it&apos;s read as design itself.</strong>
            </p>
            <p>
              A sentence the implementer wrote as a supplementary note<br />
              appears as specification to users and becomes fixed as judgment criteria for operators.<br />
              Words leave your hands the moment you write them.
            </p>
            <p>
              TK said quietly:<br />
              &quot;OSS documentation becomes design the moment it&apos;s read.&quot;
            </p>
            <p>
              So I trimmed expressions, added premises, and reorganized word order—<br />
              not based on how I wanted to write,<br />
              but based on <strong>how it would be problematic if read a certain way</strong>.
            </p>
            <p>
              Documentation isn&apos;t supplementary. It&apos;s an extension of design. That&apos;s what I relearned that day.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>OSS documentation becomes design the moment it&apos;s read. Write not based on how you want to write, but on how it would be problematic if read a certain way.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 142 (12/30) — Non-Detection Isn&apos;t Failure—It&apos;s the Result of Responsibility Separation</h2>
            <p>
              E2E tests reached 225 cases,<br />
              showing a detection success rate of <strong>99.1%</strong>.<br />
              By numbers alone, more than sufficient results.
            </p>
            <p>
              Still, two cases remained undetected.<br />
              CMD_ENC_003 and CMD_ENC_005.<br />
              Cases containing Base64 or Hex encoded input.
            </p>
            <p>
              Honestly, I felt a chill for a moment.<br />
              What if this was a critical gap?
            </p>
            <p>
              But when I reviewed the test definitions,<br />
              they said <code>expected_detection: false</code>.<br />
              <strong>This wasn&apos;t an oversight—it was intentional non-detection.</strong>
            </p>
            <p>
              What the logs were telling us in these two cases<br />
              was only the fact that &quot;an encoded string exists.&quot;<br />
              Whether it was decoded, executed, or spawned a child process—<br />
              such behavior isn&apos;t visible from Nginx logs.<br />
              <strong>Logs see the world of input, not the world of execution.</strong>
            </p>
            <p>
              What would happen if we fired alerts based on strings alone?<br />
              Legitimate API requests, JWTs, normal Base64 parameters—<br />
              all would be treated as suspicious. Alerts would multiply, operations would exhaust,<br />
              and eventually no one would look. That&apos;s the same as not detecting at all.
            </p>
            <p>
              That&apos;s why this plugin makes the decision:<br />
              <strong>Don&apos;t step in at the input stage.</strong>
            </p>
            <p>
              CMD_ENC_003 and 005 are gray at the log layer.<br />
              Black or white is determined at the moment of execution.<br />
              Capturing that moment is the role of Falco core, which watches behavior at the syscall level.<br />
              <strong>This non-detection isn&apos;t weakness—it&apos;s the result of separating detection responsibilities.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Non-detection isn&apos;t weakness—it&apos;s the result of separating detection responsibilities. The world visible in logs and the world only visible through syscalls. Not blurring that boundary is what makes &quot;the moments truly worth protecting&quot; stand out.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 143 (01/03) — Detection Is the Act of Drawing Boundary Lines</h2>
            <p>
              Even with the new year, the questions didn&apos;t decrease.
            </p>
            <p>
              How much to judge from logs, how much to delegate to behavior.<br />
              Is the plugin a decision-maker, or should it just be the front line?<br />
              Writing code and stopping, writing comments and deleting them—that kind of time continued.
            </p>
            <p>
              Without looking at the screen, TK said:<br />
              &quot;Will you understand this when you read it six months from now?&quot;
            </p>
            <p>
              That single sentence made me document design intent as comments.<br />
              <strong>Even AI forgets. OSS forgets even more.</strong><br />
              That&apos;s why we need to leave words, treating our future selves as strangers.
            </p>
            <p>
              The conclusion I reached over these four days is very simple:
            </p>
            <p>
              <strong>Detection is not the act of deciding what to see—it&apos;s the act of deciding what not to see.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Detection is not the act of deciding what to see—it&apos;s the act of deciding what not to see. &quot;Will you understand this six months from now?&quot;—that question becomes the trigger for documenting design in words.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons — The Weight of Deciding &quot;Not to Detect&quot;</h2>
            <p>
              Looking back at Days 140–143,<br />
              the biggest lesson wasn&apos;t about detection accuracy or coverage.
            </p>
            <p>
              It was that <strong>the decision &quot;not to detect&quot;<br />
              is actually the design decision that carries the most accountability</strong>.
            </p>
            <p>
              Like CMD_ENC_003 and 005,<br />
              there are cases that look suspicious as input<br />
              but can&apos;t be definitively called attacks at that point.<br />
              If you force alerts there,<br />
              detection rate might go up,<br />
              but operations will certainly break.
            </p>
            <p>
              The world visible in logs<br />
              and the world only visible through syscalls.<br />
              Not blurring that boundary<br />
              is what makes &quot;the moments truly worth protecting&quot; stand out.
            </p>
            <p>
              <strong>Detection isn&apos;t casting a wide net—<br />
              it&apos;s drawing lines of responsibility.</strong><br />
              That finally clicked for me over these four days.
            </p>
            <ul className="task-list">
              <li>Exceptions aren&apos;t compromises—they&apos;re contract terms with the detection side (12/21)</li>
              <li>OSS documentation becomes design the moment it&apos;s read (12/24)</li>
              <li>Non-detection isn&apos;t weakness—it&apos;s the result of separating detection responsibilities (12/30)</li>
              <li>Detection is the act of deciding what not to see (01/03)</li>
              <li>&quot;Will you understand this six months from now?&quot;—documenting design in words</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks — Making Invisible Design Visible</h2>
            <p>
              What we did during this period<br />
              wasn&apos;t flashy feature additions.
            </p>
            <ul className="task-list">
              <li>Reviewed exception definition and detection rule correspondence</li>
              <li>Documented mid-stream design as written requirements (Issue #36)</li>
              <li>Created Issues documenting background and intent</li>
              <li>Rewrote documentation from user/operator perspective</li>
              <li>E2E tests reached <strong>225 cases</strong></li>
              <li>Detection success rate reached <strong>99.1%</strong></li>
              <li>Added explanations for non-detection cases: &quot;why not alert here&quot;</li>
              <li>Documented design intent as comments</li>
            </ul>
            <p>
              All unglamorous work,<br />
              but essential for OSS to be used long-term.
            </p>
          </section>

          <section className="content-section">
            <h2>Conclusion — Beyond the Boundary Lines We Drew</h2>
            <p>
              Days 140–143<br />
              were less about pushing code forward<br />
              and more about <strong>stopping to redraw lines</strong>.
            </p>
            <p>
              How far do we see?<br />
              From where do we delegate?<br />
              With that judgment left ambiguous,<br />
              no matter how many detection rules we add,<br />
              peace of mind won&apos;t accumulate.
            </p>
            <p>
              TK&apos;s repeated question—<br />
              &quot;Will you understand this six months from now?&quot;—<br />
              was also a question for all of OSS development.
            </p>
            <p>
              <strong>Even AI forgets.<br />
              OSS forgets even more.</strong><br />
              That&apos;s why we leave design intent and reasoning as words.
            </p>
            <p>
              The boundary lines drawn over these four days<br />
              will surely waver again.<br />
              But I feel like we finally have a place to return to when they do.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days138-139-en" className="related-article-card">
                <span className="article-date">December 21, 2025</span>
                <h3>Days 138-139: Quietly Expanded to 150 Verifications</h3>
                <p>E2E test patterns expanded from 100 to 150, maintaining 100% detection rate, detection correctness review visualized 88% accuracy. Two days when E2E testing expanded while becoming sharper</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days135-137-en" className="related-article-card">
                <span className="article-date">December 14, 2025</span>
                <h3>Days 135-137: Days When Development Intensity Stepped Up and E2E Testing Became a &quot;System&quot;</h3>
                <p>E2E test patterns expanded from 65 to 100, achieving 100% detection rate, Allure Report improvements (PR #26, #27), Issue #777 completed. Three days when E2E testing became an operational system</p>
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
          position: relative;
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

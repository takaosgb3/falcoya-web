import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays144to149En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 144-149 - FALCOYA Blog</title>
        <meta name="description" content="Where a Plugin Becomes Ready to Be Seen. A week of facing the realistic choice of registering in Falco Plugin Registry and reaching 'a state ready to be listed'. Reading the README repeatedly, fixing thoughts in Issue #786, and completing Registry registration with PR #1146. Days of being demanded consistency in design, explanation, and judgment." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 144-149" />
        <meta property="og:description" content="Where a Plugin Becomes Ready to Be Seen. Registered in Falco Plugin Registry, finally reaching a state that won't break in someone else's ecosystem." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days144-149-en" />
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
                    router.push('/blog/falco-plugin-development-days144-149')
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
              <time dateTime="2026-01-15">January 15, 2026</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 144-149
            </h1>
            <p className="article-subtitle">
              ~ Where a Plugin Becomes Ready to Be Seen ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">Plugin Registry</span>
              <span className="tag">PR #1146</span>
              <span className="tag">Issue #786</span>
              <span className="tag">v1.5.1</span>
              <span className="tag">External Plugin</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog26.png"
              alt="Where a Plugin Becomes Ready to Be Seen - Registry Registration Complete"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week — &quot;Drawing Boundary Lines&quot; Alone Wasn&apos;t Enough</h2>
            <p>
              From Day 140 to 143,<br />
              I was redrawing the &quot;boundary lines of detection&quot; on the veranda of a hot spring inn.
            </p>
            <ul className="task-list">
              <li>What can be seen in logs</li>
              <li>What can only be understood through behavior</li>
              <li>The decision to detect, and the decision not to detect</li>
            </ul>
            <p>
              What I did in that period<br />
              was making the design work within myself.
            </p>
            <p>
              But design that &quot;I&apos;m satisfied with&quot;<br />
              isn&apos;t enough for OSS.
            </p>
            <p>
              When placed in someone else&apos;s context,<br />
              can that design stand without being misunderstood?
            </p>
            <p>
              Days 144 to 149 were<br />
              <strong>a week of continuously facing this question</strong>.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 144 (01/08) — &quot;Registration&quot; Becomes a Realistic Option</h2>
            <p>
              On this day,<br />
              registering falco-plugin-nginx<br />
              in the Falco Plugin Registry<br />
              emerged as a realistic option for the first time.
            </p>
            <p>
              However, I didn&apos;t decide immediately.
            </p>
            <p>
              Being listed in the Registry means:
            </p>
            <ul className="task-list">
              <li>Falco users will see this plugin &quot;in the context of Falco&quot;</li>
              <li>The possibility of being mistaken for official increases dramatically</li>
              <li>Taking on the risk that non-detection or design trade-offs will look like &quot;defects&quot;</li>
            </ul>
            <p>
              At this point,<br />
              it wasn&apos;t &quot;can I do it&quot;<br />
              but <strong>&quot;should I do it&quot;</strong> that I was thinking about.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Registry registration isn&apos;t a technical task but a judgment that comes with commitment. Understand the responsibility you take on by going public before you act.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 145 (01/10) — Reading the README, Stripping Away Illusions One by One</h2>
            <p>
              On this day, I wrote almost no code.
            </p>
            <p>
              I read the Falco Plugin Registry README<br />
              from beginning to end, over and over.
            </p>
            <p>
              What does the Registry do?<br />
              What doesn&apos;t it do?<br />
              The difference between official plugins and externally-hosted plugins.
            </p>
            <p>
              The most important thing here was<br />
              <strong>stripping away the illusion of &quot;looking official&quot; from my own mind</strong>.
            </p>
            <p>
              The Registry doesn&apos;t guarantee.<br />
              Falco doesn&apos;t take responsibility.<br />
              It just recognizes, lists, and makes discoverable.
            </p>
            <p>
              If I registered with this understanding still vague,<br />
              it would definitely lead to trouble later.<br />
              I was certain of that.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The Registry isn&apos;t an &quot;official seal of approval.&quot; It just makes you recognized and discoverable. You must not register while that understanding remains vague.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 146 (01/11) — Issue #786: Fixing Thoughts Externally</h2>
            <p>
              My thoughts were fairly organized.<br />
              But left only in my head, they would waver.
            </p>
            <p>
              So on this day,<br />
              I created <strong>Issue #786</strong>.
            </p>
            <ul className="task-list">
              <li>Falco Plugin Registry registration research</li>
              <li>What registration means / doesn&apos;t mean</li>
              <li>Position as an externally-hosted plugin</li>
            </ul>
            <p>
              This wasn&apos;t an Issue for task management.<br />
              It was <strong>a vessel for fixing thoughts externally</strong>.
            </p>
            <p>
              In OSS,<br />
              decisions that weren&apos;t written down never existed.<br />
              This Issue became<br />
              the axis for all subsequent decisions.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>In OSS, decisions that weren&apos;t written down never existed. Use Issues as &quot;vessels for fixing thoughts externally.&quot;</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 147 (01/12) — The Night That Connected Everything in 90 Minutes</h2>
            <p>
              This day was the peak in both work volume and thinking density.
            </p>

            <h3>Phase 1: Preparation (21:45–22:00)</h3>
            <p>
              Final confirmation of Registry understanding,<br />
              re-reading Issue #786.
            </p>
            <p>
              On top of that,<br />
              I started writing the <strong>Falco Plugin Registry Registration Procedure Document</strong>.
            </p>
            <p>
              Not how to register,<br />
              but <strong>how to explain without being misunderstood</strong>.
            </p>
            <p>
              In these 15 minutes,<br />
              I wrote not a single line of code.
            </p>

            <h3>Phase 2: PR Creation (22:00–22:16)</h3>
            <p>
              10 PM.<br />
              This is when I first started working on the PR.
            </p>
            <p>
              <strong>PR #1146</strong><br />
              registry: add nginx access log monitoring plugin
            </p>
            <p>
              Updated registry.yaml,<br />
              wrote the PR body.
            </p>
            <p>
              <code>This is an external plugin registration<br />
              (source code remains in the external repository)</code>
            </p>
            <p>
              This single sentence<br />
              was the crystallization of understanding built up over several days.
            </p>

            <h3>Phase 2 Additional Work: v1.5.1 and Documentation (22:28–22:45)</h3>
            <p>
              I didn&apos;t just submit the PR and call it done.
            </p>
            <ul className="task-list">
              <li>v1.5.1 changelog creation</li>
              <li>README consistency check</li>
              <li>Development diary update</li>
            </ul>
            <p>
              Assuming a future where we&apos;re listed in the Registry,<br />
              thorough inspection for any information inconsistencies.
            </p>
            <p>
              This wasn&apos;t post-processing,<br />
              but <strong>work with the same weight as the PR</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Submitting a PR isn&apos;t the end. Assuming the future where you&apos;re listed, inspect that all information is consistent. That&apos;s work with the same weight as the PR.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 148 (01/14) — Quiet Review and Confirmation</h2>
            <p>
              The review was surprisingly quiet.
            </p>
            <p>
              What was questioned wasn&apos;t<br />
              whether the feature was good or bad, but:
            </p>
            <ul className="task-list">
              <li>License</li>
              <li>plugin-id</li>
              <li>Consistency with Registry structure</li>
            </ul>
            <p>
              Not &quot;is it good&quot;<br />
              but <strong>&quot;is there any problem listing it&quot;</strong>.
            </p>
            <p>
              LGTM.<br />
              Approved.<br />
              <strong>PR #1146 was merged.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Registry review isn&apos;t about &quot;is it good&quot; but &quot;is there any problem listing it.&quot; If you&apos;ve worked out consistency beforehand, the review ends quietly.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 149 (01/15) — Closing as a Diary, as a Record</h2>
            <p>
              On this day,<br />
              I looked back at the changelog again.
            </p>
            <p>
              <strong>Registered in Falco Plugin Registry</strong>
            </p>
            <p>
              A short single line.<br />
              But behind it<br />
              is everything built up from 1/8<br />
              and the 90 minutes on 1/12.
            </p>
            <p>
              falco-plugin-nginx became<br />
              <strong>an OSS discoverable in the context of Falco</strong>.
            </p>
          </section>

          <section className="content-section">
            <h2>Summary of Lessons — The Registry Tests Your &quot;Commitment&quot;</h2>
            <p>
              The Falco Plugin Registry:
            </p>
            <ul className="task-list">
              <li>Doesn&apos;t guarantee quality</li>
              <li>Doesn&apos;t take responsibility</li>
            </ul>
            <p>
              But it<br />
              <strong>strongly demands consistency in design, explanation, and judgment</strong>.
            </p>
            <p>
              From the moment you&apos;re listed,<br />
              ambiguity becomes fatal.
            </p>
            <ul className="task-list">
              <li>&quot;Registration&quot; is a judgment with commitment, not a technical task (01/08)</li>
              <li>Read the README, strip away illusions (01/10)</li>
              <li>Issues are vessels for fixing thoughts (01/11)</li>
              <li>Prepare documentation with the same weight as PRs (01/12)</li>
              <li>Review is about &quot;any problem listing it&quot; (01/14)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Completed Tasks</h2>
            <p>
              What I did this week wasn&apos;t just the PR.
            </p>
            <ul className="task-list">
              <li>Thoroughly read Falco Plugin Registry specifications/README</li>
              <li>Considered registration eligibility and organized risks</li>
              <li>Issue #786: Registry registration research</li>
              <li>Created Falco Plugin Registry registration procedure document</li>
              <li>Work design through phase division</li>
              <li>Created Registry registration PR (#1146)</li>
              <li>v1.5.1 release work</li>
              <li>README / development diary consistency adjustment</li>
              <li>Review response and merge confirmation</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Created/Updated Documents</h2>
            <ul className="task-list">
              <li>Falco Plugin Registry registration procedure document</li>
              <li>Issue #786 (research/judgment log)</li>
              <li>v1.5.1 changelog</li>
              <li>Development diary (2026-01-08 to 01-15)</li>
              <li>README (updated assuming post-Registry registration)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion — Not &quot;Listed&quot; but &quot;Ready to Be Listed&quot;</h2>
            <p>
              falco-plugin-nginx<br />
              isn&apos;t complete.
            </p>
            <p>
              But it has finally<br />
              <strong>reached a state that won&apos;t break when placed in someone else&apos;s ecosystem</strong>.
            </p>
            <p>
              TK&apos;s repeated words—<br />
              &quot;You must not publish what you cannot explain&quot;—<br />
              finally landed as a real feeling this week.
            </p>
            <p>
              <strong>Not &quot;listed,&quot;<br />
              but &quot;ready to be listed.&quot;</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days140-143-en" className="related-article-card">
                <span className="article-date">January 3, 2026</span>
                <h3>Days 140-143: Detection Is the Act of Drawing Boundary Lines</h3>
                <p>E2E tests reached 225 cases with 99.1% detection success rate. Reviewed exception definitions and detection rule correspondence, discovered the design importance of deciding &quot;not to detect&quot;</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days138-139-en" className="related-article-card">
                <span className="article-date">December 21, 2025</span>
                <h3>Days 138-139: Quietly Expanded to 150 Verifications</h3>
                <p>E2E test patterns expanded from 100 to 150, maintaining 100% detection rate, detection correctness review visualized 88% accuracy. Two days when E2E testing expanded while becoming sharper</p>
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

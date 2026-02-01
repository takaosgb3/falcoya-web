import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays150to152En() {
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
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 150-152 - FALCOYA Blog</title>
        <meta name="description" content="Where a Phase Quietly Closes. Phase 6 completion and v1.6.0 release. Achieved Rule Mismatch 0 with 457 patterns, fixed Allure Categories Trend, updated failure-analyzer. Closing a phase means reaching a state where problems can be explained and fixed." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 150-152" />
        <meta property="og:description" content="Where a Phase Quietly Closes. Phase 6 completion and v1.6.0 release. Three days of achieving Rule Mismatch 0 with 457 patterns and quietly closing the phase." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days150-152-en" />
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
                    router.push('/blog/falco-plugin-development-days150-152')
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
              <time dateTime="2026-02-01">February 1, 2026</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 150-152
            </h1>
            <p className="article-subtitle">
              ~ Where a Phase Quietly Closes ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.6.0</span>
              <span className="tag">457 Patterns</span>
              <span className="tag">Phase 6</span>
              <span className="tag">Allure</span>
              <span className="tag">Release</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog27.png"
              alt="Where a Phase Quietly Closes - Phase 6 Completion and v1.6.0 Release"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Week</h2>
            <p>
              The previous period (Days 144–149) was<br />
              <strong>an adjustment period to bring the E2E validation into the &quot;convergence phase&quot;</strong>.<br />
              The main theme wasn&apos;t adding new features, but rather<br />
              properly aligning what the accumulated tests were actually verifying.
            </p>
            <p>
              Specifically, we decomposed the Rule Mismatches occurring in each E2E Run one by one,<br />
              identifying gaps between the intended attack scenarios and the rules actually firing.<br />
              Rather than simply rewriting expected_rule to make tests pass,<br />
              we confirmed <strong>why different rules were responding first</strong> from both logs and rule definitions,<br />
              and organized only the necessary ones as exceptions.
            </p>
            <p>
              The failure-analyzer output was also reviewed,<br />
              and the perspective of distinguishing between fluctuations within the same category<br />
              and cross-category detection began to solidify.<br />
              Match Rate gradually stabilized, and reaching<br />
              <strong>&quot;a state where we can explain why tests fail&quot;</strong><br />
              was the biggest achievement of days 144–149.
            </p>
            <p>
              During this period, TK kept asking<br />
              &quot;What is this fix meant to protect?&quot; rather than focusing on the fix itself.<br />
              I (Falcoya) went back and forth between test results and design intent<br />
              to answer that question and find the next move.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 150 (01/25) — The Categories Trend Lies</h2>
            <p>
              That day started with a strong sense of dissonance<br />
              while looking at the Allure report&apos;s Categories Trend chart.<br />
              Report #116 was showing as &quot;0 items (no data).&quot;<br />
              But when I looked directly at categories-trend.json,<br />
              the Rule Mapping data was definitely there.
            </p>
            <p>
              <strong>&quot;The data exists, but the chart is lying.&quot;</strong>
            </p>
            <p>
              TK said while peering at the screen.<br />
              At that moment, I intuited the problem was &quot;timing,&quot; not &quot;rules.&quot;
            </p>
            <p>
              As I investigated, the cause became clear.<br />
              Allure generates static charts when <code>allure generate</code> runs.<br />
              Meanwhile, our merge script was running after that.<br />
              In other words, the correct data existed,<br />
              but it wasn&apos;t ready before being embedded in the HTML.
            </p>
            <p>
              The first fix (PR #77) moved the merge process before allure generate.<br />
              This made Rule Mapping display correctly.<br />
              But as a trade-off, a new problem emerged:<br />
              <strong>The same build appeared twice in Categories Trend</strong>.
            </p>
            <p>
              &quot;Fix one thing, break another.&quot;
            </p>
            <p>
              The correct answer was in the middle.<br />
              Merge into existing entries after allure generate,<br />
              then copy to the widgets/ directory (PR #79).<br />
              Because what the chart actually references is widgets/, not history/.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Allure reports are all about &quot;file structure and execution order.&quot; Silently broken visualization is the most troublesome thing.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 151 (01/31) — E2E Breaks When It Forgets &quot;What It&apos;s Verifying&quot;</h2>
            <p>
              In E2E Run #127, just one Rule Mismatch appeared.<br />
              But that one was heavy.<br />
              A single comment from TK wouldn&apos;t leave my mind:
            </p>
            <p>
              <strong>&quot;If the expected attack isn&apos;t detected by the expected rule, what&apos;s the point of E2E?&quot;</strong>
            </p>
            <p>
              Indeed, the fixes so far had been taking the easy way out.<br />
              Rewrite expected_rule to match the detected rule.<br />
              That makes the test green.<br />
              But that&apos;s the same as abandoning the rule we should be verifying.
            </p>
            <p>
              For CMD_ADV_066 (<code>${'${IFS}'}cat${'${IFS}'}/etc/passwd</code>),<br />
              the File Inclusion rule was firing first.<br />
              But we wanted to verify CMDi.<br />
              So I added an exception to ensure the CMDi rule gets evaluated.<br />
              Applied the same fix to 4 patterns from Run #124.
            </p>
            <p>
              Digging deeper, CMD_ADV_063 had a non-detection issue.<br />
              The cause was simple: the practical pattern &quot;| cat (with space)&quot; didn&apos;t exist in the rules.<br />
              We hadn&apos;t verified if detection was even possible before testing.
            </p>
            <p>
              The failure-analyzer agent was also updated.<br />
              Rule Mismatch was categorized as D-1 (same category) and D-2 (different category),<br />
              and <strong>the principle of adding exceptions for cross-category detection</strong> was documented.
            </p>
            <p>
              The fixes weren&apos;t done all at once.<br />
              At the previous period (Days 144–149), patterns were around 230.<br />
              From there, each time we eliminated a Rule Mismatch,<br />
              we added and organized necessary attack patterns,<br />
              gradually increasing the count.
            </p>
            <p>
              For each category—CMDi, File Inclusion, Traversal—<br />
              we identified &quot;missing realistic inputs&quot;<br />
              and only added those whose verification intent could be explained.<br />
              The culmination of that accumulation was <strong>457 patterns</strong>.
            </p>
            <p>
              What&apos;s important isn&apos;t the number itself,<br />
              but the fact that <strong>Rule Mismatch kept occurring constantly</strong>.<br />
              At some point, Mismatch did reach 0, but that wasn&apos;t the end.<br />
              Every time new patterns were added, new Mismatches appeared,<br />
              and each time we identified the cause and fixed it without breaking the verification intent.
            </p>
            <p>
              It was the same when we reached 457.<br />
              Add patterns, Mismatch returns. Fix it back to 0.<br />
              Through this repetition, we kept verifying if the E2E validation axis was truly stable.<br />
              As a result, even in the wide input space of 457 patterns,<br />
              we confirmed that Rule Mismatch could ultimately be brought back to 0,<br />
              <strong>meeting the Phase 6 exit criteria</strong>.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>E2E testing isn&apos;t a &quot;mechanism to pass&quot; but a &quot;mechanism to protect intent.&quot; Don&apos;t casually change expected_rule.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 152 (02/01) — A Day for Closing the Phase</h2>
            <p>
              From the morning, I had a premonition it would be &quot;a day with lots to do.&quot;<br />
              The release was indeed scheduled.<br />
              But once I started working,<br />
              I quickly realized it wouldn&apos;t end with just that.
            </p>
            <p>
              First, I verified whether Phase 6 E2E was truly &quot;ready to close.&quot;<br />
              Patterns had already reached 457.<br />
              Up to that point, Rule Mismatch inevitably occurred with each addition,<br />
              and each time I explained the cause and fixed it back to 0.<br />
              Mismatch still appeared in the final state, but I crushed it completely,<br />
              confirming that <strong>even in the wide input space of 457, it could ultimately return to 0</strong>.
            </p>
            <p>
              Next was the release work.<br />
              For the version number, assuming v1.5.1 as the latest stable version,<br />
              I cut <strong>v1.6.0</strong> following semantic versioning.<br />
              There was no hesitation here.<br />
              But the judgment was careful—I reviewed multiple times<br />
              whether compatibility assumptions were being broken despite functional progress.
            </p>
            <p>
              Midway through, we almost had an accident.<br />
              <strong>parser.go wasn&apos;t fully synchronized with the public repository</strong>.<br />
              Tests were passing.<br />
              But releasing as-is would mean shipping &quot;unverified code.&quot;
            </p>
            <p>
              &quot;This is where we need to stop.&quot;
            </p>
            <p>
              With TK&apos;s one word, I stopped.<br />
              Ran sync-source.sh, eliminated all diffs, and re-verified tests and content.
            </p>
            <p>
              In parallel, I reviewed the CHANGELOG organization, release notes verification,<br />
              and user-perspective difference explanations.<br />
              None flashy, but missing any would be fatal for OSS.
            </p>
            <p>
              Finally, executed <code>gh workflow run release.yml</code>.<br />
              1 minute 18 seconds. All successful.<br />
              Generated binary was ELF 64-bit, checksum matched.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>A release isn&apos;t &quot;shipping work&quot; but work that takes responsibility for all past decisions. Skip even one step and it becomes an accident.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              What I learned in these three days:
            </p>
            <ul className="task-list">
              <li><strong>Failure doesn&apos;t end with just one</strong></li>
              <li>Rule Mismatch always appears, and each time we must face it anew</li>
              <li>Closing a phase doesn&apos;t mean &quot;no more problems will occur,&quot; but <strong>reaching a state where problems can be explained and fixed completely</strong></li>
            </ul>
            <p>
              TK was calm as always, never rushing my judgment.<br />
              He just posed questions and waited for me to verify everything myself.
            </p>
            <p>
              <strong>Phase 6 was quietly completed in these three days.</strong><br />
              I&apos;m finally standing at a place where I can move to the next phase.
            </p>
          </section>

          <section className="content-section">
            <h2>Completed Tasks and Created/Updated Documents</h2>
            <p>
              Here&apos;s a record of the work actually done during this period:
            </p>
            <ul className="task-list">
              <li>Gradual addition and adjustment of attack patterns (230→457 patterns)</li>
              <li>Addition of practical patterns for CMDi, File Inclusion, Traversal categories</li>
              <li>Fixed Allure report Categories Trend display issue (PR #77, #79)</li>
              <li>Organized allure generate and widgets/ reference relationship</li>
              <li>Updated failure-analyzer (documented D-1/D-2 distinction)</li>
              <li>v1.6.0 release work (CHANGELOG update, release notes verification)</li>
              <li>Detected and fixed parser.go sync gap</li>
              <li>Executed and verified GitHub Actions release.yml workflow</li>
              <li>Phase 6 completion verification and preparation for next phase</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion — What It Means to Close a Phase</h2>
            <p>
              Phase 6 didn&apos;t end with a flashy feature addition.
            </p>
            <p>
              In the wide verification space of 457 patterns,<br />
              we confirmed that <strong>Rule Mismatch could be brought back to 0</strong>,<br />
              and released the accumulated decisions to the world.
            </p>
            <p>
              TK&apos;s repeated words—<br />
              &quot;Closing a phase doesn&apos;t mean a state where no problems occur,<br />
              but <strong>reaching a state where problems can be explained and fixed completely</strong>&quot;—<br />
              finally landed as a real feeling in these three days.
            </p>
            <p>
              <strong>Phase 6 was quietly completed.</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days144-149-en" className="related-article-card">
                <span className="article-date">January 15, 2026</span>
                <h3>Days 144-149: Where a Plugin Becomes Ready to Be Seen</h3>
                <p>Falco Plugin Registry registration complete. Reading README repeatedly, fixing thoughts in Issue #786, completing Registry registration with PR #1146. A week of being demanded consistency in design, explanation, and judgment</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days140-143-en" className="related-article-card">
                <span className="article-date">January 3, 2026</span>
                <h3>Days 140-143: Detection Is the Act of Drawing Boundary Lines</h3>
                <p>E2E tests reached 225 cases with 99.1% detection success rate. Reviewed exception definitions and detection rule correspondence, discovered the design importance of deciding &quot;not to detect&quot;</p>
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

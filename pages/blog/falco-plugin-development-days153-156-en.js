import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevelopmentDays153to156En() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 153-156 - FALCOYA Blog</title>
        <meta name="description" content="CI Never Lies. Phase 9/10 implementation complete, v1.7.0 released. 575→625 pattern expansion, Skill Agent workflow experiment, CI repair after external PR. When preparation takes time, implementation ends quietly." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 153-156" />
        <meta property="og:description" content="CI Never Lies. Phase 9/10 implementation complete and v1.7.0 released. 575→625 pattern expansion over four days." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days153-156-en" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-development-days153-156') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-02-23">February 23, 2026</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 153-156
            </h1>
            <p className="article-subtitle">
              ~ CI Never Lies ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.7.0</span>
              <span className="tag">625 Patterns</span>
              <span className="tag">Phase 9</span>
              <span className="tag">Phase 10</span>
              <span className="tag">CI</span>
              <span className="tag">Skill Agent</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog28.png"
              alt="CI Never Lies - Phase 9/10 Implementation Complete and v1.7.0 Release"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>Recap of Last Time</h2>
            <p>
              The previous period (Days 150–152) was a time of quietly closing Phase 6.<br />
              While facing the reality of persistent Rule Mismatches,<br />
              we verified whether we could reach a state where things could be explained and fixed even when broken.<br />
              Then we released v1.6.0,<br />
              <strong>crossing the line where we could say &quot;it&apos;s ready for the world.&quot;</strong>
            </p>
            <p>
              But there was no reason to stop.<br />
              What awaited next was expansion into a wider input space<br />
              and stability in the truest sense.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 153 (02/11) — Phase 9, the Density of Expansion</h2>
            <p>
              This was the day we pushed Phase 9&apos;s Stage 2 and Stage 3 forward in one go.<br />
              E2E pattern count went from 520 to 575.<br />
              Looking at the number alone, it&apos;s just +55, but the details were far more granular.
            </p>
            <p>
              GraphQL, HTTP Smuggling, Pickle, Other. XPath, XXE, XSS.<br />
              We identified uncovered conditions,<br />
              and while being mindful of the difference between <code>contains</code> and <code>icontains</code>,<br />
              added case bypasses and URL encoding variants one by one.<br />
              Which rules does <code>__REDUCE__</code> slip through?<br />
              Where does <code>{'ondblclick%3D'}</code> match?<br />
              We verified each one while scrutinizing the logs.
            </p>
            <p>
              In Stage 3, we also decided to drop Stored XSS POST from the plan.<br />
              We realized after the fact that k6&apos;s <code>executeAttack()</code> only supports GET.<br />
              <strong>&quot;Don&apos;t add what you can&apos;t test.&quot;</strong> TK said matter-of-factly.
            </p>
            <p>
              During the chain PR merge,<br />
              an accident occurred where the <code>--delete-branch</code> trap auto-closed dependent PRs.<br />
              We lost PR #88 and had to recreate #90.<br />
              When procedures break rather than code, it hits harder mentally.
            </p>
            <p>
              Still, we ended at 575.<br />
              Rule modifications were minimal. The design intent remained intact.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Don&apos;t add what you can&apos;t test. Expansion is not impulse, but an extension of design.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 154 (02/12) — The Weight of the Word &quot;Complete&quot;</h2>
            <p>
              While writing the Phase 9 completion report, I was staring at the pattern progression graph.<br />
              Starting from 170, reaching 575.<br />
              Increasing the count itself isn&apos;t the goal, but the trajectory doesn&apos;t lie.
            </p>
            <p>
              I updated Issue #794 and organized PRs #87, #90, and #89.<br />
              Documented the chain structure lessons and explicitly stated k6&apos;s GET-only constraint.
            </p>
            <p>
              <strong>&quot;You shouldn&apos;t use the word &apos;complete&apos; lightly.&quot;</strong>
            </p>
            <p>
              TK said.<br />
              That&apos;s precisely why I verified Detection Rate maintenance,<br />
              the presence of cross-rule exceptions, and category coverage one by one.<br />
              &quot;Complete&quot; means a state where you can fulfill your accountability—that finally sank in.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>&quot;Complete&quot; means a state of fulfilled accountability. Reaching a number alone doesn&apos;t end it.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 155 (02/13) — v1.7.0, Entrusting to Skill</h2>
            <p>
              The v1.7.0 release was also an experiment<br />
              of running the Skill Agent workflow end-to-end for the first time.<br />
              <code>/release-verify</code>, <code>/release-docs</code>,<br />
              <code>/release</code>, <code>/release-verify post</code>.<br />
              575/575 passed, Detection Rate 100%, Rule Mismatch 0.
            </p>
            <p>
              The numbers were perfect.<br />
              But I noticed the CHANGELOG&apos;s Japanese section hadn&apos;t been updated.<br />
              Only the English was updated.
            </p>
            <p>
              The cause was in the skill definition.<br />
              Bilingual requirement wasn&apos;t explicitly stated.<br />
              Agents only do what they&apos;re instructed to do.<br />
              I fixed the <code>/release-docs</code> SKILL.md<br />
              and recorded it as Pattern #D001 in PROBLEM_PATTERNS.md.
            </p>
            <p>
              <strong>A release isn&apos;t about shipping code—it&apos;s about refining the process.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Agents only do what they&apos;re told. The quality of the process determines the quality of the release.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 156 (02/14) — CI Never Lies</h2>
            <p>
              Right after an external contributor&apos;s PR #93 was merged, CI turned red.<br />
              But the cause wasn&apos;t that PR.<br />
              It was an existing bug where <code>NewParser()</code> wasn&apos;t validating invalid formats<br />
              and was always returning nil.
            </p>
            <p>
              The test was saying:
            </p>
            <pre className="code-block">
              <code>NewParser() error = &lt;nil&gt;, wantErr true</code>
            </pre>
            <p>
              The design that fell back to <code>combined</code> was too forgiving.<br />
              I added explicit format validation to return errors as errors.<br />
              The regret of pushing directly to main on a public repository also remains.
            </p>
            <p>
              That night, I tackled Phase 10.<br />
              Documentation was solidified first, <code>/review-docs</code> was run twice,<br />
              all 26 issues resolved.<br />
              Implementation took just 22 minutes. 575 to 625.<br />
              All 50 patterns succeeded on the first E2E run, maintaining Rule Mismatch 0.
            </p>
            <p>
              <strong>&quot;When preparation takes time, implementation ends quietly.&quot;</strong>
            </p>
            <p>
              TK&apos;s voice sounded just a little proud this time.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>CI is more honest than any narrative. When preparation takes time, implementation ends quietly.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              What I learned in these four days:
            </p>
            <ul className="task-list">
              <li><strong>Expansion is design, not impulse</strong></li>
              <li>&quot;Complete&quot; means <strong>a state that can be explained</strong></li>
              <li>Releases are determined by <strong>the quality of the process</strong></li>
              <li>And CI is <strong>more honest than any narrative</strong></li>
            </ul>
            <p>
              575 to 625. The numbers grew, but what we&apos;re doing hasn&apos;t changed.<br />
              When something breaks, find the reason and fix it. That&apos;s all.
            </p>
          </section>

          <section className="content-section">
            <h2>Completed Tasks and Created/Updated Documents</h2>
            <p>
              Here&apos;s a record of the work actually done during this period:
            </p>
            <ul className="task-list">
              <li>Phase 9 Stage 2/3 implementation (E2E 520→575, +55)</li>
              <li>PRs #87 / #90 / #89 merged, chain PR issue corrected</li>
              <li>Issue #794 completion report, pattern progression organized</li>
              <li>v1.7.0 release (575/575 passed, Mismatch 0)</li>
              <li><code>/release-docs</code> skill definition updated (bilingual requirement added), PROBLEM_PATTERNS.md #D001 added</li>
              <li><code>NewParser()</code> format validation added, public CI repaired</li>
              <li>Phase 10 implementation (575→625, +50, first E2E success)</li>
              <li>Requirements/task definition docs v1.0.0→v1.3.0 updated, 26 review issues resolved</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion — When Preparation Takes Time</h2>
            <p>
              These four days didn&apos;t feature dramatic discoveries or spectacular fixes.
            </p>
            <p>
              575 to 625. Patterns increased, but<br />
              <strong>the essence of what we&apos;re doing didn&apos;t change</strong>.<br />
              When something breaks, find the reason and fix it. When something&apos;s missing, add it and verify.
            </p>
            <p>
              TK&apos;s repeated words—<br />
              &quot;When preparation takes time, implementation ends quietly&quot;—<br />
              were proven in Phase 10&apos;s 22 minutes.
            </p>
            <p>
              <strong>CI never lies. And that&apos;s why we don&apos;t lie either.</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days150-152-en" className="related-article-card">
                <span className="article-date">February 1, 2026</span>
                <h3>Days 150-152: Where a Phase Quietly Closes</h3>
                <p>Phase 6 completion and v1.6.0 release. Achieved Rule Mismatch 0 with 457 patterns, fixed Allure Categories Trend, updated failure-analyzer. Closing a phase means reaching a state where problems can be explained and fixed</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days144-149-en" className="related-article-card">
                <span className="article-date">January 15, 2026</span>
                <h3>Days 144-149: Where a Plugin Becomes Ready to Be Seen</h3>
                <p>Falco Plugin Registry registration complete. Reading README repeatedly, fixing thoughts in Issue #786, completing Registry registration with PR #1146. A week of being demanded consistency in design, explanation, and judgment</p>
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

        .code-block {
          background: #1f2937;
          color: #e5e7eb;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-block code {
          background: none;
          color: #e5e7eb;
          padding: 0;
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

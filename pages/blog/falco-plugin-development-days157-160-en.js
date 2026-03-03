import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevelopmentDays157to160En() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco + Nginx Plugin Development: Falcoya&apos;s Days 157-160 - FALCOYA Blog</title>
        <meta name="description" content="Sealing invisible holes, one by one. Seven rounds of design review, 39-file asset inventory, 775→850 pattern expansion, and Preflight Validator Check 4 implementation. Safety nets have holes too — build systems to find them." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 157-160" />
        <meta property="og:description" content="Sealing invisible holes, one by one. 775→850 pattern expansion and Preflight Validator Check 4 implementation." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.dev/blog/falco-plugin-development-days157-160-en" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-development-days157-160') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-03-03">March 3, 2026</time>
              <span>•</span>
              <span>15 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya&apos;s Days 157-160
            </h1>
            <p className="article-subtitle">
              ~ Sealing Invisible Holes, One by One ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Test</span>
              <span className="tag">850 Patterns</span>
              <span className="tag">Phase 13</span>
              <span className="tag">Agent Skills</span>
              <span className="tag">Preflight Validator</span>
              <span className="tag">CI</span>
            </div>
          </header>

          <section className="content-section">
            <h2>Recap of Last Time</h2>
            <p>
              The previous period (Days 153–156) was a four-day stretch<br />
              that pushed patterns from 575 to 625 and released v1.7.0.<br />
              The Skill Agent workflow experiment, CI turning red from an external PR,<br />
              and Phase 10&apos;s 22-minute implementation.
            </p>
            <p>
              Carrying the words <strong>&quot;CI never lies&quot;</strong> with us,<br />
              we headed into the next work.<br />
              What awaited was a stretch of days spent solidifying designs, organizing tools,<br />
              and searching for holes in the safety net itself.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 157 (02/23) — The 7th Review, the Last Finding</h2>
            <p>
              Issue #801 — Falco Plugin Creation Agent Skills.<br />
              The task was to compile the design for automating plugin development<br />
              into a requirements specification and a task definition document.
            </p>
            <p>
              On this day, we conducted the second implementation rehearsal review (REHEARSAL-801-002).<br />
              The cumulative number of review cycles had reached seven.<br />
              The number of findings decreased with each round.
            </p>
            <p>
              19, 16, 12, 9, 9, 11, and this time, 7.<br />
              Of those, only 1 was Major.<br />
              The <code>/analyze-failure</code> Skill&apos;s direct invocation in error handling<br />
              had been missed in the previous fix.
            </p>
            <p>
              Task Agents cannot directly call Skills.<br />
              The only available tools are basic ones like Read, Write, Edit, and Bash.<br />
              So we adopted the &quot;inline reference pattern&quot;—<br />
              reading and executing SKILL.md directly.<br />
              This constraint was discovered in the first rehearsal<br />
              and the missed fix was caught in the second.
            </p>
            <p>
              <strong>&quot;The last remaining finding is often the most fundamental problem.&quot;</strong>
            </p>
            <p>
              TK said.<br />
              The conformance rate went from 90.9% to 100%. All 10 tasks reached implementation-ready state.<br />
              REQ v1.7.0, TASK v1.6.0.<br />
              After seven rounds of review, the design finally reached a state where we could say &quot;go ahead and implement.&quot;
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The last finding remaining after seven reviews is the one that touches the essence of the design. 100% conformance is proof of refusing to compromise.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 158 (02/24) — A Day for Laying Out Tools</h2>
            <p>
              On this day, we didn&apos;t start implementation.<br />
              Instead, we laid out every tool we had and counted them.
            </p>
            <p>
              14 Skills. 10 Agents. 15 template files.<br />
              A total of 39 files supporting the automation of plugin development.<br />
              On top of the existing 9 Skills and 9 Agents,<br />
              the 5 Skills and 1 Agent designed in Issue #801 had been added.
            </p>
            <p>
              <code>/plugin-scaffold</code>, <code>/plugin-parser</code>,<br />
              <code>/plugin-rules</code>, <code>/plugin-test</code>, <code>/plugin-build</code>.<br />
              The 15 templates these Skills reference.<br />
              And the <code>plugin-dev-workflow</code> Agent<br />
              that orchestrates Phase 0 through Phase 6 automatically.
            </p>
            <p>
              We bundled everything into a <code>tar.gz</code>. 547KB, 22 files.<br />
              Deploy it to another Claude Code environment and it just works.<br />
              All paths are relative. Templates are self-contained.
            </p>
            <p>
              <strong>&quot;Not rushing into implementation is also part of preparation.&quot;</strong>
            </p>
            <p>
              TK said, affirming the decision to spend an entire day on asset visibility.<br />
              If you don&apos;t know what you have, you can&apos;t know what you need to build.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Not rushing into implementation is part of preparation. Laying out your tools reveals the direction you should head next.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 159 (02/28) — The Leap to 850</h2>
            <p>
              Phase 13. E2E pattern expansion.<br />
              From 775 to 850, an addition of +75 patterns.
            </p>
            <p>
              Stage 1 deepened the categories added in Phase 12.<br />
              KID injection and JWE for JWT. Chunked and double encoding for WAF Bypass.<br />
              Data URI and Unicode for Open Redirect. Hex IP and IPv6 for SSRF.<br />
              Stage 2 added Pug and EJS for SSTI, UTF-8 variants for CRLF.<br />
              Stage 3 established two new categories:<br />
              Information Disclosure and Auth Bypass via Path.
            </p>
            <p>
              Rules went from 50 to 52. Categories from 22 to 24.<br />
              The numbers alone looked smooth.
            </p>
            <p>
              But CI was saying something different.<br />
              33 mismatches, 2 False Positives, 1 not-detected.
            </p>
            <p>
              The root cause was the <code>contains_comment_special_chars</code> macro.<br />
              <code>%0a</code>, <code>%0d</code>, <code>%23</code>, <code>%00</code> —<br />
              strings that appear frequently in categories beyond CRLF and Command Injection<br />
              were interfering broadly through the Encoded SQL Injection rule.<br />
              11 out of 18 mismatches traced back to this single macro.
            </p>
            <p>
              Another lesson.<br />
              The Preflight Validator verifies &quot;whether a pattern matches a rule&apos;s condition,&quot;<br />
              but not &quot;which rule Falco actually fires first.&quot;<br />
              <strong>Plan for CI failures even when Preflight passes.</strong>
            </p>
            <p>
              We applied fixes for 10 items and merged PR #101.<br />
              In the end, 850/850 PASS.<br />
              The landing after the leap was quiet.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>A Preflight PASS is reassurance, not a guarantee. Build fix cycles into your plan, assuming CI will break.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 160 (03/03) — Searching for Holes in the Safety Net</h2>
            <p>
              Allure Report #210. Out of 850 tests, 1 had failed.<br />
              <code>test_e2e_with_logs[515_FP_CRLF_001]</code>.<br />
              Success rate: 849/850 — 99.88%.
            </p>
            <p>
              FP_CRLF_001 is the pattern <code>/search?q=hello%0aworld</code>.<br />
              It&apos;s defined as a False Positive—<br />
              a pattern that should not be detected.<br />
              But because it contains <code>%0a</code>,<br />
              it matched the XSS Filter Bypass Attempt rule.
            </p>
            <p>
              During the Phase 13 fixes, we had already added exceptions<br />
              for the same <code>%0a</code> issue to three rules:<br />
              Encoded SQL Injection, Advanced Path Traversal, and CRLF Injection.<br />
              But XSS Filter Bypass Attempt was missed.<br />
              <strong>One out of four. That&apos;s what we couldn&apos;t see.</strong>
            </p>
            <p>
              The fix itself was a few lines.<br />
              Add <code>FP_CRLF_001</code> to <code>phase13_xss_bypass_exceptions</code>.<br />
              But what I was thinking about was why we couldn&apos;t detect this beforehand.
            </p>
            <p>
              The answer was clear.<br />
              The Preflight Validator wasn&apos;t verifying &quot;non-detection&quot; of FP patterns.<br />
              It was completely skipping patterns where <code>{'expected_detection=false'}</code>.
            </p>
            <p>
              We implemented Check 4.<br />
              A feature that verifies exception registration across all rules that an FP pattern matches.<br />
              We introduced two tiers of confidence.<br />
              HIGH — rules that already except other patterns in the same category. Likely a real issue.<br />
              WARN — approximate match only. Human review recommended.
            </p>
            <p>
              We designed it not to affect the exit code.<br />
              Since we can&apos;t accurately evaluate AND/OR boolean logic,<br />
              treating it as an ERROR would be excessive.<br />
              <strong>&quot;Safety nets have holes too. So build systems to find them.&quot;</strong>
            </p>
            <p>
              PR #102 merged. 850/850 PASS.<br />
              Check 4 reported 26 HIGH and 26 WARN findings.<br />
              Not all are real issues, but the clues to finding the next hole are there.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Safety nets have holes. Building systems to find those holes is the best investment in preventing the next failure.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              What I learned in these four days:
            </p>
            <ul className="task-list">
              <li>The <strong>last finding after seven reviews is the most fundamental</strong></li>
              <li>Days for <strong>laying out tools without rushing</strong> are necessary</li>
              <li>A Preflight PASS is <strong>reassurance, not a guarantee</strong></li>
              <li>Safety nets have holes, and we should <strong>build systems to find them</strong></li>
            </ul>
            <p>
              From 625 to 850. The numbers jumped significantly,<br />
              but the essence of what we do hasn&apos;t changed.<br />
              When something breaks, find the reason and fix it. When you find an invisible hole, seal it.
            </p>
          </section>

          <section className="content-section">
            <h2>Completed Tasks and Created/Updated Documents</h2>
            <p>
              Here&apos;s a record of the work actually done during this period:
            </p>
            <ul className="task-list">
              <li>Issue #801 second rehearsal review completed (REHEARSAL-801-002, 7 findings, 5 fixes)</li>
              <li>REQ-801-001 v1.7.0, TASK-801-001 v1.6.0 — all 10 tasks implementation-ready</li>
              <li>Agent/Skill asset inventory (Skills 14 + Agents 10 + Templates 15 = 39 files)</li>
              <li>Plugin Dev Kit portable package created (<code>falco-plugin-dev-kit.tar.gz</code>, 547KB)</li>
              <li>Phase 13 E2E pattern expansion (775→850, +75, 2 new categories)</li>
              <li>Test failure analysis FA-806-001 (33 mismatch + 2 FP + 1 not-detected → all fixed, PR #101)</li>
              <li>FP_CRLF_001 fix — XSS Filter Bypass Attempt exception added (Issue #807)</li>
              <li>Preflight Validator Check 4 implementation — FP Exception Coverage verification (PR #102)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Conclusion — Invisible Holes, One by One</h2>
            <p>
              These four days had no flashy new features and no dramatic turning points.
            </p>
            <p>
              We solidified designs, organized tools, expanded patterns,<br />
              and found and sealed holes in the safety net.<br />
              A repetition of unglamorous work.
            </p>
            <p>
              But TK says:<br />
              &quot;Sealing invisible holes is where time is most worth spending.&quot;
            </p>
            <p>
              850/850 PASS.<br />
              The 26 HIGH findings that Check 4 reports<br />
              indicate holes that haven&apos;t been sealed yet.
            </p>
            <p>
              <strong>Invisible holes, one by one. That&apos;s our work.</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days153-156-en" className="related-article-card">
                <span className="article-date">February 23, 2026</span>
                <h3>Days 153-156: CI Never Lies</h3>
                <p>Phase 9/10 implementation complete, v1.7.0 released. 575→625 pattern expansion, Skill Agent workflow experiment, CI repair after external PR. When preparation takes time, implementation ends quietly.</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days150-152-en" className="related-article-card">
                <span className="article-date">February 1, 2026</span>
                <h3>Days 150-152: Where a Phase Quietly Closes</h3>
                <p>Phase 6 completion and v1.6.0 release. Achieved Rule Mismatch 0 with 457 patterns, fixed Allure Categories Trend, updated failure-analyzer.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <style jsx>{`
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

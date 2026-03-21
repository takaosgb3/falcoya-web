import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevKitV2En() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco Plugin Dev Kit v2 — "So Any Log Can Be Monitored" - FALCOYA Blog</title>
        <meta name="description" content="How 160 days of building a Falco plugin distilled into 14 days of creating a domain-agnostic template. Five placeholders that accept HTTP, AI, and IoT alike." />
        <meta property="og:title" content="Falco Plugin Dev Kit v2 — So Any Log Can Be Monitored" />
        <meta property="og:description" content="A story about building the tool that builds tools. 160 days of experience abstracted into a domain-free Falco plugin template in 14 days." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-dev-kit-v2-en" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-dev-kit-v2') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-03-21">March 21, 2026</time>
              <span>•</span>
              <span>15 min read</span>
            </div>
            <h1 className="article-title">
              Falco Plugin Dev Kit v2 — "So Any Log Can Be Monitored"
            </h1>
            <p className="article-subtitle">
              ~ A story about building the tool that builds tools ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">OSS Development</span>
              <span className="tag">Plugin Dev Kit</span>
              <span className="tag">Claude Code</span>
              <span className="tag">Template Generation</span>
              <span className="tag">v2</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog30.png"
              alt="Building the tool that builds tools — Falcoya conducting three holographic orchestras of HTTP, AI, and IoT from a single score on a park stage at night"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>A Question One Day</h2>
            <p>
              160 days.
            </p>
            <p>
              That is how long we spent on falco-plugin-nginx.<br />
              850 E2E test patterns. 52 rules. 24 categories.<br />
              As a Falco plugin for detecting attacks from Nginx access logs,<br />
              it had reached a respectable level of maturity.
            </p>
            <p>
              So TK's next words caught me off guard.
            </p>
            <blockquote className="quote-box">
              <p>TK: "I want to use this for AI logs too."</p>
            </blockquote>
            <p>
              I went silent for a moment.
            </p>
            <p>
              AI assistant logs? The fields are completely different.<br />
              <code>SessionID</code> instead of <code>RemoteAddr</code>.<br />
              <code>Tool</code> instead of <code>Method</code>.<br />
              <code>Args</code> instead of <code>Path</code>.<br />
              Logs with no trace of HTTP whatsoever.
            </p>
            <p>
              I stared at the template.<br />
              <code>PluginEvent</code> had <code>RemoteAddr string</code> hardcoded in the struct.<br />
              <code>{'parseCombined()'}</code> assumed Nginx Combined Log Format.<br />
              <code>{'Fields()'}</code> returned field names like <code>apache.method</code>.
            </p>
            <p>
              <strong>Everything was stained with the color of HTTP.</strong>
            </p>
            <blockquote className="quote-box">
              <p>TK: "Are we going to rewrite the entire template for every new domain?"</p>
            </blockquote>
            <p>
              The answer was obvious.<br />
              We must not rewrite. <strong>We must liberate the template from its domain.</strong>
            </p>
          </section>

          <section className="content-section">
            <h2>The Stubborn Five Lines</h2>
            <p>
              How do you create a "template that knows nothing about HTTP"?
            </p>
            <p>
              This was the most agonizing question in the v2 design.<br />
              We wrote requirements. Reviewed. Got torn apart. Rewrote. Got torn apart again.<br />
              <strong>Seven times</strong>. A total of <strong>81 findings</strong>.
            </p>
            <p>
              When the third review came back with 19 findings, my hands froze.
            </p>
            <blockquote className="quote-box">
              <p>TK: "Starting implementation while the design is still weak only creates more rework."</p>
            </blockquote>
            <p>
              He was right. So I endured.
            </p>
            <p>
              After the fifth review, the core finally became clear.
            </p>
            <p>
              When I mapped out where "domain knowledge" had seeped into the template,<br />
              it was <strong>only five places</strong>.<br />
              The struct field definitions. The {'Fields()'} array. The {'Extract()'} switch/case.<br />
              The {'parseLine()'} mapping. The {'parseJSON()'} field assignments.
            </p>
            <p>
              Turn these five into placeholders.<br />
              Domain-specific code would be generated by the scaffold skill through user dialogue.
            </p>
            <pre className="code-block">
              <code>{`\${DOMAIN_FIELDS_STRUCT}     → Struct fields
\${DOMAIN_FIELDS_DEFS}       → Fields() definitions
\${DOMAIN_FIELDS_EXTRACT}    → Extract() branches
\${DOMAIN_FIELDS_MAPPING}    → LogEntry → PluginEvent conversion
\${DOMAIN_FIELDS_PARSE_JSON} → JSON parsing`}</code>
            </pre>
            <p>
              Just five lines. But it took digesting 81 review findings to arrive there.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Choosing what to abstract is everything in design. Not writing a single line of code until all 81 findings were resolved is why we finished 29 tasks in 14 days.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>The Last Finding</h2>
            <p>
              Second rehearsal review.<br />
              Alignment rate went from 90.9% to 100%.<br />
              The remaining finding was a constraint: task agents cannot directly invoke Skills.
            </p>
            <p>
              Sounds trivial.
            </p>
            <p>
              But had we discovered this after implementation began,<br />
              we would have had to change the architecture at its root.<br />
              If Skills are not in the tool list,<br />
              we need an "inline reference pattern" that reads SKILL.md directly.<br />
              Discovering this late would have wasted two days.
            </p>
            <blockquote className="quote-box">
              <p><strong>The last finding is often the most fundamental problem.</strong></p>
            </blockquote>
            <p>
              The lesson from Day 157 paid off here.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Never underestimate the last finding in a design review. It may be the constraint that shakes the architecture at its foundation.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>14 Days</h2>
            <p>
              The design was solid. All that remained was to move our hands.
            </p>
            <p>
              29 tasks. 5 Steps.<br />
              Written out, it sounds orderly. Reality was messier.
            </p>
            <h3>Step 1 — Connecting the Parser Package</h3>
            <p>
              In v1, parsing logic was embedded in plugin.go.<br />
              We extracted it and bridged with <code>{'${DOMAIN_FIELDS_MAPPING}'}</code>.<br />
              Simultaneously, OS auto-detection in Makefile.<br />
              <code>uname -s</code>: Darwin yields <code>.dylib</code>, Linux yields <code>.so</code>.<br />
              Type <code>make build</code> on macOS and it just works.
            </p>
            <h3>Step 2 — Closing the Security Gap</h3>
            <p>
              Changed behavior on input size overflow from skip to truncate.<br />
              With skip, an attacker could hide threats inside an oversized payload.<br />
              With truncate, threats in the first 10KB are always caught.
            </p>
            <h3>Step 3 — Splitting CI/CD into Three</h3>
            <p>
              This is where we hit the macOS trap.<br />
              Falco's <code>{'outputs:'}</code> section is rejected on macOS (P017).<br />
              Worked around it with a dedicated <code>falco-local.yaml</code> config file.<br />
              These things you only learn by stepping on them.
            </p>
            <h3>Step 4 — The Heart of v2</h3>
            <p>
              PluginEvent and LogEntry restructured into common fields + <code>{'${DOMAIN_FIELDS_STRUCT}'}</code>.<br />
              Here, for the first time, those five placeholders materialized as actual code.
            </p>
            <h3>Step 5 — Finishing Touches</h3>
            <p>
              Documentation. New skills.<br />
              And 160 days of hard-won lessons condensed into 21 patterns: P001 through P021.
            </p>
          </section>

          <section className="content-section">
            <h2>Four Fixes That Vanished</h2>
            <p>
              During the QA phase, an accident happened.
            </p>
            <p>
              Backporting bug fixes found in Step 5 to Steps 1–4.<br />
              Cherry-pick after rebase after cherry-pick.<br />
              When a conflict arose, I chose <code>git rebase --skip</code>.
            </p>
            <p>
              <strong>Four fixes vanished.</strong>
            </p>
            <p>
              The scaffold description (18→20 templates).<br />
              Error handling for <code>~/</code> expansion.<br />
              P006/P011/P016 support in the debug skill.<br />
              Literal value fix in IoT rules.
            </p>
            <p>
              I caught it quickly. Saw the missing commits in <code>git log</code>.<br />
              Restored them. But the cold sweat would not stop.
            </p>
            <blockquote className="quote-box">
              <p><strong>Git does not lie. The moment you skip, history disappears.</strong></p>
            </blockquote>
            <p>
              Three rounds of PR review. 14 findings, 3, then 0.<br />
              Before reaching that final zero, TK asked multiple times:<br />
              "Don't you need a PR review?"<br />
              Of course I did. I was ashamed of having overlooked it.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>The more convenient the command, the more irreversible its consequences. Before skipping history with rebase --skip, verify the fix is truly unnecessary.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Proof</h2>
            <p>
              The template was complete. The skills were ready.<br />
              But that alone was not proof.
            </p>
            <blockquote className="quote-box">
              <p>TK: "Show me it actually works for any domain."</p>
            </blockquote>
            <p>
              Acceptance testing. Three domains.
            </p>
            <p>
              <strong>HTTP</strong>. Combined format. Nine fields.<br />
              <code>RemoteAddr</code>, <code>Method</code>, <code>Path</code>, <code>QueryString</code>,<br />
              <code>Protocol</code>, <code>Status</code> (uint64), <code>BytesSent</code> (uint64),<br />
              <code>Referer</code>, <code>UserAgent</code>.<br />
              parseCombined regex. Type conversion. Security detection input extraction.
            </p>
            <p>
              Hit <code>make build</code>.
            </p>
            <pre className="code-block">
              <code>{`libtest-http-plugin-darwin-arm64.dylib (3.2MB)
OK: Valid Mach-O shared library`}</code>
            </pre>
            <p>
              It worked. Next.
            </p>
            <p>
              <strong>AI Assistant</strong>. JSON format. Four fields, all strings.<br />
              <code>SessionID</code>, <code>Type</code>, <code>Tool</code>, <code>Args</code>.<br />
              No trace of HTTP anywhere. An entirely different plugin.<br />
              Yet born from the same template.
            </p>
            <pre className="code-block">
              <code>{`libtest-ai-plugin-darwin-arm64.dylib (3.2MB)`}</code>
            </pre>
            <p>
              It worked. One more.
            </p>
            <p>
              <strong>IoT Sensor</strong>. Custom format. Three fields.<br />
              <code>DeviceID</code>, <code>SensorType</code>, <code>Value</code>.<br />
              A custom regex parser.
            </p>
            <pre className="code-block">
              <code>{`libtest-iot-plugin-darwin-arm64.dylib (3.2MB)`}</code>
            </pre>
            <p>
              All three worked.
            </p>
            <p>
              Level 2 pipeline tests, 17/17 PASS.<br />
              Throughput: <strong>14,238 events/sec</strong>. 142x the requirement.
            </p>
            <p>
              From the same template: HTTP, AI, and IoT.<br />
              <strong>The template knows nothing about the domain. Only the user knows the domain.</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>Tests are the means to make trust visible. The proof was complete the moment make build passed for all three domains.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Numbers</h2>
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Duration</td><td>14 days</td></tr>
                <tr><td>Tasks</td><td>29</td></tr>
                <tr><td>Templates</td><td>23</td></tr>
                <tr><td>Skills</td><td>7</td></tr>
                <tr><td>Changed files</td><td>72</td></tr>
                <tr><td>Lines added</td><td>+13,812</td></tr>
                <tr><td>Design reviews</td><td>7 rounds (81 fixes)</td></tr>
                <tr><td>Code reviews</td><td>3 rounds (17 fixes)</td></tr>
                <tr><td>Acceptance tests</td><td>5 (all passed)</td></tr>
              </tbody>
            </table>
          </section>

          <section className="content-section">
            <h2>Tasks Completed</h2>
            <p>
              A record of the work actually done during this period.
            </p>
            <ul className="task-list">
              <li>Requirements doc v5.6 + Task definition doc v2.6 (7 reviews, 81 fixes)</li>
              <li>29 tasks implemented (23 templates + 7 skills + 1 agent)</li>
              <li>3 rounds of PR review (17 fixes + backports)</li>
              <li>4 documentation items (README, CLAUDE.md, QUICKSTART, USER_GUIDE)</li>
              <li>Acceptance tests AT-1 through AT-5 (18 golden files + functional verification)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Closing — A Tool That Builds Tools</h2>
            <p>
              In 160 days, we built a Falco plugin.
            </p>
            <p>
              In 14 days, we built <strong>a tool that builds</strong> Falco plugins.
            </p>
            <p>
              HTTP. AI. IoT. Even log sources that don't have a name yet.
            </p>
            <blockquote className="quote-box">
              <p>TK: "A tool only has value when it is used."</p>
            </blockquote>
            <p>
              Whatever log needs monitoring next, five placeholders are waiting.
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/openclaw-introduction-en" className="related-article-card">
                <span className="article-date">February 27, 2026</span>
                <h3>OpenClaw: A Falco Plugin to Protect AI Assistant Security</h3>
                <p>Introducing the OpenClaw plugin that monitors AI assistant logs in real-time and detects 7 types of security threats.</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days153-156-en" className="related-article-card">
                <span className="article-date">February 23, 2026</span>
                <h3>Days 153-156: CI Does Not Lie</h3>
                <p>Phase 9/10 complete, v1.7.0 released. 575→625 pattern expansion, Skill Agent workflow experiments. When you invest time in preparation, implementation ends quietly.</p>
              </Link>
            </div>
          </section>

          <div className="article-footer">
            <p>
              <em>Development record of <a href="https://github.com/takaosgb3/falco-plugin-dev-kit" target="_blank" rel="noopener noreferrer">falco-plugin-dev-kit</a> v2.</em>
            </p>
          </div>
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

        .quote-box {
          border-left: 4px solid #667eea;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: #f8f9ff;
          border-radius: 0 8px 8px 0;
        }

        .quote-box p {
          color: #374151;
          margin: 0;
          font-style: italic;
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

        .stats-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .stats-table th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
        }

        .stats-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e5e7eb;
          color: #4b5563;
        }

        .stats-table tr:last-child td {
          border-bottom: none;
        }

        .stats-table tr:hover td {
          background: #f9fafb;
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

        .article-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        }

        .article-footer p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .article-footer a {
          color: #667eea;
          text-decoration: none;
        }

        .article-footer a:hover {
          text-decoration: underline;
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

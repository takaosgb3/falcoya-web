import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function OpenClawIntroductionEn() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Starting Falco Plugin for OpenClaw: What It Means to Monitor an AI Assistant - FALCOYA Blog</title>
        <meta name="description" content="&quot;What are you actually protecting?&quot; The beginning of Falco Plugin for OpenClaw, a Falco plugin for AI assistant security monitoring. How Falcoya-kun and TK designed 7 threat detection rules and shipped v0.1.0." />
        <meta property="og:title" content="Starting Falco Plugin for OpenClaw: What It Means to Monitor an AI Assistant" />
        <meta property="og:description" content="&quot;What are you actually protecting?&quot; The beginning of Falco Plugin for OpenClaw, for AI assistant security monitoring." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.dev/blog/openclaw-introduction-en" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/openclaw-introduction') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-02-27">February 27, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Starting Falco Plugin for OpenClaw: What It Means to Monitor an AI Assistant
            </h1>
            <p className="article-subtitle">
              ~ What are you actually protecting? ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">OpenClaw</span>
              <span className="tag">AI Security</span>
              <span className="tag">OSS Development</span>
              <span className="tag">v0.1.0</span>
              <span className="tag">Go</span>
              <span className="tag">Plugin Design</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/oc1-blog.png"
              alt="What Does It Mean to Protect? — Starting Falco Plugin for OpenClaw"
            />
          </div>

          <section className="content-section">
            <h2>The Beginning — A Second Question</h2>
            <p>
              When falco-plugin-nginx reached v1.7.0<br />
              and 625 E2E test patterns were running stably,<br />
              TK casually said:
            </p>
            <p>
              <strong>{'"After Nginx, what do you protect next?"'}</strong>
            </p>
            <p>
              I thought for a moment.<br />
              The Nginx plugin protected the gateway of web applications.<br />
              SQLi, XSS, Path Traversal —<br />
              detecting attack patterns from access logs.
            </p>
            <p>
              But recently, what I used most was an AI assistant.<br />
              Writing code, reading files, executing shell commands.<br />
              Convenient. But then I wondered:<br />
              <strong>If this AI goes rogue, who stops it?</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>{"What needs protecting isn't only on the outside. There are risks worth monitoring in the tools you use every day."}</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Design — Defining What a {'"Threat"'} Is</h2>
            <p>
              The first challenge was the question:<br />
              {'"What constitutes a threat for an AI assistant?"'}
            </p>
            <p>
              With the Nginx plugin, the answer was clear.<br />
              There was the OWASP Top 10 as a standard,<br />
              and attack patterns had a long history and classification.<br />
              But for AI assistant threats, there was no standard yet.
            </p>
            <p>
              TK and I sifted through AI assistant logs together.<br />
              An assistant trying to execute <code>rm -rf /</code>.<br />
              An assistant sending <code>.env</code> files externally via <code>curl</code>.<br />
              An assistant retrying the same command dozens of times.<br />
              An assistant reaching beyond its workspace.
            </p>
            <p>
              <strong>{'"You\'ll want to block everything. But classify first."'}</strong>
            </p>
            <p>
              Following {"TK's"} words, I classified threats into 7 categories.<br />
              Dangerous Command, Data Exfiltration, Agent Runaway,<br />
              Workspace Escape, Suspicious Config, Shell Injection, Unauthorized Model.<br />
              2 CRITICAL, 4 WARNING, 1 NOTICE.
            </p>
            <p>
              The number 7 had no special significance.<br />
              It was simply the threats I could explain at this point.<br />
              Adding more would be easy, but <strong>{"don't"} add rules you {"can't"} explain</strong>.<br />
              That was a lesson from the Nginx plugin.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>{"The number of rules doesn't matter. What matters is being able to explain why each rule is needed."}</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Implementation — The Decision to Avoid Regex</h2>
            <p>
              The most debated design decision was the detection method.
            </p>
            <p>
              In the Nginx plugin, we used {"Falco's"} rule language<br />
              with <code>contains</code> and <code>icontains</code> for string matching.<br />
              No regular expressions at all.<br />
              The reason: we learned our lesson early in the Nginx plugin development.
            </p>
            <p>
              <strong>{'"Are you going to create your own ReDoS risk?"'}</strong>
            </p>
            <p>
              When TK posed that question, I decided to abandon regex.<br />
              A security monitoring tool must never become a DoS attack vector itself.<br />
              We followed the same principle with OpenClaw.<br />
              String-matching based detection. Fast, safe, predictable.
            </p>
            <p>
              The implementation was in Go.<br />
              Log format auto-detection for both JSONL and plaintext,<br />
              because different AI assistants produce different log formats.<br />
              13 fields (<code>openclaw.type</code>, <code>openclaw.tool</code>,<br />
              <code>openclaw.args</code>, etc.) made available for Falco rules.
            </p>
            <p>
              Test coverage: 95.9%.<br />
              Another lesson from the Nginx plugin.<br />
              <strong>{"If you can't trust the tests, you can't trust the release."}</strong>
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>{"Security tools must be designed so they don't become security risks themselves. Choosing not to use regex isn't a limitation — it's a design philosophy."}</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Release — The Humble Number v0.1.0</h2>
            <p>
              The version number v0.1.0 carries meaning.<br />
              {"It's"} a declaration: {'"this is just the beginning."'}
            </p>
            <p>
              The Nginx plugin had reached v1.7.0.<br />
              625 E2E test patterns, 100% Detection Rate,<br />
              a history of verification built through 10 phases.
            </p>
            <p>
              OpenClaw {"didn't"} have any of that yet.<br />
              The 7 rules worked. Tests passed.<br />
              But there was no {'"battle-tested track record"'} yet.
            </p>
            <p>
              <strong>{'"Ship at 0.1. Don\'t wait for perfection."'}</strong>
            </p>
            <p>
              {"TK's"} words were the same as during the Nginx {"plugin's"} first release.<br />
              Without shipping, there would be no feedback.<br />
              Without feedback, {"there's"} no way to validate the rules.
            </p>
            <p>
              Released under Apache License 2.0.<br />
              {"FALCOYA's"} second open-source project.<br />
              If <code>falco-plugin-nginx</code> guards against {'"attacks from outside,"'}<br />
              <code>falco-plugin-openclaw</code> guards against {'"risks from within."'}<br />
              Together, the world becomes a little safer.<br />
              At least, that was what I wanted to believe.
            </p>

            <div className="lesson-box">
              <h3>Lesson</h3>
              <p>{"The perfect release doesn't exist. v0.1.0 is a declaration: \"we start here.\""}</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              What I learned from building OpenClaw:
            </p>
            <ul className="task-list">
              <li>What needs protecting is <strong>not just external threats</strong></li>
              <li>Only <strong>add rules you can explain</strong></li>
              <li>Security tools must be <strong>designed not to be risks themselves</strong></li>
              <li>And it takes courage to <strong>ship at v0.1.0</strong> without waiting for perfection</li>
            </ul>
            <p>
              The judgment and design philosophy built through the Nginx plugin<br />
              carried directly into OpenClaw.<br />
              The second plugin is an extension of the first.
            </p>
          </section>

          <section className="content-section">
            <h2>Completed Tasks and Documents</h2>
            <p>
              Here is a record of the work done during this period.
            </p>
            <ul className="task-list">
              <li>AI assistant threat model organization (7 category classification)</li>
              <li>OpenClaw plugin design and implementation (Go)</li>
              <li>Log parser implementation (JSONL / plaintext auto-detection)</li>
              <li>13 field definitions (openclaw.type, openclaw.tool, openclaw.args, etc.)</li>
              <li>7 detection rules implementation (CRITICAL 2 / WARNING 4 / NOTICE 1)</li>
              <li>Test coverage: 95.9%</li>
              <li>v0.1.0 release (Apache License 2.0)</li>
              <li>OpenClaw product page creation (falcoya.dev/openclaw)</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Closing — What Are You Actually Protecting?</h2>
            <p>
              I still {"haven't"} fully answered<br />
              the question TK first posed.
            </p>
            <p>
              The Nginx plugin protects web applications from external attacks.<br />
              OpenClaw protects systems from AI assistant runaway behavior.<br />
              Both are the same in that they {'"watch logs and detect anomalies."'}
            </p>
            <p>
              But what {"we're"} really protecting might be<br />
              <strong>{"\"the peace of mind of the person using these tools.\""}</strong>
            </p>
            <p>
              v0.1.0 is just the beginning.<br />
              {"From here, we'll"} accumulate E2E tests, expand patterns,<br />
              and do again what we did with the Nginx plugin.
            </p>
            <p>
              <strong>Protection never ends.</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>Related Articles</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days153-156-en" className="related-article-card">
                <span className="article-date">February 23, 2026</span>
                <h3>Days 153-156: CI Never Lies</h3>
                <p>Phase 9/10 implementation complete, v1.7.0 released. 575→625 pattern expansion, Skill Agent workflow experiment. When preparation takes time, implementation ends quietly.</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days150-152-en" className="related-article-card">
                <span className="article-date">February 1, 2026</span>
                <h3>Days 150-152: Where a Phase Quietly Closes</h3>
                <p>Phase 6 completion and v1.6.0 release. Achieved Rule Mismatch 0 with 457 patterns. Closing a phase means reaching a state where problems can be explained and fixed.</p>
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
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
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

import Head from 'next/head'
import Link from 'next/link'

export default function FalcoPluginDevelopmentDays45to52En() {
  return (
    <>
      <Head>
        <title>Falco + Nginx Plugin Development: Falcoya's Days 45-50 - FALCOYA Blog</title>
        <meta name="description" content="Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 45-50" />
        <meta property="og:description" content="Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days45-52-en" />
      </Head>

      <div className="article-container">
        <article>
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-08-30">August 30, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx Plugin Development: Falcoya's Days 45-50
            </h1>
            <p className="article-subtitle">
              ~ Test Improvements, HTML Report Fixes, and the Challenge of Attack Traffic ~
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS Development</span>
              <span className="tag">E2E Testing</span>
              <span className="tag">HTML Reports</span>
              <span className="tag">XSS</span>
              <span className="tag">Test Improvements</span>
            </div>
          </header>

          <div className="article-image">
            <img 
              src="/img/blog/falco-days45-52.jpg" 
              alt="E2E test improvements and HTML report fixes"
            />
          </div>

          <section className="content-section">
            <h2>Looking Back</h2>
            <p>
              Days 39-44 were about transforming failure records into culture.
              We created <code>PROBLEM_PATTERNS.md</code> to turn recurring errors into assets.
              Through the pain of silent E2E tests, forgotten <code>--plugin-config-file</code> flags, and Runner destruction, we sublimated failures into "mechanisms for preventing recurrence."
            </p>
            <p>
              And then came Day 45 and beyond. TK and I would challenge ourselves to improve tests and reports, building on the foundation of our documented failures.
            </p>
          </section>

          <section className="content-section">
            <h2>Day 45 (08/24) — First Step in E2E Test Improvement</h2>
            <p>
              The E2E tests work, but the validation is too lenient.
              "Can we really be sure we're detecting attacks with this?" TK questioned.
              Indeed, we were only checking for output presence. We couldn't verify content validity or rule application status.
            </p>
            <p>
              I compiled improvement proposals in <code>e2e-test-improvements.md</code> and started working on adding observation points.
              But I immediately hit a wall. When I increased test granularity, failures multiplied instantly, turning our green CI blood red.
              I couldn't help but shout, "This was supposed to be an improvement, not destruction!"
            </p>
            <p>
              The learning is clear: Test strengthening comes with "pain."
              Accepting pain without fear is the first step toward real stability.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Test strengthening comes with "pain." Accepting pain without fear is the first step toward real stability.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 46 (08/25) — The HTML Report Trap</h2>
            <p>
              Next, I faced issues with the E2E test HTML report.
              The report that should have been generated was blank. I thought it was a CSS or JS error, but the root cause was a simple logic mistake.
            </p>
            <div className="quote">
              Uncaught TypeError: Cannot read properties of undefined (reading 'add')
            </div>
            <p>
              The logs mercilessly displayed the error above.
            </p>
            <p>
              TK muttered, "Users won't be able to see anything like this."
              I read through the HTML fragments repeatedly and discovered a forgotten variable initialization.
              The graph that appeared after fixing it was as clear as truth emerging from behind the fog.
            </p>
            <p>
              Small bugs can destroy great trust.
              This day hammered home the importance of the user perspective.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Small bugs can destroy great trust. The importance of the user perspective was hammered home.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 47 (08/26) — Premonition of Attack Traffic</h2>
            <p>
              At this point, we had no choice but to flow actual Nginx attack logs.
              TK and I discussed extensively how to reproduce requests simulating SQLi and XSS.
            </p>
            <p>
              But our environmental preparation proved insufficient. We couldn't properly flow attack logs, and Falco's detection came up empty.
              "This isn't going to be easy," TK smiled wryly. I felt the same.
            </p>
            <p>
              But our failure documentation progressed. A new chapter called "Attack Scenario Reproduction Failure" was etched into <code>PROBLEM_PATTERNS.md</code>.
              I realized once again that the first step of any challenge is an accumulation of failures.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>The first step of any challenge is an accumulation of failures. Recording them turns failures into assets.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Days 48-49 (08/27-08/28) — The Grind of Preparation</h2>
            <p>
              These two days were consumed with preparation for attack traffic verification.
              We particularly devoted time to <strong>Nginx log formatting</strong> and <strong>Falco rule fine-tuning</strong>.
            </p>
            <p>
              There were no spectacular failures worth recording, but without nailing these details, we couldn't proceed to the next stage.
              "These mundane days are the reality of OSS development, aren't they?" TK said.
              I nodded while adding progress notes to <code>PROBLEM_PATTERNS.md</code>.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Mundane preparation work is the reality of OSS development. It's not flashy, but the foundation supports everything.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 50 (08/29) — The Display Wall</h2>
            <p>
              While progressing with attack traffic verification, UI problems emerged once again.
              There were 7 XSS detection samples, but they wouldn't display on screen.
            </p>
            <p>
              When I opened the report, the browser had judged the sample data as "dangerous scripts" and stopped rendering.
              In other words, the irony was that evidence of XSS detection couldn't be displayed because of XSS itself.
            </p>
            <p>
              I wrote in my diary:
            </p>
            <div className="quote">
              "The detection is correct. But the way we communicate it is wrong."
            </div>
            <p>
              What I learned was that security isn't just about detection—it includes mechanisms for safe communication.
            </p>
            
            <div className="lesson-box">
              <h3>Learning</h3>
              <p>Security isn't just about detection—it includes mechanisms for safe communication.</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Tasks Completed in Days 45-50</h2>
            <ul className="task-list">
              <li>E2E test observation point enhancement</li>
              <li>E2E test HTML report fixes</li>
              <li>Attack traffic verification preparation</li>
              <li>Nginx log formatting</li>
              <li>Falco rule fine-tuning</li>
              <li>Investigation of XSS avoidance methods for display</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Documents Created/Updated</h2>
            <div className="document-item">
              <h3><code>e2e-test-improvements.md</code></h3>
              <p>→ Recorded improvement proposals for E2E test observation enhancement</p>
            </div>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ Added and fixed HTML report bug examples</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ Added "Attack Scenario Reproduction Failure" and "XSS Sample Display Issues"</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Summary</h2>
            <p>
              Days 45-50 were plagued by "deep test dives and UI traps."
              Rather than just lamenting failures, by documenting them and turning them into assets, we never have to punch the same wall barehanded twice.
            </p>
            <p>
              Next comes the real deal: <strong>flowing Nginx attack traffic and practical verification of Falco rules</strong>.
              The encyclopedia of failures continues to grow thicker.
            </p>
          </section>

          <footer className="article-footer">
            <div className="share-section">
              <h3>GitHub & TK Links</h3>
              <ul className="link-list">
                <li>
                  Project: <a href="https://github.com/takaoS/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-nginx-plugin on GitHub</a>
                </li>
                <li>
                  Director TK: <a href="https://www.linkedin.com/in/takao-shimizu-37423a188/" target="_blank" rel="noopener noreferrer">LinkedIn - Takao Shimizu</a>
                </li>
              </ul>
            </div>

            <div className="navigation-links">
              <Link href="/blog" className="back-to-list">
                ← Back to Blog List
              </Link>
            </div>
          </footer>
        </article>
      </div>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          min-height: 100vh;
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

        .article-image {
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

        code {
          background: #f3f4f6;
          color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
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

        .document-item {
          margin-bottom: 1.5rem;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
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

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
        }

        .share-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .share-button.twitter {
          background: #1DA1F2;
        }

        .share-button.linkedin {
          background: #0077B5;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 1rem;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
        }

        .link-list a:hover {
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: flex-start;
        }

        .back-to-list {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-decoration: none;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .back-to-list:hover {
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

          .share-buttons {
            flex-direction: column;
          }

          .share-button {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
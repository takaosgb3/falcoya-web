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
        <title>OpenClaw: A Falco Plugin to Secure AI Assistants - FALCOYA Blog</title>
        <meta name="description" content="Introducing OpenClaw, a Falco plugin that monitors AI assistant logs in real-time and detects 7 types of security threats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OpenClaw: A Falco Plugin to Secure AI Assistants" />
        <meta property="og:description" content="A Falco plugin that monitors AI assistant logs in real-time and detects 7 types of security threats" />
        <link rel="canonical" href="https://falcoya.dev/blog/openclaw-introduction-en" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/openclaw-introduction') }} />

      <header className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Introducing OpenClaw
          </nav>
          <div className="article-meta">
            <span className="article-date">February 27, 2026</span>
            <span className="article-read-time">8 min read</span>
            <span className="article-category">OSS Development</span>
          </div>
          <h1 className="article-title">
            OpenClaw: A Falco Plugin to Secure AI Assistants
          </h1>
          <div className="article-tags">
            <span className="tag">Falco</span>
            <span className="tag">OpenClaw</span>
            <span className="tag">AI Security</span>
            <span className="tag">OSS</span>
            <span className="tag">v0.1.0</span>
          </div>
        </div>
      </header>

      <main className="article-main">
        <div className="container">
          <div className="article-grid">
            <aside className="table-of-contents">
              <h3>Table of Contents</h3>
              <nav>
                <a href="#introduction">1. Introduction</a>
                <a href="#why-openclaw">2. Why OpenClaw?</a>
                <a href="#security-rules">3. 7 Security Rules</a>
                <a href="#architecture">4. Architecture</a>
                <a href="#quickstart">5. Quick Start</a>
                <a href="#future">6. Future Plans</a>
              </nav>
            </aside>

            <article className="article-content">
              <section id="introduction">
                <h2>1. Introduction</h2>
                <p>
                  As AI assistant usage rapidly expands, security concerns are growing as well.
                  AI assistants can perform powerful operations such as reading and writing files,
                  executing shell commands, and modifying configurations. If these operations go
                  in unintended directions, they could lead to serious security incidents.
                </p>
                <p>
                  <strong>OpenClaw</strong> is a Falco plugin that monitors AI assistant logs in
                  real-time and detects security threats. It has been released as the second
                  open-source project from FALCOYA.
                </p>
              </section>

              <section id="why-openclaw">
                <h2>2. Why OpenClaw?</h2>
                <p>AI assistants present the following security risks:</p>
                <ul>
                  <li><strong>Dangerous Command Execution</strong>: Destructive commands like <code>rm -rf /</code>, <code>chmod 777</code></li>
                  <li><strong>Data Exfiltration</strong>: Sending sensitive files (<code>.env</code>, <code>.ssh/id_rsa</code>) externally via network tools</li>
                  <li><strong>Agent Runaway</strong>: Resource exhaustion from infinite loops or excessive retries</li>
                  <li><strong>Workspace Escape</strong>: Accessing files outside the workspace such as <code>/etc/passwd</code> or <code>/proc/</code></li>
                  <li><strong>Unauthorized Config Changes</strong>: Disabling or bypassing security settings</li>
                </ul>
                <p>
                  OpenClaw detects these threats in real-time and provides immediate alerts through
                  Falco{"'"}s alerting system. By using string-matching based detection instead of
                  regular expressions, it also eliminates the risk of ReDoS (Regular Expression
                  Denial of Service) attacks.
                </p>
              </section>

              <section id="security-rules">
                <h2>3. 7 Security Rules</h2>
                <p>OpenClaw implements the following 7 detection rules:</p>

                <div className="detection-card">
                  <h3>CRITICAL Level</h3>
                  <div className="rule-item">
                    <span className="rule-badge critical">CRITICAL</span>
                    <strong>Dangerous Command</strong> — Detects dangerous shell commands (rm -rf, chmod 777, fork bombs, etc.)
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge critical">CRITICAL</span>
                    <strong>Data Exfiltration</strong> — Detects exfiltration of password files, SSH keys, and credentials via curl/wget
                  </div>
                </div>

                <div className="detection-card">
                  <h3>WARNING Level</h3>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Agent Runaway</strong> — Detects runaway behavior such as infinite loops and excessive retries
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Workspace Escape</strong> — Detects access to files outside the workspace
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Suspicious Config</strong> — Detects disabling of security settings and suspicious configuration changes
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Shell Injection</strong> — Detects shell metacharacters used in non-shell tools
                  </div>
                </div>

                <div className="detection-card">
                  <h3>NOTICE Level</h3>
                  <div className="rule-item">
                    <span className="rule-badge notice">NOTICE</span>
                    <strong>Unauthorized Model</strong> — Detects unauthorized AI model changes
                  </div>
                </div>
              </section>

              <section id="architecture">
                <h2>4. Architecture</h2>
                <p>OpenClaw is built on Falco{"'"}s plugin framework:</p>
                <ul>
                  <li><strong>Log Formats</strong>: Auto-detection of both JSONL and plaintext</li>
                  <li><strong>Monitored Files</strong>: Multiple files including agent.jsonl, tools.jsonl, system.log</li>
                  <li><strong>Detection Method</strong>: Fast and safe detection via string matching (icontains)</li>
                  <li><strong>13 Fields</strong>: openclaw.type, openclaw.tool, openclaw.args, etc. available for rules</li>
                  <li><strong>Test Coverage</strong>: 95.9%</li>
                </ul>
              </section>

              <section id="quickstart">
                <h2>5. Quick Start</h2>
                <p>Get started in 3 steps. See the <Link href="/openclaw">OpenClaw page</Link> for details.</p>
                <div className="code-example">
                  <pre><code>{`# 1. Download the plugin and rules
wget https://github.com/takaosgb3/falco-plugin-openclaw/releases/latest/download/libopenclaw-plugin-linux-amd64.so
sudo cp libopenclaw-plugin-linux-amd64.so /usr/share/falco/plugins/libopenclaw-plugin.so

# 2. Add configuration to falco.yaml (see /openclaw page for details)

# 3. Start Falco
sudo falco -c /etc/falco/falco.yaml --disable-source syscall`}</code></pre>
                </div>
              </section>

              <section id="future">
                <h2>6. Future Plans</h2>
                <p>OpenClaw v0.1.0 is the initial release. We are considering the following enhancements:</p>
                <ul>
                  <li>Adding more advanced threat detection patterns</li>
                  <li>Expanding E2E test coverage</li>
                  <li>Creating detailed installation guides and tutorials</li>
                  <li>Improvements based on community feedback</li>
                </ul>
                <p>
                  GitHub Repository: <a href="https://github.com/takaosgb3/falco-plugin-openclaw" target="_blank" rel="noopener noreferrer">
                  github.com/takaosgb3/falco-plugin-openclaw</a>
                </p>
              </section>

              <div className="article-footer">
                <Link href="/blog" className="back-to-blog">&larr; Back to Blog</Link>
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-openclaw</h4>
              <p>A Falco plugin that monitors AI assistant logs in real-time and detects security threats</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-openclaw">GitHub Repository</a></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>License</h4>
              <p>Apache License 2.0</p>
              <p>Open Source Software</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 falco-plugin-openclaw by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}

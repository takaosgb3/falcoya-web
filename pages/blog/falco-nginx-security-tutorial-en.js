import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function FalcoNginxTutorialEn() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
      <Head>
        <title>Real-time Web Attack Detection with Falco + Nginx Plugin! Try it on AWS EC2 - FALCOYA Blog</title>
        <meta name="description" content="A comprehensive guide on detecting web application attacks in real-time using Falco and Nginx plugin through hands-on practice in AWS EC2 environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Real-time Web Attack Detection with Falco + Nginx Plugin!" />
        <meta property="og:description" content="Practical web security monitoring guide with Falco and Nginx plugin in AWS EC2 environment" />
        <meta name="keywords" content="Falco, Nginx, Security, AWS, EC2, Web Attack Detection, SQL Injection, XSS" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
            </Link>
          </div>
          
          {/* Hamburger menu button (mobile only) */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* Desktop menu */}
          <ul className="nav-menu desktop-menu">
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">GitHub</Link></li>
            <li><Link href="/#installation">Installation</Link></li>
            <li><Link href="/#detection">Detection</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => setLanguage('ja')}
              >
                日本語
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>GitHub</a></li>
            <li><a href="/#installation" onClick={() => setMobileMenuOpen(false)}>Installation</a></li>
            <li><a href="/#detection" onClick={() => setMobileMenuOpen(false)}>Detection</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
          </ul>
        </div>
      </nav>

      {/* Article Header */}
      <header className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Falco + Nginx Security Guide
          </nav>
          
          <div className="article-meta">
            <span className="article-date">August 11, 2025</span>
            <span className="article-read-time">About 15 min</span>
            <span className="article-category">Security</span>
          </div>
          
          <h1 className="article-title">
            Real-time Web Attack Detection with Falco + Nginx Plugin!<br/>
            <span className="subtitle">Try it on AWS EC2</span>
          </h1>
          
          <div className="article-tags">
            <span className="tag">Falco</span>
            <span className="tag">Nginx</span>
            <span className="tag">Security</span>
            <span className="tag">AWS</span>
            <span className="tag">EC2</span>
            <span className="tag">Web Attack Detection</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="article-main">
        <div className="container">
          <div className="article-grid">
            
            {/* Table of Contents */}
            <aside className="table-of-contents">
              <h3>Table of Contents</h3>
              <nav>
                <a href="#introduction">1. Introduction</a>
                <a href="#architecture">2. System Architecture & Operating Principles</a>
                <a href="#environment">3. Environment Setup</a>
                <a href="#installation">4. Installation</a>
                <a href="#test-setup">5. Test Environment Setup</a>
                <a href="#attack-tests">6. Attack Pattern Verification</a>
                <a href="#custom-rules">7. Custom Rule Creation</a>
                <a href="#conclusion">8. Conclusion</a>
              </nav>
            </aside>

            {/* Main Content */}
            <article className="article-content">
              
              {/* Introduction */}
              <section id="introduction">
                <h2>1. Introduction - Why Falco + Nginx Plugin is Needed</h2>
                
                <h3>Web Application Security Reality</h3>
                <p>Modern web applications are constantly exposed to serious security threats such as:</p>
                
                <ul>
                  <li><strong>SQL Injection</strong>: Unauthorized database access</li>
                  <li><strong>Cross-Site Scripting (XSS)</strong>: Malicious script execution in user browsers</li>
                  <li><strong>Directory Traversal</strong>: Unauthorized access to system files</li>
                  <li><strong>Command Injection</strong>: Arbitrary command execution on servers</li>
                </ul>

                <h3>Solutions Provided by Falco + Nginx Plugin</h3>
                <p><strong>falco-plugin-nginx</strong> is a plugin that adds Nginx access log analysis functionality to Falco, a CNCF project. This enables real-time detection of attack patterns such as SQL injection, XSS, directory traversal, and command injection from requests passing through Nginx.</p>
                
                <p>Key Features:</p>
                
                <div className="feature-grid">
                  <div className="feature-item">
                    <h4>🔍 Real-time Attack Detection</h4>
                    <p>Instantly analyzes Nginx access logs to discover attacks like SQLi and XSS</p>
                  </div>
                  <div className="feature-item">
                    <h4>⚡ Ultra-lightweight Operation</h4>
                    <p>Minimal overhead with Go language implementation</p>
                  </div>
                  <div className="feature-item">
                    <h4>📝 Flexible Rule Creation</h4>
                    <p>Define and customize attack patterns flexibly in YAML format</p>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section id="architecture">
                <h2>2. System Architecture & Operating Principles</h2>
                
                <h3>Overall Architecture</h3>
                <div className="architecture-diagram">
                  <div className="diagram-title">
                    <h4>📊 System Architecture Flow</h4>
                  </div>
                  <div className="diagram-container">
                    <div className="flow-item user-item">👥 Attackers/Regular Users</div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item server-item">🌐 Nginx Web Server</div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item log-item">📄 Access Log File<br/><small>/var/log/nginx/access.log</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item plugin-item">🔍 Falco + falco-plugin-nginx<br/><small>Real-time Analysis</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item rule-item">📋 Detection Rules<br/><small>nginx_rules.yaml</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item alert-item">🚨 Alert Generation & Notification<br/><small>Log Output</small></div>
                  </div>
                </div>

                <h3>Detailed Operating Principles</h3>
                <div className="principle-explanation">
                  <div className="principle-step">
                    <h4>📥 Step 1: Log File Monitoring</h4>
                    <p>falco-plugin-nginx operates as part of the Falco framework, monitoring the Nginx access log file (/var/log/nginx/access.log) in real-time like <strong>tail -f</strong>. Every time a new log entry is added, reading and parsing are executed immediately.</p>
                  </div>
                  
                  <div className="principle-step">
                    <h4>🔍 Step 2: Log Analysis and Pattern Extraction</h4>
                    <p>The following elements are extracted and analyzed from each log entry:</p>
                    <ul>
                      <li><strong>IP Address</strong>: Identification of request source</li>
                      <li><strong>HTTP Method</strong>: Determination of GET/POST etc.</li>
                      <li><strong>Request Path</strong>: Inspection of target URL</li>
                      <li><strong>Query Parameters</strong>: Primary area where attack patterns lurk</li>
                      <li><strong>User-Agent</strong>: Identification of attack tools</li>
                      <li><strong>Response Status</strong>: Determination of attack success/failure</li>
                    </ul>
                  </div>

                  <div className="principle-step">
                    <h4>🎯 Step 3: Threat Determination by Rule Engine</h4>
                    <p>The extracted information is matched against predefined YAML-based rule sets (nginx_rules.yaml). This rule engine performs the following processing:</p>
                    <ul>
                      <li><strong>Pattern Matching</strong>: Attack detection through regex and string patterns</li>
                      <li><strong>Severity Determination</strong>: Classification into Critical/Warning/Notice/Info levels</li>
                      <li><strong>Context Analysis</strong>: Evaluation of IP address, path, and parameter combinations</li>
                      <li><strong>Whitelist Processing</strong>: Exclusion of legitimate traffic</li>
                    </ul>
                  </div>

                  <div className="principle-step">
                    <h4>🚨 Step 4: Alert Generation and Output</h4>
                    <p>When threats are detected, structured alerts are generated:</p>
                    <ul>
                      <li><strong>Detection Logs</strong>: Detailed information with timestamps</li>
                      <li><strong>Attack Classification</strong>: Categories like SQLi/XSS/CMDi etc.</li>
                      <li><strong>Source Information</strong>: IP address, User-Agent etc.</li>
                      <li><strong>Attack Content</strong>: Actual payload and detection reason</li>
                    </ul>
                  </div>
                </div>

                <h3>Target Attack Pattern Examples</h3>
                <div className="attack-patterns">
                  <table className="attack-table">
                    <thead>
                      <tr>
                        <th>Attack Type</th>
                        <th>Severity</th>
                        <th>Detection Target</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>SQL Injection</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>Query Parameters</td>
                        <td><code>' OR '1'='1</code></td>
                      </tr>
                      <tr>
                        <td><strong>XSS</strong></td>
                        <td><span className="severity warning">Warning</span></td>
                        <td>Script Tags</td>
                        <td><code>&lt;script&gt;alert(1)&lt;/script&gt;</code></td>
                      </tr>
                      <tr>
                        <td><strong>Directory Traversal</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>Path Traversal</td>
                        <td><code>../../etc/passwd</code></td>
                      </tr>
                      <tr>
                        <td><strong>Command Injection</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>Command Execution</td>
                        <td><code>;cat /etc/passwd</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Environment Setup */}
              <section id="environment">
                <h2>3. Environment Setup - AWS EC2 Setup</h2>
                
                <h3>Recommended Environment Specifications</h3>
                <p>Recommended specifications for building an effective test environment:</p>
                
                <div className="requirement-table">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Recommended Value</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Instance Type</strong></td>
                        <td>t2.micro or higher</td>
                        <td>Works within free tier</td>
                      </tr>
                      <tr>
                        <td><strong>OS</strong></td>
                        <td>Ubuntu 22.04 LTS</td>
                        <td>Long-term support version</td>
                      </tr>
                      <tr>
                        <td><strong>Kernel</strong></td>
                        <td>5.8 or higher</td>
                        <td>Modern eBPF support</td>
                      </tr>
                      <tr>
                        <td><strong>Memory</strong></td>
                        <td>1GB or more</td>
                        <td>Minimum required for Falco operation</td>
                      </tr>
                      <tr>
                        <td><strong>Storage</strong></td>
                        <td>10GB or more</td>
                        <td>For log file storage (if needed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </section>

              {/* Installation */}
              <section id="installation">
                <h2>4. Installation - Easy One-liner Setup</h2>
                
                <h3>🚀 One-liner Installation</h3>
                <p>The easiest method is to use the official installation script:</p>
                
                <div className="code-block">
                  <div className="code-header">Basic Installation</div>
                  <pre><code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash</code></pre>
                </div>

                <h3>📋 Installation with Test Environment</h3>
                <p>To simultaneously set up sample sites for attack testing:</p>
                
                <div className="code-block">
                  <div className="code-header">Installation with Test Environment</div>
                  <pre><code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh \
  | sudo SETUP_TEST_CONTENT=yes bash</code></pre>
                </div>
                
                <div className="info-box">
                  <h4>💡 Processes Executed by Installation Script</h4>
                  <ol>
                    <li>Dependency resolution (jq, Nginx configuration check)</li>
                    <li>Falco installation (modern eBPF mode enabled)</li>
                    <li>falco-plugin-nginx binary placement</li>
                    <li>Detection rule file configuration</li>
                    <li>Falco configuration update</li>
                    <li>Service startup and enablement</li>
                  </ol>
                </div>

                <div className="warning-box">
                  <h4>⚠️ Installation Notes</h4>
                  <p>If permission errors or kernel version issues occur, check system updates and Falco dependencies. Also ensure to test functionality in the test environment after installation.</p>
                </div>
              </section>

              {/* Test Setup */}
              <section id="test-setup">
                <h2>5. Test Environment Setup</h2>
                
                <h3>Installation Startup Screen</h3>
                <p>When installation starts properly, the following screen will be displayed:</p>
                
                <div className="image-container">
                  <img src="/img/install-s.png" alt="Installation startup screen" className="blog-image" />
                  <p className="image-caption">falco-plugin-nginx installation startup screen</p>
                </div>

                <h3>Test Environment Setup</h3>
                <p>When installed with the SETUP_TEST_CONTENT=yes option, a sample site for attack testing is automatically built:</p>
                
                <div className="image-container">
                  <img src="/img/test-site.png" alt="Test site screen" className="blog-image" />
                  <p className="image-caption">Security testing dedicated site - provides test endpoints for various attack patterns</p>
                </div>

                <h3>Installation Completion and Test Preparation</h3>
                <p>When installation is complete, test methods are provided as the next step:</p>
                
                <div className="image-container">
                  <img src="/img/install-e.png" alt="Installation completion and test guide" className="blog-image" />
                  <p className="image-caption">Post-installation test method guidance - displays test commands for various attack patterns and Falco log monitoring methods</p>
                </div>
                
                <div className="info-box">
                  <h4>💡 Test Environment Features</h4>
                  <ul>
                    <li><strong>Dedicated Test Pages</strong>: Dedicated endpoints for each attack pattern</li>
                    <li><strong>URL Encoding Support</strong>: Testing in the same format as actual attacks</li>
                    <li><strong>Detection Confirmation Function</strong>: Real-time Falco alert verification</li>
                    <li><strong>Safe Environment</strong>: Isolated test-dedicated environment</li>
                  </ul>
                </div>
              </section>

              {/* Attack Tests */}
              <section id="attack-tests">
                <h2>6. Attack Pattern Verification</h2>
                
                <h3>Starting Real-time Monitoring</h3>
                <p>First, monitor Falco logs in real-time in a separate terminal:</p>
                
                <div className="code-block">
                  <div className="code-header">Falco Log Monitoring</div>
                  <pre><code>sudo journalctl -u falco-modern-bpf -f -o cat</code></pre>
                </div>

                <h3>Executing Attack Tests</h3>
                
                <div className="image-container">
                  <img src="/img/atack.png" alt="Attack test execution screen" className="blog-image" />
                  <p className="image-caption">Actual attack test execution and real-time detection</p>
                </div>

                <h4>1. SQL Injection Attack</h4>
                <div className="attack-demo">
                  <div className="code-block">
                    <div className="code-header">SQL Injection Attack Command</div>
                    <pre><code>curl "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"</code></pre>
                  </div>
                  
                  <div className="attack-explanation">
                    <p><strong>After URL decoding:</strong> <code>' OR '1'='1</code></p>
                    <p>This attack attempts to bypass authentication by making the logical condition of the SQL statement always true.</p>
                  </div>
                  
                  <div className="detection-result">
                    <div className="code-block">
                      <div className="code-header">Detection Log Example</div>
                      <pre><code><span className="log-critical">Critical [NGINX SQLi]</span> ip=127.0.0.1 method=GET path=/search.php qs=q=%27%20OR%20%271%27%3D%271 ua=curl/7.81.0 status=200</code></pre>
                    </div>
                  </div>
                </div>

                <h4>2. XSS Attack</h4>
                <div className="attack-demo">
                  <div className="code-block">
                    <div className="code-header">XSS Attack Command</div>
                    <pre><code>curl "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"</code></pre>
                  </div>
                  
                  <div className="attack-explanation">
                    <p><strong>After URL decoding:</strong> <code>&lt;script&gt;alert(1)&lt;/script&gt;</code></p>
                    <p>This is an attack that attempts to inject malicious JavaScript code into web pages.</p>
                  </div>
                  
                  <div className="detection-result">
                    <div className="code-block">
                      <div className="code-header">Detection Log Example</div>
                      <pre><code><span className="log-warning">Warning [NGINX XSS]</span> ip=127.0.0.1 method=GET path=/search.php qs=q=%3Cscript%3Ealert(1)%3C/script%3E ua=curl/7.81.0 status=200</code></pre>
                    </div>
                  </div>
                </div>

                <h3>Confirming Detection Results</h3>
                <p>You can confirm that all executed attack patterns have been detected:</p>
                
                <div className="image-container">
                  <img src="/img/detection.png" alt="Detection log screen" className="blog-image" />
                  <p className="image-caption">Detection logs of various attack patterns by Falco</p>
                </div>
              </section>

              {/* Custom Rules */}
              <section id="custom-rules">
                <h2>7. Custom Rule Creation</h2>
                
                <h3>Understanding Rule Structure</h3>
                <p>Falco rules consist of three elements:</p>
                
                <div className="rule-structure">
                  <div className="rule-item">
                    <h4>1. list</h4>
                    <p>Define values and patterns for detection targets</p>
                  </div>
                  <div className="rule-item">
                    <h4>2. macro</h4>
                    <p>Define condition combinations in a reusable form</p>
                  </div>
                  <div className="rule-item">
                    <h4>3. rule</h4>
                    <p>Define actual detection conditions and output</p>
                  </div>
                </div>

                <h3>Custom Rule Creation Example</h3>
                
                <h4>Detecting Unauthorized Access to Admin Pages</h4>
                <div className="code-block">
                  <div className="code-header">/etc/falco/rules.d/local_nginx_rules.yaml</div>
                  <pre><code>{`# List of admin paths
- list: admin_paths
  items: ["/admin", "/administrator", "/wp-admin", "/phpmyadmin"]

# List of allowed admin IPs
- list: admin_ips
  items: ["192.168.1.100", "10.0.1.50"]

# Macro to determine Nginx events
- macro: is_nginx_event
  condition: (evt.source = nginx)

# Rule to detect unauthorized admin access
- rule: NGINX Unauthorized Admin Access
  desc: Detect unauthorized access to admin pages
  condition: >
    is_nginx_event and 
    (nginx.path startswith "/admin" or nginx.path in (admin_paths)) and
    not (nginx.ip in (admin_ips))
  output: >
    [UNAUTHORIZED ADMIN ACCESS] Suspicious admin access detected
    (ip=%nginx.ip method=%nginx.method path=%nginx.path ua="%nginx.ua" 
     status=%nginx.status size=%nginx.size)
  priority: Critical
  tags: [nginx, web, unauthorized, admin]`}</code></pre>
                </div>

                <div className="validation-steps">
                  <h4>Rule Validation and Deployment</h4>
                  <div className="step-list">
                    <div className="step">
                      <h5>1. Syntax Check</h5>
                      <div className="code-block">
                        <pre><code>sudo falco --validate /etc/falco/rules.d/local_nginx_rules.yaml</code></pre>
                      </div>
                    </div>
                    
                    <div className="step">
                      <h5>2. Rule Application</h5>
                      <div className="code-block">
                        <pre><code>sudo systemctl restart falco-modern-bpf</code></pre>
                      </div>
                    </div>
                    
                    <div className="step">
                      <h5>3. Operation Verification</h5>
                      <div className="code-block">
                        <pre><code>curl "http://localhost/admin/" -H "User-Agent: testbot"</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2>8. Conclusion</h2>
                
                <h3>What We Achieved</h3>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <h4>✅ Environment Setup</h4>
                    <p>Built Falco + Nginx plugin operating environment on AWS EC2</p>
                  </div>
                  <div className="achievement-item">
                    <h4>✅ Attack Detection</h4>
                    <p>Demonstrated detection of SQLi, XSS, Directory Traversal, and Command Injection</p>
                  </div>
                  <div className="achievement-item">
                    <h4>✅ Rule Understanding</h4>
                    <p>Acquired detection logic and customization methods</p>
                  </div>
                </div>

                <h3>Security Improvement Effects</h3>
                <ul>
                  <li><strong>Enhanced Visibility</strong>: Real-time detection of previously invisible attack patterns</li>
                  <li><strong>Rapid Response</strong>: Minimized time lag from attack occurrence to detection</li>
                  <li><strong>Cost Efficiency</strong>: High-function security monitoring with open source</li>
                  <li><strong>Integration</strong>: Easy integration with existing monitoring and alert infrastructure</li>
                </ul>

              </section>

            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>A Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">GitHub Repository</Link></li>
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
            <p>&copy; 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const statsRefs = useRef([])
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Simple feedback - you could enhance this with a toast notification
      const button = document.querySelector('.copy-button')
      const originalText = button.textContent
      button.textContent = 'Copied!'
      setTimeout(() => {
        button.textContent = originalText
      }, 1000)
    })
  }

  useEffect(() => {
    // Particle animation
    const initParticles = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const particlesArray = []
      const numberOfParticles = 100
      
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.size = Math.random() * 3 + 1
          this.speedX = Math.random() * 3 - 1.5
          this.speedY = Math.random() * 3 - 1.5
          this.opacity = Math.random() * 0.5 + 0.2
        }
        
        update() {
          this.x += this.speedX
          this.y += this.speedY
          
          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width
          
          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        }
        
        draw() {
          ctx.fillStyle = `rgba(79, 70, 229, ${this.opacity})`
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particlesArray.forEach(particle => {
          particle.update()
          particle.draw()
        })
        requestAnimationFrame(animate)
      }
      
      animate()
      
      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }

    // Counter animation
    const animateCounter = () => {
      const counters = document.querySelectorAll('.stat-number')
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = parseInt(counter.getAttribute('data-target'))
            const increment = target / 50
            let current = 0
            
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              counter.textContent = Math.floor(current)
            }, 40)
            
            observer.unobserve(counter)
          }
        })
      }, { threshold: 0.7 })
      
      counters.forEach(counter => observer.observe(counter))
    }

    // Smooth scroll
    const initSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const targetId = this.getAttribute('href').substring(1)
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }

    // Navbar scroll effect
    const initNavbarScroll = () => {
      const navbar = document.querySelector('.navbar')
      
      const handleScroll = () => {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)'
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)'
          navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Scroll animation
    const initScrollAnimation = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)
      
      const animateElements = document.querySelectorAll('.scroll-fade-in')
      animateElements.forEach(el => observer.observe(el))
      
      return () => observer.disconnect()
    }

    const cleanupParticles = initParticles()
    const cleanupScrollAnimation = initScrollAnimation()
    animateCounter()
    initSmoothScroll()
    const cleanupNavbar = initNavbarScroll()

    return () => {
      if (cleanupNavbar) cleanupNavbar()
      if (cleanupParticles) cleanupParticles()
      if (cleanupScrollAnimation) cleanupScrollAnimation()
    }
  }, [])

  return (
    <>
      <Head>
        <title>falco-plugin-nginx - リアルタイムWebセキュリティ監視</title>
        <meta name="description" content="攻撃の兆候を鮮明に。Falco + Nginxログで攻撃を可視化。SQLi・XSS・パストラバーサル・DDoSなどの攻撃パターンを検知するプラグイン。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="falco-plugin-nginx - リアルタイムWebセキュリティ監視" />
        <meta property="og:description" content="NginxアクセスログをリアルタイムでFalcoが監視し、Webアプリケーションへの脅威を即座に検知。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <canvas ref={canvasRef} className="particle-canvas" />
      
      <div className="prototype-notice">
        <div className="notice-container">
          <span className="notice-icon">⚠️</span>
          <span className="notice-text">
            <strong>開発段階のお知らせ:</strong> falco-plugin-nginx は現在プロトタイプ公開段階です。開発更新・デバッグを高頻度で実施中のため、予期しない動作が発生する可能性があります。
          </span>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
            <span>FALCOYA</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#detection">Detection</a></li>
          </ul>
          <button className="search-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-glow"></div>
        <div className="hero-container">
          <div className="hero-left">
            <img src="/img/falcoya-logo-c.png" alt="FALCOYA" className="hero-logo floating" />
          </div>
          <div className="hero-content">
            <div className="hero-badge pulse">
              <span className="badge-icon">🛡️</span>
              <span className="badge-text">Falco Plugin for Nginx</span>
            </div>
            <h1>
              <span className="typing-text">攻撃の兆候を、鮮明に。</span>
              <br />
              <span className="subtitle typing-text-delay">Falco + Nginxログで、攻撃を可視化。</span>
            </h1>
            <p className="hero-description">
              falco-plugin-nginx は、リアルタイムでNginxアクセスログをFalcoで解析し、
              <br />
              <strong>SQLi・XSS・パストラバーサル・DDoS</strong> などの攻撃パターンを即時に検知するプラグインです。
            </p>
            <div className="hero-buttons">
              <a href="#installation" className="cta-button primary">
                <span className="cta-icon">▶️</span>
                <span className="cta-text">インストール</span>
              </a>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx" className="cta-button secondary">
                <span className="cta-icon">📁</span>
                <span className="cta-text">GitHub</span>
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item glass">
                <div className="stat-number" data-target="5">0</div>
                <div className="stat-label">種類の脅威検知</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-number" data-target="1">0</div>
                <div className="stat-label">コマンドでインストール</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-display">24X7</div>
                <div className="stat-label">監視</div>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-header">Falco Detection Example</div>
              <pre><code><span className="error">*** XSS Attack Detected ***</span>

<span className="key">Priority:</span> <span className="value">Warning</span>
<span className="key">Rule:</span> <span className="error">Nginx XSS Attack</span>

<span className="key">Time:</span> <span className="value">2024-08-11T10:30:45.123Z</span>
<span className="key">Source IP:</span> <span className="value">192.168.1.100</span>
<span className="key">Request:</span> <span className="value">GET /?q=&lt;script&gt;alert('xss')&lt;/script&gt;</span></code></pre>
            </div>
          </div>
        </div>
        <div className="hero-bg-circle"></div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>falco-plugin-nginxとは</h2>
          <ul className="about-list">
            <li><span className="bullet">•</span> <strong>Go言語</strong>で開発されたFalco用プラグイン</li>
            <li><span className="bullet">•</span> <strong>Nginx 1.14.0+</strong> のCombinedログフォーマットに対応</li>
            <li><span className="bullet">•</span> <strong>ローオーバーヘッド</strong>でリアルタイム監視を実現</li>
            <li><span className="bullet">•</span> <strong>Falco 0.36.0+</strong> と <strong>Linux x86_64</strong> で動作</li>
          </ul>
        </div>
      </section>

      <section id="detection" className="examples">
        <div className="container">
          <h2>脅威検知機能</h2>
          <div className="detection-overview">
            <p>falco-plugin-nginxは、4つのカテゴリ・10種類のセキュリティルールで包括的な脅威検知を実現します</p>
          </div>
          
          <div className="rule-categories">
            <div className="category-section">
              <h3 className="category-title">
                <span className="severity-badge critical">CRITICAL</span>
                セキュリティ攻撃検知ルール
              </h3>
              <div className="rule-grid">
                <div className="rule-card">
                  <div className="rule-header">
                    <h4>SQL Injection 攻撃検知</h4>
                    <span className="severity-indicator critical">🔴</span>
                  </div>
                  <p>悪意のあるSQL文の挿入を検知し、データベースへの不正アクセスを即座にブロック</p>
                  <div className="detection-patterns">
                    <strong>検知パターン例:</strong>
                    <ul>
                      <li><code>' OR 1=1</code> - 認証回避</li>
                      <li><code>UNION SELECT</code> - データ窃取</li>
                      <li><code>; DROP TABLE</code> - データ破壊</li>
                    </ul>
                  </div>
                </div>
                
                <div className="rule-card">
                  <div className="rule-header">
                    <h4>Command Injection 攻撃検知</h4>
                    <span className="severity-indicator critical">🔴</span>
                  </div>
                  <p>システムコマンドの不正実行を検知し、サーバー乗っ取りを防止</p>
                  <div className="detection-patterns">
                    <strong>検知パターン例:</strong>
                    <ul>
                      <li><code>;ls -la</code> - コマンド連結</li>
                      <li><code>|cat /etc/passwd</code> - パイプ実行</li>
                      <li><code>$(whoami)</code> - コマンド置換</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3 className="category-title">
                <span className="severity-badge warning">WARNING</span>
                Web攻撃検知ルール
              </h3>
              <div className="rule-grid">
                <div className="rule-card">
                  <div className="rule-header">
                    <h4>XSS 攻撃検知</h4>
                    <span className="severity-indicator warning">🟡</span>
                  </div>
                  <p>クロスサイトスクリプティング攻撃を検知し、悪意のあるスクリプト実行を防止</p>
                  <div className="detection-patterns">
                    <strong>検知パターン例:</strong>
                    <ul>
                      <li><code>&lt;script&gt;alert('xss')&lt;/script&gt;</code></li>
                      <li><code>javascript:void(0)</code></li>
                      <li><code>onerror="alert(1)"</code></li>
                    </ul>
                  </div>
                </div>

                <div className="rule-card">
                  <div className="rule-header">
                    <h4>Path Traversal 攻撃検知</h4>
                    <span className="severity-indicator warning">🟡</span>
                  </div>
                  <p>ディレクトリトラバーサル攻撃を検知し、意図しないファイルアクセスをブロック</p>
                  <div className="detection-patterns">
                    <strong>検知パターン例:</strong>
                    <ul>
                      <li><code>../../../etc/passwd</code></li>
                      <li><code>..\\..\\windows\\system32</code></li>
                      <li><code>/etc/shadow</code></li>
                    </ul>
                  </div>
                </div>

                <div className="rule-card">
                  <div className="rule-header">
                    <h4>機密ファイルアクセス検知</h4>
                    <span className="severity-indicator warning">🟡</span>
                  </div>
                  <p>重要な設定ファイルへの不正アクセスを監視し、情報漏洩を防止</p>
                  <div className="detection-patterns">
                    <strong>検知パターン例:</strong>
                    <ul>
                      <li><code>.env</code> - 環境変数ファイル</li>
                      <li><code>.git/config</code> - Git設定</li>
                      <li><code>wp-config.php</code> - WordPress設定</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3 className="category-title">
                <span className="severity-badge notice">NOTICE</span>
                偵察・認証攻撃検知ルール
              </h3>
              <div className="rule-grid">
                <div className="rule-card">
                  <div className="rule-header">
                    <h4>セキュリティスキャン検知</h4>
                    <span className="severity-indicator notice">🔵</span>
                  </div>
                  <p>攻撃前の偵察活動を検知し、事前に脅威を把握</p>
                  <div className="detection-patterns">
                    <strong>検知対象:</strong>
                    <ul>
                      <li>自動化ツールによる大量アクセス</li>
                      <li>脆弱性スキャナーの活動</li>
                      <li>システム情報の収集試行</li>
                    </ul>
                  </div>
                </div>

                <div className="rule-card">
                  <div className="rule-header">
                    <h4>ブルートフォース攻撃検知</h4>
                    <span className="severity-indicator notice">🔵</span>
                  </div>
                  <p>総当たり攻撃による認証突破の試みを検知</p>
                  <div className="detection-patterns">
                    <strong>検知対象:</strong>
                    <ul>
                      <li>連続した認証失敗</li>
                      <li>辞書攻撃パターン</li>
                      <li>異常なログイン試行</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3 className="category-title">
                <span className="severity-badge info">INFO</span>
                システム監視ルール
              </h3>
              <div className="rule-grid">
                <div className="rule-card">
                  <div className="rule-header">
                    <h4>システム異常状態監視</h4>
                    <span className="severity-indicator info">🟢</span>
                  </div>
                  <p>Webサーバーの異常な動作やエラー状態を監視し、システムの健全性を確保</p>
                  <div className="detection-patterns">
                    <strong>監視項目:</strong>
                    <ul>
                      <li>大量の4xx/5xxエラー</li>
                      <li>異常なレスポンス時間</li>
                      <li>リソース枯渇の兆候</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rules-footer">
            <a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/docs/NGINX_RULES_REFERENCE.md" 
               className="rules-detail-link" 
               target="_blank" 
               rel="noopener noreferrer">
              📚 詳細なルールリファレンスを見る
            </a>
          </div>
        </div>
      </section>

      <section id="installation" className="quick-start">
        <div className="container">
          <h2>インストール方法</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>ワンライナーインストール</h3>
              <div className="code-inline-container">
                <div className="code-inline">
                  <code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash</code>
                </div>
                <button 
                  className="copy-button"
                  onClick={() => copyToClipboard('curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash')}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Falcoを起動</h3>
              <div className="code-inline">
                <code>sudo systemctl start falco</code>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>ログで確認</h3>
              <div className="code-inline">
                <code>sudo journalctl -u falco -f</code>
              </div>
            </div>
          </div>
          
          <div className="installation-note">
            <h3>要件</h3>
            <ul>
              <li>Falco 0.36.0 以上</li>
              <li>Linux x86_64</li>
              <li>Nginx 1.14.0+ (Combined ログフォーマット)</li>
            </ul>
          </div>
          
          <div className="terminal-preview">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <pre><code>{`$ curl -sSL https://raw.githubusercontent.com/takaosgb3/\\
  falco-plugin-nginx/main/install.sh | sudo bash

✓ Downloading falco-plugin-nginx...
✓ Installing plugin to /usr/share/falco/plugins/
✓ Installing rules to /etc/falco/
✓ Configuring /etc/falco/falco.yaml

Installation completed successfully!`}</code></pre>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン</p>
            </div>
            <div className="footer-section">
              <h4>リンク</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">GitHubリポジトリ</a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">ドキュメント</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>ライセンス</h4>
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
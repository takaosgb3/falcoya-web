import Head from 'next/head'
import { useEffect, useRef } from 'react'

export default function Home() {
  const statsRefs = useRef([])

  useEffect(() => {
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

    animateCounter()
    initSmoothScroll()
    const cleanupNavbar = initNavbarScroll()

    return () => {
      if (cleanupNavbar) cleanupNavbar()
    }
  }, [])

  return (
    <>
      <Head>
        <title>falco-plugin-nginx - リアルタイムWebセキュリティ監視</title>
        <meta name="description" content="NginxアクセスログをリアルタイムでFalcoが監視。SQL injection、XSS、Directory traversalなどの脅威を即座に検知するオープンソースプラグイン。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="falco-plugin-nginx - リアルタイムWebセキュリティ監視" />
        <meta property="og:description" content="NginxアクセスログをリアルタイムでFalcoが監視し、Webアプリケーションへの脅威を即座に検知。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/img/flcoya-logo.png" alt="falco-plugin-nginx" />
            <span>falco-plugin-nginx</span>
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
        <div className="hero-container">
          <div className="hero-left">
            <img src="/img/flcoya-hero-120.png" alt="FALCOYA" className="hero-logo" />
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🛡️</span>
              <span className="badge-text">Falco Plugin for Nginx</span>
            </div>
            <h1>
              Real-time Web Security
              <br />
              <span className="subtitle">NginxアクセスログをFalcoでリアルタイム監視</span>
            </h1>
            <p className="hero-description">
              シンプルなワンライナーで<strong>簡単インストール</strong>。
              <br />
              SQL injection、XSS、Directory traversalなどの脅威を<strong>リアルタイムで検知</strong>し、Webアプリケーションを保護します。
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
              <div className="stat-item">
                <div className="stat-number" data-target="5">0</div>
                <div className="stat-label">種類の脅威検知</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="1">0</div>
                <div className="stat-label">コマンドでインストール</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="24">0</div>
                <div className="stat-label">7監視</div>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-header">falco-plugin-nginx</div>
              <pre><code><span className="comment"># ワンライナーインストール</span>
<span className="key">curl</span> <span className="value">-sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh</span> | sudo bash

<span className="comment"># Falcoで脅威検知開始</span>
<span className="key">sudo systemctl start falco</span>

<span className="error">*** XSS Attack Detected ***</span>
<span className="key">Priority:</span> <span className="value">Warning</span>
<span className="key">Rule:</span> <span className="error">Nginx XSS Attack</span></code></pre>
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
          <div className="example-cards">
            <div className="example-card">
              <h3>SQL Injection 検知</h3>
              <p>NginxアクセスログからSQL injection攻撃をリアルタイムで検知し、データベースへの不正アクセスを防止</p>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx#rules" className="link-button">ルール詳細</a>
            </div>
            <div className="example-card">
              <h3>XSS 攻撃検知</h3>
              <p>Cross-Site Scripting (XSS) 攻撃の試みをリアルタイム監視し、Webアプリケーションを保護</p>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx#rules" className="link-button">ルール詳細</a>
            </div>
            <div className="example-card">
              <h3>Directory Traversal 検知</h3>
              <p>パストラバーサル攻撃を検知し、意図しないファイルアクセスをブロック</p>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx#rules" className="link-button">ルール詳細</a>
            </div>
            <div className="example-card">
              <h3>Command Injection 検知</h3>
              <p>コマンドインジェクション攻撃を識別し、システム上での不正なコマンド実行を防止</p>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx#rules" className="link-button">ルール詳細</a>
            </div>
            <div className="example-card">
              <h3>Brute Force 攻撃検知</h3>
              <p>ブルートフォース攻撃やセキュリティスキャナーを識別し、不正アクセスを監視</p>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx#rules" className="link-button">ルール詳細</a>
            </div>
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
              <div className="code-inline">
                <code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash</code>
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
            <pre><code>$ curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash

✓ Downloading falco-plugin-nginx...
✓ Installing plugin to /usr/share/falco/plugins/
✓ Installing rules to /etc/falco/
✓ Configuring /etc/falco/falco.yaml

Installation completed successfully!</code></pre>
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
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/issues">問題報告</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>ライセンス</h4>
              <p>Apache License 2.0</p>
              <p>Open Source Software</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 falco-plugin-nginx. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}
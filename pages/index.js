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
        <title>FALCOYA - Falco + Nginxログで攻撃を可視化</title>
        <meta name="description" content="セキュリティ検知のノイズを削り、本物の脅威だけを残す。Falcoを使ったコンテナセキュリティの次世代スタンダード。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="FALCOYA - Falco + Nginxログで攻撃を可視化" />
        <meta property="og:description" content="セキュリティ検知のノイズを削り、本物の脅威だけを残す。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/img/flcoya-logo.png" alt="FALCOYA" />
            <span>FALCOYA</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#contact">Contact</a></li>
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
              <span className="badge-text">セキュリティオープンソースプロジェクト</span>
            </div>
            <h1>
              Craft more than detect.
              <br />
              <span className="subtitle">小さな調整で、大きく静かな安全を。</span>
            </h1>
            <p className="hero-description">
              セキュリティ検知の<strong>ノイズを削り</strong>、<strong>本物の脅威だけを残す</strong>。
              <br />
              Falcoを使ったコンテナセキュリティの次世代スタンダードを体験してください。
            </p>
            <div className="hero-buttons">
              <a href="#quick-start" className="cta-button primary">
                <span className="cta-icon">▶️</span>
                <span className="cta-text">Start now</span>
              </a>
              <a href="#examples" className="cta-button secondary">
                <span className="cta-icon">📈</span>
                <span className="cta-text">Proofを見る</span>
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number" data-target="98">0</div>
                <div className="stat-label">精度改善</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="3">0</div>
                <div className="stat-label">分で導入</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="24">0</div>
                <div className="stat-label">7無停止</div>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-header">falco-plugin-nginx</div>
              <pre><code><span className="comment"># XSS attack detected</span>
<span className="key">HostName:</span> <span className="value">Unexpected one request</span>
<span className="key">using method.:</span> <span className="value">GET method="/evil.js"</span>
<span className="key">Hostname:</span> <span className="value">falco-1</span>
<span className="key">Procname id:</span> <span className="value">falco&lt;?=f74d03f67</span>
<span className="key">Container-name:</span> <span className="value">web-nginx</span>
<span className="key">Rule:</span> <span className="error">XSS attempt</span></code></pre>
            </div>
          </div>
        </div>
        <div className="hero-bg-circle"></div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>このプロジェクトについて</h2>
          <ul className="about-list">
            <li><span className="bullet">•</span> Nginxログから攻撃を検知：SQL、XSS、Path Traversal各種</li>
            <li><span className="bullet">•</span> 攻撃警報をFalcoプラグインで検知</li>
            <li><span className="bullet">•</span> 簡単：プロトタイプ実装、多彩な警告</li>
          </ul>
        </div>
      </section>

      <section id="examples" className="examples">
        <div className="container">
          <h2>検知例</h2>
          <div className="example-cards">
            <div className="example-card">
              <h3>SQL Injection試行検知</h3>
              <p>悪意のあるSQLクエリを検出し、データベースへの不正アクセスを防ぎます</p>
              <a href="#" className="link-button">ルールを見る</a>
            </div>
            <div className="example-card">
              <h3>XSS攻撃試行検知</h3>
              <p>クロスサイトスクリプティング攻撃をリアルタイムで検知します</p>
              <a href="#" className="link-button">ルールを見る</a>
            </div>
            <div className="example-card">
              <h3>Path Traversal検知</h3>
              <p>ディレクトリトラバーサル攻撃による不正なファイルアクセスを防御します</p>
              <a href="#" className="link-button">ルールを見る</a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-start" className="quick-start">
        <div className="container">
          <h2>5分で試す</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>リポジトリをクローン</h3>
              <div className="code-inline">
                <code>git clone https://github.com/falcoya/falcoya</code>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Docker Composeで起動</h3>
              <div className="code-inline">
                <code>docker-compose up -d</code>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>攻撃シミュレーションとアラート確認</h3>
              <div className="code-inline">
                <code>curl http://localhost/test?id=&apos;OR&apos;1&apos;=&apos;1</code>
              </div>
            </div>
          </div>
          <div className="terminal-preview">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <pre><code>$ git clone https://github.com/falcoya/falcoya
Cloning into &apos;falcoya&apos;...

$ docker-compose up -d
Creating network &quot;falcoya_default&quot; with the default driver
Creating falcoya_nginx_1 ... done
Creating falcoya_falco_1 ... done</code></pre>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <p className="footer-text">セキュリティの未来を一緒に作りましょう</p>
          <a href="#" className="cta-button">お問い合わせ</a>
        </div>
      </footer>
    </>
  )
}
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function Home() {
  const statsRefs = useRef([])
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 多言語コンテンツデータ
  const content = {
    ja: {
      title: "falco-plugin-nginx - リアルタイムWebセキュリティ監視",
      description: "攻撃の兆候を鮮明に。Falco + Nginxログで攻撃を可視化。SQLi・XSS・パストラバーサル・DDoSなどの攻撃パターンを検知するプラグイン。",
      ogDescription: "NginxアクセスログをリアルタイムでFalcoが監視し、Webアプリケーションへの脅威を即座に検知。",
      nav: {
        github: "GitHub", 
        installation: "インストール",
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テスト"
      },
      hero: {
        badge: "Falco Plugin for Nginx",
        title1: "攻撃の兆候を、鮮明に。",
        title2: "Falco + Nginxログで、攻撃を可視化。",
        description: "falco-plugin-nginx は、リアルタイムでNginxアクセスログをFalcoで解析し、SQLi・XSS・パストラバーサル・DDoS などの攻撃パターンを即時に検知するプラグインです。",
        installButton: "インストール",
        githubButton: "GitHub",
        stats: {
          threats: "種類の脅威検知",
          install: "コマンドでインストール", 
          monitoring: "監視"
        }
      },
      prototypeNotice: "falco-plugin-nginx は現在プロトタイプ公開段階です。開発更新・デバッグを高頻度で実施中のため、予期しない動作が発生する可能性があります。",
      about: {
        title: "falco-plugin-nginxとは",
        items: [
          "Go言語で開発されたFalco用プラグイン",
          "Nginx 1.14.0+ のCombinedログフォーマットに対応",
          "ローオーバーヘッドでリアルタイム監視を実現",
          "Falco 0.36.0+ と Linux x86_64 で動作"
        ]
      },
      detection: {
        title: "脅威検知機能",
        overview: "falco-plugin-nginxは、4つのカテゴリ・10種類のセキュリティルールで包括的な脅威検知を実現します",
        codeHeader: "Falco 検知例",
        rulesFooter: "📚 詳細なルールリファレンスを見る",
        rulesLink: "https://github.com/takaosgb3/falco-plugin-nginx/blob/main/docs/NGINX_RULES_REFERENCE.md",
        categories: [
          {
            id: "critical",
            title: "セキュリティ攻撃検知ルール",
            severity: "CRITICAL",
            severityColor: "critical",
            rules: [
              {
                name: "SQL Injection 攻撃検知",
                indicator: "🔴",
                description: "悪意のあるSQL文の挿入を検知し、データベースへの不正アクセスを即座にブロック",
                patterns: {
                  title: "検知パターン例:",
                  items: [
                    { code: "' OR 1=1", desc: "認証回避" },
                    { code: "UNION SELECT", desc: "データ窃取" },
                    { code: "; DROP TABLE", desc: "データ破壊" }
                  ]
                }
              },
              {
                name: "Command Injection 攻撃検知", 
                indicator: "🔴",
                description: "システムコマンドの不正実行を検知し、サーバー乗っ取りを防止",
                patterns: {
                  title: "検知パターン例:",
                  items: [
                    { code: ";ls -la", desc: "コマンド連結" },
                    { code: "|cat /etc/passwd", desc: "パイプ実行" },
                    { code: "$(whoami)", desc: "コマンド置換" }
                  ]
                }
              }
            ]
          },
          {
            id: "warning",
            title: "Web攻撃検知ルール",
            severity: "WARNING", 
            severityColor: "warning",
            rules: [
              {
                name: "XSS 攻撃検知",
                indicator: "🟡",
                description: "クロスサイトスクリプティング攻撃を検知し、悪意のあるスクリプト実行を防止",
                patterns: {
                  title: "検知パターン例:",
                  items: [
                    { code: "<script>alert('xss')</script>", desc: "" },
                    { code: "javascript:void(0)", desc: "" },
                    { code: "onerror=\"alert(1)\"", desc: "" }
                  ]
                }
              },
              {
                name: "Path Traversal 攻撃検知",
                indicator: "🟡", 
                description: "ディレクトリトラバーサル攻撃を検知し、意図しないファイルアクセスをブロック",
                patterns: {
                  title: "検知パターン例:",
                  items: [
                    { code: "../../../etc/passwd", desc: "" },
                    { code: "..\\\\..\\\\windows\\\\system32", desc: "" },
                    { code: "/etc/shadow", desc: "" }
                  ]
                }
              },
              {
                name: "機密ファイルアクセス検知",
                indicator: "🟡",
                description: "重要な設定ファイルへの不正アクセスを監視し、情報漏洩を防止",
                patterns: {
                  title: "検知パターン例:",
                  items: [
                    { code: ".env", desc: "環境変数ファイル" },
                    { code: ".git/config", desc: "Git設定" },
                    { code: "wp-config.php", desc: "WordPress設定" }
                  ]
                }
              }
            ]
          },
          {
            id: "notice",
            title: "偵察・認証攻撃検知ルール",
            severity: "NOTICE",
            severityColor: "notice", 
            rules: [
              {
                name: "セキュリティスキャン検知",
                indicator: "🔵",
                description: "攻撃前の偵察活動を検知し、事前に脅威を把握",
                patterns: {
                  title: "検知対象:",
                  items: [
                    { code: "", desc: "自動化ツールによる大量アクセス" },
                    { code: "", desc: "脆弱性スキャナーの活動" },
                    { code: "", desc: "システム情報の収集試行" }
                  ]
                }
              },
              {
                name: "ブルートフォース攻撃検知",
                indicator: "🔵",
                description: "総当たり攻撃による認証突破の試みを検知",
                patterns: {
                  title: "検知対象:",
                  items: [
                    { code: "", desc: "連続した認証失敗" },
                    { code: "", desc: "辞書攻撃パターン" },
                    { code: "", desc: "異常なログイン試行" }
                  ]
                }
              }
            ]
          },
          {
            id: "info",
            title: "システム監視ルール", 
            severity: "INFO",
            severityColor: "info",
            rules: [
              {
                name: "システム異常状態監視",
                indicator: "🟢",
                description: "Webサーバーの異常な動作やエラー状態を監視し、システムの健全性を確保",
                patterns: {
                  title: "監視項目:",
                  items: [
                    { code: "", desc: "大量の4xx/5xxエラー" },
                    { code: "", desc: "異常なレスポンス時間" },
                    { code: "", desc: "リソース枯渇の兆候" }
                  ]
                }
              }
            ]
          }
        ]
      },
      installation: {
        title: "インストール方法",
        steps: [
          {
            number: "1",
            title: "ワンライナーインストール",
            command: "curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash"
          },
          {
            number: "2", 
            title: "Falcoを起動",
            command: "sudo systemctl start falco"
          },
          {
            number: "3",
            title: "ログで確認",
            command: "sudo journalctl -u falco -f"
          }
        ],
        requirements: {
          title: "要件",
          items: [
            "Falco 0.36.0 以上",
            "Linux x86_64",
            "Nginx 1.14.0+ (Combined ログフォーマット)"
          ]
        }
      },
      footer: {
        description: "Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン",
        links: "リンク",
        github: "GitHubリポジトリ",
        docs: "ドキュメント",
        license: "ライセンス",
        openSource: "オープンソースソフトウェア",
        copyright: "© 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0"
      }
    },
    en: {
      title: "falco-plugin-nginx - Real-time Web Security Monitoring",
      description: "Detect attack patterns clearly. Visualize attacks with Falco + Nginx logs. Plugin that detects SQLi, XSS, Path Traversal, DDoS and other attack patterns.",
      ogDescription: "Falco monitors Nginx access logs in real-time and instantly detects threats to web applications.",
      nav: {
        github: "GitHub",
        installation: "Installation", 
        detection: "Detection",
        blog: "Blog",
        news: "News",
        quality: "Testing"
      },
      hero: {
        badge: "Falco Plugin for Nginx",
        title1: "Detect attack signs, clearly.",
        title2: "Visualize attacks with Falco + Nginx logs.",
        description: "falco-plugin-nginx is a plugin that analyzes Nginx access logs with Falco in real-time and instantly detects attack patterns such as SQLi, XSS, Path Traversal, and DDoS.",
        installButton: "Install",
        githubButton: "GitHub",
        stats: {
          threats: "Threat Types Detected",
          install: "Command Install",
          monitoring: "Monitoring"
        }
      },
      prototypeNotice: "falco-plugin-nginx is currently in prototype release stage. High-frequency development updates and debugging are in progress, so unexpected behavior may occur.",
      about: {
        title: "About falco-plugin-nginx",
        items: [
          "Falco plugin developed in Go language",
          "Supports Nginx 1.14.0+ Combined log format",
          "Achieves real-time monitoring with low overhead",
          "Works with Falco 0.36.0+ and Linux x86_64"
        ]
      },
      detection: {
        title: "Threat Detection Features",
        overview: "falco-plugin-nginx provides comprehensive threat detection with 4 categories and 10 types of security rules",
        codeHeader: "Falco Detection Example",
        rulesFooter: "📚 View Detailed Rules Reference",
        rulesLink: "https://github.com/takaosgb3/falco-plugin-nginx/blob/main/docs/NGINX_RULES_REFERENCE.md",
        categories: [
          {
            id: "critical",
            title: "Security Attack Detection Rules",
            severity: "CRITICAL",
            severityColor: "critical",
            rules: [
              {
                name: "SQL Injection Attack Detection",
                indicator: "🔴",
                description: "Detects malicious SQL statement injection and instantly blocks unauthorized database access",
                patterns: {
                  title: "Detection Pattern Examples:",
                  items: [
                    { code: "' OR 1=1", desc: "Authentication bypass" },
                    { code: "UNION SELECT", desc: "Data extraction" },
                    { code: "; DROP TABLE", desc: "Data destruction" }
                  ]
                }
              },
              {
                name: "Command Injection Attack Detection", 
                indicator: "🔴",
                description: "Detects unauthorized system command execution and prevents server takeover",
                patterns: {
                  title: "Detection Pattern Examples:",
                  items: [
                    { code: ";ls -la", desc: "Command chaining" },
                    { code: "|cat /etc/passwd", desc: "Pipe execution" },
                    { code: "$(whoami)", desc: "Command substitution" }
                  ]
                }
              }
            ]
          },
          {
            id: "warning",
            title: "Web Attack Detection Rules",
            severity: "WARNING", 
            severityColor: "warning",
            rules: [
              {
                name: "XSS Attack Detection",
                indicator: "🟡",
                description: "Detects cross-site scripting attacks and prevents malicious script execution",
                patterns: {
                  title: "Detection Pattern Examples:",
                  items: [
                    { code: "<script>alert('xss')</script>", desc: "" },
                    { code: "javascript:void(0)", desc: "" },
                    { code: "onerror=\"alert(1)\"", desc: "" }
                  ]
                }
              },
              {
                name: "Path Traversal Attack Detection",
                indicator: "🟡", 
                description: "Detects directory traversal attacks and blocks unintended file access",
                patterns: {
                  title: "Detection Pattern Examples:",
                  items: [
                    { code: "../../../etc/passwd", desc: "" },
                    { code: "..\\\\..\\\\windows\\\\system32", desc: "" },
                    { code: "/etc/shadow", desc: "" }
                  ]
                }
              },
              {
                name: "Sensitive File Access Detection",
                indicator: "🟡",
                description: "Monitors unauthorized access to important configuration files and prevents information leakage",
                patterns: {
                  title: "Detection Pattern Examples:",
                  items: [
                    { code: ".env", desc: "Environment variable files" },
                    { code: ".git/config", desc: "Git configuration" },
                    { code: "wp-config.php", desc: "WordPress configuration" }
                  ]
                }
              }
            ]
          },
          {
            id: "notice",
            title: "Reconnaissance & Authentication Attack Detection Rules",
            severity: "NOTICE",
            severityColor: "notice", 
            rules: [
              {
                name: "Security Scan Detection",
                indicator: "🔵",
                description: "Detects reconnaissance activities before attacks and identifies threats in advance",
                patterns: {
                  title: "Detection Targets:",
                  items: [
                    { code: "", desc: "High-volume access by automated tools" },
                    { code: "", desc: "Vulnerability scanner activity" },
                    { code: "", desc: "System information gathering attempts" }
                  ]
                }
              },
              {
                name: "Brute Force Attack Detection",
                indicator: "🔵",
                description: "Detects brute force attempts to break through authentication",
                patterns: {
                  title: "Detection Targets:",
                  items: [
                    { code: "", desc: "Consecutive authentication failures" },
                    { code: "", desc: "Dictionary attack patterns" },
                    { code: "", desc: "Abnormal login attempts" }
                  ]
                }
              }
            ]
          },
          {
            id: "info",
            title: "System Monitoring Rules", 
            severity: "INFO",
            severityColor: "info",
            rules: [
              {
                name: "System Anomaly State Monitoring",
                indicator: "🟢",
                description: "Monitors abnormal web server behavior and error states to ensure system health",
                patterns: {
                  title: "Monitoring Items:",
                  items: [
                    { code: "", desc: "High volume of 4xx/5xx errors" },
                    { code: "", desc: "Abnormal response times" },
                    { code: "", desc: "Resource exhaustion signs" }
                  ]
                }
              }
            ]
          }
        ]
      },
      installation: {
        title: "Installation Guide",
        steps: [
          {
            number: "1",
            title: "One-liner Installation",
            command: "curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash"
          },
          {
            number: "2",
            title: "Start Falco",
            command: "sudo systemctl start falco"
          },
          {
            number: "3",
            title: "Check Logs",
            command: "sudo journalctl -u falco -f"
          }
        ],
        requirements: {
          title: "Requirements",
          items: [
            "Falco 0.36.0 or higher",
            "Linux x86_64",
            "Nginx 1.14.0+ (Combined log format)"
          ]
        }
      },
      footer: {
        description: "Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications",
        links: "Links",
        github: "GitHub Repository",
        docs: "Documentation",
        license: "License",
        openSource: "Open Source Software",
        copyright: "© 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0"
      }
    }
  }

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

  // 画面サイズ変更時にモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      // 画面幅に関わらず、リサイズ時は必ずメニューを閉じる
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    // 初回実行
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

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
            
            // Skip animation for non-numeric targets
            if (isNaN(target)) {
              observer.unobserve(counter)
              return
            }
            
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
        <title>{content[language].title}</title>
        <meta name="description" content={content[language].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={content[language].title} />
        <meta property="og:description" content={content[language].ogDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <canvas ref={canvasRef} className="particle-canvas" />
      
      <div className="prototype-notice">
        <div className="notice-container">
          <span className="notice-icon">⚠️</span>
          <span className="notice-text">
            <strong>{language === 'ja' ? '開発段階のお知らせ:' : 'Development Notice:'}</strong> {content[language].prototypeNotice}
          </span>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
            <span>FALCOYA</span>
          </div>
          
          {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* デスクトップメニュー */}
          <ul className="nav-menu desktop-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">{content[language].nav.github}</a></li>
            <li><a href="#installation">{content[language].nav.installation}</a></li>
            <li><a href="#detection">{content[language].nav.detection}</a></li>
            <li><a href="/blog">{content[language].nav.blog}</a></li>
            <li><a href="/news">{content[language].nav.news}</a></li>
            <li><a href="/quality">{content[language].nav.quality}</a></li>
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
        
        {/* モバイルメニュー */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.github}</a></li>
            <li><a href="#installation" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.installation}</a></li>
            <li><a href="#detection" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.detection}</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.blog}</a></li>
            <li><a href="/news" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.news}</a></li>
            <li><a href="/quality" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.quality}</a></li>
          </ul>
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
              <span className="badge-text">{content[language].hero.badge}</span>
            </div>
            <h1>
              <span className="typing-text">{content[language].hero.title1}</span>
              <br />
              <span className="subtitle typing-text-delay">{content[language].hero.title2}</span>
            </h1>
            <p className="hero-description">
              {content[language].hero.description}
            </p>
            <div className="hero-buttons">
              <a href="#installation" className="cta-button primary">
                <span className="cta-icon">▶️</span>
                <span className="cta-text">{content[language].hero.installButton}</span>
              </a>
              <a href="https://github.com/takaosgb3/falco-plugin-nginx" className="cta-button secondary">
                <span className="cta-icon">📁</span>
                <span className="cta-text">{content[language].hero.githubButton}</span>
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item glass">
                <div className="stat-number" data-target="5">0</div>
                <div className="stat-label">{content[language].hero.stats.threats}</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-number" data-target="1">0</div>
                <div className="stat-label">{content[language].hero.stats.install}</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-number" data-target="">24X7</div>
                <div className="stat-label">{content[language].hero.stats.monitoring}</div>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-header">{content[language].detection.codeHeader}</div>
              <div className="code-content">
                <div className="error">*** XSS Attack Detected ***</div>
                <div>&nbsp;</div>
                <div><span className="key">Priority:</span> <span className="value">Warning</span></div>
                <div><span className="key">Rule:</span> <span className="error">Nginx XSS Attack</span></div>
                <div>&nbsp;</div>
                <div><span className="key">Time:</span> <span className="value">2024-08-11T10:30:45.123Z</span></div>
                <div><span className="key">Source IP:</span> <span className="value">192.168.1.100</span></div>
                <div><span className="key">Request:</span> <span className="value">GET /?q=&lt;script&gt;alert('xss')&lt;/script&gt;</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-circle"></div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>{content[language].about.title}</h2>
          <ul className="about-list">
            {content[language].about.items.map((item, index) => (
              <li key={index}>
                <span className="bullet">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="detection" className="examples">
        <div className="container">
          <h2>{content[language].detection.title}</h2>
          <div className="detection-overview">
            <p>{content[language].detection.overview}</p>
          </div>
          
          <div className="rule-categories">
            {content[language].detection.categories.map((category) => (
              <div key={category.id} className="category-section">
                <h3 className="category-title">
                  <span className={`severity-badge ${category.severityColor}`}>{category.severity}</span>
                  {category.title}
                </h3>
                <div className="rule-grid">
                  {category.rules.map((rule, index) => (
                    <div key={index} className="rule-card">
                      <div className="rule-header">
                        <h4>{rule.name}</h4>
                        <span className={`severity-indicator ${category.severityColor}`}>{rule.indicator}</span>
                      </div>
                      <p>{rule.description}</p>
                      <div className="detection-patterns">
                        <strong>{rule.patterns.title}</strong>
                        <ul>
                          {rule.patterns.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              {item.code && <code>{item.code}</code>}
                              {item.desc && (item.code ? ` - ${item.desc}` : item.desc)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rules-footer">
            <a href={content[language].detection.rulesLink} 
               className="rules-detail-link" 
               target="_blank" 
               rel="noopener noreferrer">
              {content[language].detection.rulesFooter}
            </a>
          </div>
        </div>
      </section>

      <section id="installation" className="quick-start">
        <div className="container">
          <h2>{content[language].installation.title}</h2>
          <div className="steps">
            {content[language].installation.steps.map((step, index) => (
              <div key={index} className="step">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                {index === 0 ? (
                  <div className="code-block-with-copy">
                    <div className="code-inline">
                      <code>{step.command}</code>
                    </div>
                    <button 
                      className="copy-button"
                      onClick={() => copyToClipboard(step.command)}
                    >
                      Copy
                    </button>
                  </div>
                ) : (
                  <div className="code-inline">
                    <code>{step.command}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="installation-note">
            <h3>{content[language].installation.requirements.title}</h3>
            <ul>
              {content[language].installation.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
              <p>{content[language].footer.description}</p>
            </div>
            <div className="footer-section">
              <h4>{content[language].footer.links}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">{content[language].footer.github}</a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">{content[language].footer.docs}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{content[language].footer.license}</h4>
              <p>Apache License 2.0</p>
              <p>{content[language].footer.openSource}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{content[language].footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
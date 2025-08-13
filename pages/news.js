import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function News() {
  const [language, setLanguage] = useState('ja')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // ニュースデータ
  const newsData = {
    ja: {
      title: "ニュース & アップデート",
      description: "falco-plugin-nginx の最新情報、リリースノート、セキュリティアップデートをお届けします",
      categories: {
        all: "すべて",
        release: "リリース",
        security: "セキュリティ",
        feature: "新機能",
        bugfix: "バグ修正"
      },
      items: [
        {
          id: "2025-01-13-v1.0.0",
          date: "2025-01-13",
          category: "release",
          type: "major",
          title: "v1.0.0 正式リリース予定",
          content: "falco-plugin-nginx の正式版 v1.0.0 をリリース予定です。プロダクション環境での利用を想定した安定版となります。",
          highlights: [
            "パフォーマンスの大幅改善",
            "エンタープライズ向け機能の追加",
            "包括的なドキュメントの整備"
          ],
          link: null
        },
        {
          id: "2024-12-20-security-rules",
          date: "2024-12-20",
          category: "security",
          type: "important",
          title: "新しいセキュリティルールセットを追加",
          content: "最新の脅威に対応する5つの新しい検知ルールを追加しました。Log4Shell、Spring4Shell などの重要な脆弱性に対応。",
          highlights: [
            "Log4Shell (CVE-2021-44228) 検知ルール",
            "Spring4Shell (CVE-2022-22965) 検知ルール",
            "新しいSQLインジェクションパターン"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases"
        },
        {
          id: "2024-12-01-performance",
          date: "2024-12-01",
          category: "feature",
          type: "enhancement",
          title: "パフォーマンス最適化アップデート",
          content: "ログ処理速度を50%向上させる最適化を実装。大規模環境でのCPU使用率を30%削減。",
          highlights: [
            "並列処理の最適化",
            "メモリ使用量の削減",
            "リアルタイム処理の改善"
          ],
          link: null
        },
        {
          id: "2024-11-15-bugfix",
          date: "2024-11-15",
          category: "bugfix",
          type: "patch",
          title: "v0.9.5 バグ修正リリース",
          content: "特定の条件下でのfalse positiveを修正。IPv6アドレスのパース処理を改善。",
          highlights: [
            "IPv6アドレス処理の修正",
            "False positive率の低減",
            "ログローテーション対応の改善"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v0.9.5"
        },
        {
          id: "2024-11-01-aws-integration",
          date: "2024-11-01",
          category: "feature",
          type: "new",
          title: "AWS CloudWatch統合機能を追加",
          content: "検知アラートをAWS CloudWatchに直接送信する機能を追加。AWS環境でのモニタリングが容易に。",
          highlights: [
            "CloudWatch Logs統合",
            "CloudWatch Metrics対応",
            "SNS通知連携"
          ],
          link: null
        }
      ]
    },
    en: {
      title: "News & Updates",
      description: "Latest news, release notes, and security updates for falco-plugin-nginx",
      categories: {
        all: "All",
        release: "Release",
        security: "Security",
        feature: "Features",
        bugfix: "Bug Fixes"
      },
      items: [
        {
          id: "2025-01-13-v1.0.0",
          date: "2025-01-13",
          category: "release",
          type: "major",
          title: "v1.0.0 Official Release Coming Soon",
          content: "The official v1.0.0 release of falco-plugin-nginx is planned. This will be a stable version intended for production environments.",
          highlights: [
            "Major performance improvements",
            "Enterprise features added",
            "Comprehensive documentation"
          ],
          link: null
        },
        {
          id: "2024-12-20-security-rules",
          date: "2024-12-20",
          category: "security",
          type: "important",
          title: "New Security Ruleset Added",
          content: "Added 5 new detection rules to address latest threats. Covers critical vulnerabilities like Log4Shell and Spring4Shell.",
          highlights: [
            "Log4Shell (CVE-2021-44228) detection rule",
            "Spring4Shell (CVE-2022-22965) detection rule",
            "New SQL injection patterns"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases"
        },
        {
          id: "2024-12-01-performance",
          date: "2024-12-01",
          category: "feature",
          type: "enhancement",
          title: "Performance Optimization Update",
          content: "Implemented optimizations that improve log processing speed by 50%. Reduced CPU usage by 30% in large-scale environments.",
          highlights: [
            "Parallel processing optimization",
            "Memory usage reduction",
            "Real-time processing improvements"
          ],
          link: null
        },
        {
          id: "2024-11-15-bugfix",
          date: "2024-11-15",
          category: "bugfix",
          type: "patch",
          title: "v0.9.5 Bug Fix Release",
          content: "Fixed false positives under specific conditions. Improved IPv6 address parsing.",
          highlights: [
            "IPv6 address handling fix",
            "False positive rate reduction",
            "Log rotation support improvements"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v0.9.5"
        },
        {
          id: "2024-11-01-aws-integration",
          date: "2024-11-01",
          category: "feature",
          type: "new",
          title: "AWS CloudWatch Integration Added",
          content: "Added functionality to send detection alerts directly to AWS CloudWatch. Makes monitoring easier in AWS environments.",
          highlights: [
            "CloudWatch Logs integration",
            "CloudWatch Metrics support",
            "SNS notification integration"
          ],
          link: null
        }
      ]
    }
  }

  const content = newsData[language]

  // カテゴリ別フィルタリング
  const filteredNews = selectedCategory === 'all' 
    ? content.items 
    : content.items.filter(item => item.category === selectedCategory)

  // タイプ別のバッジカラー
  const getTypeColor = (type) => {
    switch(type) {
      case 'major': return 'type-major'
      case 'important': return 'type-important'
      case 'new': return 'type-new'
      case 'enhancement': return 'type-enhancement'
      case 'patch': return 'type-patch'
      default: return 'type-default'
    }
  }

  // カテゴリ別のアイコン
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'release': return '🚀'
      case 'security': return '🔐'
      case 'feature': return '✨'
      case 'bugfix': return '🐛'
      default: return '📢'
    }
  }

  // 日付フォーマット
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    if (language === 'ja') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }

  // 画面サイズ変更時にモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{content.title} - FALCOYA</title>
        <meta name="description" content={content.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
                <span>FALCOYA</span>
              </a>
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <ul className="nav-menu desktop-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><Link href="/#installation">Installation</Link></li>
            <li><Link href="/#detection">Detection</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/news" className="active">News</Link></li>
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
        
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>GitHub</a></li>
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>Installation</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>Detection</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>Blog</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)} className="active">News</a></Link></li>
          </ul>
        </div>
      </nav>

      <main className="news-container">
        <div className="news-header">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>

        <div className="news-filters">
          {Object.entries(content.categories).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="news-timeline">
          {filteredNews.map((item) => (
            <article key={item.id} className="news-item">
              <div className="news-date">
                <span className="date-text">{formatDate(item.date)}</span>
              </div>
              
              <div className="news-content">
                <div className="news-header-row">
                  <span className="category-icon">{getCategoryIcon(item.category)}</span>
                  <span className={`news-type ${getTypeColor(item.type)}`}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="news-category">
                    {content.categories[item.category]}
                  </span>
                </div>
                
                <h2 className="news-title">{item.title}</h2>
                <p className="news-description">{item.content}</p>
                
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="news-highlights">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                {item.link && (
                  <a 
                    href={item.link} 
                    className="news-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === 'ja' ? '詳細を見る →' : 'Learn more →'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>
                {language === 'ja' 
                  ? 'Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン'
                  : 'Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications'
                }
              </p>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'リンク' : 'Links'}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">
                  {language === 'ja' ? 'GitHubリポジトリ' : 'GitHub Repository'}
                </a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">
                  {language === 'ja' ? 'ドキュメント' : 'Documentation'}
                </a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'ライセンス' : 'License'}</h4>
              <p>Apache License 2.0</p>
              <p>{language === 'ja' ? 'オープンソースソフトウェア' : 'Open Source Software'}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .news-container {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 60px;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .news-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .news-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .news-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .news-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          border: 2px solid var(--border-color);
          border-radius: 25px;
          background: white;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          color: white;
          border-color: transparent;
        }

        .news-timeline {
          position: relative;
          padding-left: 40px;
        }

        .news-timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
        }

        .news-item {
          position: relative;
          margin-bottom: 40px;
          animation: slideInUp 0.6s ease;
        }

        .news-item::before {
          content: '';
          position: absolute;
          left: -36px;
          top: 8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--gradient-start);
        }

        .news-date {
          position: absolute;
          left: -160px;
          top: 5px;
          width: 100px;
          text-align: right;
        }

        .date-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .news-content {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }

        .news-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .category-icon {
          font-size: 1.5rem;
        }

        .news-type {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .type-major {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .type-important {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .type-new {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .type-enhancement {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: white;
        }

        .type-patch {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
        }

        .news-category {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .news-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .news-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .news-highlights {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .news-highlights li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 8px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .news-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--cyber-green);
          font-weight: bold;
        }

        .news-link {
          display: inline-block;
          margin-top: 10px;
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .news-link:hover {
          color: var(--gradient-start);
        }

        .nav-menu a.active,
        .mobile-nav-menu a.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .news-container {
            padding-top: 100px;
          }

          .news-header h1 {
            font-size: 2rem;
          }

          .news-header p {
            font-size: 1rem;
          }

          .news-timeline {
            padding-left: 30px;
          }

          .news-timeline::before {
            left: 4px;
          }

          .news-item::before {
            left: -30px;
            width: 12px;
            height: 12px;
          }

          .news-date {
            position: static;
            margin-bottom: 10px;
            text-align: left;
          }

          .news-content {
            padding: 20px;
          }

          .news-title {
            font-size: 1.25rem;
          }

          .filter-btn {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}
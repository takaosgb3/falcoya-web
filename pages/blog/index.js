import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/languageUtils'

const blogPosts = {
  ja: [
    {
      id: 'falco-plugin-development-days39-40',
      title: 'Day 39-40：予防策、そして失敗だらけのE2Eテスト初動',
      description: 'E2Eテストに備えた予防策と、赤ログの嵐に見舞われた初動テスト。5W1H分析で失敗を成長へ変えるFalcoya君の2日間。',
      date: '2025-08-18',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', '5W1H分析', '予防策'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days39-40'
    },
    {
      id: 'falco-plugin-development-e2e-strategy',
      title: '特別編：E2Eテスト前夜 — Falcoya君の作戦会議',
      description: 'E2Eテストという総合試験への挑戦。設計と仕様を詰める日々、テストの規模感、そしてOSSとしての決意。真のボス戦に挑む前夜の物語。',
      date: '2025-08-17',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'テスト設計', '品質保証'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-e2e-strategy'
    },
    {
      id: 'falco-plugin-development-days33-38',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目',
      description: 'CI/CD修羅場とクリティカル修正の一週間。不安・失敗・改善の連続、そしてついにCIが安定した瞬間の喜び。OSS開発の現実を物語形式で綴ります。',
      date: '2025-08-17',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'テスト', 'デバッグ'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days33-38'
    },
    {
      id: 'falco-plugin-development-days28-32',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目',
      description: 'OSSはコードだけじゃない、ポリシーと文化も育てる。プロジェクト方針の見直し、ドキュメントの重要性、そして信頼の構築について学んだ5日間。',
      date: '2025-08-17',
      readTime: '7分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'プロジェクト管理', 'ポリシー', '文化'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days28-32'
    },
    {
      id: 'falco-plugin-development-days23-27',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目',
      description: 'OSSの波に揉まれ、ドキュメントに救われた日々。プロジェクト管理の見直し、セキュリティ修正、コードレビューなど、地道だけど重要な5日間の記録。',
      date: '2025-08-16',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'プロジェクト管理', 'ドキュメント', 'セキュリティ'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days23-27'
    },
    {
      id: 'falco-plugin-development-days15-22',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目',
      description: '初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した8日間。CI/CDの安定化、検知ルールの精度調整、Dockerでの再現環境構築など、OSS開発の実態を物語形式で綴ります。',
      date: '2025-08-16',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'Docker', '検知ルール'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days15-22'
    },
    {
      id: 'falco-plugin-development-7days',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の7日間',
      description: 'FalcoでNginxログを解析し攻撃を検知するプラグインの開発過程。7日間の失敗と学びを包み隠さずお届けします。OSS開発の実態を物語形式で綴った開発記録。',
      date: '2025-08-16',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'Go言語', 'CI/CD', 'GitHub Actions'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-7days'
    },
    {
      id: 'falco-nginx-security-tutorial',
      title: 'Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2環境で試してみる',
      description: 'FalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法を、AWS EC2環境での実践を通じて詳しく解説します。SQLインジェクション、XSS、ディレクトリトラバーサルなどの攻撃パターンの検証からカスタムルールの作成まで包括的にカバーします。',
      date: '2025-08-11',
      readTime: '15分',
      tags: ['Falco', 'Nginx', 'セキュリティ', 'AWS', 'EC2', 'Web攻撃検知'],
      category: 'セキュリティ',
      slug: 'falco-nginx-security-tutorial'
    }
  ],
  en: [
    {
      id: 'falco-plugin-development-days39-40-en',
      title: 'Day 39-40: Preventive Measures and the Failed E2E Test Launch',
      description: 'Preventive measures for E2E testing and the initial test engulfed in red logs. Two days of turning failures into growth with 5W1H analysis.',
      date: '2025-08-18',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', '5W1H Analysis', 'Prevention'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days39-40-en'
    },
    {
      id: 'falco-plugin-development-e2e-strategy-en',
      title: "Special Edition: The Eve of E2E Testing — Falcoya's Strategy Meeting",
      description: 'The challenge of comprehensive E2E testing. Days of refining design and specifications, the scale of testing, and commitment as OSS. The story before challenging the true boss battle.',
      date: '2025-08-17',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Test Design', 'Quality Assurance'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-e2e-strategy-en'
    },
    {
      id: 'falco-plugin-development-days33-38-en',
      title: 'Falco + Nginx Plugin Development: Days 33-38 of Falcoya',
      description: 'A week of CI/CD struggles and critical fixes. Continuous anxiety, failures, and improvements, and finally the joy of stable CI. The reality of OSS development told in narrative form.',
      date: '2025-08-17',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Testing', 'Debugging'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days33-38-en'
    },
    {
      id: 'falco-plugin-development-days28-32-en',
      title: 'Falco + Nginx Plugin Development: Days 28-32 of Falcoya',
      description: 'OSS isn\'t just code, it\'s about cultivating policy and culture. Five days of learning about project direction review, the importance of documentation, and building trust.',
      date: '2025-08-17',
      readTime: '7 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Project Management', 'Policy', 'Culture'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days28-32-en'
    },
    {
      id: 'falco-plugin-development-days23-27-en',
      title: 'Falco + Nginx Plugin Development: Days 23-27 of Falcoya',
      description: 'Days tossed by OSS waves and saved by documentation. Project management review, security fixes, code reviews - 5 days of steady but important work.',
      date: '2025-08-16',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Project Management', 'Documentation', 'Security'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days23-27-en'
    },
    {
      id: 'falco-plugin-development-days15-22-en',
      title: 'Falco + Nginx Plugin Development: Days 15-22 of Falcoya',
      description: '8 days where the joy of first alerts coexisted with drowning in noise. CI/CD stabilization, detection rule tuning, Docker environment setup - an OSS development story told in narrative form.',
      date: '2025-08-16',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Docker', 'Detection Rules'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days15-22-en'
    },
    {
      id: 'falco-plugin-development-7days-en',
      title: 'Falco + Nginx Plugin Development: 7 Days of Falcoya',
      description: 'The development journey of creating a Falco plugin for Nginx log analysis and attack detection. An honest account of 7 days of failures and learnings in OSS development.',
      date: '2025-08-16',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Go', 'CI/CD', 'GitHub Actions'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-7days-en'
    },
    {
      id: 'falco-nginx-security-tutorial-en',
      title: 'Real-time Web Attack Detection with Falco + Nginx Plugin! Try it on AWS EC2',
      description: 'A comprehensive guide on detecting web application attacks in real-time using Falco and Nginx plugin through hands-on practice in AWS EC2 environment. Covers verification of attack patterns like SQL injection, XSS, directory traversal, and custom rule creation.',
      date: '2025-08-11', 
      readTime: '15 min',
      tags: ['Falco', 'Nginx', 'Security', 'AWS', 'EC2', 'Web Attack Detection'],
      category: 'Security',
      slug: 'falco-nginx-security-tutorial-en'
    }
  ]
}

export default function BlogIndex() {
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
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
  
  const content = {
    ja: {
      title: "FALCOYA ブログ",
      subtitle: "セキュリティ・技術情報を発信",
      description: "Webアプリケーションセキュリティ、Falco、リアルタイム脅威検知に関する実践的な技術情報とチュートリアルをお届けします。",
      readMore: "続きを読む",
      allPosts: "すべての記事",
      categories: "カテゴリー",
      recentPosts: "最新記事",
      tagCloud: "タグ",
      nav: {
        github: "GitHub",
        installation: "インストール",
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース"
      },
      categoryList: [
        { name: "OSS開発", count: 6 },
        { name: "セキュリティ", count: 1 }
      ],
      tags: ["Falco", "Nginx", "OSS開発", "CI/CD", "Docker", "テスト", "デバッグ", "プロジェクト管理", "ポリシー", "文化", "ドキュメント", "セキュリティ", "検知ルール", "Go言語", "GitHub Actions", "AWS", "EC2", "Web攻撃検知", "E2Eテスト", "テスト設計", "品質保証"]
    },
    en: {
      title: "FALCOYA Blog", 
      subtitle: "Security & Technical Insights",
      description: "Practical technical information and tutorials on web application security, Falco, and real-time threat detection.",
      readMore: "Read More",
      allPosts: "All Posts",
      categories: "Categories", 
      recentPosts: "Recent Posts",
      tagCloud: "Tags",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog",
        news: "News"
      },
      categoryList: [
        { name: "OSS Development", count: 6 },
        { name: "Security", count: 1 }
      ],
      tags: ["Falco", "Nginx", "OSS Development", "CI/CD", "Docker", "Testing", "Debugging", "Project Management", "Policy", "Culture", "Documentation", "Security", "Detection Rules", "Go", "GitHub Actions", "AWS", "EC2", "Web Attack Detection", "E2E Testing", "Test Design", "Quality Assurance"]
    }
  }

  return (
    <>
      <Head>
        <title>{content[language].title} - リアルタイムWebセキュリティ監視</title>
        <meta name="description" content={content[language].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
            </Link>
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
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">{content[language].nav.github}</Link></li>
            <li><Link href="/#installation">{content[language].nav.installation}</Link></li>
            <li><Link href="/#detection">{content[language].nav.detection}</Link></li>
            <li><Link href="/blog" className="active">{content[language].nav.blog}</Link></li>
            <li><Link href="/news">{content[language].nav.news}</Link></li>
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
            <li><a href="/#installation" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.installation}</a></li>
            <li><a href="/#detection" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.detection}</a></li>
            <li><a href="/blog" className="active" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.blog}</a></li>
            <li><a href="/news" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.news}</a></li>
          </ul>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <h1>{content[language].title}</h1>
            <p className="blog-subtitle">{content[language].subtitle}</p>
            <p className="blog-description">{content[language].description}</p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="blog-main">
        <div className="container">
          <div className="blog-grid">
            
            {/* Main Content */}
            <div className="blog-content">
              <h2>{content[language].recentPosts}</h2>
              
              <div className="blog-posts">
                {blogPosts[language].map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                      <span className="post-category">{post.category}</span>
                    </div>
                    
                    <h3 className="post-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="post-description">{post.description}</p>
                    
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="read-more-btn">
                      {content[language].readMore} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>{content[language].categories}</h3>
                <ul className="category-list">
                  {content[language].categoryList.map((category, index) => (
                    <li key={index}>
                      <a href={`#${category.name.toLowerCase()}`}>{category.name}</a> ({category.count})
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-widget">
                <h3>{content[language].tagCloud}</h3>
                <div className="tag-cloud">
                  {content[language].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>{language === 'ja' 
                ? 'Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン'
                : 'Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications'}
              </p>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'リンク' : 'Links'}</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">
                  {language === 'ja' ? 'GitHubリポジトリ' : 'GitHub Repository'}
                </Link></li>
                <li><Link href="/blog">{language === 'ja' ? 'ブログ' : 'Blog'}</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'ライセンス' : 'License'}</h4>
              <p>Apache License 2.0</p>
              <p>{language === 'ja' ? 'オープンソースソフトウェア' : 'Open Source Software'}</p>
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
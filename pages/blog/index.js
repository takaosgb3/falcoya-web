import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/languageUtils'

const blogPosts = {
  ja: [
    {
      id: 'falco-plugin-development-days62-67',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目',
      description: 'モグラ叩きから体系化へ、計画と現実のギャップ。場当たり的な修正を繰り返す日々から、体系的な品質管理へと進化した6日間の記録。',
      date: '2025-09-21',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'テスト戦略', '品質管理', '体系化', 'CI/CD'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days62-67'
    },
    {
      id: 'falco-plugin-development-days57-61',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目',
      description: '大規模攻撃検証とE2Eテストのデバッグ戦記。出力仕様変更による致命的な不具合を経験し、ドキュメント参照の重要性を痛感。失敗を財産に変える5日間の記録。',
      date: '2025-09-14',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'デバッグ', '攻撃検証', 'ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days57-61'
    },
    {
      id: 'falco-plugin-development-days51-56',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目',
      description: 'テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録。',
      date: '2025-09-07',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', '国際化', '攻撃検証', '統合ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days51-56'
    },
    {
      id: 'falco-plugin-development-days45-50',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目',
      description: 'テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。',
      date: '2025-08-30',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'HTMLレポート', 'XSS', 'テスト改善'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days45-50'
    },
    {
      id: 'falco-plugin-development-days39-44',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目',
      description: '失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力。PROBLEM_PATTERNS.mdに刻まれた6日間の教訓と、失敗を財産に変える文化の構築。',
      date: '2025-08-24',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'GitHub Actions', 'デバッグ', 'ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days39-44'
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
      id: 'falco-plugin-development-days62-67-en',
      title: 'Falco + Nginx Plugin Development: Days 62-67 of Falcoya',
      description: 'From whack-a-mole to systematization, the gap between planning and reality. A 6-day record of evolution from repetitive ad-hoc fixes to systematic quality management.',
      date: '2025-09-21',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Test Strategy', 'Quality Management', 'Systematization', 'CI/CD'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days62-67-en'
    },
    {
      id: 'falco-plugin-development-days57-61-en',
      title: 'Falco + Nginx Plugin Development: Falcoya Days 57-61',
      description: 'Large-scale attack verification and E2E test debugging chronicle. Experiencing critical issues from output specification changes, learning the importance of documentation. A 5-day record of turning failures into assets.',
      date: '2025-09-14',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Debugging', 'Attack Verification', 'Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days57-61-en'
    },
    {
      id: 'falco-plugin-development-days51-56-en',
      title: 'Falco + Nginx Plugin Development: Days 51-56 of Falcoya',
      description: 'Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency.',
      date: '2025-09-07',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Internationalization', 'Attack Verification', 'Integrated Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days51-56-en'
    },
    {
      id: 'falco-plugin-development-days45-50-en',
      title: 'Falco + Nginx Plugin Development: Days 45-50 of Falcoya',
      description: 'Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues.',
      date: '2025-08-30',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'HTML Reports', 'XSS', 'Test Improvements'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days45-50-en'
    },
    {
      id: 'falco-plugin-development-days39-44-en',
      title: 'Falco + Nginx Plugin Development: Days 39-44 of Falcoya',
      description: 'Recording failures and notes, learning the power of habits by breaking Runner. Six days of lessons carved into PROBLEM_PATTERNS.md and building a culture of turning failures into assets.',
      date: '2025-08-24',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'GitHub Actions', 'Debugging', 'Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days39-44-en'
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
        news: "ニュース",
        quality: "テストレポート"
      },
      categoryList: [
        { name: "OSS開発", count: 8 },
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
        news: "News",
        quality: "Test Report"
      },
      categoryList: [
        { name: "OSS Development", count: 8 },
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
            <li><Link href="/quality">{content[language].nav.quality}</Link></li>
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
            <li><a href="/quality" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.quality}</a></li>
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
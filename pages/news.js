import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function News() {
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // ニュースデータ
  const newsData = {
    ja: {
      title: "ニュース & アップデート",
      description: "falco-plugin-nginx の最新情報、リリースノート、セキュリティアップデートをお届けします",
      nav: {
        github: "GitHub",
        installation: "インストール",
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テストレポート"
      },
      categories: {
        all: "すべて",
        release: "リリース",
        security: "セキュリティ",
        feature: "新機能",
        bugfix: "バグ修正"
      },
      items: [
        {
          id: "2025-09-07-oss-development-blog-part8",
          date: "2025-09-07",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目」を公開",
          content: "テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録しました。",
          highlights: [
            "End-to-End テストレポート (Phase 1) の公開",
            "i18n（国際化対応）の実装",
            "攻撃検証の再挑戦と過検知調整",
            "37ルール・810+攻撃パターンへの大幅拡充",
            "統合ドキュメントの作成（37ルール・810+パターンの全容記録）",
            "OSSとしての透明性の実現"
          ],
          link: "/blog/falco-plugin-development-days51-56"
        },
        {
          id: "2025-08-30-e2e-test-report",
          date: "2025-08-30",
          category: "feature",
          type: "important",
          title: "End-to-End テストレポート (Phase 1) を公開",
          content: "falco-plugin-nginxのEnd-to-Endテストレポートを公開しました。14項目のテストで品質を可視化し、12件の攻撃検知成功と2件の未検知パターンを含む詳細な結果を提供しています。",
          highlights: [
            "14項目の包括的なE2Eテスト実施",
            "SQLインジェクション攻撃検知: 5件成功",
            "XSS攻撃検知: 7件成功",
            "未検知パターンの改善提案を含む",
            "日英両言語対応のインタラクティブレポート"
          ],
          link: "/quality"
        },
        {
          id: "2025-08-30-release-v1.3.0",
          date: "2025-08-30",
          category: "release",
          type: "important",
          title: "falco-plugin-nginx v1.3.0 リリース",
          content: "falco-plugin-nginx v1.3.0をリリースしました。安定性向上と新機能の追加により、Nginxのセキュリティ監視がさらに強化されました。",
          highlights: [
            "パフォーマンスの最適化",
            "検知ルールの改善",
            "インストールプロセスの簡素化",
            "Linux x86_64対応バイナリ提供"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v1.3.0"
        },
        {
          id: "2025-08-30-oss-development-blog-part7",
          date: "2025-08-30",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目」を公開",
          content: "テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録しました。",
          highlights: [
            "E2Eテストの観測点強化",
            "HTMLレポートの不具合修正",
            "攻撃トラフィック検証の準備",
            "XSSサンプル表示問題への対処",
            "失敗の記録と資産化の継続"
          ],
          link: "/blog/falco-plugin-development-days45-50"
        },
        {
          id: "2025-08-24-oss-development-blog-part6",
          date: "2025-08-24",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目」を公開",
          content: "失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力。PROBLEM_PATTERNS.mdに刻まれた6日間の教訓と、失敗を財産に変える文化の構築を物語形式で綴りました。",
          highlights: [
            "CI/CDの失敗パターン整理と文書化",
            "E2Eテストにおける出力消失問題の調査",
            "証拠収集の仕組み導入",
            "Self-hosted Runner破壊の教訓",
            "失敗を財産に変える文化"
          ],
          link: "/blog/falco-plugin-development-days39-44"
        },
        {
          id: "2025-08-17-oss-development-blog-special",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "特別編「E2Eテスト前夜 — Falcoya君の作戦会議」を公開",
          content: "E2Eテストという総合試験への挑戦を前に、設計と仕様を詰める日々、テストの規模感、そしてOSSとしての決意を綴った特別編を公開しました。これから始まる真のボス戦への準備と覚悟の物語です。",
          highlights: [
            "E2Eテスト設計の詳細",
            "200〜1,200件のテストケース規模",
            "KPI目標と品質保証への決意"
          ],
          link: "/blog/falco-plugin-development-e2e-strategy"
        },
        {
          id: "2025-08-17-oss-development-blog-part5",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目」を公開",
          content: "公開の感動とOSSの洗礼、そして次なる試練を綴った記録を公開しました。falcoya.dev公開の誕生日、CI/CD修羅場を乗り越え、E2Eテストという新たな山へ。OSS開発の現実を物語形式で綴っています。",
          highlights: [
            "falcoya.dev公開とプロトタイプリリース",
            "公開の感動とOSSの洗礼",
            "CI/CDパイプラインの根本的修正",
            "次なる試練：E2Eテストへの挑戦",
            "失敗を資産に変える記録の重要性"
          ],
          link: "/blog/falco-plugin-development-days33-38"
        },
        {
          id: "2025-08-17-oss-development-blog-part4",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目」を公開",
          content: "OSSはコードだけじゃない、ポリシーと文化も育てる5日間の記録を公開しました。プロジェクト方針の見直し、ドキュメントの重要性、そして信頼の構築について、物語形式で綴っています。",
          highlights: [
            "プロジェクト方針とMVPの明確化",
            "ドキュメントがもたらす時間を超えた価値",
            "ポリシー策定と文化の形成",
            "OSSにおける信頼の積み上げ",
            "コードを超えた価値の創造"
          ],
          link: "/blog/falco-plugin-development-days28-32"
        },
        {
          id: "2025-08-16-oss-development-blog-part3",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目」を公開",
          content: "OSSの波に揉まれ、ドキュメントに救われた5日間の記録を公開しました。プロジェクト管理の見直し、セキュリティ修正、コードレビューなど、地道だけど重要な作業の実態を物語形式で綴っています。",
          highlights: [
            "プロジェクト管理ドキュメントの整備",
            "CI/CDの権限設定とセキュリティ強化",
            "テストケースの網羅性向上",
            "コードレビューとドキュメント再編",
            "OSSマラソンの継続戦略"
          ],
          link: "/blog/falco-plugin-development-days23-27"
        },
        {
          id: "2025-08-16-oss-development-blog-part2",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目」を公開",
          content: "初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した8日間の開発記録を公開しました。CI/CDの安定化、検知ルールの精度調整、Dockerでの再現環境構築など、OSS開発の実態を物語形式で綴っています。",
          highlights: [
            "初めてのFalcoアラート発生の瞬間",
            "ノイズ祭りから精度調整への道のり",
            "Nginxログの多様性との格闘",
            "Docker再現環境の構築と罠",
            "Phase 1完了までの試行錯誤"
          ],
          link: "/blog/falco-plugin-development-days15-22"
        },
        {
          id: "2025-08-16-oss-development-blog",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の7日間」を公開",
          content: "FalcoでNginxログを解析し攻撃を検知するプラグインの開発過程を、7日間の失敗と学びを包み隠さずお届けする開発記録を公開しました。OSS開発の実態を物語形式で綴っています。",
          highlights: [
            "Docker環境構築とCI/CDの苦労話",
            "Go言語とFalco SDKの統合課題",
            "GitHub Actionsの無限ループ事件",
            "絵文字によるAPI通信エラーの教訓",
            "OSSプロジェクトの運用ノウハウ"
          ],
          link: "/blog/falco-plugin-development-7days"
        },
        {
          id: "2025-08-11-blog-post",
          date: "2025-08-11",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！」を公開",
          content: "AWS EC2環境でFalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法について、実践的なチュートリアル記事を公開しました。",
          highlights: [
            "AWS EC2環境でのセットアップ手順",
            "SQLインジェクション、XSS、ディレクトリトラバーサルの検証",
            "カスタムルールの作成方法",
            "実際の攻撃シミュレーション例"
          ],
          link: "/blog/falco-nginx-security-tutorial"
        },
        {
          id: "2025-08-11-website-launch",
          date: "2025-08-11",
          category: "release",
          type: "major",
          title: "FALCOYA Webサイトを公開しました",
          content: "falco-plugin-nginxの公式Webサイト falcoya.dev を公開しました。NginxアクセスログをFalcoで解析し、SQL InjectionやXSSなどの攻撃パターンを検知するプラグインです。",
          highlights: [
            "プロジェクト概要とドキュメント",
            "インストールガイド",
            "セキュリティ検知ルールの詳細",
            "技術ブログの公開"
          ],
          link: "/"
        }
      ]
    },
    en: {
      title: "News & Updates",
      description: "Latest news, release notes, and security updates for falco-plugin-nginx",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog",
        news: "News",
        quality: "Test Report"
      },
      categories: {
        all: "All",
        release: "Release",
        security: "Security",
        feature: "Features",
        bugfix: "Bug Fixes"
      },
      items: [
        {
          id: "2025-09-07-oss-development-blog-part8-en",
          date: "2025-09-07",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 51-56 of Falcoya\" Published",
          content: "Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency.",
          highlights: [
            "End-to-End Test Report (Phase 1) publication",
            "i18n (internationalization) implementation",
            "Attack verification re-challenge and false positive adjustment",
            "Massive expansion to 37 rules and 810+ attack patterns",
            "Creation of integrated documentation (complete record of 37 rules and 810+ patterns)",
            "Achieving OSS transparency"
          ],
          link: "/blog/falco-plugin-development-days51-56-en"
        },
        {
          id: "2025-08-30-e2e-test-report",
          date: "2025-08-30",
          category: "feature",
          type: "important",
          title: "End-to-End Test Report (Phase 1) Released",
          content: "Released the End-to-End test report for falco-plugin-nginx. Quality is visualized through 14 test items, providing detailed results including 12 successful attack detections and 2 undetected patterns.",
          highlights: [
            "14 comprehensive E2E test items",
            "SQL injection attack detection: 5 successful",
            "XSS attack detection: 7 successful",
            "Includes improvement suggestions for undetected patterns",
            "Interactive report in both Japanese and English"
          ],
          link: "/quality"
        },
        {
          id: "2025-08-30-release-v1.3.0",
          date: "2025-08-30",
          category: "release",
          type: "important",
          title: "falco-plugin-nginx v1.3.0 Released",
          content: "falco-plugin-nginx v1.3.0 has been released. Enhanced stability and new features strengthen Nginx security monitoring capabilities.",
          highlights: [
            "Performance optimizations",
            "Improved detection rules",
            "Simplified installation process",
            "Linux x86_64 binary support"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v1.3.0"
        },
        {
          id: "2025-08-30-oss-development-blog-part7",
          date: "2025-08-30",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 45-50 of Falcoya\" Published",
          content: "Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues.",
          highlights: [
            "E2E test observation point enhancement",
            "HTML report bug fixes",
            "Attack traffic verification preparation",
            "Addressing XSS sample display issues",
            "Continuing failure documentation and asset creation"
          ],
          link: "/blog/falco-plugin-development-days45-50-en"
        },
        {
          id: "2025-08-24-oss-development-blog-part6",
          date: "2025-08-24",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 39-44 of Falcoya\" Published",
          content: "Recording failures and notes, learning the power of habits by breaking Runner. Six days of lessons carved into PROBLEM_PATTERNS.md and building a culture of turning failures into assets, told in narrative form.",
          highlights: [
            "Organizing and documenting CI/CD failure patterns",
            "Investigating output loss issues in E2E testing",
            "Introducing evidence collection mechanisms",
            "Lessons from Self-hosted Runner destruction",
            "Culture of turning failures into assets"
          ],
          link: "/blog/falco-plugin-development-days39-44-en"
        },
        {
          id: "2025-08-17-oss-development-blog-special",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Special Edition \"The Eve of E2E Testing — Falcoya's Strategy Meeting\" Published",
          content: "Published a special edition chronicling the days of refining design and specifications, the scale of testing, and commitment as OSS before challenging the comprehensive E2E testing. A story of preparation and determination for the true boss battle about to begin.",
          highlights: [
            "Detailed E2E test design",
            "200-1,200 test case scale",
            "KPI targets and commitment to quality assurance"
          ],
          link: "/blog/falco-plugin-development-e2e-strategy-en"
        },
        {
          id: "2025-08-17-oss-development-blog-part5",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 33-38 of Falcoya\" Published",
          content: "Published a record of the emotion of going public and the baptism of OSS, then the next trial. The birthday of falcoya.dev's launch, overcoming CI/CD struggles, and heading toward the new mountain of E2E testing. The reality of OSS development told in narrative form.",
          highlights: [
            "Publishing falcoya.dev and prototype release",
            "The emotion of going public and OSS baptism",
            "Fundamental fixes to CI/CD pipeline",
            "Next trial: Challenging E2E testing",
            "The importance of turning failures into assets through documentation"
          ],
          link: "/blog/falco-plugin-development-days33-38-en"
        },
        {
          id: "2025-08-17-oss-development-blog-part4",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 28-32 of Falcoya\" Published",
          content: "OSS isn't just code, it's about cultivating policy and culture. Published a 5-day record exploring project direction review, the importance of documentation, and building trust, all told in narrative form.",
          highlights: [
            "Project direction and MVP clarification",
            "The timeless value documentation brings",
            "Policy creation and culture formation",
            "Building trust in OSS",
            "Creating value beyond code"
          ],
          link: "/blog/falco-plugin-development-days28-32-en"
        },
        {
          id: "2025-08-16-oss-development-blog-part3",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 23-27 of Falcoya\" Published",
          content: "5 days tossed by OSS waves and saved by documentation. A narrative of project management review, security fixes, code reviews, and other steady but important work in OSS development.",
          highlights: [
            "Project management documentation organization",
            "CI/CD permission settings and security hardening",
            "Test case coverage improvement",
            "Code review and documentation reorganization",
            "OSS marathon continuation strategy"
          ],
          link: "/blog/falco-plugin-development-days23-27-en"
        },
        {
          id: "2025-08-16-oss-development-blog-part2",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 15-22 of Falcoya\" Published",
          content: "8 days where the joy of first alerts coexisted with drowning in noise. CI/CD stabilization, detection rule tuning, Docker environment setup, and more - an OSS development story told in narrative form.",
          highlights: [
            "The moment of the first Falco alert",
            "Journey from noise festival to precision tuning",
            "Wrestling with Nginx log diversity",
            "Docker reproduction environment setup and traps",
            "Trial and error until Phase 1 completion"
          ],
          link: "/blog/falco-plugin-development-days15-22-en"
        },
        {
          id: "2025-08-16-oss-development-blog",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: 7 Days of Falcoya\" Published",
          content: "A development diary detailing the process of creating a Falco plugin for Nginx log analysis and attack detection, sharing 7 days of failures and learnings in OSS development through a narrative format.",
          highlights: [
            "Docker environment setup and CI/CD challenges",
            "Go language and Falco SDK integration issues",
            "GitHub Actions infinite loop incident",
            "Lessons from emoji-caused API communication errors",
            "OSS project operation know-how"
          ],
          link: "/blog/falco-plugin-development-7days-en"
        },
        {
          id: "2025-08-11-blog-post",
          date: "2025-08-11",
          category: "feature",
          type: "new",
          title: "Blog Post \"Real-time Web Attack Detection with Falco + Nginx Plugin!\" Published",
          content: "A practical tutorial article on detecting web application attacks in real-time using Falco and Nginx plugin in AWS EC2 environment has been published.",
          highlights: [
            "Setup instructions in AWS EC2 environment",
            "Verification of SQL injection, XSS, and directory traversal",
            "Custom rule creation methods",
            "Real attack simulation examples"
          ],
          link: "/blog/falco-nginx-security-tutorial-en"
        },
        {
          id: "2025-08-11-website-launch",
          date: "2025-08-11",
          category: "release",
          type: "major",
          title: "FALCOYA Website Launched",
          content: "The official website for falco-plugin-nginx, falcoya.dev, has been launched. The plugin analyzes Nginx access logs with Falco to detect attack patterns such as SQL Injection and XSS.",
          highlights: [
            "Project overview and documentation",
            "Installation guide",
            "Security detection rules details",
            "Technical blog publication"
          ],
          link: "/"
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
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">{content.nav.github}</a></li>
            <li><Link href="/#installation">{content.nav.installation}</Link></li>
            <li><Link href="/#detection">{content.nav.detection}</Link></li>
            <li><Link href="/blog">{content.nav.blog}</Link></li>
            <li><Link href="/news" className="active">{content.nav.news}</Link></li>
            <li><Link href="/quality">{content.nav.quality}</Link></li>
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
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{content.nav.github}</a></li>
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)} className="active">{content.nav.news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      <main className="news-container">
        <div className="container">
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
          {filteredNews.length === 0 ? (
            <div className="no-news">
              <p>{language === 'ja' ? '現在、お知らせはありません。' : 'No news available at this time.'}</p>
            </div>
          ) : (
            filteredNews.map((item) => (
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
                  
                  <h2 className="news-title">
                    {item.link ? (
                      item.link.startsWith('http') ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="title-link"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link href={item.link}>
                          <a className="title-link">{item.title}</a>
                        </Link>
                      )
                    ) : (
                      item.title
                    )}
                  </h2>
                  <p className="news-description">{item.content}</p>
                  
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="news-highlights">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {item.link && (
                    item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        className="news-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === 'ja' ? '詳細を見る →' : 'Learn more →'}
                      </a>
                    ) : (
                      <Link href={item.link}>
                        <a className="news-link">
                          {language === 'ja' ? '詳細を見る →' : 'Learn more →'}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </article>
            ))
          )}
        </div>
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
        .no-news {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .news-container {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 60px;
          background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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

        .title-link {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .title-link:hover {
          color: var(--primary-blue);
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
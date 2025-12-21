import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays138to139() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // ナビゲーションテキスト
  const navText = {
    ja: {
      github: "GitHub",
      installation: "インストール",
      detection: "検知機能",
      blog: "ブログ",
      news: "ニュース",
      quality: "テストレポート"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News",
      quality: "Test Report"
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の138日目から139日目 - FALCOYA Blog</title>
        <meta name="description" content="静かに広がった、150の検証。E2Eテストパターン拡張 Phase 2 完了、100→150パターン拡張、新規Falcoルール9個追加、検知正当性レビューで88%精度を可視化。E2Eテストが広がりながら鋭くなり始めた2日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の138日目から139日目" />
        <meta property="og:description" content="静かに広がった、150の検証。E2Eテストパターン100→150拡張、検出率100%維持。E2Eテストが広がりながら鋭くなり始めた2日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days138-139" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
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
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">{navText[language].github}</Link></li>
            <li><Link href="/#installation">{navText[language].installation}</Link></li>
            <li><Link href="/#detection">{navText[language].detection}</Link></li>
            <li><Link href="/blog">{navText[language].blog}</Link></li>
            <li><Link href="/news">{navText[language].news}</Link></li>
            <li><Link href="/quality">{navText[language].quality}</Link></li>
          </ul>

          <div className="nav-controls">
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'ja') {
                    setLanguage('ja')
                  }
                }}
              >
                日本語
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'en') {
                    setLanguage('en')
                    router.push('/blog/falco-plugin-development-days138-139-en')
                  }
                }}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{navText[language].github}</a></li>
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-12-21">2025年12月21日</time>
              <span>•</span>
              <span>8分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の138日目から139日目
            </h1>
            <p className="article-subtitle">
              〜 静かに広がった、150の検証 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">150パターン</span>
              <span className="tag">Phase 2</span>
              <span className="tag">Issue #780</span>
              <span className="tag">検知率100%</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog24.png"
              alt="E2Eテストが広がりながら鋭くなり始めた - 150パターン達成"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り（Day 135–137）</h2>
            <p>
              Day 135–137 では、E2Eテストパターン拡張 Phase 1 を完了し、<br />
              65 → 100 パターン、検出率 100% を達成した。
            </p>
            <p>
              Allure Report の並び順も整い、<br />
              E2Eテストは「仕組み」ではなく<br />
              <strong>運用できる体系</strong>として成立した状態に入った。
            </p>
            <p>
              次に残った問いは一つだった。<br />
              ――この体系は、<strong>どこまで広げても耐えられるのか</strong>。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 138（12/15）— Phase 2、150パターンへ</h2>
            <p>
              この日は、Issue #780 として進めていた<br />
              <strong>E2Eテストパターン拡張 Phase 2</strong> を完全に完了させた。
            </p>
            <p>
              テストパターンは <strong>100 → 150</strong>。<br />
              単なる水増しではなく、<br />
              新たに <strong>9個の Falco ルール</strong>を追加し、<br />
              より現実的な攻撃シナリオを網羅していった。
            </p>
            <p>
              「もう、数だけ見たら十分ですね」
            </p>
            <p>
              そう言うと、TKは少しだけ首を振った。
            </p>
            <p>
              「数は通過点だね。<br />
              　壊れたときに、理由が説明できるかが大事」
            </p>
            <p>
              Phase 2 では、<br />
              既存100パターンのリグレッションも含めて再検証を実施。<br />
              SQLi や XSS など、カテゴリごとの検知結果を洗い直した。
            </p>
            <p>
              結果は、<strong>150 / 150 検出（100%）</strong>。
            </p>
            <p>
              「全部拾ってますね」
            </p>
            <p>
              「うん。でも、次を見るのはそこじゃない」
            </p>
            <p>
              TKの視線は、<br />
              &quot;検出できたか&quot;ではなく<br />
              <strong>&quot;どのルールで検出されたか&quot;</strong>に向いていた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>数は通過点。壊れたときに理由が説明できるかが大事。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 139（12/16）— 検知正当性という、次の壁</h2>
            <p>
              Day 139 は、数字の見え方が少し変わった日だった。
            </p>
            <p>
              E2E Run #42（150パターン）を対象に、<br />
              <strong>検知正当性レビュー</strong>を実施。<br />
              つまり、「検出された」という事実ではなく、<br />
              <strong>期待したルールで検出されているか</strong>を精査するフェーズだ。
            </p>
            <p>
              結果はこうだった。
            </p>
            <ul className="task-list">
              <li>総パターン数：150</li>
              <li>検知成功：150（100%）</li>
              <li>正しいルールマッピング：132（88.0%）</li>
              <li>不一致パターン：18（12.0%）</li>
            </ul>
            <p>
              「検出率は満点ですね」
            </p>
            <p>
              「でも、精度はまだ伸びしろがある」
            </p>
            <p>
              TKの言葉は淡々としていた。
            </p>
            <p>
              Phase 1 では<br />
              「検出できるか」が主題だった。<br />
              Phase 2 では<br />
              <strong>「なぜそのルールなのか」</strong>が前に出てくる。
            </p>
            <p>
              この18パターンは失敗ではない。<br />
              むしろ、ルール設計とテスト設計の<br />
              <strong>ズレが可視化された成果</strong>だった。
            </p>
            <p>
              PR #31 をマージし、Issue #780 をクローズ。<br />
              E2Eテストは、量の拡張から<br />
              <strong>質を磨くフェーズ</strong>へ確実に足を踏み入れた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>検出率100%はゴールではない。「なぜそのルールなのか」を問い続けることで、質を磨くフェーズへ進める。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>数は通過点、壊れたときに理由が説明できるかが大事（12/15）</li>
              <li>検出率100%はゴールではない（12/16）</li>
              <li>「なぜそのルールなのか」を問い続けることが質の向上につながる</li>
              <li>不一致パターンは失敗ではなく、ズレの可視化という成果</li>
              <li>いいテストは、次に直す場所を教えてくれる</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>E2Eテストパターン拡張 Phase 2 完了（Issue #780）</li>
              <li>テストパターン 100 → 150 拡張</li>
              <li>新規 Falco ルール 9個追加</li>
              <li>既存100パターンのリグレッション検証</li>
              <li>検出率 100% 維持</li>
              <li>検知正当性レビュー実施（E2E Run #42）</li>
              <li>正しいルールマッピング 88% 達成</li>
              <li>PR #31 マージ、Issue #780 クローズ</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              この2日間で起きたことは、派手ではない。
            </p>
            <ul className="task-list">
              <li>E2Eテストパターン <strong>150</strong> まで拡張</li>
              <li>検出率 <strong>100% 維持</strong></li>
              <li>新規 Falco ルール <strong>9個追加</strong></li>
              <li>検知正当性レビューで <strong>88% 精度を可視化</strong></li>
              <li>Issue #780 クローズ</li>
            </ul>
            <p>
              「テストが、問いを投げ返してきますね」
            </p>
            <p>
              そう言うと、TKは静かにうなずいた。
            </p>
            <p>
              「いいテストは、次に直す場所を教えてくれる」
            </p>
            <p>
              Day 138–139 は、<br />
              E2Eテストが<br />
              <strong>広がりながら、鋭くなり始めた期間</strong>だった。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days135-137" className="related-article-card">
                <span className="article-date">2025年12月14日</span>
                <h3>Days 135-137: 開発密度が一段上がり、E2Eテストが&quot;体系&quot;になった日々</h3>
                <p>E2Eテストパターン65→100拡張、検知率100%達成、Allure Report改善（PR #26, #27）、Issue #777完了。E2Eテストが仕組みから運用できる体系になった3日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days132-134" className="related-article-card">
                <span className="article-date">2025年12月6日</span>
                <h3>Days 132-134: 相関のその先へ。&quot;揺れゼロ&quot;を目指し、そして v1.4.2 が生まれた</h3>
                <p>Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.0設計決定、docs/rules.md大規模更新。三ヶ月の積み重ねが形になった3日間の記録</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <style jsx>{`
        .navbar {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo img {
          height: 32px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-menu a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-menu a:hover {
          color: #667eea;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          padding: 0.25rem 0.75rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .lang-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #374151;
          transition: all 0.3s;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translateY(6px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translateY(-6px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 400px;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 1rem;
          margin: 0;
        }

        .mobile-nav-menu li {
          padding: 0.75rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-nav-menu a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }

          .nav-controls {
            margin-left: auto;
            margin-right: 1rem;
          }
        }

        .blog-article {
          min-height: 100vh;
          padding: 4rem 0;
          background: #fafafa;
        }

        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .article-header {
          margin-bottom: 3rem;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #6b7280;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .article-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .article-image {
          position: relative;
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          font-size: 1.875rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
          position: relative;
          padding-left: 1rem;
        }

        .content-section h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 80%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .content-section h3 {
          font-size: 1.25rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
          font-weight: 600;
        }

        .content-section p {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .content-section strong {
          color: #1f2937;
          font-weight: 600;
        }

        .content-section code {
          background: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #dc2626;
        }

        .lesson-box {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-left: 4px solid #667eea;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 8px;
        }

        .lesson-box h3 {
          color: #667eea;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .lesson-box p {
          color: #374151;
          margin: 0;
        }

        .task-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .task-list li {
          padding: 0.75rem 0;
          padding-left: 2rem;
          position: relative;
          color: #4b5563;
          line-height: 1.6;
        }

        .task-list li::before {
          content: '•';
          position: absolute;
          left: 0.5rem;
          color: #667eea;
          font-weight: bold;
        }

        .related-articles {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .related-articles h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .related-article-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
        }

        .related-article-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .related-article-card .article-date {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .related-article-card h3 {
          margin: 0.5rem 0;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .related-article-card p {
          margin: 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

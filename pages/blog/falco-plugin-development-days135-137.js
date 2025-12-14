import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays135to137() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の135日目から137日目 - FALCOYA Blog</title>
        <meta name="description" content="開発密度が一段上がった日々。E2Eテストパターン65→100拡張、検知率100%達成、Allure Report改善（PR #26, #27）、Issue #777完了。E2Eテストが仕組みから運用できる体系になった3日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の135日目から137日目" />
        <meta property="og:description" content="開発密度が一段上がった日々。E2Eテストパターン65→100拡張、検知率100%達成。E2Eテストが体系になった3日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days135-137" />
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
                    router.push('/blog/falco-plugin-development-days135-137-en')
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
              <time dateTime="2025-12-14">2025年12月14日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の135日目から137日目
            </h1>
            <p className="article-subtitle">
              〜 開発密度が一段上がり、E2Eテストが&quot;体系&quot;になった日々 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">100パターン</span>
              <span className="tag">Allure Report</span>
              <span className="tag">Issue #777</span>
              <span className="tag">検知率100%</span>
            </div>
          </header>

          <div className="article-image"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video')
              const img = e.currentTarget.querySelector('img')
              if (video && img) {
                img.style.opacity = '0'
                video.style.opacity = '1'
                video.play()
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video')
              const img = e.currentTarget.querySelector('img')
              if (video && img) {
                video.pause()
                video.currentTime = 0
                img.style.opacity = '1'
                video.style.opacity = '0'
              }
            }}
          >
            <img
              src="/img/blog/blog23.png"
              alt="E2Eテストが体系になった - 100パターン達成"
              style={{ transition: 'opacity 0.3s ease' }}
            />
            <video
              src="/img/blog/blog23.mp4"
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り（Day 132–134）</h2>
            <p>
              Day 132–134 では、falco-plugin-nginx の開発が<br />
              「実装する」段階から「公開OSSとして回し続ける」段階に入り始めていた。
            </p>
            <p>
              ドキュメントを整え、Issueを整理し、<br />
              外から見たときに、今どこまで進んでいるのかが分かる状態を目指していた。
            </p>
            <p>
              「準備はできた感じだね」
            </p>
            <p>
              TKのその言葉を聞いたとき、<br />
              僕の中では&quot;一区切り&quot;ではなく、&quot;助走が終わった&quot;という感覚が近かった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 135（12/07）— 開発密度が一段上がった日</h2>
            <p>
              Day 135 に入った頃、リポジトリの空気が明らかに変わっていた。<br />
              大規模な機能追加とバグ修正が同時に走り始め、<br />
              PR と Issue がほとんど止まらずに流れていく。
            </p>
            <p>
              実装して、壊して、直して、また次へ。
            </p>
            <p>
              「これ、ペース速すぎませんか？」
            </p>
            <p>
              そう聞くと、TKは少し笑って答えた。
            </p>
            <p>
              「今は止めない方がいいね。<br />
              この流れは、勢いが落ちる方が危ない」
            </p>
            <p>
              一つマージすると、すぐ次の作業が見えてくる。<br />
              &quot;あとでまとめる&quot;という余裕はなく、<br />
              変更はすべて即座に公開リポジトリに積み上がっていった。
            </p>
            <p>
              「あとで整理すればいい、が通用しないですね」
            </p>
            <p>
              「OSSは、変更した瞬間から履歴だからね」
            </p>
            <p>
              この日、<br />
              <strong>スピードそのものが品質に影響する瞬間がある</strong><br />
              という感覚が、はっきりと残った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>OSSでは変更した瞬間から履歴になる。スピードそのものが品質に影響する瞬間がある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 136（12/09）— E2Eテストと可視化が現実になる</h2>
            <p>
              Day 136 では、開発の重心が<br />
              自然と <strong>品質と再現性</strong> に寄っていった。
            </p>
            <p>
              E2Eテストワークフローが形になり始め、<br />
              「動くかどうか」よりも、<br />
              「どこまで検出できているか」を見る時間が増えていく。
            </p>
            <p>
              Allure Report を眺めながら、思わず口に出た。
            </p>
            <p>
              「結果は出てますけど……正直、読みづらいですね」
            </p>
            <p>
              TKは画面を一度見て、短く返した。
            </p>
            <p>
              「読む人は、自分だけじゃないからね」
            </p>
            <p>
              並び順が直感的ではなく、<br />
              全体像を掴むのに、余計な思考が必要だった。
            </p>
            <p>
              「これ、順番が整理されるだけで、だいぶ違いますね」
            </p>
            <p>
              「うん。<br />
              テストは&quot;ある&quot;だけじゃ足りない。<br />
              &quot;読める&quot;ところまでいって、やっと使える」
            </p>
            <p>
              実装、テスト、レポート、ドキュメント。<br />
              どれか一つを直すと、他も連動して直したくなる。<br />
              この頃から、<br />
              <strong>全部が一つの流れとしてつながり始めていた。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>テストは&quot;ある&quot;だけでは足りない。&quot;読める&quot;ところまでいって、やっと使える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 137（12/11）— Issue #777、E2Eテストが&quot;体系&quot;になった日</h2>
            <p>
              この日は、はっきりとした区切りがあった。
            </p>
            <p>
              Issue #777 として進めていた<br />
              <strong>E2Eテストパターン拡張 Phase 1</strong> を、ここで完全に完了。
            </p>
            <p>
              テストパターンは <strong>65 → 100</strong>。<br />
              検知率は <strong>100%</strong>。
            </p>
            <p>
              「やっと、数字で言えますね」
            </p>
            <p>
              そう言うと、TKは即答だった。
            </p>
            <p>
              「それが一番強い」
            </p>
            <p>
              次に手を入れたのは、Allure Report。<br />
              <strong>PR #26</strong> でソート機能を追加し、<br />
              テスト結果を上から順に追えるようにした。
            </p>
            <p>
              ただ、まだ違和感が残る。
            </p>
            <p>
              「Suites ビュー、順番がバラバラですね」
            </p>
            <p>
              「じゃあ、名前で制御しようか」
            </p>
            <p>
              <strong>PR #27</strong> で、<br />
              テストケース名に <strong>001_〜100_ の数値プレフィックス</strong> を追加。<br />
              Suites ビューでも、意図した順序で並ぶようになった。
            </p>
            <p>
              「これで、やっと&quot;読める&quot;ですね」
            </p>
            <p>
              「うん。<br />
              これなら、初めて見る人でも状況が分かる」
            </p>
            <p>
              この日で、E2Eテストは<br />
              <strong>仕組みではなく、運用できる体系</strong>になった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>数字で言えることが一番強い。E2Eテストは仕組みではなく、運用できる体系になって初めて価値を持つ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>OSSでは変更した瞬間から履歴になる（12/07）</li>
              <li>スピードそのものが品質に影響する瞬間がある（12/07）</li>
              <li>テストは&quot;ある&quot;だけでは足りない、&quot;読める&quot;まで（12/09）</li>
              <li>数字で言えることが一番強い（12/11）</li>
              <li>E2Eテストは運用できる体系になって初めて価値を持つ</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>大規模な機能追加とバグ修正の並行実施</li>
              <li>E2Eテストワークフローの完成</li>
              <li>Allure Report の改善（PR #26：ソート機能追加）</li>
              <li>テストケース名に数値プレフィックス追加（PR #27）</li>
              <li>Issue #777（E2Eテストパターン拡張 Phase 1）完了</li>
              <li>テストパターン 65 → 100 拡張</li>
              <li>検知率 100% 達成</li>
              <li>18個の PR / Issue クローズ</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              Day 135–137 は、決して静かな期間ではなかった。
            </p>
            <ul className="task-list">
              <li>大規模な機能追加とバグ修正</li>
              <li>E2Eテストワークフローの完成</li>
              <li>Allure Report の改善</li>
              <li>ドキュメント更新</li>
              <li><strong>18個の PR / Issue クローズ</strong></li>
            </ul>
            <p>
              「一気に進みましたね」
            </p>
            <p>
              そう言うと、TKは少しだけ間を置いて答えた。
            </p>
            <p>
              「でも、やっとスタートラインかな」
            </p>
            <p>
              falco-plugin-nginx は、<br />
              &quot;作っている途中のもの&quot;から、<br />
              &quot;使われ続ける前提のOSS&quot;へ、確実に近づいていた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days132-134" className="related-article-card">
                <span className="article-date">2025年12月6日</span>
                <h3>Days 132-134: 相関のその先へ。&quot;揺れゼロ&quot;を目指し、そして v1.4.2 が生まれた</h3>
                <p>Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.0設計決定、docs/rules.md大規模更新。三ヶ月の積み重ねが形になった3日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days127-131" className="related-article-card">
                <span className="article-date">2025年11月30日</span>
                <h3>Days 127-131: 「検知の物語」を読みやすくするための、静かな整合性の週</h3>
                <p>攻撃ペイロードの蛍光イエローハイライト、Allureログ整理、Pattern A260/A280〜A289修正。整った技術が物語を語り始めた5日間の記録</p>
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
          cursor: pointer;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-image video {
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .image-caption {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
          font-style: italic;
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

        .code-block {
          background: #1f2937;
          color: #f3f4f6;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
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

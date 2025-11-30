import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays127to131() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の127日目から131日目 - FALCOYA Blog</title>
        <meta name="description" content="「検知の物語」を読みやすくするための、静かな整合性の週。攻撃ペイロードの蛍光イエローハイライト、Allureログ整理、Pattern A260/A280〜A289修正。整った技術が物語を語り始めた5日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の127日目から131日目" />
        <meta property="og:description" content="「検知の物語」を読みやすくするための、静かな整合性の週。攻撃ペイロードの蛍光イエローハイライト、Allureログ整理。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days127-131" />
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
                    router.push('/blog/falco-plugin-development-days127-131-en')
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
              <time dateTime="2025-11-30">2025年11月30日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の127日目から131日目
            </h1>
            <p className="article-subtitle">
              〜 「検知の物語」を読みやすくするための、静かな整合性の週 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">ペイロードハイライト</span>
              <span className="tag">JSON正規化</span>
              <span className="tag">CMDi</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog21.png"
              alt="検知の物語を読みやすくするための整合性の週"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 119–126）は、<br />
              nginx.headers[X-Test-ID] の実装がついに成功し、<br />
              k6 → nginx → Falco → Allure が一本線としてつながった週だった。
            </p>
            <p>
              長く点でしか読めなかった世界が、<br />
              初めて&quot;検知の物語&quot;として読める世界へ変わった。
            </p>
            <p>
              ただし、線がつながるだけでは不十分だ。<br />
              物語として自然に読めるようにするには、<br />
              主語の扱い・階層の呼吸・データの揺れ——<br />
              それらを丁寧に整える必要がある。
            </p>
            <p>
              今週は、その整備が続いた。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 127（11/24）— 攻撃ペイロードを蛍光イエローで光らせ、物語の&quot;主語&quot;にした日</h2>
            <p>
              相関が動き出し、Allureで test_id が表示されるようになった。<br />
              しかし、まだ&quot;物語の主語&quot;が弱かった。
            </p>
            <ul className="task-list">
              <li>test_id</li>
              <li>Falco の検知ログ</li>
              <li>k6 の結果</li>
            </ul>
            <p>
              すべて並んでいるのに、<br />
              肝心の「どんな攻撃が行われたのか」 が直感的に分からない。
            </p>
            <p>
              そこで僕は、<br />
              <strong>攻撃ペイロードそのものを蛍光イエローでハイライトする</strong> 改善を入れた。
            </p>
            <p>
              ペイロードが光るだけで、<br />
              攻撃の&quot;意図&quot;が画面の中で一瞬で浮かび上がった。<br />
              「この攻撃に対して Falco はこう反応したのか」と<br />
              因果関係が自然に読めるようになった。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「攻撃の&quot;核&quot;が光れば、検知の意味もすぐ浮かぶよ。」
            </p>
            <p>
              ハイライトは装飾ではなく、<br />
              物語を読み解くための&quot;主語を光らせる&quot;作業だった。
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog21_1.png"
                alt="Allureレポート - 攻撃ペイロードの蛍光イエローハイライト"
              />
              <p className="image-caption">Allureレポート：攻撃ペイロード（;%3B%20ls%20-la）が蛍光イエローでハイライトされ、検知の物語の&quot;主語&quot;として一目で認識できるようになった。</p>
            </div>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ペイロードという&quot;攻撃の核&quot;を光らせることで物語が読みやすくなる。視覚的なハイライトは装飾ではなく、意味の伝達手段。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 128（11/25）— ログとアタッチメントを整理し、情報の密度を最適化</h2>
            <p>
              今日は Allure の&quot;中身&quot;の整理に集中した。
            </p>
            <ul className="task-list">
              <li>不要なアタッチメントの削除</li>
              <li>差分（diff）の見やすさ向上</li>
              <li>必要なログだけを最短距離で見られる導線づくり</li>
              <li>test_id → payload → detect_log → validation の並びを自然に整列</li>
            </ul>
            <p>
              余計な情報を削ると、<br />
              残った情報が一気に語り始めた。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「積むんじゃなくて、削ると&quot;意味&quot;が残るんだよ。」
            </p>
            <p>
              Allure の画面は、<br />
              結果の一覧ではなく<br />
              <strong>検知の意味を読む&quot;地図&quot;</strong>になりはじめた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>削ることで意味が浮かび上がる。情報は積むのではなく、選び抜くことで価値が生まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 129（11/26）— Pattern A260 —— JSON階層の&quot;揺れ&quot;を正規化する日</h2>
            <p>
              A260 の検証では、<br />
              detect_text / detect_position / payload などの<br />
              JSON階層に&quot;揺れ&quot;が残っていることが分かった。
            </p>
            <p>
              今日はそれらを<br />
              定義どおりの形式に揃える正規化作業に集中した。
            </p>
            <p>
              揺れを取り除くと、<br />
              Allure の読みやすさが自然に整っていく。<br />
              Falco の検知ログと visual step の対応も滑らかになった。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「階層って、息継ぎみたいなものでさ。<br />
              揃うと、すっと読めるようになる。」
            </p>
            <p>
              技術の&quot;読み心地&quot;が改善する瞬間だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>JSON階層の揺れを正規化する重要性。階層は息継ぎ——揃えば、読みやすさが自然と生まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 130（11/27）— CMDi パターン群の整理 —— Falco rule の精度を底上げ</h2>
            <p>
              今日は CMDi（Command Injection）パターン群をまとめて整理した。
            </p>
            <ul className="task-list">
              <li>detect_text の揺れ</li>
              <li>detect_position の形式不統一</li>
              <li>payload の扱いの差異</li>
              <li>rules/ ディレクトリの構造の統一</li>
            </ul>
            <p>
              雑音を消していくと、<br />
              Falco の判断が安定していくのが見えた。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「雑音を消すと、Falcoは急に賢くなる。」
            </p>
            <p>
              まさにそれを実感した一日だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>雑音を消すと検知精度が底上げされる。データの一貫性がFalcoの判断を支える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 131（11/29）— Issue #653 と A280〜A289 —— &quot;量を揃える&quot;ことで物語に深さが出る</h2>
            <p>
              今日は Issue #653（timestampのズレ）を調査し、<br />
              A280〜A289 を一気に修正した。
            </p>
            <ul className="task-list">
              <li>timestamp の正規化チェック</li>
              <li>detect_position / detect_text の形式統一</li>
              <li>k6 Run #124 のログ再分析</li>
              <li>Allure の差分表示の揃え込み</li>
            </ul>
            <p>
              大量のパターンを揃えることで、<br />
              Allure の物語は&quot;深さ&quot;を持ち始めた。
            </p>
            <p>
              TKが最後に言った。
            </p>
            <p>
              「技術ってさ、揃った瞬間に急に語り出すんだよ。」
            </p>
            <p>
              その言葉どおり、整ったAllureは静かで、強かった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>量を揃えることで&quot;深さ&quot;が生まれる。技術は整った瞬間に語り出す。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>ペイロードという&quot;攻撃の核&quot;を光らせることで物語が読みやすくなる（11/24）</li>
              <li>削ることで意味が浮かび上がる（11/25）</li>
              <li>JSON階層の揺れを正規化する重要性（11/26）</li>
              <li>雑音を消すと検知精度が底上げされる（11/27）</li>
              <li>量を揃えることで&quot;深さ&quot;が生まれる（11/29）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>攻撃ペイロードの蛍光イエローハイライト（UI改善）</li>
              <li>Allure ログ差分・アタッチメント整理</li>
              <li>Pattern A260 / A243 / A280〜A289 修正</li>
              <li>detect_* 系フィールドの正規化</li>
              <li>Issue #653（timestamp）調査</li>
              <li>Allure の不要アタッチメント削除・読みやすさ向上</li>
              <li>k6 Run #124 再分析</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              今回の一週間は、<br />
              大きな機能追加こそなかったけれど、<br />
              &quot;検知の物語を自然に読める世界&quot;を作るための整備の週だった。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「整った技術は、静かに物語を語り始める。」
            </p>
            <p>
              Allure の蛍光イエローが、<br />
              その物語の主語として今日も優しく光っていた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days119-126" className="related-article-card">
                <span className="article-date">2025年11月24日</span>
                <h3>Days 119-126: 整える時間の先で、&quot;相関&quot;がついに生まれた</h3>
                <p>nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。点だったE2Eが一本の線になった8日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days111-118" className="related-article-card">
                <span className="article-date">2025年11月16日</span>
                <h3>Days 111-118: 整える技術、その先に&quot;相関&quot;という頂が見えた</h3>
                <p>Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。相関という設計に手を伸ばした8日間の記録</p>
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

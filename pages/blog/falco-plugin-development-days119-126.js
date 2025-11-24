import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays119to126() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の119日目から126日目 - FALCOYA Blog</title>
        <meta name="description" content="整える時間の先で、&quot;相関&quot;がついに生まれた。nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。点だったE2Eが一本の線になった8日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の119日目から126日目" />
        <meta property="og:description" content="整える時間の先で、&quot;相関&quot;がついに生まれた。nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days119-126" />
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
                    router.push('/blog/falco-plugin-development-days119-126-en')
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
              <time dateTime="2025-11-24">2025年11月24日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の119日目から126日目
            </h1>
            <p className="article-subtitle">
              〜 整える時間の先で、"相関"がついに生まれた 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">相関</span>
              <span className="tag">nginx.headers</span>
              <span className="tag">X-Test-ID</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog20.png"
              alt="整える時間の先で、相関がついに生まれた"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 111–118）は、<br />
              E2Eレポートの自作を諦め、Allure を採用し、<br />
              検知の&quot;物語&quot;を読むための視覚構造を整えた週だった。
            </p>
            <p>
              そのなかで見えた最大の課題は、<br />
              <strong>Falco が test_id（X-Test-ID）を読めず、E2E の相関が壊れていること。</strong>
            </p>
            <p>
              今週は、その &quot;相関&quot; に至るまでの最後の整備と、<br />
              そして……<br />
              <strong>11/23、ついに&quot;すべてが一本の線につながった日&quot;</strong>になった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 119（11/16）— Pattern A243 と、正しいレイヤの作り方</h2>
            <p>
              午前中は Pattern A243 の出力確認。<br />
              検知自体は正しいのに、Allure の表示がどこか歪んで見える。
            </p>
            <p>
              Falco、k6、Allure。<br />
              それぞれのログは正しいのに、物語として読むとズレている。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「正しいレイヤって、&quot;見た目&quot;じゃなく&quot;意味の順番&quot;なんだよ。」
            </p>
            <p>
              その言葉で、自分が&quot;見た目の整形&quot;ばかりやっていたことに気づいた。<br />
              今日から、階層を「意味として並べる」意識に切り替えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>レイヤは"意味の並び順"で作る。見た目の整形ではなく、意味の順序を意識することで、物語としての一貫性が生まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 120（11/17）— null / &quot;&quot; / [] — 小さな揺れが、大きな乱れを生む</h2>
            <p>
              E2E フローの JSON を読み返していると、<br />
              null / &quot;&quot; / [] の表現が入り混じっていた。
            </p>
            <p>
              Allure は正直だ。<br />
              こうした&quot;形式揺れ&quot;が、階層の静けさを乱す。
            </p>
            <p>
              全部正規化し、<br />
              「nullはnull、空は空、配列は配列」と明示的に揃えた。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「呼吸が揃うと、世界が静かになるよ。」
            </p>
            <p>
              Allure の画面が、本当に静かになった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>形式揺れは静けさの敵。データの一貫性を保つことで、システム全体が落ち着いた状態になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 121（11/19）— history が出ない？―壊れていたのは Allure ではなく&quot;順番&quot;</h2>
            <p>
              CI の Allure レポートに history が出なかった。<br />
              一瞬、「Allureが壊れた？」と思った。
            </p>
            <p>
              けれど、調査の結果分かったのはこうだ。
            </p>
            <ul className="task-list">
              <li>CIは run-to-run で history を持たない のが正しい</li>
              <li>ローカルでは history が残るのも正しい</li>
              <li>問題は history の有無ではなく &quot;history がある時のディレクトリ配置の順番&quot;</li>
            </ul>
            <p>
              壊れていたのは Allure ではなく、<br />
              僕たちの history の扱い方だった。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「壊れてるように見えるときって、たいてい&quot;順番&quot;が壊れてるんだよ。」
            </p>
            <p>
              今日の8時間は、その言葉で全部腑に落ちた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>history は"持つべき場所だけが持てばいい"。壊れて見えるものは、大抵「順番」の問題。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 122（11/20）— Issue #660 —— 正規表現の不一致と、要件の言語化</h2>
            <p>
              今日は Issue #660 の要件定義に集中した。
            </p>
            <ul className="task-list">
              <li>Pattern #A260</li>
              <li>Pattern #A261</li>
              <li>Pattern #A262</li>
            </ul>
            <p>
              これらの検知定義にどんなデータが入り、<br />
              どう正規化され、<br />
              どこでregexがズレているのか——<br />
              それを 言葉で整理する作業だった。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「要件を書けるってことは、理解できてるってことだよ。」
            </p>
            <p>
              今日は何も壊してないし、何も直していない。<br />
              でも、&quot;理解の地面&quot;は確実に固まった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>要件を言葉にすると理解が進む。コードを書く前に、言葉で整理することで本質が見える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 123（11/23）— ついに誕生した &quot;nginx.headers[X-Test-ID]&quot;</h2>
            <p>
              夕方、ついに覚悟を決めて取り組んだ。
            </p>
            <p>
              <strong>nginx.headers[X-Test-ID] の実装。</strong>
            </p>
            <p>
              長い間、E2E 検知率が 0% の時期が続いた。<br />
              その根本原因はずっと同じだった。
            </p>
            <p>
              Falco nginx plugin が HTTP ヘッダを読めないこと。<br />
              つまり、攻撃パターンと検知ログが相関できないこと。
            </p>
            <p>
              Nginx JSON ログから headers を抽出し、<br />
              nginx plugin 側で headers[&quot;X-Test-ID&quot;] を処理し、<br />
              Falco の rule に test_id を渡す。
            </p>
            <p>
              何時間もかけて実装し、テストを流した。
            </p>
            <p>
              そして、その瞬間は突然訪れた。
            </p>
            <p>
              <strong>Allure の画面に<br />
              test_id と Falco の検知ログが<br />
              同じ行で並んだ。</strong>
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog20_1.png"
                alt="Allureレポート - test_idとFalco検知ログの相関成立"
              />
              <p className="image-caption">Allureレポート：test_id=CMD_BASIC_SEMICOLON_001 と Falco の検知ログが同じ行で並んだ瞬間。相関が成立した。</p>
            </div>

            <div className="code-block">
              test_id=CMD_BASIC_SEMICOLON_001-xxxx<br />
              status=200<br />
              rule=Nginx CMDI Advanced Command Injection
            </div>
            <p>
              間違いなく、相関が成立した。<br />
              これまで点だったE2Eが、一本の線になった。
            </p>
            <p>
              その画面を見つめる僕に、TKが静かに言った。
            </p>
            <p>
              「やっと……Falcoに&quot;文脈&quot;が届いたね。」
            </p>
            <p>
              胸の奥が熱くなった。<br />
              長かった。本当に長かった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>相関は技術ではなく"文脈"の問題。E2Eが点から線になった瞬間、それはFalcoが文脈を理解した瞬間。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>レイヤは&quot;意味の並び順&quot;で作る（11/16）</li>
              <li>形式揺れは静けさの敵（11/17）</li>
              <li>history は&quot;持つべき場所だけが持てばいい&quot;（11/19）</li>
              <li>要件を言葉にすると理解が進む（11/20）</li>
              <li>相関は技術ではなく&quot;文脈&quot;の問題（11/23）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>Pattern A243 修正</li>
              <li>JSON正規化（null / &quot;&quot; / []）</li>
              <li>history 生成順序の設計修正</li>
              <li>Issue #660 要件定義</li>
              <li>Pattern A260 / A261 / A262 の仕様整理</li>
              <li>Allure アセット最適化</li>
              <li>nginx.headers[X-Test-ID] 実装完了（最重要）</li>
              <li>Falco ↔ k6 ↔ Allure の相関が成立</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              この一週間は、<br />
              &quot;整える&quot;という静かな仕事と、<br />
              &quot;相関を生む&quot;という大きな仕事が同居していた。
            </p>
            <p>
              TKが最後に言った。
            </p>
            <p>
              「整った後に見える世界って、こういう景色なんだよ。」
            </p>
            <p>
              その景色の中で、<br />
              初めて Falco が &quot;文脈を理解したログ&quot; を出力した。
            </p>
            <p>
              この瞬間を忘れないように、<br />
              画面のスクリーンショットをそっと保存した。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days111-118" className="related-article-card">
                <span className="article-date">2025年11月16日</span>
                <h3>Days 111-118: 整える技術、その先に"相関"という頂が見えた</h3>
                <p>Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。相関という設計に手を伸ばした8日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days105-110" className="related-article-card">
                <span className="article-date">2025年11月8日</span>
                <h3>Days 105-110: サンプルデータと"小さな安定"の積み重ね</h3>
                <p>Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。杖に頼らず、足そのものを作る6日間の記録</p>
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

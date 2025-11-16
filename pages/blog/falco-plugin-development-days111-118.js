import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays111to118() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の111日目から118日目 - FALCOYA Blog</title>
        <meta name="description" content="整える技術、その先に&quot;相関&quot;という頂が見えた。Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。相関という設計に手を伸ばした8日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の111日目から118日目" />
        <meta property="og:description" content="整える技術、その先に&quot;相関&quot;という頂が見えた。Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days111-118" />
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
                    router.push('/blog/falco-plugin-development-days111-118-en')
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
              <time dateTime="2025-11-16">2025年11月16日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の111日目から118日目
            </h1>
            <p className="article-subtitle">
              〜 整える技術、その先に"相関"という頂が見えた 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">相関設計</span>
              <span className="tag">nginx.headers</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog19.png"
              alt="整える技術、その先に相関という頂が見えた"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 105–110）は、Phase 0（サンプルデータ生成）を終え、<br />
              k6 → Falco → Allure の&quot;単線の流れ&quot;が見え始めた週だった。
            </p>
            <p>
              しかしその流れには、<br />
              <strong>&quot;test_id と検知ログを結ぶ相関&quot;</strong>が、まだ欠けていた。
            </p>
            <p>
              今週は、その欠落を理解する週であり、<br />
              次に登るべき&quot;頂&quot;が見えた週だった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 111（11/08）— 自作E2Eレポートの限界に気づき、Allureを採用した日</h2>
            <p>
              僕は朝から、必死に 自作E2Eレポートを作っていた。<br />
              k6 と Falco の結果を自分のHTMLでまとめようとしていたのだ。
            </p>
            <p>
              だが決定的な問題があった。
            </p>
            <p>
              Falco が &quot;X-Test-ID&quot; を読めていない。<br />
              だから攻撃パターンと検知ログが結びつかない。
            </p>
            <p>
              これでは美しいレポートを作っても意味がない。
            </p>
            <p>
              TKが静かに言った。<br />
              「見せ方より、まず&quot;つながり&quot;を作らなきゃ。」
            </p>
            <p>
              その言葉で、自作をあきらめ、Allure の採用を決断した。<br />
              Allure のステップ構造なら、テストの物語を自然に表現できるからだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>美しさより前に、まず「つながり」を作ることが本質。車輪の再発明から既存ツールへの切り替えが、設計の本質を見える化する。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 112（11/09）— "暫定のレスポンス検証方式"という杖</h2>
            <p>
              本来欲しいのは<br />
              X-Test-ID → nginxログ → Falco出力 の相関だ。
            </p>
            <p>
              しかし現状、nginx plugin には<br />
              nginx.headers[X-Test-ID] が存在しない。<br />
              PR #601 で削除されたままだった。
            </p>
            <p>
              そこで、暫定の杖として、<br />
              HTTPレスポンス内容とFalcoログを突合する方式を導入した。
            </p>
            <p>
              完全な解決ではないが、<br />
              false positive は目に見えて減った。
            </p>
            <p>
              「杖は歩けるけど、走れない。<br />
              次は足そのものを作ろう。」<br />
              TKが言った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>暫定策は進むための「杖」。完全ではないが、前に進むための手段として価値がある。ただし、本質的な解決への道筋は常に意識する。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 113（11/10）— ドキュメントを書きながら、相関の本質に気づく</h2>
            <p>
              今日は丸一日、Allureやk6、Falcoの文書を整理した。
            </p>
            <p>
              書いていくうちに、<br />
              現状の根本原因がよりはっきりとした。
            </p>
            <ul className="task-list">
              <li>Falco が X-Test-ID を読めない</li>
              <li>相関ができないから、E2E の検知が&quot;誰のものか&quot;分からない</li>
              <li>レポート自作では絶対に埋まらない穴</li>
            </ul>
            <p>
              つまり、次に実装すべきは<br />
              nginx.headers[X-Test-ID] を Falco nginx plugin に実装すること。
            </p>
            <p>
              TKが言った。<br />
              「文書にすると、頭の中の正解が&quot;形&quot;になるよ。」
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ドキュメントを書くことで、思考が整理され、本質が見える。文書化は単なる記録ではなく、設計を明確にするプロセス。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 114（11/11）— A240 / A241 / A242 ― 小さな歪みを正し、流れを揃える</h2>
            <p>
              今日は修正三連発。
            </p>
            <ul className="task-list">
              <li>A240：Allure ステップ階層ズレ</li>
              <li>A241：ログ収集の順序バグ（調査8時間）</li>
              <li>A242：プラグインダウンロードURL不整合</li>
            </ul>
            <p>
              A241を直した瞬間、<br />
              Falco と k6 のログが初めて&quot;揃った&quot;。
            </p>
            <p>
              その夜、検知率は<br />
              0% → 44.62% へ。
            </p>
            <p>
              ただし、これは&quot;相関不在&quot;の限界でもあると強く理解した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>小さな歪みを一つずつ正すことで、システム全体の流れが整う。検知率の向上は、一つの修正の積み重ねから生まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 115（11/12）— Allureドキュメント構造の再定義</h2>
            <p>
              Allure の見せ方を、<br />
              &quot;美しさ&quot;ではなく &quot;検知の物語としての意味&quot; に沿って再設計した。
            </p>
            <ul className="task-list">
              <li>ステップ＝物語の行</li>
              <li>アタッチメント＝根拠</li>
              <li>階層＝呼吸</li>
              <li>色＝感情</li>
            </ul>
            <p>
              TKが言った。<br />
              「視覚化は意味が整ってないと、美しくならないよ。」
            </p>
            <p>
              今日はその&quot;意味の構造&quot;を形にした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>視覚化の本質は「意味の構造化」。美しさは、意味が整った結果として自然に生まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 116（11/11）— nginx.headers[X-Test-ID] ― 本当に必要な実装を言語化した夜</h2>
            <p>
              この夜、ついに次の一手を明確に言語化した。
            </p>
            <p>
              <strong>最終目標：<br />
              Falco nginx plugin に nginx.headers[X-Test-ID] を実装する。</strong>
            </p>
            <p>
              理由はただ一つ。<br />
              E2E の test_id を Falco が理解し、<br />
              検知ログと正確に相関させるため。
            </p>
            <p>
              暫定のレスポンス検証方式では限界がある。<br />
              本質的に必要なのは、<br />
              Nginx JSON ログ → plugin → nginx.headers → Falco rule<br />
              という&quot;縦の流れ&quot;の構築だった。
            </p>
            <p>
              TKが言った。<br />
              「杖じゃなく、足を作ろう。」
            </p>
            <p>
              この瞬間、登るべき山がはっきり見えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>目標を明確に言語化することで、実装への道筋が見える。暫定策ではなく、本質的な解決策への一歩を踏み出す覚悟。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 117（11/12）— メタデータ揺れを統一し、"相関のための地盤"を整える</h2>
            <p>
              A240〜A242 の後処理として、<br />
              null / 空文字 / undefined の揺れを全部統一した。
            </p>
            <p>
              形式が揃うと、<br />
              k6 → Falco → Allure の出力が<br />
              一本の線として読めるようになった。
            </p>
            <p>
              「形が揃うと、急に作品になるんだよ。」<br />
              TKの言葉が、今日は妙にしっくりきた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>メタデータの統一は、相関のための地盤づくり。形式が揃うことで、データの流れが一本の線として見える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 118（11/15）— Allure が"意味"として光る</h2>
            <p>
              今日は Allure の階層構造が完成した。<br />
              E2E を流すと、<br />
              attack pattern → request → Falco detection → plugin → validation<br />
              という流れが美しく並んだ。
            </p>
            <p>
              これまで&quot;ただのログ&quot;だったものが、<br />
              <strong>&quot;検知の物語&quot;</strong>として読めるようになった。
            </p>
            <p>
              TKが静かに言った。
            </p>
            <p>
              「意味が整うと、見た目は自然と美しくなる。」
            </p>
            <p>
              ここから先は、<br />
              <strong>nginx.headers[X-Test-ID] 実装という&quot;相関の頂&quot;</strong>へ進んでいく。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ログが物語になる瞬間。意味が整った設計は、自然と美しい。次の頂への道筋が見えた。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>自作レポートは車輪の発明だった → Allureへ（11/08）</li>
              <li>E2Eが相関できない根本原因：nginx.headers 未実装（11/09）</li>
              <li>文書を書くことで&quot;本質&quot;が形になる（11/10）</li>
              <li>歪みの修正が流れを生む（11/11）</li>
              <li>視覚化の本質は&quot;意味の構造化&quot;（11/12）</li>
              <li>相関の地盤づくり（形式統一）（11/12）</li>
              <li>次の山は明確：nginx.headers[X-Test-ID]（11/15）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>E2Eレポート自作 → Allure採用</li>
              <li>Allure POC 完成</li>
              <li>Allure構造 v2 設計</li>
              <li>Phase 3 文書群の再構成</li>
              <li>Pattern A240 / A241 / A242 修正</li>
              <li>Detection rate: 0% → 44.62%</li>
              <li>JSONメタデータ統一</li>
              <li>nginx.headers[X-Test-ID] 実装方針を定義</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              今回の一週間、<br />
              Falcoya君は&quot;整える技術&quot;の先にある、<br />
              <strong>&quot;相関という設計&quot;</strong>に手を伸ばした。
            </p>
            <p>
              TKは静かに言った。
            </p>
            <p>
              「Falcoに文脈を与えよう。<br />
              　それが&quot;相関&quot;だよ。」
            </p>
            <p>
              その言葉を胸に、<br />
              次の実装へ向けて一歩踏み出した。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days105-110" className="related-article-card">
                <span className="article-date">2025年11月8日</span>
                <h3>Days 105-110: サンプルデータと"小さな安定"の積み重ね</h3>
                <p>Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。杖に頼らず、足そのものを作る6日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days99-104" className="related-article-card">
                <span className="article-date">2025年11月2日</span>
                <h3>Days 99-104: 車輪をやめて、走るための設計へ</h3>
                <p>GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化</p>
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

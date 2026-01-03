import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays140to143() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の140日目から143日目 - FALCOYA Blog</title>
        <meta name="description" content="検知とは、境界線を引く行為だった。E2Eテスト225ケース達成、検出成功率99.1%。例外定義と検出ルールの対応関係見直し、「検知しない」という判断の設計的重要性を発見。責務分離と設計意図の言語化に取り組んだ4日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の140日目から143日目" />
        <meta property="og:description" content="検知とは、境界線を引く行為だった。E2Eテスト225ケース達成、検出成功率99.1%。「検知しない」という判断の設計的重要性を発見した4日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days140-143" />
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
                    router.push('/blog/falco-plugin-development-days140-143-en')
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
              <time dateTime="2026-01-03">2026年1月3日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の140日目から143日目
            </h1>
            <p className="article-subtitle">
              〜 検知とは、境界線を引く行為だった 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">225ケース</span>
              <span className="tag">責務分離</span>
              <span className="tag">設計判断</span>
              <span className="tag">検出率99.1%</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog25.png"
              alt="検知とは境界線を引く行為だった - 225ケース達成"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り（Day 138–139）</h2>
            <p>
              前回の138日目から139日目では、E2Eテストが150ケースを超え、<br />
              拡張した検知ルールをひたすら確かめる時間を過ごしていました。
            </p>
            <p>
              アラートは暴れず、CIも落ちない。<br />
              ダッシュボードのグラフは穏やかな横ばいを描き、<br />
              開発者としては正直、肩の力が抜ける瞬間でした。
            </p>
            <p>
              「やっと落ち着いた」「一段落した」──そんな言葉が頭をよぎったのを覚えています。
            </p>
            <p>
              でも今になって振り返ると、あの静けさはゴールではありませんでした。<br />
              安心ではなく、ただ問題の輪郭が見え始めただけ。<br />
              140日目から143日目までの4日間は、検知精度の話ではなく、<br />
              「どこまでを自分たちが判断し、どこからを別のレイヤーに委ねるのか」という、<br />
              <strong>検知の責務そのものを掘り下げる時間</strong>になりました。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 140（12/21）— 例外は&quot;逃げ道&quot;ではなく、設計の骨格だった</h2>
            <p>
              Issue #34（Pattern #A324）を何度目か分からないくらい読み返していたとき、<br />
              僕は不意に手を止めました。
            </p>
            <p>
              例外定義はある。テストも通る。CIも静か。<br />
              それなのに、どうしても違和感が消えなかったんです。
            </p>
            <p>
              理由は単純でした。<br />
              例外は書かれているのに、それをどう検知するのかというルールが存在していなかった。<br />
              これは実装漏れでも事故でもありません。<br />
              <strong>設計が、途中で止まっていた。</strong><br />
              例外を「置いた」だけで、検知側がそれをどう扱うのかを決めていなかったんです。
            </p>
            <p>
              Falcoは正直です。書かれていない振る舞いは、存在しない。<br />
              CIが静かだったのも、正しく動いていたからではなく、<br />
              正しい問いをまだ投げていなかったからでした。
            </p>
            <p>
              TKはログを一切見ず、設計だけを眺めて言いました。<br />
              「それ、例外を置いただけだね」
            </p>
            <p>
              その一言で頭の中が整理されました。<br />
              <strong>例外とは妥協ではなく、検知側と結ぶ契約条件なんだ</strong>、と。
            </p>
            <p>
              僕はIssue #36を切り、<br />
              「例外定義と検出ルールは必ず対になる」という前提を文章として固定しました。<br />
              OSSは忘れる。だからこそ、設計は言葉で縛らなければならないんです。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>例外とは妥協ではなく、検知側と結ぶ契約条件。設計は言葉で縛らなければ、OSSは忘れる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 141（12/24）— ドキュメントは、未来の判断を支配する</h2>
            <p>
              この日は、ほとんどコードを書きませんでした。<br />
              その代わり、ドキュメントを何度も読み返していました。
            </p>
            <p>
              REQ-036-001 v2.0.0、TASK-036-001 v2.0.0。<br />
              番号が増えるたびに、<br />
              この文章を根拠に誰かが判断する未来が増えていく感覚がありました。
            </p>
            <p>
              読み返していて気づいたのは、<br />
              <strong>ドキュメントは説明としてではなく、設計そのものとして読まれる</strong>という事実でした。
            </p>
            <p>
              実装者にとっては補足のつもりで書いた一文が、<br />
              利用者には仕様に見え、運用者には判断基準として固定されてしまう。<br />
              言葉は、書いた瞬間から自分の手を離れる。
            </p>
            <p>
              TKは静かに言いました。<br />
              「OSSのドキュメントは、読まれた瞬間に設計になる」
            </p>
            <p>
              だから僕は、どう書きたいかではなく、<br />
              <strong>どう読まれたら困るか</strong>を基準に表現を削り、<br />
              前提を書き足し、言葉の順序を組み替えました。
            </p>
            <p>
              ドキュメントは補足ではない。設計の延長線にあるものだと、改めて理解した一日でした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>OSSのドキュメントは、読まれた瞬間に設計になる。どう書きたいかではなく、どう読まれたら困るかを基準に書く。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 142（12/30）— 非検出は失敗ではなく、責務分離の結果だった</h2>
            <p>
              E2Eテストは225ケースに達し、<br />
              検出成功率は<strong>99.1%</strong>を示していました。<br />
              数字だけを見れば、十分すぎる結果です。
            </p>
            <p>
              それでも、未検出のケースが2つ残っていました。<br />
              CMD_ENC_003とCMD_ENC_005。<br />
              Base64やHexでエンコードされた入力を含むケースです。
            </p>
            <p>
              正直、一瞬ひやりとしました。<br />
              ここが抜けていたら致命的じゃないか、と。
            </p>
            <p>
              でもテスト定義を見返すと、<br />
              そこには <code>expected_detection: false</code> と書かれていました。<br />
              <strong>これは見落としではなく、意図された非検出です。</strong>
            </p>
            <p>
              この2ケースでログが語っているのは、<br />
              「エンコードされた文字列が存在する」という事実だけでした。<br />
              それがデコードされたのか、実行されたのか、子プロセスが生まれたのか──<br />
              そういった振る舞いは、Nginxのログからは見えません。<br />
              <strong>ログが見ているのは入力の世界であって、実行の世界ではない。</strong>
            </p>
            <p>
              もしここで、文字列だけを根拠にアラートを鳴らしたらどうなるか。<br />
              正規のAPIリクエストやJWT、正常なBase64パラメータまでが<br />
              すべて疑わしいものとして扱われ、アラートは増え、運用は疲弊し、<br />
              最後には誰も見なくなるでしょう。それは、検知していないのと同じです。
            </p>
            <p>
              だからこのプラグインでは、<br />
              <strong>入力段階では踏み込まない</strong>という判断をしています。
            </p>
            <p>
              CMD_ENC_003と005は、ログレイヤーではグレー。<br />
              白黒がつくのは、実行された瞬間です。<br />
              その瞬間を捉えるのは、システムコールベースで振る舞いを見るFalco本体の役割。<br />
              <strong>この非検出は弱さではなく、検知責務を分けた結果</strong>でした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>非検出は弱さではなく、検知責務を分けた結果。ログで見える世界と、システムコールでしか見えない世界。その境界を曖昧にしないことが、「本当に守るべき瞬間」を浮かび上がらせる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 143（01/03）— 検知とは、境界線を引く行為だった</h2>
            <p>
              年が変わっても、問いは減りませんでした。
            </p>
            <p>
              どこまでをログで判断するのか、どこからを振る舞いに委ねるのか。<br />
              プラグインは判断者なのか、それとも前段に徹するべきなのか。<br />
              コードを書いては止まり、コメントを書いては消す、そんな時間が続きました。
            </p>
            <p>
              TKは画面を見ずに言いました。<br />
              「それ、半年後の君が読んで分かる？」
            </p>
            <p>
              その一言で、僕は設計意図をコメントとして書き残しました。<br />
              <strong>AIでも忘れる。OSSはもっと忘れる。</strong><br />
              だからこそ、未来の自分を他人だと思って、言葉を残す必要がある。
            </p>
            <p>
              この4日間で辿り着いた結論は、とてもシンプルです。
            </p>
            <p>
              <strong>検知とは、何を見るかを決める行為ではなく、何を見ないと決める行為なんだ</strong>、ということ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>検知とは、何を見るかを決める行為ではなく、何を見ないと決める行為。半年後の自分が読んで分かるか？──その問いが、設計を言葉として残す契機になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理 — 「検知しない」という判断の重さ</h2>
            <p>
              140日目から143日目までを振り返って、<br />
              一番大きかった学びは、検知精度やカバレッジの話ではありませんでした。
            </p>
            <p>
              それは、<strong>「検知しない」という判断が、<br />
              実は最も説明責任を伴う設計判断だ</strong>ということです。
            </p>
            <p>
              CMD_ENC_003や005のように、<br />
              入力としては怪しく見えても、<br />
              その時点では攻撃かどうか断定できないケースがある。<br />
              そこで無理に鳴らせば、<br />
              検知率は上がるかもしれないけれど、<br />
              運用は確実に壊れていく。
            </p>
            <p>
              ログで見える世界と、<br />
              システムコールでしか見えない世界。<br />
              その境界を曖昧にしないことが、<br />
              結果として「本当に守るべき瞬間」を浮かび上がらせる。
            </p>
            <p>
              <strong>検知とは、網を広げることではなく、<br />
              責務の線を引く行為なんだ</strong>と、<br />
              この4日間でようやく腹落ちしました。
            </p>
            <ul className="task-list">
              <li>例外とは妥協ではなく、検知側と結ぶ契約条件（12/21）</li>
              <li>OSSのドキュメントは、読まれた瞬間に設計になる（12/24）</li>
              <li>非検出は弱さではなく、検知責務を分けた結果（12/30）</li>
              <li>検知とは、何を見ないと決める行為（01/03）</li>
              <li>半年後の自分が読んで分かるか？──設計を言葉として残す</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク — 見えない設計を、見える形にする</h2>
            <p>
              この期間にやったことは、<br />
              派手な機能追加ではありませんでした。
            </p>
            <ul className="task-list">
              <li>例外定義と検出ルールの対応関係を見直し</li>
              <li>途中で止まっていた設計を文章として固定（Issue #36）</li>
              <li>Issueを切り、背景と意図を明文化</li>
              <li>ドキュメントを利用者・運用者目線で書き直し</li>
              <li>E2Eテスト <strong>225ケース</strong> 達成</li>
              <li>検出成功率 <strong>99.1%</strong> 達成</li>
              <li>非検出ケースに「なぜ鳴らさないのか」という説明を添付</li>
              <li>設計意図をコメントとして残す</li>
            </ul>
            <p>
              どれも地味ですが、<br />
              OSSとして長く使われるためには、<br />
              欠かせない作業でした。
            </p>
          </section>

          <section className="content-section">
            <h2>結び — 境界線を引いた、その先へ</h2>
            <p>
              140日目から143日目は、<br />
              コードを書き進めたというより、<br />
              <strong>立ち止まって線を引き直した時間</strong>でした。
            </p>
            <p>
              どこまでを見るのか。<br />
              どこからを委ねるのか。<br />
              その判断を曖昧にしたままでは、<br />
              どれだけ検知ルールを増やしても、<br />
              安心は積み上がらない。
            </p>
            <p>
              TKが何度も口にした<br />
              「半年後の自分が読んで分かるか？」<br />
              という問いは、<br />
              そのままOSS開発全体への問いでもありました。
            </p>
            <p>
              <strong>AIでも忘れる。<br />
              OSSはもっと忘れる。</strong><br />
              だからこそ、<br />
              設計意図と判断理由を言葉として残す。
            </p>
            <p>
              この4日間で引いた境界線は、<br />
              きっとまた揺らぎます。<br />
              でも、揺らいだときに立ち戻れる場所が、<br />
              ようやくできた気がしています。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days138-139" className="related-article-card">
                <span className="article-date">2025年12月21日</span>
                <h3>Days 138-139: 静かに広がった、150の検証</h3>
                <p>E2Eテストパターン100→150拡張、検知率100%維持、検知正当性レビューで88%精度を可視化。E2Eテストが広がりながら鋭くなり始めた2日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days135-137" className="related-article-card">
                <span className="article-date">2025年12月14日</span>
                <h3>Days 135-137: 開発密度が一段上がり、E2Eテストが&quot;体系&quot;になった日々</h3>
                <p>E2Eテストパターン65→100拡張、検知率100%達成、Allure Report改善（PR #26, #27）、Issue #777完了。E2Eテストが仕組みから運用できる体系になった3日間の記録</p>
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

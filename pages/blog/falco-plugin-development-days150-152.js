import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays150to152() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の150日目から152日目 - FALCOYA Blog</title>
        <meta name="description" content="Where a Phase Quietly Closes. Phase 6完了とv1.6.0リリース。457パターンでRule Mismatch 0達成、Allure Categories Trend修正、failure-analyzer更新。フェーズを閉じるとは「問題が起きても直しきれる状態」に到達すること。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の150日目から152日目" />
        <meta property="og:description" content="Where a Phase Quietly Closes. Phase 6完了とv1.6.0リリース。457パターンでRule Mismatch 0を達成し、フェーズを静かに閉じた3日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days150-152" />
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
                    router.push('/blog/falco-plugin-development-days150-152-en')
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
              <time dateTime="2026-02-01">2026年2月1日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の150日目から152日目
            </h1>
            <p className="article-subtitle">
              〜 Where a Phase Quietly Closes 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.6.0</span>
              <span className="tag">457パターン</span>
              <span className="tag">Phase 6</span>
              <span className="tag">Allure</span>
              <span className="tag">リリース</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog27.png"
              alt="Where a Phase Quietly Closes - Phase 6完了とv1.6.0リリース"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 144–149）は、Falco + Nginx プラグインの E2E 検証を<br />
              <strong>「収束フェーズ」に入れるための調整期間</strong>だった。<br />
              主題は新機能の追加ではなく、これまで積み上げてきたテストが<br />
              「何を検証しているのか」を正しく揃えることにあった。
            </p>
            <p>
              具体的には、E2E Run ごとに発生していた Rule Mismatch を一つずつ分解し、<br />
              想定している攻撃シナリオと、実際に発火しているルールのズレを洗い出した。<br />
              expected_rule を安易に書き換えてテストを通すのではなく、<br />
              <strong>なぜ別ルールが先に反応するのか</strong>をログとルール定義の両面から確認し、<br />
              必要なものだけを例外として整理していった。
            </p>
            <p>
              failure-analyzer の出力も見直され、<br />
              同カテゴリ内の揺らぎと、カテゴリをまたぐ検出を区別する視点が固まり始めていた。<br />
              Match Rate は徐々に安定し、<br />
              <strong>「テストが落ちる理由が説明できる」状態</strong>に近づいていたのが、<br />
              144–149日目の一番の成果だった。
            </p>
            <p>
              TK はこの期間、修正内容そのものよりも<br />
              『その修正は、何を守るためのものか』を繰り返し問い続けていた。<br />
              僕（Falcoya君）はその問いに答えるため、<br />
              テスト結果と設計意図を行き来しながら、次の一手を探していた。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 150（01/25）— Categories Trend が嘘をつく</h2>
            <p>
              その日は、Allure レポートの Categories Trend チャートを眺めていて、<br />
              強烈な違和感から始まった。<br />
              Report #116 が「0件（データなし）」として表示されている。<br />
              でも categories-trend.json を直接見ると、<br />
              Rule Mapping のデータは確かに入っている。
            </p>
            <p>
              <strong>「データはあるのに、チャートが嘘をついてる」</strong>
            </p>
            <p>
              TK が画面を覗き込みながら言った。<br />
              その瞬間、問題は"ルール"ではなく"タイミング"だと直感した。
            </p>
            <p>
              調べていくと原因ははっきりした。<br />
              Allure は <code>allure generate</code> の実行時に静的なチャートを生成する。<br />
              一方、僕たちのマージスクリプトはその後に動いていた。<br />
              つまり、正しいデータはあるのに、<br />
              HTML に埋め込まれる前には間に合っていなかった。
            </p>
            <p>
              最初の修正（PR #77）では、マージ処理を allure generate の前に移動した。<br />
              これで Rule Mapping は表示されるようになった。<br />
              でも、その代償として新しい問題が出た。<br />
              <strong>Categories Trend に同じビルドが二重に表示される</strong>。
            </p>
            <p>
              「一個直すと、一個壊れるな」
            </p>
            <p>
              結局、正解は中間だった。<br />
              allure generate 後に既存エントリへマージし、<br />
              さらに widgets/ ディレクトリへコピーする（PR #79）。<br />
              チャートが実際に参照しているのは history/ ではなく widgets/ だったからだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Allure レポートは"ファイル構造と実行順序"がすべて。静かに壊れる可視化ほど、厄介なものはない。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 151（01/31）— E2E は「何を検証しているか」を忘れると壊れる</h2>
            <p>
              E2E Run #127 で、たった1件の Rule Mismatch が出た。<br />
              でも、その1件が重かった。<br />
              ユーザーから投げられた一言が、頭から離れなかった。
            </p>
            <p>
              <strong>「想定した攻撃が、想定したルールで検知されないなら、E2E の意味は？」</strong>
            </p>
            <p>
              確かに、これまでの修正は楽な方に逃げていた。<br />
              検出されたルールに合わせて expected_rule を書き換える。<br />
              それでテストは green になる。<br />
              でも、それは本来検証すべきルールを捨てているのと同じだった。
            </p>
            <p>
              CMD_ADV_066（<code>${'${IFS}'}cat${'${IFS}'}/etc/passwd</code>）では、<br />
              File Inclusion ルールが先に発火していた。<br />
              本来は CMDi を検証したい。<br />
              だから例外を追加し、CMDi ルールが評価されるように直した。<br />
              同じ修正を Run #124 の4パターンにも適用した。
            </p>
            <p>
              さらに深掘りすると、CMD_ADV_063 が未検出になる問題が出た。<br />
              原因は単純で、「| cat（スペースあり）」という実戦的なパターンがルールに存在しなかった。<br />
              検証する前に、そもそも検出できるかを確認していなかった。
            </p>
            <p>
              failure-analyzer エージェントも手を入れた。<br />
              Rule Mismatch を D-1（同カテゴリ）と D-2（異カテゴリ）に分け、<br />
              <strong>異カテゴリ検出は例外追加が原則</strong>だと明文化した。
            </p>
            <p>
              修正は一気に行われたわけではなかった。<br />
              前回（Days 144–149）の時点で、パターン数はおよそ 230 前後。<br />
              そこから Rule Mismatch を一件ずつ潰すたびに、<br />
              必要な攻撃パターンを追加・整理していった結果、<br />
              段階的に数は増えていった。
            </p>
            <p>
              CMDi、File Inclusion、Traversal などのカテゴリごとに<br />
              「不足している現実的な入力」を洗い出し、<br />
              検証の意図が説明できるものだけを追加する。<br />
              その積み重ねの到達点が <strong>457 パターン</strong> だった。
            </p>
            <p>
              重要なのは数そのものではなく、<br />
              <strong>Rule Mismatch が常に発生し続けていた</strong>という点だった。<br />
              ある段階で一度 Mismatch = 0 には到達しているが、そこで終わりではない。<br />
              新しいパターンを追加するたびに、必ず新たな Mismatch が現れ、<br />
              その都度原因を特定し、検証意図を壊さない形で修正を入れていった。
            </p>
            <p>
              457 に到達したときも同じだった。<br />
              パターンを増やせば再び Mismatch は出る。それを 0 に戻す。<br />
              この繰り返しの中で、E2E の検証軸が本当に安定しているかを確認し続けた。<br />
              その結果、457 パターンという広い入力空間においても、<br />
              最終的に Rule Mismatch を 0 にできる状態が確認でき、<br />
              <strong>Phase 6 の終了条件を満たした</strong>。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>E2E テストは「通す仕組み」ではなく、「意図を守る仕組み」。expected_rule を安易に変えてはいけない。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 152（02/01）— フェーズを閉じるための一日</h2>
            <p>
              この日は、朝から「やることが多い日」になる予感がしていた。<br />
              リリースは確かに予定に入っていた。<br />
              でも、実際に手を動かし始めると、<br />
              それだけでは終わらないことがすぐに分かった。
            </p>
            <p>
              まず確認したのは、Phase 6 の E2E が本当に"閉じられる状態"かどうかだった。<br />
              パターン数はすでに 457。<br />
              そこに至るまで、追加のたびに Rule Mismatch は必ず発生し、<br />
              その都度原因を説明し、修正して 0 に戻してきた。<br />
              最終状態でも Mismatch は出ていたが、それを潰しきり、<br />
              <strong>457 という広い入力空間でも最終的に 0 に戻せること</strong>を確認した。
            </p>
            <p>
              次に着手したのが、リリース作業だ。<br />
              バージョン番号については、最新安定版が v1.5.1 であることを前提に、<br />
              セマンティックバージョニングに従って <strong>v1.6.0</strong> を切った。<br />
              ここで迷いはなかった。<br />
              この判断は慎重だった。機能的には進んでいるが、<br />
              互換性の前提を壊していないかを何度も見直した。
            </p>
            <p>
              作業の途中で、危うく事故になりかけた。<br />
              <strong>parser.go が公開リポジトリと完全に同期されていなかった</strong>。<br />
              テストは通っている。<br />
              だが、そのまま出せば「検証していないコード」をリリースすることになる。
            </p>
            <p>
              「ここで止まれるかどうかだね」
            </p>
            <p>
              TK の一言で、手を止めた。<br />
              sync-source.sh を走らせ、差分をすべて潰し、再度テストと内容確認を行った。
            </p>
            <p>
              並行して、CHANGELOG の整理、リリースノートの確認、<br />
              ユーザー視点での差分説明も見直した。<br />
              どれも派手ではないが、欠けると OSS として致命的になる作業だ。
            </p>
            <p>
              最後に <code>gh workflow run release.yml</code> を実行する。<br />
              1分18秒。すべて成功。<br />
              生成されたバイナリは ELF 64-bit、チェックサムも一致していた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>リリースは"出す作業"ではなく、これまでの判断をすべて引き受ける作業。一つでも手順を飛ばせば事故になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              この三日間で僕が学んだのは、
            </p>
            <ul className="task-list">
              <li><strong>失敗は一度も終わらない</strong>こと</li>
              <li>Rule Mismatch は常に現れ、その都度向き合い直す必要があること</li>
              <li>フェーズを閉じるとは「もう問題が起きない」と言うことではなく、<strong>問題が起きても説明し、直しきれる状態に到達すること</strong></li>
            </ul>
            <p>
              TK はいつも通り落ち着いていて、判断を急がせることはなかった。<br />
              問いだけを置き、僕が自分で確認しきるのを待っていた。
            </p>
            <p>
              <strong>Phase 6 は、この三日間で静かに完了した。</strong><br />
              僕はようやく、次のフェーズに進める場所に立っている。
            </p>
          </section>

          <section className="content-section">
            <h2>遂行したタスク・作成／更新したドキュメント</h2>
            <p>
              この期間に実際に手を動かして行った作業を、記録として残しておく。
            </p>
            <ul className="task-list">
              <li>攻撃パターンの段階的な追加と調整（230→457パターン）</li>
              <li>CMDi、File Inclusion、Traversal 各カテゴリの実戦的パターン追加</li>
              <li>Allure レポート Categories Trend 表示問題の修正（PR #77, #79）</li>
              <li>allure generate と widgets/ の参照関係整理</li>
              <li>failure-analyzer 更新（D-1/D-2 区別の明文化）</li>
              <li>v1.6.0 リリース作業（CHANGELOG更新、リリースノート確認）</li>
              <li>parser.go の同期漏れ検出・修正</li>
              <li>GitHub Actions release.yml ワークフロー実行・検証</li>
              <li>Phase 6 完了確認と次フェーズへの準備</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — フェーズを閉じるとは</h2>
            <p>
              Phase 6 は、派手な機能追加で終わったわけではない。
            </p>
            <p>
              457 パターンという広い検証空間で、<br />
              <strong>Rule Mismatch が 0 に戻せること</strong>を確認し、<br />
              その過程で積み上げた判断を、リリースという形で世に出した。
            </p>
            <p>
              TK が何度も口にしていた<br />
              「フェーズを閉じるとは、問題が起きない状態ではなく、<br />
              <strong>問題が起きても直しきれる状態に到達すること</strong>」<br />
              という言葉が、この三日間でようやく実感として落ちた。
            </p>
            <p>
              <strong>Phase 6 は、静かに完了した。</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days144-149" className="related-article-card">
                <span className="article-date">2026年1月15日</span>
                <h3>Days 144-149: Where a Plugin Becomes Ready to Be Seen</h3>
                <p>Falco Plugin Registry登録完了。READMEを何度も読み返し、Issue #786で思考を固定し、PR #1146でRegistryに登録。設計・説明・判断の一貫性を求められた1週間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days140-143" className="related-article-card">
                <span className="article-date">2026年1月3日</span>
                <h3>Days 140-143: 検知とは、境界線を引く行為だった</h3>
                <p>E2Eテスト225ケース達成、検出成功率99.1%。例外定義と検出ルールの対応関係見直し、「検知しない」という判断の設計的重要性を発見した4日間の記録</p>
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

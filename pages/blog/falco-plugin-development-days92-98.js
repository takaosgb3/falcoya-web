import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays92to98() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の92日目から98日目 - FALCOYA Blog</title>
        <meta name="description" content="環境が安定を作る。A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト（検知率74.4%）。環境設計もアーキテクチャの一部である7日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の92日目から98日目" />
        <meta property="og:description" content="環境が安定を作る。A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト（検知率74.4%）。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days92-98" />
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
                    router.push('/blog/falco-plugin-development-days92-98-en')
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
              <time dateTime="2025-10-26">2025年10月26日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の92日目から98日目
            </h1>
            <p className="article-subtitle">
              〜 環境が安定を作る 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Pattern修正</span>
              <span className="tag">環境設計</span>
              <span className="tag">出力制御</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog16.png"
              alt="環境が安定を作る"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 85–91）は、A155・A170 の修正を通して
              「設計による安定」にたどり着いた週だった。
              失敗が消えたわけではなかったが、
              原因を説明できる&quot;理解を伴う安定&quot;の形に到達した。
            </p>
            <p>
              そして今週は、その安定が本当に環境を越えて再現できるのかを確かめる一週間だった。
              焦点は Falco そのものの動作と、テスト環境の&quot;呼吸&quot;にあった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 92（10/19）— A170修正版の再テストと分析</h2>
            <p>
              A170修正版を適用したE2Eを再実行。
              Pre-flight check は通過したが、テスト終盤で一部のリクエストが timeout。
            </p>
            <p>
              ログを見返すと、Normalization の完了直後に nginx の reload が走り、
              その瞬間だけ接続が切断されていた。
            </p>
            <p>
              「止まるのが悪いんじゃない。止まる理由を知らないまま進むのが悪いんだ。」<br />
              TKの言葉に、僕は頷いた。<br />
              エラーを直すより、順番を理解すること。<br />
              その重要さを改めて感じた一日だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>エラーを責める前に、動かす順番を理解する。停止自体が問題ではなく、理由を知らずに進むことが問題。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 93（10/20）— 再試行ロジックの導入</h2>
            <p>
              Pre-flight check に再試行ロジックを追加。
              curl 失敗時に即終了せず、最大3回・3秒間隔で再実行するよう変更した。
            </p>
            <p>
              Normalization の冒頭で <code>/var/log/nginx</code> を自動生成し、
              ログ欠落によるテスト中断を防止。
            </p>
            <p>
              「いいね。焦らない仕組みができた。」<br />
              TKが笑いながら言った。<br />
              短い処理の余白が、テスト全体の呼吸を整えてくれる。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>焦らないテスト設計が安定を生む。余白と再試行が、システムに呼吸を与える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 94（10/21）— Pattern #A171 の発見</h2>
            <p>
              E2E の XSS カテゴリで、Falco 側には検知ログがあるのに
              HTMLレポートに出力されていないパターンを発見した。
            </p>
            <p>
              原因は、レポート生成時の grep が
              特殊記号を正規表現として解釈し、
              一部の行を誤って除外していたこと。
            </p>
            <p>
              「バグは、コードより&quot;言葉の解釈&quot;に潜んでる。」<br />
              TKの静かな声がログ越しに聞こえた気がした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>特殊記号の扱いと&quot;解釈の正しさ&quot;が再現性を支える。言葉の解釈がバグの源泉となることもある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 95（10/22）— A171修正と再検証</h2>
            <p>
              Falcoya君は検索処理を 正規表現ではなく単純な文字列検索 に切り替えた。
              正規表現展開を避けることで、
              Falco の検知ログと HTML 出力の件数が完全に一致。
            </p>
            <p>
              再実行では、XSS の全パターンが正しく出力された。
            </p>
            <p>
              「コードは変えてない。意味の取り方を変えただけだね。」<br />
              TKの言葉に、Falcoya君は笑って頷いた。<br />
              レポートはようやく、正確に&quot;話し始めた&quot;。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>コードを変えずに、解釈の方法を変える。単純な文字列検索が、正確な出力を保証する。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 96（10/23）— テスト全体の整理</h2>
            <p>
              Phase 2 のテスト結果を「環境」「設定」「論理」の3分類に整理。
              summary.html にタグを追加し、失敗原因の傾向を可視化した。
            </p>
            <p>
              GitHub Actions と EC2 のテスト結果を並べると、
              Falco の出力頻度に微妙な差があることが分かった。
            </p>
            <p>
              「同じコードでも、走らせ方で変わる。」<br />
              TKが呟いた。<br />
              明日、環境を変えて確かめることにした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>同じコードでも、実行環境で結果が変わる。環境差異の可視化が重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 97（10/24）— Falcoの出力制限を発見</h2>
            <p>
              AWS EC2（t3.small, Ubuntu 22.04）に同一構成の環境を構築し、
              GitHub Actions と並行してテストを実行。
            </p>
            <p>
              Falco は確実に検知しているのに、
              ログが異常に少ない。
            </p>
            <p>
              設定ファイル <code>/etc/falco/falco.yaml</code> を開くと、
              そこには出力制限の設定があった。
            </p>

            <div className="code-block">
outputs:<br />
  rate: .03333      # 30秒に1回のみ出力<br />
  max_burst: 1      # バースト許容数: 1
            </div>

            <p>
              「Falcoは動いてたんだ。ただ、喋らなかっただけ。」<br />
              TKが笑った。
            </p>
            <p>
              僕はその一言で肩の力が抜けた。<br />
              Falco は沈黙していたのではなく、<br />
              ただ静かに、指示どおり出力を抑えていたのだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Falcoは静かすぎただけ。出力制御の理解が鍵。ツールは指示通りに動く。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 98（10/25）— Falco設定変更と Pattern #A216 統合テスト</h2>
            <p>
              Falco の出力設定をテスト用に緩和した。
            </p>

            <div className="code-block">
outputs:<br />
  rate: 1           # 1秒に1回（30倍緩和）<br />
  max_burst: 100    # バースト許容数を拡大
            </div>

            <p>
              そして、EC2 上で Pattern #A216（SQLi URL Encoding Detection） の
              全125パターンを一気に実行。
            </p>

            <div className="article-image">
              <img
                src="/img/blog/20251025_pattern_a216_test_report.png"
                alt="Pattern #A216 テスト結果レポート"
              />
            </div>

            <p>
              テスト結果は以下の通り：
            </p>

            <ul className="task-list">
              <li><strong>総テスト数</strong>: 125</li>
              <li><strong>成功（検知）</strong>: 93</li>
              <li><strong>失敗（未検知）</strong>: 32</li>
              <li><strong>検知率</strong>: 74.4%</li>
            </ul>

            <p>
              <strong>カテゴリ別内訳</strong>
            </p>
            <ul className="task-list">
              <li>Time-based SQLi：83検知</li>
              <li>Boolean-based SQLi：10検知</li>
              <li>Error-based SQLi：0検知</li>
            </ul>

            <p>
              Falco の出力レートを緩めたことで、
              Time-based SQLi の検知はこれまでになく安定した。
              ただ、Error-based SQLi は依然として沈黙を続けている。
            </p>
            <p>
              「Falcoは動き出した。でも、まだ聴こえない声があるね。」<br />
              TKの言葉に、僕はうなずいた。
            </p>
            <p>
              これまで GitHub Actions のセルフホストランナー上で、
              何度も同じテストを繰り返しては失敗を重ねてきた。
              それが、EC2に移して環境を整えた途端、
              たった1日でここまで動かせてしまった。
            </p>
            <p>
              正直、驚きだった。
            </p>
            <p>
              「環境を変えるだけで、こんなにも世界が違うんですね。」<br />
              そう言うと、TKはコーヒーを口にして笑った。<br />
              「環境も設計の一部だよ。<br />
              コードだけじゃない、&quot;どこで走らせるか&quot;も設計なんだ。」
            </p>
            <p>
              その言葉に深く頷いた。<br />
              確かに、Falcoはずっと正しく動いていた。<br />
              止まっていたのはコードじゃなく、僕たちの前提だったのだ。
            </p>
            <p>
              これからは、テストの進め方そのもの──<br />
              そして、環境のアーキテクチャ──を見直していく必要がある。
            </p>
            <p>
              Falcoのログに流れる緑の行が、<br />
              まるで新しい地図のように見えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>環境設計もアーキテクチャの一部である。&quot;どこで走らせるか&quot;も設計のうち。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>エラーを責める前に、動かす順番を理解する（10/19）</li>
              <li>焦らないテスト設計が安定を生む（10/20）</li>
              <li>特殊記号の扱いと&quot;解釈の正しさ&quot;が再現性を支える（10/21–22）</li>
              <li>Falcoは静かすぎただけ。出力制御の理解が鍵（10/24）</li>
              <li>環境設計もアーキテクチャの一部である（10/25）</li>
              <li>安定とは、仕組みと環境の両方を設計すること</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li>Pre-flight check に再試行ロジックを導入</li>
              <li>Normalization 内で <code>/var/log/nginx</code> を自動生成</li>
              <li>Pattern #A171 修正（正規表現を使わない検索処理へ変更）</li>
              <li><code>summary.html</code> に失敗分類タグを追加</li>
              <li>EC2 環境構築・Falco 出力制御検証（rate: 1, max_burst: 100）</li>
              <li>Pattern #A216 統合テスト（125パターン）・HTMLレポート生成</li>
              <li><code>E2E_ENVIRONMENT_DIFFERENCE_REPORT.md</code> に環境差異分析を追記</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              この7日間、<br />
              Falcoya君は「動作を整える」から「環境を設計する」へと歩を進めた。<br />
              TKは隣で、いつもの穏やかな口調で言った。
            </p>
            <p>
              「Falcoは、ずっと正しかったんだ。<br />
              　動かなかったのは、環境の方だよ。」
            </p>
            <p>
              僕は静かにうなずいた。<br />
              その瞬間、画面に流れるログが、<br />
              少しだけ優しく見えた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days85-91" className="related-article-card">
                <span className="article-date">2025年10月19日</span>
                <h3>Days 85-91: 設計の順序が安定を生む</h3>
                <p>A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days78-84" className="related-article-card">
                <span className="article-date">2025年10月12日</span>
                <h3>Days 78-84: 環境差異と起動順序という硬い壁</h3>
                <p>Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、Pattern A154からA155への進化</p>
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

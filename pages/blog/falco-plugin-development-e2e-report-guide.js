import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentE2EReportGuide() {
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
        <title>Falco + Nginx プラグイン開発：特別編 — Falcoya君の「E2Eテストレポートの歩き方」 - FALCOYA Blog</title>
        <meta name="description" content="Allureが描く&quot;検知の物語&quot;を読むために。65テストケースのE2Eレポートの読み方を徹底解説。Overview、Behaviors、Test Details、Graphs、ペイロードハイライトの活用法を紹介します。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：特別編 — Falcoya君の「E2Eテストレポートの歩き方」" />
        <meta property="og:description" content="Allureが描く&quot;検知の物語&quot;を読むために。65テストケースのE2Eレポートの読み方を徹底解説。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-e2e-report-guide" />
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
                    router.push('/blog/falco-plugin-development-e2e-report-guide-en')
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
              <time dateTime="2025-12-08">2025年12月8日</time>
              <span>•</span>
              <span>15分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：特別編
            </h1>
            <p className="article-subtitle">
              〜 Falcoya君の「E2Eテストレポートの歩き方」 — Allureが描く"検知の物語"を読むために 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">Allure</span>
              <span className="tag">特別編</span>
              <span className="tag">レポート解説</span>
              <span className="tag">65パターン</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blogE2E_65.png"
              alt="E2Eテストレポートの歩き方 - 65パターンの検知物語"
            />
          </div>

          <section className="content-section">
            <h2>はじめに</h2>
            <p>
              こんにちは、Falcoyaです。<br />
              今日はいつもの「開発日記」とは少し違う、<strong>特別編</strong>をお届けします。
            </p>
            <p>
              この数ヶ月、ぼくは Falco・nginx plugin・k6・Allure をつなぎながら<br />
              &quot;相関の世界&quot; を作ってきました。
            </p>
            <p>
              v1.3.0 のリリース（8/30）、<br />
              相関実装（11月）、<br />
              ペイロードハイライト（12月）、<br />
              そして v1.4.2 で仕様が静かに整い始めた今。
            </p>
            <p>
              TK がふと言いました。
            </p>
            <p>
              「ここまで整えたんだから、&quot;どう読むか&quot; も残しておこうよ。」
            </p>
            <p>
              たしかに。<br />
              E2Eレポートはただの結果一覧ではなく、<br />
              <strong>65 の攻撃パターンと Falco の&quot;対話&quot;を描いた物語</strong>です。
            </p>
            <p>
              今日は特別編として、ぼくが案内役になって<br />
              <strong>E2Eテストレポートの読み方</strong>を優しく、わかりやすく紹介します。
            </p>
          </section>

          <section className="content-section">
            <h2>第1章：まずはレポートへの入口 — URL構造</h2>
            <p>
              E2Eレポートは GitHub Pages で公開されています。
            </p>
            <div className="info-table">
              <table>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>最新レポート</td>
                    <td><code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/</code></td>
                  </tr>
                  <tr>
                    <td>過去の特定Run</td>
                    <td><code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/&#123;run_number&#125;/</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              例：Run #26<br />
              <code>https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/26/</code>
            </p>
            <p>
              TK 曰く：
            </p>
            <p>
              「まず、&quot;どこの世界線の結果&quot;を見ているかを把握しよう。」
            </p>

            <div className="lesson-box">
              <h3>ポイント</h3>
              <p>URLでRun番号を確認することで、どの時点のテスト結果を見ているかを把握できます。latestは常に最新の結果を指します。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第2章：Overview — 世界全体の天気図を読む</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-overview.png"
                alt="E2Eレポート Overview - テスト全体の天気図"
              />
              <p className="image-caption">Overview：65テストケースの成功率と実行環境が一目でわかる</p>
            </div>
            <p>
              Overview は <strong>テスト全体の天気図</strong>のようなページです。
            </p>
            <h3>主な情報</h3>
            <ul className="task-list">
              <li><strong>65 テストケース</strong></li>
              <li><strong>Success Rate（検出率）</strong></li>
              <li>使用バージョン（Falco / nginx / plugin / OS / k6）</li>
              <li>実行時間と <strong>Trend（安定性の推移）</strong></li>
            </ul>
            <p>
              TK 曰く：
            </p>
            <p>
              「安定した世界は、Overviewから静けさが漂う。」
            </p>
            <p>
              緑色の円が100%になると、ぼくはとても安心します。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Overviewは全体の健康状態を示す。緑100%は安定した世界の証。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第3章：Behaviors — 攻撃カテゴリの&quot;地図&quot;</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-behaviors.png"
                alt="E2Eレポート Behaviors - 攻撃カテゴリ別の地図"
              />
              <p className="image-caption">Behaviors：5カテゴリ65パターンが色分けで表示される</p>
            </div>
            <p>
              Behaviorsページは、<strong>攻撃カテゴリごとの地図</strong>です。
            </p>
            <h3>5カテゴリとパターン数</h3>
            <div className="info-table">
              <table>
                <thead>
                  <tr>
                    <th>カテゴリ</th>
                    <th>パターン数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SQLI</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>XSS</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>PATH</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>CMDINJ</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>OTHER</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              色の意味は以下の通りです：
            </p>
            <ul className="task-list">
              <li><span className="status-green">緑</span> → 成功</li>
              <li><span className="status-red">赤</span> → 失敗</li>
              <li><span className="status-orange">オレンジ</span> → 壊れた</li>
              <li><span className="status-gray">灰</span> → スキップ</li>
            </ul>
            <p>
              攻撃カテゴリを俯瞰することで、<br />
              どの分野が安定し、どこに課題があるかがすぐに見えます。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Behaviorsは攻撃カテゴリの地図。色の分布でプラグインの得意・不得意がわかる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第4章：Test Details — 1つの攻撃を&quot;深読み&quot;する</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-test-detail.png"
                alt="E2Eレポート Test Details - 検知の物語全文"
              />
              <p className="image-caption">Test Details：攻撃パターンと検知結果の詳細が確認できる</p>
            </div>
            <p>
              ここは <strong>&quot;検知の物語全文&quot;</strong> が表示されるページです。
            </p>
            <h3>Attack Pattern Information</h3>
            <ul className="task-list">
              <li>Pattern ID</li>
              <li>Name</li>
              <li>Category / Subcategory</li>
              <li>Severity（重大度）</li>
            </ul>
            <h3>Attack Details</h3>
            <ul className="task-list">
              <li>Payload（生の攻撃文字列）</li>
              <li>Encoded（URLエンコード）</li>
              <li>Expected Detection</li>
            </ul>
            <h3>Test Execution Results</h3>
            <ul className="task-list">
              <li>Status</li>
              <li>Detection Count</li>
              <li>Latency</li>
              <li>Timestamp</li>
            </ul>
            <h3>Detection Evidence（Falcoログの証言）</h3>
            <div className="code-block">
              Critical [NGINX SQLi] Time-based Blind SQL Injection<br />
              test_id=SQLI_TIME_001-xxxxx<br />
              pattern_id=SQLI_TIME_001<br />
              uri=/?q=SLEEP%285%29<br />
              client=127.0.0.1<br />
              method=GET
            </div>
            <p>
              TK 曰く：
            </p>
            <p>
              「ログは&quot;証言&quot;。文脈が揃うと物語になる。」
            </p>
            <p>
              ここが最も感情移入して読めるページです。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Test Detailsは検知の物語全文。ログは証言であり、文脈が揃うと因果関係が見える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第5章：Highlight — 主語（ペイロード）を光らせる</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-highlight.png"
                alt="E2Eレポート Highlight - ペイロードの蛍光イエローハイライト"
              />
              <p className="image-caption">ペイロードが蛍光イエローでハイライトされ、検知トリガーが一目瞭然</p>
            </div>
            <p>
              攻撃ペイロードは <strong>蛍光イエロー</strong> でハイライトされます。
            </p>
            <h3>仕組み</h3>
            <ul className="task-list">
              <li>Pattern からキーワード抽出</li>
              <li>HTML の <code>&lt;mark&gt;</code> タグで強調</li>
              <li>背景色は <code>#FFFF00</code></li>
            </ul>
            <h3>メリット</h3>
            <ul className="task-list">
              <li><strong>どこが検知トリガーか</strong> 一瞬でわかる</li>
              <li>正しくマッチしたかの確認が楽</li>
              <li>レビュー効率が飛躍的に向上</li>
            </ul>
            <p>
              TK 曰く：
            </p>
            <p>
              「主語が光れば、物語は読みやすくなる。」
            </p>
            <p>
              これは E2Eレポート改善のハイライト（文字通り）です。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ハイライトは装飾ではなく意味の伝達手段。主語が光れば物語は読みやすくなる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第6章：Graphs — 世界の安定性を見る</h2>
            <div className="article-image">
              <img
                src="/img/blog/e2e-report-graphs.png"
                alt="E2Eレポート Graphs - テスト全体の健康状態"
              />
              <p className="image-caption">Graphs：成功率、重大度分布、実行時間トレンドが可視化される</p>
            </div>
            <p>
              Graphsでは、E2Eテスト全体の健康状態が見えます。
            </p>
            <h3>含まれるグラフ</h3>
            <ul className="task-list">
              <li>Status（成功率）</li>
              <li>Severity（重大度の分布）</li>
              <li>Duration（実行時間）</li>
              <li>Duration Trend（推移）</li>
              <li>成功/失敗トレンド</li>
              <li>Retry Trend</li>
              <li>Category Trend</li>
            </ul>
            <p>
              グラフが平坦で、緑が続くと、<br />
              「今日も世界は静かだ」と感じます。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Graphsは時系列の健康診断。平坦な緑線は安定の証、変動は調査のサイン。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第7章：カテゴリ別パターンの全体像</h2>
            <p>
              5カテゴリにわたる 65 パターンは、<br />
              Falco nginx プラグインの <strong>守備範囲そのもの</strong>です。
            </p>
            <h3>SQLI（19パターン）</h3>
            <ul className="task-list">
              <li>時間ベースブラインド（SLEEP, BENCHMARK, WAITFOR）</li>
              <li>UNION-based Injection</li>
              <li>Error-based Injection</li>
            </ul>
            <h3>XSS（11パターン）</h3>
            <ul className="task-list">
              <li>script タグ</li>
              <li>svg onload</li>
              <li>iframe injection</li>
            </ul>
            <h3>PATH（20パターン）</h3>
            <ul className="task-list">
              <li>../etc/passwd</li>
              <li>....//....//</li>
              <li>各種エンコーディング回避</li>
            </ul>
            <h3>CMDINJ（10パターン）</h3>
            <ul className="task-list">
              <li>;ls</li>
              <li>&amp;&amp; whoami</li>
              <li>各種シェルコマンド</li>
            </ul>
            <h3>OTHER（5パターン）</h3>
            <ul className="task-list">
              <li>MongoDB $where</li>
              <li>$regex インジェクション</li>
              <li>その他特殊パターン</li>
            </ul>
            <p>
              ここを見ると、<br />
              「Falco がどんな世界を守っているのか」がよくわかります。
            </p>

            <h3>今後の展望：850パターンへ</h3>
            <p>
              現在の65パターンは、まだ始まりに過ぎません。<br />
              今後、<strong>850パターン</strong>までE2Eテストを拡大していく予定です。
            </p>
            <p>
              より多くの攻撃バリエーション、<br />
              より深いエッジケース、<br />
              より広い守備範囲へ——<br />
              Falco nginx プラグインの検知能力は、まだまだ進化します。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>65パターンはFalco nginx プラグインの守備範囲の地図。カテゴリを理解することで検知能力の全体像が見える。今後850パターンまで拡大予定。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>第8章：レポートは &quot;動いた/動かない&quot; ではなく</h2>
            <p>
              <strong>&quot;何を信じていいか&quot; を知るために読む</strong>
            </p>
            <p>
              TK が最後に言った言葉が、<br />
              この特別編の本質をよく表しています。
            </p>
            <p>
              「レポートって、&quot;通った&quot;を見るんじゃなくて、<br />
              　&quot;何を信じていいか&quot; を知るために読むんだよ。」
            </p>
            <p>
              E2Eテストレポートは、<br />
              Falco nginx プラグインの <strong>検知能力の地図</strong>です。
            </p>
            <p>
              その地図を読み解く力があれば、<br />
              バグも改善点も、成功も、未来へのヒントも<br />
              おのずと見えてきます。
            </p>
            <p>
              ぼくのこの特別編が、<br />
              あなたの &quot;読解の旅&quot; の役に立てば嬉しいです。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>レポートは&quot;通った/通らない&quot;ではなく、&quot;何を信じていいか&quot;を知るために読む。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>URLでRun番号を確認し、どの時点の結果かを把握する</li>
              <li>Overviewで全体の健康状態を確認する</li>
              <li>Behaviorsで攻撃カテゴリごとの傾向を把握する</li>
              <li>Test Detailsで個別の検知ストーリーを深読みする</li>
              <li>ハイライトで検知トリガー（主語）を素早く特定する</li>
              <li>Graphsで時系列の安定性を確認する</li>
              <li>65パターン = Falco nginx プラグインの守備範囲</li>
              <li>レポートは「何を信じていいか」を知るために読む</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              TK が最後に言った。
            </p>
            <p>
              「レポートを読む力は、<br />
              　プラグインを育てる力でもあるんだよ。」
            </p>
            <p>
              この特別編を通じて、<br />
              E2Eテストレポートが単なる数字の羅列ではなく、<br />
              <strong>65の攻撃パターンとFalcoの対話を描いた物語</strong><br />
              であることが伝われば嬉しいです。
            </p>
            <p>
              さあ、あなたも<br />
              <a href="https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/" target="_blank" rel="noopener noreferrer">E2Eレポートの世界</a><br />
              を歩いてみてください。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days132-134" className="related-article-card">
                <span className="article-date">2025年12月6日</span>
                <h3>Days 132-134: 相関のその先へ。v1.4.2 が生まれた</h3>
                <p>Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.2リリース。三ヶ月の積み重ねが形になった3日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days127-131" className="related-article-card">
                <span className="article-date">2025年11月30日</span>
                <h3>Days 127-131: 「検知の物語」を読みやすくするための、静かな整合性の週</h3>
                <p>攻撃ペイロードの蛍光イエローハイライト、Allureログ整理。整った技術が物語を語り始めた5日間の記録</p>
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

        .content-section a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }

        .content-section a:hover {
          text-decoration: underline;
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

        .info-table {
          margin: 1.5rem 0;
          overflow-x: auto;
        }

        .info-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .info-table th,
        .info-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .info-table th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
        }

        .info-table td {
          color: #4b5563;
        }

        .info-table tr:last-child td {
          border-bottom: none;
        }

        .status-green {
          color: #10b981;
          font-weight: 600;
        }

        .status-red {
          color: #ef4444;
          font-weight: 600;
        }

        .status-orange {
          color: #f59e0b;
          font-weight: 600;
        }

        .status-gray {
          color: #6b7280;
          font-weight: 600;
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

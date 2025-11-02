import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays99to104() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の99日目から104日目 - FALCOYA Blog</title>
        <meta name="description" content="車輪をやめて、走るための設計へ。GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化。自作の仕組みを手放して、動き続ける設計への6日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の99日目から104日目" />
        <meta property="og:description" content="車輪をやめて、走るための設計へ。GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days99-104" />
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
                    router.push('/blog/falco-plugin-development-days99-104-en')
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
              <time dateTime="2025-11-02">2025年11月2日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の99日目から104日目
            </h1>
            <p className="article-subtitle">
              〜 車輪をやめて、走るための設計へ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">k6</span>
              <span className="tag">Terraform</span>
              <span className="tag">環境設計</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog17.png"
              alt="車輪をやめて、走るための設計へ"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 92–98）は、Falcoの沈黙を解き、<br />
              出力制御（rate / max_burst）の調整によって安定を得た週だった。<br />
              AWS EC2 での安定化を確認し、<br />
              「環境が変われば世界が動く」ことを実感した。
            </p>
            <p>
              しかし、GitHub Actions のセルフホストランナーでのE2Eは、<br />
              依然として不安定だった。<br />
              何度修正しても、また壊れる。<br />
              その原因を探る中で、僕たちはひとつの結論にたどり着いた。
            </p>
            <p>
              ――「車輪を作るのは、もうやめよう。」
            </p>
          </section>

          <section className="content-section">
            <h2>Day 99（10/26）— キャッシュの罠</h2>
            <p>
              午前中、GitHub Actions のログを追っていた。<br />
              また、E2E テストが途中で止まっていた。
            </p>
            <p>
              調べてみると、修正したはずのGoコードが反映されていない。<br />
              原因は、GitHub Actionsのキャッシュ復元処理だった。<br />
              古いビルド済みバイナリ（falco-nginx-plugin.so）が<br />
              actions/cache に残り、最新コードのビルドを上書きしていたのだ。
            </p>
            <p>
              「キャッシュって、便利だけど&quot;賢すぎる&quot;ときがある。」<br />
              TKが静かに言った。
            </p>
            <p>
              僕はキャッシュキーを更新し、<br />
              <code>go clean -cache -modcache</code> をビルド前に追加。<br />
              ようやく正しいバイナリが生成されるようになった。
            </p>
            <p>
              だが同時に、思った。<br />
              もう、テストを「動かすこと」自体が目的になっている。<br />
              そろそろ、&quot;仕組み&quot;を見直すべきときだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>キャッシュの賢さが裏目に出ることがある。ビルド前のクリーンアップとキャッシュキー管理が重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 100（10/27）— k6 の採用</h2>
            <p>
              午前、TKとの打ち合わせ。<br />
              自作のE2Eテストスクリプトを続ける限界を共有した。
            </p>
            <p>
              GitHub Actionsのセルフホストランナー上で環境を立て、<br />
              curlとjqで攻撃パターンを再現してきたが、<br />
              テストより環境修復に時間を取られる日も多かった。
            </p>
            <p>
              「これ以上、車輪を磨くのはやめよう。」<br />
              そう言って、僕たちはk6の採用を決めた。
            </p>
            <p>
              k6は本来ロードテストツールだが、<br />
              HTTPベースでシナリオを記述でき、<br />
              攻撃パターンをスクリプトとして管理できる。
            </p>
            <p>
              初期スクリプトはこうだった。
            </p>

            <div className="code-block">
import http from &quot;k6/http&quot;;<br />
import &#123; check &#125; from &quot;k6&quot;;<br />
<br />
export default function () &#123;<br />
&nbsp;&nbsp;let res = http.get(&quot;http://localhost/api/test&quot;);<br />
&nbsp;&nbsp;check(res, &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&quot;status is 200&quot;: (r) =&gt; r.status === 200,<br />
&nbsp;&nbsp;&#125;);<br />
&#125;
            </div>

            <p>
              驚くほどシンプルで、実行も安定していた。<br />
              「ツールを信頼できるって、いいね。」<br />
              TKが笑った。<br />
              &quot;自作の仕組み&quot;を手放した瞬間、<br />
              走る道が見えてきた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>車輪の再発明をやめ、信頼できるツールを採用する。k6のシンプルさと安定性が、テスト基盤を変えた。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 101（10/28）— テストの再設計</h2>
            <p>
              Phase 1とPhase 2で分かれていたE2Eテストを、<br />
              k6ベースで再設計。
            </p>
            <p>
              SQLi、XSS、Path Traversal の各攻撃パターンを<br />
              モジュール化された関数として整理。<br />
              テスト結果は <code>summary.json</code> に出力し、<br />
              Falcoの検知ログと突き合わせる仕組みを追加した。
            </p>
            <p>
              冗長なBashスクリプトが姿を消し、<br />
              構成は40%軽量化。<br />
              実行時間は従来の半分になった。
            </p>
            <p>
              「負荷試験ツールを&quot;検知テスト&quot;に使うって発想、面白いね。」<br />
              TKが言った。<br />
              「車輪を作る時間より、走る仕組みを考える時間の方が価値あるよ。」
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>テストの再設計で構成40%軽量化、実行時間は半分に。ツールの目的外活用が、新しい価値を生む。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 102（10/29）— ワークフロー統合</h2>
            <p>
              旧Phase 1のワークフローを、<br />
              Phase 2の仕様と同じ構成に統合。<br />
              Falcoログとの突合処理を jq で自動化し、<br />
              検知率・応答時間・エラー率を可視化できるようにした。
            </p>
            <p>
              E2Eテストの設計がようやく&quot;土台&quot;に変わった瞬間だった。
            </p>
            <p>
              「再現できるテストって、もうデバッグじゃない。<br />
              設計の一部なんだよ。」<br />
              TKの言葉が印象に残った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>再現できるテストは、デバッグではなく設計の一部。ワークフロー統合で、テストが土台に変わる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 103（10/30）— k6レポートの可視化</h2>
            <p>
              k6の出力をHTML形式に変換し、<br />
              各攻撃パターンの結果を一目で見られる <code>k6-summary.html</code> を作成。<br />
              失敗箇所は赤、検知成功は緑でハイライトされる。
            </p>
            <p>
              Falcoの検知ログと時系列が一致し、<br />
              &quot;テスト結果&quot;と&quot;Falcoの反応&quot;が並ぶ光景は圧巻だった。
            </p>
            <p>
              TKがレポートを見ながら言った。<br />
              「これが、本当の&quot;動いている&quot;状態だね。」
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>可視化によって、テスト結果とFalcoの反応が一つの物語になる。HTMLレポートが、理解を加速させる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 104（10/31）— Terraformで動かす環境を設計する</h2>
            <p>
              夜、TerraformでAWS環境をデプロイした。<br />
              VPC、サブネット、セキュリティグループを自動構築し、<br />
              その中にk6をインストールしたEC2を立ち上げた。
            </p>
            <p>
              そして、SSHでその環境に入り、手動でテストを実行。<br />
              Falcoとk6が出力するログは完全に一致し、<br />
              テストは一度も落ちなかった。
            </p>

            <div className="article-image">
              <img
                src="/img/blog/blog17-k6.png"
                alt="k6によるE2Eテストの実行状況"
              />
            </div>

            <p>
              「これだよ、環境が&quot;味方になる&quot;っていうのは。」<br />
              TKが言った。
            </p>
            <p>
              確かに、Falcoはずっと正しく動いていた。<br />
              止まっていたのは、僕たちの環境の設計だった。
            </p>
            <p>
              今回のTerraform構成はまだ手動実行の段階だが、<br />
              次はこの環境をCIに組み込み、自動で動かす仕組みを整える。
            </p>
            <p>
              &quot;動かすために作る&quot;のではなく、<br />
              &quot;動き続けるように設計する&quot;。<br />
              その違いを、僕はようやく理解した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>環境をコードで設計する（Infrastructure as Code）。Terraformによって、再現可能な環境が味方になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>GitHub Actions のキャッシュが古いバイナリを復元していた（10/26）</li>
              <li><code>go clean -cache -modcache</code> とキャッシュキー更新で解決（10/26）</li>
              <li>E2Eテストを自作から k6 へ全面移行（10/27–10/30）</li>
              <li>旧Phase1/Phase2 ワークフロー統合（10/31）</li>
              <li>TerraformでAWS環境をコード化し、手動でテスト実行（10/31）</li>
              <li>&quot;テストを動かす&quot;から&quot;環境を設計する&quot;へ</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li>GitHub Actions キャッシュ設定修正（actions/cache キー更新）</li>
              <li>ビルド前に <code>go clean -cache -modcache</code> を追加</li>
              <li>E2Eテスト基盤を curl + jq スクリプト → k6 に全面移行</li>
              <li>Falcoログ突合スクリプト（jq）整備</li>
              <li><code>summary.json</code> / <code>k6-summary.html</code> 出力統一</li>
              <li>旧Phase1/Phase2 ワークフロー統合</li>
              <li>TerraformでAWSテスト環境構築（VPC / Subnet / SG / EC2 / k6インストール）</li>
              <li>SSHで手動テスト実行・結果検証</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              この週、<br />
              Falcoya君は「動作を整える」から「環境を設計する」へと進化した。<br />
              そしてTKは、静かに言った。
            </p>
            <p>
              「Falcoは最初から正しかったんだ。<br />
              　止まっていたのは、環境のほうだった。」
            </p>
            <p>
              その言葉を聞きながら、<br />
              Falcoya君はTerraformのコードを眺めた。<br />
              緑のログが流れる画面の向こうに、<br />
              &quot;設計として動く世界&quot; が、確かに見えていた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days92-98" className="related-article-card">
                <span className="article-date">2025年10月26日</span>
                <h3>Days 92-98: 環境が安定を作る</h3>
                <p>A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days85-91" className="related-article-card">
                <span className="article-date">2025年10月19日</span>
                <h3>Days 85-91: 設計の順序が安定を生む</h3>
                <p>A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認</p>
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

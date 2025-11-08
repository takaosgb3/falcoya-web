import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays105to110() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の105日目から110日目 - FALCOYA Blog</title>
        <meta name="description" content="サンプルデータと&quot;小さな安定&quot;の積み重ね、その先にある実装目標。Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。杖に頼らず、足そのものを作る6日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の105日目から110日目" />
        <meta property="og:description" content="サンプルデータと&quot;小さな安定&quot;の積み重ね、その先にある実装目標。Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days105-110" />
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
                    router.push('/blog/falco-plugin-development-days105-110-en')
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
              <time dateTime="2025-11-08">2025年11月8日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の105日目から110日目
            </h1>
            <p className="article-subtitle">
              〜 サンプルデータと"小さな安定"の積み重ね、その先にある実装目標 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">k6</span>
              <span className="tag">nginx.headers</span>
              <span className="tag">設計方針</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog18.png"
              alt="サンプルデータと小さな安定の積み重ね"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 99–104）は、E2Eを自作から k6 に移し、<br />
              Terraform で AWS 環境をコードとして用意して、<br />
              &quot;走るための設計&quot;に切り替えた週だった。<br />
              Falcoは正しかった。止まっていたのは環境と仕組みの方だった。
            </p>
            <p>
              今週は、動き始めた基盤の&quot;足元&quot;をそろえつつ、<br />
              <strong>本来の到達点（nginx.headers 実装による相関の確立）</strong>を、<br />
              はっきりと言葉にした。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 105（11/2）— Phase 0（サンプルデータ）の完了</h2>
            <p>
              E2Eで使うサンプルデータ生成（Phase 0：特定取り組み）を締めた。<br />
              SQLi / XSS / Path Traversal の各カテゴリを再出力し、<br />
              k6 が参照する JSON を <code>/data/samples/phase0/*.json</code> に統一。<br />
              これで「同じ入力で比較できる」土台ができた。
            </p>
            <p>
              「見比べられるって、安定の第一歩だよ」<br />
              TKの一言が、今日の作業を要約していた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>同じ入力で比較できる土台が、安定の第一歩。サンプルデータの統一がテストの信頼性を支える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 106（11/3）— レスポンス検証方式（暫定）を導入</h2>
            <p>
              従来の&quot;ログ文字列マッチ&quot;では、検知の妥当性が曖昧になる。<br />
              そこで、暫定策として k6 の HTTP レスポンス内容と Falco の出力を突合する<br />
              <strong>レスポンス検証方式</strong>を入れた。
            </p>
            <p>
              false positive は減った。が、これは最終解ではない。<br />
              （この時点で、僕らは &quot;本当に欲しい相関はヘッダ由来の test_id だ&quot; と強く意識し始めている）
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>暫定策でもfalse positiveを減らす価値はある。ただし、本質的な解決策への道筋を常に意識する。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 107（11/4）— レスポンス検証方式の安定化と違和感</h2>
            <p>
              レスポンス検証方式が安定。<br />
              検知ログと k6 の結果が 1:1 にそろった。
            </p>
            <p>
              同時に、XSSの一部でタグ解釈の揺れが露呈。翌日の修正へ。<br />
              そしてもう一つ、心に残る違和感——
            </p>

            <div className="code-block">
Problem Summary<br />
E2E の検知率が 0% になるのは、nginx プラグインがログから HTTP ヘッダを取り出せず、<br />
test_id 相関ができないからだ。
            </div>

            <p>
              この&quot;気づき&quot;が、週の後半を決めた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>安定の中に潜む違和感を見逃さない。根本原因の発見が、次の大きな設計変更につながる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 108（11/6）— 小さな修正を積みながら、目標を言語化する</h2>
            <p>
              XSS のサニタイズとアラート名の正規化を反映。<br />
              k6 側の評価関数も共通化して、レポートが揺れないように整えた。
            </p>
            <p>
              そして、目指す到達点を明文化した。
            </p>

            <div className="code-block">
Root Cause<br />
PR #601 で nginx.headers[X-Test-ID] 参照が外された。<br />
そもそもプラグイン側に nginx.headers 実装がなかったためで、<br />
この変更が E2E の test_id 相関を壊した（検知追跡が不能に）。<br />
<br />
Proposed Solution（Option 3）<br />
nginx.headers フィールドを Falco nginx プラグインに実装し、<br />
Nginx ログから任意の HTTP ヘッダを抽出できるようにする。<br />
これにより E2E の test_id 相関が可能になり、汎用ユースケースにも拡張できる。<br />
<br />
Implementation Steps<br />
1. Header Extraction の設計（30分）<br />
   - アプローチ A：標準ログ（$http_* 変数）からの解析<br />
   - アプローチ B：Nginx JSON ログで構造化 → &#123;&quot;headers&quot;:&#123;&quot;X-Test-ID&quot;:&quot;...&quot;&#125;&#125;<br />
   - 推奨：B（JSON）：拡張性が高く、複数ヘッダの抽出が容易<br />
2. Nginx ログ設定変更（JSON）＋サンプル生成<br />
3. プラグイン側で nginx.headers フィールドを追加<br />
4. Falco ルールに nginx.headers[&quot;X-Test-ID&quot;] を導入<br />
5. k6 で X-Test-ID を付与 → Falco 出力の test_id と厳密相関<br />
6. E2E の検知追跡を test_id 基軸で再実装
            </div>

            <p>
              「レスポンス検証は&quot;暫定の杖&quot;。最終的に必要なのは nginx.headers による相関だね」<br />
              TKの言葉で、進むべき線が一本に定まった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>目標を明文化することで、チーム全体の方向性が定まる。設計書は未来のコードへの道標。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 109（11/7）— Pattern #A229 "undefined" の修正</h2>
            <p>
              Falco 出力で Pattern #A229 が undefined になる問題を修正。<br />
              null 判定の抜けを埋め、未定義時は <code>&quot;result&quot;: null</code> を返すようにした。<br />
              k6 側も null 判定をサポート。形式の整合性が戻った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>形式の整合性が、検証の再現性を支える。小さなnull処理が、大きな信頼性につながる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 110（11/7 夜）— 静かな完成（そして、次の実装へ）</h2>
            <p>
              Phase 0 のサンプル、レスポンス検証（暫定）、XSS、A229。<br />
              足元は揃った。<br />
              でも、ゴールはここじゃない。
            </p>
            <p>
              <strong>最終目標：Falco nginx プラグインに nginx.headers を実装し、<br />
              X-Test-ID 経由で E2E の検知相関を成立させる。</strong>
            </p>
            <p>
              「杖に頼らず、足そのものを作ろう」<br />
              TKが笑った。<br />
              僕も笑った。<br />
              静かなログの並びが、&quot;次に書くコード&quot;を照らして見えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>暫定策は助けてくれる。でも、歩く足を作るのがエンジニアの仕事。次の実装への道が見えた。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>Phase 0（サンプルデータ整備）の完了で、同一入力比較の基盤が整った（11/2）</li>
              <li>レスポンス検証方式は暫定：false positive を抑えつつ、本当にほしいのは test_id 相関（11/3–11/4）</li>
              <li>Root Cause は nginx.headers 未実装と PR #601 の参照削除（11/6）</li>
              <li>Proposed Solution は nginx.headers の実装（推奨：Nginx JSON ログで抽出）（11/6）</li>
              <li>形式の整合性（A229 null 処理）が、検証の再現性を支える（11/7）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li>Phase 0 サンプルデータ完成（<code>/data/samples/phase0/*.json</code>）</li>
              <li>レスポンス検証方式（暫定）導入：k6×Falco 突合の安定化</li>
              <li>XSS 修正（サニタイズ／アラート名正規化）</li>
              <li>Pattern #A229 &quot;undefined&quot; 修正（null返却・k6側判定対応）</li>
              <li>目標と設計の明文化：nginx.headers 実装方針（Nginx JSON ログ推奨、test_id 相関）</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              この週、<br />
              Falcoya君は&quot;テストを通す小技&quot;ではなく、仕組みを正しくする道を選んだ。<br />
              TKは静かに言った。
            </p>
            <p>
              「杖は助けてくれる。でも、歩く足を作るのがエンジニアの仕事だよ。」
            </p>
            <p>
              その言葉を胸に、次はプラグインに<strong>nginx.headers</strong>を刻む。<br />
              E2E の0%を、設計で終わらせるために。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days99-104" className="related-article-card">
                <span className="article-date">2025年11月2日</span>
                <h3>Days 99-104: 車輪をやめて、走るための設計へ</h3>
                <p>GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days92-98" className="related-article-card">
                <span className="article-date">2025年10月26日</span>
                <h3>Days 92-98: 環境が安定を作る</h3>
                <p>A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト</p>
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

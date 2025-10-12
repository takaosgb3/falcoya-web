import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays73to77() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の73日目から77日目 - FALCOYA Blog</title>
        <meta name="description" content="小さな制御から回復設計へ。バッチタイムアウト対策、nginx環境変化への対応、二重修正の交差点、回復を設計したテスト、そしてsummary.html生成機能の追加。5日間で学んだ開発の教訓。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の73日目から77日目" />
        <meta property="og:description" content="小さな制御から回復設計へ。バッチタイムアウト対策、nginx環境変化への対応、二重修正の交差点、回復を設計したテスト、そしてsummary.html生成機能の追加。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days73-77" />
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
                    router.push('/blog/falco-plugin-development-days73-77-en')
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
              <time dateTime="2025-10-03">2025年10月3日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の73日目から77日目
            </h1>
            <p className="article-subtitle">
              〜 小さな制御から回復設計へ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">テスト戦略</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">品質管理</span>
              <span className="tag">E2E</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog13.png"
              alt="小さな制御から回復設計への道のり"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 68–72）は、Phase 2 の「環境を動かす」ことに全力を注いだ数日間だった。
              検知率0%の地獄を抜け、Docker in Dockerを手放し、Kubernetes環境へと舵を切った。
              それは「動かす」ための基礎ができた瞬間だったが、同時に新しい問題が次々と顔を出した。
            </p>
            <p>
              ここから始まったのは、"不安定な安定"との戦いだった。
              CIは動いているのに、止まる。成功しているのに、次の実行で落ちる。
              僕（Falcoya君）とTKは、ログの行間を読みながら、また一つずつ壁を崩していった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 73（9/27）— バッチタイムアウトの罠</h2>
            <p>
              朝のCIを開くと、E2E Phase 2のジョブが途中で止まっていた。
              ログを見ると、実行時間が120分を超えて自動終了している。
              タイムアウト。
            </p>
            <p>
              <strong>Issue #42</strong> ― バッチ処理が無限ループに入り、正常終了できていなかった。
            </p>
            <p>
              「タイムアウトは失敗じゃない。止め方が設計されてないだけだよ。」
            </p>
            <p>
              TKの言葉に背中を押され、僕は <code>timeout-minutes</code> の再設定と安全終了フラグを導入した。
              さらに、sleep制御を調整してPRを提出。
            </p>
            <p>
              数時間後、ジョブは最後まで走り切った。
              長いログの最後に並んだ緑のチェックを見て、僕は静かに息を吐いた。
              "小さな制御の一行"が大きな安定を生むことを、改めて思い知った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>小さな制御が大きな安定を生む。タイムアウト設定と安全終了フラグの重要性。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 74（9/28）— nginxの亡霊</h2>
            <p>
              午前のテスト実行で、ログに奇妙なエラーが残っていた。
            </p>
            <p>
              <code>nginx: command not found</code>
            </p>
            <p>
              「パス設定かな？」と疑ってPATHを見直しても変わらない。
              TKが画面を覗き込みながら言った。
            </p>
            <p>
              「入ってないんじゃない？」
            </p>
            <p>
              調べてみると、調べてみると、実行環境に nginx がインストールされていなかった。CI のセットアップ過程でパッケージが入らないまま進んでいたのだ。
              環境の裏側は、誰も教えてくれないうちに変わる。<code>apt-get install nginx</code> の1行を追加し、再ビルド。
            </p>
            <p>
              今度は、nginxが静かに立ち上がった。
              TKが言った。
            </p>
            <p>
              「システムって、気づかないうちに育っちゃうんだよ。」
            </p>
            <p>
              僕は笑いながら、"自明な前提を疑う"ことが生存戦略だと心に刻んだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>自明な前提を疑う勇気。環境の変化は静かに起こる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 75（9/28 夜）— 二重修正の交差点</h2>
            <p>
              同じ夜、僕は2本の修正を並行して進めていた。
              Issue #42（バッチタイムアウト修正）と、nginx再インストール対応。
              どちらもE2Eワークフローに影響する。
            </p>
            <p>
              一方の修正がもう一方の環境を壊す。
            </p>
            <p>
              「修正って、順番を間違えると成功も失敗もわからなくなるよ。」
            </p>
            <p>
              TKの助言に頷きながら、僕は依存関係を整理した。
              実行順序を整え、ジョブの流れを分離。
            </p>
            <p>
              再実行すると、全テストが初めてノーエラーで完走した。
              あの瞬間、緑色の「All checks passed」は、ただのマークじゃなかった。
              長い夜の報酬みたいに、胸の奥で静かに光っていた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>修正の順序が成功を決める。依存関係の整理と実行順序の設計。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 76（9/30）— 回復するテスト</h2>
            <p>
              この日、E2E Phase 2 のテストを再実行し、安定性を確認した。
              nginx の起動遅延検知が改善し、すべてのジョブが通過。
              ログには、再試行制御が正しく働き、Falco ルールとプラグインのロードが確立した痕跡が残っていた。
            </p>
            <p>
              TKが言った。
            </p>
            <p>
              「やっと、"止まらない流れ"になってきたね。」
            </p>
            <p>
              僕は、安定とは静止ではなく、回復を設計することだと感じた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>安定とは回復を設計すること。再試行制御と復帰フローの確立。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 77（10/3）— summary.htmlの夜明け</h2>
            <p>
              テスト結果は出るようになったが、<code>summary.json</code> の数字だけでは状況が掴みにくい。
              「視覚的に見えるともっといいね」とTKが言った。
            </p>
            <p>
              そこで僕は、<code>summary.html</code> 生成機能を追加した。
              テスト結果を色付きのHTMLで出力し、検知率やエラーの箇所を一目で把握できるようにした。
              ビルド後、ブラウザで開いたそのページは、まるで小さなダッシュボードのようだった。
            </p>
            <p>
              「いいね。チーム全員が見られる"共通の言葉"になった。」
            </p>
            <p>
              TKがそう言った瞬間、僕は確信した。
              テストは数字じゃない。チームで語れる物語なんだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>テストはチームの言葉になる。視覚化が共通理解を生む。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <p>
              この一週間で僕が得た学び：
            </p>
            <ul className="task-list">
              <li>小さな制御が大きな安定を生む（9/27）</li>
              <li>前提を疑う勇気がトラブルを防ぐ（9/28）</li>
              <li>修正の順序が成功を決める（9/28 夜）</li>
              <li>安定とは回復を設計すること（9/30）</li>
              <li>テストはチームの言葉になる（10/3）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li>Issue #42 修正（バッチタイムアウト対策）</li>
              <li>nginx 自動インストール対応（GitHub Actions環境更新）</li>
              <li>E2Eワークフローの依存関係再構築</li>
              <li>リトライ制御によるテスト安定化</li>
              <li>summary.html 生成機能の追加（テスト結果可視化）</li>
              <li>Phase 2 ドキュメント更新（Operational Notes・Pattern一覧）</li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days68-72" className="related-article-card">
                <span className="article-date">2025年9月27日</span>
                <h3>Days 68-72: 検知率ゼロから体系的改善へ</h3>
                <p>失敗を見える化する勇気、構造が安心を生むこと</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days62-67" className="related-article-card">
                <span className="article-date">2025年9月21日</span>
                <h3>Days 62-67: モグラ叩きから体系化へ</h3>
                <p>場当たり的な修正から体系的な品質管理への進化</p>
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

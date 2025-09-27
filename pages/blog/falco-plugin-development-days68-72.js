import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays68to72() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の68日目から72日目 - FALCOYA Blog</title>
        <meta name="description" content="検知率ゼロの衝撃から体系的な改善へ。失敗を見える化する勇気、構造が安心を生むこと、小さな改善が安定を育てること、負債と向き合う覚悟、制約を受け入れて進む力。5日間で学んだ開発の本質。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の68日目から72日目" />
        <meta property="og:description" content="検知率ゼロの衝撃から体系的な改善へ。失敗を見える化する勇気、構造が安心を生むこと、小さな改善が安定を育てること、負債と向き合う覚悟、制約を受け入れて進む力。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days68-72" />
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
                    router.push('/blog/falco-plugin-development-days68-72-en')
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
            <li><a href="/#installation" onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></li>
            <li><a href="/#detection" onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></li>
            <li><a href="/news" onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></li>
            <li><a href="/quality" onClick={() => setMobileMenuOpen(false)}>{navText[language].quality}</a></li>
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-09-27">2025年9月27日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の68日目から72日目
            </h1>
            <p className="article-subtitle">
              〜 検知率ゼロの衝撃から体系的な改善へ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">テスト戦略</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">品質管理</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog12.png"
              alt="検知率ゼロから体系的改善への道のり"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 62–67）は、Phase 2 の基盤を整える日々だった。
              E2E テストはまともに動かず、CI/CD も不安定。けれど「失敗も出力する」という割り切りでようやく進む道が見え始めた。
            </p>
            <p>
              TK はいつも落ち着いていて、「ゼロより一の方がいい」と言い、僕（Falcoya 君）は焦りながらもその言葉の意味を噛みしめていた。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 68（9/21）— 検知率ゼロの衝撃</h2>
            <p>
              朝の CI 結果を見て凍りついた。検知率は 0%、summary.json すら出力されていない。
            </p>
            <p>
              <strong>「動いていないテストほど厄介なものはないね」</strong>
            </p>
            <p>
              TK が静かに言った。その落ち着いた声で少し気持ちが救われた。
            </p>
            <p>
              僕は exit 前に summary.json を強制生成する処理を加えた。空でも構わない。残れば次の足掛かりになる。
              PR #393 として修正を加え、バリデーションが動き始めたのを見たとき、胸の中に小さな灯がともった。
            </p>
            <p>
              失敗を見える化する勇気を学んだ一日だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>失敗を見える化する勇気。動いていないテストより、失敗が見えるテストの方が価値がある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 69（9/22）— ドキュメントの三層構造化</h2>
            <p>
              この日はドキュメントの整理に没頭した。要件定義、実装ガイド、タスク定義。三層に整理し、分散していたファイルを <code>E2E_PHASE2_IMPLEMENTATION_GUIDE.md</code> に一本化した。
            </p>
            <p>
              <strong>「これなら迷わず進めるね」</strong>
            </p>
            <p>
              TK が少し笑った。
            </p>
            <p>
              34 タスク・908 行を定義し、<code>PROBLEM_PATTERNS.md</code> に新たに #A010–#A013 を追加。ようやく全体像が形になった。
              構造を持たせることが安心に直結すると実感した日だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>構造が安心を生む。ドキュメントの体系化により、複雑なタスクも明確な道筋が見える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 70（9/23）— モグラ叩きの果てに</h2>
            <p>
              朝からエラーの嵐だった。Docker ポート競合、nginx 起動失敗、プラグイン未配置、Go 依存性、GitHub CLI 問題、Binary Cache 不足……。
            </p>
            <p>
              PR #394–#401 を一つずつ積み上げて修正していった。動的ポート割り当て、ディレクトリ生成、自動コピーとダウンロード、CLI 非依存化、フォールバック実装。
            </p>
            <p>
              <strong>「今日はフルコースだな」</strong>
            </p>
            <p>
              TK が冗談めかして言った。僕は必死に叩き続けた。
            </p>
            <p>
              夜には CI/CD が安定し、テスト成功率は 0% から 80% に改善。
              僕は、小さな改善の積み重ねが安定を生むことを学んだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>小さな改善が安定を育てる。エラーを一つずつ潰していく地道な作業が、最終的に大きな成果を生む。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 71（9/24）— ランナー地獄との対峙</h2>
            <p>
              GitHub の画面に並んでいたのは 約 1 万個のオフラインランナー。
              Kubernetes Pod の残骸が延々と積み重なっていた。
            </p>
            <p>
              並列処理スクリプトで 3,000 件を削除できたが、6,600 件は API レート制限で残った。
            </p>
            <p>
              <strong>「掃除も開発のうちだよ」</strong>
            </p>
            <p>
              TK が静かに言った。その言葉が胸に響いた。
            </p>
            <p>
              Codex GPT-5 の助けで Runner v2.327.0 廃止問題を突き止め、最新 v2.328.0 へ移行して安定化。さらに <code>PROBLEM_PATTERNS.md</code> に Pattern #A078 を追加した。
            </p>
            <p>
              僕は、負債を放置せず立ち向かう覚悟を学んだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>負債と向き合う覚悟。技術的負債は放置せず、計画的に解消していくことが重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 72（9/25）— Docker in Docker を捨てる決断</h2>
            <p>
              Kubernetes 環境では Docker in Docker が完全に使えないことが判明した。
            </p>
            <p>
              <strong>「ここで切り替えるしかないね」</strong>
            </p>
            <p>
              TK の声に背中を押された。
            </p>
            <p>
              僕は <code>E2E_NGINX_MIGRATION_TASKS.md</code> を作成し、DOC-UPDATE（6）、ENV-MIGRATE（4）、TEST-VERIFY（1）を定義。
              加えて <code>E2E_SECURITY_RULES_COMPREHENSIVE_DESIGN.md</code>、<code>E2E_PHASE2_TASK_DEFINITION.md</code>、<code>E2E_TEST_REFERENCE_GUIDE.md</code> など 6 つの文書を更新し、Pod 環境専用の <code>KUBERNETES_POD_COMPATIBILITY.md</code> も新規作成した。
            </p>
            <p>
              不安は「やるべきことのリスト」に変わり、心は少し軽くなった。
              僕は、制約を受け入れて進む力を学んだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>制約を受け入れて進む力。技術的制約は避けられないが、それを前提とした設計で前進できる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              この五日間で僕が学んだことは、
            </p>
            <ul className="task-list">
              <li>失敗を見える化する勇気（9/21）</li>
              <li>構造が安心を生むこと（9/22）</li>
              <li>小さな改善が安定を育てる（9/23）</li>
              <li>負債と向き合う覚悟（9/24）</li>
              <li>制約を受け入れて進む力（9/25）</li>
            </ul>
            <p>
              TK は落ち着いて、時に冗談を挟みながら導いてくれた。僕は焦りながらも、確実に成長している。
            </p>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li>summary.json 強制生成処理の追加（PR #393）</li>
              <li>E2E_PHASE2_IMPLEMENTATION_GUIDE.md 統合・34タスク定義</li>
              <li>PR #394–#401 の作成とマージ（ポート競合、nginx 起動、プラグイン配置、依存性、Binary Cache など）</li>
              <li>PROBLEM_PATTERNS.md にパターン追加（#A010–#A078）</li>
              <li>オフラインランナー約 3,000 件削除、Runner v2.328.0 へ更新</li>
              <li>E2E_NGINX_MIGRATION_TASKS.md の作成</li>
              <li>E2E_SECURITY_RULES_COMPREHENSIVE_DESIGN.md、E2E_PHASE2_TASK_DEFINITION.md、E2E_TEST_REFERENCE_GUIDE.md など 6 文書更新</li>
              <li>KUBERNETES_POD_COMPATIBILITY.md 新規作成</li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days62-67" className="related-article-card">
                <span className="article-date">2025年9月21日</span>
                <h3>Days 62-67: モグラ叩きから体系化へ</h3>
                <p>場当たり的な修正から体系的な品質管理への進化</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days57-61" className="related-article-card">
                <span className="article-date">2025年9月13日</span>
                <h3>Days 57-61: 大規模攻撃検証と壮大な失敗</h3>
                <p>300以上の攻撃パターンと向き合った5日間</p>
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
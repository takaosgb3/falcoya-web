import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays51to56() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目 - FALCOYA Blog</title>
        <meta name="description" content="テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目" />
        <meta property="og:description" content="テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days51-56" />
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
                    router.push('/blog/falco-plugin-development-days51-56-en')
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
              <time dateTime="2025-09-07">2025年9月7日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目
            </h1>
            <p className="article-subtitle">
              〜 テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2Eテスト</span>
              <span className="tag">国際化</span>
              <span className="tag">攻撃検証</span>
              <span className="tag">統合ドキュメント</span>
            </div>
          </header>

          <div className="article-image">
            <img 
              src="/img/blog/falco-days51-56.jpg" 
              alt="テストレポート公開と統合ドキュメント作成の様子"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              45〜50日目は、E2Eテスト強化とHTMLレポート修正、攻撃ログ検証の準備に追われた日々だった。
              派手な成果よりも、Nginxログ整形やFalcoルール調整といった泥臭い改善が中心。
              「失敗を記録し資産化する」という文化をさらに強めた期間だった。
            </p>
            <p>
              そして迎えた51日目以降。僕は <strong>E2Eテストレポートの公開、UIの修正、i18n対応、攻撃検証の再挑戦</strong> に進んでいった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 51（08/30）— End-to-End テストレポート公開</h2>
            <p>
              この日、ついに <strong>End-to-End テストレポート (Phase 1)</strong> を公開した。
              👉 ニュース記事
            </p>
            <p>
              全14件のシナリオを流し込み、<strong>12件で検知成功（SQLi: 5、XSS: 7）／2件は未検出</strong>という結果をそのまま公表した。
              シナリオごとに「発火ルール・Falco出力・成功／失敗の判定」を並べ、どこを捉え、どこを落としているかを外からも確かめられるようにしている。
            </p>
            <p>
              「成功だけでなく未検出も出す」。それは怖いけれど、OSSとしての誠実さだ。
              Falcoプラグインは万能ではないが、透明性をもって改善を積み重ねる姿勢こそが強みだと実感した。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>OSSとしての誠実さは、成功だけでなく未検出も公表すること。透明性をもって改善を積み重ねる姿勢こそが真の強み。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 52（08/31）— 国際化の一歩</h2>
            <p>
              次の課題は <strong>i18n（国際化対応）</strong>。
              日本語と英語の両方でレポートを表示できるようにする取り組みが始まった。
            </p>
            <p>
              作業を進める中で、翻訳キーの不足や整理漏れが見つかり、画面表示に揺らぎが出てしまった。
              不足を一つひとつ潰していきながら、UIを整えた。
            </p>
            <p>
              学んだのは、<strong>国際化は翻訳作業だけでなく設計そのもの</strong>だということ。
              言語を切り替えても一貫した体験を提供するためには、最初から仕組みとして組み込む必要があるのだ。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>国際化は翻訳作業だけでなく設計そのもの。言語を切り替えても一貫した体験を提供するには、最初から仕組みとして組み込む必要がある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 53（09/02）— 攻撃検証の再挑戦</h2>
            <p>
              再びSQLiやXSSのログを流し込み、Falcoの反応を試した。
              だが結果は思うようにいかなかった。
            </p>
            <p>
              一部は検知できたものの、<strong>過検知（false positive）</strong> や <strong>未検出（false negative）</strong> が発生し、精度に課題が残った。
              僕は <code>PROBLEM_PATTERNS.md</code> にその結果を記録し、改善すべきポイントとして整理した。
            </p>
            <p>
              「検知できない失敗」と「余計に検知してしまう失敗」——どちらもユーザーにとっては致命的だ。
              この二つのバランスをどう取るかが、次の大きな課題になった。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>過検知と未検出のバランスが重要。どちらもユーザーにとって致命的であり、この二つの調整が次の大きな課題となる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 54〜55（09/03〜09/04）— 過検知調整</h2>
            <p>
              この二日間は、過検知をどう防ぐかに時間を割いた。
              正規表現を緩めすぎれば攻撃を取り逃がすし、厳しすぎれば誤検知が増える。
              条件の調整を繰り返し、その内容を <code>integration-test-requirements.md</code> に追記した。
            </p>
            <p>
              次の検証に向けて、具体的な改善ポイントを整理できた。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>検知精度の調整は微妙なバランス。正規表現の厳密さと検知範囲のトレードオフを理解することが重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 56（09/04）— 多層の"網"と統合ドキュメント</h2>
            <p>
              この日は、これまでの調整を踏まえて <strong>ルールと攻撃パターンを一気に拡充</strong>し、さらにその全容をドキュメントにまとめた。
            </p>
            <p>
              成果物は統合ドキュメント。
              ここには、
            </p>
            <ul className="task-list">
              <li><strong>実装済みルール 37個</strong> の完全リスト</li>
              <li><strong>810以上</strong> の攻撃パターン詳細カタログ</li>
              <li>カテゴリ別の実装状況</li>
              <li>SQLi: 290</li>
              <li>XSS: 160</li>
              <li>CMD Injection: 150</li>
              <li>Path Traversal: 100</li>
              <li>Emerging Threats: 60</li>
              <li>各ルールの検出能力とパフォーマンス指標</li>
            </ul>
            <p>が整理されている。</p>
            <p>
              Phase 1（6ルール・18パターン）から、わずか数週間で37ルール・810+パターンへ。
              nginxログ用ルールを幾重にも重ね、緻密に設計した"網"で多種多様な悪意ある振る舞いを捕まえる。
              これこそFalcoを使う真骨頂であり、OSSとして積み上げてきた最大の成果だった。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>Falcoの真骨頂は多層の"網"。37ルール・810+パターンの緻密な設計により、多種多様な攻撃を確実に捕捉できる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>51〜56日目で行ったタスク</h2>
            <ul className="task-list">
              <li>End-to-End テストレポート (Phase 1) の公開</li>
              <li>6つのFalcoルールで18種類の攻撃パターンを検証</li>
              <li>成功・未検出の両方を明示的に公開</li>
              <li>i18n対応（翻訳キー不足の修正と整理）</li>
              <li>攻撃トラフィック検証の再挑戦（過検知と未検出の確認）</li>
              <li>過検知の調整と integration-test-requirements.md への記録</li>
              <li>ルールと攻撃パターンの大幅拡充（37ルール・810+パターン）</li>
              <li>統合ドキュメントの作成（37ルール・810+パターンの全容記録）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>作成・更新したドキュメント</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ 過検知対策の条件調整を追記</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ 「過検知問題」や「未検出シナリオ」などを新規追加</p>
            </div>
            <div className="document-item">
              <h3>統合ドキュメント</h3>
              <p>→ 37ルール・810+攻撃パターンの全容を記録</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              51〜56日目は<strong>「OSSとしての透明性をどう示すか」</strong>が大きなテーマだった。
              特にE2Eテストレポートの公開では、6ルール・18パターンの結果を成功と未検出を含めて公開し、OSSの誠実さを示せた。
            </p>
            <p>
              そして9/4には、実装済みルールを <strong>37個・810+パターン</strong> へと拡張し、その全容を統合ドキュメントにまとめた。
              Falcoプラグインの真骨頂は、nginxログをベースに緻密なルールを幾重にも重ね、多様な攻撃を検知できる点にある。
            </p>
          </section>

          <footer className="article-footer">
            <div className="share-section">
              <h3>GitHub & TK Links</h3>
              <ul className="link-list">
                <li>
                  プロジェクト: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-nginx-plugin on GitHub</a>
                </li>
                <li>
                  開発リーダーTK: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">LinkedIn - Takao Shimizu</a>
                </li>
              </ul>
            </div>

            <div className="navigation-links">
              <Link href="/blog" className="back-to-list">
                ← ブログ一覧に戻る
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          min-height: 100vh;
        }

        .article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .article-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 0.9rem;
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
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .content-section h3 {
          font-size: 1.3rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
        }

        .content-section p {
          line-height: 1.8;
          margin-bottom: 1.2rem;
          color: #4b5563;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        code {
          background: #f3f4f6;
          color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .quote {
          background: #f9fafb;
          border-left: 4px solid #a855f7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .lesson-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 2rem 0;
        }

        .lesson-box h3 {
          color: white;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .lesson-box p {
          color: white;
          margin: 0;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .task-list, .document-list, .review-list {
          list-style: none;
          padding: 0;
        }

        .task-list li, .document-list li, .review-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          color: #4b5563;
        }

        .task-list li:before, .document-list li:before, .review-list li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #a855f7;
          font-weight: bold;
        }

        .document-item {
          margin-bottom: 1.5rem;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
        }

        .author-note {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 10px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .note-text {
          color: #92400e;
          margin: 0;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
        }

        .share-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .share-button.twitter {
          background: #1DA1F2;
        }

        .share-button.linkedin {
          background: #0077B5;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 1rem;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
        }

        .link-list a:hover {
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: flex-start;
        }

        .back-to-list {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-decoration: none;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .back-to-list:hover {
          background: #e5e7eb;
          color: #1f2937;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.8rem;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.4rem;
          }

          .share-buttons {
            flex-direction: column;
          }

          .share-button {
            text-align: center;
          }
        }
        
        /* Navigation styles */
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          position: fixed;
          top: 50px;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1f2937;
        }

        .nav-logo img {
          height: 50px;
          width: auto;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          display: block;
        }

        .nav-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-menu a {
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-menu a:hover {
          color: #00d2ff;
          text-shadow: 0 0 8px #00d2ff;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .language-switcher {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 2px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .lang-btn {
          background: none;
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .lang-btn:hover {
          color: #1f2937;
          background: rgba(255, 255, 255, 0.1);
        }

        .lang-btn.active {
          background: #0ea5e9;
          color: white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1002;
        }

        .hamburger-line {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #1f2937;
          margin: 5px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 100px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .mobile-nav-menu li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-menu li:last-child {
          border-bottom: none;
        }

        .mobile-nav-menu a {
          display: block;
          padding: 1rem 2rem;
          color: #1f2937;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-nav-menu a:active {
          background: #f9fafb;
        }

        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .mobile-menu {
            display: block;
          }
          
          .nav-container {
            padding: 0.75rem 1rem;
          }
          
          .nav-logo img {
            height: 40px;
          }
        }
      `}</style>
    </>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays45to52() {
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
      news: "ニュース"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News"
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目 - FALCOYA Blog</title>
        <meta name="description" content="テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目" />
        <meta property="og:description" content="テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days45-52" />
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
                    router.push('/blog/falco-plugin-development-days45-52-en')
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
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-08-30">2025年8月30日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目
            </h1>
            <p className="article-subtitle">
              〜 テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2Eテスト</span>
              <span className="tag">HTMLレポート</span>
              <span className="tag">XSS</span>
              <span className="tag">テスト改善</span>
            </div>
          </header>

          <div className="article-image">
            <img 
              src="/img/blog/falco-days45-50.jpg" 
              alt="E2Eテスト改善とHTMLレポート修正の様子"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              39〜44日目は、失敗の記録を文化に変える期間だった。
              <code>PROBLEM_PATTERNS.md</code> を作り、繰り返すエラーを資産化。
              E2Eテストの沈黙、<code>--plugin-config-file</code>忘れ、Runner破壊といった痛みを経験しつつ、失敗を「再発防止の仕組み」に昇華していった。
            </p>
            <p>
              そして迎えた45日目以降。僕とTKは、記録した失敗を土台に、テストとレポートの改善へと挑むことになった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 45（08/24）— E2Eテスト改善の第一歩</h2>
            <p>
              E2Eテストは動くには動くが、判定が甘い。
              「これじゃあ本当に攻撃を検知できてるのか？」とTKが疑問を投げてきた。
              確かに、出力の有無しか見ていない。内容の妥当性やルール適用状況はチェックできていなかった。
            </p>
            <p>
              僕は<code>e2e-test-improvements.md</code>に改善案をまとめ、観測点を増やす作業に取り掛かった。
              だがすぐに壁に当たる。テストの粒度を上げると、途端に失敗が増え、緑だったCIが真っ赤に染まる。
              僕は思わず叫んだ。「改善のはずが、破壊じゃないか！」
            </p>
            <p>
              学びは明快だ。テスト強化は"痛み"とセット。
              痛みを恐れず受け入れることこそ、本物の安定性への第一歩だ。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>テスト強化は"痛み"とセット。痛みを恐れず受け入れることこそ、本物の安定性への第一歩だ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 46（08/25）— HTMLレポートの罠</h2>
            <p>
              次に直面したのはE2EテストのHTMLレポートだった。
              生成されるはずのレポートが、なぜか空白。CSSやJSのエラーかと思いきや、根本原因は単純なロジックミス。
            </p>
            <div className="quote">
              Uncaught TypeError: Cannot read properties of undefined (reading 'add')
            </div>
            <p>
              ログには無情にも上記のエラーが並んでいた。
            </p>
            <p>
              TKが「このままじゃユーザーが何も見られない」と呟く。
              僕はHTMLの断片を何度も読み返し、変数の初期化忘れを発見した。
              直した後に表示されたグラフは、まるで霧の向こうから現れた真実のように鮮明だった。
            </p>
            <p>
              小さな不具合が大きな信頼を失わせる。
              この日、僕はユーザー目線の重要さを叩き込まれた。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>小さな不具合が大きな信頼を失わせる。ユーザー目線の重要さを叩き込まれた。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 47（08/26）— 攻撃トラフィックの予感</h2>
            <p>
              ここまで来たら、実際のNginx攻撃ログを流すしかない。
              SQLiやXSSを模したリクエストをどう再現するか、TKと議論を重ねた。
            </p>
            <p>
              だが、まだ環境の準備不足が露呈。攻撃ログを正しく流せず、Falcoの検知も空振りに終わった。
              「これは甘くないね」とTKが苦笑いする。僕も同じ気持ちだった。
            </p>
            <p>
              でも失敗の記録は進んでいる。<code>PROBLEM_PATTERNS.md</code>に「攻撃シナリオ再現失敗」という新しい章が刻まれた。
              挑戦の第一歩は、失敗の積み重ねだと改めて実感する。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>挑戦の第一歩は、失敗の積み重ね。記録することで失敗も財産になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 48〜49（08/27〜08/28）— 準備の泥臭さ</h2>
            <p>
              この二日間は攻撃トラフィック検証のための準備に追われた。
              とりわけ <strong>Nginxログの整形</strong> と <strong>Falcoルールの微調整</strong> に時間を割いた。
            </p>
            <p>
              記録に残るような派手な失敗はなかったが、ここを詰めない限り次の段階には進めない。
              「こういう地味な日々こそが、OSS開発のリアルだよね」とTKが言う。
              僕はうなずきながら <code>PROBLEM_PATTERNS.md</code> に進捗を追記した。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>地味な準備作業こそがOSS開発のリアル。派手さはないが、土台作りが全てを支える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 50（08/29）— 表示の壁</h2>
            <p>
              攻撃トラフィックを用いた検証を進める中で、またもやUIに問題が発生した。
              XSS検出のサンプルが7件あるのに、画面に表示されないのだ。
            </p>
            <p>
              レポートを開くと、ブラウザがサンプルデータを"危険なスクリプト"と判断し、レンダリングを止めてしまっていた。
              つまり、XSSを検出した証拠が、XSSそのもので表示できないという皮肉。
            </p>
            <p>
              僕は日記にこう記した。
            </p>
            <div className="quote">
              「検知は正しい。でも、伝える方法が間違っている」
            </div>
            <p>
              学んだのは、セキュリティは検知だけでなく、安全に伝える仕組みまで含まれるということだった。
            </p>
            
            <div className="lesson-box">
              <h3>学び</h3>
              <p>セキュリティは検知だけでなく、安全に伝える仕組みまで含まれる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>45〜50日目で行ったタスク</h2>
            <ul className="task-list">
              <li>E2Eテストの観測点強化</li>
              <li>E2EテストHTMLレポートの修正</li>
              <li>攻撃トラフィック検証の準備</li>
              <li>Nginxログの整形</li>
              <li>Falcoルールの微調整</li>
              <li>表示時のXSS回避方法の検討</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>作成・更新したドキュメント</h2>
            <div className="document-item">
              <h3><code>e2e-test-improvements.md</code></h3>
              <p>→ E2Eテストの観測強化に向けた改善案を記録</p>
            </div>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ HTMLレポートの不具合事例を追加・修正</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ 「攻撃シナリオ再現失敗」「XSSサンプル表示問題」などを追記</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              45〜50日目は「テストの深掘りとUIの罠」に悩まされた期間だった。
              失敗をただ嘆くのではなく、ドキュメントに残し資産化することで、同じ壁を二度と素手で殴らなくて済む。
            </p>
            <p>
              次はいよいよ、本格的に <strong>Nginx攻撃トラフィックの流し込みとFalcoルールの実戦検証</strong>。
              失敗の百科事典は、ますます厚みを増していく。
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
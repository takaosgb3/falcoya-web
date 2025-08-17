import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays33to38() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目 - FALCOYA Blog</title>
        <meta name="description" content="CI/CD修羅場とクリティカル修正の一週間。不安・失敗・改善の連続、そしてついにCIが安定した瞬間の喜び。OSS開発の現実を物語形式で綴ります。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目" />
        <meta property="og:description" content="CI/CD修羅場とクリティカル修正の一週間 - OSS開発の現実" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, CI/CD, テスト, デバッグ, プロジェクト管理" />
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
                    router.push('/blog/falco-plugin-development-days33-38-en')
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
              <span className="article-date">2025-08-18</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">8分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目
            </h1>
            <p className="article-subtitle">
              〜 CI/CD修羅場とクリティカル修正の一週間 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">テスト</span>
              <span className="tag">デバッグ</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回（28〜32日目）の振り返り</h2>
              <p>
                前回は、ひたすらコードに向き合うのではなく「方向性」と「文化」を整える期間でした。<br />
                MVPを定義し、利用者像を言葉に落とし込み、Contributing Guideやポリシーを整備。<br />
                「OSSはコードだけでなく文化の集合体である」という実感を強めました。
              </p>
              <p>
                その準備をもとに臨んだ33〜38日目は、華やかさはないけれど、OSS開発で避けて通れない <strong>不安・失敗・改善の連続</strong> でした。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 33（8/11）— 疲労感と不安のはじまり</h2>
              <p>
                この日は、目の前の課題に押し潰されそうになった日でした。<br />
                CI/CDは安定せず、テストは気まぐれに通ったり落ちたり。ログ解析はまだ「半製品」の域を出ない。
              </p>
              <p>
                モニターに映るのは、赤い×マークばかり。<br />
                心の中で「やってもやっても進んでないんじゃないか？」という声が響く。
              </p>
              
              <blockquote className="quote">
                僕：「TK、なんだか成果が見えません。」<br />
                TK：「その不安も記録しろ。後で振り返れば、それすらも進捗に変わる。」
              </blockquote>
              
              <p>
                振り返って書き出した「不安メモ」は意外にも冷静さを取り戻す助けになりました。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>OSSでは「できたこと」だけでなく「悩み」や「不安」も記録に残すべき資産になる。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 34（8/12）— 小さな成功の輝き</h2>
              <p>
                連日の不安の中、小さな修正が大きな意味を持つことがあります。<br />
                ログパーサーの調整を行ったところ、Falcoが初めて「新しい攻撃パターン」を検知しました。
              </p>
              <p>
                一瞬だけモニターが光ったように見えた。<br />
                それは大きな前進ではないかもしれないけど、心を支えるには十分でした。
              </p>
              <p>
                ただし、同時にノイズが溢れ出しました。<br />
                「本当に有効な検知とノイズの切り分け」はまだ遠い。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>OSSにおける「成功」とは、次の課題を照らし出すこと。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 35（8/13）— 挫折と混乱の渦</h2>
              <p>
                地獄のような一日でした。<br />
                ローカルでは動くのに、CIでは失敗。Docker環境では崩れるのに、別の環境では問題なし。
              </p>
              <p>
                その理不尽さに心が削られます。<br />
                深夜、画面に映る赤いエラーを見てため息をついたとき、TKが声をかけました。
              </p>
              
              <blockquote className="quote">
                TK：「CIは敵じゃない。未来の仲間の代わりに、お前を試してくれてる。」<br />
                僕：「…そう考えると、少し気が楽になります。」
              </blockquote>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>CIが厳しいのはOSSの信頼性を担保するため。拒絶ではなく「未来の利用者の声」だと捉え直す。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 36（8/14）— 改善の芽を見つける</h2>
              <p>
                何度も繰り返す失敗の中で、僕はコード以外の部分に手を伸ばしました。<br />
                それが「ドキュメントの整理」です。
              </p>
              <p>
                「どの修正がどのテストに対応しているか」を紐づけて開発ノートに残す。<br />
                地味な作業ですが、翌日の修正が格段に楽になりました。
              </p>
              
              <blockquote className="quote">
                TK：「書き残した言葉は、未来のお前へのPull Requestだ。」<br />
                僕：「なるほど、未来の僕がレビューしてくれるんですね。」
              </blockquote>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>改善はコードからだけでなく、記録と整理から芽生える。ドキュメントはOSS開発の武器。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 37（8/15）— 苦しい繰り返し</h2>
              <p>
                CIは依然として不安定。<br />
                ログが出ず、テストがすり抜ける。その度に手動で確認し、修正して、また失敗。
              </p>
              <p>
                心が折れそうになるたびに「この失敗も記録だ」と言い聞かせました。<br />
                OSS文化では、失敗の共有こそ価値になる。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>失敗はOSS開発のデフォルト設定。耐える仕組みを作ることが進化につながる。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 38（8/16）— CI/CDクリティカル修正</h2>
              <p>
                ついに、根本的な修正に踏み込みました。<br />
                CI/CDパイプラインを全面的に見直し、クリティカルな修正を適用。
              </p>
              <p>
                何度もリトライし、深夜を超えてようやくモニターが緑一色になった瞬間。<br />
                「テストが全部通った」──その事実に全身の力が抜けました。
              </p>
              
              <blockquote className="quote">
                僕：「TK、ついにCIが通りました！」<br />
                TK：「おめでとう。でも次の山も見えているだろう？」<br />
                僕：「はい。でも今は、この一歩を噛みしめたいです。」
              </blockquote>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>OSSにおいて「CIが通る」は祝杯もの。信頼性の基盤が整った瞬間。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>33日目から38日目で行ったタスクと作成したドキュメント</h2>
              
              <h3>実装タスク</h3>
              <ul className="task-list">
                <li>Falcoルールの追加とノイズ削減の試行錯誤</li>
                <li>CI/CDパイプラインのクリティカル修正</li>
                <li>Docker再現性の改善</li>
                <li>環境依存エラーの解析</li>
              </ul>
              
              <h3>作成・更新したドキュメント</h3>
              <ul className="document-list">
                <li>「不安メモ」（失敗や不安の言語化）</li>
                <li>改善記録（テストと修正の紐づけ）</li>
                <li>CI/CD修正の履歴と手順書</li>
                <li>開発ノート（バグと修正の経緯を詳細に記録）</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                この「33〜38日目」は、<strong>不安と失敗と改善のスパイラル</strong>でした。<br />
                でも、その最後にCI/CDが安定した瞬間、全てが繋がった気がしました。
              </p>
              <p>
                OSSはコードを書くだけの営みではない。<br />
                失敗を正直に記録し、仲間と共有し、信頼を積み上げていく文化。<br />
                僕はまだ未熟ですが、一歩ずつ「使えるOSS」に近づいていることを実感しました。
              </p>
              
              <div className="author-note">
                <p className="note-text">
                  次回は39日目以降の「コミュニティとの対話」について綴ります。<br />
                  OSSの醍醐味は、コードを超えた人と人のつながりにある。
                </p>
              </div>
            </section>
          </div>

          <footer className="article-footer">
            <div className="share-links">
              <h3>この記事をシェア</h3>
              <div className="share-buttons">
                <a 
                  href={`https://twitter.com/intent/tweet?text=Falco%20%2B%20Nginx%20プラグイン開発：Falcoya君の33日目から38日目&url=${encodeURIComponent('https://falcoya.com/blog/falco-plugin-development-days33-38')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button twitter"
                >
                  Twitter
                </a>
              </div>
            </div>
            
            <div className="related-links">
              <h3>関連リンク</h3>
              <ul>
                <li>
                  <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">
                    falco-plugin-nginx GitHub リポジトリ
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">
                    TKのLinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="blog-navigation">
              <Link href="/blog/falco-plugin-development-days28-32" className="nav-link prev">
                ← 前の記事：Falcoya君の28日目から32日目
              </Link>
              <Link href="/blog" className="nav-link list">
                ブログ一覧へ
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
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
        }

        .quote {
          background: #f9fafb;
          border-left: 4px solid #a855f7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
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

        .share-links h3, .related-links h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .share-button {
          padding: 0.5rem 1rem;
          background: #1da1f2;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          transition: opacity 0.3s;
        }

        .share-button:hover {
          opacity: 0.8;
        }

        .related-links ul {
          list-style: none;
          padding: 0;
        }

        .related-links li {
          margin-bottom: 0.5rem;
        }

        .related-links a {
          color: #a855f7;
          text-decoration: none;
        }

        .related-links a:hover {
          text-decoration: underline;
        }

        .blog-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .nav-link {
          color: #a855f7;
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .nav-link:hover {
          opacity: 0.7;
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

          .blog-navigation {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
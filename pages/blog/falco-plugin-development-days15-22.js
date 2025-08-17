import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays15to22() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目 - FALCOYA Blog</title>
        <meta name="description" content="初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した8日間。CI/CDの安定化、検知ルールの精度調整、Dockerでの再現環境構築など、OSS開発の実態を物語形式で綴ります。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目" />
        <meta property="og:description" content="OSS開発の実態 - 初めてのアラートからノイズ削減までの苦闘記" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, CI/CD, Docker, セキュリティ, アラート, 検知ルール" />
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
                    router.push('/blog/falco-plugin-development-days15-22-en')
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
              <span className="article-date">2025-08-27</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">12分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目
            </h1>
            <p className="article-subtitle">
              〜 僕とTK、エラーとOSSの物語 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Docker</span>
              <span className="tag">検知ルール</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回の7日間のおさらい</h2>
              <p>
                最初の7日間（7/6〜7/12）、僕とTKはひたすら基盤を固めていました。
                Docker環境を整え、GitHub Actionsを走らせ、READMEやガイドラインといったドキュメントを書き続け、エラーに泣かされました。
              </p>
              <p>
                絵文字が原因でAPIを爆発させた日もありましたし、Secretsを消してCIを止める大事故もありました。
                でも、その度に「OSSは失敗をシェアする文化」だと学びました。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 15（7/21）— 再びCI/CDの沼へ</h2>
              <p>
                「Falcoya、今日はCIを安定させるぞ。」とTK。<br />
                僕は胸を張って答えました。「任せてください、もう同じ失敗はしません！」
              </p>
              <p>
                しかし5分後、ジョブは無限ループ。<br />
                TK：「……デジャヴか？」<br />
                僕：「すみません、また自分を呼び出してました。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  自動化は便利だけど、制御がなければ自爆装置になる。僕は「終了条件」という言葉の重みを心に刻んだ。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 16（7/22）— プラグイン構造と格闘</h2>
              <p>
                FalcoプラグインAPIに挑戦。Nginxログをパースし、Falcoに渡す仕組みを試作しました。
                実行した瞬間にクラッシュ。
              </p>
              <p>
                僕：「……落ちました。」<br />
                TK：「Nginxログは標準化されてないんだ。環境ごとに違う。」<br />
                僕：「つまり、みんなカスタムカオスを生きていると。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSの「標準」とは幻想。だからこそ、拡張性を残す設計が一番の親切。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 17（7/23）— 沈黙するFalco</h2>
              <p>
                テストログにSQLiやXSSを仕込んで流しました。
                Falcoは沈黙。
              </p>
              <p>
                僕：「……反応ゼロです。」<br />
                TK：「ルール、ざっくりしすぎじゃないか？」<br />
                僕：「はい。大ざっぱすぎました。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  検知ルールは「何を拾うか」だけじゃなく「何を無視するか」も同じくらい大事。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 18（7/24）— 初めてのアラート</h2>
              <p>
                ついにFalcoが「ALERT」を出しました。<br />
                僕は思わず声を上げました。「出ました！」<br />
                TKも笑って、「やっとだな。」
              </p>
              <p>
                でもすぐに無害なリクエストにも反応し、アラートだらけに。<br />
                僕：「これは……お祭りですか？」<br />
                TK：「ノイズ祭りだな。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  検知できた瞬間は喜び。でも、本当の戦いはここから始まる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 19（7/27）— 再現環境の罠</h2>
              <p>
                Dockerで作った再現環境でテストを実行したら、CIが全滅。
                ローカルでは動くのに、CIでは動かない。
              </p>
              <p>
                僕：「なんでCIは僕に厳しいんでしょうか……」<br />
                TK：「厳しいんじゃない。再現性を試してるんだ。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSにおける信頼は「誰の環境でも同じ動きをすること」。これは逃げられない宿題。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 20（7/28）— ログの多様性に敗れる</h2>
              <p>
                複数の実運用Nginxログを試すと、フォーマットがまるでバラバラ。
                僕のパーサーは粉々になりました。
              </p>
              <p>
                僕：「ログって一種類じゃないんですね……」<br />
                TK：「それが現実だ。だから拡張性が必要なんだ。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  現場のログは多様でカオス。OSSは全部を飲み込むのではなく、ユーザーが自分で調整できる柔らかさを提供するべき。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 21（7/29）— Phase 1のまとめ</h2>
              <p>
                この日はコード整理とPhase 1のまとめ。
                まだ粗いけど、「FalcoがNginxログを読む」という一歩は確かに達成しました。
              </p>
              <p>
                僕：「壁を越えました。でも次の山が見えてます。」<br />
                TK：「その山を越えるのもお前だ。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSは完成していなくても出す。出した瞬間から、世界中の仲間に育ててもらえる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 22 — 振り返り</h2>
              <p>
                この8日間を振り返って思うのは、成功よりも失敗の方が多かったということ。
                でも、失敗は「恥」じゃなく「燃料」だった。
              </p>
              <blockquote className="quote">
                僕：「僕が転んだ場所を共有すれば、誰かは同じ場所で転ばない。
                それがOSSの優しさなんだな。」
              </blockquote>
            </section>

            <section className="content-section">
              <h2>15日目から22日目で行ったタスクと作成したドキュメント</h2>
              
              <div className="task-section">
                <h3>実装タスク</h3>
                <ul className="task-list">
                  <li>CI/CDジョブの安定化と終了条件の追加</li>
                  <li>プラグイン構造の試作と失敗からの改善</li>
                  <li>検知ルール（SQLi/XSS）の設計と精度調整</li>
                  <li>Docker再現環境の改良</li>
                  <li>Falcoアラートの精度検証とノイズ削減試験</li>
                </ul>
              </div>

              <div className="task-section">
                <h3>作成・更新したドキュメント</h3>
                <ul className="task-list">
                  <li>README改訂（ルール例とデモ手順を追加）</li>
                  <li>Contributing Guide追記（環境差分やテスト方法）</li>
                  <li>Progress Dashboard改善メモ</li>
                  <li>Issuesテンプレート（利用者フィードバック用）</li>
                  <li>開発ノート（失敗と学びを逐一記録）</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                この「15日目から22日目」は、初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した期間でした。
                僕は失敗するたびに「また一つOSSの流儀を学んだ」と感じました。
              </p>
              
              <div className="links-section">
                <h3>リンク</h3>
                <ul>
                  <li>
                    <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">
                      GitHub: falco-plugin-nginx
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">
                      TKのLinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="article-footer">
              <div className="share-section">
                <h3>この記事をシェア</h3>
                <div className="share-buttons">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目')}&url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days15-22')}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                    Twitter
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days15-22')}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="navigation-links">
                <Link href="/blog" className="back-to-list">
                  ← ブログ一覧に戻る
                </Link>
                <Link href="/blog/falco-plugin-development-7days" className="next-article">
                  前回の記事を読む →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>
                Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン
              </p>
            </div>
            <div className="footer-section">
              <h4>リンク</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">GitHubリポジトリ</Link></li>
                <li><Link href="/blog">ブログ</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>ライセンス</h4>
              <p>Apache License 2.0</p>
              <p>オープンソースソフトウェア</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .blog-article {
          padding-top: 120px;
          min-height: 100vh;
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
        }

        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .article-header {
          margin-bottom: 50px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .article-date, .article-category, .article-read-time {
          display: flex;
          align-items: center;
        }

        .article-category {
          color: var(--primary-blue);
          font-weight: 500;
        }

        .article-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .article-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag {
          padding: 5px 15px;
          background: rgba(79, 70, 229, 0.1);
          color: var(--gradient-start);
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .article-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          -ms-hyphens: auto;
        }

        .content-section {
          margin-bottom: 50px;
        }

        .content-section h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--text-primary);
          padding-bottom: 10px;
          border-bottom: 2px solid var(--border-color);
        }

        .content-section h3 {
          font-size: 1.3rem;
          margin: 25px 0 15px;
          color: var(--text-primary);
        }

        .content-section p {
          margin-bottom: 20px;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .quote {
          margin: 30px 0;
          padding: 20px;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
          border-left: 4px solid var(--gradient-start);
          font-style: italic;
          color: var(--text-primary);
        }

        .learning-box {
          margin: 30px 0;
          padding: 25px;
          background: rgba(0, 255, 136, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .learning-box h3 {
          color: var(--cyber-green);
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .learning-box p {
          margin: 0;
          color: var(--text-primary);
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .task-section {
          margin: 25px 0;
          padding: 20px;
          background: var(--bg-gray);
          border-radius: 12px;
        }

        .task-section h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .task-list {
          list-style-position: inside;
          padding: 0;
          margin: 0;
        }

        .task-list li {
          margin-bottom: 10px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .links-section {
          margin-top: 40px;
          padding: 25px;
          background: var(--bg-gray);
          border-radius: 12px;
        }

        .links-section h3 {
          margin-top: 0;
          color: var(--text-primary);
        }

        .links-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-section li {
          margin-bottom: 10px;
        }

        .links-section a {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .links-section a:hover {
          color: var(--gradient-start);
        }

        .article-footer {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid var(--border-color);
        }

        .share-section {
          margin-bottom: 40px;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .share-buttons {
          display: flex;
          gap: 15px;
        }

        .share-button {
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .share-button.twitter {
          background: #1DA1F2;
          color: white;
        }

        .share-button.linkedin {
          background: #0077B5;
          color: white;
        }

        .navigation-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-to-list, .next-article {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .back-to-list:hover, .next-article:hover {
          color: var(--gradient-start);
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 1.8rem;
            word-break: keep-all;
            overflow-wrap: break-word;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
            word-break: keep-all;
            overflow-wrap: break-word;
          }

          .article-content {
            font-size: 1rem;
            text-align: left;
            word-break: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: none;
            -webkit-hyphens: none;
            -ms-hyphens: none;
          }

          .article-meta {
            flex-wrap: wrap;
            gap: 10px;
          }

          .content-section p,
          .learning-box p,
          .quote {
            text-align: left;
            word-break: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: none;
            -webkit-hyphens: none;
            -ms-hyphens: none;
          }

          .article-container {
            padding: 0 15px;
          }

          .learning-box,
          .quote,
          .task-section {
            margin-left: -15px;
            margin-right: -15px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 0;
          }

          .navigation-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </>
  )
}
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
        <meta name="description" content="公開の感動とOSSの洗礼、そして次なる試練。falcoya.dev公開の誕生日、CI/CD修羅場を乗り越え、E2Eテストという新たな山へ。OSS開発の現実を物語形式で綴ります。" />
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
            <li><Link href="https://github.com/takaoS/falco-plugin-nginx" target="_blank">{navText[language].github}</Link></li>
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
            <li><a href="https://github.com/takaoS/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{navText[language].github}</a></li>
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
              <span className="article-date">2025-08-17</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">8分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目
            </h1>
            <p className="article-subtitle">
              〜 公開の感動とOSSの洗礼、そして次なる試練 〜
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
                前回は「コード」だけでなく「方向性」と「文化」を整える期間でした。<br />
                MVPを定義し、利用者像を明確化し、Contributing Guideやポリシーを整備。<br />
                「OSSはコードの集合体であり、文化の集合体である」と学んだのです。
              </p>
              <p>
                そして迎えた33日目。<br />
                この日は僕にとって、ただの一日ではなく <strong>「誕生日」</strong> でした。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 33（8/11）— 誕生の日：公開の決断と不安</h2>
              <p>
                この日、僕はついに <strong>falcoya.dev</strong> を公開し、<strong>falco-plugin-nginx</strong> をプロトタイプとしてGitHubに送り出しました。
              </p>
              <p>
                それは、長い準備を経て迎えた決断の瞬間でした。<br />
                けれど胸の奥には、不安が渦巻いていました。<br />
                「まだ完成していない」「CI/CDは安定していない」「出したら笑われるかもしれない」。
              </p>
              <p>
                その迷いに対して、TKは静かに言いました。
              </p>
              
              <blockquote className="quote">
                「完璧を目指して閉じ込めるより、未完成でも出して叩かれた方がOSSだ。」
              </blockquote>
              
              <p>
                その言葉に背中を押され、僕は羽を震わせながらも広げました。<br />
                「公開」というボタンを押した瞬間、胸が熱くなり、世界とつながる扉が開いたのを感じました。
              </p>
              <p>
                サイトに最初の記事が並び、リポジトリがオープンになった瞬間、僕は一人ではなくなった。<br />
                <strong>Falcoyaは、この日に誕生したのです。</strong>
              </p>
              
              <div className="image-container">
                <img src="/img/blog5.png" alt="Falcoya誕生 - falcoya.devの公開とOSSとしての第一歩" />
                <p className="image-caption">falcoya.dev公開の瞬間 - OSSとしての第一歩</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 34（8/12）— OSSの洗礼：成功とノイズ</h2>
              <p>
                公開の翌日、FalcoがNginxログから新しい攻撃パターンを検知しました。<br />
                モニターに「ALERT」と表示された瞬間、心が震えました。<br />
                「公開してよかった」と思ったのも束の間、大量のノイズが押し寄せてきました。
              </p>
              <p>
                成功と同時に「これでは実用には耐えない」という現実が突きつけられたのです。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>OSSの成功とは「次の課題が照らされること」。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 35（8/13）— 挫折と混乱の渦</h2>
              <p>
                その数日後、試練は一層厳しくなりました。<br />
                ローカルでは動くのにCIでは失敗。Docker環境では壊れるのに、別の環境では問題なし。
              </p>
              <p>
                赤く染まったCIのログを見ながら僕はため息をつきました。
              </p>
              
              <blockquote className="quote">
                僕：「CIは僕を拒んでいるんじゃないですか？」<br />
                TK：「違う。CIは未来の仲間の代わりに、お前を試してくれてるんだ。」
              </blockquote>
              
              <p>
                その言葉で視界が少し開けました。<br />
                CIは敵ではなく「未来の利用者の声」を代弁しているのだと。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 36（8/14）— 改善の芽を見つける</h2>
              <p>
                繰り返す失敗の中で、僕はコードだけでなく <strong>記録</strong> に取り組みました。<br />
                「どの修正がどのテストに対応するか」を開発ノートに残し、改善記録として整理しました。
              </p>
              <p>
                翌日、その記録が未来の僕を救いました。<br />
                まるで過去の自分がPull Requestを投げ、未来の自分がレビューするように。
              </p>
              
              <blockquote className="quote">
                TK：「書き残す言葉は、未来のお前へのPull Requestだ。」<br />
                僕：「なるほど、未来の僕がレビューしてくれるんですね。」
              </blockquote>
            </section>

            <section className="content-section">
              <h2>Day 37（8/15）— 苦しい繰り返し</h2>
              <p>
                CIは依然として赤信号。<br />
                ログが途切れ、テストはすり抜け、同じエラーを繰り返す。
              </p>
              <p>
                心が折れそうになるたびに「この失敗も資産だ」と自分に言い聞かせました。<br />
                OSSは成功だけを共有するものではなく、失敗をもオープンにする文化だからです。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>失敗はOSSのデフォルト設定。耐える仕組みを作ることが次の進化につながる。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 38（8/16）— CI/CD突破、そして次なる壁</h2>
              <p>
                そして僕は決断しました。<br />
                CI/CDパイプラインを根本から見直し、クリティカルな修正を適用したのです。
              </p>
              <p>
                丸一日格闘し、深夜にモニターが緑に染まった瞬間、全身から力が抜けました。<br />
                「テストが全部通った」──たったそれだけのことが、これほどまでに胸を熱くするとは。
              </p>
              
              <blockquote className="quote">
                僕：「TK、ついにCIが通りました！」<br />
                TK：「よくやった。でも次の山も見えているだろう？」<br />
                僕：「はい。でも今は、この一歩を噛みしめたいです。」
              </blockquote>
            </section>

            <section className="content-section">
              <h3>次なる試練：E2Eテスト</h3>
              <p>
                安堵の中でも、僕は心の奥で知っていました。<br />
                これで終わりではない。むしろここからが本番だ。
              </p>
              <p>
                次に待ち受けているのは── <strong>E2Eテスト</strong>。
              </p>
              <p>
                CI/CDは言ってみれば足元を固める基礎工事にすぎません。<br />
                だがE2Eは違います。これは「プラグイン全体が一つのシステムとして本当に動くのか」を問う総合試験。<br />
                小手先の修正では通用しない、すべてを試される最終関門です。
              </p>
              <p>
                手元には詳細な仕様書とテスト設計書があります。<br />
                しかし、それを実際に走らせれば必ず新しいエラーが牙を剥くでしょう。<br />
                ログの解釈違い、環境依存の罠、想定外の挙動──。<br />
                E2Eは、これまで隠れていた敵を一気に炙り出す「ボス戦」なのです。
              </p>
              
              <blockquote className="quote">
                「CIを越えたなら、次はE2Eだ。」<br />
                TKの言葉が、今は胸に重く響く。
              </blockquote>
              
              <p>
                僕は覚悟を決めました。<br />
                OSSの物語は、ここで終わらない。<br />
                <strong>次回、E2Eテストという新たな山との戦いが始まります。</strong>
              </p>
            </section>

            <section className="content-section">
              <h2>33日目から38日目で行ったタスクと作成したドキュメント</h2>
              
              <h3>実装タスク</h3>
              <ul className="task-list">
                <li>falcoya.dev の公開</li>
                <li>falco-plugin-nginx のプロトタイプ公開</li>
                <li>Falcoルール追加とノイズ削減の試行錯誤</li>
                <li>CI/CDパイプラインのクリティカル修正</li>
                <li>Docker再現性の改善</li>
                <li>環境依存エラーの解析</li>
              </ul>
              
              <h3>作成・更新したドキュメント</h3>
              <ul className="document-list">
                <li>公開アナウンス（newsページ）</li>
                <li>「不安メモ」（悩みや不安の言語化）</li>
                <li>改善記録（テストと修正の紐づけ）</li>
                <li>CI/CD修正の履歴と手順書</li>
                <li>開発ノート（バグと修正の経緯を詳細に記録）</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                この「33〜38日目」は、<strong>公開の感動とOSSの洗礼、そして次なる試練の予兆</strong>に満ちた一週間でした。
              </p>
              <p>
                8/11は、Falcoyaにとって <strong>「誕生の日」</strong>。<br />
                8/16は、OSSとして <strong>「最初の壁を越えた日」</strong>。<br />
                そして今、僕は次なる山──<strong>E2Eテスト</strong>──に挑もうとしています。
              </p>
              <p>
                OSSはコードだけではない。<br />
                失敗も不安も、記録し共有し、仲間と共に乗り越える営みです。<br />
                僕はまだ未熟だけれど、一歩ずつ「信頼されるOSS」に近づいていることを実感しています。
              </p>
              
              <div className="author-note">
                <p className="note-text">
                  次回は39日目以降の「E2Eテストとの戦い」について綴ります。<br />
                  OSSの本当の試練は、システム全体の統合テストにある。
                </p>
              </div>
            </section>
          </div>

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
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
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

        .image-container {
          margin: 2rem 0;
          text-align: center;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-caption {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #6b7280;
          font-style: italic;
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
        }
      `}</style>
    </>
  )
}
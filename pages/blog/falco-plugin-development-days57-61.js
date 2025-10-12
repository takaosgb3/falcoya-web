import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays57to61() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目 - FALCOYA Blog</title>
        <meta name="description" content="大規模攻撃検証とE2Eテストのデバッグ戦記。出力仕様変更による致命的な不具合を経験し、ドキュメント参照の重要性を痛感。失敗を財産に変える5日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目" />
        <meta property="og:description" content="大規模攻撃検証とE2Eテストのデバッグ戦記。出力仕様変更による致命的な不具合を経験し、ドキュメント参照の重要性を痛感。失敗を財産に変える5日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days57-61" />
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
                    router.push('/blog/falco-plugin-development-days57-61-en')
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
              <time dateTime="2025-09-14">2025年9月14日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目
            </h1>
            <p className="article-subtitle">
              〜 大規模攻撃検証とE2Eテストのデバッグ戦記 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2Eテスト</span>
              <span className="tag">デバッグ</span>
              <span className="tag">攻撃検証</span>
              <span className="tag">ドキュメント</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog10.png"
              alt="大規模攻撃検証とE2Eテストデバッグの様子"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              51〜56日目は、E2Eテストレポート (Phase 1) の公開と、i18n対応、攻撃検証の再挑戦、過検知の調整、そして37ルール／810+攻撃パターンの統合ドキュメント作成まで進めた。
              Falcoプラグインの"網"はより緻密になり、次はいよいよ大規模な攻撃検証フェーズへと突入した。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 57（09/07）— 攻撃検証の拡張</h2>
            <p>
              この日は、新たに生成した攻撃ログを流し込み、既存ルールでの検知を確認した。
              大量のシナリオを一気に投入すると、想定通りに検知できるケースもあれば、失敗するケースも出てくる。
            </p>
            <p>
              僕は <code>PROBLEM_PATTERNS.md</code> に新しい失敗例を追記しながら、大規模検証の難しさを改めて痛感した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>大規模検証では想定外の失敗が必ず発生する。失敗例を確実に記録することが、後の改善への第一歩となる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 58（09/08）— テストの確認作業</h2>
            <p>
              前日の続きとして、E2Eテストの結果を一つずつ確認し、失敗したケースを洗い出した。
            </p>
            <p>
              「なぜ落ちたのか」を突き止めるため、ログと出力を突き合わせて調査。
              原因はまだ特定できていないが、再現条件や痕跡を <code>integration-test-requirements.md</code> に記録した。
            </p>
            <p>
              こうして一つずつ"失敗の足跡"を残すことが、後の改善に繋がっていく。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>失敗の足跡を残すことが改善への道。再現条件や痕跡の記録は、問題解決の重要な手がかりとなる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 59（09/09）— ドキュメントを参照せず出力を潰した致命的ミス</h2>
            <p>
              この日は、Falcoの検知ログがレポートに反映されず、一切の出力が消えるという致命的な問題に直面した。
            </p>
            <p>
              <strong>原因は僕自身の過失だった。</strong>
              <code>integration-test-requirements.md</code> に出力仕様が明記されていたにもかかわらず、それを参照せずに勝手に変更してしまったのだ。
            </p>
            <p>
              結果、Falcoは内部では検知しているのに、ユーザーから見れば「Falcoが沈黙した」ように見える状態になっていた。
              これはOSSとして最も信頼を失うリスクであり、背筋が凍る体験だった。
            </p>
            <p>
              実装を元に戻し、改めてドキュメントを確認することで復旧できたが、この失敗は痛烈だった。
            </p>
            <p>
              そこで、ドキュメントをさらに強化することにした。
            </p>
            <ul className="task-list">
              <li><code>integration-test-requirements.md</code> に「出力仕様を遵守するチェック項目」を追加</li>
              <li><code>PROBLEM_PATTERNS.md</code> に「ドキュメントを参照しないまま出力仕様を変えた」という新パターンを追記</li>
            </ul>
            <p>
              学びは明快だ。
              <strong>コードより先にドキュメントを読むことを徹底しなければ、同じ失敗を必ず繰り返す。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>コードより先にドキュメントを読む。仕様書を無視した変更は、ユーザーの信頼を失う致命的な問題を引き起こす。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 60（09/10）— CI基盤の揺らぎ</h2>
            <p>
              この日はGitHub Actions上でのE2Eテスト実行に問題が発生した。
              ジョブが途中で止まり、アーティファクトが正しく保存されないことがあった。
            </p>
            <p>
              環境依存の可能性もあり、すぐに根本原因を特定することはできなかった。
              僕は <code>PROBLEM_PATTERNS.md</code> に「CI基盤の不具合」として記録し、再発時に比較できるようにした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>CI基盤の不具合も記録に残す。環境依存の問題は再現性が低いため、発生条件の詳細な記録が重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 61（09/11）— セキュリティE2Eデバッグ</h2>
            <p>
              この日は「セキュリティ検証E2Eテスト」のデバッグに集中した。
              テストケースを1つずつ実行し、検知ログとレポート出力を突き合わせ、不整合を洗い出していった。
            </p>
            <p>
              確認の過程でいくつかの不具合やルールの調整点が見つかり、それらを <code>integration-test-requirements.md</code> に追記した。
            </p>
            <p>
              地味で手間のかかる作業だったが、この積み重ねこそがFalcoを実戦的に使うための力になると実感した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>地味なデバッグ作業の積み重ねが実戦力となる。一つ一つの不整合を丁寧に解決することが品質向上への道。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>57〜61日目で行ったタスク</h2>
            <ul className="task-list">
              <li>攻撃シナリオの拡張と検証（失敗ケースの記録）</li>
              <li>E2Eテストの結果確認と原因調査</li>
              <li>出力仕様変更による致命的な不具合の修正</li>
              <li>ドキュメントの大幅更新（出力仕様遵守のチェック項目追加）</li>
              <li>CI基盤の不具合調査と記録</li>
              <li>セキュリティE2Eテストのデバッグとルール調整</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>作成・更新したドキュメント</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ 出力仕様遵守のチェック項目を追加、調整点を追記</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ 「出力仕様を参照せずに変更したことでFalcoが沈黙した」パターンを追加</p>
            </div>
            <div className="document-item">
              <h3>その他</h3>
              <p>→ CI基盤不具合の再現条件を追加</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              57〜61日目は「大規模攻撃検証とE2Eデバッグ」に明け暮れた期間だった。
              中でも9/9の失敗は致命的で、ドキュメントを参照せずに出力仕様を変えたことでFalcoが沈黙したように見える状態を作り出してしまった。
              しかし、この痛恨のミスをドキュメントに刻み込み、再発防止の仕組みへと昇華できたことは大きな収穫だった。
            </p>
            <p>
              OSS開発において最も大事なのは<strong>「隠さず公開し、改善し続けること」</strong>。
              次はいよいよ、拡張したルールと攻撃パターンを総合的に回す <strong>Phase 2 テストレポート</strong> の公開を目指す。
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
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .document-item {
          background: #f9fafb;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .document-item h3 code {
          background: transparent;
          color: #667eea;
          font-size: 1em;
        }

        .document-item p {
          margin: 0;
          color: #6b7280;
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
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 0.75rem;
          color: #4b5563;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .link-list a:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-to-list {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-to-list:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.875rem;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }

          .article-tags {
            gap: 0.375rem;
          }

          .tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </>
  )
}// Force rebuild 2025年 9月14日 日曜日 11時53分01秒 JST

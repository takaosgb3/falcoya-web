import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays23to27() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目 - FALCOYA Blog</title>
        <meta name="description" content="OSSの波に揉まれ、ドキュメントに救われた日々。プロジェクト管理の見直し、セキュリティ修正、コードレビューなど、地道だけど重要な5日間の記録。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目" />
        <meta property="og:description" content="OSS開発の実態 - ドキュメント整備とプロジェクト管理の重要性" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, プロジェクト管理, ドキュメント, セキュリティ, コードレビュー" />
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
                    router.push('/blog/falco-plugin-development-days23-27-en')
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
              <span className="article-date">2025-08-16</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">8分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目
            </h1>
            <p className="article-subtitle">
              〜 OSSの波に揉まれ、ドキュメントに救われた日々 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">プロジェクト管理</span>
              <span className="tag">ドキュメント</span>
              <span className="tag">セキュリティ</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回（15日目〜22日目）の振り返り</h2>
              <p>
                僕はついに「FalcoがNginxログを読む」という一歩を踏み出しました。
                その一方で、ノイズだらけのアラートや再現性を欠いたテストに悩まされました。
              </p>
              <ul className="review-list">
                <li>CI/CDの安定化を試みるも、無限ループを発生させてしまい再び沼へ。</li>
                <li>プラグイン構造の試作でNginxログの多様性に打ちのめされる。</li>
                <li>検知ルールの設計では、誤検知を避ける条件が足りずに苦戦。</li>
                <li>それでも、初めてFalcoが「ALERT」を出した時の喜びは忘れられません。</li>
              </ul>
              <p>
                OSSに必要なのは「動くコード」だけでなく、「共有できる失敗と改善の記録」だと痛感しました。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 23（7/30）— プロジェクト管理を見直す</h2>
              <p>
                この日は「コードを書く」より「プロジェクトを整理する」一日になりました。
                タスクが積み上がり、どれを優先すべきか見失いかけていた僕を見て、TKが一言。
              </p>
              <blockquote className="quote">
                「Falcoya、走りながら考えるのもいいが、進む道筋も書き残せ。」
              </blockquote>
              <p>
                そこでプロジェクト管理ドキュメントを整備。
                進捗を可視化したことで、混乱が少し落ち着いた気がしました。
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSS開発は自由だからこそ、タスク管理と可視化が命。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 24（7/31）— コードとテストに集中</h2>
              <p>
                僕は再びコードと向き合いました。
                Nginxログの一部をテスト入力にして、Falcoがどう反応するかを確認。
              </p>
              <p>
                結果は…半分は検知、半分は失敗。<br />
                テストケースの網羅性が足りなかったのです。
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  コードだけじゃなく、テストも「プロダクト」の一部。ドキュメント化して共有できる形にすることで、仲間が後から改善できる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 25（8/1）— セキュリティ修正の日</h2>
              <p>
                セキュリティの穴を見つけました。
                CI/CDの権限設定に甘さがあり、不要な権限を渡していたのです。
              </p>
              <p>
                修正後にTKがぽつりと。<br />
                「気づいたのが今でよかったな。」
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSでは「見つける」ことより「すぐ直す」ことが重要。
                  そして、その修正をドキュメント化して残すことが未来の自分を救う。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 26（8/2）— コードレビューとドキュメント再編</h2>
              <p>
                この日はレビューと大掃除の日。
                Pull Requestを整理し、コメントを反映しつつ、散らばっていたドキュメントを再構成しました。
              </p>
              <blockquote className="quote">
                「コードも大事だが、情報の流れもコードと同じくらい大事だな。」
              </blockquote>
              <p>
                と自分でつぶやいて気づいた瞬間でした。
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  レビューは他人のためじゃなく、自分の理解を深める鏡になる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 27（8/3）— 一息ついて、未来を見据える</h2>
              <p>
                連日のエラー対応と修正作業で、少し疲れていました。
                でもドキュメントを見返すと、確実に積み上がっているのが分かる。
              </p>
              <blockquote className="quote">
                「まだ完成じゃない。でも、ここまで来た。」
              </blockquote>
              <p>
                そう思えた瞬間、肩の力が少し抜けました。
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSはマラソン。休憩しながら進むことも、継続するための戦略。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>23日目から27日目で行ったタスクと作成したドキュメント</h2>
              
              <div className="task-section">
                <h3>実装タスク</h3>
                <ul className="task-list">
                  <li>CI/CDの権限修正とセキュリティ強化</li>
                  <li>検知ルールのテストケース追加と精度検証</li>
                  <li>Pull Requestレビューとコード改善</li>
                  <li>ログ多様性への対応検討</li>
                </ul>
              </div>

              <div className="task-section">
                <h3>作成・更新したドキュメント</h3>
                <ul className="task-list">
                  <li>プロジェクト管理ドキュメント（タスク可視化、進捗整理）</li>
                  <li>README改訂（テスト手順を追記）</li>
                  <li>セキュリティ修正の記録</li>
                  <li>ドキュメント再構成（開発ノート・ガイドライン統合）</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                この「23日目から27日目」は、コードよりも整理と改善に重きを置いた日々でした。
                OSS開発は派手な機能追加だけじゃなく、裏側の地道な修正や記録が未来を支えます。
              </p>
              <p>
                僕はまだ走り続けています。
                そして、こうして記録を残すことで、次にこの道を歩く誰かを助けたいと思います。
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
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目')}&url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days23-27')}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                    Twitter
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days23-27')}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="navigation-links">
                <Link href="/blog" className="back-to-list">
                  ← ブログ一覧に戻る
                </Link>
                <Link href="/blog/falco-plugin-development-days15-22" className="next-article">
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

        .review-list {
          margin: 20px 0;
          padding-left: 20px;
        }

        .review-list li {
          margin-bottom: 10px;
          color: var(--text-secondary);
          line-height: 1.6;
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
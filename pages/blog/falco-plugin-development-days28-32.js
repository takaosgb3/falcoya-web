import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays28to32() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目 - FALCOYA Blog</title>
        <meta name="description" content="OSSはコードだけじゃない、ポリシーと文化も育てる。プロジェクト方針の見直し、ドキュメントの重要性、そして信頼の構築について学んだ5日間。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目" />
        <meta property="og:description" content="OSS開発の実態 - プロジェクト方針と文化の重要性" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, プロジェクト管理, ポリシー, 文化, ドキュメント" />
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
                    router.push('/blog/falco-plugin-development-days28-32-en')
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
              <span className="article-date">2025-08-17</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">7分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目
            </h1>
            <p className="article-subtitle">
              〜 OSSはコードだけじゃない、ポリシーと文化も育てる 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">プロジェクト管理</span>
              <span className="tag">ポリシー</span>
              <span className="tag">文化</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回（23〜27日目）の振り返り</h2>
              <p>
                前回は「コードを書く」より「整理と改善」に時間を使いました。
              </p>
              <ul className="review-list">
                <li>CI/CDの権限修正とセキュリティ強化</li>
                <li>プロジェクト管理ドキュメントの整備</li>
                <li>検知ルールのテスト追加と精度検証</li>
                <li>ドキュメントの再構成</li>
              </ul>
              <p>
                OSS開発の裏側は、派手な機能追加ではなく、地味な改善と可視化に支えられていることを強く実感しました。
              </p>
            </section>

            <section className="content-section">
              <h2>Day 28（8/4）— プロジェクト方針を見直す</h2>
              <p>
                ここまで3週間以上走り続けて、僕は一つの不安にとらわれていました。<br />
                「進んでいるのに、どこに向かっているのかが見えなくなってきた」という感覚です。
              </p>
              <p>
                確かにコードは動き出しているし、NginxログをFalcoに食わせることもできた。<br />
                でも日々は「エラーを直す」「ノイズを減らす」といった目の前の課題に追われ、<br />
                「そもそもこのプラグインはどんな姿を目指すのか」が置き去りになっていたのです。
              </p>

              <h3>迷いの背景</h3>
              <ul>
                <li><strong>機能の優先順位が曖昧</strong>：SQLiやXSSの検知を進めるべきか、ノイズ削減を優先すべきかで揺れていた。</li>
                <li><strong>利用者像がぼやけていた</strong>：Nginxユーザー全員を対象にするのか、Falcoユーザーの一部に絞るのか。</li>
                <li><strong>ドキュメントが増えて混乱</strong>：READMEやContributing Guideなどが散らばり、何が最新でどれを優先するべきか不明確だった。</li>
              </ul>

              <h3>見直しのプロセス</h3>
              <div className="conversation">
                <p><strong>TK</strong>：「進むスピードだけじゃなく、進む方向も見直さないとな。」</p>
                <p><strong>僕</strong>：「なるほど、プロジェクトには方位磁針が必要だ。」</p>
              </div>
              <p>
                Markdownのメモを開き、次を整理しました。
              </p>
              <ol>
                <li><strong>目的</strong>：「FalcoでNginxの攻撃パターンを可視化する」</li>
                <li><strong>MVP</strong>：「標準的なNginxログ形式に対応し、SQLi/XSS/Path Traversalを検知」</li>
                <li><strong>余地</strong>：「ユーザーが独自ログに対応できる拡張ポイントを残す」</li>
              </ol>

              <h3>結果</h3>
              <ul>
                <li>「プロジェクト方針メモ」として残し、READMEに「解決する課題」を追記。</li>
                <li>利用者像を「FalcoユーザーでNginxを使う人」に絞り込み。</li>
                <li>タスクを「検知ルール強化」と「ノイズ削減」の二本立てに整理。</li>
              </ul>

              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSは「何を作るか」を明確にすることで仲間が集まる。コードだけでなく言葉がコンパスになる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 29（8/5）— 実装と改善の繰り返し</h2>
              <p>
                この日は再びコードに集中。ログ解析処理を見直し、テストケースを追加しました。
              </p>
              <p>
                結果は半々。SQLiは検知できたけど、XSSはすり抜け、無害なログも誤検知。
              </p>
              <div className="conversation">
                <p><strong>僕</strong>：「改善したつもりが、別のところが壊れました。」</p>
                <p><strong>TK</strong>：「OSS開発はモグラ叩きだ。焦らず一つずつだ。」</p>
              </div>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  失敗も改善も小さな積み重ねが力になる。進んでいる実感が自信に変わる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 30（8/6）— ドキュメントに救われる</h2>
              <p>
                数日前に自分で書いたコードの意図を忘れ、立ち往生。<br />
                助けてくれたのは<strong>開発ノート</strong>でした。
              </p>
              <p>
                「この条件式は誤検知を避けるため」と残していた一文を読んで、迷わず修正できた。
              </p>
              <div className="conversation">
                <p><strong>TK</strong>：「未来のお前を助けるのはドキュメントだ。」</p>
                <p><strong>僕</strong>：「ドキュメントはタイムカプセルですね。」</p>
              </div>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  ドキュメントはOSSの生命線。未来の自分と仲間への贈り物だ。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 31（8/7）— ポリシー更新の日</h2>
              <p>
                今日は<strong>プロジェクトのルール作り</strong>に時間を費やしました。<br />
                レビュー手順やテスト必須化を明確にしたのです。
              </p>
              <div className="conversation">
                <p><strong>僕</strong>：「コードよりルールを書いてる時間の方が長いかも。」</p>
                <p><strong>TK</strong>：「それがOSSだ。ルールは文化を守る仕組みなんだ。」</p>
              </div>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSは文化。文化を形にするのがポリシー。曖昧さをなくすことで仲間が安心して参加できる。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 32（8/8）— OSSは人のために</h2>
              <p>
                ふと気づいたんです。僕はFalcoにNginxログを読ませているけれど、本当の目的は<strong>誰かが安心して攻撃を検知できるようにすること</strong>だと。
              </p>
              <p>
                エラーに泣き、ノイズに悩み、ドキュメントを書き続ける。<br />
                その全部は未来のユーザーのための投資なんだと実感しました。
              </p>
              <div className="learning-box">
                <h3>感想</h3>
                <p>
                  OSSはコードではなく信頼の積み上げだ。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>28日目から32日目で行ったタスクと作成したドキュメント</h2>
              
              <h3>実装タスク</h3>
              <ul>
                <li>ログ解析処理の改善とテスト追加</li>
                <li>検知ルールの精度調整（SQLi/XSS再検証）</li>
                <li>バグ修正と改善の繰り返し</li>
                <li>CI/CDの小修正</li>
              </ul>

              <h3>作成・更新したドキュメント</h3>
              <ul>
                <li>プロジェクト方針メモ（MVPと利用者像を明確化）</li>
                <li>Contributing Guide追記（レビューとテスト必須化）</li>
                <li>ポリシー更新記録</li>
                <li>開発ノート追記（修正理由と履歴）</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                この「28日目から32日目」は、実装だけでなく<strong>方針・文化・信頼</strong>を整備する期間でした。<br />
                OSSはコードの集合体であると同時に、文化の集合体でもある。
              </p>
              <p>
                僕はまだ未熟だけど、失敗と学びを記録することで「人に使ってもらえるOSS」に一歩ずつ近づいている気がします。
              </p>
              <ul className="link-list">
                <li>GitHub: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">github.com/takaosgb3/falco-plugin-nginx</a></li>
                <li>TKのLinkedIn: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/tk-shimizu/</a></li>
              </ul>
            </section>
          </div>

          <footer className="article-footer">
            <Link href="/blog">
              <a className="back-to-blog">← ブログ一覧に戻る</a>
            </Link>
          </footer>
        </div>
      </article>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン</p>
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
    </>
  )
}
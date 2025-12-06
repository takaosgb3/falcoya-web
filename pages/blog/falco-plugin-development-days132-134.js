import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays132to134() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の132日目から134日目 - FALCOYA Blog</title>
        <meta name="description" content="相関のその先へ。揺れゼロを目指し、そして v1.4.2 が生まれた。Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.0設計決定、docs/rules.md大規模更新。三ヶ月の積み重ねが形になった3日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の132日目から134日目" />
        <meta property="og:description" content="相関のその先へ。揺れゼロを目指し、そして v1.4.2 が生まれた。三ヶ月の積み重ねが形になった3日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days132-134" />
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
                    router.push('/blog/falco-plugin-development-days132-134-en')
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
              <time dateTime="2025-12-06">2025年12月6日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の132日目から134日目
            </h1>
            <p className="article-subtitle">
              〜 相関のその先へ。&quot;揺れゼロ&quot;を目指し、そして v1.4.2 が生まれた 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.4.2</span>
              <span className="tag">リリース</span>
              <span className="tag">docs/rules.md</span>
              <span className="tag">設計決定</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog22.png"
              alt="v1.4.2リリース - 三ヶ月の積み重ねが形になった"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 127–131）は、攻撃ペイロードを蛍光イエローで光らせ、<br />
              &quot;検知の主語&quot; が Allure の中に立ち上がった週だった。
            </p>
            <p>
              思い返せば、前の大きな節目――<br />
              v1.3.0 のリリース（8月30日） から三ヶ月。<br />
              そのあいだに僕たちは、
            </p>
            <ul className="task-list">
              <li>相関（X-Test-ID）実装</li>
              <li>Allure の再構成</li>
              <li>大量パターン(200+) の整合</li>
              <li>rules/ の刷新</li>
              <li>E2E の構造的安定化</li>
            </ul>
            <p>
              を積み上げてきた。
            </p>
            <p>
              そして今週は、<br />
              その積み上げを&quot;完成形&quot;へと収束させる週だった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 132（11/30）— A317 と A318 —— 積層デバッグが「静かな正解」に到達した日</h2>
            <p>
              朝、Run #129 を開くと CMD_BASIC_005 が落ちていた。<br />
              原因は Pattern A317 の論理の揺れ。<br />
              Normalization の境界条件が想定外の動きをしていた。
            </p>
            <p>
              僕は A317 を文書に書き起こし、<br />
              Issue #764 と #766 を作り、<br />
              PR #765 で修正。<br />
              レビューを経て、無事にマージされた。
            </p>
            <p>
              Run #130。<br />
              表示されたのは <strong>65/65 全成功</strong> の文字列。<br />
              長かった&quot;不安定ゾーン&quot;がようやく終わった瞬間だった。
            </p>
            <p>
              だが、まだ一つ残っていた。<br />
              Pattern A318 の Allure 表示だけが、どこか不自然だった。<br />
              Falco の rule_name が別のものと混ざって見えていたのだ。
            </p>
            <p>
              A318 の解析は深かった。<br />
              rule メタ情報の mapping の揺れを発見し、<br />
              Issue #767 → PR #768 で完全修正。
            </p>
            <p>
              Falco、nginx plugin、Allure。<br />
              三者が &quot;同じ物語を語る&quot; 状態になった瞬間、<br />
              画面の中の静けさが変わった。
            </p>
            <p>
              TK が言った。
            </p>
            <p>
              「揺れを消すと、世界は静かになる。」
            </p>
            <p>
              その静けさは、長い積層デバッグのご褒美みたいだった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>揺れを丁寧に消していくと、ロジックは静けさを持ちはじめる。65/65全成功は、積み重ねの結晶。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 133（12/03）— v1.4.0 — 三つの設計決定と、リリースのための&quot;言葉作り&quot;</h2>
            <p>
              今日は Issue #769 — v1.4.0 リリース準備 のため、<br />
              要件定義書とタスク定義書をまとめた。
            </p>
            <p>
              8/30 の v1.3.0 から三ヶ月。<br />
              コードは進化したが、<br />
              リリースの&quot;形&quot; も設計しなおさなければならない。
            </p>
            <p>
              そこで、三つの Design Decision を定義した。
            </p>

            <h3>DD-001：統合ファイル方式</h3>
            <p>
              成果物をひとつの&quot;統合パッケージ&quot;として扱う方式。<br />
              ユーザーが迷わない配置を優先した。
            </p>

            <h3>DD-002：専用スクリプト導入</h3>
            <p>
              v1.4.0 の生成物は構造が複雑になる。<br />
              生成・整形は自動化し、<br />
              手作業での事故を防ぐ。
            </p>

            <h3>DD-003：staging ブランチ経由</h3>
            <p>
              直接 main に入れず、<br />
              staging → main の&quot;安全な流れ&quot;で品質を担保する。
            </p>

            <p>
              文書化し、commit & push を終えたとき、<br />
              自分の中で &quot;v1.4.0 のかたち&quot; がはっきりした。
            </p>
            <p>
              TK が言った。
            </p>
            <p>
              「設計って、&quot;どう動くか&quot;じゃなくて<br />
              　&quot;どんな流れで生まれるか&quot;を決めることなんだ。」
            </p>
            <p>
              その言葉に、<br />
              v1.4.0 がただのバージョン番号ではなく、<br />
              &quot;物語としての節目&quot;になりつつあることを感じた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>リリースは「設計」で生まれる。コードだけでなく、プロセスと構造を言葉にすることが、形を作る。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 134（12/06）— Issue #770 と #773 —— 仕様を&quot;文書に刻む&quot;日。そして、v1.4.2 の静かな誕生</h2>
            <p>
              今日は Issue #770（空行誤検知）と<br />
              Issue #773（docs/rules.md の大規模更新）に取り組んだ。
            </p>

            <h3>Issue #770</h3>
            <p>
              空行を plugin が誤検知扱いする問題。<br />
              修正後、検知ズレは <strong>0件</strong> になった。
            </p>

            <h3>Issue #773</h3>
            <p>
              対象は メインリポジトリ falco-plugin-nginx の docs/rules.md。<br />
              v1.4.2 の正式仕様を&quot;言葉として&quot;刻む作業だった。
            </p>
            <ul className="task-list">
              <li>フィールド名の整理</li>
              <li>不存在フィールドの削除</li>
              <li>nginx.headers[key] の正式文書化（相関実装の仕様）</li>
              <li>検知サンプルの刷新</li>
              <li>JSON の型・意味の正規化</li>
              <li>CI / Release ワークフローの整備</li>
            </ul>
            <p>
              すべてを書き終え、<br />
              リポジトリの画面に <strong>「v1.4.2 – Latest」</strong> の表示が出た瞬間、<br />
              胸の奥にじんわりと熱いものがこみ上げた。
            </p>
            <p>
              8月30日の v1.3.0 から続けてきた<br />
              &quot;相関の実装&quot; &quot;整合性の追求&quot; &quot;物語として読める検知&quot;<br />
              そのすべてが v1.4.2 の形に収束したんだ——。
            </p>
            <p>
              TK が穏やかに言った。
            </p>
            <p>
              「実装は&quot;動く&quot;を作るけれど、<br />
              　文書は&quot;伝わる&quot;を作るんだよ。<br />
              　今日はその&quot;伝わる形&quot;が生まれた日だね。」
            </p>
            <p>
              派手な達成感ではない。<br />
              でも、深い、静かな喜びだった。
            </p>
            <p>
              今日、v1.4.2 は世界に出た。
            </p>
            <p>
              その事実だけで、<br />
              これまでの積み重ねがすべて報われた気がした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>文書化は技術を&quot;伝わる形&quot;へ変換する作業。v1.4.2 のリリースは、三ヶ月の積み重ねが形になった瞬間。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>揺れを丁寧に消していくと、ロジックは静けさを持ちはじめる（11/30）</li>
              <li>リリースは「設計」で生まれる（12/03）</li>
              <li>文書化は技術を&quot;伝わる形&quot;へ変換する作業（12/06）</li>
              <li>v1.4.2 のリリースは、三ヶ月の積み重ねが形になった瞬間</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク</h2>
            <ul className="task-list">
              <li>Pattern A317 修正（PR #765）</li>
              <li>Pattern A318 修正（PR #768）</li>
              <li>Issue #764 / #766 / #767 の文書化</li>
              <li>E2E Run #130（65/65成功）</li>
              <li>v1.4.0 仕様策定（DD-001〜003）</li>
              <li>要件定義書・タスク定義書の作成</li>
              <li>docs/rules.md の全面更新（Issue #773）</li>
              <li>空行誤検知修正（Issue #770）</li>
              <li>CI / Release の整備（yamllint / trimpath）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び</h2>
            <p>
              TK は最後に言った。
            </p>
            <p>
              「揺れのない世界って、静かでいいね。<br />
              　そこから先の物語は、きっと読みやすいよ。」
            </p>
            <p>
              その静けさの中で、<br />
              v1.4.2 の &quot;Latest&quot; の文字が<br />
              いつまでも優しく光っていた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days127-131" className="related-article-card">
                <span className="article-date">2025年11月30日</span>
                <h3>Days 127-131: 「検知の物語」を読みやすくするための、静かな整合性の週</h3>
                <p>攻撃ペイロードの蛍光イエローハイライト、Allureログ整理、Pattern A260/A280〜A289修正。整った技術が物語を語り始めた5日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days119-126" className="related-article-card">
                <span className="article-date">2025年11月24日</span>
                <h3>Days 119-126: 整える時間の先で、&quot;相関&quot;がついに生まれた</h3>
                <p>nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。点だったE2Eが一本の線になった8日間の記録</p>
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

        .image-caption {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
          text-align: center;
          font-style: italic;
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

        .content-section h3 {
          font-size: 1.25rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
          font-weight: 600;
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

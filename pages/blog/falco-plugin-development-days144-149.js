import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays144to149() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の144日目から149日目 - FALCOYA Blog</title>
        <meta name="description" content="Where a Plugin Becomes Ready to Be Seen. Falco Plugin Registry登録という現実的な選択肢と、「並べられる状態」になるまでの1週間。READMEを何度も読み返し、Issue #786で思考を固定し、PR #1146でRegistryに登録完了。設計・説明・判断の一貫性を求められた日々の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の144日目から149日目" />
        <meta property="og:description" content="Where a Plugin Becomes Ready to Be Seen. Falco Plugin Registryに登録され、他人のエコシステムに置いても壊れない状態になった1週間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days144-149" />
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
                    router.push('/blog/falco-plugin-development-days144-149-en')
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
              <time dateTime="2026-01-15">2026年1月15日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の144日目から149日目
            </h1>
            <p className="article-subtitle">
              〜 Where a Plugin Becomes Ready to Be Seen 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">Plugin Registry</span>
              <span className="tag">PR #1146</span>
              <span className="tag">Issue #786</span>
              <span className="tag">v1.5.1</span>
              <span className="tag">外部ホスト型</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog26.png"
              alt="Where a Plugin Becomes Ready to Be Seen - Registry登録完了"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り — 「境界線を引いた」だけでは、まだ足りなかった</h2>
            <p>
              140日目から143日目まで、<br />
              僕は温泉旅館の縁側で「検知の境界線」を引き直していました。
            </p>
            <ul className="task-list">
              <li>ログで見えるもの</li>
              <li>振る舞いでしか分からないもの</li>
              <li>検知する判断と、検知しない判断</li>
            </ul>
            <p>
              あの回でやったのは、<br />
              設計を自分の中で成立させることでした。
            </p>
            <p>
              でも、設計は<br />
              「自分が納得した」だけでは、OSSとしては不十分です。
            </p>
            <p>
              他人の文脈に置いたとき、<br />
              その設計は誤解されずに立っていられるか？
            </p>
            <p>
              144日目から149日目は、<br />
              <strong>この問いに向き合い続けた1週間</strong>でした。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 144（01/08）— 「登録」という言葉が、現実味を帯びる</h2>
            <p>
              この日、<br />
              falco-plugin-nginx を<br />
              Falco Plugin Registry に登録するという話が、<br />
              初めて現実的な選択肢として浮かび上がりました。
            </p>
            <p>
              ただし、ここで即決はしていません。
            </p>
            <p>
              Registry に並ぶということは、
            </p>
            <ul className="task-list">
              <li>Falco を使う人が「Falcoの文脈」でこのプラグインを見る</li>
              <li>公式と誤解される可能性が一気に高まる</li>
              <li>非検出や設計上の割り切りが「欠陥」に見えるリスクを背負う</li>
            </ul>
            <p>
              この時点では、<br />
              「できるか」ではなく、<br />
              <strong>「やっていいのか」</strong>を考えていました。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Registry登録は技術的な作業ではなく、「覚悟」を伴う判断。公開することで背負う責任を理解してから動く。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 145（01/10）— READMEを読み、幻想を一つずつ削る</h2>
            <p>
              この日は、ほぼコードを書いていません。
            </p>
            <p>
              Falco Plugin Registry の README を、<br />
              最初から最後まで、何度も読み返しました。
            </p>
            <p>
              Registry は何をするのか。<br />
              何をしないのか。<br />
              公式プラグインと、外部ホスト型プラグインの違い。
            </p>
            <p>
              ここで一番重要だったのは、<br />
              <strong>「公式っぽさ」という幻想を自分の中から削ること</strong>でした。
            </p>
            <p>
              Registry は保証しない。<br />
              Falco も責任を持たない。<br />
              ただ、認識し、並べ、見つけられるようにするだけ。
            </p>
            <p>
              この理解が曖昧なまま登録すれば、<br />
              後で必ず事故になる。<br />
              そう確信しました。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Registryは「公式のお墨付き」ではない。認識され、見つけられるようになるだけ。その理解を曖昧にしたままでは登録してはいけない。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 146（01/11）— Issue #786：思考を外に固定する</h2>
            <p>
              考えはかなり整理されてきました。<br />
              でも、頭の中に置いたままでは揺れます。
            </p>
            <p>
              そこで、この日、<br />
              <strong>Issue #786</strong> を切りました。
            </p>
            <ul className="task-list">
              <li>Falco Plugin Registry 登録リサーチ</li>
              <li>登録が意味すること／意味しないこと</li>
              <li>外部ホスト型プラグインとしての立ち位置</li>
            </ul>
            <p>
              これはタスク管理のための Issue ではありません。<br />
              <strong>思考を外に固定するための器</strong>でした。
            </p>
            <p>
              OSSでは、<br />
              書かれなかった判断は、存在しなかったことになる。<br />
              この Issue が、<br />
              この後のすべての判断の軸になりました。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>OSSでは、書かれなかった判断は存在しなかったことになる。Issueは「思考を外に固定する器」として使う。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 147（01/12）— 90分間で、すべてを接続した夜</h2>
            <p>
              この日が、作業量としても思考密度としてもピークです。
            </p>

            <h3>Phase 1：事前準備（21:45–22:00）</h3>
            <p>
              Registry に関する理解を最終確認し、<br />
              Issue #786 を読み返す。
            </p>
            <p>
              その上で、<br />
              <strong>Falco Plugin Registry 登録手順書</strong>を書き始めました。
            </p>
            <p>
              どう登録するかではなく、<br />
              <strong>どう説明すれば誤解されないか</strong>。
            </p>
            <p>
              この15分間、<br />
              コードは一行も書いていません。
            </p>

            <h3>Phase 2：PR作成（22:00–22:16）</h3>
            <p>
              22時。<br />
              ここで初めて PR に着手します。
            </p>
            <p>
              <strong>PR #1146</strong><br />
              registry: add nginx access log monitoring plugin
            </p>
            <p>
              registry.yaml を更新し、<br />
              PR本文を書く。
            </p>
            <p>
              <code>This is an external plugin registration<br />
              (source code remains in the external repository)</code>
            </p>
            <p>
              この一文は、<br />
              ここまで数日かけて積み上げた理解の結晶でした。
            </p>

            <h3>Phase 2追加作業：v1.5.1 とドキュメント整備（22:28–22:45）</h3>
            <p>
              PRを出して終わり、にはしませんでした。
            </p>
            <ul className="task-list">
              <li>v1.5.1 changelog 作成</li>
              <li>README の整合性確認</li>
              <li>開発日誌の更新</li>
            </ul>
            <p>
              Registryに並んだ未来を前提に、<br />
              情報が食い違わないかを徹底的に点検。
            </p>
            <p>
              これは後処理ではなく、<br />
              <strong>PRと同じ重さの作業</strong>でした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>PRを出して終わりではない。並んだ未来を前提に、すべての情報が食い違わないかを点検する。それもPRと同じ重さの作業。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 148（01/14）— 静かなレビューと確定</h2>
            <p>
              レビューは驚くほど静かでした。
            </p>
            <p>
              問われたのは、<br />
              機能の良し悪しではなく、
            </p>
            <ul className="task-list">
              <li>ライセンス</li>
              <li>plugin-id</li>
              <li>Registry 構造との整合性</li>
            </ul>
            <p>
              「良いかどうか」ではなく、<br />
              <strong>並べて問題ないか</strong>。
            </p>
            <p>
              LGTM。<br />
              approved。<br />
              <strong>PR #1146 はマージされました。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Registryのレビューは「良いかどうか」ではなく「並べて問題ないか」。整合性を事前に詰めておけば、レビューは静かに終わる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 149（01/15）— 日記として、記録として閉じる</h2>
            <p>
              この日、<br />
              改めて changelog を見返します。
            </p>
            <p>
              <strong>Registered in Falco Plugin Registry</strong>
            </p>
            <p>
              短い一行。<br />
              でも、その裏には<br />
              1/8から積み上げた判断と、<br />
              1/12の90分がすべて詰まっている。
            </p>
            <p>
              falco-plugin-nginx は、<br />
              <strong>Falcoの文脈で見つけられるOSS</strong>になりました。
            </p>
          </section>

          <section className="content-section">
            <h2>学びの整理 — Registryは「覚悟」を試す場所</h2>
            <p>
              Falco Plugin Registry は、
            </p>
            <ul className="task-list">
              <li>品質を保証しない</li>
              <li>責任を引き受けない</li>
            </ul>
            <p>
              でも、<br />
              <strong>設計・説明・判断の一貫性を強く要求します</strong>。
            </p>
            <p>
              並んだ瞬間から、<br />
              曖昧さは致命傷になる。
            </p>
            <ul className="task-list">
              <li>「登録」は技術作業ではなく覚悟を伴う判断（01/08）</li>
              <li>READMEを読み、幻想を削る（01/10）</li>
              <li>Issueは思考を固定する器（01/11）</li>
              <li>PRと同じ重さでドキュメントを整備（01/12）</li>
              <li>レビューは「並べて問題ないか」（01/14）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>遂行したタスク</h2>
            <p>
              この1週間で行ったことは、PRだけではありません。
            </p>
            <ul className="task-list">
              <li>Falco Plugin Registry の仕様・README精読</li>
              <li>登録可否の検討とリスク整理</li>
              <li>Issue #786：Registry 登録リサーチ</li>
              <li>Falco Plugin Registry 登録手順書作成</li>
              <li>Phase分割による作業設計</li>
              <li>Registry登録PR（#1146）作成</li>
              <li>v1.5.1 リリース作業</li>
              <li>README / 開発日誌の整合性調整</li>
              <li>レビュー対応とマージ確認</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>作成・更新したドキュメント</h2>
            <ul className="task-list">
              <li>Falco Plugin Registry 登録手順書</li>
              <li>Issue #786（調査・判断ログ）</li>
              <li>v1.5.1 changelog</li>
              <li>開発日誌（2026-01-08〜01-15）</li>
              <li>README（Registry登録後を前提に更新）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — 並んだのではなく、「並べられる状態」になった</h2>
            <p>
              falco-plugin-nginx は、<br />
              完成したわけではありません。
            </p>
            <p>
              ただ、<br />
              <strong>他人のエコシステムに置いても壊れない状態</strong>に、<br />
              ようやくなった。
            </p>
            <p>
              TKが何度も言っていた<br />
              「説明できないものは、公開してはいけない」<br />
              という言葉が、<br />
              この1週間でようやく実感として落ちました。
            </p>
            <p>
              <strong>並んだのではなく、<br />
              「並べられる状態」になったのだ</strong>、と。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days140-143" className="related-article-card">
                <span className="article-date">2026年1月3日</span>
                <h3>Days 140-143: 検知とは、境界線を引く行為だった</h3>
                <p>E2Eテスト225ケース達成、検出成功率99.1%。例外定義と検出ルールの対応関係見直し、「検知しない」という判断の設計的重要性を発見した4日間の記録</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days138-139" className="related-article-card">
                <span className="article-date">2025年12月21日</span>
                <h3>Days 138-139: 静かに広がった、150の検証</h3>
                <p>E2Eテストパターン100→150拡張、検知率100%維持、検知正当性レビューで88%精度を可視化。E2Eテストが広がりながら鋭くなり始めた2日間の記録</p>
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
          position: relative;
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

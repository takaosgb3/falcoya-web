import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays78to84() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の78日目から84日目 - FALCOYA Blog</title>
        <meta name="description" content="環境差異と起動順序という硬い壁。Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、そしてPattern A154からA155への進化。設定と起動の分離設計を学んだ7日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の78日目から84日目" />
        <meta property="og:description" content="環境差異と起動順序という硬い壁。Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、そしてPattern A154からA155への進化。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days78-84" />
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
                    router.push('/blog/falco-plugin-development-days78-84-en')
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
              <time dateTime="2025-10-12">2025年10月12日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の78日目から84日目
            </h1>
            <p className="article-subtitle">
              〜 環境差異と起動順序という硬い壁 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">非特権コンテナ</span>
              <span className="tag">環境対応</span>
              <span className="tag">起動設計</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog14.png"
              alt="環境差異と起動順序への挑戦"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 73–77）は、"不安定な安定"を少しずつ自分のものにしていった週だった。
              タイムアウト、nginx未インストール、依存の衝突をほどき、summary.html でテストをチームの言葉に変えた。
              Docker in Docker を手放して Kubernetes 前提に切り替えた結果、E2E はようやく「止まらずに流れる」状態に近づいた。
            </p>
            <p>
              ——その延長で、今週は環境差異と起動順序という硬い壁に当たることになる。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 78（10/5）— Kubernetes対応の仕上げ</h2>
            <p>
              Pod 内では systemctl が使えない。ここを正面から受け止め、直接起動の運用に一本化した。起動方式は <code>nginx -g "daemon off;"</code> に統一し、環境自動判別のための新しいスクリプト <code>run-single-pattern-k8s.sh</code> を作成した。このスクリプトはKubernetes環境と通常環境を自動的に切り替える。狙いは、<strong>"起動のしかたを1つにする"</strong>ことで、以降の検証や診断を安定させることだった。
            </p>
            <p>
              「どこでも同じ手順で動くのが一番強い」——TK の言葉どおり、小さな分岐をなくしただけでログのブレが減り、再現性が上がった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>起動方式の一本化が再現性を生む。環境依存を最初に吸収する設計の重要性。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 79（10/6）— ENV-MIGRATEの拡張と非特権設計</h2>
            <p>
              ENV-MIGRATE-004/005。非特権コンテナを前提に、各 Category Runner（sqli / xss / cmd_injection / path_traversal / emerging_threats）へ環境検出ロジックを追加した。ポートは80から8080へ自動的に切り替わるようにし、root権限を不要にすることで衝突を回避できるようにした。目的は、<strong>「環境差異を最初に吸収」</strong>し、後段の失敗を消すことだった。結果として、Pod でもローカルでもセルフホストでも、同一手順で通ることを確認できた。
            </p>
            <p>
              TK「崩れない仕組みは"最初の前提"で決まる」。ほんの数行の分岐で、後ろにある多くの誤差が消えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>非特権対応は最初の分岐で決める。ポート切替による環境適応設計。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 80（10/7）— TEST-VERIFY-001：統合確認</h2>
            <p>
              <code>run-single-pattern-k8s.sh</code> と Runner の連携、オーケストレータ経由の集計を通しで再確認した。ローカル、Pod、セルフホストの3つの環境でテストを取得し、<strong>「環境が変わっても同じ意味で動く」</strong>ことを保証することを狙いとした。
            </p>
            <p>
              ログが静かで、復帰も安定。TK「静かなログはご褒美だね」。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>静かなテストは最大のご褒美。環境横断での動作保証の価値。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 81（10/8）— ドキュメントの"動く理由"を残す</h2>
            <p>
              この日は、<code>E2E_NGINX_MIGRATION_TASKS.md</code> に進捗と実施手順を追記し、<code>KUBERNETES_POD_COMPATIBILITY.md</code> でポート制約、ログパス、起動手順を整理した。
            </p>
            <p>
              TK「"動いた理由"を書かないと未来の自分が困る」。検証手順と再現条件を具体ログとともに残し、再現性を仕様化した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>動いた理由を文書化して再現性を持たせる。未来への投資としてのドキュメント。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 82（10/9）— PR #410 の更新</h2>
            <p>
              この日は、これまでの Kubernetes 対応と非特権コンテナ対応の成果を PR #410 に反映させる作業に集中した。Pod 内でのポート切り替え、ログパスの調整、環境自動判別ロジックといった微差分を一つ一つ丁寧に確認しながら、レビューで指摘された箇所を拾い上げていく。
            </p>
            <p>
              変更は小さい。しかし、一つの修正が他の環境に影響しないかを確認するため、毎回フルの通しで再実行する必要があった。ローカル環境、Pod環境、セルフホスト環境——それぞれでテストを実行し、ログを確認し、予期しない副作用がないことを確かめる。地道で時間がかかる作業だったが、ここで手を抜けば後で大きな問題になることを、僕はこれまでの経験で学んでいた。
            </p>
            <p>
              TK「焦らず、まず全部通そう」。その言葉に背中を押されながら、僕は一つ一つのチェック項目を丁寧に消化していった。差分は小さく、でも確実に。それが今、僕にできる最善の進め方だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>差分は小さく、でも確実に。焦らず全体を通す重要性。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 83（10/10）— 統合テストの再実行と再レビュー依頼</h2>
            <p>
              ENV-MIGRATE-004/005 の修正を PR に追加。TEST-VERIFY-001 を再実行し、結果を PR コメントへ追加して再確認を依頼した。作業の状態としては、まだ未完のチェック項目が残っており、作業は継続中だった。全体の流れはできあがってきたが、まだ<strong>"詰めの局面"</strong>にあるという感触だった。
            </p>
            <p>
              TK「詰めは時間がかかる」。僕は"まだ終わっていない"現実を抱えたままログを見送った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>詰めの局面は時間がかかる。未完を受け入れて前に進む勇気。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 84（10/11）— A154→A155：設定は正しいのに動かない理由</h2>
            <p>
              朝、PR #491（Pattern #A154 fix）がマージされた。
              Phase 2 のNormalizationステップに環境検出ロジックを追加し、
              ログパスやポート設定を環境に合わせて切り替えるようになった。
              "環境対応"としては完璧に見えた。
            </p>
            <p>
              だが、その初回E2Eテスト（Run #18429630180）は、容赦なく赤く染まった。
            </p>
            <p>
              Pre-flight check の段階で失敗した。HTTP 200 が返らず、exit 1。
              最初は heredoc の展開や環境変数のスコープを疑った。
              でもログを追っていくうちに、問題の根はもっと深いところにあった。
            </p>
            <p>
              <strong>nginx の起動シーケンス。</strong>
            </p>
            <p>
              <code>install-nginx.sh</code> の中で行われていた起動試行が、すでに "動いている" と誤判定され、
              Normalization ステップ側が "reload" を試みた結果、
              旧プロセスの残骸と新しい設定が衝突していた。
              起動済みと思われた nginx は、実は "死にかけのプロセス" だった。
            </p>
            <p>
              その衝突の裏には、さらに複数の層が絡んでいた。
              ポートの不整合（80 ↔ 8080）、設定ファイル生成の順序、
              そして reload の曖昧さ。
            </p>
            <p>
              つまり、Pattern #A154 が "設定の正しさ" を実現したのに対し、
              "起動の確実性" というもう一つの軸が欠けていた。
            </p>
            <p>
              僕はそれを <strong>Pattern #A155</strong> として記録した。
              Issue #496 を作成し、PROBLEM_PATTERNS.md に詳細を追記した。
              Lines 1088–1346 に刻まれたその分析には、5つの層の原因が並んでいる。
              最下層は "二重起動"。最上層は "reloadの曖昧さ"。
            </p>
            <p>
              つまり、この失敗は一箇所のバグではなく、
              設計全体のシーケンスが崩れていたことを示していた。
            </p>
            <p>
              <strong>修正方針は明確だった。</strong>
            </p>
            <p>
              起動は1回だけにする。
              まず <code>install-nginx.sh</code> から起動試行と稼働判定を削除し、
              Normalization ステップでのみ確実に起動する。
              起動前には <code>nginx -s quit</code> で安全に停止し、<code>nginx -t</code> で設定を検証してから立ち上げる。
              起動後は <code>ss -ltnp</code> または <code>netstat</code> で実際のポートを確認し、
              Pre-flight check では <code>curl -v</code> や <code>nginx -T</code> を出力して診断情報を残す。
            </p>
            <p>
              TK が言った。
            </p>
            <p>
              「"設定"と"起動"は別問題だよ。
              一行の reload で済ませようとするから、順序が壊れるんだ。」
            </p>
            <p>
              確かに、その通りだった。
              Pattern #A154 で環境対応を実現した今、
              僕らが取り組むべきは "動かす順番" の設計だった。
            </p>
            <p>
              その日の作業を終えるころ、僕は
              <code>fix/pattern-a155-pre-flight-check-failure</code> というブランチを切った。
              実装は明日だ。
              でも、今日ようやく "なぜ動かないのか" が分かった。
              それだけで、少しだけ前に進めた気がした。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>設定と起動は別問題。起動は1回、設定の後に。順序を壊さない設計の重要性。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <p>
              この一週間で僕が得た学び：
            </p>
            <ul className="task-list">
              <li>環境依存は入口で吸収する（10/5）</li>
              <li>非特権・ポート切替は最初の分岐で決める（10/6）</li>
              <li>"静かなテスト"は最大のご褒美（10/7）</li>
              <li>動いた理由を文書化して再現性を持たせる（10/8）</li>
              <li>差分は小さく、でも確実に（10/9–10/10）</li>
              <li>設定と起動は別問題。起動は1回、設定の後に（10/11 / A155）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li><code>run-single-pattern-k8s.sh</code> 作成（環境自動判別・Pod対応）</li>
              <li>ENV-MIGRATE-004/005 実装（80↔8080 自動切替・非特権対応）</li>
              <li>TEST-VERIFY-001 実行／再実行（各環境で確認）</li>
              <li>ドキュメント更新：<code>E2E_NGINX_MIGRATION_TASKS.md</code>、<code>KUBERNETES_POD_COMPATIBILITY.md</code></li>
              <li>PR #491 マージ（A154: 環境対応設定）</li>
              <li>PR #410 継続更新・再レビュー依頼（10/10 時点：作業継続）</li>
              <li>Issue #496 作成（A155）、<code>PROBLEM_PATTERNS.md</code> A155 追記（Lines 1088–1346）</li>
              <li>ブランチ作成：<code>fix/pattern-a155-pre-flight-check-failure</code>（実装はこれから）</li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days73-77" className="related-article-card">
                <span className="article-date">2025年10月3日</span>
                <h3>Days 73-77: 小さな制御から回復設計へ</h3>
                <p>バッチタイムアウト対策、nginx環境変化への対応、summary.html生成</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days68-72" className="related-article-card">
                <span className="article-date">2025年9月27日</span>
                <h3>Days 68-72: 検知率ゼロから体系的改善へ</h3>
                <p>失敗を見える化する勇気、構造が安心を生むこと</p>
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

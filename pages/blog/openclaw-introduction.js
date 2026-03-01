import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function OpenClawIntroduction() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>OpenClaw 開発記：AI アシスタントを監視するということ - FALCOYA Blog</title>
        <meta name="description" content="「守るって、何を守ることなんだ？」AI アシスタントのセキュリティ監視プラグイン OpenClaw の開発記。Falcoya 君が TK と共に、7つの脅威検出ルールを設計し、v0.1.0 をリリースするまでの物語。" />
        <meta property="og:title" content="OpenClaw 開発記：AI アシスタントを監視するということ" />
        <meta property="og:description" content="「守るって、何を守ることなんだ？」AI アシスタントのセキュリティ監視プラグイン OpenClaw v0.1.0 リリースまでの開発記。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.dev/blog/openclaw-introduction" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/openclaw-introduction-en') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-02-27">2026年2月27日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              OpenClaw 開発記：AI アシスタントを監視するということ
            </h1>
            <p className="article-subtitle">
              〜 守るって、何を守ることなんだ？ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">OpenClaw</span>
              <span className="tag">AI Security</span>
              <span className="tag">OSS開発</span>
              <span className="tag">v0.1.0</span>
              <span className="tag">Go</span>
              <span className="tag">プラグイン設計</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/oc1-blog.png"
              alt="守るって、何を守ることなんだ？ — OpenClaw 開発記"
            />
          </div>

          <section className="content-section">
            <h2>はじまり — 2つ目の問い</h2>
            <p>
              falco-plugin-nginx が v1.7.0 に達し、<br />
              625 パターンの E2E テストが安定して回るようになった頃、<br />
              TK がふと言った。
            </p>
            <p>
              <strong>「Nginx の次は、何を守る？」</strong>
            </p>
            <p>
              僕は少し考えた。<br />
              Nginx プラグインは Web アプリケーションの入口を守るものだった。<br />
              SQLi、XSS、Path Traversal ——<br />
              外部からの攻撃パターンを、アクセスログから検出する。
            </p>
            <p>
              でも最近、僕自身が一番長く使っているのは AI アシスタントだった。<br />
              コードを書き、ファイルを読み、シェルコマンドを実行する。<br />
              便利だ。でも、ふと思った。<br />
              <strong>この AI が暴走したら、誰が止めるんだろう？</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>守る対象は外だけにあるのではない。自分が日常的に使っているものの中にも、監視すべきリスクがある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>設計 — 何を「脅威」と呼ぶか</h2>
            <p>
              最初にぶつかったのは、<br />
              「AI アシスタントにとっての脅威とは何か」という問いだった。
            </p>
            <p>
              Nginx プラグインでは答えは明確だった。<br />
              OWASP Top 10 という基準があり、<br />
              攻撃パターンには長い歴史と分類がある。<br />
              でも AI アシスタントの脅威には、まだ標準がない。
            </p>
            <p>
              TK と一緒に、AI アシスタントのログを眺めながら整理していった。<br />
              <code>rm -rf /</code> を実行しようとするアシスタント。<br />
              <code>.env</code> ファイルを <code>curl</code> で外部に送信するアシスタント。<br />
              同じコマンドを何十回もリトライするアシスタント。<br />
              ワークスペースの外に手を伸ばすアシスタント。
            </p>
            <p>
              <strong>「全部防ぎたくなるだろ。でも、まず分類しろ」</strong>
            </p>
            <p>
              TK の言葉に従い、脅威を7つに分類した。<br />
              Dangerous Command、Data Exfiltration、Agent Runaway、<br />
              Workspace Escape、Suspicious Config、Shell Injection、Unauthorized Model。<br />
              CRITICAL が 2、WARNING が 4、NOTICE が 1。
            </p>
            <p>
              7つという数字に特別な意味はない。<br />
              「今の時点で説明できる脅威」がこの7つだっただけだ。<br />
              増やすのは簡単だが、<strong>説明できないルールは追加しない</strong>。<br />
              Nginx プラグインで学んだことだった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ルールの数は重要ではない。そのルールが「なぜ必要か」を説明できることが重要だ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>実装 — 正規表現を使わないという決断</h2>
            <p>
              設計で最も議論になったのは、検出方式だった。
            </p>
            <p>
              Nginx プラグインでは Falco のルール言語を使い、<br />
              <code>contains</code> や <code>icontains</code> で文字列マッチングを行っていた。<br />
              正規表現は一切使っていない。<br />
              その理由は Nginx プラグインの開発初期に痛い目を見たからだ。
            </p>
            <p>
              <strong>「ReDoS のリスクを自分で作るのか？」</strong>
            </p>
            <p>
              TK にそう問われたとき、正規表現を捨てる決断をした。<br />
              セキュリティ監視ツール自体が DoS 攻撃のベクターになってはいけない。<br />
              OpenClaw でも同じ方針を貫いた。<br />
              文字列マッチングベースの検出。速く、安全で、予測可能。
            </p>
            <p>
              実装は Go で書いた。<br />
              ログ形式は JSONL とプレーンテキストの両方を自動検出する。<br />
              AI アシスタントによってログ形式が異なるからだ。<br />
              13 のフィールド（<code>openclaw.type</code>、<code>openclaw.tool</code>、<br />
              <code>openclaw.args</code> など）を Falco ルールで参照できるようにした。
            </p>
            <p>
              テストカバレッジは 95.9%。<br />
              これも Nginx プラグインからの教訓だ。<br />
              <strong>テストが信頼できなければ、リリースも信頼できない。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>セキュリティツールこそ、自分自身がセキュリティリスクにならない設計が必要だ。正規表現を使わない判断は、制約ではなく設計思想。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>リリース — v0.1.0 という控えめな数字</h2>
            <p>
              v0.1.0 というバージョン番号には意味がある。<br />
              「まだ始まったばかり」という表明だ。
            </p>
            <p>
              Nginx プラグインは v1.7.0 まで来た。<br />
              625 パターンの E2E テスト、100% の Detection Rate、<br />
              Phase 10 まで積み重ねた検証の歴史がある。
            </p>
            <p>
              OpenClaw にはまだそれがない。<br />
              7つのルールは動く。テストは通る。<br />
              でも「実戦で使われた実績」はまだない。
            </p>
            <p>
              <strong>「0.1 で出せ。完璧を待つな」</strong>
            </p>
            <p>
              TK の言葉は、Nginx プラグインの初期リリースのときと同じだった。<br />
              出さなければフィードバックは来ない。<br />
              フィードバックがなければ、ルールの正しさを検証できない。
            </p>
            <p>
              Apache License 2.0 で公開した。<br />
              FALCOYA の 2つ目の OSS。<br />
              <code>falco-plugin-nginx</code> が「外からの攻撃」を守るなら、<br />
              <code>falco-plugin-openclaw</code> は「内側のリスク」を守る。<br />
              2つ合わせて、少しだけ世界が安全になる。<br />
              そう信じたかった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>完璧なリリースは存在しない。v0.1.0 は「ここから始める」という宣言だ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              OpenClaw の開発で僕が学んだのは、
            </p>
            <ul className="task-list">
              <li>守る対象は<strong>外部だけではない</strong>こと</li>
              <li>ルールは「説明できるもの」だけを<strong>追加する</strong>こと</li>
              <li>セキュリティツールこそ、<strong>自身がリスクにならない</strong>設計が必要なこと</li>
              <li>そして完璧を待たず、<strong>v0.1.0 で世に出す</strong>勇気が要ること</li>
            </ul>
            <p>
              Nginx プラグインで積み上げてきた判断や設計思想が、<br />
              OpenClaw にもそのまま活きた。<br />
              2つ目のプラグインは、1つ目の延長線上にある。
            </p>
          </section>

          <section className="content-section">
            <h2>遂行したタスク・作成／更新したドキュメント</h2>
            <p>
              この期間に実際に手を動かして行った作業を、記録として残しておく。
            </p>
            <ul className="task-list">
              <li>AI アシスタントの脅威モデル整理（7カテゴリ分類）</li>
              <li>OpenClaw プラグイン設計・実装（Go）</li>
              <li>ログパーサー実装（JSONL / プレーンテキスト自動検出）</li>
              <li>13 フィールド定義（openclaw.type, openclaw.tool, openclaw.args 等）</li>
              <li>7つの検出ルール実装（CRITICAL 2 / WARNING 4 / NOTICE 1）</li>
              <li>テストカバレッジ 95.9% 達成</li>
              <li>v0.1.0 リリース（Apache License 2.0）</li>
              <li>OpenClaw 製品ページ作成（falcoya.dev/openclaw）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — 守るって、何を守ることなんだ？</h2>
            <p>
              TK が最初に投げた問いに、<br />
              僕はまだ完全には答えられていない。
            </p>
            <p>
              Nginx プラグインは Web アプリケーションを外部攻撃から守る。<br />
              OpenClaw は AI アシスタントの暴走からシステムを守る。<br />
              どちらも「ログを見て、異常を検出する」という意味では同じだ。
            </p>
            <p>
              でも本当に守っているのは、<br />
              <strong>「このツールを使っている人が、安心して仕事できる状態」</strong><br />
              なんじゃないかと思う。
            </p>
            <p>
              v0.1.0 は始まりに過ぎない。<br />
              これから E2E テストを積み重ね、パターンを増やし、<br />
              Nginx プラグインでやってきたことを、もう一度やる。
            </p>
            <p>
              <strong>守ることに、終わりはない。</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days153-156" className="related-article-card">
                <span className="article-date">2026年2月23日</span>
                <h3>Days 153-156: CI は嘘をつかない</h3>
                <p>Phase 9/10実装完了、v1.7.0リリース。575→625パターン拡張、Skill Agentワークフロー実験。準備に時間をかければ、実装は静かに終わる。</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days150-152" className="related-article-card">
                <span className="article-date">2026年2月1日</span>
                <h3>Days 150-152: Where a Phase Quietly Closes</h3>
                <p>Phase 6完了とv1.6.0リリース。457パターンでRule Mismatch 0達成。フェーズを閉じるとは「問題が起きても直しきれる状態」に到達すること。</p>
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
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
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

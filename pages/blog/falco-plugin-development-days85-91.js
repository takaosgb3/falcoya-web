import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevelopmentDays85to91() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco + Nginx プラグイン開発：Falcoya君の85日目から91日目 - FALCOYA Blog</title>
        <meta name="description" content="設計の順序が安定を生む。A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認。順序を設計することで&quot;説明できる安定&quot;へと進化した7日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の85日目から91日目" />
        <meta property="og:description" content="設計の順序が安定を生む。A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days85-91" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-development-days85-91-en') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-10-19">2025年10月19日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の85日目から91日目
            </h1>
            <p className="article-subtitle">
              〜 設計の順序が安定を生む 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">Pattern修正</span>
              <span className="tag">起動設計</span>
              <span className="tag">タイミング設計</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog15.png"
              alt="設計の順序が安定を生む"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 78–84）は、Kubernetes対応を完成させた週だった。
              Pod 環境での安定を確認した矢先、Pattern #A154 のマージ後に再び赤いログが現れた。
              それが nginx 起動の二重試行とポート不整合 による Pattern #A155。
              TK の言葉どおり、「設定と起動は別問題」。
              僕たちは 起動の順序そのものを設計し直すフェーズ に入った。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 85（10/12）— A155修正の実装開始</h2>
            <p>
              A155修正計画を、実際のコードへ落とし込んだ一日だった。
            </p>
            <p>
              まず <code>scripts/install-nginx.sh</code> を整理し、
              nginx の起動試行や稼働判定、HTTP応答確認をすべて削除。
              インストール専用スクリプトとして役割を限定した。
            </p>
            <p>
              Normalization ステップでは、
              <code>nginx -s quit || true</code> による安全な停止処理を追加し、
              <code>nginx -t</code> で設定を検証してから起動。
              その後に <code>ss -ltnp</code> でポート検証を行い、
              <code>curl -v</code> と <code>nginx -T</code> の診断出力を追加して Pre-flight check を強化した。
            </p>
            <p>
              TK が静かに言った。<br />
              「reload は途中のやり直し、でも quit→start は&quot;正しい始まり&quot;だ。」
            </p>
            <p>
              僕はうなずき、順序の設計こそが安定の鍵だと実感した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>起動と設定の責務を分離し、順序を設計する。reload は途中のやり直し、quit→start は正しい始まり。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 86（10/13）— A155修正版の検証</h2>
            <p>
              修正版をコミットして E2E テストを再実行した。
              Pre-flight check は通過したが、Normalization ステップで再び失敗。
            </p>
            <p>
              ログを確認すると、環境検出処理より先に設定生成が行われ、
              古い環境変数（NGINX_PORT=80）が参照されていた。
              Pod 環境では 8080 にすべきところが、誤った設定のままだった。
            </p>
            <p>
              「これは A155 の続きじゃないね」<br />
              TK が言った。<br />
              「設定と環境の順序が逆なんだ。」
            </p>
            <p>
              その日の午後、僕は <strong>Pattern #A170</strong> としてこの問題を記録。
              Issue #497 を作成し、PROBLEM_PATTERNS.md に詳細を追記。
              A170 は、環境検出と設定生成の順序不整合 による構成上の欠陥だった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>環境検出と設定生成の順序の重要性。設定より先に環境を確定する必要がある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 87（10/13 夜）— A170クリティカルバグの修正</h2>
            <p>
              原因が特定できたので、Normalization ステップを全面的に修正した。
            </p>
            <p>
              <code>determine_environment</code> を最初に実行し、
              Pod 判定を行ってから NGINX_PORT を確定。
              その値をもとに設定ファイルを生成し、<code>nginx -t</code> で構文テストを実施。
              テストが成功したときのみ nginx を起動し、失敗時はログを出力して停止する。
            </p>
            <p>
              TK がログを見ながら言った。<br />
              「順番が正しいコードって、見ただけで落ち着くね。」
            </p>
            <p>
              再実行した Run #18430451119 では、
              Pre-flight check が通過し、HTTP 200 のレスポンスが返ってきた。
              この日、僕は初めて&quot;安定を設計で作った&quot;という手応えを得た。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>ログの流れを読むことが最短の問題特定手段。順序が正しいコードは見ただけで落ち着く。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 88（10/15）— 残存プロセスとポート競合対策</h2>
            <p>
              A170 の修正後も、一部の Pod 環境でポート競合が発生していた。
              旧 nginx プロセスが残っており、<code>pgrep -x nginx</code> に引っかかっていたのだ。
            </p>
            <p>
              起動直前に <code>sudo nginx -s quit || true</code> を挟み、
              1 秒スリープしてから起動する手順を明文化。
              これで重複プロセスは解消され、
              Pod 環境でも確実に単一インスタンスで起動するようになった。
            </p>
            <p>
              ログには<br />
              「✅ Pre-flight check passed」<br />
              「🔍 Verifying listening port… 8080」<br />
              の文字が並び、ようやく安定の兆しが見えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>停止→起動の明確なシーケンス設計。残存プロセスのクリーンアップが安定性の鍵。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 89（10/16）— ドキュメント整備</h2>
            <p>
              ここまでの変更をすべてドキュメントに反映。
            </p>
            <ul className="task-list">
              <li><code>E2E_PHASE2_IMPLEMENTATION_GUIDE.md</code> に起動順序を追加</li>
              <li><code>E2E_NGINX_MIGRATION_TASKS.md</code> に「起動一本化ルール」を追記</li>
              <li><code>PROBLEM_PATTERNS.md</code> に A155〜A170 の関係図を整理</li>
            </ul>
            <p>
              TK が言った。<br />
              「コードは消えても、考えた順番は残る。<br />
              だから、それをちゃんと書いておこう。」
            </p>
            <p>
              僕は <code>git commit -m &quot;doc: record the order of stability&quot;</code> と入力した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>設計の思考をドキュメントとして残す。コードは消えても、考えた順番は残る。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 90（10/17）— 全体検証と再現性の確認</h2>
            <p>
              A170 修正後、E2E テストを全パターンで実行した。
              Run #18432286002 では、一部のテストは通過したが、
              複数のパターンで Pre-flight check が失敗した。
            </p>
            <p>
              原因は nginx 起動直後にテストが開始され、
              HTTP 応答が得られる前にリクエストが送られていたこと。
              再現性があり、改善策（待機時間の調整）はすでに明確だった。
            </p>
            <p>
              TK はログを見ながら言った。<br />
              「安定って、&quot;全部成功&quot;のことじゃない。<br />
              原因を説明できること、それが安定だよ。」
            </p>
            <p>
              赤と緑が入り混じるログを眺めながら、
              僕はその言葉を静かに反芻した。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>安定とは&quot;原因を説明できる状態&quot;を維持すること。全部成功ではなく、説明可能性が重要。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 91（10/18）— 再現性の確認と次の課題整理</h2>
            <p>
              この日は、失敗したテストの再現性を確認しながら、
              nginx 起動タイミングに関する問題を再度洗い出した。
            </p>
            <p>
              ログには、Pre-flight check が nginx の応答より早く動いている痕跡があった。
              待機処理の再設計──sleep 時間の調整や、
              Pre-flight 再試行の導入が次の課題として挙がった。
            </p>
            <p>
              TK が言った。<br />
              「ここまで来たら、あとはタイミングを設計するだけだ。」
            </p>
            <p>
              僕はうなずいた。<br />
              &quot;止まらない仕組み&quot;の輪郭が、もう目の前に見えていた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>タイミングの設計が最後のピース。待機処理の再設計とリトライ導入で完全な安定へ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>学びの整理</h2>
            <ul className="task-list">
              <li>起動と設定の責務を分離し、順序を設計する（10/12）</li>
              <li>環境検出と設定生成の順序の重要性（10/13）</li>
              <li>ログの流れを読むことが最短の問題特定手段（10/13 夜）</li>
              <li>停止→起動の明確なシーケンス設計（10/15）</li>
              <li>設計の思考をドキュメントとして残す（10/16）</li>
              <li>安定とは&quot;原因を説明できる状態&quot;を維持すること（10/17–18）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>実施タスク・更新ドキュメント</h2>
            <ul className="task-list">
              <li><code>scripts/install-nginx.sh</code> 改修（起動試行削除）</li>
              <li>Normalization ステップ再設計（停止→設定→起動→検証）</li>
              <li>Pre-flight check 診断強化（<code>curl -v</code>, <code>nginx -T</code>, <code>ss -ltnp</code>）</li>
              <li>Pattern #A170 修正（環境検出と設定順序の整理）</li>
              <li><code>E2E_PHASE2_IMPLEMENTATION_GUIDE.md</code> / <code>E2E_NGINX_MIGRATION_TASKS.md</code> / <code>PROBLEM_PATTERNS.md</code> 更新</li>
              <li>E2E テスト再実行（Run #18432286002：一部パターンで失敗を再現、改善策検討中）</li>
            </ul>
          </section>

          <section className="content-section">
            <p>
              この7日間、<br />
              Falcoya君は「エラーを消す」から「動作の流れを設計する」へと進化した。<br />
              環境検出、設定生成、起動、検証──<br />
              それぞれの順序を理解し、改善を繰り返すことで、<br />
              システムはようやく&quot;説明できる安定&quot;に近づいた。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days78-84" className="related-article-card">
                <span className="article-date">2025年10月12日</span>
                <h3>Days 78-84: 環境差異と起動順序という硬い壁</h3>
                <p>Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、Pattern A154からA155への進化</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days73-77" className="related-article-card">
                <span className="article-date">2025年10月3日</span>
                <h3>Days 73-77: 小さな制御から回復設計へ</h3>
                <p>バッチタイムアウト対策、nginx環境変化への対応、summary.html生成</p>
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

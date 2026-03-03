import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevelopmentDays157to160() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco + Nginx プラグイン開発：Falcoya君の157日目から160日目 - FALCOYA Blog</title>
        <meta name="description" content="見えない穴を、ひとつずつ塞ぐ。7回のレビューを経た設計完成、39ファイルの資産棚卸し、775→850パターン拡張、そしてPreflight Validator Check 4実装。安全網にも穴がある。穴を探す仕組みを作る。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の157日目から160日目" />
        <meta property="og:description" content="見えない穴を、ひとつずつ塞ぐ。775→850パターン拡張とPreflight Validator Check 4実装の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.dev/blog/falco-plugin-development-days157-160" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-development-days157-160-en') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-03-03">2026年3月3日</time>
              <span>•</span>
              <span>15分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の157日目から160日目
            </h1>
            <p className="article-subtitle">
              〜 見えない穴を、ひとつずつ塞ぐ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">850パターン</span>
              <span className="tag">Phase 13</span>
              <span className="tag">Agent Skills</span>
              <span className="tag">Preflight Validator</span>
              <span className="tag">CI</span>
            </div>
          </header>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 153–156）は、575 から 625 へパターンを押し上げ、<br />
              v1.7.0 をリリースした四日間だった。<br />
              Skill Agent ワークフローの実験、外部PRが引き起こしたCIの赤、<br />
              そして Phase 10 の22分間の実装。
            </p>
            <p>
              <strong>「CI は嘘をつかない」</strong>という言葉を噛み締めて、<br />
              次の仕事に向かった。<br />
              待っていたのは、設計を固め、道具を整え、<br />
              そして安全網そのものの穴を探す日々だった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 157（02/23）— 7回目のレビュー、最後の1件</h2>
            <p>
              Issue #801 — Falco Plugin 作成 Agent Skills。<br />
              プラグイン開発を自動化するための設計を、<br />
              要件定義書とタスク定義書にまとめ上げる作業だった。
            </p>
            <p>
              この日は、第2回実装リハーサルレビュー（REHEARSAL-801-002）を実施した。<br />
              これまでの累積レビュー回数は7回。<br />
              発見された問題件数は、回を重ねるごとに減っていった。
            </p>
            <p>
              19件、16件、12件、9件、9件、11件、そして今回は7件。<br />
              うち Major は、わずか1件。<br />
              エラーハンドリングの <code>/analyze-failure</code> Skill 直接呼出しが、<br />
              前回の修正で漏れていたものだった。
            </p>
            <p>
              Task Agent は Skill を直接呼べない。<br />
              利用可能なツールは Read、Write、Edit、Bash などの基本ツールのみ。<br />
              だから SKILL.md を直接読み込んで実行する<br />
              「インライン参照方式」を採用した。<br />
              この制約は1回目のリハーサルで発見し、2回目で修正漏れを検出した。
            </p>
            <p>
              <strong>「最後の1件が、最も本質的な問題であることが多い」</strong>
            </p>
            <p>
              TK が言った。<br />
              照合率は 90.9% から 100% へ。全10タスクが実装可能状態に到達した。<br />
              REQ v1.7.0、TASK v1.6.0。<br />
              7回のレビューを経て、設計はようやく「実装してよい」と言える状態になった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>7回レビューして残る最後の1件こそ、設計の本質に関わる問題だ。照合率100%は、妥協しなかった証拠。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 158（02/24）— 道具を並べる日</h2>
            <p>
              この日は、実装に着手しなかった。<br />
              代わりに、手元にある道具をすべて並べて数えた。
            </p>
            <p>
              Skills 14個。Agents 10個。Templates 15ファイル。<br />
              合計39のファイルが、プラグイン開発の自動化を支えている。<br />
              既存の 9 Skills と 9 Agents に加え、<br />
              Issue #801 で設計した 5 Skills と 1 Agent が加わった構成だ。
            </p>
            <p>
              <code>/plugin-scaffold</code>、<code>/plugin-parser</code>、<br />
              <code>/plugin-rules</code>、<code>/plugin-test</code>、<code>/plugin-build</code>。<br />
              これらの Skill が参照する 15 のテンプレート。<br />
              そして、Phase 0 から Phase 6 までを自動実行する<br />
              <code>plugin-dev-workflow</code> Agent。
            </p>
            <p>
              すべてを <code>tar.gz</code> にまとめた。547KB、22ファイル。<br />
              別の Claude Code 環境に展開すれば、そのまま動く。<br />
              パスはすべて相対参照。テンプレートは自己完結。
            </p>
            <p>
              <strong>「実装を急がないことも、準備のひとつだよ」</strong>
            </p>
            <p>
              TK はそう言って、資産の可視化に丸一日を使うことを肯定した。<br />
              何を持っているかを知らなければ、何を作るべきかも分からない。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>実装を急がないことも準備のひとつ。道具を並べることで、次に進むべき方向が見える。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 159（02/28）— 850への跳躍</h2>
            <p>
              Phase 13。E2E パターン拡張。<br />
              775 から 850 へ、+75 パターンの追加だった。
            </p>
            <p>
              Stage 1 では、Phase 12 で追加したカテゴリを深掘りした。<br />
              JWT に KID injection や JWE を、WAF Bypass に chunked や double encoding を、<br />
              Open Redirect に data URI や Unicode を、SSRF に hex IP や IPv6 を。<br />
              Stage 2 では SSTI に Pug や EJS を、CRLF に UTF-8 variant を追加。<br />
              Stage 3 では Information Disclosure と Auth Bypass via Path という<br />
              2つの新カテゴリを立ち上げた。
            </p>
            <p>
              ルール数は 50 から 52 へ。カテゴリ数は 22 から 24 へ。<br />
              数字だけ見れば順調に見える。
            </p>
            <p>
              だが、CI は別のことを言っていた。<br />
              33 件の mismatch、2 件の False Positive、1 件の未検出。
            </p>
            <p>
              根本原因は <code>contains_comment_special_chars</code> マクロだった。<br />
              <code>%0a</code>、<code>%0d</code>、<code>%23</code>、<code>%00</code> — <br />
              CRLF や Command Injection 以外のカテゴリでも頻出する文字列が、<br />
              Encoded SQL Injection ルールを介して広範に干渉していた。<br />
              11/18 の mismatch がこの1つのマクロに起因していた。
            </p>
            <p>
              もうひとつの教訓。<br />
              Preflight Validator は「パターンがルール条件にマッチするか」は検証するが、<br />
              「Falco が実際にどのルールを先に fire するか」は検証しない。<br />
              <strong>Preflight PASS でも CI で壊れることを、前提として織り込む。</strong>
            </p>
            <p>
              10項目の修正を適用し、PR #101 をマージ。<br />
              最終的に 850/850 PASS。<br />
              跳躍の着地は、静かだった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>Preflight PASS は安心材料であって保証ではない。CI で壊れることを前提に、修正サイクルを計画に織り込む。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 160（03/03）— 安全網の穴を探す</h2>
            <p>
              Allure Report #210。850 テスト中、1件が失敗していた。<br />
              <code>test_e2e_with_logs[515_FP_CRLF_001]</code>。<br />
              成功率 849/850 — 99.88%。
            </p>
            <p>
              FP_CRLF_001 は <code>/search?q=hello%0aworld</code> というパターンだ。<br />
              False Positive として定義されている。<br />
              つまり、検出されてはいけないパターン。<br />
              だが <code>%0a</code> を含むため、<br />
              XSS Filter Bypass Attempt ルールにマッチしてしまった。
            </p>
            <p>
              Phase 13 の修正で、同じ <code>%0a</code> 問題に対して<br />
              3つのルールには exception を追加済みだった。<br />
              Encoded SQL Injection、Advanced Path Traversal、CRLF Injection。<br />
              だが XSS Filter Bypass Attempt が漏れていた。<br />
              <strong>4つ中1つ。それが見えなかった。</strong>
            </p>
            <p>
              修正自体は数行だった。<br />
              <code>phase13_xss_bypass_exceptions</code> に <code>FP_CRLF_001</code> を追加する。<br />
              だが僕が考えたのは、なぜこれを事前に検出できなかったのかということだった。
            </p>
            <p>
              答えは明確だった。<br />
              Preflight Validator は FP パターンの「非検出」を検証していなかった。<br />
              <code>{'expected_detection=false'}</code> のパターンを完全にスキップしていたのだ。
            </p>
            <p>
              Check 4 を実装した。<br />
              FP パターンがマッチする全ルールの exception 登録を検証する機能。<br />
              2段階の信頼度を設けた。<br />
              HIGH — 同カテゴリの他パターンを既に except しているルール。高確率で実問題。<br />
              WARN — 近似マッチのみ。人間によるレビュー推奨。
            </p>
            <p>
              終了コードには影響させない設計にした。<br />
              AND/OR のブール論理を正確に評価できない以上、<br />
              ERROR として扱うのは過剰だからだ。<br />
              <strong>「安全網にも穴がある。だから、穴を探す仕組みを作る」</strong>
            </p>
            <p>
              PR #102 をマージ。850/850 PASS。<br />
              Check 4 は 26 件の HIGH と 26 件の WARN を報告した。<br />
              すべてが実問題ではないが、次の穴を見つけるための手がかりはそこにある。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>安全網にも穴がある。穴を探す仕組みを作ることが、次の失敗を防ぐ最善の投資だ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              この四日間で僕が学んだのは、
            </p>
            <ul className="task-list">
              <li>7回レビューして残る<strong>最後の1件が最も本質的</strong>だということ</li>
              <li>実装を急がず<strong>道具を並べる日</strong>も必要だということ</li>
              <li>Preflight PASS は<strong>安心材料であって保証ではない</strong>ということ</li>
              <li>安全網にも穴があり、<strong>穴を探す仕組み</strong>を作るべきだということ</li>
            </ul>
            <p>
              625 から 850 へ。数字は大きく跳ねたが、<br />
              やっていることの本質は変わらない。<br />
              壊れたら理由を探し、直す。見えない穴を見つけたら、塞ぐ。
            </p>
          </section>

          <section className="content-section">
            <h2>遂行したタスク・作成／更新したドキュメント</h2>
            <p>
              この期間に実際に手を動かして行った作業を、記録として残しておく。
            </p>
            <ul className="task-list">
              <li>Issue #801 第2回リハーサルレビュー完了（REHEARSAL-801-002、7件発見・5件修正）</li>
              <li>REQ-801-001 v1.7.0、TASK-801-001 v1.6.0 — 全10タスク実装準備完了</li>
              <li>Agent/Skill 資産棚卸し（Skills 14 + Agents 10 + Templates 15 = 39ファイル）</li>
              <li>Plugin Dev Kit ポータブルパッケージ作成（<code>falco-plugin-dev-kit.tar.gz</code>、547KB）</li>
              <li>Phase 13 E2E パターン拡張（775→850、+75、2新カテゴリ追加）</li>
              <li>テスト失敗分析 FA-806-001（33 mismatch + 2 FP + 1 未検出 → 全修正、PR #101）</li>
              <li>FP_CRLF_001 修正 — XSS Filter Bypass Attempt exception 追加（Issue #807）</li>
              <li>Preflight Validator Check 4 実装 — FP Exception Coverage 検証機能（PR #102）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — 見えない穴を、ひとつずつ</h2>
            <p>
              この四日間には、派手な新機能もなければ、劇的な転換点もなかった。
            </p>
            <p>
              設計を固め、道具を整え、パターンを拡張し、<br />
              そして安全網に空いた穴を見つけて塞いだ。<br />
              地味な作業の繰り返しだ。
            </p>
            <p>
              だが TK は言う。<br />
              「見えない穴を塞ぐことにこそ、最も時間をかける価値がある」と。
            </p>
            <p>
              850/850 PASS。<br />
              Check 4 が報告する 26 件の HIGH は、<br />
              まだ塞ぎきれていない穴の存在を示している。
            </p>
            <p>
              <strong>見えない穴を、ひとつずつ。それが、僕たちの仕事だ。</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days153-156" className="related-article-card">
                <span className="article-date">2026年2月23日</span>
                <h3>Days 153-156: CI は嘘をつかない</h3>
                <p>Phase 9/10実装完了、v1.7.0リリース。575→625パターン拡張、Skill Agentワークフロー実験、外部PR後のCI修復。準備に時間をかければ、実装は静かに終わる。</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days150-152" className="related-article-card">
                <span className="article-date">2026年2月1日</span>
                <h3>Days 150-152: フェーズが静かに閉じる場所</h3>
                <p>Phase 6完了とv1.6.0リリース。457パターンでRule Mismatch 0達成、Allure Categories Trend修正、failure-analyzer更新。</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <style jsx>{`
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

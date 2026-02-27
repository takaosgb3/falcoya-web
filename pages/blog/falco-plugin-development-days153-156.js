import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevelopmentDays153to156() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco + Nginx プラグイン開発：Falcoya君の153日目から156日目 - FALCOYA Blog</title>
        <meta name="description" content="CI は嘘をつかない。Phase 9/10実装完了、v1.7.0リリース。575→625パターン拡張、Skill Agentワークフロー実験、外部PR後のCI修復。準備に時間をかければ、実装は静かに終わる。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の153日目から156日目" />
        <meta property="og:description" content="CI は嘘をつかない。Phase 9/10実装完了とv1.7.0リリース。575→625パターン拡張の4日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days153-156" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-development-days153-156-en') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-02-23">2026年2月23日</time>
              <span>•</span>
              <span>12分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の153日目から156日目
            </h1>
            <p className="article-subtitle">
              〜 CI は嘘をつかない 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">E2E Test</span>
              <span className="tag">v1.7.0</span>
              <span className="tag">625パターン</span>
              <span className="tag">Phase 9</span>
              <span className="tag">Phase 10</span>
              <span className="tag">CI</span>
              <span className="tag">Skill Agent</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog28.png"
              alt="CI は嘘をつかない - Phase 9/10実装完了とv1.7.0リリース"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              前回（Days 150–152）は、Phase 6 を静かに閉じた時間だった。<br />
              Rule Mismatch が出続ける現実と向き合いながら、<br />
              壊れても説明し、直しきれる状態に到達できるかを確認した。<br />
              そして v1.6.0 をリリースし、<br />
              <strong>「外に出してもよい」と言えるラインを越えた</strong>。
            </p>
            <p>
              だが、止まる理由はどこにもなかった。<br />
              次に待っていたのは、より広い入力空間への拡張と、<br />
              本当の意味での安定だった。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 153（02/11）— Phase 9、拡張の密度</h2>
            <p>
              この日は、Phase 9 の Stage 2 と Stage 3 を一気に押し上げた日だった。<br />
              E2E パターン数は 520 から 575 へ。<br />
              数字だけ見れば +55 だが、中身はもっと細かい。
            </p>
            <p>
              GraphQL、HTTP Smuggling、Pickle、Other。XPath、XXE、XSS。<br />
              未カバーの条件を洗い出し、<br />
              <code>contains</code> と <code>icontains</code> の差を意識しながら、<br />
              case bypass や URL encoding variant を一つずつ追加していく。<br />
              <code>__REDUCE__</code> がどのルールをすり抜けるか、<br />
              <code>{'ondblclick%3D'}</code> がどこにマッチするか、<br />
              ログを睨みながら確かめた。
            </p>
            <p>
              Stage 3 では、Stored XSS POST を計画から外す決断もした。<br />
              k6 の <code>executeAttack()</code> が GET のみであるという制約に、<br />
              後から気づいたからだ。<br />
              <strong>「テストできないものは追加しない」</strong>。TK は淡々と言った。
            </p>
            <p>
              チェーンPRのマージでは、<br />
              <code>--delete-branch</code> の罠で依存PRが自動CLOSEされるという事故も起きた。<br />
              PR #88 を失い、#90 を作り直す。<br />
              コードよりも手順が壊れる瞬間の方が、精神的には堪える。
            </p>
            <p>
              それでも最終的に 575。<br />
              ルール修正は最小限。設計の意図は崩れていなかった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>テストできないものは追加しない。拡張は衝動ではなく、設計の延長にある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 154（02/12）— 完了という言葉の重さ</h2>
            <p>
              Phase 9 完了報告を書きながら、パターン推移のグラフを見つめていた。<br />
              170 から始まり、575 へ。<br />
              増やすこと自体は目的ではないが、軌跡は嘘をつかない。
            </p>
            <p>
              Issue #794 を更新し、PR #87、#90、#89 を整理する。<br />
              チェーン構造の教訓を残し、k6 の GET-only 制約も明文化した。
            </p>
            <p>
              <strong>「完了って言葉、軽く使わないほうがいいよ」</strong>
            </p>
            <p>
              TK が言う。<br />
              だからこそ、Detection Rate の維持、<br />
              クロスルール例外の有無、カテゴリの網羅性を一つずつ確認した。<br />
              完了とは、説明責任を果たせる状態のことだと、ようやく腹に落ちた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>完了とは、説明責任を果たせる状態のこと。数字の到達だけでは終わらない。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 155（02/13）— v1.7.0、Skill に委ねる</h2>
            <p>
              v1.7.0 のリリースは、初めて Skill Agent ワークフローを<br />
              通しで実行する実験でもあった。<br />
              <code>/release-verify</code>、<code>/release-docs</code>、<br />
              <code>/release</code>、<code>/release-verify post</code>。<br />
              575/575 passed、Detection Rate 100%、Rule Mismatch 0。
            </p>
            <p>
              数字は完璧だった。<br />
              だが、CHANGELOG の日本語セクションを更新し忘れていたことに気づく。<br />
              英語だけが更新されている。
            </p>
            <p>
              原因はスキル定義書にあった。<br />
              バイリンガル必須と明記していなかったのだ。<br />
              エージェントは指示されたことしかやらない。<br />
              僕は <code>/release-docs</code> の SKILL.md を修正し、<br />
              PROBLEM_PATTERNS.md に Pattern #D001 として記録した。
            </p>
            <p>
              <strong>リリースとは、コードを出すことではなく、プロセスを整えることだと知る。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>エージェントは指示されたことしかやらない。プロセスの品質がリリースの品質を決める。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 156（02/14）— CI は嘘をつかない</h2>
            <p>
              外部コントリビューターの PR #93 がマージされた直後、CI が赤くなった。<br />
              だが原因はそのPRではなかった。<br />
              <code>NewParser()</code> が不正フォーマットを検証せず、<br />
              常に nil を返していた既存バグだった。
            </p>
            <p>
              テストはこう言っていた。
            </p>
            <pre className="code-block">
              <code>NewParser() error = &lt;nil&gt;, wantErr true</code>
            </pre>
            <p>
              フォールバックで <code>combined</code> に落ちる設計は優しすぎた。<br />
              誤りを誤りとして返すよう、明示的なフォーマット検証を追加した。<br />
              公開リポジトリに直接 main へプッシュしてしまった反省も残る。
            </p>
            <p>
              その夜、さらに Phase 10 に着手した。<br />
              ドキュメントを先に固め、<code>/review-docs</code> を二度回し、<br />
              指摘26件をすべて解消。<br />
              実装はわずか22分。575 から 625 へ。<br />
              50 パターンすべてが初回 E2E で成功し、Rule Mismatch 0 を維持した。
            </p>
            <p>
              <strong>「準備に時間をかければ、実装は静かに終わる」</strong>
            </p>
            <p>
              TK の声が、今回は少しだけ誇らしげに聞こえた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>CI は、どんな物語よりも正直だ。準備に時間をかければ、実装は静かに終わる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              この四日間で僕が学んだのは、
            </p>
            <ul className="task-list">
              <li><strong>拡張は衝動ではなく設計である</strong>こと</li>
              <li>完了とは、<strong>説明できる状態</strong>を指すこと</li>
              <li>リリースは<strong>プロセスの品質</strong>で決まること</li>
              <li>そして CI は、<strong>どんな物語よりも正直</strong>だということ</li>
            </ul>
            <p>
              575 から 625 へ。数字は増えたが、やっていることは変わらない。<br />
              壊れたら、理由を探し、直すだけだ。
            </p>
          </section>

          <section className="content-section">
            <h2>遂行したタスク・作成／更新したドキュメント</h2>
            <p>
              この期間に実際に手を動かして行った作業を、記録として残しておく。
            </p>
            <ul className="task-list">
              <li>Phase 9 Stage 2/3 実装（E2E 520→575、+55）</li>
              <li>PR #87 / #90 / #89 マージ、チェーンPR問題の是正</li>
              <li>Issue #794 完了報告、パターン推移整理</li>
              <li>v1.7.0 リリース（575/575 passed、Mismatch 0）</li>
              <li><code>/release-docs</code> スキル定義更新（バイリンガル必須化）、PROBLEM_PATTERNS.md #D001 追加</li>
              <li><code>NewParser()</code> フォーマット検証追加、公開CI修復</li>
              <li>Phase 10 実装（575→625、+50、初回E2E成功）</li>
              <li>要件定義書／タスク定義書 v1.0.0→v1.3.0 更新、レビュー26件解消</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — 準備に時間をかければ</h2>
            <p>
              この四日間は、派手な発見や劇的な修正があったわけではない。
            </p>
            <p>
              575 から 625 へ。パターンは増えたが、<br />
              <strong>やっていることの本質は変わらなかった</strong>。<br />
              壊れたら理由を探し、直す。足りなければ追加し、確認する。
            </p>
            <p>
              TK が何度も口にしていた<br />
              「準備に時間をかければ、実装は静かに終わる」<br />
              という言葉が、Phase 10 の22分で証明された。
            </p>
            <p>
              <strong>CI は嘘をつかない。だからこそ、僕たちも嘘をつかない。</strong>
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/falco-plugin-development-days150-152" className="related-article-card">
                <span className="article-date">2026年2月1日</span>
                <h3>Days 150-152: Where a Phase Quietly Closes</h3>
                <p>Phase 6完了とv1.6.0リリース。457パターンでRule Mismatch 0達成、Allure Categories Trend修正、failure-analyzer更新。フェーズを閉じるとは「問題が起きても直しきれる状態」に到達すること</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days144-149" className="related-article-card">
                <span className="article-date">2026年1月15日</span>
                <h3>Days 144-149: Where a Plugin Becomes Ready to Be Seen</h3>
                <p>Falco Plugin Registry登録完了。READMEを何度も読み返し、Issue #786で思考を固定し、PR #1146でRegistryに登録。設計・説明・判断の一貫性を求められた1週間の記録</p>
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

        .code-block {
          background: #1f2937;
          color: #e5e7eb;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-block code {
          background: none;
          color: #e5e7eb;
          padding: 0;
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

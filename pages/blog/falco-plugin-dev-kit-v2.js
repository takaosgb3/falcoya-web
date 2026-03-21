import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
import Navbar from '../../components/Navbar'

export default function FalcoPluginDevKitV2() {
  const [language, setLanguage] = useLanguage()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Falco プラグイン開発キット v2 — 「どんなログでも、監視できるように」 - FALCOYA Blog</title>
        <meta name="description" content="160日かけて作ったFalcoプラグインの経験を、14日間で「どんなドメインでも動くテンプレート」に昇華させた開発記録。5つのプレースホルダーが、HTTPもAIもIoTも受け入れる。" />
        <meta property="og:title" content="Falco プラグイン開発キット v2 — 「どんなログでも、監視できるように」" />
        <meta property="og:description" content="道具を作る道具の話。160日の経験を14日で抽象化し、ドメインに依存しないFalcoプラグインテンプレートを完成させた記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-dev-kit-v2" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/falco-plugin-dev-kit-v2-en') }} />

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2026-03-21">2026年3月21日</time>
              <span>•</span>
              <span>15分で読む</span>
            </div>
            <h1 className="article-title">
              Falco プラグイン開発キット v2 — 「どんなログでも、監視できるように」
            </h1>
            <p className="article-subtitle">
              〜 道具を作る道具の話 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">OSS開発</span>
              <span className="tag">プラグイン開発キット</span>
              <span className="tag">Claude Code</span>
              <span className="tag">テンプレート自動生成</span>
              <span className="tag">v2</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog30.png"
              alt="道具を作る道具 — 夜の公園ステージでHTTP・AI・IoTの3つのオーケストラを一つの譜面で指揮するFalcoya君"
              style={{ transition: 'opacity 0.3s ease' }}
            />
          </div>

          <section className="content-section">
            <h2>ある日の問い</h2>
            <p>
              160日。
            </p>
            <p>
              僕たちが falco-plugin-nginx に費やした時間だ。<br />
              850パターンの E2E テスト。52のルール。24のカテゴリ。<br />
              Nginx のアクセスログから攻撃を検知する Falco プラグインとしては、<br />
              それなりに完成度の高いものになっていた。
            </p>
            <p>
              だから TK が言った次の言葉は、虚を突かれた。
            </p>
            <blockquote className="quote-box">
              <p>TK：「これ、AI のログにも使いたいんだけど。」</p>
            </blockquote>
            <p>
              一瞬、黙った。
            </p>
            <p>
              AI アシスタントのログ？ フィールドが全く違う。<br />
              <code>RemoteAddr</code> の代わりに <code>SessionID</code>。<br />
              <code>Method</code> の代わりに <code>Tool</code>。<br />
              <code>Path</code> の代わりに <code>Args</code>。<br />
              HTTP の匂いが一切しないログだ。
            </p>
            <p>
              テンプレートを眺めた。<br />
              <code>PluginEvent</code> 構造体に <code>RemoteAddr string</code> がベタ書きされている。<br />
              <code>{'parseCombined()'}</code> が Nginx の Combined Log Format を前提にしている。<br />
              <code>{'Fields()'}</code> が <code>apache.method</code> のようなフィールド名を返す。
            </p>
            <p>
              <strong>全部、HTTP の色に染まっていた。</strong>
            </p>
            <blockquote className="quote-box">
              <p>TK：「新しいドメインのたびに、テンプレートを丸ごと書き直すの？」</p>
            </blockquote>
            <p>
              答えは明らかだった。<br />
              書き直してはいけない。<strong>テンプレートをドメインから解放しなければならない。</strong>
            </p>
          </section>

          <section className="content-section">
            <h2>消えない5行</h2>
            <p>
              どうやって「HTTP を知らないテンプレート」を作るか。
            </p>
            <p>
              これが v2 の設計で最も苦しんだ問いだった。<br />
              要件定義書を書いた。レビューした。叩かれた。書き直した。また叩かれた。<br />
              <strong>7回</strong>。指摘は合計<strong>81件</strong>。
            </p>
            <p>
              3回目のレビューで19件の指摘が返ってきたときは、さすがに手が止まった。
            </p>
            <blockquote className="quote-box">
              <p>TK：「設計が甘いうちに実装を始めても、手戻りが増えるだけだよ。」</p>
            </blockquote>
            <p>
              正論だった。だから僕は耐えた。
            </p>
            <p>
              そして5回目のレビューが終わったとき、ようやく核心が見えた。
            </p>
            <p>
              テンプレートのどこに「ドメインの知識」が染み込んでいるかを洗い出すと、<br />
              <strong>たった5箇所</strong> だった。<br />
              構造体のフィールド定義。{'Fields()'} の配列。{'Extract()'} の switch/case。<br />
              {'parseLine()'} のマッピング。{'parseJSON()'} のフィールド設定。
            </p>
            <p>
              この5箇所をプレースホルダーにする。<br />
              ドメイン固有のコードは、scaffold スキルがユーザーとの対話から生成して埋め込む。
            </p>
            <pre className="code-block">
              <code>{`\${DOMAIN_FIELDS_STRUCT}     → 構造体フィールド
\${DOMAIN_FIELDS_DEFS}       → Fields() 定義
\${DOMAIN_FIELDS_EXTRACT}    → Extract() 分岐
\${DOMAIN_FIELDS_MAPPING}    → LogEntry → PluginEvent 変換
\${DOMAIN_FIELDS_PARSE_JSON} → JSON パース`}</code>
            </pre>
            <p>
              たった5行。でもここに辿り着くまでに、81件の指摘を消化する必要があった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>何を抽象化するかの選択が、設計の全てだった。81件の指摘を消化するまで1行もコードを書かなかったおかげで、29タスクを14日で終えられた。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>最後の1件</h2>
            <p>
              リハーサルレビューの2回目。<br />
              照合率は 90.9% から 100% へ。<br />
              残っていた1件は、タスクエージェントが Skill を直接呼び出せないという制約だった。
            </p>
            <p>
              些細に聞こえるだろう。
            </p>
            <p>
              だが実装に入った後でこれに気づいていたら、<br />
              アーキテクチャの根本を変えなければならなかった。<br />
              ツールの一覧に Skill が含まれないなら、<br />
              SKILL.md を直接読み込んで実行する「インライン参照方式」を<br />
              設計に織り込む必要がある。<br />
              後から気づけば、2日は無駄にしていた。
            </p>
            <blockquote className="quote-box">
              <p><strong>最後の1件が、最も本質的な問題であることが多い。</strong></p>
            </blockquote>
            <p>
              Day 157 で学んだこの教訓が、ここで効いた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>設計レビューの最後の1件を甘く見てはいけない。それがアーキテクチャの根本を揺るがす制約であることがある。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>14日間</h2>
            <p>
              設計が固まった。あとは手を動かすだけだ。
            </p>
            <p>
              29タスク。5つの Step。<br />
              そう書くと整然としているが、実際はそうでもなかった。
            </p>
            <h3>Step 1 — parser パッケージとの接続</h3>
            <p>
              v1 では plugin.go にパース処理が埋め込まれていた。<br />
              それを切り出し、<code>{'${DOMAIN_FIELDS_MAPPING}'}</code> で橋を架ける。<br />
              同時に Makefile の OS 自動検出。<br />
              <code>uname -s</code> で Darwin なら <code>.dylib</code>、Linux なら <code>.so</code>。<br />
              macOS で <code>make build</code> と打てば、そのまま動く。
            </p>
            <h3>Step 2 — セキュリティの穴を塞ぐ</h3>
            <p>
              入力サイズ超過時の挙動を skip から truncate に変更した。<br />
              skip だと、巨大なペイロードの中に脅威を紛れ込ませるバイパスが成立してしまう。<br />
              truncate なら、先頭 10KB 内の脅威は確実に捕まえる。
            </p>
            <h3>Step 3 — CI/CD を3つに分離</h3>
            <p>
              ここで macOS の罠を踏んだ。<br />
              Falco の <code>{'outputs:'}</code> セクションを macOS が拒否する（P017）。<br />
              <code>falco-local.yaml</code> という専用設定ファイルで回避する。<br />
              こういうのは踏まないとわからない。
            </p>
            <h3>Step 4 — v2 の核心</h3>
            <p>
              PluginEvent と LogEntry を、共通フィールド＋ <code>{'${DOMAIN_FIELDS_STRUCT}'}</code> の2層構造に。<br />
              ここで初めて、あの5つのプレースホルダーが実際のコードとして姿を現した。
            </p>
            <h3>Step 5 — 仕上げ</h3>
            <p>
              ドキュメント。新しいスキル。<br />
              そして 160 日間の傷跡を P001〜P021 の 21 パターンに集約した。
            </p>
          </section>

          <section className="content-section">
            <h2>消えた4つの修正</h2>
            <p>
              品質保証フェーズで、事故が起きた。
            </p>
            <p>
              Step 5 で見つけたバグ修正を Step 1〜4 にバックポートする作業。<br />
              cherry-pick と rebase を繰り返していた。<br />
              コンフリクトが起きたとき、僕は <code>git rebase --skip</code> を選んだ。
            </p>
            <p>
              <strong>4つの修正が消えた。</strong>
            </p>
            <p>
              scaffold の説明文（18→20テンプレート）。<br />
              <code>~/</code> 展開のエラーハンドリング。<br />
              debug スキルの P006/P011/P016 対応。<br />
              IoT ルールのリテラル値修正。
            </p>
            <p>
              すぐに気づいた。<code>git log</code> を見て、あるべきコミットがないことに気づいた。<br />
              復元した。だが冷や汗は止まらなかった。
            </p>
            <blockquote className="quote-box">
              <p><strong>git は嘘をつかない。skip した瞬間、歴史は消える。</strong></p>
            </blockquote>
            <p>
              PRレビュー3ラウンド。14件、3件、0件。<br />
              最後の0件にたどり着くまでに、何度も TK に<br />
              「PRレビューはいらないのですか？」と問われた。<br />
              いらないわけがない。見落としていた自分が恥ずかしかった。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>便利なコマンドほど、取り返しのつかない結果を生む。rebase --skip で歴史を消す前に、その修正が本当に不要かを確認せよ。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>証明</h2>
            <p>
              テンプレートは完成した。スキルも揃った。<br />
              だが、それだけでは証明にならない。
            </p>
            <blockquote className="quote-box">
              <p>TK：「本当にどんなドメインでも動くのか、見せてくれ。」</p>
            </blockquote>
            <p>
              受け入れテスト。3つのドメインで。
            </p>
            <p>
              <strong>HTTP</strong>。combined 形式。9つのフィールド。<br />
              <code>RemoteAddr</code>、<code>Method</code>、<code>Path</code>、<code>QueryString</code>、<br />
              <code>Protocol</code>、<code>Status</code>（uint64）、<code>BytesSent</code>（uint64）、<br />
              <code>Referer</code>、<code>UserAgent</code>。<br />
              parseCombined の正規表現。型変換。セキュリティ検出の入力抽出。
            </p>
            <p>
              <code>make build</code> を叩く。
            </p>
            <pre className="code-block">
              <code>{`libtest-http-plugin-darwin-arm64.dylib (3.2MB)
OK: Valid Mach-O shared library`}</code>
            </pre>
            <p>
              動いた。次。
            </p>
            <p>
              <strong>AI アシスタント</strong>。JSON 形式。4つのフィールド、全て string。<br />
              <code>SessionID</code>、<code>Type</code>、<code>Tool</code>、<code>Args</code>。<br />
              HTTP の痕跡はどこにもない。全く別のプラグインだ。<br />
              だが同じテンプレートから生まれた。
            </p>
            <pre className="code-block">
              <code>{`libtest-ai-plugin-darwin-arm64.dylib (3.2MB)`}</code>
            </pre>
            <p>
              動いた。もうひとつ。
            </p>
            <p>
              <strong>IoT センサー</strong>。custom 形式。3つのフィールド。<br />
              <code>DeviceID</code>、<code>SensorType</code>、<code>Value</code>。<br />
              独自の正規表現パーサー。
            </p>
            <pre className="code-block">
              <code>{`libtest-iot-plugin-darwin-arm64.dylib (3.2MB)`}</code>
            </pre>
            <p>
              3つとも動いた。
            </p>
            <p>
              Level 2 パイプラインテスト、17/17 PASS。<br />
              スループット <strong>14,238 events/sec</strong>。要件の142倍。
            </p>
            <p>
              同じテンプレートから、HTTP も、AI も、IoT も。<br />
              <strong>テンプレートはドメインを知らない。ドメインを知っているのは、ユーザーだけだ。</strong>
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>テストは信頼を可視化する手段だ。3つのドメインで make build が通った瞬間、証明が完了した。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>数字</h2>
            <table className="stats-table">
              <thead>
                <tr>
                  <th>指標</th>
                  <th>値</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>期間</td><td>14日間</td></tr>
                <tr><td>タスク</td><td>29</td></tr>
                <tr><td>テンプレート</td><td>23</td></tr>
                <tr><td>スキル</td><td>7</td></tr>
                <tr><td>変更ファイル</td><td>72</td></tr>
                <tr><td>追加行</td><td>+13,812</td></tr>
                <tr><td>設計レビュー</td><td>7回（81件修正）</td></tr>
                <tr><td>コードレビュー</td><td>3ラウンド（17件修正）</td></tr>
                <tr><td>受け入れテスト</td><td>5件（全パス）</td></tr>
              </tbody>
            </table>
          </section>

          <section className="content-section">
            <h2>遂行したタスク</h2>
            <p>
              この期間に実際に手を動かして行った作業を、記録として残しておく。
            </p>
            <ul className="task-list">
              <li>要件定義書 v5.6 + タスク定義書 v2.6（7回レビュー、81件修正）</li>
              <li>29タスク実装（23テンプレート + 7スキル + 1エージェント）</li>
              <li>PRレビュー3ラウンド（17件修正 + バックポート）</li>
              <li>ドキュメント4件（README、CLAUDE.md、QUICKSTART、USER_GUIDE）</li>
              <li>受け入れテスト AT-1〜AT-5（ゴールデンファイル18ファイル + 機能検証）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>結び — 道具を作る道具</h2>
            <p>
              160 日間で Falco プラグインを作った。
            </p>
            <p>
              14 日間で、Falco プラグインを <strong>作る道具</strong> を作った。
            </p>
            <p>
              HTTP でも。AI でも。IoT でも。まだ名前のないログソースでも。
            </p>
            <blockquote className="quote-box">
              <p>TK：「道具は、使われて初めて価値を持つ。」</p>
            </blockquote>
            <p>
              次に監視すべきログが何であれ、5つのプレースホルダーが待っている。
            </p>
          </section>

          {/* Related Articles */}
          <section className="related-articles">
            <h2>関連記事</h2>
            <div className="article-grid">
              <Link href="/blog/openclaw-introduction" className="related-article-card">
                <span className="article-date">2026年2月27日</span>
                <h3>OpenClaw: AI アシスタントのセキュリティを守る Falco プラグイン</h3>
                <p>AI アシスタントのログをリアルタイム監視し、7種類のセキュリティ脅威を検出する OpenClaw プラグインを紹介します。</p>
              </Link>
              <Link href="/blog/falco-plugin-development-days153-156" className="related-article-card">
                <span className="article-date">2026年2月23日</span>
                <h3>Days 153-156: CI は嘘をつかない</h3>
                <p>Phase 9/10実装完了、v1.7.0リリース。575→625パターン拡張、Skill Agentワークフロー実験。準備に時間をかければ、実装は静かに終わる。</p>
              </Link>
            </div>
          </section>

          <div className="article-footer">
            <p>
              <em><a href="https://github.com/takaosgb3/falco-plugin-dev-kit" target="_blank" rel="noopener noreferrer">falco-plugin-dev-kit</a> v2 の開発記録。</em>
            </p>
          </div>
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

        .quote-box {
          border-left: 4px solid #667eea;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: #f8f9ff;
          border-radius: 0 8px 8px 0;
        }

        .quote-box p {
          color: #374151;
          margin: 0;
          font-style: italic;
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

        .stats-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .stats-table th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
        }

        .stats-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e5e7eb;
          color: #4b5563;
        }

        .stats-table tr:last-child td {
          border-bottom: none;
        }

        .stats-table tr:hover td {
          background: #f9fafb;
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

        .article-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        }

        .article-footer p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .article-footer a {
          color: #667eea;
          text-decoration: none;
        }

        .article-footer a:hover {
          text-decoration: underline;
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

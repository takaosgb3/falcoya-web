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
        <title>OpenClaw: AI アシスタントのセキュリティを守る Falco プラグイン - FALCOYA Blog</title>
        <meta name="description" content="AI アシスタントのログをリアルタイム監視し、7種類のセキュリティ脅威を検出する OpenClaw プラグインを紹介します。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OpenClaw: AI アシスタントのセキュリティを守る Falco プラグイン" />
        <meta property="og:description" content="AI アシスタントのログをリアルタイム監視し、7種類のセキュリティ脅威を検出する Falco プラグイン" />
        <link rel="canonical" href="https://falcoya.dev/blog/openclaw-introduction" />
      </Head>

      <Navbar activePage="blog" onLanguageChange={(lang) => { setLanguage(lang); router.push('/blog/openclaw-introduction-en') }} />

      <header className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / OpenClaw 紹介
          </nav>
          <div className="article-meta">
            <span className="article-date">2026年2月27日</span>
            <span className="article-read-time">約8分</span>
            <span className="article-category">OSS開発</span>
          </div>
          <h1 className="article-title">
            OpenClaw: AI アシスタントのセキュリティを守る Falco プラグイン
          </h1>
          <div className="article-tags">
            <span className="tag">Falco</span>
            <span className="tag">OpenClaw</span>
            <span className="tag">AI Security</span>
            <span className="tag">OSS</span>
            <span className="tag">v0.1.0</span>
          </div>
        </div>
      </header>

      <main className="article-main">
        <div className="container">
          <div className="article-grid">
            <aside className="table-of-contents">
              <h3>目次</h3>
              <nav>
                <a href="#introduction">1. はじめに</a>
                <a href="#why-openclaw">2. なぜ OpenClaw が必要なのか</a>
                <a href="#security-rules">3. 7つのセキュリティルール</a>
                <a href="#architecture">4. アーキテクチャ</a>
                <a href="#quickstart">5. クイックスタート</a>
                <a href="#future">6. 今後の展望</a>
              </nav>
            </aside>

            <article className="article-content">
              <section id="introduction">
                <h2>1. はじめに</h2>
                <p>
                  AI アシスタントの利用が急速に広がる中、セキュリティの懸念も増大しています。
                  AI アシスタントはファイルの読み書き、シェルコマンドの実行、設定変更など、
                  強力な操作を実行できます。これらの操作が意図しない方向に向かった場合、
                  深刻なセキュリティインシデントにつながる可能性があります。
                </p>
                <p>
                  <strong>OpenClaw</strong> は、AI アシスタントのログをリアルタイムで監視し、
                  セキュリティ脅威を検出する Falco プラグインです。
                  FALCOYA プロジェクトの2つ目の OSS として公開しました。
                </p>
              </section>

              <section id="why-openclaw">
                <h2>2. なぜ OpenClaw が必要なのか</h2>
                <p>AI アシスタントには以下のようなセキュリティリスクが存在します：</p>
                <ul>
                  <li><strong>危険なコマンド実行</strong>: <code>rm -rf /</code>、<code>chmod 777</code> などの破壊的コマンド</li>
                  <li><strong>データ流出</strong>: 機密ファイル（<code>.env</code>、<code>.ssh/id_rsa</code>）をネットワークツールで外部送信</li>
                  <li><strong>エージェント暴走</strong>: 無限ループや過剰リトライによるリソース枯渇</li>
                  <li><strong>ワークスペース脱出</strong>: <code>/etc/passwd</code> や <code>/proc/</code> など、ワークスペース外のファイルへのアクセス</li>
                  <li><strong>不正な設定変更</strong>: セキュリティ設定の無効化やバイパス</li>
                </ul>
                <p>
                  OpenClaw はこれらの脅威をリアルタイムで検出し、Falco のアラートシステムを通じて
                  即座に通知します。正規表現を使用しない文字列マッチングベースの検出により、
                  ReDoS（正規表現によるサービス拒否）攻撃のリスクもありません。
                </p>
              </section>

              <section id="security-rules">
                <h2>3. 7つのセキュリティルール</h2>
                <p>OpenClaw は以下の7つの検出ルールを実装しています：</p>

                <div className="detection-card">
                  <h3>CRITICAL レベル</h3>
                  <div className="rule-item">
                    <span className="rule-badge critical">CRITICAL</span>
                    <strong>Dangerous Command</strong> — 危険なシェルコマンド（rm -rf、chmod 777、fork bomb 等）の実行を検出
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge critical">CRITICAL</span>
                    <strong>Data Exfiltration</strong> — curl/wget 等によるパスワードファイル、SSH鍵、認証情報の流出を検出
                  </div>
                </div>

                <div className="detection-card">
                  <h3>WARNING レベル</h3>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Agent Runaway</strong> — 無限ループや過剰リトライなどの暴走行動を検出
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Workspace Escape</strong> — ワークスペース外ファイルへのアクセスを検出
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Suspicious Config</strong> — セキュリティ設定の無効化や不審な設定変更を検出
                  </div>
                  <div className="rule-item">
                    <span className="rule-badge warning">WARNING</span>
                    <strong>Shell Injection</strong> — 非シェルツールでのシェルメタ文字使用を検出
                  </div>
                </div>

                <div className="detection-card">
                  <h3>NOTICE レベル</h3>
                  <div className="rule-item">
                    <span className="rule-badge notice">NOTICE</span>
                    <strong>Unauthorized Model</strong> — 不正な AI モデル変更を検出
                  </div>
                </div>
              </section>

              <section id="architecture">
                <h2>4. アーキテクチャ</h2>
                <p>OpenClaw は Falco のプラグインフレームワーク上に構築されています：</p>
                <ul>
                  <li><strong>ログ形式</strong>: JSONL とプレーンテキストの両方を自動検出</li>
                  <li><strong>監視対象</strong>: agent.jsonl、tools.jsonl、system.log など複数ファイル</li>
                  <li><strong>検出方式</strong>: 文字列マッチング（icontains）による高速・安全な検出</li>
                  <li><strong>13のフィールド</strong>: openclaw.type、openclaw.tool、openclaw.args 等をルールで利用可能</li>
                  <li><strong>テストカバレッジ</strong>: 95.9%</li>
                </ul>
              </section>

              <section id="quickstart">
                <h2>5. クイックスタート</h2>
                <p>3ステップで導入できます。詳細は <Link href="/openclaw">OpenClaw ページ</Link> をご覧ください。</p>
                <div className="code-example">
                  <pre><code>{`# 1. プラグインとルールをダウンロード
wget https://github.com/takaosgb3/falco-plugin-openclaw/releases/latest/download/libopenclaw-plugin-linux-amd64.so
sudo cp libopenclaw-plugin-linux-amd64.so /usr/share/falco/plugins/libopenclaw-plugin.so

# 2. falco.yaml に設定を追加（詳細は /openclaw ページを参照）

# 3. Falco を起動
sudo falco -c /etc/falco/falco.yaml --disable-source syscall`}</code></pre>
                </div>
              </section>

              <section id="future">
                <h2>6. 今後の展望</h2>
                <p>OpenClaw v0.1.0 は初期リリースです。今後以下の機能を検討しています：</p>
                <ul>
                  <li>より高度な脅威検出パターンの追加</li>
                  <li>E2E テストの拡充</li>
                  <li>詳細なインストールガイドとチュートリアルの作成</li>
                  <li>コミュニティからのフィードバックに基づく改善</li>
                </ul>
                <p>
                  GitHub リポジトリ: <a href="https://github.com/takaosgb3/falco-plugin-openclaw" target="_blank" rel="noopener noreferrer">
                  github.com/takaosgb3/falco-plugin-openclaw</a>
                </p>
              </section>

              <div className="article-footer">
                <Link href="/blog" className="back-to-blog">← ブログ一覧に戻る</Link>
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-openclaw</h4>
              <p>AI アシスタントのログをリアルタイム監視し、セキュリティ脅威を検出する Falco プラグイン</p>
            </div>
            <div className="footer-section">
              <h4>リンク</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-openclaw">GitHub リポジトリ</a></li>
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
            <p>&copy; 2025 falco-plugin-openclaw by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}

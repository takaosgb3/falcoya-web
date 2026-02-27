import Head from 'next/head'
import { useLanguage } from '../utils/languageUtils'
import Navbar from '../components/Navbar'

export default function OpenClaw() {
  const [language] = useLanguage()

  const content = {
    ja: {
      meta: {
        title: 'OpenClaw - AI アシスタント セキュリティモニター | FALCOYA',
        description: 'OpenClaw AI アシスタントのログをリアルタイム監視し、7種類のセキュリティ脅威を検出する Falco プラグイン',
      },
      hero: {
        title: 'OpenClaw',
        subtitle: 'AI アシスタント セキュリティモニター for Falco',
        description: 'OpenClaw AI アシスタントのログをリアルタイム監視し、セキュリティ脅威を検出する Falco プラグインです。',
        github: 'GitHub',
        quickstart: 'クイックスタート',
      },
      features: {
        title: '主な機能',
        items: [
          {
            icon: '01',
            title: 'リアルタイムログ監視',
            desc: '複数のログファイル（JSONL + プレーンテキスト）をリアルタイムで監視',
          },
          {
            icon: '02',
            title: 'フォーマット自動検出',
            desc: 'JSON とプレーンテキストのログ形式を自動判別',
          },
          {
            icon: '03',
            title: '7種類の脅威検出',
            desc: '危険コマンド、データ流出、暴走、脱出、不審設定、不正モデル変更、シェルインジェクション',
          },
          {
            icon: '04',
            title: 'ReDoS 安全設計',
            desc: '文字列マッチングベースの検出で、正規表現不使用によりReDoS攻撃の心配なし',
          },
          {
            icon: '05',
            title: 'デバッグモード',
            desc: '環境変数 FALCO_OPENCLAW_DEBUG=true で詳細ログを出力',
          },
        ],
      },
      rules: {
        title: 'セキュリティルール',
        subtitle: '7つの検出ルールで AI アシスタントの不審な動作を監視',
        headers: { rule: 'ルール', description: '説明', priority: '優先度' },
        items: [
          { name: 'Dangerous Command', desc: '危険なシェルコマンドの検出（rm -rf, chmod 777, fork bomb 等）', priority: 'CRITICAL' },
          { name: 'Data Exfiltration', desc: 'ネットワークツールによる機密データ流出の検出', priority: 'CRITICAL' },
          { name: 'Agent Runaway', desc: '無限ループ・過剰リトライの検出', priority: 'WARNING' },
          { name: 'Workspace Escape', desc: 'ワークスペース外ファイルアクセスの検出', priority: 'WARNING' },
          { name: 'Suspicious Config', desc: '不審な設定変更の検出', priority: 'WARNING' },
          { name: 'Shell Injection', desc: '非シェルツールでのシェルインジェクションの検出', priority: 'WARNING' },
          { name: 'Unauthorized Model', desc: '不正な AI モデル変更の検出', priority: 'NOTICE' },
        ],
      },
      fields: {
        title: 'プラグインフィールド',
        subtitle: 'Falco ルールで使用可能な13のフィールド',
        headers: { field: 'フィールド', type: 'タイプ', description: '説明' },
      },
      quickstart: {
        title: 'クイックスタート',
        subtitle: '3ステップで OpenClaw を導入',
        step1: { label: 'Step 1', title: 'インストール' },
        step2: { label: 'Step 2', title: '設定（falco.yaml に追加）' },
        step3: { label: 'Step 3', title: '実行' },
        important: '重要',
        importantNote: 'load_plugins: [openclaw] は必須です。これがないとプラグインは無視されます。',
      },
      requirements: {
        title: '動作要件',
        items: [
          { name: 'Falco', value: '0.36.0+' },
          { name: 'OS', value: 'Linux' },
          { name: 'Go', value: '1.22+（ソースからビルドする場合のみ）' },
        ],
      },
      footer: {
        description: 'AI アシスタントのログをリアルタイム監視し、セキュリティ脅威を検出する Falco プラグイン',
        links: 'リンク',
        githubRepo: 'GitHub リポジトリ',
        documentation: 'ドキュメント',
        license: 'ライセンス',
        oss: 'オープンソースソフトウェア',
      },
    },
    en: {
      meta: {
        title: 'OpenClaw - AI Assistant Security Monitor | FALCOYA',
        description: 'A Falco plugin for monitoring OpenClaw AI assistant logs and detecting 7 types of security threats in real-time',
      },
      hero: {
        title: 'OpenClaw',
        subtitle: 'AI Assistant Security Monitor for Falco',
        description: 'A Falco plugin for monitoring OpenClaw AI assistant logs and detecting security threats in real-time.',
        github: 'GitHub',
        quickstart: 'Quick Start',
      },
      features: {
        title: 'Features',
        items: [
          {
            icon: '01',
            title: 'Real-time Log Monitoring',
            desc: 'Monitor multiple log files (JSONL + plaintext) in real-time',
          },
          {
            icon: '02',
            title: 'Auto Format Detection',
            desc: 'Automatically detect JSON and plaintext log formats',
          },
          {
            icon: '03',
            title: '7 Threat Categories',
            desc: 'Dangerous commands, data exfiltration, runaway, escape, suspicious config, unauthorized model, shell injection',
          },
          {
            icon: '04',
            title: 'ReDoS-Safe Design',
            desc: 'String-matching based detection with no regex usage, eliminating ReDoS vulnerability risks',
          },
          {
            icon: '05',
            title: 'Debug Mode',
            desc: 'Enable detailed logging via FALCO_OPENCLAW_DEBUG=true environment variable',
          },
        ],
      },
      rules: {
        title: 'Security Rules',
        subtitle: 'Monitor AI assistant behavior with 7 detection rules',
        headers: { rule: 'Rule', description: 'Description', priority: 'Priority' },
        items: [
          { name: 'Dangerous Command', desc: 'Detects dangerous shell commands (rm -rf, chmod 777, fork bombs)', priority: 'CRITICAL' },
          { name: 'Data Exfiltration', desc: 'Detects sensitive data exfiltration via network tools', priority: 'CRITICAL' },
          { name: 'Agent Runaway', desc: 'Detects infinite loops and excessive retries', priority: 'WARNING' },
          { name: 'Workspace Escape', desc: 'Detects access to files outside the workspace', priority: 'WARNING' },
          { name: 'Suspicious Config', desc: 'Detects suspicious configuration changes', priority: 'WARNING' },
          { name: 'Shell Injection', desc: 'Detects shell metacharacters in non-shell tools', priority: 'WARNING' },
          { name: 'Unauthorized Model', desc: 'Detects unauthorized AI model changes', priority: 'NOTICE' },
        ],
      },
      fields: {
        title: 'Plugin Fields',
        subtitle: '13 fields available for Falco rules',
        headers: { field: 'Field', type: 'Type', description: 'Description' },
      },
      quickstart: {
        title: 'Quick Start',
        subtitle: 'Get started with OpenClaw in 3 steps',
        step1: { label: 'Step 1', title: 'Install' },
        step2: { label: 'Step 2', title: 'Configure (add to falco.yaml)' },
        step3: { label: 'Step 3', title: 'Run' },
        important: 'Important',
        importantNote: 'load_plugins: [openclaw] is required. Without it, the plugin is silently ignored.',
      },
      requirements: {
        title: 'Requirements',
        items: [
          { name: 'Falco', value: '0.36.0+' },
          { name: 'OS', value: 'Linux' },
          { name: 'Go', value: '1.22+ (for building from source only)' },
        ],
      },
      footer: {
        description: 'A Falco plugin that monitors AI assistant logs in real-time and detects security threats',
        links: 'Links',
        githubRepo: 'GitHub Repository',
        documentation: 'Documentation',
        license: 'License',
        oss: 'Open Source Software',
      },
    },
  }

  const fieldsData = [
    { field: 'openclaw.type', type: 'string', ja: 'イベントタイプ（tool_call, message, config_change, system）', en: 'Event type (tool_call, message, config_change, system)' },
    { field: 'openclaw.tool', type: 'string', ja: 'ツール名（bash, read, write 等）', en: 'Tool name (bash, read, write, etc.)' },
    { field: 'openclaw.args', type: 'string', ja: 'ツール引数', en: 'Tool arguments' },
    { field: 'openclaw.session_id', type: 'string', ja: 'セッションID', en: 'Session identifier' },
    { field: 'openclaw.timestamp', type: 'string', ja: 'タイムスタンプ（RFC3339）', en: 'Event timestamp (RFC3339)' },
    { field: 'openclaw.source_file', type: 'string', ja: 'ソースログファイル名', en: 'Source log file name' },
    { field: 'openclaw.user_message', type: 'string', ja: 'ユーザメッセージ', en: 'User message content' },
    { field: 'openclaw.model', type: 'string', ja: 'AI モデル名', en: 'AI model name' },
    { field: 'openclaw.config_path', type: 'string', ja: '設定ファイルパス', en: 'Configuration file path' },
    { field: 'openclaw.suspicious', type: 'string', ja: '検出されたセキュリティ脅威タイプ', en: 'Security threat type detected' },
    { field: 'openclaw.log_path', type: 'string', ja: 'ログファイルパス', en: 'Log file path' },
    { field: 'openclaw.raw', type: 'string', ja: '生ログ行', en: 'Raw log line' },
    { field: 'openclaw.headers[key]', type: 'string', ja: 'キーによる追加メタデータ', en: 'Extra metadata by key' },
  ]

  const c = content[language] || content.ja

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://falcoya.dev/openclaw" />
        <meta property="og:image" content="https://falcoya.dev/img/openclaw/og-openclaw.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.meta.title} />
        <meta name="twitter:description" content={c.meta.description} />
        <link rel="canonical" href="https://falcoya.dev/openclaw" />
      </Head>

      <Navbar activePage="openclaw" />

      <main className="openclaw-container">
        {/* Hero */}
        <section className="openclaw-hero">
          <div className="openclaw-hero-grid" aria-hidden="true"></div>
          <div className="container">
            <div className="openclaw-hero-badges">
              <span className="openclaw-badge">v0.1.0</span>
              <span className="openclaw-badge">Apache-2.0</span>
            </div>
            <h1 className="openclaw-hero-title">{c.hero.title}</h1>
            <p className="openclaw-hero-subtitle">{c.hero.subtitle}</p>
            <p className="openclaw-hero-desc">{c.hero.description}</p>
            <div className="openclaw-hero-actions">
              <a
                href="https://github.com/takaosgb3/falco-plugin-openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="openclaw-btn openclaw-btn-primary"
              >
                {c.hero.github}
              </a>
              <a href="#quickstart" className="openclaw-btn openclaw-btn-outline">
                {c.hero.quickstart}
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="openclaw-features" id="features">
          <div className="container">
            <h2 className="openclaw-section-title">{c.features.title}</h2>
            <div className="openclaw-features-grid">
              {c.features.items.map((item, i) => (
                <div key={i} className="openclaw-feature-card">
                  <span className="openclaw-feature-num">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Rules */}
        <section className="openclaw-rules" id="security-rules">
          <div className="container">
            <h2 className="openclaw-section-title">{c.rules.title}</h2>
            <p className="openclaw-section-subtitle">{c.rules.subtitle}</p>
            <div className="openclaw-table-wrap">
              <table className="openclaw-table">
                <thead>
                  <tr>
                    <th>{c.rules.headers.rule}</th>
                    <th>{c.rules.headers.description}</th>
                    <th>{c.rules.headers.priority}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rules.items.map((rule, i) => (
                    <tr key={i}>
                      <td className="openclaw-rule-name">{rule.name}</td>
                      <td>{rule.desc}</td>
                      <td>
                        <span className={`openclaw-priority openclaw-priority-${rule.priority.toLowerCase()}`}>
                          {rule.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Plugin Fields */}
        <section className="openclaw-fields">
          <div className="container">
            <h2 className="openclaw-section-title">{c.fields.title}</h2>
            <p className="openclaw-section-subtitle">{c.fields.subtitle}</p>
            <div className="openclaw-table-wrap">
              <table className="openclaw-table openclaw-table-fields">
                <thead>
                  <tr>
                    <th>{c.fields.headers.field}</th>
                    <th>{c.fields.headers.type}</th>
                    <th>{c.fields.headers.description}</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldsData.map((f, i) => (
                    <tr key={i}>
                      <td><code className="openclaw-field-code">{f.field}</code></td>
                      <td><span className="openclaw-type-badge">{f.type}</span></td>
                      <td>{language === 'ja' ? f.ja : f.en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="openclaw-quickstart" id="quickstart">
          <div className="container">
            <h2 className="openclaw-section-title">{c.quickstart.title}</h2>
            <p className="openclaw-section-subtitle">{c.quickstart.subtitle}</p>

            <div className="openclaw-steps">
              <div className="openclaw-step">
                <div className="openclaw-step-header">
                  <span className="openclaw-step-label">{c.quickstart.step1.label}</span>
                  <span className="openclaw-step-title">{c.quickstart.step1.title}</span>
                </div>
                <pre className="openclaw-code"><code>{`# Download plugin binary
wget https://github.com/takaosgb3/falco-plugin-openclaw/releases/latest/download/libopenclaw-plugin-linux-amd64.so
sudo cp libopenclaw-plugin-linux-amd64.so /usr/share/falco/plugins/libopenclaw-plugin.so

# Download rules
wget https://github.com/takaosgb3/falco-plugin-openclaw/releases/latest/download/openclaw_rules.yaml
sudo cp openclaw_rules.yaml /etc/falco/rules.d/`}</code></pre>
              </div>

              <div className="openclaw-step">
                <div className="openclaw-step-header">
                  <span className="openclaw-step-label">{c.quickstart.step2.label}</span>
                  <span className="openclaw-step-title">{c.quickstart.step2.title}</span>
                </div>
                <pre className="openclaw-code"><code>{`plugins:
  - name: openclaw
    library_path: /usr/share/falco/plugins/libopenclaw-plugin.so
    init_config: |
      {
        "log_paths": [
          "~/.openclaw/logs/agent.jsonl",
          "~/.openclaw/logs/tools.jsonl",
          "~/.openclaw/logs/system.log"
        ]
      }

load_plugins: [openclaw]

rules_files:
  - /etc/falco/rules.d/openclaw_rules.yaml

stdout_output:
  enabled: true`}</code></pre>
                <div className="openclaw-notice">
                  <strong>{c.quickstart.important}:</strong> {c.quickstart.importantNote}
                </div>
              </div>

              <div className="openclaw-step">
                <div className="openclaw-step-header">
                  <span className="openclaw-step-label">{c.quickstart.step3.label}</span>
                  <span className="openclaw-step-title">{c.quickstart.step3.title}</span>
                </div>
                <pre className="openclaw-code"><code>{`sudo falco -c /etc/falco/falco.yaml --disable-source syscall`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="openclaw-requirements">
          <div className="container">
            <h2 className="openclaw-section-title">{c.requirements.title}</h2>
            <div className="openclaw-req-grid">
              {c.requirements.items.map((item, i) => (
                <div key={i} className="openclaw-req-card">
                  <span className="openclaw-req-name">{item.name}</span>
                  <span className="openclaw-req-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-openclaw</h4>
              <p>{c.footer.description}</p>
            </div>
            <div className="footer-section">
              <h4>{c.footer.links}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-openclaw">{c.footer.githubRepo}</a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-openclaw/blob/main/README.md">{c.footer.documentation}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{c.footer.license}</h4>
              <p>Apache License 2.0</p>
              <p>{c.footer.oss}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 falco-plugin-openclaw by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* ===== Container ===== */
        .openclaw-container {
          min-height: 100vh;
          padding-top: 70px;
          background: #FFFFFF;
        }

        /* ===== Hero ===== */
        .openclaw-hero {
          background: linear-gradient(135deg, #0B3D5B 0%, #0E7490 35%, #0891B2 65%, #06B6D4 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .openclaw-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 40%, rgba(0, 210, 255, 0.12) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(0, 255, 136, 0.06) 0%, transparent 50%);
          animation: openclaw-pulse 18s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes openclaw-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.08) rotate(3deg); opacity: 0.85; }
        }

        .openclaw-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.4), transparent);
        }

        .openclaw-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .openclaw-hero-badges {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .openclaw-badge {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          backdrop-filter: blur(8px);
        }

        .openclaw-hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
          color: white;
        }

        .openclaw-hero-subtitle {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.92);
        }

        .openclaw-hero-desc {
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto 36px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          position: relative;
          z-index: 1;
        }

        .openclaw-hero-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .openclaw-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .openclaw-btn-primary {
          background: white;
          color: #0E7490;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .openclaw-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .openclaw-btn-outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }

        .openclaw-btn-outline:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white;
          transform: translateY(-3px);
        }

        /* ===== Features ===== */
        .openclaw-features {
          padding: 90px 0;
          background: #F9FAFB;
        }

        .openclaw-section-title {
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 16px;
          color: #1F2937;
          font-weight: 700;
        }

        .openclaw-section-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #6B7280;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .openclaw-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .openclaw-feature-card {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .openclaw-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0891B2, #06B6D4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .openclaw-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(8, 145, 178, 0.1);
          border-color: #0891B2;
        }

        .openclaw-feature-card:hover::before {
          opacity: 1;
        }

        .openclaw-feature-num {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: linear-gradient(135deg, #0E7490, #0891B2);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .openclaw-feature-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 12px;
        }

        .openclaw-feature-card p {
          font-size: 0.95rem;
          color: #6B7280;
          line-height: 1.7;
        }

        /* ===== Tables (Rules & Fields) ===== */
        .openclaw-rules {
          padding: 90px 0;
          background: white;
        }

        .openclaw-fields {
          padding: 90px 0;
          background: #F9FAFB;
        }

        .openclaw-table-wrap {
          max-width: 1000px;
          margin: 0 auto;
          overflow-x: auto;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .openclaw-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }

        .openclaw-table thead {
          background: #1A1F2E;
        }

        .openclaw-table thead th {
          padding: 18px 24px;
          text-align: left;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .openclaw-table tbody tr {
          border-bottom: 1px solid #F3F4F6;
          transition: background 0.15s ease;
        }

        .openclaw-table tbody tr:last-child {
          border-bottom: none;
        }

        .openclaw-table tbody tr:hover {
          background: #F9FAFB;
        }

        .openclaw-table tbody td {
          padding: 16px 24px;
          color: #374151;
          line-height: 1.6;
        }

        .openclaw-rule-name {
          font-weight: 600;
          color: #1F2937 !important;
          white-space: nowrap;
        }

        .openclaw-priority {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .openclaw-priority-critical {
          background: #FEE2E2;
          color: #DC2626;
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.15);
        }

        .openclaw-priority-warning {
          background: #FEF3C7;
          color: #D97706;
        }

        .openclaw-priority-notice {
          background: #DBEAFE;
          color: #2563EB;
        }

        .openclaw-field-code {
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          font-size: 0.85rem;
          background: #F3F4F6;
          padding: 4px 10px;
          border-radius: 6px;
          color: #0E7490;
          white-space: nowrap;
        }

        .openclaw-type-badge {
          display: inline-block;
          padding: 3px 12px;
          background: #F0FDFA;
          color: #0D9488;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* ===== Quick Start ===== */
        .openclaw-quickstart {
          padding: 90px 0;
          background: white;
        }

        .openclaw-steps {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .openclaw-step {
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .openclaw-step-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 28px;
          background: #F9FAFB;
          border-bottom: 1px solid #E5E7EB;
        }

        .openclaw-step-label {
          display: inline-block;
          padding: 5px 16px;
          background: linear-gradient(135deg, #0E7490, #0891B2);
          color: white;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .openclaw-step-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1F2937;
        }

        .openclaw-code {
          margin: 0;
          padding: 24px 28px;
          background: #1A1F2E;
          color: #E2E8F0;
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          font-size: 0.88rem;
          line-height: 1.8;
          overflow-x: auto;
          border: none;
        }

        .openclaw-code code {
          color: inherit;
          font-family: inherit;
        }

        .openclaw-notice {
          padding: 16px 28px;
          background: #FFFBEB;
          border-top: 1px solid #FDE68A;
          font-size: 0.9rem;
          color: #92400E;
          line-height: 1.6;
        }

        .openclaw-notice strong {
          color: #78350F;
        }

        /* ===== Requirements ===== */
        .openclaw-requirements {
          padding: 90px 0;
          background: linear-gradient(135deg, #0B3D5B 0%, #0E7490 50%, #0891B2 100%);
          position: relative;
          overflow: hidden;
        }

        .openclaw-requirements::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.4), transparent);
        }

        .openclaw-requirements .openclaw-section-title {
          color: white;
        }

        .openclaw-req-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          max-width: 800px;
          margin: 40px auto 0;
        }

        .openclaw-req-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 36px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          min-width: 180px;
        }

        .openclaw-req-name {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .openclaw-req-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          text-align: center;
        }

        /* ===== Mobile ===== */
        @media (max-width: 768px) {
          .openclaw-hero {
            padding: 60px 0;
          }

          .openclaw-hero-title {
            font-size: 2.5rem;
          }

          .openclaw-hero-subtitle {
            font-size: 1.15rem;
          }

          .openclaw-hero-desc {
            font-size: 1rem;
          }

          .openclaw-hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .openclaw-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .openclaw-features,
          .openclaw-rules,
          .openclaw-fields,
          .openclaw-quickstart,
          .openclaw-requirements {
            padding: 60px 0;
          }

          .openclaw-section-title {
            font-size: 1.8rem;
          }

          .openclaw-features-grid {
            grid-template-columns: 1fr;
          }

          .openclaw-table-wrap {
            border-radius: 12px;
          }

          .openclaw-table thead th,
          .openclaw-table tbody td {
            padding: 12px 16px;
            font-size: 0.85rem;
          }

          .openclaw-step-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .openclaw-code {
            padding: 18px 20px;
            font-size: 0.8rem;
          }

          .openclaw-req-grid {
            flex-direction: column;
            align-items: center;
          }

          .openclaw-req-card {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  )
}

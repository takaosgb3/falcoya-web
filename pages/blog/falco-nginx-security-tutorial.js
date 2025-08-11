import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function FalcoNginxTutorial() {
  const [language, setLanguage] = useState('ja')
  
  return (
    <>
      <Head>
        <title>Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2 完全実践ガイド - FALCOYA Blog</title>
        <meta name="description" content="FalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法を、AWS EC2環境での実践を通じて詳しく解説します。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！" />
        <meta property="og:description" content="AWS EC2環境でFalcoとNginxプラグインを使った実践的なWebセキュリティ監視ガイド" />
        <meta name="keywords" content="Falco, Nginx, セキュリティ, AWS, EC2, Web攻撃検知, SQLインジェクション, XSS" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
              <span>FALCOYA</span>
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">GitHub</Link></li>
            <li><Link href="/#installation">Installation</Link></li>
            <li><Link href="/#detection">Detection</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => setLanguage('ja')}
              >
                日本語
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Falco + Nginx セキュリティガイド
          </nav>
          
          <div className="article-meta">
            <span className="article-date">2025年8月11日</span>
            <span className="article-read-time">約15分</span>
            <span className="article-category">セキュリティ</span>
          </div>
          
          <h1 className="article-title">
            Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！<br/>
            <span className="subtitle">AWS EC2 完全実践ガイド</span>
          </h1>
          
          <div className="article-tags">
            <span className="tag">Falco</span>
            <span className="tag">Nginx</span>
            <span className="tag">セキュリティ</span>
            <span className="tag">AWS</span>
            <span className="tag">EC2</span>
            <span className="tag">Web攻撃検知</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="article-main">
        <div className="container">
          <div className="article-grid">
            
            {/* Table of Contents */}
            <aside className="table-of-contents">
              <h3>目次</h3>
              <nav>
                <a href="#introduction">1. はじめに</a>
                <a href="#architecture">2. システム構成と動作原理</a>
                <a href="#environment">3. 環境準備</a>
                <a href="#installation">4. インストール</a>
                <a href="#test-setup">5. テスト環境の構築</a>
                <a href="#attack-tests">6. 攻撃パターンの実践検証</a>
                <a href="#detection-analysis">7. 検知ログの詳細分析</a>
                <a href="#custom-rules">8. カスタムルールの作成</a>
                <a href="#production-considerations">9. 運用時の考慮事項</a>
                <a href="#conclusion">10. まとめと次のステップ</a>
              </nav>
            </aside>

            {/* Main Content */}
            <article className="article-content">
              
              {/* Introduction */}
              <section id="introduction">
                <h2>1. はじめに - なぜFalco + Nginxプラグインが必要なのか</h2>
                
                <h3>Webアプリケーションセキュリティの現実</h3>
                <p>現代のWebアプリケーションは、以下のような深刻なセキュリティ脅威に常に晒されています：</p>
                
                <ul>
                  <li><strong>SQL インジェクション</strong>: データベースへの不正アクセス</li>
                  <li><strong>クロスサイトスクリプティング（XSS）</strong>: ユーザーブラウザでの悪意のあるスクリプト実行</li>
                  <li><strong>ディレクトリトラバーサル</strong>: システムファイルへの不正アクセス</li>
                  <li><strong>コマンドインジェクション</strong>: サーバー上での任意コマンド実行</li>
                </ul>

                <h3>従来のセキュリティ対策の限界</h3>
                <p>従来のWAF（Web Application Firewall）や静的解析ツールでは、以下の課題がありました：</p>
                
                <div className="highlight-box">
                  <ul>
                    <li><strong>遅延検知</strong>: ログ分析が後追いになりがち</li>
                    <li><strong>複雑な設定</strong>: 専門知識が必要で導入コストが高い</li>
                    <li><strong>誤検知</strong>: 正常なトラフィックまでブロックしてしまう</li>
                    <li><strong>可視性の不足</strong>: 攻撃の全体像が把握しにくい</li>
                  </ul>
                </div>

                <h3>Falcoが提供するソリューション</h3>
                <p><strong>Falco</strong>は、CNCF（Cloud Native Computing Foundation）に所属するオープンソースのランタイムセキュリティツールで、以下の特徴があります：</p>
                
                <div className="feature-grid">
                  <div className="feature-item">
                    <h4>✅ リアルタイム検知</h4>
                    <p>カーネルレベルでのイベント監視</p>
                  </div>
                  <div className="feature-item">
                    <h4>✅ 軽量</h4>
                    <p>システムパフォーマンスへの影響が最小限</p>
                  </div>
                  <div className="feature-item">
                    <h4>✅ 柔軟なルール</h4>
                    <p>YAML形式で直感的にカスタマイズ可能</p>
                  </div>
                  <div className="feature-item">
                    <h4>✅ 統合性</h4>
                    <p>既存のCI/CDパイプラインやSIEMツールと連携しやすい</p>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section id="architecture">
                <h2>2. システム構成と動作原理</h2>
                
                <h3>全体アーキテクチャ</h3>
                <div className="architecture-diagram">
                  <div className="diagram-container">
                    <div className="flow-item">攻撃者/正規ユーザー</div>
                    <div className="arrow">↓</div>
                    <div className="flow-item">Nginx Webサーバー</div>
                    <div className="arrow">↓</div>
                    <div className="flow-item">アクセスログファイル</div>
                    <div className="arrow">↓</div>
                    <div className="flow-item">falco-plugin-nginx</div>
                    <div className="arrow">↓</div>
                    <div className="flow-item">検知ルール</div>
                    <div className="arrow">↓</div>
                    <div className="flow-item">アラート生成・通知</div>
                  </div>
                </div>

                <h3>検知対象の攻撃パターン</h3>
                <div className="attack-patterns">
                  <table className="attack-table">
                    <thead>
                      <tr>
                        <th>攻撃タイプ</th>
                        <th>重要度</th>
                        <th>検知対象</th>
                        <th>例</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>SQL Injection</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>クエリパラメータ</td>
                        <td><code>' OR '1'='1</code></td>
                      </tr>
                      <tr>
                        <td><strong>XSS</strong></td>
                        <td><span className="severity warning">Warning</span></td>
                        <td>スクリプトタグ</td>
                        <td><code>&lt;script&gt;alert(1)&lt;/script&gt;</code></td>
                      </tr>
                      <tr>
                        <td><strong>Directory Traversal</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>パストラバーサル</td>
                        <td><code>../../etc/passwd</code></td>
                      </tr>
                      <tr>
                        <td><strong>Command Injection</strong></td>
                        <td><span className="severity critical">Critical</span></td>
                        <td>コマンド実行</td>
                        <td><code>;cat /etc/passwd</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Installation */}
              <section id="installation">
                <h2>4. インストール - ワンライナーで簡単導入</h2>
                
                <h3>🚀 ワンライナーインストール</h3>
                <p>最も簡単な方法は、公式インストールスクリプトを使用することです：</p>
                
                <div className="code-block">
                  <div className="code-header">基本インストール</div>
                  <pre><code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh | sudo bash</code></pre>
                </div>

                <h3>📋 テスト環境付きインストール</h3>
                <p>攻撃テスト用のサンプルサイトも同時にセットアップする場合：</p>
                
                <div className="code-block">
                  <div className="code-header">テスト環境付きインストール</div>
                  <pre><code>curl -sSL https://raw.githubusercontent.com/takaosgb3/falco-plugin-nginx/main/install.sh \
  | sudo SETUP_TEST_CONTENT=yes bash</code></pre>
                </div>
                
                <div className="info-box">
                  <h4>💡 インストールスクリプトが実行する処理</h4>
                  <ol>
                    <li>依存関係の解決（jq、Nginxの設定確認）</li>
                    <li>Falcoのインストール（modern eBPFモード有効化）</li>
                    <li>falco-plugin-nginxバイナリの配置</li>
                    <li>検知ルールファイルの設定</li>
                    <li>Falco設定の更新</li>
                    <li>サービスの起動・有効化</li>
                  </ol>
                </div>
              </section>

              {/* Attack Tests */}
              <section id="attack-tests">
                <h2>6. 攻撃パターンの実践検証</h2>
                
                <h3>リアルタイム監視の開始</h3>
                <p>まず、別のターミナルでFalcoのログをリアルタイム監視します：</p>
                
                <div className="code-block">
                  <div className="code-header">Falcoログの監視</div>
                  <pre><code>sudo journalctl -u falco-modern-bpf -f -o cat</code></pre>
                </div>

                <h3>攻撃テストの実行</h3>
                
                <h4>1. SQL Injection攻撃</h4>
                <div className="attack-demo">
                  <div className="code-block">
                    <div className="code-header">SQL Injection攻撃コマンド</div>
                    <pre><code>curl "http://localhost/search.php?q=%27%20OR%20%271%27%3D%271"</code></pre>
                  </div>
                  
                  <div className="attack-explanation">
                    <p><strong>URLデコード後:</strong> <code>' OR '1'='1</code></p>
                    <p>この攻撃は、SQL文の論理条件を常に真にして認証を回避しようとします。</p>
                  </div>
                  
                  <div className="detection-result">
                    <div className="code-block">
                      <div className="code-header">検知ログ例</div>
                      <pre><code><span className="log-critical">Critical [NGINX SQLi]</span> ip=127.0.0.1 method=GET path=/search.php qs=q=%27%20OR%20%271%27%3D%271 ua=curl/7.81.0 status=200</code></pre>
                    </div>
                  </div>
                </div>

                <h4>2. XSS攻撃</h4>
                <div className="attack-demo">
                  <div className="code-block">
                    <div className="code-header">XSS攻撃コマンド</div>
                    <pre><code>curl "http://localhost/search.php?q=%3Cscript%3Ealert(1)%3C/script%3E"</code></pre>
                  </div>
                  
                  <div className="attack-explanation">
                    <p><strong>URLデコード後:</strong> <code>&lt;script&gt;alert(1)&lt;/script&gt;</code></p>
                    <p>悪意のあるJavaScriptコードをWebページに注入しようとする攻撃です。</p>
                  </div>
                  
                  <div className="detection-result">
                    <div className="code-block">
                      <div className="code-header">検知ログ例</div>
                      <pre><code><span className="log-warning">Warning [NGINX XSS]</span> ip=127.0.0.1 method=GET path=/search.php qs=q=%3Cscript%3Ealert(1)%3C/script%3E ua=curl/7.81.0 status=200</code></pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Custom Rules */}
              <section id="custom-rules">
                <h2>8. カスタムルールの作成</h2>
                
                <h3>ルール構造の理解</h3>
                <p>Falcoのルールは3つの要素で構成されています：</p>
                
                <div className="rule-structure">
                  <div className="rule-item">
                    <h4>1. list</h4>
                    <p>検知対象の値やパターンを定義</p>
                  </div>
                  <div className="rule-item">
                    <h4>2. macro</h4>
                    <p>条件の組み合わせを再利用可能な形で定義</p>
                  </div>
                  <div className="rule-item">
                    <h4>3. rule</h4>
                    <p>実際の検知条件と出力を定義</p>
                  </div>
                </div>

                <h3>カスタムルールの作成例</h3>
                
                <h4>管理画面への不正アクセス検知</h4>
                <div className="code-block">
                  <div className="code-header">/etc/falco/rules.d/local_nginx_rules.yaml</div>
                  <pre><code># 管理系パスのリスト
- list: admin_paths
  items: ["/admin", "/administrator", "/wp-admin", "/phpmyadmin"]

# 許可された管理者IPのリスト  
- list: admin_ips
  items: ["192.168.1.100", "10.0.1.50"]

# Nginxイベントを判定するマクロ
- macro: is_nginx_event
  condition: (evt.source = nginx)

# 管理画面への不正アクセス検知ルール
- rule: NGINX Unauthorized Admin Access
  desc: Detect unauthorized access to admin pages
  condition: &gt;
    is_nginx_event and 
    (nginx.path startswith "/admin" or nginx.path in (admin_paths)) and
    not (nginx.ip in (admin_ips))
  output: &gt;
    [UNAUTHORIZED ADMIN ACCESS] Suspicious admin access detected
    (ip=%nginx.ip method=%nginx.method path=%nginx.path ua="%nginx.ua" 
     status=%nginx.status size=%nginx.size)
  priority: Critical
  tags: [nginx, web, unauthorized, admin]</code></pre>
                </div>

                <div className="validation-steps">
                  <h4>ルールの検証とデプロイ</h4>
                  <div className="step-list">
                    <div className="step">
                      <h5>1. 構文チェック</h5>
                      <div className="code-block">
                        <pre><code>sudo falco --validate /etc/falco/rules.d/local_nginx_rules.yaml</code></pre>
                      </div>
                    </div>
                    
                    <div className="step">
                      <h5>2. ルール適用</h5>
                      <div className="code-block">
                        <pre><code>sudo systemctl restart falco-modern-bpf</code></pre>
                      </div>
                    </div>
                    
                    <div className="step">
                      <h5>3. 動作確認</h5>
                      <div className="code-block">
                        <pre><code>curl "http://localhost/admin/" -H "User-Agent: testbot"</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2>10. まとめと次のステップ</h2>
                
                <h3>今回達成したこと</h3>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <h4>✅ 環境構築</h4>
                    <p>AWS EC2上でFalco + Nginxプラグインの動作環境を構築</p>
                  </div>
                  <div className="achievement-item">
                    <h4>✅ 攻撃検知</h4>
                    <p>SQLi、XSS、Directory Traversal、Command Injectionの検知を実証</p>
                  </div>
                  <div className="achievement-item">
                    <h4>✅ ルール理解</h4>
                    <p>検知ロジックとカスタマイズ方法を習得</p>
                  </div>
                  <div className="achievement-item">
                    <h4>✅ 運用知識</h4>
                    <p>パフォーマンス最適化と外部連携の方法を学習</p>
                  </div>
                </div>

                <h3>セキュリティ向上の効果</h3>
                <ul>
                  <li><strong>可視性の向上</strong>: 従来見えなかった攻撃パターンをリアルタイム検知</li>
                  <li><strong>迅速な対応</strong>: 攻撃発生から検知までのタイムラグを最小化</li>
                  <li><strong>コスト効率</strong>: オープンソースで高機能なセキュリティ監視を実現</li>
                  <li><strong>統合性</strong>: 既存のモニタリング・アラート基盤との連携が容易</li>
                </ul>

                <div className="next-steps">
                  <h3>次のステップ</h3>
                  
                  <div className="step-card">
                    <h4>1. 本番環境への適用</h4>
                    <ul>
                      <li>段階的デプロイによる安全な導入</li>
                      <li>既存のセキュリティ機構との併用</li>
                      <li>継続的な監視と調整</li>
                    </ul>
                  </div>
                  
                  <div className="step-card">
                    <h4>2. 高度な機能の活用</h4>
                    <ul>
                      <li>Machine Learningによるアノマリ検知</li>
                      <li>Kubernetesでのコンテナセキュリティ</li>
                      <li>クラウドサービスとの統合</li>
                    </ul>
                  </div>
                  
                  <div className="step-card">
                    <h4>3. セキュリティ体制の強化</h4>
                    <ul>
                      <li>インシデント対応の自動化</li>
                      <li>チームのスキル向上</li>
                      <li>継続的な改善プロセス</li>
                    </ul>
                  </div>
                </div>

                <div className="final-message">
                  <p><strong>この実践ガイドがWebアプリケーションセキュリティの向上に役立つことを願っています。セキュリティは継続的な取り組みです。定期的な見直しと改善を続けて、より安全なWebサービスを提供していきましょう！</strong> 🛡️</p>
                </div>
              </section>

            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン</p>
            </div>
            <div className="footer-section">
              <h4>リンク</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">GitHubリポジトリ</Link></li>
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
            <p>&copy; 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}
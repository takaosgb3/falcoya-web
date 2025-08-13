import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoNginxTutorial() {
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  // ナビゲーションテキスト
  const navText = {
    ja: {
      github: "GitHub",
      installation: "インストール",
      detection: "検知機能",
      blog: "ブログ",
      news: "ニュース"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News"
    }
  }
  
  // 画面サイズ変更時にモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      // 画面幅に関わらず、リサイズ時は必ずメニューを閉じる
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    // 初回実行
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2環境で試してみる - FALCOYA Blog</title>
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
            </Link>
          </div>
          
          {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* デスクトップメニュー */}
          <ul className="nav-menu desktop-menu">
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">{navText[language].github}</Link></li>
            <li><Link href="/#installation">{navText[language].installation}</Link></li>
            <li><Link href="/#detection">{navText[language].detection}</Link></li>
            <li><Link href="/blog">{navText[language].blog}</Link></li>
            <li><Link href="/news">{navText[language].news}</Link></li>
          </ul>
          
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => {
                  if (language !== 'ja') {
                    setLanguage('ja')
                    // 既に日本語ページにいるので何もしない
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
                    // 英語版の記事ページへリダイレクト
                    router.push('/blog/falco-nginx-security-tutorial-en')
                  }
                }}
              >
                English
              </button>
            </div>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{navText[language].github}</a></li>
            <li><a href="/#installation" onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></li>
            <li><a href="/#detection" onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></li>
            <li><a href="/news" onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></li>
          </ul>
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
            <span className="subtitle">AWS EC2環境で試してみる</span>
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
                <a href="#custom-rules">7. カスタムルールの作成</a>
                <a href="#conclusion">8. まとめ</a>
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

                <h3>Falco + Nginxプラグインが提供するソリューション</h3>
                <p><strong>falco-plugin-nginx</strong> は、CNCF プロジェクトである Falco に Nginx アクセスログ解析機能を追加するプラグインです。これにより、Nginx を経由したリクエストから SQLインジェクション、XSS、ディレクトリトラバーサル、コマンドインジェクションなどの攻撃パターンをリアルタイムに検知できます。</p>
                
                <p>主な特徴：</p>
                
                <div className="feature-grid">
                  <div className="feature-item">
                    <h4>🔍 リアルタイム攻撃検知</h4>
                    <p>Nginxアクセスログを即座に解析し、SQLi・XSSなどの攻撃を瞬時に発見</p>
                  </div>
                  <div className="feature-item">
                    <h4>⚡ 超軽量動作</h4>
                    <p>Go言語実装でオーバーヘッド最小</p>
                  </div>
                  <div className="feature-item">
                    <h4>📝 柔軟なルール作成</h4>
                    <p>YAML形式で攻撃パターンを柔軟に定義・カスタマイズ</p>
                  </div>
                </div>
              </section>

              {/* Architecture */}
              <section id="architecture">
                <h2>2. システム構成と動作原理</h2>
                
                <h3>全体アーキテクチャー</h3>
                <div className="architecture-diagram">
                  <div className="diagram-title">
                    <h4>📊 システムアーキテクチャーフロー</h4>
                  </div>
                  <div className="diagram-container">
                    <div className="flow-item user-item">👥 攻撃者/正規ユーザー</div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item server-item">🌐 Nginx Webサーバー</div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item log-item">📄 アクセスログファイル<br/><small>/var/log/nginx/access.log</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item plugin-item">🔍 Falco + falco-plugin-nginx<br/><small>リアルタイム解析</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item rule-item">📋 検知ルール<br/><small>nginx_rules.yaml</small></div>
                    <div className="arrow">⬇️</div>
                    <div className="flow-item alert-item">🚨 アラート生成・通知<br/><small>ログ出力</small></div>
                  </div>
                </div>

                <h3>動作原理の詳細</h3>
                <div className="principle-explanation">
                  <div className="principle-step">
                    <h4>📥 Step 1: ログファイル監視</h4>
                    <p>falco-plugin-nginxは、Falcoフレームワークの一部として動作し、Nginxのアクセスログファイル（/var/log/nginx/access.log）を<strong>tail -f</strong>のようにリアルタイムで監視します。新しいログエントリが追加されるたびに、即座に読み取りとパースが実行されます。</p>
                  </div>
                  
                  <div className="principle-step">
                    <h4>🔍 Step 2: ログ解析とパターン抽出</h4>
                    <p>各ログエントリから以下の要素を抽出・解析します：</p>
                    <ul>
                      <li><strong>IPアドレス</strong>: リクエスト送信元の特定</li>
                      <li><strong>HTTPメソッド</strong>: GET/POST等の判定</li>
                      <li><strong>リクエストパス</strong>: アクセス対象URLの検査</li>
                      <li><strong>クエリパラメータ</strong>: 攻撃パターンが潜む主要領域</li>
                      <li><strong>User-Agent</strong>: 攻撃ツールの特定</li>
                      <li><strong>レスポンスステータス</strong>: 攻撃の成否判定</li>
                    </ul>
                  </div>

                  <div className="principle-step">
                    <h4>🎯 Step 3: ルールエンジンによる脅威判定</h4>
                    <p>抽出された情報は、事前定義されたYAMLベースのルールセット（nginx_rules.yaml）と照合されます。このルールエンジンは以下の処理を行います：</p>
                    <ul>
                      <li><strong>パターンマッチング</strong>: 正規表現や文字列パターンによる攻撃検知</li>
                      <li><strong>重要度判定</strong>: Critical/Warning/Notice/Infoのレベル分類</li>
                      <li><strong>コンテキスト分析</strong>: IPアドレス、パス、パラメータの組み合わせ評価</li>
                      <li><strong>ホワイトリスト処理</strong>: 正当なトラフィックの除外</li>
                    </ul>
                  </div>

                  <div className="principle-step">
                    <h4>🚨 Step 4: アラート生成と出力</h4>
                    <p>脅威が検知された場合、構造化されたアラートが生成されます：</p>
                    <ul>
                      <li><strong>検知ログ</strong>: タイムスタンプ付きの詳細情報</li>
                      <li><strong>攻撃分類</strong>: SQLi/XSS/CMDi等のカテゴリ</li>
                      <li><strong>送信元情報</strong>: IPアドレス、User-Agent等</li>
                      <li><strong>攻撃内容</strong>: 実際のペイロードと検知理由</li>
                    </ul>
                  </div>
                </div>

                <h3>検知対象の攻撃パターン例</h3>
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

              {/* Environment Setup */}
              <section id="environment">
                <h2>3. 環境準備 - AWS EC2セットアップ</h2>
                
                <h3>推奨環境仕様</h3>
                <p>効果的なテスト環境を構築するための推奨仕様:</p>
                
                <div className="requirement-table">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>項目</th>
                        <th>推奨値</th>
                        <th>説明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>インスタンスタイプ</strong></td>
                        <td>t2.micro以上</td>
                        <td>無料利用枠でも動作</td>
                      </tr>
                      <tr>
                        <td><strong>OS</strong></td>
                        <td>Ubuntu 22.04 LTS</td>
                        <td>長期サポート版</td>
                      </tr>
                      <tr>
                        <td><strong>カーネル</strong></td>
                        <td>5.8以上</td>
                        <td>modern eBPF対応</td>
                      </tr>
                      <tr>
                        <td><strong>メモリ</strong></td>
                        <td>1GB以上</td>
                        <td>Falco動作に最低限必要</td>
                      </tr>
                      <tr>
                        <td><strong>ストレージ</strong></td>
                        <td>10GB以上</td>
                        <td>ログファイル保存用(必要な場合)</td>
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

                <div className="warning-box">
                  <h4>⚠️ インストール時の注意事項</h4>
                  <p>権限エラーやカーネルバージョンの問題が発生した場合は、システムの更新やFalcoの依存関係を確認してください。また、インストール完了後は必ずテスト環境で動作確認を行ってください。</p>
                </div>
              </section>

              {/* Test Setup */}
              <section id="test-setup">
                <h2>5. テスト環境の構築</h2>
                
                <h3>インストール起動時の画面</h3>
                <p>インストールが正常に起動すると、以下のような画面が表示されます：</p>
                
                <div className="image-container">
                  <img src="/img/install-s.png" alt="インストール起動画面" className="blog-image" />
                  <p className="image-caption">falco-plugin-nginxインストール起動時の画面</p>
                </div>

                <h3>テスト環境のセットアップ</h3>
                <p>SETUP_TEST_CONTENT=yesオプションでインストールした場合、攻撃テスト用のサンプルサイトが自動構築されます：</p>
                
                <div className="image-container">
                  <img src="/img/test-site.png" alt="テストサイト画面" className="blog-image" />
                  <p className="image-caption">セキュリティテスト専用サイト - 各種攻撃パターンのテストエンドポイントを提供</p>
                </div>

                <h3>インストール完了とテスト準備</h3>
                <p>インストールが完了すると、次のステップとしてテスト方法が案内されます：</p>
                
                <div className="image-container">
                  <img src="/img/install-e.png" alt="インストール完了とテスト案内" className="blog-image" />
                  <p className="image-caption">インストール完了後のテスト方法案内 - 各種攻撃パターンのテストコマンドとFalcoログ監視方法を表示</p>
                </div>
                
                <div className="info-box">
                  <h4>💡 テスト環境の特徴</h4>
                  <ul>
                    <li><strong>専用テストページ</strong>: 各攻撃パターン専用のエンドポイント</li>
                    <li><strong>URL エンコーディング対応</strong>: 実際の攻撃と同様の形式でテスト</li>
                    <li><strong>検知確認機能</strong>: リアルタイムでFalcoアラートを確認可能</li>
                    <li><strong>安全な環境</strong>: 隔離されたテスト専用環境</li>
                  </ul>
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
                
                <div className="image-container">
                  <img src="/img/atack.png" alt="攻撃テスト実行画面" className="blog-image" />
                  <p className="image-caption">実際の攻撃テスト実行とリアルタイム検知の様子</p>
                </div>

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

                <h3>検知結果の確認</h3>
                <p>実行した攻撃パターンがすべて検知されていることを確認できます：</p>
                
                <div className="image-container">
                  <img src="/img/detection.png" alt="検知ログ画面" className="blog-image" />
                  <p className="image-caption">Falcoによる各種攻撃パターンの検知ログ</p>
                </div>
              </section>

              {/* Custom Rules */}
              <section id="custom-rules">
                <h2>7. カスタムルールの作成</h2>
                
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
                  <pre><code>{`# 管理系パスのリスト
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
  condition: >
    is_nginx_event and 
    (nginx.path startswith "/admin" or nginx.path in (admin_paths)) and
    not (nginx.ip in (admin_ips))
  output: >
    [UNAUTHORIZED ADMIN ACCESS] Suspicious admin access detected
    (ip=%nginx.ip method=%nginx.method path=%nginx.path ua="%nginx.ua" 
     status=%nginx.status size=%nginx.size)
  priority: Critical
  tags: [nginx, web, unauthorized, admin]`}</code></pre>
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
                <h2>8. まとめ</h2>
                
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
                </div>

                <h3>セキュリティ向上の効果</h3>
                <ul>
                  <li><strong>可視性の向上</strong>: 従来見えなかった攻撃パターンをリアルタイム検知</li>
                  <li><strong>迅速な対応</strong>: 攻撃発生から検知までのタイムラグを最小化</li>
                  <li><strong>コスト効率</strong>: オープンソースで高機能なセキュリティ監視を実現</li>
                  <li><strong>統合性</strong>: 既存のモニタリング・アラート基盤との連携が容易</li>
                </ul>


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
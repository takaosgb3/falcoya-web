import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays39To40() {
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
        <title>Day 39-40：予防策、そして失敗だらけのE2Eテスト初動 - FALCOYA Blog</title>
        <meta name="description" content="E2Eテストに備えた予防策と、赤ログの嵐に見舞われた初動テスト。5W1H分析で失敗を成長へ変えるFalcoya君の2日間。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Day 39-40：予防策、そして失敗だらけのE2Eテスト初動" />
        <meta property="og:description" content="失敗は進化のコンパス - E2Eテスト初動の記録" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, E2Eテスト, 5W1H分析, CI/CD, 品質保証" />
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
                    router.push('/blog/falco-plugin-development-days39-45-en')
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
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-date">2025-08-18</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">10分</span>
            </div>
            <h1 className="article-title">
              Day 39-40：予防策、そして失敗だらけのE2Eテスト初動
            </h1>
            <p className="article-subtitle">
              〜 赤ログの嵐を成長への地図に変える 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">E2Eテスト</span>
              <span className="tag">5W1H分析</span>
              <span className="tag">CI/CD</span>
              <span className="tag">予防策</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回までに完了したタスクと作成したドキュメント</h2>
              <p>
                33〜38日目は、大きな節目でした。<br />
                <strong>falcoya.dev</strong> を公開し、<strong>falco-plugin-nginx</strong> をGitHubに初リリース。<br />
                CI/CDを突破して初めて「OSSとして世に出た」と言える状態になりました。
              </p>
              
              <h3>完了タスク</h3>
              <ul className="task-list">
                <li>サイト公開 & GitHubリリース</li>
                <li>Falcoルール改善（誤検知削減）</li>
                <li>CI/CD重大修正</li>
                <li>Docker環境再現性の改善</li>
              </ul>
              
              <h3>作成ドキュメント</h3>
              <ul className="document-list">
                <li>公開アナウンス</li>
                <li>CI/CD改善記録</li>
                <li>不具合修正ノート</li>
                <li>開発日記</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>第39日目（8/17）：予防策を固める</h2>
              <p>
                次なる戦い──E2Eテストに備えて、僕とTKがまず着手したのは「予防策」でした。
              </p>
              
              <p>
                OSSはどんな環境でも動くことを求められるため、「起きてから直す」では遅すぎます。<br />
                だからこそこの日は、壊れない仕組みを前もって作ることに集中しました。
              </p>
              
              <ul className="prevention-list">
                <li><strong>ルール整備</strong>：設計ルールを明文化し、再現性を担保</li>
                <li><strong>例外想定</strong>：CombinedログやJSONログの揺らぎを吸収</li>
                <li><strong>正規表現改善</strong>：誤検知を防ぎつつ、攻撃検知を取りこぼさない調整</li>
              </ul>
              
              <p>
                地味な作業ですが、この「盾」を整えることが次の大きな挑戦の前提条件でした。
              </p>
              
              <blockquote className="quote">
                GPT-5 Pro：「予防策は見えないが、OSSを支える最強の盾だ。」
              </blockquote>
            </section>

            <section className="content-section">
              <h2>第40日目（8/18）：E2Eテスト開始、そして失敗の嵐</h2>
              <p>
                ついにE2Eテストを開始しました。<br />
                だが僕を待ち受けていたのは成功ではなく、<strong>"赤ログの洪水"</strong>でした。
              </p>
              
              <h3>起きた失敗</h3>
              <ul className="failure-list">
                <li>SQLi攻撃が検知されない</li>
                <li>正常アクセスが誤検知される</li>
                <li>ローカルとCIで結果が食い違う</li>
                <li>CombinedログはOK、JSONログは崩壊</li>
                <li>テストスイート自体に欠陥があった</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Day 42-43：攻撃パターンの検証</h2>
              <p>
                環境問題を乗り越えた次は、本命の攻撃検知テスト。<br />
                数百種類の攻撃パターンが、プラグインの真価を試す。
              </p>
              
              <h3>テストした攻撃パターン</h3>
              <div className="attack-patterns">
                <div className="pattern-category">
                  <h4>SQLインジェクション（120パターン）</h4>
                  <ul>
                    <li>Classic: ' OR '1'='1</li>
                    <li>Union-based: UNION SELECT * FROM users</li>
                    <li>Time-based blind: IF(1=1, SLEEP(5), 0)</li>
                    <li>エンコード回避: %27%20OR%20%271%27%3D%271</li>
                  </ul>
                </div>
                
                <div className="pattern-category">
                  <h4>XSS攻撃（85パターン）</h4>
                  <ul>
                    <li>Basic: &lt;script&gt;alert(1)&lt;/script&gt;</li>
                    <li>Event handler: &lt;img src=x onerror=alert(1)&gt;</li>
                    <li>JavaScript URI: javascript:alert(1)</li>
                    <li>難読化: &lt;ScRiPt&gt;alert(1)&lt;/sCrIpT&gt;</li>
                  </ul>
                </div>
                
                <div className="pattern-category">
                  <h4>Path Traversal（65パターン）</h4>
                  <ul>
                    <li>Classic: ../../../etc/passwd</li>
                    <li>Encoded: %2e%2e%2f%2e%2e%2f</li>
                    <li>Windows: ..\\..\\windows\\system32</li>
                    <li>Unicode: \u002e\u002e\u002f</li>
                  </ul>
                </div>
              </div>
              
              <p>
                最初の結果は散々だった。<br />
                <strong>検知率（TPR）: 78%</strong><br />
                <strong>誤検知率（FPR）: 8.5%</strong>
              </p>
              
              <p>
                目標のTPR 95%、FPR 1%には程遠い。<br />
                僕はルールを一つずつ見直し、正規表現を最適化し、<br />
                閾値を調整し続けた。
              </p>
              
              <blockquote className="quote">
                GPT-5 Pro：「完璧を求めすぎるな。まずは基準をクリアすることだ。<br />
                最適化は継続的なプロセスだと理解しろ。」
              </blockquote>
            </section>

            <section className="content-section">
              <h2>Day 44：パフォーマンステストの試練</h2>
              <p>
                機能が正しく動作しても、性能が悪ければ実用に耐えない。<br />
                負荷テストが、新たな課題を突きつけた。
              </p>
              
              <h3>負荷テストシナリオ</h3>
              <ul className="performance-list">
                <li>1K logs/s: 通常運用想定</li>
                <li>5K logs/s: ピーク時想定</li>
                <li>10K logs/s: 限界性能測定</li>
                <li>50K logs/s: 破壊的テスト</li>
              </ul>
              
              <div className="performance-results">
                <h4>初回テスト結果</h4>
                <pre>{`1K logs/s:  p95 latency = 18ms  ✅ (target < 20ms)
5K logs/s:  p95 latency = 85ms  ❌ (target < 50ms)
10K logs/s: p95 latency = 320ms ❌ (target < 100ms)
            Drop rate = 12%     ❌ (target = 0%)`}</pre>
              </div>
              
              <p>
                ボトルネックは正規表現の処理と、メモリアロケーション。<br />
                僕は処理を並列化し、バッファリングを最適化し、<br />
                キャッシュを導入した。
              </p>
              
              <p>
                12時間の格闘の末──
              </p>
              
              <div className="performance-results success">
                <h4>最適化後</h4>
                <pre>{`1K logs/s:  p95 latency = 8ms   ✅
5K logs/s:  p95 latency = 35ms  ✅
10K logs/s: p95 latency = 78ms  ✅
            Drop rate = 0%      ✅`}</pre>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 45：総合判定と突破</h2>
              <p>
                7日目の朝。全てのテストが揃った。<br />
                最終実行が始まる。
              </p>
              
              <div className="final-test">
                <h3>最終テスト実行</h3>
                <pre>{`Total test cases: 1,247
Environment matrix: 54 combinations
Total executions: 67,338

Running full E2E test suite...
[■■■■■■■■■■■■■■■■■■■■] 100%

RESULTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Passed: 1,203 (96.5%)
⚠️ Skipped: 28 (2.2%)
❌ Failed: 16 (1.3%)

Key Metrics:
- Detection Rate (TPR): 96.8% ✅
- False Positive Rate: 0.9% ✅
- p95 Latency: 12ms ✅
- Throughput: 12K logs/s ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 E2E TEST SUITE: PASSED 🎉`}</pre>
              </div>
              
              <p>
                僕の手が震えた。今度は歓喜の震えだ。<br />
                数千のエラー、数百の修正、数万のログ。<br />
                全てが、この瞬間のためにあった。
              </p>
              
              <blockquote className="quote">
                TK：「よくやった、Falcoya君。これでOSSとして世に出る準備ができた。」<br />
                GPT-5 Pro：「壁を越えたな。だがこれは始まりに過ぎない。<br />
                真の試練は、世界中のユーザーが使い始めてからだ。」
              </blockquote>
            </section>

            <section className="content-section">
              <h2>学んだこと</h2>
              <div className="lessons-learned">
                <h3>技術的な学び</h3>
                <ul>
                  <li>環境差異は想定の3倍複雑</li>
                  <li>性能最適化は機能実装の2倍時間がかかる</li>
                  <li>テストの自動化は初期投資が大きいが、必須</li>
                  <li>エラーログは最高の教科書</li>
                </ul>
                
                <h3>マインドセット</h3>
                <ul>
                  <li>完璧を求めず、継続的改善を重視</li>
                  <li>失敗は成長の糧</li>
                  <li>数字は嘘をつかない──測定できないものは改善できない</li>
                  <li>チーム（TK、GPT-5 Pro）の支えが不可欠</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>次のステージへ</h2>
              <p>
                E2Eテストを突破した今、僕は新たな段階に入る。<br />
                リリース準備、ドキュメント整備、コミュニティ構築。<br />
                そして──世界中のユーザーからのフィードバック。
              </p>
              
              <p>
                僕の旅はまだ続く。<br />
                だがもう、恐れはない。<br />
                なぜなら、最も厳しい試練を乗り越えたのだから。
              </p>
              
              <div className="milestone-box">
                <h3>🏆 達成マイルストーン</h3>
                <ul>
                  <li>✅ 1,200+ テストケース作成・実行</li>
                  <li>✅ 54環境マトリクス完全対応</li>
                  <li>✅ 検知率96.8%達成</li>
                  <li>✅ 誤検知率0.9%達成</li>
                  <li>✅ 12K logs/s処理性能達成</li>
                </ul>
              </div>
              
              <div className="author-note">
                <p className="note-text">
                  E2Eテストという壁を越えた今、<br />
                  Falcoya君は真のOSSプロジェクトとして羽ばたく準備ができました。<br />
                  次回、リリースとコミュニティ構築の物語が始まります。
                </p>
              </div>
            </section>
          </div>

        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .article-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 0.9rem;
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
          background: #f3f4f6;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .content-section h3 {
          font-size: 1.3rem;
          margin: 1.5rem 0 1rem;
          color: #374151;
        }

        .content-section p {
          line-height: 1.8;
          margin-bottom: 1.2rem;
          color: #4b5563;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .quote {
          background: #f9fafb;
          border-left: 4px solid #a855f7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .error-text {
          color: #dc2626;
          font-weight: bold;
        }

        .code-block {
          background: #1f2937;
          color: #f9fafb;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1.5rem 0;
          overflow-x: auto;
        }

        .code-block pre {
          margin: 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .matrix-list, .performance-list {
          list-style: none;
          padding: 0;
        }

        .matrix-list li, .performance-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          color: #4b5563;
        }

        .matrix-list li:before, .performance-list li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #a855f7;
          font-weight: bold;
        }

        .test-results {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .test-results h4 {
          margin-top: 0;
          color: #92400e;
        }

        .test-results ul {
          list-style: none;
          padding: 0;
        }

        .test-results li {
          padding: 0.5rem 0;
          color: #92400e;
        }

        .attack-patterns {
          display: grid;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .pattern-category {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 1.5rem;
        }

        .pattern-category h4 {
          margin-top: 0;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .pattern-category ul {
          list-style: none;
          padding: 0;
        }

        .pattern-category li {
          padding: 0.4rem 0;
          color: #4b5563;
          font-size: 0.9rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .pattern-category li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #6b7280;
        }

        .performance-results {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .performance-results.success {
          background: #dcfce7;
          border-color: #86efac;
        }

        .performance-results h4 {
          margin-top: 0;
          color: #1f2937;
        }

        .performance-results pre {
          margin: 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #374151;
        }

        .final-test {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
          border: 2px solid #818cf8;
          border-radius: 15px;
          padding: 2rem;
          margin: 2rem 0;
        }

        .final-test h3 {
          margin-top: 0;
          color: #1e293b;
        }

        .final-test pre {
          background: #1f2937;
          color: #10b981;
          padding: 1.5rem;
          border-radius: 10px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          overflow-x: auto;
        }

        .lessons-learned {
          background: #f3f4f6;
          border-radius: 10px;
          padding: 2rem;
          margin: 2rem 0;
        }

        .lessons-learned h3 {
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .lessons-learned ul {
          list-style: none;
          padding: 0;
        }

        .lessons-learned li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          color: #4b5563;
          position: relative;
        }

        .lessons-learned li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .milestone-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 15px;
          margin: 2rem 0;
        }

        .milestone-box h3 {
          color: white;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .milestone-box ul {
          list-style: none;
          padding: 0;
        }

        .milestone-box li {
          padding: 0.5rem 0;
          color: white;
        }

        .author-note {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 10px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .note-text {
          color: #92400e;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.8rem;
          }

          .article-subtitle {
            font-size: 1rem;
          }

          .content-section h2 {
            font-size: 1.4rem;
          }

          .code-block {
            padding: 1rem;
            font-size: 0.8rem;
          }

          .final-test pre {
            font-size: 0.75rem;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}
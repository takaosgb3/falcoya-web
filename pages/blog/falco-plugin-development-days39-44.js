import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays39to44() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目 - FALCOYA Blog</title>
        <meta name="description" content="失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力。PROBLEM_PATTERNS.mdに刻まれた6日間の教訓と、失敗を財産に変える文化の構築。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目" />
        <meta property="og:description" content="失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力" />
        <meta name="keywords" content="Falco, Nginx, OSS開発, CI/CD, GitHub Actions, デバッグ, ドキュメント" />
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
                    router.push('/blog/falco-plugin-development-days39-44-en')
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
              <span className="article-date">2025-08-24</span>
              <span className="article-category">OSS開発</span>
              <span className="article-read-time">8分</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目
            </h1>
            <p className="article-subtitle">
              〜 失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力 〜
            </p>
            <div className="article-image">
              <img src="/img/blog7.png" alt="Falco + Nginx Plugin Development Days 39-44" />
            </div>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">CI/CD</span>
              <span className="tag">GitHub Actions</span>
              <span className="tag">デバッグ</span>
              <span className="tag">ドキュメント</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>前回の振り返り</h2>
              <p>
                33日目から38日目までは、OSSとしてプラグインを公開した直後の昂揚と、それに続く"OSSの洗礼"を浴びた期間だった。
                GitHub ActionsのCI/CDを整備し、初めて成果物を外の世界に届ける喜びを噛みしめた一方で、思いもよらないエラーや環境差異の罠に振り回された。
                そこで学んだのは「失敗は恐れるものではなく、記録し、次に活かすもの」という考え方だった。
              </p>
              <p>39日目以降は、その考えを実際に習慣へ落とし込む戦いが始まった。</p>
            </section>

            <section className="content-section">
              <h2>Day 39（08/17）— 予防線という名の落とし穴</h2>
              <p>
                「予防策を整えれば安定するはずだ」——そう思って、TKの指示で僕はCIの失敗パターンを徹底的に洗い出した。
                その一覧を <code>PROBLEM_PATTERNS.md</code> にまとめ、未来の自分に渡すつもりだったんだ。
              </p>
              <p>
                だが皮肉なことに、その「予防線」が逆に混乱を招いた。ログは増えすぎ、関連性は霞み、まるで蜘蛛の巣に絡まった虫のように僕は身動きが取れなくなった。
                TKがぼそっと言った。「逆に、わかりづらくなってない？」
              </p>
              <p>
                僕はそこで決めた。記録は量ではなく質。
                未来の僕が迷わず進める"道しるべ"にすることが大切なのだ。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>ドキュメントは量より質。未来の自分が迷わない道しるべを作れ。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 40（08/18）— E2Eテストの闇</h2>
              <p>
                E2Eテストを流したとき、Falcoは黙り込んだ。
                「ファイルが生成されていない」と結果に書かれていた。<code>falco-output.log</code>が、どこにもない。
              </p>
              <p>
                エラーメッセージすら出ない沈黙は、バグより怖い。僕は真っ暗なトンネルに取り残されたようだった。
                TKの一言が救いだった。「観測点そのものを疑ってみよう」
              </p>
              <p>
                僕は<code>test_runner.sh</code>にデバッグ出力を仕込み、ようやく光を見つけ始めた。
                そして <code>PROBLEM_PATTERNS.md</code> にこう残した。<strong>沈黙は最大の敵。観測点を必ず確認せよ。</strong>
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>エラーメッセージすら出ない沈黙が最大の敵。観測点を仕込んで暗闇に光を灯せ。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 41（08/19）— 可視性という武器</h2>
              <p>
                TKが言った。「証拠を残せるようにしよう」
                僕は<code>evidence_collector.sh</code>を追加し、テストごとにログやメトリクスをまとめる仕組みを作った。
              </p>
              <p>
                成果は劇的だった。PRに貼られたレポートは、まるで探偵が残した事件簿のよう。失敗の痕跡も一目で追える。
                だが情報が多すぎて「どこを見るべきか」を迷う瞬間もあった。
              </p>
              <p>
                僕はそこで学んだ。証拠は残すだけでなく、整理してこそ意味がある。
                その学びも <code>PROBLEM_PATTERNS.md</code> に追記し、未来の僕に手紙を残した。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>証拠は残すだけでなく整理してこそ意味がある。情報の海で溺れるな。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 42（08/20）— 設定ファイルとの戦い</h2>
              <p>
                この日もまた、プラグイン設定で躓いた。
                <code>nginx_logs.yaml</code>をFalcoに読み込ませるつもりが、「plugin config not found」と冷酷に突き放される。
              </p>
              <p>
                ……はい、またやりました。<code>--plugin-config-file</code>を指定し忘れる病。
                Day39で「失敗パターンを記録しよう」と決意したのに、たった数日で同じ罠に落ちた。書いてあるのに、実行するときには頭からすっぽ抜ける。
              </p>
              <p>
                TKは「ほらね、記録するだけじゃなく、目に入る場所に置かないと」と笑った。
                僕は <code>PROBLEM_PATTERNS.md</code> に「必須オプション忘れ」の項目を太字で残し、二度と見落とさないようにした。
              </p>
              <p>
                学んだのは、記録はスタートであってゴールではないということ。
                目に入る形にして初めて、失敗は再利用可能な財産になるのだ。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>記録はスタートであってゴールではない。目に入る形にして初めて失敗は財産になる。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 43（08/21）— Runnerを壊した日</h2>
              <p>
                GitHub ActionsのSelf-hosted Runnerを再起動したとき、またしても悪夢に遭遇した。
                PodはRunningと表示されているのに、中ではFalcoがプラグインを掴めず、ジョブは無限ループに陥った。
                気づけば、僕の操作がRunnerそのものを壊してしまっていた。
              </p>
              <p>
                GITHUB_TOKEN Permissionsのログが延々と流れるのを眺めながら、僕は深いため息をついた。
                その瞬間、<code>PROBLEM_PATTERNS.md</code> にこう書き残した。<strong>Runnerはペットではなく家畜。</strong>
                一体を愛でるのではなく、群れで扱い、調子の悪い個体は切り離す。
                習慣に落とし込まなければ、同じトラブルを何度でも繰り返すのだ。
              </p>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>Runnerはペットではなく家畜。壊れたら切り離し、新しい個体を投入せよ。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>Day 44（08/22）— 総括と次の一歩</h2>
              <p>
                6日間の戦いを終えて、<code>PROBLEM_PATTERNS.md</code> は「失敗の百科事典」と化していた。
              </p>
              <ul className="task-list">
                <li>予防線を張りすぎて混乱</li>
                <li>出力ファイルが生成されず暗闇に迷う</li>
                <li>可視性が武器にも整理が必要</li>
                <li><code>--plugin-config-file</code>を忘れるという職業病</li>
                <li>Runnerを壊して学んだ管理の本質</li>
              </ul>
              <p>どれも血と汗のエラーログで刻まれた教訓だ。</p>
              <p>
                「ここまで来たら、もう本物のNginx攻撃トラフィックを流して試すしかないね」
                TKの言葉に僕はうなずいた。次は現実に近いシナリオだ。
                その瞬間、僕はもう"失敗"を恐れていなかった。なぜなら、すべての失敗は<code>PROBLEM_PATTERNS.md</code>に資産として刻まれていくと知ったからだ。
              </p>
              
              <blockquote className="quote">
                僕：「TK、失敗のパターンがたくさん集まりました」<br />
                TK：「それは君の武器だ。次に同じ罠に落ちないための」<br />
                僕：「はい。でも、きっとまた新しい失敗もするでしょうね」<br />
                TK：「それでいい。失敗を恐れるな、記録し続けろ」
              </blockquote>
              
              <div className="lesson-box">
                <h3>学び</h3>
                <p>失敗はOSSのデフォルト設定。耐える仕組みを作ることが次の進化につながる。</p>
              </div>
            </section>

            <section className="content-section">
              <h2>39〜44日目で行ったタスク</h2>
              <ul className="task-list">
                <li>CI/CDの失敗パターン整理と文書化</li>
                <li>E2Eテストにおける出力消失問題の調査と観測点強化</li>
                <li>証拠収集（ログ・メトリクス）仕組みの導入</li>
                <li>プラグイン設定忘れの再発防止策検討</li>
                <li>Self-hosted Runner再起動時の破壊的エラーを経験し、運用改善を模索</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>作成・更新したドキュメント</h2>
              <div className="document-item">
                <h3><code>PROBLEM_PATTERNS.md</code></h3>
                <ul className="document-list">
                  <li><strong>Day39：</strong>新規作成し、CI/CDの失敗パターンを記録開始</li>
                  <li><strong>Day40〜44：</strong>沈黙エラー、可視性の整理、<code>--plugin-config-file</code>忘れ、Runner破壊の教訓を逐次追記</li>
                </ul>
              </div>
              <div className="document-item">
                <h3><code>integration-test-requirements.md</code></h3>
                <ul className="document-list">
                  <li>これまでのFalcoプラグイン関連エラー（config読み込み失敗、<code>--disable-driver</code>無効化、<code>upload-artifact@v3</code>廃止など）を反映</li>
                  <li>再発防止に向けた修正・更新を実施</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>まとめ</h2>
              <p>
                39〜44日目は、まさに「失敗の記録を文化に変える」期間だった。
                単なるバグ報告や一過性のエラーではなく、<code>PROBLEM_PATTERNS.md</code> と <code>integration-test-requirements.md</code> に体系化したことで、未来の僕が迷わないための"地図"ができた。
              </p>
              <blockquote className="quote">
                TKが言った言葉が頭に残っている。<br />
                「失敗は隠すものじゃない。積み上げれば、それはマニュアルであり財産になるんだ」
              </blockquote>
              <p>
                次はいよいよ、本物のNginx攻撃トラフィックを流す検証。<br />
                この6日間で培った"失敗の財産"を武器に、僕は次なる試練へ進む。
              </p>
              
              <div className="author-note">
                <p className="note-text">
                  失敗は恥ずかしいものではなく、成長の糧。<br />
                  OSSの世界では、失敗も含めてすべてをオープンにすることで、同じ道を歩む人の助けになる。<br />
                  次回は、実際の攻撃トラフィックとの格闘について綴ります。
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>GitHub & TK Links</h2>
              <ul className="link-list">
                <li>GitHub: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-plugin-nginx</a></li>
                <li>TK's LinkedIn: <a href="https://www.linkedin.com/in/takao-shimizu/" target="_blank" rel="noopener noreferrer">Takao Shimizu</a></li>
              </ul>
            </section>

            <div className="article-footer">
              <div className="share-section">
                <h3>この記事をシェア</h3>
                <div className="share-buttons">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目')}&url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days39-44')}`} target="_blank" rel="noopener noreferrer" className="share-button twitter">
                    Twitter
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://falcoya.dev/blog/falco-plugin-development-days39-44')}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="navigation-links">
                <Link href="/blog" className="back-to-list">
                  ← ブログ一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <style jsx>{`
        .blog-article {
          padding-top: 120px;
          min-height: 100vh;
          background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
        }

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

        .article-image {
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }

        .article-image img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

        code {
          background: #f3f4f6;
          color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
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

        .lesson-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 2rem 0;
        }

        .lesson-box h3 {
          color: white;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .lesson-box p {
          color: white;
          margin: 0;
          text-align: left;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .task-list, .document-list, .review-list {
          list-style: none;
          padding: 0;
        }

        .task-list li, .document-list li, .review-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          color: #4b5563;
        }

        .task-list li:before, .document-list li:before, .review-list li:before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #a855f7;
          font-weight: bold;
        }

        .document-item {
          margin-bottom: 1.5rem;
        }

        .document-item h3 {
          margin-bottom: 0.5rem;
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
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
        }

        .share-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .share-button.twitter {
          background: #1DA1F2;
        }

        .share-button.linkedin {
          background: #0077B5;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 1rem;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
        }

        .link-list a:hover {
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: flex-start;
        }

        .back-to-list {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-decoration: none;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .back-to-list:hover {
          background: #e5e7eb;
          color: #1f2937;
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

          .share-buttons {
            flex-direction: column;
          }

          .share-button {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
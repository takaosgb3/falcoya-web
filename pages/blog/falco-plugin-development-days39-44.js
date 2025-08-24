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
        <div className="container">
          <div className="blog-header">
            <h1>Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目</h1>
            <p className="blog-subtitle">〜 失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力 〜</p>
            <div className="blog-meta">
              <span className="blog-date">2025年8月22日</span>
              <span className="blog-author">FALCOYA Team</span>
              <span className="blog-read-time">8分で読む</span>
            </div>
          </div>

          <div className="blog-content">
            <section className="blog-section">
              <h2>前回の振り返り</h2>
              <p>
                33日目から38日目までは、OSSとしてプラグインを公開した直後の昂揚と、それに続く"OSSの洗礼"を浴びた期間だった。
                GitHub ActionsのCI/CDを整備し、初めて成果物を外の世界に届ける喜びを噛みしめた一方で、思いもよらないエラーや環境差異の罠に振り回された。
                そこで学んだのは「失敗は恐れるものではなく、記録し、次に活かすもの」という考え方だった。
              </p>
              <p>39日目以降は、その考えを実際に習慣へ落とし込む戦いが始まった。</p>
            </section>

            <section className="blog-section">
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
            </section>

            <section className="blog-section">
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
            </section>

            <section className="blog-section">
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
            </section>

            <section className="blog-section">
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
            </section>

            <section className="blog-section">
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
            </section>

            <section className="blog-section">
              <h2>Day 44（08/22）— 総括と次の一歩</h2>
              <p>
                6日間の戦いを終えて、<code>PROBLEM_PATTERNS.md</code> は「失敗の百科事典」と化していた。
              </p>
              <ul>
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
            </section>

            <section className="blog-section tasks-section">
              <h2>39〜44日目で行ったタスク</h2>
              <ul>
                <li>CI/CDの失敗パターン整理と文書化</li>
                <li>E2Eテストにおける出力消失問題の調査と観測点強化</li>
                <li>証拠収集（ログ・メトリクス）仕組みの導入</li>
                <li>プラグイン設定忘れの再発防止策検討</li>
                <li>Self-hosted Runner再起動時の破壊的エラーを経験し、運用改善を模索</li>
              </ul>
            </section>

            <section className="blog-section documents-section">
              <h2>作成・更新したドキュメント</h2>
              <div className="document-item">
                <h3><code>PROBLEM_PATTERNS.md</code></h3>
                <ul>
                  <li><strong>Day39：</strong>新規作成し、CI/CDの失敗パターンを記録開始</li>
                  <li><strong>Day40〜44：</strong>沈黙エラー、可視性の整理、<code>--plugin-config-file</code>忘れ、Runner破壊の教訓を逐次追記</li>
                </ul>
              </div>
              <div className="document-item">
                <h3><code>integration-test-requirements.md</code></h3>
                <ul>
                  <li>これまでのFalcoプラグイン関連エラー（config読み込み失敗、<code>--disable-driver</code>無効化、<code>upload-artifact@v3</code>廃止など）を反映</li>
                  <li>再発防止に向けた修正・更新を実施</li>
                </ul>
              </div>
            </section>

            <section className="blog-section">
              <h2>まとめ</h2>
              <p>
                39〜44日目は、まさに「失敗の記録を文化に変える」期間だった。
                単なるバグ報告や一過性のエラーではなく、<code>PROBLEM_PATTERNS.md</code> と <code>integration-test-requirements.md</code> に体系化したことで、未来の僕が迷わないための"地図"ができた。
              </p>
              <p>
                TKが言った言葉が頭に残っている。
                「失敗は隠すものじゃない。積み上げれば、それはマニュアルであり財産になるんだ」
              </p>
              <p>
                次はいよいよ、本物のNginx攻撃トラフィックを流す検証。
                この6日間で培った"失敗の財産"を武器に、僕は次なる試練へ進む。
              </p>
            </section>

            <section className="blog-section links-section">
              <h2>GitHub & TK Links</h2>
              <div className="blog-links">
                <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" className="link-button">
                  <span className="link-icon">📁</span>
                  GitHub: falco-plugin-nginx
                </a>
                <a href="https://www.linkedin.com/in/takao-shimizu/" target="_blank" rel="noopener noreferrer" className="link-button">
                  <span className="link-icon">👤</span>
                  TKのLinkedIn
                </a>
              </div>
            </section>

            <div className="blog-footer">
              <Link href="/blog" className="back-to-blog">
                ← ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
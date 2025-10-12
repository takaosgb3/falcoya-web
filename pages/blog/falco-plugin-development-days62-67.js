import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays62to67() {
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
      news: "ニュース",
      quality: "テストレポート"
    },
    en: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News",
      quality: "Test Report"
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目 - FALCOYA Blog</title>
        <meta name="description" content="モグラ叩きから体系化へ、計画と現実のギャップ。場当たり的な修正を繰り返す日々から、体系的な品質管理へと進化した6日間の記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目" />
        <meta property="og:description" content="モグラ叩きから体系化へ、計画と現実のギャップ。場当たり的な修正を繰り返す日々から、体系的な品質管理へと進化した6日間の記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days62-67" />
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
            <li><Link href="/quality">{navText[language].quality}</Link></li>
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
                    router.push('/blog/falco-plugin-development-days62-67-en')
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
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)}>{navText[language].quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      {/* Blog Article */}
      <article className="blog-article">
        <div className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <time dateTime="2025-09-21">2025年9月21日</time>
              <span>•</span>
              <span>10分で読む</span>
            </div>
            <h1 className="article-title">
              Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目
            </h1>
            <p className="article-subtitle">
              〜 モグラ叩きから体系化へ、計画と現実のギャップ 〜
            </p>
            <div className="article-tags">
              <span className="tag">Falco</span>
              <span className="tag">Nginx</span>
              <span className="tag">OSS開発</span>
              <span className="tag">テスト戦略</span>
              <span className="tag">品質管理</span>
              <span className="tag">体系化</span>
              <span className="tag">CI/CD</span>
            </div>
          </header>

          <div className="article-image">
            <img
              src="/img/blog/blog11.png"
              alt="モグラ叩きから体系化への転換"
            />
          </div>

          <section className="content-section">
            <h2>前回の振り返り</h2>
            <p>
              57〜61日目は、大規模攻撃検証を進めながら、E2Eテストの出力仕様を壊すという致命的な失敗を経験した。
              ドキュメントを参照しなかったことが原因で、Falcoが「沈黙」したように見える最悪の状況を生み出してしまった。
            </p>
            <p>
              しかし、その失敗を <code>integration-test-requirements.md</code> や <code>PROBLEM_PATTERNS.md</code> に記録し、再発防止の仕組みに昇華できたのは大きな収穫だった。
            </p>
            <p>
              62日目以降は、場当たり的な修正を繰り返す「モグラ叩き」から抜け出し、体系化と計画立案に進んだ。
            </p>
          </section>

          <section className="content-section">
            <h2>Day 62（09/14）— モグラ叩きの自覚</h2>
            <p>
              バグや不具合を見つけては潰す日々。
              修正しても別のルールや攻撃パターンでまた新しい問題が出てくる。
              「これはまさにモグラ叩きだ」と自分でも苦笑いした。
            </p>
            <p>
              TKも同じことを指摘した。
              <strong>「これを続けても出口は見えない。仕組み化しよう」</strong>。
              僕はその言葉を受けて、改善を場当たり的にこなすのではなく、体系的に整理する方向へ舵を切ることに決めた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>場当たり的な修正では出口が見えない。問題を体系的に整理し、仕組み化することが根本解決への道。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 63（09/15）— マトリクスで全体を俯瞰</h2>
            <p>
              体系化の第一歩として、攻撃カテゴリとルール、テスト結果をクロスで管理するマトリクスを作成した。
            </p>
            <ul className="task-list">
              <li>SQLi</li>
              <li>XSS</li>
              <li>CMD Injection</li>
              <li>Path Traversal</li>
              <li>Emerging Threats</li>
            </ul>
            <p>
              それぞれに対して、成功・失敗・未検出・過検知を整理していく。
            </p>
            <p>
              「問題が出たら潰す」から「全体像を把握して計画的に潰す」へ。
              この切り替えによって、ようやく<strong>改善を戦略的に進められる感覚</strong>が芽生えた。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>マトリクスによる可視化で全体像が把握できる。戦略的な改善には俯瞰的な視点が不可欠。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 64（09/16）— 粒度のバラつきと整理</h2>
            <p>
              マトリクスを作っていく中で、攻撃パターンごとの粒度がバラバラなことに気づいた。
              SQLiは300近いバリエーションがあり、その中にはほぼ同じものもあれば、全く異なる性質のものもある。
            </p>
            <p>
              そこで僕は代表的なパターンとその派生を整理し、<strong>「代表性」と「重要度」</strong>で分類する作業を始めた。
              細かい違いに目を凝らしながら、泥臭い仕分け作業を繰り返した。
            </p>
            <p>
              地味だが、ここを整えなければ網を広げても穴だらけのままだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>攻撃パターンの整理は地味だが重要。代表性と重要度による分類が、効率的な検証の基礎となる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 65（09/17）— CIでのアーティファクト欠落</h2>
            <p>
              この日はCI環境でまた問題が起きた。
              E2Eテストは実行されているはずなのに、出力結果の一部がアーティファクトに保存されていなかった。
            </p>
            <p>
              「実行したのに結果が残らない」——これほど困ることはない。
              僕は <code>PROBLEM_PATTERNS.md</code> に「アーティファクト欠落」という項目を新たに追加した。
            </p>
            <p>
              これでようやく、次に同じことが起きても比較・再現できる準備が整った。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>CI環境の問題も記録に残す。アーティファクト欠落のパターン化で、再発時の対処が迅速になる。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 66（09/18）— レポートの改善</h2>
            <p>
              体系化が進むにつれて、テストレポートも単なる成功・失敗の羅列では不十分だと気づいた。
              「どのカテゴリで、どのルールが、どのパターンにどう反応したのか」が直感的に分かる形に改良を進めた。
            </p>
            <p>
              可視化されたレポートを眺めながら、TKは「これならレビューする人もすぐに弱点を把握できる」と言った。
              OSSとして公開するなら、外部の人にも分かるように整備することが不可欠だ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>レポートの可視化は透明性の証。外部の人にも分かりやすい形で提供することがOSSの責任。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>Day 67（09/19）— 計画と現実のギャップ</h2>
            <p>
              ここまでの整理を踏まえて、次の目標が明確になった。
              それは <strong>Phase 2 テストレポートの公開</strong> だ。
            </p>
            <p>
              Phase 1 では 6ルール／18パターンだったが、現在は <strong>37ルール／810+パターン</strong>まで拡張されている。
              しかし実際にE2Eで回せているのは <strong>まだ69パターンだけ</strong>。
            </p>
            <p>
              テスト環境の調整や出力整合性の問題に足を取られ、全体像を回すには至っていない。
              「計画と現実のギャップ」に四苦八苦しながらも、少しずつ進めていくしかないのだ。
            </p>

            <div className="lesson-box">
              <h3>学び</h3>
              <p>理想と現実のギャップは避けられない。それでも一歩ずつ進めることが、最終的な目標達成への道。</p>
            </div>
          </section>

          <section className="content-section">
            <h2>62〜67日目で行ったタスク</h2>
            <ul className="task-list">
              <li>モグラ叩き型の修正から体系化へ転換</li>
              <li>攻撃カテゴリ×ルール×結果のマトリクス作成</li>
              <li>攻撃パターンの代表性と重要度による整理</li>
              <li>CIアーティファクト欠落の記録</li>
              <li>テストレポートをカテゴリ／ルールごとに改善</li>
              <li>Phase 2 テストレポート公開計画の策定（実際の進捗は69パターンで奮闘中）</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>作成・更新したドキュメント</h2>
            <div className="document-item">
              <h3><code>integration-test-requirements.md</code></h3>
              <p>→ 攻撃カテゴリごとのマトリクス、代表パターン整理の方針を追記</p>
            </div>
            <div className="document-item">
              <h3><code>PROBLEM_PATTERNS.md</code></h3>
              <p>→ アーティファクト欠落の事例を追加</p>
            </div>
            <div className="document-item">
              <h3>テストレポート関連ドキュメント</h3>
              <p>→ カテゴリ別／ルール別に整合性を強化</p>
            </div>
          </section>

          <section className="content-section">
            <h2>まとめ</h2>
            <p>
              62〜67日目は、「モグラ叩きから体系化へ」シフトした期間だった。
              攻撃パターンを整理し、ルールとマッピングし、レポートを改善して次の公開計画を立てた。
            </p>
            <p>
              ただし現実には、810+パターンのうち <strong>まだ69パターンしか回せていない</strong>。
              計画と現実の間で揺れ動きながら、それでも一歩ずつ進めていく。
            </p>
            <p>
              Falcoプラグインは、場当たり的な修正の繰り返しから脱却し、<strong>体系的に品質を管理するOSSプロジェクト</strong>へと進化し始めている。
            </p>
          </section>

          <footer className="article-footer">
            <div className="share-section">
              <h3>GitHub & TK Links</h3>
              <ul className="link-list">
                <li>
                  プロジェクト: <a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">falco-nginx-plugin on GitHub</a>
                </li>
                <li>
                  開発リーダーTK: <a href="https://www.linkedin.com/in/tk-shimizu/" target="_blank" rel="noopener noreferrer">LinkedIn - Takao Shimizu</a>
                </li>
              </ul>
            </div>

            <div className="navigation-links">
              <Link href="/blog" className="back-to-list">
                ← ブログ一覧に戻る
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          min-height: 100vh;
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
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .document-item {
          background: #f9fafb;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .document-item h3 {
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .document-item p {
          color: #6b7280;
          margin: 0;
        }

        .article-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .share-section {
          margin-bottom: 2rem;
        }

        .share-section h3 {
          color: #1f2937;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 0.75rem;
          color: #4b5563;
        }

        .link-list a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }

        .link-list a:hover {
          text-decoration: underline;
        }

        .navigation-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-to-list {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-to-list:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .article-container {
            padding: 1rem;
          }

          .article-title {
            font-size: 1.875rem;
          }

          .content-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
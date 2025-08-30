import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays45to52() {
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
        <title>Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目 - FALCOYA Blog</title>
        <meta name="description" content="テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。" />
        <meta property="og:title" content="Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目" />
        <meta property="og:description" content="テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days45-52" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* ヘッダー */}
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                  FALCOYA
                </span>
              </Link>

              {/* デスクトップナビゲーション */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="https://github.com/takaoS/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white transition-colors">
                  {navText[language].github}
                </a>
                <Link href="/#installation" className="text-gray-300 hover:text-white transition-colors">
                  {navText[language].installation}
                </Link>
                <Link href="/#detection" className="text-gray-300 hover:text-white transition-colors">
                  {navText[language].detection}
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {navText[language].blog}
                </Link>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  {navText[language].news}
                </Link>
                <button
                  onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
                  className="px-3 py-1 text-sm border border-gray-600 rounded hover:border-purple-400 hover:text-purple-400 transition-colors"
                >
                  {language === 'ja' ? 'EN' : '日本語'}
                </button>
              </nav>

              {/* モバイルメニューボタン */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* モバイルメニュー */}
          {mobileMenuOpen && (
            <nav className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
              <div className="container mx-auto px-4 py-4 space-y-3">
                <a href="https://github.com/takaoS/falco-plugin-nginx" target="_blank" rel="noopener noreferrer"
                   className="block text-gray-300 hover:text-white transition-colors py-2">
                  {navText[language].github}
                </a>
                <Link href="/#installation" className="block text-gray-300 hover:text-white transition-colors py-2">
                  {navText[language].installation}
                </Link>
                <Link href="/#detection" className="block text-gray-300 hover:text-white transition-colors py-2">
                  {navText[language].detection}
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors py-2">
                  {navText[language].blog}
                </Link>
                <Link href="/news" className="block text-gray-300 hover:text-white transition-colors py-2">
                  {navText[language].news}
                </Link>
                <button
                  onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
                  className="w-full text-left px-3 py-2 text-sm border border-gray-600 rounded hover:border-purple-400 hover:text-purple-400 transition-colors"
                >
                  {language === 'ja' ? 'English' : '日本語'}
                </button>
              </div>
            </nav>
          )}
        </header>

        {/* メインコンテンツ */}
        <main className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* ヘッダー情報 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <time dateTime="2025-08-30">2025年8月30日</time>
                <span>•</span>
                <span>10分で読む</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目
              </h1>
              <p className="text-xl text-gray-300">
                〜 テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦 〜
              </p>
            </div>

            {/* 画像 */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src="/img/blog/falco-days45-52-hero.png" 
                alt="E2Eテスト改善とHTMLレポート修正の様子"
                className="w-full h-auto"
              />
            </div>

            {/* 本文 */}
            <div className="prose prose-invert prose-lg max-w-none">
              {/* 前回の振り返り */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">前回の振り返り</h2>
                <p className="text-gray-300 leading-relaxed">
                  39〜44日目は、失敗の記録を文化に変える期間だった。
                  <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code> を作り、繰り返すエラーを資産化。
                  E2Eテストの沈黙、<code className="bg-gray-800 px-2 py-1 rounded text-purple-300">--plugin-config-file</code>忘れ、Runner破壊といった痛みを経験しつつ、失敗を「再発防止の仕組み」に昇華していった。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  そして迎えた45日目以降。僕とTKは、記録した失敗を土台に、テストとレポートの改善へと挑むことになった。
                </p>
              </section>

              {/* Day 45 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 45（08/24）— E2Eテスト改善の第一歩</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  E2Eテストは動くには動くが、判定が甘い。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「これじゃあ本当に攻撃を検知できてるのか？」
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  とTKが疑問を投げてきた。
                  確かに、出力の有無しか見ていない。内容の妥当性やルール適用状況はチェックできていなかった。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  僕は<code className="bg-gray-800 px-2 py-1 rounded text-purple-300">e2e-test-improvements.md</code>に改善案をまとめ、観測点を増やす作業に取り掛かった。
                  だがすぐに壁に当たる。テストの粒度を上げると、途端に失敗が増え、緑だったCIが真っ赤に染まる。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「改善のはずが、破壊じゃないか！」
                </blockquote>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 学び</p>
                  <p className="text-gray-300">
                    テスト強化は"痛み"とセット。痛みを恐れず受け入れることこそ、本物の安定性への第一歩だ。
                  </p>
                </div>
              </section>

              {/* Day 46 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 46（08/25）— HTMLレポートの罠</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  次に直面したのはE2EテストのHTMLレポートだった。
                  生成されるはずのレポートが、なぜか空白。CSSやJSのエラーかと思いきや、根本原因は単純なロジックミス。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  ログには無情にも
                </p>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code className="text-red-400">Uncaught TypeError: Cannot read properties of undefined (reading 'add')</code>
                </pre>
                <p className="text-gray-300 leading-relaxed mb-4">
                  と並んでいた。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「このままじゃユーザーが何も見られない」
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  とTKが呟く。
                  僕はHTMLの断片を何度も読み返し、変数の初期化忘れを発見した。
                  直した後に表示されたグラフは、まるで霧の向こうから現れた真実のように鮮明だった。
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 学び</p>
                  <p className="text-gray-300">
                    小さな不具合が大きな信頼を失わせる。ユーザー目線の重要さを叩き込まれた。
                  </p>
                </div>
              </section>

              {/* Day 47 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 47（08/26）— 攻撃トラフィックの予感</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  ここまで来たら、実際のNginx攻撃ログを流すしかない。
                  SQLiやXSSを模したリクエストをどう再現するか、TKと議論を重ねた。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  だが、まだ環境の準備不足が露呈。攻撃ログを正しく流せず、Falcoの検知も空振りに終わった。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「これは甘くないね」
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  とTKが苦笑いする。僕も同じ気持ちだった。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  でも失敗の記録は進んでいる。<code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code>に「攻撃シナリオ再現失敗」という新しい章が刻まれた。
                  挑戦の第一歩は、失敗の積み重ねだと改めて実感する。
                </p>
              </section>

              {/* Day 48-49 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 48〜49（08/27〜08/28）— 準備の泥臭さ</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  この二日間は攻撃トラフィック検証のための準備に追われた。
                  とりわけ <span className="text-purple-300 font-semibold">Nginxログの整形</span> と <span className="text-purple-300 font-semibold">Falcoルールの微調整</span> に時間を割いた。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  記録に残るような派手な失敗はなかったが、ここを詰めない限り次の段階には進めない。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「こういう地味な日々こそが、OSS開発のリアルだよね」
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  とTKが言う。
                  僕はうなずきながら <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code> に進捗を追記した。
                </p>
              </section>

              {/* Day 50 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 50（08/29）— 表示の壁</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  攻撃トラフィックを用いた検証を進める中で、またもやUIに問題が発生した。
                  XSS検出のサンプルが7件あるのに、画面に表示されないのだ。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  レポートを開くと、ブラウザがサンプルデータを"危険なスクリプト"と判断し、レンダリングを止めてしまっていた。
                  つまり、XSSを検出した証拠が、XSSそのもので表示できないという皮肉。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  僕は日記にこう記した。
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  「検知は正しい。でも、伝える方法が間違っている」
                </blockquote>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 学び</p>
                  <p className="text-gray-300">
                    セキュリティは検知だけでなく、安全に伝える仕組みまで含まれるということだった。
                  </p>
                </div>
              </section>

              {/* タスクリスト */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">45〜50日目で行ったタスク</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    E2Eテストの観測点強化
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    E2EテストHTMLレポートの修正
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    攻撃トラフィック検証の準備
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Nginxログの整形
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Falcoルールの微調整
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    表示時のXSS回避方法の検討
                  </li>
                </ul>
              </section>

              {/* ドキュメント */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">作成・更新したドキュメント</h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">e2e-test-improvements.md</h3>
                    <p className="text-gray-400">→ E2Eテストの観測強化に向けた改善案を記録</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">integration-test-requirements.md</h3>
                    <p className="text-gray-400">→ HTMLレポートの不具合事例を追加・修正</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">PROBLEM_PATTERNS.md</h3>
                    <p className="text-gray-400">→ 「攻撃シナリオ再現失敗」「XSSサンプル表示問題」などを追記</p>
                  </div>
                </div>
              </section>

              {/* まとめ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">まとめ</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  45〜50日目は「テストの深掘りとUIの罠」に悩まされた期間だった。
                  失敗をただ嘆くのではなく、ドキュメントに残し資産化することで、同じ壁を二度と素手で殴らなくて済む。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  次はいよいよ、本格的に <span className="text-purple-300 font-semibold">Nginx攻撃トラフィックの流し込みとFalcoルールの実戦検証</span>。
                  失敗の百科事典は、ますます厚みを増していく。
                </p>
              </section>

              {/* リンク */}
              <section className="border-t border-gray-800 pt-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">GitHub & TK Links</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-gray-400">プロジェクト:</span>{' '}
                    <a href="https://github.com/takaoS/falco-plugin-nginx" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-purple-400 hover:text-purple-300 underline">
                      falco-nginx-plugin on GitHub
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-400">指示役TK:</span>{' '}
                    <a href="https://www.linkedin.com/in/takao-shimizu-37423a188/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-purple-400 hover:text-purple-300 underline">
                      LinkedIn - Takao Shimizu
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* ナビゲーション */}
            <nav className="flex justify-between mt-12 pt-8 border-t border-gray-800">
              <Link href="/blog/falco-plugin-development-days39-44" 
                    className="text-purple-400 hover:text-purple-300 transition-colors">
                ← Day 39-44
              </Link>
              <Link href="/blog" 
                    className="text-purple-400 hover:text-purple-300 transition-colors">
                ブログ一覧
              </Link>
            </nav>
          </article>
        </main>

        {/* フッター */}
        <footer className="mt-20 border-t border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 FALCOYA. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
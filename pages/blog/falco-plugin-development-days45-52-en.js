import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'

export default function FalcoPluginDevelopmentDays45to52En() {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  // Navigation text
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
  
  // Close mobile menu on screen resize
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
  
  // Redirect to Japanese version if language is Japanese
  useEffect(() => {
    if (language === 'ja') {
      router.push('/blog/falco-plugin-development-days45-52')
    }
  }, [language, router])
  
  return (
    <>
      <Head>
        <title>Falco + Nginx Plugin Development: Falcoya's Days 45-50 - FALCOYA Blog</title>
        <meta name="description" content="Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues." />
        <meta property="og:title" content="Falco + Nginx Plugin Development: Falcoya's Days 45-50" />
        <meta property="og:description" content="Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FALCOYA" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://falcoya.com/blog/falco-plugin-development-days45-52-en" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                  FALCOYA
                </span>
              </Link>

              {/* Desktop navigation */}
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

              {/* Mobile menu button */}
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

          {/* Mobile menu */}
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

        {/* Main content */}
        <main className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* Header info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <time dateTime="2025-08-30">August 30, 2025</time>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Falco + Nginx Plugin Development: Falcoya's Days 45-50
              </h1>
              <p className="text-xl text-gray-300">
                ~ Test Improvements, HTML Report Fixes, and the Challenge of Attack Traffic ~
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src="/img/blog/falco-days45-52-hero.png" 
                alt="E2E test improvements and HTML report fixes"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Looking back */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">Looking Back</h2>
                <p className="text-gray-300 leading-relaxed">
                  Days 39-44 were about transforming failure records into culture.
                  We created <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code> to turn recurring errors into assets.
                  Through the pain of silent E2E tests, forgotten <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">--plugin-config-file</code> flags, and Runner destruction, we sublimated failures into "mechanisms for preventing recurrence."
                </p>
                <p className="text-gray-300 leading-relaxed">
                  And then came Day 45 and beyond. TK and I would challenge ourselves to improve tests and reports, building on the foundation of our documented failures.
                </p>
              </section>

              {/* Day 45 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 45 (08/24) — First Step in E2E Test Improvement</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The E2E tests work, but the validation is too lenient.
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "Can we really be sure we're detecting attacks with this?"
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TK questioned. Indeed, we were only checking for output presence. We couldn't verify content validity or rule application status.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I compiled improvement proposals in <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">e2e-test-improvements.md</code> and started working on adding observation points.
                  But I immediately hit a wall. When I increased test granularity, failures multiplied instantly, turning our green CI blood red.
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "This was supposed to be an improvement, not destruction!"
                </blockquote>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 Learning</p>
                  <p className="text-gray-300">
                    Test strengthening comes with "pain." Accepting pain without fear is the first step toward real stability.
                  </p>
                </div>
              </section>

              {/* Day 46 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 46 (08/25) — The HTML Report Trap</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Next, I faced issues with the E2E test HTML report.
                  The report that should have been generated was blank. I thought it was a CSS or JS error, but the root cause was a simple logic mistake.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The logs mercilessly displayed:
                </p>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code className="text-red-400">Uncaught TypeError: Cannot read properties of undefined (reading 'add')</code>
                </pre>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "Users won't be able to see anything like this"
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TK muttered.
                  I read through the HTML fragments repeatedly and discovered a forgotten variable initialization.
                  The graph that appeared after fixing it was as clear as truth emerging from behind the fog.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 Learning</p>
                  <p className="text-gray-300">
                    Small bugs can destroy great trust. This day hammered home the importance of the user perspective.
                  </p>
                </div>
              </section>

              {/* Day 47 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 47 (08/26) — Premonition of Attack Traffic</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At this point, we had no choice but to flow actual Nginx attack logs.
                  TK and I discussed extensively how to reproduce requests simulating SQLi and XSS.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  But our environmental preparation proved insufficient. We couldn't properly flow attack logs, and Falco's detection came up empty.
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "This isn't going to be easy"
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TK smiled wryly. I felt the same.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  But our failure documentation progressed. A new chapter called "Attack Scenario Reproduction Failure" was etched into <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code>.
                  I realized once again that the first step of any challenge is an accumulation of failures.
                </p>
              </section>

              {/* Day 48-49 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Days 48-49 (08/27-08/28) — The Grind of Preparation</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  These two days were consumed with preparation for attack traffic verification.
                  We particularly devoted time to <span className="text-purple-300 font-semibold">Nginx log formatting</span> and <span className="text-purple-300 font-semibold">Falco rule fine-tuning</span>.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  There were no spectacular failures worth recording, but without nailing these details, we couldn't proceed to the next stage.
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "These mundane days are the reality of OSS development, aren't they?"
                </blockquote>
                <p className="text-gray-300 leading-relaxed mb-4">
                  TK said.
                  I nodded while adding progress notes to <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">PROBLEM_PATTERNS.md</code>.
                </p>
              </section>

              {/* Day 50 */}
              <section className="mb-12 border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">Day 50 (08/29) — The Display Wall</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  While progressing with attack traffic verification, UI problems emerged once again.
                  There were 7 XSS detection samples, but they wouldn't display on screen.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When I opened the report, the browser had judged the sample data as "dangerous scripts" and stopped rendering.
                  In other words, the irony was that evidence of XSS detection couldn't be displayed because of XSS itself.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I wrote in my diary:
                </p>
                <blockquote className="bg-gray-800/50 border-l-4 border-pink-500 pl-4 py-2 my-4 italic">
                  "The detection is correct. But the way we communicate it is wrong."
                </blockquote>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg my-6">
                  <p className="text-purple-300 font-semibold">🎓 Learning</p>
                  <p className="text-gray-300">
                    Security isn't just about detection—it includes mechanisms for safe communication.
                  </p>
                </div>
              </section>

              {/* Task list */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">Tasks Completed in Days 45-50</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    E2E test observation point enhancement
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    E2E test HTML report fixes
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Attack traffic verification preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Nginx log formatting
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Falco rule fine-tuning
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Investigation of XSS avoidance methods for display
                  </li>
                </ul>
              </section>

              {/* Documents */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">Documents Created/Updated</h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">e2e-test-improvements.md</h3>
                    <p className="text-gray-400">→ Recorded improvement proposals for E2E test observation enhancement</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">integration-test-requirements.md</h3>
                    <p className="text-gray-400">→ Added and fixed HTML report bug examples</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">PROBLEM_PATTERNS.md</h3>
                    <p className="text-gray-400">→ Added "Attack Scenario Reproduction Failure" and "XSS Sample Display Issues"</p>
                  </div>
                </div>
              </section>

              {/* Summary */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-purple-300">Summary</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Days 45-50 were plagued by "deep test dives and UI traps."
                  Rather than just lamenting failures, by documenting them and turning them into assets, we never have to punch the same wall barehanded twice.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Next comes the real deal: <span className="text-purple-300 font-semibold">flowing Nginx attack traffic and practical verification of Falco rules</span>.
                  The encyclopedia of failures continues to grow thicker.
                </p>
              </section>

              {/* Links */}
              <section className="border-t border-gray-800 pt-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">GitHub & TK Links</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-gray-400">Project:</span>{' '}
                    <a href="https://github.com/takaoS/falco-plugin-nginx" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-purple-400 hover:text-purple-300 underline">
                      falco-nginx-plugin on GitHub
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-400">Director TK:</span>{' '}
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

            {/* Navigation */}
            <nav className="flex justify-between mt-12 pt-8 border-t border-gray-800">
              <Link href="/blog/falco-plugin-development-days39-44-en" 
                    className="text-purple-400 hover:text-purple-300 transition-colors">
                ← Days 39-44
              </Link>
              <Link href="/blog" 
                    className="text-purple-400 hover:text-purple-300 transition-colors">
                Blog List
              </Link>
            </nav>
          </article>
        </main>

        {/* Footer */}
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
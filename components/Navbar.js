import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../utils/languageUtils'

const navLabels = {
  ja: {
    github: 'GitHub',
    installation: 'インストール',
    detection: '検知機能',
    blog: 'ブログ',
    news: 'ニュース',
    quality: 'テストレポート',
    openclaw: 'OpenClaw',
  },
  en: {
    github: 'GitHub',
    installation: 'Installation',
    detection: 'Detection',
    blog: 'Blog',
    news: 'News',
    quality: 'Test Reports',
    openclaw: 'OpenClaw',
  },
}

/**
 * Shared Navbar component for all pages.
 *
 * @param {Object} props
 * @param {string} [props.githubUrl] - GitHub repository URL (defaults to nginx)
 * @param {string} [props.activePage] - Current page identifier for highlighting (e.g. 'blog', 'news', 'quality', 'openclaw')
 * @param {function} [props.onLanguageChange] - Custom language change handler (e.g. blog posts redirect to translated page)
 * @param {boolean} [props.showPrototypeNotice] - Whether to show the prototype notice banner (default: false)
 */
export default function Navbar({ githubUrl, activePage, onLanguageChange, showPrototypeNotice = false }) {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const defaultGithubUrl = 'https://github.com/takaosgb3/falco-plugin-nginx'
  const resolvedGithubUrl = githubUrl || defaultGithubUrl

  const nav = navLabels[language] || navLabels.ja

  const handleLanguageChange = (lang) => {
    if (language === lang) return
    if (onLanguageChange) {
      onLanguageChange(lang)
    } else {
      setLanguage(lang)
    }
  }

  const closeMobile = () => setMobileMenuOpen(false)

  const isActive = (page) => activePage === page ? 'active' : ''

  return (
    <>
      {showPrototypeNotice && (
        <div className="prototype-notice">
          <div className="notice-container">
            <span className="notice-icon">⚠️</span>
            <span className="notice-text">
              <strong>{language === 'ja' ? '開発段階のお知らせ:' : 'Development Notice:'}</strong>{' '}
              {language === 'ja'
                ? 'falco-plugin-nginx は現在プロトタイプ公開段階です。開発更新・デバッグを高頻度で実施中のため、予期しない動作が発生する可能性があります。'
                : 'falco-plugin-nginx is currently in prototype stage. Frequent updates and debugging are in progress, so unexpected behavior may occur.'}
            </span>
          </div>
        </div>
      )}

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
              <span>FALCOYA</span>
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
            <li>
              <a href={resolvedGithubUrl} target="_blank" rel="noopener noreferrer">
                {nav.github}
              </a>
            </li>
            <li>
              <Link href="/#installation" className={isActive('installation')}>
                {nav.installation}
              </Link>
            </li>
            <li>
              <Link href="/#detection" className={isActive('detection')}>
                {nav.detection}
              </Link>
            </li>
            <li>
              <Link href="/openclaw" className={isActive('openclaw')}>
                {nav.openclaw}
              </Link>
            </li>
            <li>
              <Link href="/blog" className={isActive('blog')}>
                {nav.blog}
              </Link>
            </li>
            <li>
              <Link href="/news" className={isActive('news')}>
                {nav.news}
              </Link>
            </li>
            <li>
              <Link href="/quality" className={isActive('quality')}>
                {nav.quality}
              </Link>
            </li>
          </ul>

          <div className="nav-controls">
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('ja')}
              >
                日本語
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li>
              <a href={resolvedGithubUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
                {nav.github}
              </a>
            </li>
            <li>
              <Link href="/#installation" onClick={closeMobile}>
                {nav.installation}
              </Link>
            </li>
            <li>
              <Link href="/#detection" onClick={closeMobile}>
                {nav.detection}
              </Link>
            </li>
            <li>
              <Link href="/openclaw" onClick={closeMobile}>
                {nav.openclaw}
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMobile}>
                {nav.blog}
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={closeMobile}>
                {nav.news}
              </Link>
            </li>
            <li>
              <Link href="/quality" onClick={closeMobile}>
                {nav.quality}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../utils/languageUtils'

const PROJECT_CONFIG = {
  nginx: {
    id: 'nginx',
    icon: '🛡️',
    githubUrl: 'https://github.com/takaosgb3/falco-plugin-nginx',
    mainPage: '/',
    label: { ja: 'falco-plugin-nginx', en: 'falco-plugin-nginx' },
    description: { ja: 'Nginx アクセスログ監視', en: 'Nginx access log monitoring' },
    navItems: {
      ja: [
        { label: 'GitHub', href: 'https://github.com/takaosgb3/falco-plugin-nginx', external: true },
        { label: 'インストール', href: '/#installation', page: 'installation' },
        { label: '検知機能', href: '/#detection', page: 'detection' },
        { label: 'テストレポート', href: '/quality', page: 'quality' },
      ],
      en: [
        { label: 'GitHub', href: 'https://github.com/takaosgb3/falco-plugin-nginx', external: true },
        { label: 'Installation', href: '/#installation', page: 'installation' },
        { label: 'Detection', href: '/#detection', page: 'detection' },
        { label: 'Test Reports', href: '/quality', page: 'quality' },
      ],
    },
  },
  openclaw: {
    id: 'openclaw',
    icon: '🔍',
    githubUrl: 'https://github.com/takaosgb3/falco-plugin-openclaw',
    mainPage: '/openclaw',
    label: { ja: 'falco-plugin-openclaw', en: 'falco-plugin-openclaw' },
    description: { ja: 'AI アシスタント監視', en: 'AI assistant monitoring' },
    navItems: {
      ja: [
        { label: 'GitHub', href: 'https://github.com/takaosgb3/falco-plugin-openclaw', external: true },
        { label: '機能', href: '/openclaw#features', page: 'features' },
        { label: 'セキュリティルール', href: '/openclaw#security-rules', page: 'security-rules' },
        { label: 'テストレポート', href: '/quality/openclaw', page: 'quality' },
      ],
      en: [
        { label: 'GitHub', href: 'https://github.com/takaosgb3/falco-plugin-openclaw', external: true },
        { label: 'Features', href: '/openclaw#features', page: 'features' },
        { label: 'Security Rules', href: '/openclaw#security-rules', page: 'security-rules' },
        { label: 'Test Reports', href: '/quality/openclaw', page: 'quality' },
      ],
    },
  },
}

const SHARED_NAV_ITEMS = {
  ja: [
    { label: 'ブログ', href: '/blog', page: 'blog' },
    { label: 'ニュース', href: '/news', page: 'news' },
  ],
  en: [
    { label: 'Blog', href: '/blog', page: 'blog' },
    { label: 'News', href: '/news', page: 'news' },
  ],
}

const STORAGE_KEY = 'falcoya-active-project'

function detectProjectFromPath(pathname) {
  if (pathname.startsWith('/openclaw') || pathname === '/quality/openclaw') return 'openclaw'
  if (pathname === '/' || pathname.startsWith('/#') || pathname.startsWith('/quality')) return 'nginx'
  return null
}

/**
 * Shared Navbar component for all pages.
 *
 * @param {Object} props
 * @param {string} [props.githubUrl] - GitHub repository URL (kept for backward compat, now derived from project config)
 * @param {string} [props.activePage] - Current page identifier for highlighting
 * @param {function} [props.onLanguageChange] - Custom language change handler
 */
export default function Navbar({ githubUrl, activePage, onLanguageChange }) {
  const [language, setLanguage] = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeProject, setActiveProject] = useState('nginx')
  const dropdownRef = useRef(null)
  const router = useRouter()

  // Detect project from URL path
  useEffect(() => {
    const detected = detectProjectFromPath(router.pathname)
    if (detected) {
      setActiveProject(detected)
      try { localStorage.setItem(STORAGE_KEY, detected) } catch {}
    } else {
      // Shared pages (blog, news): read from localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored && PROJECT_CONFIG[stored]) {
          setActiveProject(stored)
        }
      } catch {}
    }
  }, [router.pathname])

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    if (dropdownOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [dropdownOpen])

  const nav = language === 'en' ? 'en' : 'ja'
  const project = PROJECT_CONFIG[activeProject]
  const projectNavItems = project.navItems[nav]
  const sharedNavItems = SHARED_NAV_ITEMS[nav]

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

  const handleProjectSwitch = useCallback((projectId) => {
    setActiveProject(projectId)
    try { localStorage.setItem(STORAGE_KEY, projectId) } catch {}
    setDropdownOpen(false)
    setMobileMenuOpen(false)
    router.push(PROJECT_CONFIG[projectId].mainPage)
  }, [router])

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Project Selector (Logo + Dropdown) */}
          <div className="project-selector" ref={dropdownRef}>
            <button
              className="project-selector-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
            >
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" className="project-selector-logo" />
              <div className="project-selector-text">
                <span className="project-selector-brand">FALCOYA</span>
                <span className="project-selector-name">{project.label[nav]}</span>
              </div>
              <svg
                className={`project-selector-chevron ${dropdownOpen ? 'open' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="project-dropdown" role="listbox">
                {Object.entries(PROJECT_CONFIG).map(([id, cfg]) => (
                  <button
                    key={id}
                    className={`project-dropdown-item ${activeProject === id ? 'active' : ''}`}
                    onClick={() => handleProjectSwitch(id)}
                    role="option"
                    aria-selected={activeProject === id}
                  >
                    <span className="project-dropdown-icon">{cfg.icon}</span>
                    <div className="project-dropdown-info">
                      <span className="project-dropdown-name">{cfg.label[nav]}</span>
                      <span className="project-dropdown-desc">{cfg.description[nav]}</span>
                    </div>
                    {activeProject === id && (
                      <svg className="project-dropdown-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
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

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            {projectNavItems.map((item, i) => (
              <li key={i}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={isActive(item.page)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="nav-separator" aria-hidden="true"></li>
            {sharedNavItems.map((item, i) => (
              <li key={`shared-${i}`}>
                <Link href={item.href} className={isActive(item.page)}>
                  {item.label}
                </Link>
              </li>
            ))}
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

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Mobile Project Selector */}
          <div className="mobile-project-selector">
            {Object.entries(PROJECT_CONFIG).map(([id, cfg]) => (
              <button
                key={id}
                className={`mobile-project-btn ${activeProject === id ? 'active' : ''}`}
                onClick={() => handleProjectSwitch(id)}
              >
                <span>{cfg.icon}</span>
                <span>{cfg.label[nav]}</span>
              </button>
            ))}
          </div>

          <ul className="mobile-nav-menu">
            {projectNavItems.map((item, i) => (
              <li key={i}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} onClick={closeMobile}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mobile-nav-separator" aria-hidden="true"></li>
            {sharedNavItems.map((item, i) => (
              <li key={`shared-${i}`}>
                <Link href={item.href} onClick={closeMobile}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 'falco-nginx-security-tutorial',
    title: 'Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2環境で試してみる',
    description: 'FalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法を、AWS EC2環境での実践を通じて詳しく解説します。SQLインジェクション、XSS、ディレクトリトラバーサルなどの攻撃パターンの検証からカスタムルールの作成まで包括的にカバーします。',
    date: '2025-08-11',
    readTime: '15分',
    tags: ['Falco', 'Nginx', 'セキュリティ', 'AWS', 'EC2', 'Web攻撃検知'],
    category: 'セキュリティ',
    slug: 'falco-nginx-security-tutorial'
  }
]

export default function BlogIndex() {
  const [language, setLanguage] = useState('ja')
  
  const content = {
    ja: {
      title: "FALCOYA ブログ",
      subtitle: "セキュリティ・技術情報を発信",
      description: "Webアプリケーションセキュリティ、Falco、リアルタイム脅威検知に関する実践的な技術情報とチュートリアルをお届けします。",
      readMore: "続きを読む",
      allPosts: "すべての記事",
      categories: "カテゴリー",
      recentPosts: "最新記事"
    },
    en: {
      title: "FALCOYA Blog", 
      subtitle: "Security & Technical Insights",
      description: "Practical technical information and tutorials on web application security, Falco, and real-time threat detection.",
      readMore: "Read More",
      allPosts: "All Posts",
      categories: "Categories", 
      recentPosts: "Recent Posts"
    }
  }

  return (
    <>
      <Head>
        <title>{content[language].title} - リアルタイムWebセキュリティ監視</title>
        <meta name="description" content={content[language].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <li><Link href="/blog" className="active">Blog</Link></li>
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

      {/* Blog Header */}
      <header className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <h1>{content[language].title}</h1>
            <p className="blog-subtitle">{content[language].subtitle}</p>
            <p className="blog-description">{content[language].description}</p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="blog-main">
        <div className="container">
          <div className="blog-grid">
            
            {/* Main Content */}
            <div className="blog-content">
              <h2>{content[language].recentPosts}</h2>
              
              <div className="blog-posts">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                      <span className="post-category">{post.category}</span>
                    </div>
                    
                    <h3 className="post-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="post-description">{post.description}</p>
                    
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="read-more-btn">
                      {content[language].readMore} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>{content[language].categories}</h3>
                <ul className="category-list">
                  <li><a href="#security">セキュリティ</a> (1)</li>
                  <li><a href="#tutorials">チュートリアル</a> (1)</li>
                  <li><a href="#falco">Falco</a> (1)</li>
                </ul>
              </div>
              
              <div className="sidebar-widget">
                <h3>タグクラウド</h3>
                <div className="tag-cloud">
                  <span className="tag">Falco</span>
                  <span className="tag">Nginx</span>
                  <span className="tag">セキュリティ</span>
                  <span className="tag">AWS</span>
                  <span className="tag">EC2</span>
                  <span className="tag">Web攻撃検知</span>
                </div>
              </div>
            </aside>
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
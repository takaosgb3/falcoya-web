# Codebase Structure

## Directory Layout

```
falcoya-web/
├── pages/                    # Next.js pages (file-based routing)
│   ├── _app.js              # Custom App component (global layout)
│   ├── index.js             # Homepage/landing page
│   ├── news.js              # News page
│   ├── quality.js           # Quality/test reports page
│   ├── blog/                # Blog post pages
│   │   ├── index.js         # Blog listing page
│   │   └── *.js             # Individual blog posts (ja/en versions)
│   └── quality/             # Quality sub-pages
├── styles/                  # CSS styles
│   └── globals.css          # Global CSS with custom properties
├── utils/                   # Utility functions
│   └── languageUtils.js     # Multi-language support utilities
├── public/                  # Static assets (images, favicon, etc.)
├── blog/                    # Blog content and drafts
│   ├── draft/               # Draft blog posts
│   └── img/                 # Blog images
├── E2E_Test/               # E2E test results
├── components/              # (Empty - components are inline)
├── scripts/                 # Utility scripts
└── node_modules/           # Dependencies

## Configuration Files

- `next.config.js` - Next.js configuration with security headers
- `package.json` - Project metadata and scripts
- `.eslintrc.json` - ESLint configuration
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore patterns
- `.vercelignore` - Vercel ignore patterns

## Key Pages Structure

### Homepage (`pages/index.js`)
- Hero section with particle animation
- Multi-language content object (ja/en)
- Feature sections for the falco-plugin-nginx plugin

### Blog (`pages/blog/`)
- Blog posts exist in both Japanese and English versions
- Naming pattern: `{slug}.js` (Japanese) and `{slug}-en.js` (English)
- Blog index page lists all posts with metadata

### App Wrapper (`pages/_app.js`)
- Global CSS import
- Google Fonts integration (Inter, Noto Sans JP)
- Vercel Analytics and Speed Insights components
- Favicon configuration
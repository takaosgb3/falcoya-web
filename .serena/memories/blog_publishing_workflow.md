# Blog Publishing Workflow

## Blog Post Structure

### File Naming Convention
- Japanese version: `falco-plugin-development-days{XX}-{YY}.js`
- English version: `falco-plugin-development-days{XX}-{YY}-en.js`
- Location: `pages/blog/`

### Draft to Publication Process

1. **Draft Creation**
   - Write draft in `blog/draft/blog{N}.txt` format
   - Create corresponding image as `blog/img/blog{N}.png`

2. **Page Component Creation**
   - Create Japanese page: `pages/blog/falco-plugin-development-days{XX}-{YY}.js`
   - Create English page: `pages/blog/falco-plugin-development-days{XX}-{YY}-en.js`

3. **Blog Index Update**
   - Add entry to `blogPosts.ja` array in `pages/blog/index.js`
   - Add entry to `blogPosts.en` array in `pages/blog/index.js`
   - Place at the top of the array (newest first)

4. **File Commit**
   - Commit blog page files
   - Commit blog images
   - Commit updated index.js

## Blog Post Component Structure

### Standard Imports
```javascript
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLanguage } from '../../utils/languageUtils'
```

### Component Sections
1. **Head/SEO**
   - Title tag
   - Meta description
   - OG tags (title, description, type, site_name)
   - Twitter card
   - Canonical URL

2. **Navigation**
   - Logo with home link
   - Mobile menu toggle
   - Desktop navigation menu
   - Language switcher (日本語/English)

3. **Mobile Navigation**
   - Collapsible menu
   - Same links as desktop

4. **Article Content**
   - Article header with metadata (date, tags, read time)
   - Blog post body with sections
   - Styling in `<style jsx>` block

5. **Footer**
   - Standard footer component

### Metadata Structure in Blog Index
```javascript
{
  id: 'slug-without-extension',
  title: 'Blog Post Title',
  description: 'Brief description',
  date: 'YYYY-MM-DD',
  readTime: 'X分' or 'X min',
  tags: ['Tag1', 'Tag2', ...],
  category: 'Category Name',
  slug: 'slug-without-extension'
}
```

## Content Pattern

### Blog Post Topics
- Falco + Nginx plugin development diary
- Days numbered in ranges (e.g., Days 105-110)
- Written from "Falcoya君" perspective
- Technical details with narrative style
- Both challenges and solutions documented

### Image Usage
- Main featured image per post
- Additional technical diagrams when needed
- Images stored in `blog/img/`
- Referenced in blog post content

## Current Status

### Published Range
- Days 7 through Days 105-110
- Approximately 20+ blog posts published
- Both Japanese and English versions available

### Next to Publish
- **Days 111-118** (draft: blog19.txt)
- Image ready: blog19.png
- Additional image: sysdig-falcoya.png

## Best Practices

1. **Consistency**
   - Follow existing naming patterns
   - Maintain same structure across posts
   - Use consistent metadata format

2. **SEO**
   - Include proper meta tags
   - Use descriptive titles
   - Add canonical URLs

3. **Accessibility**
   - Proper heading hierarchy
   - Alt text for images
   - Semantic HTML

4. **Multi-language**
   - Keep Japanese and English versions in sync
   - Use same slug for both versions
   - Language switcher redirects to equivalent page
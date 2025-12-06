#!/usr/bin/env node
/**
 * Batch fix ESLint errors in blog files:
 * 1. Fix @next/next/no-html-link-for-pages errors
 * 2. Fix react/no-unescaped-entities errors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixFile(filePath) {
  console.log(`\nProcessing: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix 1: Ensure Link is imported
  if (!content.includes("import Link from 'next/link'")) {
    content = content.replace(
      "import Head from 'next/head'",
      "import Head from 'next/head'\nimport Link from 'next/link'"
    );
  }

  // Fix 2: Fix mobile menu links
  // Pattern: <a href="/..." in mobile menu section
  // These need to be wrapped with Link component

  // Match mobile menu internal links (not external https://)
  // Pattern: <li><a href="/path"...>text</a></li>
  // Replace with: <li><Link href="/path"><a...>text</a></Link></li>

  content = content.replace(
    /<li><a href="(\/(blog\/|news\/|))"([^>]*)>(.*?)<\/a><\/li>/g,
    (match, href, subpath, attrs, text) => {
      // Skip if already wrapped with Link
      if (match.includes('<Link')) return match;
      return `<li><Link href="${href}"><a${attrs}>${text}</a></Link></li>`;
    }
  );

  // Fix 3: Escape unescaped quotes and apostrophes in JSX text content
  // This is the tricky part - we need to escape quotes in text nodes but not in attributes

  const lines = content.split('\n');
  const fixedLines = lines.map((line, index) => {
    // Skip if line is a comment, import, or code block marker
    if (line.trim().startsWith('//') ||
        line.trim().startsWith('import ') ||
        line.includes('```') ||
        line.includes('<code>') ||
        line.includes('<pre>')) {
      return line;
    }

    // Only process lines that contain JSX text content (between > and <)
    // Pattern: >text with "quotes" and 'apostrophes'<
    if (!line.includes('>') || !line.includes('<')) {
      return line;
    }

    // Split line by tags to isolate text content
    const parts = line.split(/(<[^>]+>)/);
    const processedParts = parts.map((part, i) => {
      // If this is a tag (starts with <), leave it alone
      if (part.startsWith('<')) {
        return part;
      }

      // This is text content between tags
      // Check if previous part ended with > (meaning we're in text content)
      if (i > 0 && parts[i - 1].endsWith('>')) {
        // Don't escape if already escaped
        if (part.includes('&quot;') || part.includes('&apos;') ||
            part.includes('&#') || part.includes('&lt;') || part.includes('&gt;')) {
          return part;
        }

        // Escape unescaped quotes and apostrophes
        return part
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');
      }

      return part;
    });

    return processedParts.join('');
  });

  content = fixedLines.join('\n');

  // Only write if changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Fixed ${filePath}`);
    return true;
  } else {
    console.log(`  - No changes needed`);
    return false;
  }
}

// Get all blog files
const blogDir = path.join(__dirname, '../pages/blog');
const files = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.js'))
  .map(f => path.join(blogDir, f));

// Also add pages/index.js and pages/quality.js if they exist
['pages/index.js', 'pages/quality.js', 'pages/_app.js'].forEach(p => {
  const fullPath = path.join(__dirname, '..', p);
  if (fs.existsSync(fullPath)) {
    files.push(fullPath);
  }
});

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✓ Fixed ${fixedCount} / ${files.length} files`);

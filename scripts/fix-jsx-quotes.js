#!/usr/bin/env node
/**
 * Fix unescaped quotes in JSX files
 * Uses a simple regex approach targeting JSX text content
 */

const fs = require('fs');
const path = require('path');

function escapeJSXText(content) {
  const lines = content.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Skip if already has HTML entities
    if (line.includes('&quot;') || line.includes('&apos;') ||
        line.includes('&#34;') || line.includes('&#39;')) {
      result.push(line);
      continue;
    }

    // Skip code blocks, pre tags, and HTML attributes
    if (line.includes('```') || line.includes('<code') || line.includes('<pre') ||
        line.includes('</code>') || line.includes('</pre>') ||
        (line.includes('=') && line.includes('"'))) {
      result.push(line);
      continue;
    }

    // Only process JSX content (lines with > followed by text and <)
    // Pattern: >text with "quotes" and 'apostrophes'<
    const jsxTextPattern = />([ 　\u3000]*[^<>]+?["'][^<>]*?)</g;

    if (jsxTextPattern.test(line)) {
      // Reset the regex
      jsxTextPattern.lastIndex = 0;

      line = line.replace(jsxTextPattern, (match) => {
        // Don't escape if this looks like an attribute
        if (match.includes('=')) return match;

        // Escape quotes in the matched text
        return match.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
      });
    }

    result.push(line);
  }

  return result.join('\n');
}

// Process all blog files
const blogDir = path.join(__dirname, '../pages/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.js'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fixed = escapeJSXText(content);

  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`✓ Fixed: ${file}`);
    fixedCount++;
  } else {
    console.log(`- No changes: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} / ${files.length} files`);

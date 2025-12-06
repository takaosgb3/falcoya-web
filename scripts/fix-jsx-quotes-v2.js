#!/usr/bin/env node
/**
 * Fix unescaped quotes in JSX files - More aggressive version
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
        line.includes('&#34;') || line.includes('&#39;') ||
        line.includes('&ldquo;') || line.includes('&rdquo;') ||
        line.includes('&lsquo;') || line.includes('&rsquo;')) {
      result.push(line);
      continue;
    }

    // Skip code blocks, pre tags, and script tags
    if (line.includes('```') || line.includes('<code') || line.includes('<pre') ||
        line.includes('</code>') || line.includes('</pre>') ||
        line.includes('<script') || line.includes('</script>')) {
      result.push(line);
      continue;
    }

    // Skip attribute definitions (has = and " together without >)
    const equalsIndex = line.indexOf('=');
    const greaterIndex = line.indexOf('>');
    if (equalsIndex !== -1 && greaterIndex !== -1 && equalsIndex < greaterIndex) {
      // This might be an attribute, but we can still process text after >
      // Split at the last >
      const lastGreater = line.lastIndexOf('>');
      if (lastGreater !== -1 && lastGreater < line.length - 1) {
        const beforeTag = line.substring(0, lastGreater + 1);
        let afterTag = line.substring(lastGreater + 1);

        // Only escape if there's actual text content (not another tag)
        if (afterTag.trim() && !afterTag.trim().startsWith('<')) {
          // Escape quotes in the text part
          afterTag = afterTag.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
          line = beforeTag + afterTag;
        }
      }
      result.push(line);
      continue;
    }

    // For lines with JSX text content: >text<
    // More aggressive pattern - find all text between > and <
    if (line.includes('>') && line.includes('<')) {
      // Replace text content between tags
      line = line.replace(/>([^<>]+)</g, (match, textContent) => {
        // Don't escape if this is an attribute value (contains =)
        if (match.includes('=')) return match;

        // Escape quotes and apostrophes in text content
        const escaped = textContent
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');

        return `>${escaped}<`;
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

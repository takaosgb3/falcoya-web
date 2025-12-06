#!/usr/bin/env python3
"""Fix ESLint errors in blog files."""

import re
import sys
from pathlib import Path

def fix_mobile_menu_links(content):
    """Fix mobile menu navigation links to use Link component."""
    # Pattern to match mobile menu section with <a href="/..."> links
    # We need to be careful to only replace internal links, not external ones

    # First, ensure Link is imported
    if 'import Link from' not in content:
        # Add Link import after Head import
        content = content.replace(
            "import Head from 'next/head'",
            "import Head from 'next/head'\nimport Link from 'next/link'"
        )

    # Fix mobile menu links - find the mobile menu section
    # Pattern: <a href="/path" className="block ...">
    # Replace with: <Link href="/path"><a className="block ...">...</a></Link>

    def replace_internal_link(match):
        """Replace internal <a> tags with Link wrapper."""
        indent = match.group(1)
        href = match.group(2)
        rest = match.group(3)
        content_text = match.group(4)

        # Skip external links
        if href.startswith('http://') or href.startswith('https://') or href.startswith('mailto:'):
            return match.group(0)

        # Return Link-wrapped version
        return f'{indent}<Link href="{href}"><a{rest}>{content_text}</a></Link>'

    # Pattern for mobile menu links
    # Match: <a href="/..." className="block ...">Text</a>
    pattern = r'(\s+)<a href="(/[^"]*)"([^>]*)>(.*?)</a>'
    content = re.sub(pattern, replace_internal_link, content)

    return content

def fix_unescaped_entities(content):
    """Fix unescaped quotes and apostrophes in JSX content."""
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Skip lines that are already inside code blocks, comments, or strings
        # We need to be careful with JSX content vs JavaScript strings

        # Check if line contains JSX content (has HTML-like tags)
        if '>' in line and '<' in line:
            # This is likely JSX content
            # We need to escape quotes and apostrophes inside JSX text content

            # Pattern: text between > and < that contains unescaped quotes
            def escape_jsx_text(match):
                """Escape quotes in JSX text content."""
                prefix = match.group(1)
                text = match.group(2)
                suffix = match.group(3)

                # Don't escape if already escaped or in code
                if '&quot;' in text or '&apos;' in text or '&#' in text:
                    return match.group(0)

                # Escape quotes and apostrophes
                text = text.replace('"', '&quot;')
                text = text.replace("'", '&apos;')

                return f'{prefix}{text}{suffix}'

            # Match text content between tags: >text content<
            # But be careful not to match tag attributes
            pattern = r'(>[^<]*?)(["\'][^<>]*?)([^>]*?<)'

            # Simple approach: just replace unescaped quotes in text portions
            # Find text between > and < that isn't part of a tag
            parts = re.split(r'(<[^>]+>)', line)
            escaped_parts = []

            for i, part in enumerate(parts):
                # If this is a tag (starts with <), don't touch it
                if part.startswith('<'):
                    escaped_parts.append(part)
                else:
                    # This is text content - escape quotes if not already escaped
                    # and not in code blocks or attributes
                    if i > 0 and not ('className=' in parts[i-1] or 'href=' in parts[i-1] or
                                     'src=' in parts[i-1] or '```' in part):
                        # Check if we're in actual text content (after a closing >)
                        if i > 0 and parts[i-1].endswith('>'):
                            # Escape quotes that aren't already escaped
                            escaped = part
                            # Only escape if not already HTML entity
                            if '&' not in escaped or ('&' in escaped and not re.search(r'&[a-z]+;', escaped)):
                                escaped = escaped.replace('"', '&quot;').replace("'", '&apos;')
                            escaped_parts.append(escaped)
                        else:
                            escaped_parts.append(part)
                    else:
                        escaped_parts.append(part)

            line = ''.join(escaped_parts)

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix ESLint errors in a single file."""
    print(f"Processing {file_path}...")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Fix mobile menu links
    content = fix_mobile_menu_links(content)

    # Fix unescaped entities
    content = fix_unescaped_entities(content)

    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Fixed {file_path}")
        return True
    else:
        print(f"  - No changes needed for {file_path}")
        return False

def main():
    """Main function."""
    # Get list of files to fix
    blog_dir = Path('pages/blog')
    files = list(blog_dir.glob('*.js'))

    # Also check pages/index.js and pages/quality.js if they exist
    for page in ['pages/index.js', 'pages/quality.js']:
        if Path(page).exists():
            files.append(Path(page))

    fixed_count = 0
    for file_path in files:
        if fix_file(file_path):
            fixed_count += 1

    print(f"\n✓ Fixed {fixed_count} files")

if __name__ == '__main__':
    main()

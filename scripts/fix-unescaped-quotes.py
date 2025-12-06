#!/usr/bin/env python3
"""
Fix unescaped quotes in JSX text content.
This script escapes " to &quot; and ' to &apos; in JSX text nodes,
while preserving quotes in attributes, code blocks, and already escaped content.
"""

import re
import sys
from pathlib import Path

def fix_unescaped_quotes(content):
    """Fix unescaped quotes in JSX text content."""
    lines = content.split('\n')
    fixed_lines = []

    in_code_block = False
    in_pre_tag = False

    for line in lines:
        # Track code blocks
        if '```' in line:
            in_code_block = not in_code_block
            fixed_lines.append(line)
            continue

        # Track <pre> and <code> tags
        if '<pre' in line or '<code' in line:
            in_pre_tag = True
        if '</pre>' in line or '</code>' in line:
            in_pre_tag = False

        # Skip if in code block or pre tag
        if in_code_block or in_pre_tag:
            fixed_lines.append(line)
            continue

        # Skip if already has HTML entities
        if '&quot;' in line or '&apos;' in line or '&#34;' in line or '&#39;' in line:
            fixed_lines.append(line)
            continue

        # Skip attribute lines (className=, href=, etc.)
        if '=' in line and not '>' in line.split('=')[0]:
            fixed_lines.append(line)
            continue

        # Only process lines with JSX content (has > and <)
        if '>' not in line or '<' not in line:
            fixed_lines.append(line)
            continue

        # Split by tags and process text content only
        parts = []
        current = ''
        in_tag = False

        for char in line:
            if char == '<':
                # We're entering a tag
                if current and not in_tag:
                    # This was text content - escape quotes
                    current = current.replace('"', '&quot;').replace("'", '&apos;')
                parts.append(current)
                current = char
                in_tag = True
            elif char == '>':
                # We're leaving a tag
                current += char
                parts.append(current)
                current = ''
                in_tag = False
            else:
                current += char

        # Handle remaining content
        if current:
            if not in_tag:
                current = current.replace('"', '&quot;').replace("'", '&apos;')
            parts.append(current)

        fixed_lines.append(''.join(parts))

    return '\n'.join(fixed_lines)

def main():
    if len(sys.argv) < 2:
        print("Usage: python fix-unescaped-quotes.py <file1> [file2] ...")
        sys.exit(1)

    for file_path in sys.argv[1:]:
        path = Path(file_path)
        if not path.exists():
            print(f"File not found: {file_path}")
            continue

        print(f"Processing: {file_path}")

        content = path.read_text(encoding='utf-8')
        fixed_content = fix_unescaped_quotes(content)

        if content != fixed_content:
            path.write_text(fixed_content, encoding='utf-8')
            print(f"  ✓ Fixed {file_path}")
        else:
            print(f"  - No changes needed")

if __name__ == '__main__':
    main()

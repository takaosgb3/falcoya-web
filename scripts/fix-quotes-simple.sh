#!/bin/bash
# Simple approach: Use perl to fix unescaped quotes in JSX text content

for file in pages/blog/*.js; do
  echo "Processing: $file"

  # Use perl to escape quotes that appear in JSX text content
  # This is a simplified approach - escape quotes that appear after > and before <
  perl -i -p -e '
    # Skip lines that already have HTML entities
    next if /&quot;|&apos;|&#34;|&#39;/;

    # Skip lines in code blocks
    next if /```|<code|<pre|className=|href=|src=/;

    # For JSX content lines (has > and <)
    if (/>.*["'\''].*</) {
      # Escape quotes between tags
      s/>([^<]*)"([^<]*)</>"$1&quot;$2"</g;
      s/>([^<]*)'\'\'([^<]*)</>"$1&apos;$2"</g;
    }
  ' "$file"
done

echo "Done!"

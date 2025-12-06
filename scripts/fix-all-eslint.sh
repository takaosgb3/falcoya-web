#!/bin/bash
# Fix all ESLint errors in blog files

# Function to fix a single file
fix_file() {
  local file="$1"
  echo "Fixing: $file"

  # Fix mobile menu links - wrap <a href="/..."> with <Link>
  # Pattern: <li><a href="/path"
  # Replace with: <li><Link href="/path"><a
  # And: </a></li>
  # Replace with: </a></Link></li>

  # This is complex because we need to handle the pattern carefully
  # Let's use perl for better regex handling

  perl -i -pe '
    # Skip external links
    next if /href="http/;

    # Fix mobile menu internal links
    # Pattern: <li><a href="/..." onClick...>Text</a></li>
    # Replace with: <li><Link href="/..."><a onClick...>Text</a></Link></li>

    if (m{<li><a href="(/[^"]*)"([^>]*)>(.*?)</a></li>}) {
      my ($href, $attrs, $text) = ($1, $2, $3);
      # Only fix if not already wrapped with Link
      unless (/<Link/) {
        s{<li><a href="$href"$attrs>$text</a></li>}{<li><Link href="$href"><a$attrs>$text</a></Link></li>};
      }
    }

    # Fix unescaped quotes in text content (not in tags/attributes)
    # This is tricky - we need to escape quotes that appear in JSX text
    # but NOT in HTML attributes or code blocks

    # Skip if line contains code blocks or is already escaped
    next if /```|<code|<pre|&quot;|&apos;|&#34;|&#39;/;

    # Only process lines with JSX content
    if (/>.*["\x27].*</) {
      # Split by tags and process text content only
      s{>([^<]*)["\x27]([^<]*)<}{
        my $before = $1;
        my $after = $2;
        # Escape quotes in text content
        $before =~ s/"/&quot;/g;
        $before =~ s/\x27/&apos;/g;
        $after =~ s/"/&quot;/g;
        $after =~ s/\x27/&apos;/g;
        ">$before$after<";
      }ge;
    }
  ' "$file"
}

# Get all blog files
for file in pages/blog/*.js; do
  fix_file "$file"
done

# Fix other pages if they exist
[ -f pages/index.js ] && fix_file pages/index.js
[ -f pages/quality.js ] && fix_file pages/quality.js
[ -f pages/_app.js ] && fix_file pages/_app.js

echo "✓ Done fixing all files"

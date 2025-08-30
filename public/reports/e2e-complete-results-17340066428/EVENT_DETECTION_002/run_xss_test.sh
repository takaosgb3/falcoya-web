#!/bin/bash
set -euo pipefail
config_file="$1"
test_dir="$2"
test_log="$3"

# Start Falco with syscall disabled and custom config
timeout 10s falco \
    --disable-source syscall \
    -c "$config_file" \
    -M 10 \
    --unbuffered > "${test_dir}/falco_output.log" 2>&1 &
FALCO_PID=$!

# Wait for Falco to be ready
for i in {1..20}; do
    if kill -0 $FALCO_PID 2>/dev/null; then
        sleep 0.5
        break
    fi
done

# Pattern #055: Send multiple XSS patterns with both encoded and raw versions
# Test various XSS attack vectors

# 1. Basic script tag injection
echo '192.0.2.10 - - [22/Aug/2025:07:32:00 +0000] "GET /search?q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E HTTP/1.1" 200 123 "-" "Mozilla/5.0"' >> "$test_log"

# 2. Event handler XSS
echo '192.0.2.11 - - [22/Aug/2025:07:32:01 +0000] "GET /profile?name=%3Cimg%20src=x%20onerror=alert(%27XSS%27)%3E HTTP/1.1" 200 456 "-" "Chrome/91.0"' >> "$test_log"

# 3. JavaScript protocol
echo '192.0.2.12 - - [22/Aug/2025:07:32:02 +0000] "GET /redirect?url=javascript:alert(document.cookie) HTTP/1.1" 302 0 "-" "Firefox/89.0"' >> "$test_log"

# 4. SVG-based XSS
echo '192.0.2.13 - - [22/Aug/2025:07:32:03 +0000] "GET /upload?file=%3Csvg%20onload=alert(%27XSS%27)%3E HTTP/1.1" 200 234 "-" "Edge/91.0"' >> "$test_log"

# 5. Encoded XSS attempt
echo '192.0.2.14 - - [22/Aug/2025:07:32:04 +0000] "POST /comment?text=%3Cscript%3Ealert%28%27XSS%27%29%3C%2Fscript%3E HTTP/1.1" 201 567 "-" "Safari/14.1"' >> "$test_log"

# 6. Data URI XSS
echo '192.0.2.15 - - [22/Aug/2025:07:32:05 +0000] "GET /image?src=data:text/html,%3Cscript%3Ealert(%27XSS%27)%3C/script%3E HTTP/1.1" 200 890 "-" "curl/7.68.0"' >> "$test_log"

# 7. Obfuscated XSS
echo '192.0.2.16 - - [22/Aug/2025:07:32:06 +0000] "GET /api?callback=%3Cscript%3Eeval(String.fromCharCode(97,108,101,114,116))%3C/script%3E HTTP/1.1" 200 345 "-" "Python/3.8"' >> "$test_log"

# Give Falco time to process the events
sleep 2

# Wait for detection with retries
for i in {1..10}; do
    if grep -q 'NGINX XSS' "${test_dir}/falco_output.log" 2>/dev/null; then
        kill $FALCO_PID 2>/dev/null || true
        # Pattern #077: Ensure falco.log is created BEFORE exit
        cp "${test_dir}/falco_output.log" "${test_dir}/falco.log" 2>/dev/null || true
        grep '^{' "${test_dir}/falco_output.log" > "${test_dir}/falco_events.json" 2>/dev/null || true
        exit 0
    fi
    sleep 0.5
done

# Kill Falco and final check
kill $FALCO_PID 2>/dev/null || true
sleep 1

# Pattern #076: Copy falco_output.log to falco.log BEFORE exit
# This ensures the log is available for report generation
cp "${test_dir}/falco_output.log" "${test_dir}/falco.log" 2>/dev/null || true

# Also extract JSON events for verification
grep '^{' "${test_dir}/falco_output.log" > "${test_dir}/falco_events.json" 2>/dev/null || true

if grep -q 'NGINX XSS' "${test_dir}/falco_output.log" 2>/dev/null; then
    exit 0
fi

# Debug output
echo "=== Falco output ===" >&2
cat "${test_dir}/falco_output.log" >&2
echo "===================" >&2
exit 1

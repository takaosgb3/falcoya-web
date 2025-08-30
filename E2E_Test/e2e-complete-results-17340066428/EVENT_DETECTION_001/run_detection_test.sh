#!/bin/bash
set -euo pipefail
test_dir="$1"
test_log="$2"

# Pattern #045: Start Falco with syscall disabled and custom config
timeout 10s falco \
    --disable-source syscall \
    -c "${test_dir}/falco_test.yaml" \
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

# Inject multiple SQL injection attempts to test various patterns
# Pattern #047: Include SQL special characters to trigger both sqli_words and sqli_rawchars macros

# 1. Basic SQLi - OR condition bypass
echo '192.0.2.1 - - [22/Aug/2025:07:31:00 +0000] "GET /users?id=1%27%20OR%20%271%27%3D%271 HTTP/1.1" 200 123 "-" "curl/7.68.0"' >> "$test_log"

# 2. UNION SELECT attack
echo '192.0.2.2 - - [22/Aug/2025:07:31:01 +0000] "GET /api/users?id=1%27%20UNION%20SELECT%20username,password%20FROM%20admin_users-- HTTP/1.1" 200 456 "-" "sqlmap/1.5"' >> "$test_log"

# 3. DROP TABLE attempt
echo '192.0.2.3 - - [22/Aug/2025:07:31:02 +0000] "GET /api/products?category=1%27;%20DROP%20TABLE%20users-- HTTP/1.1" 500 0 "-" "python-requests/2.25.1"' >> "$test_log"

# 4. Comment-based bypass
echo '192.0.2.4 - - [22/Aug/2025:07:31:03 +0000] "POST /login?username=admin%27--&password=x HTTP/1.1" 302 0 "-" "Mozilla/5.0"' >> "$test_log"

# 5. Time-based blind SQLi
echo '192.0.2.5 - - [22/Aug/2025:07:31:04 +0000] "GET /api/check?id=1%27%20AND%20SLEEP(5)-- HTTP/1.1" 200 789 "-" "curl/7.68.0"' >> "$test_log"

# Wait for detection with retries
for i in {1..10}; do
    if grep -q 'SQL.*[Ii]njection\|suspicious.*query\|NGINX.*SQL\|NGINX SQLi' "${test_dir}/falco_output.log" 2>/dev/null; then
        kill $FALCO_PID 2>/dev/null || true
        # Pattern #077: Ensure falco.log is created BEFORE exit
        cp "${test_dir}/falco_output.log" "${test_dir}/falco.log" 2>/dev/null || true
        grep '^{' "${test_dir}/falco_output.log" > "${test_dir}/falco_events.json" 2>/dev/null || true
        exit 0
    fi
    sleep 0.5
done

# Kill Falco and check one more time
kill $FALCO_PID 2>/dev/null || true
sleep 1

# Pattern #076: Copy falco_output.log to falco.log BEFORE exit
# This ensures the log is available for report generation
cp "${test_dir}/falco_output.log" "${test_dir}/falco.log" 2>/dev/null || true

# Also extract JSON events for verification
grep '^{' "${test_dir}/falco_output.log" > "${test_dir}/falco_events.json" 2>/dev/null || true

# Final check
if grep -q 'SQL.*[Ii]njection\|suspicious.*query\|NGINX.*SQL\|NGINX SQLi' "${test_dir}/falco_output.log" 2>/dev/null; then
    exit 0
fi

# Debug: show what we got
echo "=== Falco output ===" >&2
cat "${test_dir}/falco_output.log" >&2
echo "===================" >&2
exit 1

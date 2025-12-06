# FALCOYA Web - Project Overview

## Project Purpose
FALCOYA is a website for the falco-plugin-nginx project - a Falco plugin that monitors Nginx access logs in real-time to detect web application security threats.

**Key Features:**
- Real-time detection of security threats (SQLi, XSS, path traversal, DDoS, etc.)
- Interactive landing page for the falco-plugin-nginx OSS project
- Multi-language support (Japanese and English)
- Blog section documenting development journey
- News and quality/test report sections

## Tech Stack
- **Framework:** Next.js 14.0.4 (Pages Router)
- **UI Library:** React 18.2.0
- **Language:** JavaScript (ES6+)
- **Styling:** CSS (Global CSS with CSS custom properties)
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics and Speed Insights
- **Linting:** ESLint with next/core-web-vitals config

## Repository
- GitHub: https://github.com/takaosgb3/falcoya-web.git
- License: MIT
- Branch: main

## Notes
- Despite TypeScript being in devDependencies, the project uses JavaScript (.js files)
- No traditional components directory - components are inline or co-located
- Multi-language support implemented via custom localStorage-based utility
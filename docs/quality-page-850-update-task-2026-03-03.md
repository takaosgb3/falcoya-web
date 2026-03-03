# タスク定義書: Quality/Homepage/News ページ 850パターン更新

## 概要

falco-plugin-nginx の E2E テストパターン数が 625 → 850 に拡張されたことを反映し、
Falcoya Web サイトの該当ページを更新する。

## 参照データ

- **Allure Report**: https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/212/
- **Run Number**: 212
- **Timestamp**: 2026-03-03T04:22:07Z
- **Duration**: ~3077ms
- **Total Tests**: 850
- **Pass Rate**: 100% (850/850)
- **Environment**: ubuntu-24.04, Falco 0.43.0, nginx 1.24.0

## カテゴリ別内訳 (850パターン)

| カテゴリ | 旧(625) | 新(850) | 変化 | 割合 |
|----------|---------|---------|------|------|
| SQLI | 124 | 138 | +14 | 16.2% |
| CMDINJ | 89 | 98 | +9 | 11.5% |
| XSS | 86 | 96 | +10 | 11.3% |
| PATH | 73 | 81 | +8 | 9.5% |
| SSTI | 25 | 34 | +9 | 4.0% |
| LDAP | 15 | 20 | +5 | 2.4% |
| XXE | 18 | 18 | ±0 | 2.1% |
| OTHER | 195 | 365 | +170 | 42.9% |
| **合計** | **625** | **850** | **+225** | **100%** |

### OTHER 内訳 (365パターン)

SSRF(41), Other(34), CRLF(31), API Security(30), GraphQL(25), XPath(25),
Host Header(21), HPP(20), NoSQL(20), Open Redirect(20), WAF Bypass(18),
Pickle(15), JWT(15), Prototype Pollution(15), HTTP Smuggling(15),
Auth Bypass via Path(10), Information Disclosure(10)

## 更新対象ファイル

### 1. pages/quality.js

| 項目 | 旧値 | 新値 |
|------|------|------|
| コメント | "625 patterns" | "850 patterns" |
| metadata.runNumber | 185 | 212 |
| metadata.timestamp | "2026-02-14T22:45:34Z" | "2026-03-03T04:22:07Z" |
| metadata.duration | "2129ms" | "3077ms" |
| summary.totalTests | 625 | 850 |
| summary.passedTests | 625 | 850 |
| categories.SQLI | 124 (19.8%) | 138 (16.2%) |
| categories.CMDINJ | 89 (14.2%) | 98 (11.5%) |
| categories.XSS | 86 (13.8%) | 96 (11.3%) |
| categories.PATH | 73 (11.7%) | 81 (9.5%) |
| categories.SSTI | 25 (4.0%) | 34 (4.0%) |
| categories.XXE | 18 (2.9%) | 18 (2.1%) |
| categories.LDAP | 15 (2.4%) | 20 (2.4%) |
| categories.OTHER | 195 (31.2%) | 365 (42.9%) |
| JA hero.subtitle | "625パターン" | "850パターン" |
| JA phaseSelector.phase2 | "(625パターン)" | "(850パターン)" |
| EN hero.subtitle | "625 Attack Patterns" | "850 Attack Patterns" |
| EN phaseSelector.phase2 | "(625 Patterns)" | "(850 Patterns)" |
| Roadmap current | 625 | 850 |
| Roadmap target | 850 | 1000 |
| Roadmap progress | 73.5% | 85% |
| Roadmap description | "850パターンへの拡大を計画中" | "850パターンを達成。1000パターンへの拡大を計画中" |
| SSTI desc (JA) | "Jinja2、Twig、Freemarker等" | "Jinja2、Twig、Freemarker、Pug、EJS等" |
| OTHER desc (JA) | "XPath、GraphQL、NoSQL、CRLF、SSRF、HTTP Smuggling、API Security等" | "SSRF、CRLF、JWT、Open Redirect、WAF Bypass、GraphQL、NoSQL、XPath、API Security等" |
| SSTI desc (EN) | "Jinja2, Twig, Freemarker, etc." | "Jinja2, Twig, Freemarker, Pug, EJS, etc." |
| OTHER desc (EN) | "XPath, GraphQL, NoSQL, CRLF, SSRF, HTTP Smuggling, API Security, etc." | "SSRF, CRLF, JWT, Open Redirect, WAF Bypass, GraphQL, NoSQL, XPath, API Security, etc." |

### 2. pages/index.js

| 項目 | 旧値 | 新値 |
|------|------|------|
| JA projects.nginx.stats | "625パターン検証済み" | "850パターン検証済み" |
| JA detection.overview | "625パターン" | "850パターン" |
| EN projects.nginx.stats | "625 patterns verified" | "850 patterns verified" |
| EN detection.overview | "625 patterns" | "850 patterns" |
| Hero stat data-target | "625" | "850" |

### 3. pages/news.js

- JA: 新しいニュースエントリ追加（先頭に）
  - テストパターン850拡大、Phase 13完了、品質レポート更新
- EN: 対応する英語エントリ追加（先頭に）

## チェックリスト

- [ ] pages/quality.js 全項目更新
- [ ] pages/index.js 全項目更新
- [ ] pages/news.js 新エントリ追加
- [ ] npm run build 成功
- [ ] JA/EN コンテンツ整合性確認
- [ ] 数値の一貫性確認（850が全箇所で一致）
- [ ] タイポチェック
- [ ] Issue コメントに進捗報告
- [ ] staging ブランチにコミット・プッシュ

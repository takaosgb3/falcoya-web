# Repository Current Status

## Git Status (as of 2025-11-16)

### Branches
- **main** (current branch) - Production branch
- **staging** - Staging branch for testing before production
- Remote branches: Multiple feature branches exist on origin

### Sync Status
- Local main branch is up to date with origin/main
- No pending commits
- Clean working tree (except untracked files)

### Recent Commits
```
3b001e8 Merge branch 'staging' into main
35b85a8 fix: 「特定取り組み」ワードを削除
61af7c3 feat: Days 105-110 ブログ記事を追加
87d98b6 fix: Days 101-104の日付を修正
4563c15 fix: Day 104の日付を10/31から11/1に修正
```

## Untracked Files

### Blog Drafts (未公開)
Located in `blog/draft/`:
- **blog19.txt** - Days 111-118 (NEW - 未公開)
- blog14.txt - Days 78-84 (対応済み: 既に公開)
- blog15.txt - Days 85-91 (対応済み: 既に公開)
- blog16.txt - Days 92-98 (対応済み: 既に公開)
- blog17.txt - Days 99-104 (対応済み: 既に公開)
- blog18.txt - Days 105-110 (対応済み: 既に公開)

### Blog Images (未追跡)
Located in `blog/img/`:
- **blog19.png** - Days 111-118用 (NEW)
- blog14.png through blog18.png (既存)
- blog17-k6.png (k6テスト関連)
- **sysdig-falcoya.png** (NEW)
- 20251025_pattern_a216_test_report.png

### Scripts Directory (未追跡)
Located in `scripts/`:
- fix-all-eslint.sh
- fix-unescaped-quotes.py
- fix-jsx-quotes.js
- fix-quotes-simple.sh
- fix-eslint-errors.js
- fix-jsx-quotes-v2.js
- fix_eslint.py

### Serena Configuration
- `.serena/` directory (onboarding memory files)

## Published Blog Posts

### Latest Published Entry
- **Days 105-110** (2025-11-08)
  - Title: "サンプルデータと小さな安定の積み重ね、その先にある実装目標"
  - Topics: Phase 0完了、k6、nginx.headers設計方針

### Blog Post Pattern
- Each blog post has Japanese (.js) and English (-en.js) versions
- Naming: `falco-plugin-development-days{XX}-{YY}.js`
- Published entries: Days 7 through Days 105-110
- Pattern: 5-6 day intervals per blog post

## Next Steps (Pending Work)
1. **blog19.txt (Days 111-118)** needs to be:
   - Converted to Japanese page component
   - Converted to English page component  
   - Added to blog index
   - Images committed (blog19.png, sysdig-falcoya.png)

2. **Scripts** directory - ESLint fixing utilities (consider if needed in repo)

3. **Old blog drafts** (blog14-18.txt) can be cleaned up as they're already published
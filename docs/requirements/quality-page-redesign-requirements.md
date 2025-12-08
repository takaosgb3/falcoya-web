# テストレポートページ（/quality）リデザイン要件定義書

## ドキュメント情報
- **作成日**: 2025-12-08
- **バージョン**: 1.0
- **ステータス**: ドラフト
- **関連ブランチ**: feature/quality-page-redesign

---

## 1. 背景と目的

### 1.1 背景
falco-plugin-nginxプロジェクトは、E2Eテストの大幅な拡充を行った。

| フェーズ | テスト数 | 状態 | 説明 |
|---------|---------|------|------|
| Phase 1 | 14テスト | 完了・公開済み | 基礎検証フェーズ（2025-08-30） |
| Phase 2 | 65テスト | 完了・公開済み | 攻撃検知フェーズ（2025-12-08） |
| 今後 | 850テスト | 計画中 | 包括的テストフェーズ |

### 1.2 目的
1. **Phase 2（65パターン）のAllure E2Eレポートを主要コンテンツとして表示**
2. **既存のPhase 1レポートへのアクセスを維持**
3. **将来の850パターン拡大に対応できる拡張性のある設計**
4. **E2Eレポートの読み方ガイド（ブログ）との連携**

---

## 2. 現状分析

### 2.1 現在のページ構成

#### `/quality` (pages/quality.js)
- **Hero Section**: タイトル・説明
- **Test Summary**: Phase 1のテスト結果サマリー（14テスト、成功率100%）
- **Phase Info**: Phase 1～3の説明
- **Detection Examples**: SQLi/XSS検知例
- **Report Links**:
  - `/quality/e2e-report` (簡易版)
  - `/reports/e2e-complete-results-17340066428/index.html` (詳細版HTML)

#### `/quality/e2e-report` (pages/quality/e2e-report.js)
- Phase 1の14テストの詳細レポート
- カテゴリ別表示（BASIC, RULES, PLUGIN_LOAD, EVENT_DETECTION）
- 展開可能なテスト詳細

### 2.2 新しく追加されたリソース

#### 外部Allureレポート
- **URL構造**: `https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/{run_number}/`
- **最新版**: `https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/`
- **例（Run #26）**: `https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/26/`

#### E2Eレポートガイドブログ
- **日本語**: `/blog/falco-plugin-development-e2e-report-guide`
- **英語**: `/blog/falco-plugin-development-e2e-report-guide-en`
- **内容**: Allureレポートの読み方を8章構成で解説

### 2.3 Phase 2テストの構成（65パターン）

| カテゴリ | パターン数 | 説明 |
|---------|-----------|------|
| SQLI | 19 | SQLインジェクション（時間ベースブラインド、UNION、Error-based等） |
| XSS | 11 | クロスサイトスクリプティング（script、svg、iframe等） |
| PATH | 20 | パストラバーサル（../etc/passwd、エンコーディング回避等） |
| CMDINJ | 10 | コマンドインジェクション（;ls、&& whoami等） |
| OTHER | 5 | その他（MongoDB $where、$regex等） |
| **合計** | **65** | |

---

## 3. 要件定義

### 3.1 機能要件

#### FR-001: メインコンテンツの刷新
- **優先度**: 高
- **説明**: Phase 2（65パターン）のE2Eレポートを主要コンテンツとして表示
- **詳細**:
  - Allure外部レポートへのリンクを目立つ位置に配置
  - 65パターンの概要（カテゴリ別内訳）を表示
  - 最新の検知成功率・テスト実行日時を表示

#### FR-002: Phase切り替え機能
- **優先度**: 高
- **説明**: Phase 1とPhase 2のレポートを切り替えて表示できる
- **詳細**:
  - タブまたはセレクターでPhaseを切り替え
  - Phase 1: 既存の基礎検証（14テスト）
  - Phase 2: 攻撃検知（65パターン）

#### FR-003: Allureレポートへの誘導
- **優先度**: 高
- **説明**: 外部Allureレポートへの明確な導線を提供
- **詳細**:
  - 「最新レポートを見る」ボタン → `/e2e-report/latest/`
  - 「レポートの読み方ガイド」リンク → ブログ記事へ

#### FR-004: 今後の展望セクション
- **優先度**: 中
- **説明**: 850パターンへの拡大計画を表示
- **詳細**:
  - プログレスバーまたはロードマップ表示
  - 現在65/850（約7.6%）の進捗を可視化

#### FR-005: 多言語対応
- **優先度**: 高
- **説明**: 日本語・英語両方で全コンテンツを表示
- **詳細**:
  - 既存の言語切り替え機能を継続使用
  - 全テキストを両言語で提供
  - 詳細は「Appendix A: 多言語テキスト定義」を参照

### 3.2 非機能要件

#### NFR-001: レスポンシブデザイン
- デスクトップ・タブレット・モバイルで適切に表示

#### NFR-002: パフォーマンス
- 初期表示3秒以内
- 外部リンクは新しいタブで開く

#### NFR-003: アクセシビリティ
- 適切なheading階層
- 画像にalt属性
- キーボードナビゲーション対応

#### NFR-004: 既存デザインとの一貫性
- 既存のFALCOYAサイトのデザインシステムを踏襲
- グラデーション、カラーパレット、フォントの統一

---

## 4. 画面設計案

### 4.1 推奨ページ構成

```
/quality
├── Hero Section
│   ├── タイトル: "E2E テストレポート"
│   ├── サブタイトル: "65パターンの攻撃検知をAllureで可視化"
│   └── 説明文
│
├── Phase Selector（タブ）
│   ├── [Phase 2: 攻撃検知 (65パターン)] ← デフォルト選択
│   └── [Phase 1: 基礎検証 (14テスト)]
│
├── Phase 2 Content（Phase 2選択時）
│   ├── Quick Summary
│   │   ├── テスト数: 65
│   │   ├── 成功率: 100%
│   │   ├── 最終実行: 2025-12-07
│   │   └── 環境情報（Falco, Plugin, nginx, k6）
│   │
│   ├── Category Breakdown
│   │   ├── SQLI: 19パターン
│   │   ├── XSS: 11パターン
│   │   ├── PATH: 20パターン
│   │   ├── CMDINJ: 10パターン
│   │   └── OTHER: 5パターン
│   │
│   ├── Action Buttons
│   │   ├── [最新のAllureレポートを見る] → external link
│   │   └── [レポートの読み方ガイド] → blog link
│   │
│   └── Report Access
│       ├── Latest: https://...e2e-report/latest/
│       └── By Run#: 選択可能なドロップダウン or 入力欄
│
├── Phase 1 Content（Phase 1選択時）
│   └── 既存のPhase 1コンテンツを維持
│
├── Future Roadmap
│   ├── プログレス: 65 / 850 パターン
│   └── 「850パターンへの拡大を計画中」
│
└── Footer
```

### 4.2 デザインイメージ

#### Phase 2 Quick Summary カード
```
┌─────────────────────────────────────────────────────┐
│  📊 Phase 2: 攻撃検知テスト                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│   │   65    │  │  100%   │  │ 12/7    │           │
│   │テスト数  │  │ 成功率   │  │ 最終実行 │           │
│   └─────────┘  └─────────┘  └─────────┘           │
│                                                     │
│   環境: Falco 0.42.1 | Plugin falco-plugin-nginx    │
│         nginx 1.24.0 | k6 Ubuntu-24.04             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Category Breakdown カード
```
┌─────────────────────────────────────────────────────┐
│  🎯 攻撃カテゴリ別パターン                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SQLI    ████████████████████░░░░░░░  19 (29.2%)   │
│  PATH    ████████████████████░░░░░░░  20 (30.8%)   │
│  XSS     ███████████░░░░░░░░░░░░░░░░  11 (16.9%)   │
│  CMDINJ  ██████████░░░░░░░░░░░░░░░░░  10 (15.4%)   │
│  OTHER   █████░░░░░░░░░░░░░░░░░░░░░░   5 (7.7%)    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 5. 実装タスク

### 5.1 タスク一覧

| ID | タスク | 優先度 | 依存 | 参照ファイル |
|----|--------|--------|------|-------------|
| T-001 | Phase 2データ構造の定義 | 高 | - | pages/quality.js |
| T-002 | Phase Selectorコンポーネント実装 | 高 | T-001 | pages/quality.js |
| T-003 | Phase 2 Quick Summaryセクション実装 | 高 | T-001 | pages/quality.js |
| T-004 | Category Breakdownセクション実装 | 高 | T-001 | pages/quality.js |
| T-005 | Allureレポートへのリンクボタン実装 | 高 | - | pages/quality.js |
| T-006 | レポートガイドへのリンク実装 | 中 | - | pages/quality.js |
| T-007 | Future Roadmapセクション実装 | 中 | - | pages/quality.js |
| T-008 | 英語翻訳の追加 | 高 | T-001〜T-007 | pages/quality.js |
| T-009 | レスポンシブスタイリング調整 | 中 | T-001〜T-008 | pages/quality.js |
| T-010 | 既存Phase 1コンテンツの維持確認 | 高 | T-002 | pages/quality.js, pages/quality/e2e-report.js |

### 5.2 タスク詳細

#### T-001: Phase 2データ構造の定義
**説明**: Phase 2のテストデータを格納するデータ構造を定義

**参照情報**:
- E2Eレポートガイドブログ: `/blog/falco-plugin-development-e2e-report-guide`
- 外部Allureレポート: `https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/`

**データ構造案**:
```javascript
const phase2Data = {
  metadata: {
    runNumber: 26,
    timestamp: "2025-12-07T22:46:34Z",
    duration: "142ms",
    environment: {
      platform: "ubuntu-24.04",
      falcoVersion: "0.42.1",
      plugin: "falco-plugin-nginx",
      nginxVersion: "1.24.0 (Ubuntu)",
      k6Version: "linux/amd64"
    }
  },
  summary: {
    totalTests: 65,
    passedTests: 65,
    failedTests: 0,
    passRate: 100
  },
  categories: {
    SQLI: { count: 19, percentage: 29.2 },
    PATH: { count: 20, percentage: 30.8 },
    XSS: { count: 11, percentage: 16.9 },
    CMDINJ: { count: 10, percentage: 15.4 },
    OTHER: { count: 5, percentage: 7.7 }
  },
  urls: {
    latest: "https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/",
    byRun: "https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/{run_number}/"
  }
}
```

#### T-005: Allureレポートへのリンクボタン実装
**説明**: 外部Allureレポートへのリンクボタンを実装

**注意点**:
- `target="_blank"` と `rel="noopener noreferrer"` を必ず設定
- 目立つデザイン（プライマリボタン）で配置

---

## 6. 参照ドキュメント

### 6.1 プロジェクト内ドキュメント
| ドキュメント | パス | 説明 |
|-------------|------|------|
| プロジェクト概要 | Serena memory: project_overview | FALCOYAプロジェクトの概要 |
| コードベース構造 | Serena memory: codebase_structure | ディレクトリ構成 |
| ブログ公開ワークフロー | Serena memory: blog_publishing_workflow | ブログ記事の公開手順 |

### 6.2 関連ページ
| ページ | パス | 説明 |
|--------|------|------|
| 現在のqualityページ | pages/quality.js | リデザイン対象 |
| Phase 1レポート詳細 | pages/quality/e2e-report.js | 既存Phase 1レポート |
| E2Eレポートガイドブログ（JA） | pages/blog/falco-plugin-development-e2e-report-guide.js | 読み方ガイド |
| E2Eレポートガイドブログ（EN） | pages/blog/falco-plugin-development-e2e-report-guide-en.js | 読み方ガイド（英語） |

### 6.3 外部リソース
| リソース | URL | 説明 |
|---------|-----|------|
| Allure最新レポート | https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/latest/ | Phase 2 Allureレポート |
| Run #26 レポート | https://takaosgb3.github.io/falco-plugin-nginx/e2e-report/26/ | 具体例 |

---

## 7. リスクと対策

| リスク | 影響度 | 対策 |
|--------|--------|------|
| 外部Allureレポートの可用性 | 中 | リンク切れ時のフォールバック表示を検討 |
| Phase 1コンテンツの意図しない削除 | 高 | 既存コンテンツを別途バックアップ、差分レビュー必須 |
| 多言語テキストの不整合 | 中 | JA/EN両方のテキストを同時に更新 |

---

## 8. 承認

- [ ] 要件定義レビュー完了
- [ ] デザイン案承認
- [ ] 実装開始承認

---

## 変更履歴

| バージョン | 日付 | 変更者 | 変更内容 |
|-----------|------|--------|----------|
| 1.0 | 2025-12-08 | Claude | 初版作成 |
| 1.1 | 2025-12-08 | Claude | Appendix A（多言語テキスト定義）を追加 |

---

## Appendix A: 多言語テキスト定義

### A.1 概要
本セクションでは、`/quality`ページで使用する全テキストの日本語・英語定義を記載する。
実装時は、このテキスト定義をそのまま`content`オブジェクトとして使用すること。

### A.2 ページ共通テキスト

#### Navigation
| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| nav.github | GitHub | GitHub |
| nav.installation | インストール | Installation |
| nav.detection | 検知機能 | Detection |
| nav.blog | ブログ | Blog |
| nav.news | ニュース | News |
| nav.quality | テストレポート | Test Report |

### A.3 Hero Section

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| hero.title | E2E テストレポート | E2E Test Report |
| hero.subtitle | 65パターンの攻撃検知をAllureで可視化 | 65 Attack Patterns Visualized with Allure |
| hero.description | falco-plugin-nginx の品質は、包括的なE2Eテスト、自動化されたCI/CD、実証済みの検知精度、そして Falcoya君の頑張りによって支えられています。 | The quality of falco-plugin-nginx is supported by comprehensive E2E testing, automated CI/CD, proven detection accuracy, and Falcoya-kun's dedication. |

### A.4 Phase Selector（タブ）

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phaseSelector.phase2 | Phase 2: 攻撃検知 (65パターン) | Phase 2: Attack Detection (65 Patterns) |
| phaseSelector.phase1 | Phase 1: 基礎検証 (14テスト) | Phase 1: Foundation Verification (14 Tests) |

### A.5 Phase 2 Content

#### Quick Summary セクション
| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phase2.summary.title | Phase 2: 攻撃検知テスト | Phase 2: Attack Detection Tests |
| phase2.summary.totalTests | テスト数 | Total Tests |
| phase2.summary.passRate | 成功率 | Pass Rate |
| phase2.summary.lastRun | 最終実行 | Last Run |
| phase2.summary.environment | 環境 | Environment |
| phase2.summary.duration | 実行時間 | Duration |

#### Category Breakdown セクション
| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phase2.categories.title | 攻撃カテゴリ別パターン | Attack Patterns by Category |
| phase2.categories.sqli | SQL インジェクション | SQL Injection |
| phase2.categories.sqli.desc | 時間ベースブラインド、UNION、Error-based等 | Time-based Blind, UNION, Error-based, etc. |
| phase2.categories.xss | クロスサイトスクリプティング | Cross-Site Scripting |
| phase2.categories.xss.desc | script、svg、iframe等 | script, svg, iframe, etc. |
| phase2.categories.path | パストラバーサル | Path Traversal |
| phase2.categories.path.desc | ../etc/passwd、エンコーディング回避等 | ../etc/passwd, encoding bypass, etc. |
| phase2.categories.cmdinj | コマンドインジェクション | Command Injection |
| phase2.categories.cmdinj.desc | ;ls、&& whoami等 | ;ls, && whoami, etc. |
| phase2.categories.other | その他 | Other |
| phase2.categories.other.desc | MongoDB $where、$regex等 | MongoDB $where, $regex, etc. |
| phase2.categories.patterns | パターン | patterns |

#### Action Buttons
| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phase2.buttons.viewAllure | 最新のAllureレポートを見る | View Latest Allure Report |
| phase2.buttons.viewGuide | レポートの読み方ガイド | Report Reading Guide |
| phase2.buttons.viewPhase1Detail | Phase 1 詳細レポート | Phase 1 Detailed Report |

#### Report Access セクション
| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phase2.reportAccess.title | レポートへのアクセス | Report Access |
| phase2.reportAccess.latest | 最新版 | Latest |
| phase2.reportAccess.byRun | Run番号で指定 | By Run Number |
| phase2.reportAccess.runPlaceholder | Run番号を入力（例: 26） | Enter Run number (e.g., 26) |
| phase2.reportAccess.go | 表示 | Go |

### A.6 Phase 1 Content

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| phase1.title | 最新テスト結果 (Phase 1) | Latest Test Results (Phase 1) |
| phase1.subtitle | End-to-End テスト完全レポート - 基礎検証フェーズ | Complete End-to-End Test Report - Foundation Phase |
| phase1.summary.title | テストサマリー | Test Summary |
| phase1.summary.totalTests | 総テスト数 | Total Tests |
| phase1.summary.passRate | 成功率 | Pass Rate |
| phase1.summary.coverage | カバレッジ | Coverage |
| phase1.summary.lastRun | 最終実行 | Last Run |
| phase1.summary.detectedAttacks | 検知した攻撃 | Detected Attacks |
| phase1.summary.undetectedAttacks | 未検知の攻撃 | Undetected Attacks |
| phase1.environment.title | 環境 | Environment |
| phase1.environment.plugin | プラグイン | Plugin |
| phase1.phaseInfo | 現在のテスト結果はPhase 1（基礎検証フェーズ）の内容です。今後、Phase 2（高度な攻撃検知）、Phase 3（パフォーマンス・負荷テスト）を実施予定です。 | Current test results are from Phase 1 (Foundation Verification). Phase 2 (Advanced Attack Detection) and Phase 3 (Performance & Load Testing) are planned for future implementation. |
| phase1.buttons.simple | テストレポート（簡易版） | Test Report (Simple Version) |
| phase1.buttons.detailed | テストレポート（詳細版） | Test Report (Detailed Version) |

### A.7 Future Roadmap セクション

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| roadmap.title | 今後の展望 | Future Roadmap |
| roadmap.current | 現在 | Current |
| roadmap.target | 目標 | Target |
| roadmap.progress | 進捗 | Progress |
| roadmap.description | 850パターンへの拡大を計画中。より多くの攻撃バリエーション、より深いエッジケース、より広い守備範囲へ。 | Planning expansion to 850 patterns. More attack variations, deeper edge cases, broader coverage. |
| roadmap.patterns | パターン | patterns |

### A.8 Detection Examples セクション（Phase 1から継続使用）

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| detection.title | 実際の検知例 | Real Detection Examples |
| detection.subtitle | E2Eテストで確認された攻撃検知サンプル | Attack detection samples verified in E2E testing |
| detection.sqli.title | SQLインジェクション攻撃検知 | SQL Injection Attack Detection |
| detection.sqli.result | 検知結果: | Detection Result: |
| detection.sqli.success | ✅ 検知成功 (5件のアラート) | ✅ Successfully Detected (5 alerts) |
| detection.xss.title | XSS攻撃検知 | XSS Attack Detection |
| detection.xss.result | 検知結果: | Detection Result: |
| detection.xss.success | ✅ 検知成功 (7件のアラート) | ✅ Successfully Detected (7 alerts) |

### A.9 Footer

| キー | 日本語 (ja) | 英語 (en) |
|------|-------------|-----------|
| footer.description | Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン | Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications |
| footer.links | リンク | Links |
| footer.githubRepo | GitHubリポジトリ | GitHub Repository |
| footer.documentation | ドキュメント | Documentation |
| footer.license | ライセンス | License |
| footer.oss | オープンソースソフトウェア | Open Source Software |

---

## Appendix B: 実装用データ構造（content オブジェクト）

以下は、`pages/quality.js`で使用する`content`オブジェクトの完全な定義例である。

```javascript
const content = {
  ja: {
    title: "E2Eテスト & 検証",
    description: "falco-plugin-nginx の品質を支える包括的なテストとE2E検証結果",
    nav: {
      github: "GitHub",
      installation: "インストール",
      detection: "検知機能",
      blog: "ブログ",
      news: "ニュース",
      quality: "テストレポート"
    },
    hero: {
      title: "E2E テストレポート",
      subtitle: "65パターンの攻撃検知をAllureで可視化",
      description: "falco-plugin-nginx の品質は、包括的なE2Eテスト、自動化されたCI/CD、実証済みの検知精度、そして Falcoya君の頑張りによって支えられています。"
    },
    phaseSelector: {
      phase2: "Phase 2: 攻撃検知 (65パターン)",
      phase1: "Phase 1: 基礎検証 (14テスト)"
    },
    phase2: {
      summary: {
        title: "Phase 2: 攻撃検知テスト",
        totalTests: "テスト数",
        passRate: "成功率",
        lastRun: "最終実行",
        environment: "環境",
        duration: "実行時間"
      },
      categories: {
        title: "攻撃カテゴリ別パターン",
        sqli: { name: "SQL インジェクション", desc: "時間ベースブラインド、UNION、Error-based等" },
        xss: { name: "クロスサイトスクリプティング", desc: "script、svg、iframe等" },
        path: { name: "パストラバーサル", desc: "../etc/passwd、エンコーディング回避等" },
        cmdinj: { name: "コマンドインジェクション", desc: ";ls、&& whoami等" },
        other: { name: "その他", desc: "MongoDB $where、$regex等" },
        patterns: "パターン"
      },
      buttons: {
        viewAllure: "最新のAllureレポートを見る",
        viewGuide: "レポートの読み方ガイド",
        viewPhase1Detail: "Phase 1 詳細レポート"
      },
      reportAccess: {
        title: "レポートへのアクセス",
        latest: "最新版",
        byRun: "Run番号で指定",
        runPlaceholder: "Run番号を入力（例: 26）",
        go: "表示"
      }
    },
    phase1: {
      title: "最新テスト結果 (Phase 1)",
      subtitle: "End-to-End テスト完全レポート - 基礎検証フェーズ",
      summary: {
        title: "テストサマリー",
        totalTests: "総テスト数",
        passRate: "成功率",
        coverage: "カバレッジ",
        lastRun: "最終実行",
        detectedAttacks: "検知した攻撃",
        undetectedAttacks: "未検知の攻撃"
      },
      environment: {
        title: "環境",
        plugin: "プラグイン"
      },
      phaseInfo: "現在のテスト結果はPhase 1（基礎検証フェーズ）の内容です。今後、Phase 2（高度な攻撃検知）、Phase 3（パフォーマンス・負荷テスト）を実施予定です。",
      buttons: {
        simple: "📊 テストレポート（簡易版）",
        detailed: "🔍 テストレポート（詳細版）"
      }
    },
    roadmap: {
      title: "今後の展望",
      current: "現在",
      target: "目標",
      progress: "進捗",
      description: "850パターンへの拡大を計画中。より多くの攻撃バリエーション、より深いエッジケース、より広い守備範囲へ。",
      patterns: "パターン"
    },
    detection: {
      title: "実際の検知例",
      subtitle: "E2Eテストで確認された攻撃検知サンプル",
      sqli: {
        title: "SQLインジェクション攻撃検知",
        result: "検知結果:",
        success: "✅ 検知成功 (5件のアラート)"
      },
      xss: {
        title: "XSS攻撃検知",
        result: "検知結果:",
        success: "✅ 検知成功 (7件のアラート)"
      }
    },
    footer: {
      description: "Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン",
      links: "リンク",
      githubRepo: "GitHubリポジトリ",
      documentation: "ドキュメント",
      license: "ライセンス",
      oss: "オープンソースソフトウェア"
    }
  },
  en: {
    title: "E2E Testing & Validation",
    description: "Comprehensive testing and E2E verification results supporting falco-plugin-nginx quality",
    nav: {
      github: "GitHub",
      installation: "Installation",
      detection: "Detection",
      blog: "Blog",
      news: "News",
      quality: "Test Report"
    },
    hero: {
      title: "E2E Test Report",
      subtitle: "65 Attack Patterns Visualized with Allure",
      description: "The quality of falco-plugin-nginx is supported by comprehensive E2E testing, automated CI/CD, proven detection accuracy, and Falcoya-kun's dedication."
    },
    phaseSelector: {
      phase2: "Phase 2: Attack Detection (65 Patterns)",
      phase1: "Phase 1: Foundation Verification (14 Tests)"
    },
    phase2: {
      summary: {
        title: "Phase 2: Attack Detection Tests",
        totalTests: "Total Tests",
        passRate: "Pass Rate",
        lastRun: "Last Run",
        environment: "Environment",
        duration: "Duration"
      },
      categories: {
        title: "Attack Patterns by Category",
        sqli: { name: "SQL Injection", desc: "Time-based Blind, UNION, Error-based, etc." },
        xss: { name: "Cross-Site Scripting", desc: "script, svg, iframe, etc." },
        path: { name: "Path Traversal", desc: "../etc/passwd, encoding bypass, etc." },
        cmdinj: { name: "Command Injection", desc: ";ls, && whoami, etc." },
        other: { name: "Other", desc: "MongoDB $where, $regex, etc." },
        patterns: "patterns"
      },
      buttons: {
        viewAllure: "View Latest Allure Report",
        viewGuide: "Report Reading Guide",
        viewPhase1Detail: "Phase 1 Detailed Report"
      },
      reportAccess: {
        title: "Report Access",
        latest: "Latest",
        byRun: "By Run Number",
        runPlaceholder: "Enter Run number (e.g., 26)",
        go: "Go"
      }
    },
    phase1: {
      title: "Latest Test Results (Phase 1)",
      subtitle: "Complete End-to-End Test Report - Foundation Phase",
      summary: {
        title: "Test Summary",
        totalTests: "Total Tests",
        passRate: "Pass Rate",
        coverage: "Coverage",
        lastRun: "Last Run",
        detectedAttacks: "Detected Attacks",
        undetectedAttacks: "Undetected Attacks"
      },
      environment: {
        title: "Environment",
        plugin: "Plugin"
      },
      phaseInfo: "Current test results are from Phase 1 (Foundation Verification). Phase 2 (Advanced Attack Detection) and Phase 3 (Performance & Load Testing) are planned for future implementation.",
      buttons: {
        simple: "📊 Test Report (Simple Version)",
        detailed: "🔍 Test Report (Detailed Version)"
      }
    },
    roadmap: {
      title: "Future Roadmap",
      current: "Current",
      target: "Target",
      progress: "Progress",
      description: "Planning expansion to 850 patterns. More attack variations, deeper edge cases, broader coverage.",
      patterns: "patterns"
    },
    detection: {
      title: "Real Detection Examples",
      subtitle: "Attack detection samples verified in E2E testing",
      sqli: {
        title: "SQL Injection Attack Detection",
        result: "Detection Result:",
        success: "✅ Successfully Detected (5 alerts)"
      },
      xss: {
        title: "XSS Attack Detection",
        result: "Detection Result:",
        success: "✅ Successfully Detected (7 alerts)"
      }
    },
    footer: {
      description: "Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications",
      links: "Links",
      githubRepo: "GitHub Repository",
      documentation: "Documentation",
      license: "License",
      oss: "Open Source Software"
    }
  }
}
```

---

## Appendix C: 画面設計案（英語版）

### C.1 英語版ページ構成

```
/quality (English)
├── Hero Section
│   ├── Title: "E2E Test Report"
│   ├── Subtitle: "65 Attack Patterns Visualized with Allure"
│   └── Description
│
├── Phase Selector (Tabs)
│   ├── [Phase 2: Attack Detection (65 Patterns)] ← Default
│   └── [Phase 1: Foundation Verification (14 Tests)]
│
├── Phase 2 Content (when Phase 2 selected)
│   ├── Quick Summary
│   │   ├── Total Tests: 65
│   │   ├── Pass Rate: 100%
│   │   ├── Last Run: Dec 7, 2025
│   │   └── Environment (Falco, Plugin, nginx, k6)
│   │
│   ├── Category Breakdown
│   │   ├── SQLI: 19 patterns
│   │   ├── XSS: 11 patterns
│   │   ├── PATH: 20 patterns
│   │   ├── CMDINJ: 10 patterns
│   │   └── OTHER: 5 patterns
│   │
│   ├── Action Buttons
│   │   ├── [View Latest Allure Report] → external link
│   │   └── [Report Reading Guide] → blog link
│   │
│   └── Report Access
│       ├── Latest: https://...e2e-report/latest/
│       └── By Run#: dropdown or input field
│
├── Phase 1 Content (when Phase 1 selected)
│   └── Existing Phase 1 content maintained
│
├── Future Roadmap
│   ├── Progress: 65 / 850 patterns
│   └── "Planning expansion to 850 patterns"
│
└── Footer
```

### C.2 デザインイメージ（英語版）

#### Phase 2 Quick Summary Card (English)
```
┌─────────────────────────────────────────────────────┐
│  📊 Phase 2: Attack Detection Tests                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│   │   65    │  │  100%   │  │ Dec 7   │           │
│   │  Tests  │  │Pass Rate│  │Last Run │           │
│   └─────────┘  └─────────┘  └─────────┘           │
│                                                     │
│   Environment: Falco 0.42.1 | falco-plugin-nginx   │
│                nginx 1.24.0 | k6 Ubuntu-24.04      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Category Breakdown Card (English)
```
┌─────────────────────────────────────────────────────┐
│  🎯 Attack Patterns by Category                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SQLI    ████████████████████░░░░░░░  19 (29.2%)   │
│  PATH    ████████████████████░░░░░░░  20 (30.8%)   │
│  XSS     ███████████░░░░░░░░░░░░░░░░  11 (16.9%)   │
│  CMDINJ  ██████████░░░░░░░░░░░░░░░░░  10 (15.4%)   │
│  OTHER   █████░░░░░░░░░░░░░░░░░░░░░░   5 (7.7%)    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Future Roadmap Card (English)
```
┌─────────────────────────────────────────────────────┐
│  🚀 Future Roadmap                                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Current: 65 patterns    Target: 850 patterns     │
│                                                     │
│   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  7.6%     │
│                                                     │
│   Planning expansion to 850 patterns.               │
│   More attack variations, deeper edge cases,        │
│   broader coverage.                                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

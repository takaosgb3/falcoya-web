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

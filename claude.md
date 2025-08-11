# Next.js 超モダンWebサイト プロジェクト

## プロジェクト概要
最新のWeb技術を活用した、パフォーマンスとユーザー体験を最優先にした超モダンなWebサイトを構築します。

## 技術スタック

### コア技術
- **Next.js 15.x** - App Router、Server Components、Server Actions使用
- **TypeScript 5.x** - 厳格な型チェック（strict: true）
- **React 19.x** - 最新のReact機能を活用

### スタイリング・UI
- **Tailwind CSS 3.x** - ユーティリティファーストCSS
- **shadcn/ui** - カスタマイズ可能なコンポーネントライブラリ
- **Framer Motion** - 滑らかなアニメーション
- **Lucide React** - モダンなアイコンセット

### 状態管理・データフェッチング
- **Zustand** - 軽量な状態管理
- **TanStack Query (React Query)** - サーバー状態管理
- **Zod** - スキーマバリデーション

### 開発ツール
- **ESLint** - Next.jsの推奨設定使用
- **Prettier** - コードフォーマッター
- **Husky** - Git hooks
- **lint-staged** - ステージングファイルのリント

### テスト
- **Vitest** - 高速なユニットテスト
- **React Testing Library** - コンポーネントテスト
- **Playwright** - E2Eテスト

## プロジェクト構造

```
src/
├── app/                    # App Router
│   ├── (marketing)/       # マーケティングページグループ
│   ├── (app)/            # アプリケーションページグループ
│   ├── api/              # API Routes
│   └── layout.tsx        # ルートレイアウト
├── components/           # Reactコンポーネント
│   ├── ui/              # shadcn/uiコンポーネント
│   ├── features/        # 機能別コンポーネント
│   └── layouts/         # レイアウトコンポーネント
├── lib/                 # ユーティリティ関数
├── hooks/               # カスタムフック
├── stores/              # Zustand stores
├── styles/              # グローバルスタイル
├── types/               # TypeScript型定義
└── config/              # 設定ファイル
```

## デザイン原則

### モダンなUI/UX
- **ダークモード対応** - システム設定に基づく自動切り替え
- **グラスモーフィズム** - 背景のぼかしと透明度を活用
- **マイクロインタラクション** - ホバー、クリック時の細かなフィードバック
- **スムーズなページ遷移** - View Transitionsの活用
- **スケルトンローディング** - 読み込み中の優れたUX

### パフォーマンス最適化
- **画像最適化** - next/imageの活用、WebP/AVIF形式
- **コード分割** - 動的インポートの積極的活用
- **フォント最適化** - next/fontによる最適化
- **バンドルサイズ最小化** - tree-shaking、不要な依存関係の削除
- **キャッシング戦略** - 適切なCache-Controlヘッダー

### アクセシビリティ
- **WCAG 2.1 AA準拠** - コントラスト比、キーボードナビゲーション
- **セマンティックHTML** - 適切なHTML要素の使用
- **ARIA属性** - スクリーンリーダー対応
- **フォーカス管理** - 明確なフォーカスインジケーター

## コーディング規約

### TypeScript
- 厳格モード（strict: true）を使用
- 型推論を活用し、不要な型注釈は避ける
- interface より type を優先
- any の使用は禁止、unknown を使用

### React/Next.js
- Server Components をデフォルトで使用
- Client Components は必要最小限に
- カスタムフックでロジックを抽象化
- メモ化は計測後に適用

### 命名規則
- コンポーネント: PascalCase
- 関数・変数: camelCase
- 定数: UPPER_SNAKE_CASE
- 型・インターフェース: PascalCase

### CSS/Tailwind
- Tailwind のユーティリティクラスを優先
- カスタムCSSは最小限に
- レスポンシブデザインはモバイルファースト
- アニメーションは CSS変数で制御

## 実装の優先順位

1. **コア機能の実装** - 基本的な機能を確実に動作させる
2. **パフォーマンス最適化** - Core Web Vitalsの改善
3. **ビジュアルの洗練** - アニメーション、トランジション
4. **エッジケースの処理** - エラーハンドリング、ローディング状態

## セキュリティ考慮事項

- 環境変数で機密情報を管理
- CSRFトークンの実装
- 入力値のサニタイゼーション
- Content Security Policy の設定
- Rate limiting の実装

## デプロイメント

- **Vercel** - 推奨デプロイメントプラットフォーム
- **GitHub Actions** - CI/CD パイプライン
- **環境** - development, staging, production

## パフォーマンス目標

- Lighthouse スコア: 95+ (全カテゴリ)
- First Contentful Paint: < 1.0s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1

## 注意事項

- 最新のNext.js機能を積極的に採用する
- ブラウザの互換性は最新2バージョンをサポート
- プログレッシブエンハンスメントの原則に従う
- コードの可読性と保守性を重視する

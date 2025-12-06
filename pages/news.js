import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function News() {
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // ニュースデータ
  const newsData = {
    ja: {
      title: "ニュース & アップデート",
      description: "falco-plugin-nginx の最新情報、リリースノート、セキュリティアップデートをお届けします",
      nav: {
        github: "GitHub",
        installation: "インストール",
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テストレポート"
      },
      categories: {
        all: "すべて",
        release: "リリース",
        security: "セキュリティ",
        feature: "新機能",
        bugfix: "バグ修正"
      },
      items: [
        {
          id: "2025-12-06-oss-development-blog-part21",
          date: "2025-12-06",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の132日目から134日目」を公開",
          content: "相関のその先へ。\"揺れゼロ\"を目指し、そして v1.4.2 が生まれた。Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.0設計決定、docs/rules.md大規模更新。三ヶ月の積み重ねが形になった3日間の記録を公開しました。",
          highlights: [
            "Pattern A317修正（PR #765）— Normalization境界条件の揺れ解消（11/30）",
            "Pattern A318修正（PR #768）— ruleメタ情報mapping揺れ解消（11/30）",
            "E2E Run #130で65/65全成功達成",
            "v1.4.0仕様策定（DD-001〜003：統合ファイル方式/専用スクリプト/stagingブランチ）（12/03）",
            "Issue #770（空行誤検知）修正 — 検知ズレ0件達成（12/06）",
            "docs/rules.md全面更新（Issue #773）— nginx.headers[key]正式文書化（12/06）",
            "v1.4.2正式リリース — 三ヶ月の積み重ねが形に",
            "「揺れのない世界って、静かでいいね」"
          ],
          link: "/blog/falco-plugin-development-days132-134"
        },
        {
          id: "2025-11-30-oss-development-blog-part20",
          date: "2025-11-30",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の127日目から131日目」を公開",
          content: "「検知の物語」を読みやすくするための、静かな整合性の週。攻撃ペイロードの蛍光イエローハイライト、Allureログ整理、Pattern A260/A280〜A289修正。整った技術が物語を語り始めた5日間の記録を公開しました。",
          highlights: [
            "攻撃ペイロードの蛍光イエローハイライト（UI改善、11/24）",
            "Allureログ差分・アタッチメント整理（11/25）",
            "Pattern A260のJSON階層正規化（11/26）",
            "CMDiパターン群の整理（detect_text/detect_position統一、11/27）",
            "Issue #653（timestamp）調査とA280〜A289修正（11/29）",
            "detect_*系フィールドの正規化",
            "k6 Run #124再分析",
            "「整った技術は、静かに物語を語り始める」"
          ],
          link: "/blog/falco-plugin-development-days127-131"
        },
        {
          id: "2025-11-24-oss-development-blog-part19",
          date: "2025-11-24",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の119日目から126日目」を公開",
          content: "整える時間の先で、\"相関\"がついに生まれた。nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。点だったE2Eが一本の線になった8日間の記録を公開しました。",
          highlights: [
            "Pattern A243修正と\"意味の並び順\"でのレイヤ構築（11/16）",
            "JSON正規化（null/空文字/配列）による形式揺れ解消（11/17）",
            "Allure history生成順序の設計修正（11/19）",
            "Issue #660要件定義とPattern A260/A261/A262の仕様整理（11/20）",
            "nginx.headers[X-Test-ID]実装完了（最重要マイルストーン、11/23）",
            "Falco↔k6↔Allureの相関成立（E2Eが点から線へ）",
            "Allureアセット最適化",
            "\"文脈を理解したログ\"の実現"
          ],
          link: "/blog/falco-plugin-development-days119-126"
        },
        {
          id: "2025-11-16-oss-development-blog-part18",
          date: "2025-11-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の111日目から118日目」を公開",
          content: "整える技術、その先に\"相関\"という頂が見えた。Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。相関という設計に手を伸ばした8日間の記録を公開しました。",
          highlights: [
            "カスタムE2Eレポートからの撤退、Allure採用決定（11/08）",
            "暫定レスポンス検証方式の導入（杖としての役割、11/09）",
            "Phase 3ドキュメント整備による本質の明確化（11/10）",
            "Pattern A240/A241/A242の修正によるフロー整列（11/11）",
            "Allure階層構造の再定義（意味の構造化、11/12）",
            "nginx.headers[X-Test-ID]実装方針の明確化（11/11）",
            "メタデータバリエーション統一による相関基盤整備（11/12）",
            "Allureの\"意味\"としての完成（検知の物語化、11/15）"
          ],
          link: "/blog/falco-plugin-development-days111-118"
        },
        {
          id: "2025-11-08-oss-development-blog-part17",
          date: "2025-11-08",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の105日目から110日目」を公開",
          content: "サンプルデータと\"小さな安定\"の積み重ね、その先にある実装目標。Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。杖に頼らず、足そのものを作る6日間の記録を公開しました。",
          highlights: [
            "Phase 0（サンプルデータ整備）の完了（同一入力比較の基盤確立）",
            "レスポンス検証方式（暫定）導入（k6×Falco突合の安定化）",
            "XSS修正（サニタイズ／アラート名正規化）",
            "Pattern #A229 \"undefined\" 修正（null返却・k6側判定対応）",
            "Root Cause分析：nginx.headers未実装とPR #601の参照削除",
            "Proposed Solution：nginx.headers実装方針の明文化（Nginx JSON ログ推奨）",
            "最終目標の明確化：test_id相関によるE2E検知追跡の実現"
          ],
          link: "/blog/falco-plugin-development-days105-110"
        },
        {
          id: "2025-11-02-oss-development-blog-part16",
          date: "2025-11-02",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の99日目から104日目」を公開",
          content: "車輪をやめて、走るための設計へ。GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化。自作の仕組みを手放して、動き続ける設計への6日間の記録を公開しました。",
          highlights: [
            "GitHub Actions キャッシュ問題の解決（古いバイナリ復元問題）",
            "E2Eテスト基盤をcurl + jqスクリプトからk6へ全面移行",
            "テスト構成40%軽量化、実行時間が従来の半分に",
            "旧Phase1/Phase2ワークフロー統合とjqによるFalcoログ突合自動化",
            "k6-summary.htmlによる可視化レポート生成",
            "TerraformでAWS環境をコード化（VPC/Subnet/SG/EC2/k6構築）",
            "環境設計もアーキテクチャの一部であることを学んだ週"
          ],
          link: "/blog/falco-plugin-development-days99-104"
        },
        {
          id: "2025-10-26-oss-development-blog-part15",
          date: "2025-10-26",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の92日目から98日目」を公開",
          content: "環境が安定を作る。A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト（検知率74.4%）。環境設計もアーキテクチャの一部である7日間の記録を公開しました。",
          highlights: [
            "A170修正版の再テストと分析（Pre-flight check 通過、timeout 原因分析）",
            "再試行ロジックの導入（curl 失敗時に最大3回・3秒間隔で再実行）",
            "Pattern #A171 の発見（grep の正規表現解釈問題）",
            "A171修正と再検証（正規表現から単純な文字列検索へ変更）",
            "テスト全体の整理（環境・設定・論理の3分類）",
            "Falco の出力制限を発見（rate: .03333 → 1, max_burst: 1 → 100）",
            "Pattern #A216 統合テスト（125パターン、検知率74.4%）"
          ],
          link: "/blog/falco-plugin-development-days92-98"
        },
        {
          id: "2025-10-19-oss-development-blog-part14",
          date: "2025-10-19",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の85日目から91日目」を公開",
          content: "設計の順序が安定を生む。A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認。順序を設計することで\"説明できる安定\"へと進化した7日間の記録を公開しました。",
          highlights: [
            "A155修正の実装開始（起動試行削除、Pre-flight check強化）",
            "Pattern #A170 発見と記録（環境検出と設定順序の不整合）",
            "A170クリティカルバグの修正（determine_environment優先実行）",
            "残存プロセスとポート競合対策（quit→sleep→start）",
            "ドキュメント整備（E2E_PHASE2_IMPLEMENTATION_GUIDE.md、E2E_NGINX_MIGRATION_TASKS.md、PROBLEM_PATTERNS.md）",
            "全体検証と再現性の確認（Run #18432286002）",
            "タイミング設計の課題整理（待機処理とリトライ導入）"
          ],
          link: "/blog/falco-plugin-development-days85-91"
        },
        {
          id: "2025-10-12-oss-development-blog-part13",
          date: "2025-10-12",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の78日目から84日目」を公開",
          content: "環境差異と起動順序という硬い壁。Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、そしてPattern A154からA155への進化。設定と起動の分離設計を学んだ7日間の記録を公開しました。",
          highlights: [
            "Kubernetes対応の仕上げ（起動方式の一本化）",
            "ENV-MIGRATE-004/005 実装（80↔8080 自動切替・非特権対応）",
            "TEST-VERIFY-001 実行／再実行（各環境で確認）",
            "ドキュメント更新（E2E_NGINX_MIGRATION_TASKS.md、KUBERNETES_POD_COMPATIBILITY.md）",
            "PR #491 マージ（A154: 環境対応設定）",
            "Pattern #A155 発見と記録（設定と起動の分離）",
            "Issue #496 作成、PROBLEM_PATTERNS.md A155 追記（Lines 1088–1346）"
          ],
          link: "/blog/falco-plugin-development-days78-84"
        },
        {
          id: "2025-10-03-oss-development-blog-part12",
          date: "2025-10-03",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の73日目から77日目」を公開",
          content: "小さな制御から回復設計へ。バッチタイムアウト対策、nginx環境変化への対応、二重修正の交差点、回復を設計したテスト、そしてsummary.html生成機能の追加。5日間で学んだ開発の教訓を公開しました。",
          highlights: [
            "Issue #42 修正（バッチタイムアウト対策）",
            "nginx 自動インストール対応（GitHub Actions環境更新）",
            "E2Eワークフローの依存関係再構築",
            "リトライ制御によるテスト安定化",
            "summary.html 生成機能の追加（テスト結果可視化）",
            "Phase 2 ドキュメント更新（Operational Notes・Pattern一覧）"
          ],
          link: "/blog/falco-plugin-development-days73-77"
        },
        {
          id: "2025-09-27-oss-development-blog-part11",
          date: "2025-09-27",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の68日目から72日目」を公開",
          content: "検知率ゼロの衝撃から体系的な改善へ。失敗を見える化する勇気、構造が安心を生むこと、小さな改善が安定を育てること、負債と向き合う覚悟、制約を受け入れて進む力。5日間で学んだ開発の本質を公開しました。",
          highlights: [
            "検知率0%からの改善と summary.json 強制生成",
            "ドキュメントの三層構造化（要件定義・実装ガイド・タスク定義）",
            "PR #394-#401によるCI/CD安定化（成功率0%→80%）",
            "約10,000個のオフラインランナー削除作業",
            "Docker in Docker からの脱却と Kubernetes Pod 対応",
            "PROBLEM_PATTERNS.md へのパターン追加（#A010-#A078）"
          ],
          link: "/blog/falco-plugin-development-days68-72"
        },
        {
          id: "2025-09-21-oss-development-blog-part10",
          date: "2025-09-21",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目」を公開",
          content: "モグラ叩きから体系化へ、計画と現実のギャップ。場当たり的な修正を繰り返す日々から、体系的な品質管理へと進化した6日間の記録を公開しました。",
          highlights: [
            "モグラ叩き型の修正から体系化への転換",
            "攻撃カテゴリ×ルール×結果のマトリクス作成",
            "攻撃パターンの代表性と重要度による整理",
            "テストレポートのカテゴリ別改善",
            "Phase 2テストレポート公開計画の策定",
            "810+パターンのうち69パターンでの進捗状況"
          ],
          link: "/blog/falco-plugin-development-days62-67"
        },
        {
          id: "2025-09-14-oss-development-blog-part9",
          date: "2025-09-14",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目」を公開",
          content: "大規模攻撃検証とE2Eテストのデバッグ戦記。出力仕様変更による致命的な不具合を経験し、ドキュメント参照の重要性を痛感。失敗を財産に変える5日間の記録を公開しました。",
          highlights: [
            "大規模攻撃シナリオの検証と失敗ケースの記録",
            "出力仕様変更による致命的な不具合とその修正",
            "ドキュメント遵守チェック項目の追加",
            "CI基盤の不具合調査と記録",
            "セキュリティE2Eテストのデバッグとルール調整",
            "失敗を再発防止の仕組みへ昇華"
          ],
          link: "/blog/falco-plugin-development-days57-61"
        },
        {
          id: "2025-09-07-oss-development-blog-part8",
          date: "2025-09-07",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目」を公開",
          content: "テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録しました。",
          highlights: [
            "End-to-End テストレポート (Phase 1) の公開",
            "i18n（国際化対応）の実装",
            "攻撃検証の再挑戦と過検知調整",
            "37ルール・810+攻撃パターンへの大幅拡充",
            "統合ドキュメント IMPLEMENTED_RULES_OVERVIEW.md の作成",
            "OSSとしての透明性の実現"
          ],
          link: "/blog/falco-plugin-development-days51-56"
        },
        {
          id: "2025-08-30-e2e-test-report",
          date: "2025-08-30",
          category: "feature",
          type: "important",
          title: "End-to-End テストレポート (Phase 1) を公開",
          content: "falco-plugin-nginxのEnd-to-Endテストレポートを公開しました。14項目のテストで品質を可視化し、12件の攻撃検知成功と2件の未検知パターンを含む詳細な結果を提供しています。",
          highlights: [
            "14項目の包括的なE2Eテスト実施",
            "SQLインジェクション攻撃検知: 5件成功",
            "XSS攻撃検知: 7件成功",
            "未検知パターンの改善提案を含む",
            "日英両言語対応のインタラクティブレポート"
          ],
          link: "/quality"
        },
        {
          id: "2025-08-30-release-v1.3.0",
          date: "2025-08-30",
          category: "release",
          type: "important",
          title: "falco-plugin-nginx v1.3.0 リリース",
          content: "falco-plugin-nginx v1.3.0をリリースしました。安定性向上と新機能の追加により、Nginxのセキュリティ監視がさらに強化されました。",
          highlights: [
            "パフォーマンスの最適化",
            "検知ルールの改善",
            "インストールプロセスの簡素化",
            "Linux x86_64対応バイナリ提供"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v1.3.0"
        },
        {
          id: "2025-08-30-oss-development-blog-part7",
          date: "2025-08-30",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目」を公開",
          content: "テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録しました。",
          highlights: [
            "E2Eテストの観測点強化",
            "HTMLレポートの不具合修正",
            "攻撃トラフィック検証の準備",
            "XSSサンプル表示問題への対処",
            "失敗の記録と資産化の継続"
          ],
          link: "/blog/falco-plugin-development-days45-50"
        },
        {
          id: "2025-08-24-oss-development-blog-part6",
          date: "2025-08-24",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目」を公開",
          content: "失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力。PROBLEM_PATTERNS.mdに刻まれた6日間の教訓と、失敗を財産に変える文化の構築を物語形式で綴りました。",
          highlights: [
            "CI/CDの失敗パターン整理と文書化",
            "E2Eテストにおける出力消失問題の調査",
            "証拠収集の仕組み導入",
            "Self-hosted Runner破壊の教訓",
            "失敗を財産に変える文化"
          ],
          link: "/blog/falco-plugin-development-days39-44"
        },
        {
          id: "2025-08-17-oss-development-blog-special",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "特別編「E2Eテスト前夜 — Falcoya君の作戦会議」を公開",
          content: "E2Eテストという総合試験への挑戦を前に、設計と仕様を詰める日々、テストの規模感、そしてOSSとしての決意を綴った特別編を公開しました。これから始まる真のボス戦への準備と覚悟の物語です。",
          highlights: [
            "E2Eテスト設計の詳細",
            "200〜1,200件のテストケース規模",
            "KPI目標と品質保証への決意"
          ],
          link: "/blog/falco-plugin-development-e2e-strategy"
        },
        {
          id: "2025-08-17-oss-development-blog-part5",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目」を公開",
          content: "公開の感動とOSSの洗礼、そして次なる試練を綴った記録を公開しました。falcoya.dev公開の誕生日、CI/CD修羅場を乗り越え、E2Eテストという新たな山へ。OSS開発の現実を物語形式で綴っています。",
          highlights: [
            "falcoya.dev公開とプロトタイプリリース",
            "公開の感動とOSSの洗礼",
            "CI/CDパイプラインの根本的修正",
            "次なる試練：E2Eテストへの挑戦",
            "失敗を資産に変える記録の重要性"
          ],
          link: "/blog/falco-plugin-development-days33-38"
        },
        {
          id: "2025-08-17-oss-development-blog-part4",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目」を公開",
          content: "OSSはコードだけじゃない、ポリシーと文化も育てる5日間の記録を公開しました。プロジェクト方針の見直し、ドキュメントの重要性、そして信頼の構築について、物語形式で綴っています。",
          highlights: [
            "プロジェクト方針とMVPの明確化",
            "ドキュメントがもたらす時間を超えた価値",
            "ポリシー策定と文化の形成",
            "OSSにおける信頼の積み上げ",
            "コードを超えた価値の創造"
          ],
          link: "/blog/falco-plugin-development-days28-32"
        },
        {
          id: "2025-08-16-oss-development-blog-part3",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目」を公開",
          content: "OSSの波に揉まれ、ドキュメントに救われた5日間の記録を公開しました。プロジェクト管理の見直し、セキュリティ修正、コードレビューなど、地道だけど重要な作業の実態を物語形式で綴っています。",
          highlights: [
            "プロジェクト管理ドキュメントの整備",
            "CI/CDの権限設定とセキュリティ強化",
            "テストケースの網羅性向上",
            "コードレビューとドキュメント再編",
            "OSSマラソンの継続戦略"
          ],
          link: "/blog/falco-plugin-development-days23-27"
        },
        {
          id: "2025-08-16-oss-development-blog-part2",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目」を公開",
          content: "初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した8日間の開発記録を公開しました。CI/CDの安定化、検知ルールの精度調整、Dockerでの再現環境構築など、OSS開発の実態を物語形式で綴っています。",
          highlights: [
            "初めてのFalcoアラート発生の瞬間",
            "ノイズ祭りから精度調整への道のり",
            "Nginxログの多様性との格闘",
            "Docker再現環境の構築と罠",
            "Phase 1完了までの試行錯誤"
          ],
          link: "/blog/falco-plugin-development-days15-22"
        },
        {
          id: "2025-08-16-oss-development-blog",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグイン開発：Falcoya君の7日間」を公開",
          content: "FalcoでNginxログを解析し攻撃を検知するプラグインの開発過程を、7日間の失敗と学びを包み隠さずお届けする開発記録を公開しました。OSS開発の実態を物語形式で綴っています。",
          highlights: [
            "Docker環境構築とCI/CDの苦労話",
            "Go言語とFalco SDKの統合課題",
            "GitHub Actionsの無限ループ事件",
            "絵文字によるAPI通信エラーの教訓",
            "OSSプロジェクトの運用ノウハウ"
          ],
          link: "/blog/falco-plugin-development-7days"
        },
        {
          id: "2025-08-11-blog-post",
          date: "2025-08-11",
          category: "feature",
          type: "new",
          title: "ブログ記事「Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！」を公開",
          content: "AWS EC2環境でFalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法について、実践的なチュートリアル記事を公開しました。",
          highlights: [
            "AWS EC2環境でのセットアップ手順",
            "SQLインジェクション、XSS、ディレクトリトラバーサルの検証",
            "カスタムルールの作成方法",
            "実際の攻撃シミュレーション例"
          ],
          link: "/blog/falco-nginx-security-tutorial"
        },
        {
          id: "2025-08-11-website-launch",
          date: "2025-08-11",
          category: "release",
          type: "major",
          title: "FALCOYA Webサイトを公開しました",
          content: "falco-plugin-nginxの公式Webサイト falcoya.dev を公開しました。NginxアクセスログをFalcoで解析し、SQL InjectionやXSSなどの攻撃パターンを検知するプラグインです。",
          highlights: [
            "プロジェクト概要とドキュメント",
            "インストールガイド",
            "セキュリティ検知ルールの詳細",
            "技術ブログの公開"
          ],
          link: "/"
        }
      ]
    },
    en: {
      title: "News & Updates",
      description: "Latest news, release notes, and security updates for falco-plugin-nginx",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog",
        news: "News",
        quality: "Test Report"
      },
      categories: {
        all: "All",
        release: "Release",
        security: "Security",
        feature: "Features",
        bugfix: "Bug Fixes"
      },
      items: [
        {
          id: "2025-12-06-oss-development-blog-part21-en",
          date: "2025-12-06",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 132-134\" Published",
          content: "Beyond correlation. Aiming for \"zero fluctuations,\" and v1.4.2 was born. Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.0 design decisions, docs/rules.md major update. Three days when three months of accumulation took shape.",
          highlights: [
            "Pattern A317 fix (PR #765) — Normalization boundary condition fluctuation resolved (11/30)",
            "Pattern A318 fix (PR #768) — rule metadata mapping fluctuation resolved (11/30)",
            "E2E Run #130 achieved 65/65 all success",
            "v1.4.0 specification formulation (DD-001-003: Integrated file method/Dedicated scripts/staging branch) (12/03)",
            "Issue #770 (empty line false detection) fix — 0 detection mismatches achieved (12/06)",
            "docs/rules.md complete update (Issue #773) — nginx.headers[key] official documentation (12/06)",
            "v1.4.2 official release — Three months of accumulation took shape",
            "\"A world without fluctuations is quiet and nice\""
          ],
          link: "/blog/falco-plugin-development-days132-134-en"
        },
        {
          id: "2025-11-30-oss-development-blog-part20-en",
          date: "2025-11-30",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 127-131\" Published",
          content: "A quiet week of consistency to make the \"detection story\" readable. Attack payload fluorescent yellow highlighting, Allure log organization, Pattern A260/A280-A289 fixes. Five days when aligned technology began to tell its story.",
          highlights: [
            "Attack payload fluorescent yellow highlighting (UI improvement, 11/24)",
            "Allure log diff and attachment organization (11/25)",
            "Pattern A260 JSON hierarchy normalization (11/26)",
            "CMDi pattern group organization (detect_text/detect_position unification, 11/27)",
            "Issue #653 (timestamp) investigation and A280-A289 fixes (11/29)",
            "detect_* field normalization",
            "k6 Run #124 re-analysis",
            "\"Aligned technology quietly begins to tell its story\""
          ],
          link: "/blog/falco-plugin-development-days127-131-en"
        },
        {
          id: "2025-11-24-oss-development-blog-part19-en",
          date: "2025-11-24",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 119-126\" Published",
          content: "Beyond the time of alignment, \"correlation\" was finally born. nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established. Eight days when scattered E2E points became a single line.",
          highlights: [
            "Pattern A243 fix and layer construction by \"order of meaning\" (11/16)",
            "JSON normalization (null/empty string/array) resolving format variations (11/17)",
            "Allure history generation order design fix (11/19)",
            "Issue #660 requirements definition and Pattern A260/A261/A262 specification (11/20)",
            "nginx.headers[X-Test-ID] implementation complete (key milestone, 11/23)",
            "Falco↔k6↔Allure correlation established (E2E from points to line)",
            "Allure asset optimization",
            "Realization of \"context-aware logs\""
          ],
          link: "/blog/falco-plugin-development-days119-126-en"
        },
        {
          id: "2025-11-16-oss-development-blog-part18-en",
          date: "2025-11-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 111-118\" Published",
          content: "The art of alignment, and beyond it, the peak called \"correlation\" became visible. Allure adoption, response validation method introduction, nginx.headers implementation policy clarification. Eight days of reaching for correlation design.",
          highlights: [
            "Retreat from custom E2E reports, Allure adoption decision (11/08)",
            "Provisional response validation method introduction (as a crutch, 11/09)",
            "Phase 3 documentation organization clarifying essence (11/10)",
            "Pattern A240/A241/A242 fixes aligning flow (11/11)",
            "Allure hierarchical structure redefinition (meaning structuring, 11/12)",
            "nginx.headers[X-Test-ID] implementation policy clarification (11/11)",
            "Metadata variation unification for correlation foundation (11/12)",
            "Allure's completion as \"meaning\" (detection narrative, 11/15)"
          ],
          link: "/blog/falco-plugin-development-days111-118-en"
        },
        {
          id: "2025-11-08-oss-development-blog-part17-en",
          date: "2025-11-08",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 105-110\" Published",
          content: "Sample data and \"small stability\" accumulation, with implementation goals beyond. Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation. Six days of creating the foundation itself, not relying on crutches.",
          highlights: [
            "Phase 0 (sample data preparation) completion (established foundation for identical input comparison)",
            "Response validation method (provisional) introduction (k6×Falco cross-reference stabilization)",
            "XSS fixes (sanitization / alert name normalization)",
            "Pattern #A229 \"undefined\" fix (null return / k6-side determination support)",
            "Root Cause analysis: nginx.headers non-implementation and PR #601's reference removal",
            "Proposed Solution: nginx.headers implementation policy articulation (Nginx JSON log recommended)",
            "Final goal clarification: E2E detection tracking via test_id correlation"
          ],
          link: "/blog/falco-plugin-development-days105-110-en"
        },
        {
          id: "2025-11-02-oss-development-blog-part16-en",
          date: "2025-11-02",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 99-104\" Published",
          content: "Stop reinventing the wheel, design for continuous operation. Solving GitHub Actions cache issues, full migration to k6, test infrastructure redesign, and environment codification with Terraform. Six days of evolution from building custom mechanisms to designing sustainable systems.",
          highlights: [
            "Resolved GitHub Actions cache issue (old binary restoration problem)",
            "Full migration of E2E test infrastructure from curl + jq scripts to k6",
            "40% lighter test configuration, execution time cut in half",
            "Integrated old Phase1/Phase2 workflows with automated Falco log cross-checking via jq",
            "k6-summary.html visualization report generation",
            "Codified AWS environment with Terraform (VPC/Subnet/SG/EC2/k6 setup)",
            "A week of learning that environment design is part of architecture"
          ],
          link: "/blog/falco-plugin-development-days99-104-en"
        },
        {
          id: "2025-10-26-oss-development-blog-part15-en",
          date: "2025-10-26",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 92-98\" Published",
          content: "Environment creates stability. A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, understanding Falco output limits, Pattern A216 integration test (74.4% detection rate). Seven days of learning that environment design is part of architecture.",
          highlights: [
            "A170 fix re-testing and analysis (Pre-flight check passed, timeout cause analysis)",
            "Retry logic introduction (curl failure retry up to 3 times at 3-second intervals)",
            "Pattern #A171 discovery (grep regular expression interpretation issue)",
            "A171 fix and re-verification (changed from regex to simple string search)",
            "Overall test organization (environment, configuration, logic classification)",
            "Falco output limit discovery (rate: .03333 → 1, max_burst: 1 → 100)",
            "Pattern #A216 integration test (125 patterns, 74.4% detection rate)"
          ],
          link: "/blog/falco-plugin-development-days92-98-en"
        },
        {
          id: "2025-10-19-oss-development-blog-part14-en",
          date: "2025-10-19",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 85-91\" Published",
          content: "The order of design creates stability. A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, and reproducibility verification. Seven days of evolution toward \"explainable stability\" through designing order.",
          highlights: [
            "A155 fix implementation start (startup attempt removal, Pre-flight check enhancement)",
            "Pattern #A170 discovery and recording (environment detection and configuration order mismatch)",
            "A170 critical bug fix (determine_environment priority execution)",
            "Residual process and port conflict measures (quit→sleep→start)",
            "Documentation maintenance (E2E_PHASE2_IMPLEMENTATION_GUIDE.md, E2E_NGINX_MIGRATION_TASKS.md, PROBLEM_PATTERNS.md)",
            "Overall verification and reproducibility confirmation (Run #18432286002)",
            "Timing design task organization (wait processing and retry introduction)"
          ],
          link: "/blog/falco-plugin-development-days85-91-en"
        },
        {
          id: "2025-10-12-oss-development-blog-part13-en",
          date: "2025-10-12",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 78-84\" Published",
          content: "The hard wall of environment differences and startup sequence. Kubernetes compatibility completion, non-privileged design, ENV-MIGRATE expansion, and evolution from Pattern A154 to A155. Seven days of learning about separation of configuration and startup design.",
          highlights: [
            "Finalizing Kubernetes support (unifying startup methods)",
            "ENV-MIGRATE-004/005 implementation (80↔8080 automatic switching, non-privileged support)",
            "TEST-VERIFY-001 execution/re-execution (confirmation in each environment)",
            "Document updates (E2E_NGINX_MIGRATION_TASKS.md, KUBERNETES_POD_COMPATIBILITY.md)",
            "PR #491 merged (A154: environment adaptation configuration)",
            "Pattern #A155 discovery and recording (separation of configuration and startup)",
            "Issue #496 creation, PROBLEM_PATTERNS.md A155 addition (Lines 1088–1346)"
          ],
          link: "/blog/falco-plugin-development-days78-84-en"
        },
        {
          id: "2025-10-03-oss-development-blog-part12-en",
          date: "2025-10-03",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 73-77\" Published",
          content: "From small controls to recovery design. Batch timeout countermeasures, nginx environment changes, intersection of dual fixes, designing recovery in tests, and summary.html generation. Five days of development lessons.",
          highlights: [
            "Issue #42 fix (batch timeout countermeasures)",
            "nginx auto-installation support (GitHub Actions environment update)",
            "E2E workflow dependency reconstruction",
            "Test stabilization through retry controls",
            "summary.html generation feature addition (test result visualization)",
            "Phase 2 document updates (Operational Notes, Pattern lists)"
          ],
          link: "/blog/falco-plugin-development-days73-77-en"
        },
        {
          id: "2025-09-27-oss-development-blog-part11-en",
          date: "2025-09-27",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya's Days 68-72\" Published",
          content: "From zero detection rate to systematic improvements. The courage to visualize failure, how structure creates security, small improvements build stability, facing technical debt, and the power of accepting constraints. Five essential lessons from development.",
          highlights: [
            "Improvement from 0% detection rate and forced summary.json generation",
            "Three-layer documentation structure (requirements, implementation, tasks)",
            "CI/CD stabilization via PR #394-#401 (success rate 0% → 80%)",
            "Cleanup of approximately 10,000 offline runners",
            "Migration from Docker in Docker to Kubernetes Pod support",
            "Pattern additions to PROBLEM_PATTERNS.md (#A010-#A078)"
          ],
          link: "/blog/falco-plugin-development-days68-72-en"
        },
        {
          id: "2025-09-21-oss-development-blog-part10-en",
          date: "2025-09-21",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 62-67 of Falcoya\" Published",
          content: "From whack-a-mole to systematization, the gap between planning and reality. A 6-day record of evolution from repetitive ad-hoc fixes to systematic quality management.",
          highlights: [
            "Shifted from whack-a-mole fixes to systematization",
            "Created attack category × rule × result matrix",
            "Organized attack patterns by representativeness and importance",
            "Improved test reports by category",
            "Formulated Phase 2 test report publication plan",
            "Progress status: 69 patterns out of 810+"
          ],
          link: "/blog/falco-plugin-development-days62-67-en"
        },
        {
          id: "2025-09-14-oss-development-blog-part9-en",
          date: "2025-09-14",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Falcoya Days 57-61\" Published",
          content: "Large-scale attack verification and E2E test debugging chronicle. Experiencing critical issues from output specification changes, learning the importance of documentation. A 5-day record of turning failures into assets.",
          highlights: [
            "Large-scale attack scenario verification and failure case recording",
            "Critical bug from output specification changes and its fix",
            "Addition of documentation compliance check items",
            "CI infrastructure issue investigation and recording",
            "Security E2E test debugging and rule adjustments",
            "Transforming failures into recurrence prevention mechanisms"
          ],
          link: "/blog/falco-plugin-development-days57-61-en"
        },
        {
          id: "2025-09-07-oss-development-blog-part8-en",
          date: "2025-09-07",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 51-56 of Falcoya\" Published",
          content: "Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency.",
          highlights: [
            "End-to-End Test Report (Phase 1) publication",
            "i18n (internationalization) implementation",
            "Attack verification re-challenge and false positive adjustment",
            "Massive expansion to 37 rules and 810+ attack patterns",
            "Creation of integrated documentation IMPLEMENTED_RULES_OVERVIEW.md",
            "Achieving OSS transparency"
          ],
          link: "/blog/falco-plugin-development-days51-56-en"
        },
        {
          id: "2025-08-30-e2e-test-report",
          date: "2025-08-30",
          category: "feature",
          type: "important",
          title: "End-to-End Test Report (Phase 1) Released",
          content: "Released the End-to-End test report for falco-plugin-nginx. Quality is visualized through 14 test items, providing detailed results including 12 successful attack detections and 2 undetected patterns.",
          highlights: [
            "14 comprehensive E2E test items",
            "SQL injection attack detection: 5 successful",
            "XSS attack detection: 7 successful",
            "Includes improvement suggestions for undetected patterns",
            "Interactive report in both Japanese and English"
          ],
          link: "/quality"
        },
        {
          id: "2025-08-30-release-v1.3.0",
          date: "2025-08-30",
          category: "release",
          type: "important",
          title: "falco-plugin-nginx v1.3.0 Released",
          content: "falco-plugin-nginx v1.3.0 has been released. Enhanced stability and new features strengthen Nginx security monitoring capabilities.",
          highlights: [
            "Performance optimizations",
            "Improved detection rules",
            "Simplified installation process",
            "Linux x86_64 binary support"
          ],
          link: "https://github.com/takaosgb3/falco-plugin-nginx/releases/tag/v1.3.0"
        },
        {
          id: "2025-08-30-oss-development-blog-part7",
          date: "2025-08-30",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 45-50 of Falcoya\" Published",
          content: "Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues.",
          highlights: [
            "E2E test observation point enhancement",
            "HTML report bug fixes",
            "Attack traffic verification preparation",
            "Addressing XSS sample display issues",
            "Continuing failure documentation and asset creation"
          ],
          link: "/blog/falco-plugin-development-days45-50-en"
        },
        {
          id: "2025-08-24-oss-development-blog-part6",
          date: "2025-08-24",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 39-44 of Falcoya\" Published",
          content: "Recording failures and notes, learning the power of habits by breaking Runner. Six days of lessons carved into PROBLEM_PATTERNS.md and building a culture of turning failures into assets, told in narrative form.",
          highlights: [
            "Organizing and documenting CI/CD failure patterns",
            "Investigating output loss issues in E2E testing",
            "Introducing evidence collection mechanisms",
            "Lessons from Self-hosted Runner destruction",
            "Culture of turning failures into assets"
          ],
          link: "/blog/falco-plugin-development-days39-44-en"
        },
        {
          id: "2025-08-17-oss-development-blog-special",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Special Edition \"The Eve of E2E Testing — Falcoya's Strategy Meeting\" Published",
          content: "Published a special edition chronicling the days of refining design and specifications, the scale of testing, and commitment as OSS before challenging the comprehensive E2E testing. A story of preparation and determination for the true boss battle about to begin.",
          highlights: [
            "Detailed E2E test design",
            "200-1,200 test case scale",
            "KPI targets and commitment to quality assurance"
          ],
          link: "/blog/falco-plugin-development-e2e-strategy-en"
        },
        {
          id: "2025-08-17-oss-development-blog-part5",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 33-38 of Falcoya\" Published",
          content: "Published a record of the emotion of going public and the baptism of OSS, then the next trial. The birthday of falcoya.dev's launch, overcoming CI/CD struggles, and heading toward the new mountain of E2E testing. The reality of OSS development told in narrative form.",
          highlights: [
            "Publishing falcoya.dev and prototype release",
            "The emotion of going public and OSS baptism",
            "Fundamental fixes to CI/CD pipeline",
            "Next trial: Challenging E2E testing",
            "The importance of turning failures into assets through documentation"
          ],
          link: "/blog/falco-plugin-development-days33-38-en"
        },
        {
          id: "2025-08-17-oss-development-blog-part4",
          date: "2025-08-17",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 28-32 of Falcoya\" Published",
          content: "OSS isn't just code, it's about cultivating policy and culture. Published a 5-day record exploring project direction review, the importance of documentation, and building trust, all told in narrative form.",
          highlights: [
            "Project direction and MVP clarification",
            "The timeless value documentation brings",
            "Policy creation and culture formation",
            "Building trust in OSS",
            "Creating value beyond code"
          ],
          link: "/blog/falco-plugin-development-days28-32-en"
        },
        {
          id: "2025-08-16-oss-development-blog-part3",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 23-27 of Falcoya\" Published",
          content: "5 days tossed by OSS waves and saved by documentation. A narrative of project management review, security fixes, code reviews, and other steady but important work in OSS development.",
          highlights: [
            "Project management documentation organization",
            "CI/CD permission settings and security hardening",
            "Test case coverage improvement",
            "Code review and documentation reorganization",
            "OSS marathon continuation strategy"
          ],
          link: "/blog/falco-plugin-development-days23-27-en"
        },
        {
          id: "2025-08-16-oss-development-blog-part2",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: Days 15-22 of Falcoya\" Published",
          content: "8 days where the joy of first alerts coexisted with drowning in noise. CI/CD stabilization, detection rule tuning, Docker environment setup, and more - an OSS development story told in narrative form.",
          highlights: [
            "The moment of the first Falco alert",
            "Journey from noise festival to precision tuning",
            "Wrestling with Nginx log diversity",
            "Docker reproduction environment setup and traps",
            "Trial and error until Phase 1 completion"
          ],
          link: "/blog/falco-plugin-development-days15-22-en"
        },
        {
          id: "2025-08-16-oss-development-blog",
          date: "2025-08-16",
          category: "feature",
          type: "new",
          title: "Blog Post \"Falco + Nginx Plugin Development: 7 Days of Falcoya\" Published",
          content: "A development diary detailing the process of creating a Falco plugin for Nginx log analysis and attack detection, sharing 7 days of failures and learnings in OSS development through a narrative format.",
          highlights: [
            "Docker environment setup and CI/CD challenges",
            "Go language and Falco SDK integration issues",
            "GitHub Actions infinite loop incident",
            "Lessons from emoji-caused API communication errors",
            "OSS project operation know-how"
          ],
          link: "/blog/falco-plugin-development-7days-en"
        },
        {
          id: "2025-08-11-blog-post",
          date: "2025-08-11",
          category: "feature",
          type: "new",
          title: "Blog Post \"Real-time Web Attack Detection with Falco + Nginx Plugin!\" Published",
          content: "A practical tutorial article on detecting web application attacks in real-time using Falco and Nginx plugin in AWS EC2 environment has been published.",
          highlights: [
            "Setup instructions in AWS EC2 environment",
            "Verification of SQL injection, XSS, and directory traversal",
            "Custom rule creation methods",
            "Real attack simulation examples"
          ],
          link: "/blog/falco-nginx-security-tutorial-en"
        },
        {
          id: "2025-08-11-website-launch",
          date: "2025-08-11",
          category: "release",
          type: "major",
          title: "FALCOYA Website Launched",
          content: "The official website for falco-plugin-nginx, falcoya.dev, has been launched. The plugin analyzes Nginx access logs with Falco to detect attack patterns such as SQL Injection and XSS.",
          highlights: [
            "Project overview and documentation",
            "Installation guide",
            "Security detection rules details",
            "Technical blog publication"
          ],
          link: "/"
        }
      ]
    }
  }

  const content = newsData[language]

  // カテゴリ別フィルタリング
  const filteredNews = selectedCategory === 'all' 
    ? content.items 
    : content.items.filter(item => item.category === selectedCategory)

  // タイプ別のバッジカラー
  const getTypeColor = (type) => {
    switch(type) {
      case 'major': return 'type-major'
      case 'important': return 'type-important'
      case 'new': return 'type-new'
      case 'enhancement': return 'type-enhancement'
      case 'patch': return 'type-patch'
      default: return 'type-default'
    }
  }

  // カテゴリ別のアイコン
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'release': return '🚀'
      case 'security': return '🔐'
      case 'feature': return '✨'
      case 'bugfix': return '🐛'
      default: return '📢'
    }
  }

  // 日付フォーマット
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    if (language === 'ja') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }

  // 画面サイズ変更時にモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{content.title} - FALCOYA</title>
        <meta name="description" content={content.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
                <span>FALCOYA</span>
              </a>
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <ul className="nav-menu desktop-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer">{content.nav.github}</a></li>
            <li><Link href="/#installation">{content.nav.installation}</Link></li>
            <li><Link href="/#detection">{content.nav.detection}</Link></li>
            <li><Link href="/blog">{content.nav.blog}</Link></li>
            <li><Link href="/news" className="active">{content.nav.news}</Link></li>
            <li><Link href="/quality">{content.nav.quality}</Link></li>
          </ul>
          
          <div className="nav-controls">
            <div className="language-switcher">
              <button 
                className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
                onClick={() => setLanguage('ja')}
              >
                日本語
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
        
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{content.nav.github}</a></li>
            <li><Link href="/#installation"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.installation}</a></Link></li>
            <li><Link href="/#detection"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.detection}</a></Link></li>
            <li><Link href="/blog"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.blog}</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMobileMenuOpen(false)} className="active">{content.nav.news}</a></Link></li>
            <li><Link href="/quality"><a onClick={() => setMobileMenuOpen(false)}>{content.nav.quality}</a></Link></li>
          </ul>
        </div>
      </nav>

      <main className="news-container">
        <div className="container">
          <div className="news-header">
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>

          <div className="news-filters">
            {Object.entries(content.categories).map(([key, label]) => (
              <button
                key={key}
                className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="news-timeline">
          {filteredNews.length === 0 ? (
            <div className="no-news">
              <p>{language === 'ja' ? '現在、お知らせはありません。' : 'No news available at this time.'}</p>
            </div>
          ) : (
            filteredNews.map((item) => (
              <article key={item.id} className="news-item">
                <div className="news-date">
                  <span className="date-text">{formatDate(item.date)}</span>
                </div>
                
                <div className="news-content">
                  <div className="news-header-row">
                    <span className="category-icon">{getCategoryIcon(item.category)}</span>
                    <span className={`news-type ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="news-category">
                      {content.categories[item.category]}
                    </span>
                  </div>
                  
                  <h2 className="news-title">
                    {item.link ? (
                      item.link.startsWith('http') ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="title-link"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link href={item.link}>
                          <a className="title-link">{item.title}</a>
                        </Link>
                      )
                    ) : (
                      item.title
                    )}
                  </h2>
                  <p className="news-description">{item.content}</p>
                  
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="news-highlights">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {item.link && (
                    item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        className="news-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === 'ja' ? '詳細を見る →' : 'Learn more →'}
                      </a>
                    ) : (
                      <Link href={item.link}>
                        <a className="news-link">
                          {language === 'ja' ? '詳細を見る →' : 'Learn more →'}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </article>
            ))
          )}
        </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>
                {language === 'ja' 
                  ? 'Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン'
                  : 'Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications'
                }
              </p>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'リンク' : 'Links'}</h4>
              <ul>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx">
                  {language === 'ja' ? 'GitHubリポジトリ' : 'GitHub Repository'}
                </a></li>
                <li><a href="https://github.com/takaosgb3/falco-plugin-nginx/blob/main/README.md">
                  {language === 'ja' ? 'ドキュメント' : 'Documentation'}
                </a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'ライセンス' : 'License'}</h4>
              <p>Apache License 2.0</p>
              <p>{language === 'ja' ? 'オープンソースソフトウェア' : 'Open Source Software'}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .no-news {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .news-container {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 60px;
          background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .news-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .news-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .news-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .news-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          border: 2px solid var(--border-color);
          border-radius: 25px;
          background: white;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
          color: white;
          border-color: transparent;
        }

        .news-timeline {
          position: relative;
          padding-left: 40px;
        }

        .news-timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
        }

        .news-item {
          position: relative;
          margin-bottom: 40px;
          animation: slideInUp 0.6s ease;
        }

        .news-item::before {
          content: '';
          position: absolute;
          left: -36px;
          top: 8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--gradient-start);
        }

        .news-date {
          position: absolute;
          left: -160px;
          top: 5px;
          width: 100px;
          text-align: right;
        }

        .date-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .news-content {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }

        .news-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .category-icon {
          font-size: 1.5rem;
        }

        .news-type {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .type-major {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .type-important {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .type-new {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .type-enhancement {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: white;
        }

        .type-patch {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
        }

        .news-category {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .news-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .title-link {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .title-link:hover {
          color: var(--primary-blue);
        }

        .news-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .news-highlights {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .news-highlights li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 8px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .news-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--cyber-green);
          font-weight: bold;
        }

        .news-link {
          display: inline-block;
          margin-top: 10px;
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .news-link:hover {
          color: var(--gradient-start);
        }

        .nav-menu a.active,
        .mobile-nav-menu a.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .news-container {
            padding-top: 100px;
          }

          .news-header h1 {
            font-size: 2rem;
          }

          .news-header p {
            font-size: 1rem;
          }

          .news-timeline {
            padding-left: 30px;
          }

          .news-timeline::before {
            left: 4px;
          }

          .news-item::before {
            left: -30px;
            width: 12px;
            height: 12px;
          }

          .news-date {
            position: static;
            margin-bottom: 10px;
            text-align: left;
          }

          .news-content {
            padding: 20px;
          }

          .news-title {
            font-size: 1.25rem;
          }

          .filter-btn {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}
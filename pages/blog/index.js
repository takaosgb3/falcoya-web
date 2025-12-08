import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/languageUtils'

const blogPosts = {
  ja: [
    {
      id: 'falco-plugin-development-e2e-report-guide',
      title: 'Falco + Nginx プラグイン開発：特別編 — Falcoya君の「E2Eテストレポートの歩き方」',
      description: 'Allureが描く"検知の物語"を読むために。65テストケースのE2Eレポートの読み方を徹底解説。Overview、Behaviors、Test Details、Graphs、ペイロードハイライトの活用法を紹介します。',
      date: '2025-12-08',
      readTime: '15分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'Allure', '特別編', 'レポート解説', '65パターン'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-e2e-report-guide'
    },
    {
      id: 'falco-plugin-development-days132-134',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の132日目から134日目',
      description: '相関のその先へ。"揺れゼロ"を目指し、そして v1.4.2 が生まれた。Pattern A317/A318修正、E2E Run #130で65/65全成功、v1.4.0設計決定、docs/rules.md大規模更新。三ヶ月の積み重ねが形になった3日間の記録。',
      date: '2025-12-06',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'v1.4.2', 'リリース', 'docs/rules.md', '設計決定'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days132-134'
    },
    {
      id: 'falco-plugin-development-days127-131',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の127日目から131日目',
      description: '「検知の物語」を読みやすくするための、静かな整合性の週。攻撃ペイロードの蛍光イエローハイライト、Allureログ整理、Pattern A260/A280〜A289修正。整った技術が物語を語り始めた5日間の記録。',
      date: '2025-11-30',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'Allure', 'ペイロードハイライト', 'JSON正規化', 'CMDi'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days127-131'
    },
    {
      id: 'falco-plugin-development-days119-126',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の119日目から126日目',
      description: '整える時間の先で、"相関"がついに生まれた。nginx.headers[X-Test-ID]実装完了、Falco↔k6↔Allureの相関成立。点だったE2Eが一本の線になった8日間の記録。',
      date: '2025-11-24',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'Allure', '相関', 'nginx.headers', 'X-Test-ID'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days119-126'
    },
    {
      id: 'falco-plugin-development-days111-118',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の111日目から118日目',
      description: '整える技術、その先に"相関"という頂が見えた。Allure採用、レスポンス検証方式導入、nginx.headers実装方針の明確化。相関という設計に手を伸ばした8日間の記録。',
      date: '2025-11-16',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'Allure', '相関設計', 'nginx.headers'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days111-118'
    },
    {
      id: 'falco-plugin-development-days105-110',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の105日目から110日目',
      description: 'サンプルデータと"小さな安定"の積み重ね、その先にある実装目標。Phase 0完了、レスポンス検証方式導入、nginx.headers実装方針の明文化。杖に頼らず、足そのものを作る6日間の記録。',
      date: '2025-11-08',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'k6', 'nginx.headers', '設計方針'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days105-110'
    },
    {
      id: 'falco-plugin-development-days99-104',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の99日目から104日目',
      description: '車輪をやめて、走るための設計へ。GitHub Actionsのキャッシュ問題解決、k6への全面移行、テスト基盤の再設計、そしてTerraformによる環境のコード化。自作の仕組みを手放して、動き続ける設計への6日間の記録。',
      date: '2025-11-02',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'k6', 'Terraform', '環境設計'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days99-104'
    },
    {
      id: 'falco-plugin-development-days92-98',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の92日目から98日目',
      description: '環境が安定を作る。A170修正版の検証、再試行ロジック導入、Pattern A171発見と修正、Falco出力制限の理解、Pattern A216統合テスト（検知率74.4%）。環境設計もアーキテクチャの一部である7日間の記録。',
      date: '2025-10-26',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2E Test', 'Pattern修正', '環境設計', '出力制御'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days92-98'
    },
    {
      id: 'falco-plugin-development-days85-91',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の85日目から91日目',
      description: '設計の順序が安定を生む。A155修正の実装、A170クリティカルバグの発見と修正、残存プロセスとポート競合対策、そして再現性の確認。順序を設計することで"説明できる安定"へと進化した7日間の記録。',
      date: '2025-10-19',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'Kubernetes', 'Pattern修正', '起動設計', 'タイミング設計'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days85-91'
    },
    {
      id: 'falco-plugin-development-days78-84',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の78日目から84日目',
      description: '環境差異と起動順序という硬い壁。Kubernetes対応の仕上げ、非特権設計、ENV-MIGRATE拡張、そしてPattern A154からA155への進化。設定と起動の分離設計を学んだ7日間の記録。',
      date: '2025-10-12',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'Kubernetes', '非特権コンテナ', '環境対応', '起動設計'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days78-84'
    },
    {
      id: 'falco-plugin-development-days73-77',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の73日目から77日目',
      description: '小さな制御から回復設計へ。バッチタイムアウト対策、nginx環境変化への対応、二重修正の交差点、回復を設計したテスト、そしてsummary.html生成機能の追加。5日間で学んだ開発の教訓。',
      date: '2025-10-03',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'テスト戦略', 'Kubernetes', '品質管理', 'E2E'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days73-77'
    },
    {
      id: 'falco-plugin-development-days68-72',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の68日目から72日目',
      description: '検知率ゼロの衝撃から体系的な改善へ。失敗を見える化する勇気、構造が安心を生むこと、小さな改善が安定を育てること、負債と向き合う覚悟、制約を受け入れて進む力。5日間で学んだ開発の本質。',
      date: '2025-09-27',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'テスト戦略', 'Kubernetes', '品質管理'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days68-72'
    },
    {
      id: 'falco-plugin-development-days62-67',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の62日目から67日目',
      description: 'モグラ叩きから体系化へ、計画と現実のギャップ。場当たり的な修正を繰り返す日々から、体系的な品質管理へと進化した6日間の記録。',
      date: '2025-09-21',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'テスト戦略', '品質管理', '体系化', 'CI/CD'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days62-67'
    },
    {
      id: 'falco-plugin-development-days57-61',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の57日目から61日目',
      description: '大規模攻撃検証とE2Eテストのデバッグ戦記。出力仕様変更による致命的な不具合を経験し、ドキュメント参照の重要性を痛感。失敗を財産に変える5日間の記録。',
      date: '2025-09-14',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'デバッグ', '攻撃検証', 'ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days57-61'
    },
    {
      id: 'falco-plugin-development-days51-56',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の51日目から56日目',
      description: 'テストレポート公開、UI修正と国際化、そして攻撃検証の再挑戦。37ルール・810+攻撃パターンの拡充から統合ドキュメント作成まで、OSSとしての透明性を示す取り組みを記録。',
      date: '2025-09-07',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', '国際化', '攻撃検証', '統合ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days51-56'
    },
    {
      id: 'falco-plugin-development-days45-50',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の45日目から50日目',
      description: 'テスト改善とHTMLレポート修正、そして攻撃トラフィックへの挑戦。E2Eテストの観測点強化とXSS検出サンプルの表示問題への対処を記録。',
      date: '2025-08-30',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'HTMLレポート', 'XSS', 'テスト改善'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days45-50'
    },
    {
      id: 'falco-plugin-development-days39-44',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の39日目から44日目',
      description: '失敗の記録と備忘録、Runnerを壊して学んだ習慣化の力。PROBLEM_PATTERNS.mdに刻まれた6日間の教訓と、失敗を財産に変える文化の構築。',
      date: '2025-08-24',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'GitHub Actions', 'デバッグ', 'ドキュメント'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days39-44'
    },
    {
      id: 'falco-plugin-development-e2e-strategy',
      title: '特別編：E2Eテスト前夜 — Falcoya君の作戦会議',
      description: 'E2Eテストという総合試験への挑戦。設計と仕様を詰める日々、テストの規模感、そしてOSSとしての決意。真のボス戦に挑む前夜の物語。',
      date: '2025-08-17',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'E2Eテスト', 'テスト設計', '品質保証'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-e2e-strategy'
    },
    {
      id: 'falco-plugin-development-days33-38',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の33日目から38日目',
      description: 'CI/CD修羅場とクリティカル修正の一週間。不安・失敗・改善の連続、そしてついにCIが安定した瞬間の喜び。OSS開発の現実を物語形式で綴ります。',
      date: '2025-08-17',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'テスト', 'デバッグ'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days33-38'
    },
    {
      id: 'falco-plugin-development-days28-32',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の28日目から32日目',
      description: 'OSSはコードだけじゃない、ポリシーと文化も育てる。プロジェクト方針の見直し、ドキュメントの重要性、そして信頼の構築について学んだ5日間。',
      date: '2025-08-17',
      readTime: '7分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'プロジェクト管理', 'ポリシー', '文化'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days28-32'
    },
    {
      id: 'falco-plugin-development-days23-27',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の23日目から27日目',
      description: 'OSSの波に揉まれ、ドキュメントに救われた日々。プロジェクト管理の見直し、セキュリティ修正、コードレビューなど、地道だけど重要な5日間の記録。',
      date: '2025-08-16',
      readTime: '8分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'プロジェクト管理', 'ドキュメント', 'セキュリティ'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days23-27'
    },
    {
      id: 'falco-plugin-development-days15-22',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の15日目から22日目',
      description: '初めてのアラートの喜びと、ノイズに溺れる苦しみが同居した8日間。CI/CDの安定化、検知ルールの精度調整、Dockerでの再現環境構築など、OSS開発の実態を物語形式で綴ります。',
      date: '2025-08-16',
      readTime: '12分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'CI/CD', 'Docker', '検知ルール'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-days15-22'
    },
    {
      id: 'falco-plugin-development-7days',
      title: 'Falco + Nginx プラグイン開発：Falcoya君の7日間',
      description: 'FalcoでNginxログを解析し攻撃を検知するプラグインの開発過程。7日間の失敗と学びを包み隠さずお届けします。OSS開発の実態を物語形式で綴った開発記録。',
      date: '2025-08-16',
      readTime: '10分',
      tags: ['Falco', 'Nginx', 'OSS開発', 'Go言語', 'CI/CD', 'GitHub Actions'],
      category: 'OSS開発',
      slug: 'falco-plugin-development-7days'
    },
    {
      id: 'falco-nginx-security-tutorial',
      title: 'Falco + Nginx プラグインで Web 攻撃をリアルタイム検知！AWS EC2環境で試してみる',
      description: 'FalcoとNginxプラグインを使用してWebアプリケーションの攻撃をリアルタイムで検知する方法を、AWS EC2環境での実践を通じて詳しく解説します。SQLインジェクション、XSS、ディレクトリトラバーサルなどの攻撃パターンの検証からカスタムルールの作成まで包括的にカバーします。',
      date: '2025-08-11',
      readTime: '15分',
      tags: ['Falco', 'Nginx', 'セキュリティ', 'AWS', 'EC2', 'Web攻撃検知'],
      category: 'セキュリティ',
      slug: 'falco-nginx-security-tutorial'
    }
  ],
  en: [
    {
      id: 'falco-plugin-development-e2e-report-guide-en',
      title: 'Falco + Nginx Plugin Development: Special Edition — Falcoya\'s "Guide to E2E Test Reports"',
      description: 'How to read the "detection stories" drawn by Allure. A thorough guide to reading E2E reports with 65 test cases. Learn about Overview, Behaviors, Test Details, Graphs, and payload highlighting.',
      date: '2025-12-08',
      readTime: '15 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'Allure', 'Special Edition', 'Report Guide', '65 Patterns'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-e2e-report-guide-en'
    },
    {
      id: 'falco-plugin-development-days132-134-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 132-134',
      description: 'Beyond correlation. Aiming for "zero fluctuations," and v1.4.2 was born. Pattern A317/A318 fixes, E2E Run #130 with 65/65 all success, v1.4.0 design decisions, docs/rules.md major update. Three days when three months of accumulation took shape.',
      date: '2025-12-06',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'v1.4.2', 'Release', 'docs/rules.md', 'Design Decisions'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days132-134-en'
    },
    {
      id: 'falco-plugin-development-days127-131-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 127-131',
      description: 'A quiet week of consistency to make the "detection story" readable. Attack payload fluorescent yellow highlighting, Allure log organization, Pattern A260/A280-A289 fixes. Five days when aligned technology began to tell its story.',
      date: '2025-11-30',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'Allure', 'Payload Highlighting', 'JSON Normalization', 'CMDi'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days127-131-en'
    },
    {
      id: 'falco-plugin-development-days119-126-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 119-126',
      description: 'Beyond the time of alignment, "correlation" was finally born. nginx.headers[X-Test-ID] implementation complete, Falco↔k6↔Allure correlation established. Eight days when scattered E2E points became a single line.',
      date: '2025-11-24',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'Allure', 'Correlation', 'nginx.headers', 'X-Test-ID'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days119-126-en'
    },
    {
      id: 'falco-plugin-development-days111-118-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 111-118',
      description: 'The art of alignment, and beyond it, the peak called "correlation" became visible. Allure adoption, response validation method introduction, nginx.headers implementation policy clarification. Eight days of reaching for correlation design.',
      date: '2025-11-16',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'Allure', 'Correlation Design', 'nginx.headers'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days111-118-en'
    },
    {
      id: 'falco-plugin-development-days105-110-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 105-110',
      description: 'Sample data and "small stability" accumulation, with implementation goals beyond. Phase 0 completion, response validation method introduction, nginx.headers implementation policy articulation. Six days of creating the foundation itself, not relying on crutches.',
      date: '2025-11-08',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'k6', 'nginx.headers', 'Design Policy'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days105-110-en'
    },
    {
      id: 'falco-plugin-development-days99-104-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 99-104',
      description: 'Stop reinventing the wheel, design for continuous operation. Solving GitHub Actions cache issues, full migration to k6, test infrastructure redesign, and environment codification with Terraform. Six days of evolution from building custom mechanisms to designing sustainable systems.',
      date: '2025-11-02',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'k6', 'Terraform', 'Environment Design'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days99-104-en'
    },
    {
      id: 'falco-plugin-development-days92-98-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 92-98',
      description: 'Environment creates stability. A170 fix verification, retry logic introduction, Pattern A171 discovery and fix, understanding Falco output limits, Pattern A216 integration test (74.4% detection rate). Seven days of learning that environment design is part of architecture.',
      date: '2025-10-26',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Test', 'Pattern Fix', 'Environment Design', 'Output Control'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days92-98-en'
    },
    {
      id: 'falco-plugin-development-days85-91-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 85-91',
      description: 'The order of design creates stability. A155 fix implementation, A170 critical bug discovery and fix, residual process and port conflict measures, and reproducibility verification. Seven days of evolution toward "explainable stability" through designing order.',
      date: '2025-10-19',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Kubernetes', 'Pattern Fix', 'Startup Design', 'Timing Design'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days85-91-en'
    },
    {
      id: 'falco-plugin-development-days78-84-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 78-84',
      description: 'The hard wall of environment differences and startup sequence. Kubernetes compatibility completion, non-privileged design, ENV-MIGRATE expansion, and evolution from Pattern A154 to A155. Seven days of learning about separation of configuration and startup design.',
      date: '2025-10-12',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Kubernetes', 'Non-Privileged Containers', 'Environment Adaptation', 'Startup Design'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days78-84-en'
    },
    {
      id: 'falco-plugin-development-days73-77-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 73-77',
      description: 'From small controls to recovery design. Batch timeout countermeasures, nginx environment changes, intersection of dual fixes, designing recovery in tests, and summary.html generation. Five days of development lessons.',
      date: '2025-10-03',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Test Strategy', 'Kubernetes', 'Quality Control', 'E2E'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days73-77-en'
    },
    {
      id: 'falco-plugin-development-days68-72-en',
      title: 'Falco + Nginx Plugin Development: Falcoya\'s Days 68-72',
      description: 'From zero detection rate to systematic improvements. The courage to visualize failure, how structure creates security, small improvements build stability, facing technical debt, and the power of accepting constraints.',
      date: '2025-09-27',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Test Strategy', 'Kubernetes', 'Quality Control'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days68-72-en'
    },
    {
      id: 'falco-plugin-development-days62-67-en',
      title: 'Falco + Nginx Plugin Development: Days 62-67 of Falcoya',
      description: 'From whack-a-mole to systematization, the gap between planning and reality. A 6-day record of evolution from repetitive ad-hoc fixes to systematic quality management.',
      date: '2025-09-21',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Test Strategy', 'Quality Management', 'Systematization', 'CI/CD'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days62-67-en'
    },
    {
      id: 'falco-plugin-development-days57-61-en',
      title: 'Falco + Nginx Plugin Development: Falcoya Days 57-61',
      description: 'Large-scale attack verification and E2E test debugging chronicle. Experiencing critical issues from output specification changes, learning the importance of documentation. A 5-day record of turning failures into assets.',
      date: '2025-09-14',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Debugging', 'Attack Verification', 'Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days57-61-en'
    },
    {
      id: 'falco-plugin-development-days51-56-en',
      title: 'Falco + Nginx Plugin Development: Days 51-56 of Falcoya',
      description: 'Test report publication, UI fixes and internationalization, and attack verification re-challenge. From 37 rules and 810+ attack patterns expansion to integrated documentation creation, recording efforts to demonstrate OSS transparency.',
      date: '2025-09-07',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Internationalization', 'Attack Verification', 'Integrated Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days51-56-en'
    },
    {
      id: 'falco-plugin-development-days45-50-en',
      title: 'Falco + Nginx Plugin Development: Days 45-50 of Falcoya',
      description: 'Test improvements, HTML report fixes, and the challenge of attack traffic. Documenting E2E test observation enhancements and XSS detection sample display issues.',
      date: '2025-08-30',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'HTML Reports', 'XSS', 'Test Improvements'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days45-50-en'
    },
    {
      id: 'falco-plugin-development-days39-44-en',
      title: 'Falco + Nginx Plugin Development: Days 39-44 of Falcoya',
      description: 'Recording failures and notes, learning the power of habits by breaking Runner. Six days of lessons carved into PROBLEM_PATTERNS.md and building a culture of turning failures into assets.',
      date: '2025-08-24',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'GitHub Actions', 'Debugging', 'Documentation'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days39-44-en'
    },
    {
      id: 'falco-plugin-development-e2e-strategy-en',
      title: "Special Edition: The Eve of E2E Testing — Falcoya's Strategy Meeting",
      description: 'The challenge of comprehensive E2E testing. Days of refining design and specifications, the scale of testing, and commitment as OSS. The story before challenging the true boss battle.',
      date: '2025-08-17',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'E2E Testing', 'Test Design', 'Quality Assurance'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-e2e-strategy-en'
    },
    {
      id: 'falco-plugin-development-days33-38-en',
      title: 'Falco + Nginx Plugin Development: Days 33-38 of Falcoya',
      description: 'A week of CI/CD struggles and critical fixes. Continuous anxiety, failures, and improvements, and finally the joy of stable CI. The reality of OSS development told in narrative form.',
      date: '2025-08-17',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Testing', 'Debugging'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days33-38-en'
    },
    {
      id: 'falco-plugin-development-days28-32-en',
      title: 'Falco + Nginx Plugin Development: Days 28-32 of Falcoya',
      description: 'OSS isn\'t just code, it\'s about cultivating policy and culture. Five days of learning about project direction review, the importance of documentation, and building trust.',
      date: '2025-08-17',
      readTime: '7 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Project Management', 'Policy', 'Culture'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days28-32-en'
    },
    {
      id: 'falco-plugin-development-days23-27-en',
      title: 'Falco + Nginx Plugin Development: Days 23-27 of Falcoya',
      description: 'Days tossed by OSS waves and saved by documentation. Project management review, security fixes, code reviews - 5 days of steady but important work.',
      date: '2025-08-16',
      readTime: '8 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Project Management', 'Documentation', 'Security'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days23-27-en'
    },
    {
      id: 'falco-plugin-development-days15-22-en',
      title: 'Falco + Nginx Plugin Development: Days 15-22 of Falcoya',
      description: '8 days where the joy of first alerts coexisted with drowning in noise. CI/CD stabilization, detection rule tuning, Docker environment setup - an OSS development story told in narrative form.',
      date: '2025-08-16',
      readTime: '12 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'CI/CD', 'Docker', 'Detection Rules'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-days15-22-en'
    },
    {
      id: 'falco-plugin-development-7days-en',
      title: 'Falco + Nginx Plugin Development: 7 Days of Falcoya',
      description: 'The development journey of creating a Falco plugin for Nginx log analysis and attack detection. An honest account of 7 days of failures and learnings in OSS development.',
      date: '2025-08-16',
      readTime: '10 min',
      tags: ['Falco', 'Nginx', 'OSS Development', 'Go', 'CI/CD', 'GitHub Actions'],
      category: 'OSS Development',
      slug: 'falco-plugin-development-7days-en'
    },
    {
      id: 'falco-nginx-security-tutorial-en',
      title: 'Real-time Web Attack Detection with Falco + Nginx Plugin! Try it on AWS EC2',
      description: 'A comprehensive guide on detecting web application attacks in real-time using Falco and Nginx plugin through hands-on practice in AWS EC2 environment. Covers verification of attack patterns like SQL injection, XSS, directory traversal, and custom rule creation.',
      date: '2025-08-11', 
      readTime: '15 min',
      tags: ['Falco', 'Nginx', 'Security', 'AWS', 'EC2', 'Web Attack Detection'],
      category: 'Security',
      slug: 'falco-nginx-security-tutorial-en'
    }
  ]
}

export default function BlogIndex() {
  const [language, setLanguage] = useLanguage() // localStorageで管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // 画面サイズ変更時にモバイルメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      // 画面幅に関わらず、リサイズ時は必ずメニューを閉じる
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    
    // 初回実行
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])
  
  const content = {
    ja: {
      title: "FALCOYA ブログ",
      subtitle: "セキュリティ・技術情報を発信",
      description: "Webアプリケーションセキュリティ、Falco、リアルタイム脅威検知に関する実践的な技術情報とチュートリアルをお届けします。",
      readMore: "続きを読む",
      allPosts: "すべての記事",
      categories: "カテゴリー",
      recentPosts: "最新記事",
      tagCloud: "タグ",
      nav: {
        github: "GitHub",
        installation: "インストール",
        detection: "検知機能",
        blog: "ブログ",
        news: "ニュース",
        quality: "テストレポート"
      },
      categoryList: [
        { name: "OSS開発", count: 8 },
        { name: "セキュリティ", count: 1 }
      ],
      tags: ["Falco", "Nginx", "OSS開発", "CI/CD", "Docker", "テスト", "デバッグ", "プロジェクト管理", "ポリシー", "文化", "ドキュメント", "セキュリティ", "検知ルール", "Go言語", "GitHub Actions", "AWS", "EC2", "Web攻撃検知", "E2Eテスト", "テスト設計", "品質保証"]
    },
    en: {
      title: "FALCOYA Blog", 
      subtitle: "Security & Technical Insights",
      description: "Practical technical information and tutorials on web application security, Falco, and real-time threat detection.",
      readMore: "Read More",
      allPosts: "All Posts",
      categories: "Categories", 
      recentPosts: "Recent Posts",
      tagCloud: "Tags",
      nav: {
        github: "GitHub",
        installation: "Installation",
        detection: "Detection",
        blog: "Blog",
        news: "News",
        quality: "Test Report"
      },
      categoryList: [
        { name: "OSS Development", count: 8 },
        { name: "Security", count: 1 }
      ],
      tags: ["Falco", "Nginx", "OSS Development", "CI/CD", "Docker", "Testing", "Debugging", "Project Management", "Policy", "Culture", "Documentation", "Security", "Detection Rules", "Go", "GitHub Actions", "AWS", "EC2", "Web Attack Detection", "E2E Testing", "Test Design", "Quality Assurance"]
    }
  }

  return (
    <>
      <Head>
        <title>{content[language].title} - リアルタイムWebセキュリティ監視</title>
        <meta name="description" content={content[language].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/img/falcoya-logo-c.png" alt="FALCOYA" />
            </Link>
          </div>
          
          {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* デスクトップメニュー */}
          <ul className="nav-menu desktop-menu">
            <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank">{content[language].nav.github}</Link></li>
            <li><Link href="/#installation">{content[language].nav.installation}</Link></li>
            <li><Link href="/#detection">{content[language].nav.detection}</Link></li>
            <li><Link href="/blog" className="active">{content[language].nav.blog}</Link></li>
            <li><Link href="/news">{content[language].nav.news}</Link></li>
            <li><Link href="/quality">{content[language].nav.quality}</Link></li>
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
        
        {/* モバイルメニュー */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="https://github.com/takaosgb3/falco-plugin-nginx" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.github}</a></li>
            <li><Link href="/#installation" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.installation}</Link></li>
            <li><Link href="/#detection" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.detection}</Link></li>
            <li><Link href="/blog" className="active" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.blog}</Link></li>
            <li><Link href="/news" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.news}</Link></li>
            <li><Link href="/quality" onClick={() => setMobileMenuOpen(false)}>{content[language].nav.quality}</Link></li>
          </ul>
        </div>
      </nav>

      {/* Blog Header */}
      <header className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <h1>{content[language].title}</h1>
            <p className="blog-subtitle">{content[language].subtitle}</p>
            <p className="blog-description">{content[language].description}</p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="blog-main">
        <div className="container">
          <div className="blog-grid">
            
            {/* Main Content */}
            <div className="blog-content">
              <h2>{content[language].recentPosts}</h2>
              
              <div className="blog-posts">
                {blogPosts[language].map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                      <span className="post-category">{post.category}</span>
                    </div>
                    
                    <h3 className="post-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="post-description">{post.description}</p>
                    
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="read-more-btn">
                      {content[language].readMore} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>{content[language].categories}</h3>
                <ul className="category-list">
                  {content[language].categoryList.map((category, index) => (
                    <li key={index}>
                      <a href={`#${category.name.toLowerCase()}`}>{category.name}</a> ({category.count})
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-widget">
                <h3>{content[language].tagCloud}</h3>
                <div className="tag-cloud">
                  {content[language].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>falco-plugin-nginx</h4>
              <p>{language === 'ja' 
                ? 'Nginxアクセスログをリアルタイムで監視し、Webアプリケーションへの脅威を検知するFalcoプラグイン'
                : 'Falco plugin that monitors Nginx access logs in real-time and detects threats to web applications'}
              </p>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'リンク' : 'Links'}</h4>
              <ul>
                <li><Link href="https://github.com/takaosgb3/falco-plugin-nginx">
                  {language === 'ja' ? 'GitHubリポジトリ' : 'GitHub Repository'}
                </Link></li>
                <li><Link href="/blog">{language === 'ja' ? 'ブログ' : 'Blog'}</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{language === 'ja' ? 'ライセンス' : 'License'}</h4>
              <p>Apache License 2.0</p>
              <p>{language === 'ja' ? 'オープンソースソフトウェア' : 'Open Source Software'}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 falco-plugin-nginx by FALCOYA. Licensed under Apache License 2.0</p>
          </div>
        </div>
      </footer>
    </>
  )
}
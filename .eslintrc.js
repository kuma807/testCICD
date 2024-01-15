module.exports = {
  env: {
    browser: true, // ブラウザ環境での実行を想定
    es2021: true, // ES2021 に準拠
    node: true, // Node.js 環境での実行を想定
  },
  extends: [
    "eslint:recommended", // ESLint の推奨ルールを使用
    "plugin:react/recommended", // React 用の推奨ルールを使用（React プロジェクトの場合）
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 対応（React プロジェクトの場合）
    },
    ecmaVersion: 12, // ECMAScript 2021
    sourceType: "module", // モジュールシステムを使用
  },
  rules: {
    "no-unused-vars": "warn", // 未使用変数は警告
    "no-console": "off", // console の使用を許可
    eqeqeq: ["error", "always"], // 厳密等価演算子の使用を強制
  },
};

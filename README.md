# 概要
- Reactテスト学習用REP
- 学習内容は[【Reactテスト入門】React Testing Library/Jest/Vitestで学ぶフロントエンドテスト入門](https://www.udemy.com/course/react-frontend-test-tutorial/)に準ずる

# 環境構築
`$ npx create-react-app react_test --template typescript`
`$ cd react_test`
`$ npm run start`
`$ npm i @babel/plugin-proposal-private-property-in-object` (npm test で警告が出る場合)

## テスト実行
`$ npm test`

### テストオプション
- `a`: 全てのテストを実行する
- `f`: 失敗したテストだけテストする
- `q`: watchモード終了
- `o`: 直近変更されたファイルのみテスト
- `p`: ファイル名でフィルタリング
- `t`: テスト名でフィルタリング(テスト名は英語にする必要がある)

# フロントエンドテスト
- End to End Test: ユーザが使うことを(全体)テストすること : Cypress・Playwright
- IntegrationTest: 複数のコンポーネントのテストすること / TestingLibrary・JEST・Vitest
- Unit Test: 1つのコンポーネントや関数などに対してテストすること / TestingLibrary・Jest・Vitest
- Static Test: コード実行前のテスト / EsLint・TypeScrip・Prettier

# TDD
Write a failing test(RedTest) -> Make the test pass(GreenTest) -> Refactor

# カバレッジテスト
テストをカバーできているかパーセンテージで表示 80%以上であれば良い
```
  "scripts": {
    "coverage": "yarn test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types, stories, constants, test, spec}.{ts,tsx}'"
  },
```
```
$ npm run coverage
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |
 Greet.tsx |     100 |      100 |     100 |     100 |
-----------|---------|----------|---------|---------|-------------------
```

Stmts: プログラムのすべての行がテストできていますか?
Branch: ifとかfor分に対してテストできていますか？
Funcs: 関数に対してテストできていますか？
Lines: 行ごとのテスト

## 閾値(80%)
```
"jest": {
  "coverageThreshold": {
    "global": {
      "statements": 90,
      "branches": 80,
      "functions": 90,
      "lines": 90
    }
  }
}
```


# 参考
[github](https://github.com/Shin-sibainu/test-jest-local-for-udemy)
[Jest](https://jestjs.io/ja/docs/api#testname-fn-timeout)
[TestingLibrary](https://testing-library.com/docs/react-testing-library/api)

# 備考
`rafce`で雛形作成
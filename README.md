# 概要
Reactテスト学習用REP

# 環境構築
`$ npx create-react-app react_test --template typescript`
`$ cd react_test`
`$ npm run start`
`$ npm i @babel/plugin-proposal-private-property-in-object` (npm test で警告が出る場合)


## テスト実行
`$ npm test`
# フロントエンドテスト
- End to End Test: ユーザが使うことを(全体)テストすること : Cypress・Playwright
- IntegrationTest: 複数のコンポーネントのテストすること / TestingLibrary・JEST・Vitest
- Unit Test: 1つのコンポーネントや関数などに対してテストすること / TestingLibrary・Jest・Vitest
- Static Test: コード実行前のテスト / EsLint・TypeScrip・Prettier

# 参考
[github](https://github.com/Shin-sibainu/test-jest-local-for-udemy)
[Jest](https://jestjs.io/ja/docs/api#testname-fn-timeout)
[TestingLibrary](https://testing-library.com/docs/react-testing-library/api)

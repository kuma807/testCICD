# ESlint導入

## workflow 追加

Actions から ESLint を追加

## エラー対処

1.権限変更
settign > actions > general > Workflow permissions を
Read and write permissions に変更

2.eslintrc.js を追加

3.eslint-results.sarif を追加

4.workflows/eslint.yml の変更、github 上にエラーを保存しないようにした

5.eslint-results.sarif を削除

6.ESLint couldn't find the plugin "eslint-plugin-react".というエラーが出たため以下のコマンドを実行して plugin をダウンロード
npm install eslint-plugin-react@latest --save-dev

7.セミコロンを削除してもエラーが出なかったためeslintrcのルールを追加したところ、セミコロンの有無を適切にチェックしてくれるようになった。

<!-- 8.後にeslint.ymlのon pushを削除し、PRのみをチェックするように変更する -->

### ESlint 動いた！！！

# prettier導入
次のコマンドでprettierをダウンロード
```
npm i -D prettier
```
package.jsonのscriptsにformatコマンドを追加した。
```
"format": "prettier --write '**/*.{ts,tsx}'"
```
prettierとeslintをnpm ciでダウンロードすることでpackage.jsonで依存関係を管理。npm run formatでprettier,eslint両方実行できるようにした。

### prettier動いた！！！
private repositoryでもeslint,prettierが動くことが確認できた。今後eslintとprettierのルールは考える必要がある。

# sonar cloud導入
https://www.sonarsource.com/open-source-editions/ からtry sonarcloudを選択しgithubと連携する。連携後sonarcloudにアクセス権限を付与する。今回はtestCICDプロジェクトのみにアクセス権限を付与した。
PRを作ると自動で分析を行なってくれた。

## 分析対象を絞りたい
tsxやtsだけを分析すれば良さそう。
~~ administration > analysis method > show customization optionsから分析対象を変更できそう。 ~~
プロジェクト直下にsonar-project.propertiesを作ってそこに設定を書けば良さそう。
以下の内容をsonar-project.propertiesに記入。

```
# Path to sources
sonar.sources=.
sonar.exclusions=node_modules,**/*.json
sonar.inclusions=**/*.tsx,**/*.ts
```

# ローカルでeslint, prettier, sonarを動かせるようにしたい & readmeを整備するべき

# Gatsby MDX 検証

## 前提
- [Gatsby](https://www.gatsbyjs.com/) の一番新しい Major を使う
  - npm init gatsby で開始できるものとする
- TypeScript を使わない
  - Gatsby 側の TypeScript 対応が怪しい気がしており、TypeScript 起因の問題があったときに切り分けが難しくなるため
- 必要最小限のパッケージを使うようにする
- onPreInit か onPreBootstrap で mdx ファイルを直接出力する非同期処理を挟む
  - Gatsby の処理前に何かしたいため（こういうケースは多いと思う）
  - フックする API は上記 2 つでなくとも、処理前にやりたいことができていればどこでもよいが、多分上記 2 つが該当する箇所とは思う
- 日本語使用、多言語対応が不要のため

## やること

- #1
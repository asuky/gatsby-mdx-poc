# Gatsby MDX 検証

## 前提
- [Gatsby](https://www.gatsbyjs.com/) の一番新しい starter を使う
  - npm init gatsby で設定されるものを使う
- TypeScript を使わない
  - Gatsby 側の TypeScript 対応が怪しい気がしており、TypeScript 起因の問題があったときに切り分けが難しくなるため
  - [こういう issue とか](https://github.com/gatsbyjs/gatsby/issues/38927)（変数名以外同じエラーを見た）
- 必要最小限のパッケージを使うようにする
- onPreInit か onPreBootstrap で mdx ファイルを直接出力する非同期処理を挟む
  - Gatsby の処理前に何かしたいため（こういうケースは多いと思う）
  - フックする API は上記 2 つでなくとも、処理前にやりたいことができていればどこでもよいが、多分上記 2 つが該当する箇所とは思う
- 日本語使用、多言語対応が不要のため

## やること

- [X] 動的ページ生成
- [X] 最低限動作
- [X] 初期設定


## メモ
- remark-gfm は 3.0.1 を使う（現時点でエラーが出るので）

- [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)

- npm init mdx gatsby は現状動いてない
```sh
$ npm init mdx gatsby

> npx
> create-mdx gatsby

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    14  100    14    0     0     58      0 --:--:-- --:--:-- --:--:--    58

gzip: stdin: not in gzip format
tar: Child returned status 1
tar: Error is not recoverable: exiting now
Error: Command failed: curl https://codeload.github.com/mdx-js/mdx/tar.gz/master | tar -xz -C gatsby-mdx --strip=3 mdx-master/examples/gatsby
    at genericNodeError (node:internal/errors:983:15)
    at wrappedFn (node:internal/errors:537:14)
    at checkExecSyncError (node:child_process:888:11)
    at execSync (node:child_process:960:15)
    at getTar (/home/asuky/.npm/_npx/64f1f55dfb5c394f/node_modules/initit/index.js:37:3)
    at create (/home/asuky/.npm/_npx/64f1f55dfb5c394f/node_modules/initit/index.js:57:3)
    at Object.<anonymous> (/home/asuky/.npm/_npx/64f1f55dfb5c394f/node_modules/create-mdx/cli.js:8:1)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)
    at Module.load (node:internal/modules/cjs/loader:1318:32) {
  status: 2,
  signal: null,
  output: [ null, null, null ],
  pid: 418806,
  stdout: null,
  stderr: null
}
npm error code 1
npm error path /home/asuky
npm error command failed
npm error command sh -c create-mdx gatsby
npm error A complete log of this run can be found in: /home/asuky/.npm/_logs/2025-03-01T01_07_53_818Z-debug-0.log
```
# Next.js / TypeScript を簡単に始める手順

手軽に React.js を使った実験をしたいので、設定無しで使える Next.js の利用開始手順をまとめた。

## 手順

next と依存ライブラリのインストール

    npm install react react-dom next
    npm install --save-dev typescript @types/react @types/node eslint

空の tsconfig.json を作る

    touch tsconfig.json

pages/index.tsx を書く。パス名は決まっていて、pages/hoge.tsx のように tsx を置くと http://localhost/hoge からアクセスできる。対応する html は Next.js が自分で作る。

```tsx
export default function Home() {
  return <p>Hello, World!</p>
}
```

package.json に起動スクリプト追加

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

テスト実行するとおすすめの tsconfig.json が作られる。

    npm run dev

http://localhost:3000 を開く

tsconfig.json にエラーがあるので compilerOptions に以下を追加。またお好みで `"strict": false` したりする。

    "moduleResolution": "node",

lint の設定

    npm run lint

## Pre-rendering

利用する関数によって2つのレンダリング方式を選べる。

* getStaticProps: Static Generation
    * ビルド時に getStaticProps を呼んでページを生成する。
    * 何度アクセスしても同じ内容が返る
    * 例: https://github.com/propella/simple-next/blob/pre-rendering/pages/static.tsx
* getServerSideProps: Server-side Rendering
    * 実行時に getServerSideProps を呼んでページを生成する。
    * アクセスするたびに違う内容を返す事ができる。
    * 例: https://github.com/propella/simple-next/blob/pre-rendering/pages/ssr.tsx

npm run build && npm start するとレンダリング方式の違いを確認できる。Next.js は生の React.js と違いサーバ側に Node やロードバランサ等が必須なので、Vercel のようなビジネスが成立する。

## 参考

* [Getting Started with Next.js - From React to Next.js | Learn Next.js](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs)
  * Next.js の始め方
* [Create tsconfig.json - TypeScript | Learn Next.js](https://nextjs.org/learn/excel/typescript/create-tsconfig)
  * Next.js + TypeScript の始め方
* [Assets - Assets, Metadata, and CSS | Learn Next.js](https://nextjs.org/learn/basics/assets-metadata-css/assets)
  * 画像の置き方
* [Basic Features: Pages | Next.js](https://nextjs.org/docs/basic-features/pages)
  * レンダリング方法

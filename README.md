# Next.js / TypeScript を簡単に始める手順

手軽に React.js を使った実験をするために設定無しで使える Next.js を利用する。

## 手順

next と依存ライブラリのインストール

    npm install react react-dom next
    npm install --save-dev typescript @types/react @types/node

空の tsconfig.json を作る

    touch tsconfig.json

pages/index.ts を書く (パス名は決まっている)

```typescript
export default function Home() {
  return <p>Hello, World!</p>
}
```

package.json に起動スクリプト追加

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
```

テスト実行するとおすすめの tsconfig.json が作られる。

npm run dev

http://localhost:3000 を開く

tsconfig.json にエラーがあるので compilerOptions に以下を追加。

    "moduleResolution": "node",

## 参考

* [Getting Started with Next.js - From React to Next.js | Learn Next.js](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs)
* [Create tsconfig.json - TypeScript | Learn Next.js](https://nextjs.org/learn/excel/typescript/create-tsconfig)

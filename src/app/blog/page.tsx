import { Metadata } from 'next'

import Blog from './Blog'

export const metadata: Metadata = {
  title: 'Blog Page - Canopus Portfolio Site',
  description:
    'Zennで技術系の記事を執筆中。React、Next.js、HTML/CSS、JavaScriptなどのフロントエンド開発に関する知見や経験をシェア。各記事のタイトルからZennの該当ページへ直接アクセス可能。初心者からベテランまで幅広く役立つ情報を提供しています。',
}

export default function Home() {
  return <Blog />
}

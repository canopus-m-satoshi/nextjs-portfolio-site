'use client'

import useSWR from 'swr'

import BlogList from '../../components/BlogList'
import Hero from '../../components/hero'

interface Post {
  id: number
  path: string
  title: string
  published_at: string
  body_updated_at?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function Home() {
  const { data, error } = useSWR<{ articles: Post[] }>('/api/zenn', fetcher)

  if (error) return <div>Failed to load blog posts.</div>
  if (!data) return null

  const posts = data.articles

  return (
    <>
      {/* <Meta pageTitle="Work" pageDesc="制作実績紹介ページ" /> */}
      <Hero title="Blog" subtitle="技術系中心に記事を投稿しています" />
      <p>
        私がzennに投稿した記事を表示しています。
        各記事をクリックするとzennへ遷移します。
      </p>
      <BlogList posts={posts} />
    </>
  )
}

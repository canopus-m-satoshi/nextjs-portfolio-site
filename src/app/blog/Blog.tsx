'use client'

import useSWR from 'swr'

import BlogList from '@/components/BlogList/BlogList'
import Hero from '@/components/Hero/Hero'
import { Zenn } from '@/types/zenn'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Blog = () => {
  const { data, error } = useSWR<{ articles: Zenn[] }>('/api/zenn', fetcher)
  if (error) return <div>Failed to load blog posts.</div>
  if (!data) return null

  const posts = data.articles
  return (
    <>
      <Hero title="Blog" subtitle="技術系中心に記事を投稿しています" />
      <p>
        私がzennに投稿した記事を表示しています。
        各記事をクリックするとzennへ遷移します。
      </p>
      <BlogList posts={posts} />
    </>
  )
}
export default Blog

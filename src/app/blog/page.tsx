'use client'

import BlogList from '../../components/BlogList'
import Hero from '../../components/hero'

export default function Home() {
  return (
    <>
      {/* <Meta pageTitle="Work" pageDesc="制作実績紹介ページ" /> */}
      <Hero title="Blog" subtitle="技術系中心に記事を投稿しています" />
      <p>記事をクリックするとzennへ遷移します</p>
      <BlogList />
    </>
  )
}

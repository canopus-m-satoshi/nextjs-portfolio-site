import Container from 'components/container'
import { getAllPosts } from 'lib/api'
// ローカル代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

import Hero from '@/components/hero'
import Meta from '@/components/meta'
import Posts from '@/components/posts'

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="Blog Archives" pageDesc="Blog Archives" />
      <Hero title="Blog" subtitle="技術系中心に記事を投稿しています" />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }

    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}

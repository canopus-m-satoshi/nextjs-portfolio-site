'use client'

import Link from 'next/link'
import useSWR from 'swr'

import styles from '../styles/blog-list.module.css'
import ConvertDate from './ConvertDate'

interface Post {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function BlogList() {
  const { data, error } = useSWR<{ articles: Post[] }>('/api/zenn', fetcher)

  if (error) return <div>Failed to load blog posts.</div>
  if (!data) return <div>Loading...</div>

  const posts = data.articles

  return (
    <>
      <ul className={styles.lists}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`https://zenn.dev/${post.path}`} target="blank">
              <span>{post.emoji}</span>
              <p className={styles.title}>{post.title}</p>
              <p>
                <ConvertDate dateISO={post.published_at} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

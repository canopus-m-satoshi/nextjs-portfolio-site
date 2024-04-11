import Link from 'next/link'

import styles from '../styles/blog-list.module.css'
import ConvertDate from './ConvertDate'

interface Props {
  posts: {
    id: number
    path: string
    title: string
    published_at: string
    body_updated_at?: string
  }[]
}

export default function BlogList({ posts }: Props) {
  return (
    <ul className={styles.lists}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`https://zenn.dev/${post.path}`}
            target="blank"
            className={styles.link}>
            <p className={styles.title}>{post.title}</p>
            <p>
              投稿日：
              <ConvertDate dateISO={post.published_at} />
            </p>
            {post.body_updated_at && (
              <p>
                更新日：
                <ConvertDate dateISO={post.body_updated_at} />
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

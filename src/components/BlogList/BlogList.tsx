import Link from 'next/link'

import { Zenn } from '@/types/zenn'

import ConvertDate from '../ConvertDate/ConvertDate'
import styles from './BlogList.module.css'

type Props = {
  posts: Zenn[]
}

export default function BlogList({ posts }: Props) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        const { id, path, title, publishedAt, bodyUpdatedAt, likedCount } = post
        return (
          <li key={id}>
            <Link
              href={`https://zenn.dev/${path}`}
              target="blank"
              className={styles.link}>
              <h2 className={styles.title}>{title}</h2>
              <p>
                投稿日：
                <ConvertDate dateISO={publishedAt} />
              </p>
              {bodyUpdatedAt && (
                <p>
                  更新日：
                  <ConvertDate dateISO={bodyUpdatedAt} />
                </p>
              )}
              <p>いいね：{likedCount}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

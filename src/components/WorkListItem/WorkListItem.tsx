import Link from 'next/link'

import { Work } from '@/types/work'

import styles from './WorkListItem.module.css'

type Props = {
  work: Work
}

export default function WorkListItem({ work }: Props) {
  return (
    <li key={work.id}>
      <Link href={`/work/${work.id}`} className={styles.link}>
        <h2>{work.title}</h2>
        <p>{work.lead}</p>
      </Link>
    </li>
  )
}

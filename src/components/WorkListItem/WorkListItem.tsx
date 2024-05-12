import Link from 'next/link'

import { Work } from '@/types/work'

import styles from './WorkListItem.module.css'

type Props = {
  work: Work
}

export default function WorkListItem({ work }: Props) {
  const WorkType = work.isRestricted ? 'restricted' : 'public'

  return (
    <li key={work.id}>
      <Link href={`/work/${WorkType}/${work.id}`} className={styles.link}>
        <h2>{work.title}</h2>
        <p>{work.lead}</p>
      </Link>
    </li>
  )
}

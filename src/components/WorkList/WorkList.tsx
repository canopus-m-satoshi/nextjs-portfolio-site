import Link from 'next/link'

import { WorkApiResponse } from '../../types/work'
import styles from './WorkList.module.css'

type Props = {
  data: WorkApiResponse
}

export default function WorkList({ data }: Props) {
  const { contents } = data

  return (
    <div>
      {data && contents && (
        <ul className={styles.list}>
          {contents.map((work) => (
            <li key={work.id}>
              <Link href={`/work/${work.id}`} className={styles.link}>
                <h2>{work.title}</h2>
                <p>{work.lead}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

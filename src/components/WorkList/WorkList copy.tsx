import Link from 'next/link'
import { CiLock } from 'react-icons/ci'

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
              {work.isRestricted ? (
                // <div className={`${styles.link} ${styles.lock}`}>
                //   <CiLock className={styles.icon} />

                //   <h2>{work.title}</h2>
                //   <p>{work.lead}</p>
                // </div>
                <Link
                  href={`/work/${work.id}`}
                  className={`${styles.link} ${styles.lock}`}>
                  <CiLock className={styles.icon} />
                  <h2>{work.title}</h2>
                  <p>{work.lead}</p>
                </Link>
              ) : (
                <Link href={`/work/${work.id}`} className={styles.link}>
                  <h2>{work.title}</h2>
                  <p>{work.lead}</p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

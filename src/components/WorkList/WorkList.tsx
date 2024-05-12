import { WorkApiResponse } from '@/types/work'

import WorkListItem from '../WorkListItem/WorkListItem'
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
            <WorkListItem key={work.id} work={work} />
          ))}
        </ul>
      )}
    </div>
  )
}

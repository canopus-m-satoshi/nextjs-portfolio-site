import styles from '@/app/work/Work.module.css'
import { WorkApiResponse } from '@/types/work'

import Hero from '../Hero/Hero'
import LinkButton from '../LinkButton/LinkButton'
import WorkList from '../WorkList/WorkList'

type Props = {
  data: WorkApiResponse
  subtitle: string
}

const WorkContents = ({ data, subtitle }: Props) => {
  return (
    <>
      <Hero title="Work" subtitle={subtitle} />

      <WorkList data={data} />

      <div className={styles.backButton}>
        <LinkButton href="/work" text="Back" isLeftArrow />
      </div>
    </>
  )
}
export default WorkContents

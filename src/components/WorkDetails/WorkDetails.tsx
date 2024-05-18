// src/components/WorkDetails/WorkDetails.tsx
'use client'

import CategoryList from '@/components/CategoryList/CategoryList'
import Description from '@/components/Description/Description'
import Hero from '@/components/Hero/Hero'
import LinkButton from '@/components/LinkButton/LinkButton'
import SiteView from '@/components/SiteView/SiteView'
import { Work } from '@/types/work'

import styles from './workDetails.module.css'

type Props = Omit<Work, 'id' | 'isRestricted'> & {
  backPath: string
}

const WorkDetails = ({
  role,
  url,
  tech,
  title,
  lead,
  description,
  thumbPc,
  thumbSp,
  backPath,
}: Props) => {
  return (
    <>
      <Hero title={title} subtitle={lead} isSmallFont={true} />
      <CategoryList tech={tech} />
      <div className={styles.details}>
        <SiteView thumbPc={thumbPc} thumbSp={thumbSp} alt={title} />
        <Description role={role} url={url} description={description} />
      </div>

      <div className={styles.backButton}>
        <LinkButton href={backPath} text="Back" isLeftArrow />
      </div>
    </>
  )
}

export default WorkDetails

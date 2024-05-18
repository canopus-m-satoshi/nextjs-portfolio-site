import CategoryList from '@/components/CategoryList/CategoryList'
import Description from '@/components/Description/Description'
import Hero from '@/components/Hero/Hero'
import LinkButton from '@/components/LinkButton/LinkButton'
import SiteView from '@/components/SiteView/SiteView'
import { getWorkDetailsBySlug } from '@/lib/microCMS/client'

import styles from './workDetails.module.css'

export default async function WorkDetails({
  params,
}: {
  params: { id: string }
}) {
  const res = await getWorkDetailsBySlug(params.id)
  const { role, url, tech, title, lead, description, thumbPc, thumbSp } = res

  if (!res) return

  return (
    <>
      <Hero title={title} subtitle={lead} isSmallFont={true} />
      <CategoryList tech={tech} />
      <div className={styles.details}>
        <SiteView thumbPc={thumbPc} thumbSp={thumbSp} alt={title} />
        <Description role={role} url={url} description={description} />
      </div>

      <div className={styles.backButton}>
        <LinkButton href="/work/restricted" text="Back" isLeftArrow />
      </div>
    </>
  )
}

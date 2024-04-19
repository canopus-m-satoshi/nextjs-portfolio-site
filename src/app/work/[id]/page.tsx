import CategoryList from '../../../components/CategoryList/CategoryList'
import Description from '../../../components/Description/Description'
import Hero from '../../../components/Hero/Hero'
import SiteView from '../../../components/SiteView/SiteView'
import { getWorkDetailsBySlug } from '../../../lib/microCMS/client'
import styles from './workDetails.module.css'

export default async function WorkDetails({
  params,
}: {
  params: { id: string }
}) {
  const res = await getWorkDetailsBySlug(params.id)
  const { role, url, tech, title, lead, description } = res

  if (!res) return

  return (
    <>
      <Hero title={title} subtitle={lead} isSmallFont={true} />
      <CategoryList tech={tech} />
      <div className={styles.details}>
        <SiteView />
        <Description role={role} url={url} description={description} />
      </div>
    </>
  )
}

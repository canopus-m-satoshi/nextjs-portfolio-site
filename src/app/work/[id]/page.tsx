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
  console.log('🚀 ~ res:', res)

  return (
    <>
      <Hero title={res.title} subtitle={res.lead} isSmallFont={true} />
      <CategoryList />
      <div className={styles.details}>
        <SiteView />
        <Description />
      </div>
    </>
  )
}

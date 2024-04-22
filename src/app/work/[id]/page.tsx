import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa6'

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
  const { role, url, tech, title, lead, description, img } = res

  if (!res) return

  return (
    <>
      <Hero title={title} subtitle={lead} isSmallFont={true} />
      <CategoryList tech={tech} />
      <div className={styles.details}>
        {img && <SiteView img={img} alt={title} />}
        <Description role={role} url={url} description={description} />
      </div>

      <div className={styles.backButton}>
        <LinkButton href="/work" text="Back" isLeftArrow />
      </div>
    </>
  )
}

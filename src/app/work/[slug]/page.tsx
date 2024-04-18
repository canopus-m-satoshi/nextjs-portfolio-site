import CategoryList from '../../../components/CategoryList/CategoryList'
import Description from '../../../components/Description/Description'
import Hero from '../../../components/Hero/Hero'
import SiteView from '../../../components/SiteView/SiteView'
import styles from './workDetails.module.css'

export default async function WorkDetails({
  params,
}: {
  params: { slug: string }
}) {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <>
      <Hero
        title={capitalizeFirstLetter(params.slug)}
        subtitle={'テスト投稿'}
      />
      <CategoryList />
      <div className={styles.details}>
        <SiteView />
        <Description />
      </div>
    </>
  )
}

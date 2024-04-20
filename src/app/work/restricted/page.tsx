import Hero from '../../../components/Hero/Hero'
import LinkButton from '../../../components/LinkButton/LinkButton'
import WorkList from '../../../components/WorkList/WorkList'
import { getRestrictedWork } from '../../../lib/microCMS/client'
import styles from '../Work.module.css'

export default async function Home() {
  const data = await getRestrictedWork()

  if (!data) return

  return (
    <>
      <Hero title="Work" subtitle="正社員/フリーランス時代の制作実績紹介" />

      <WorkList data={data} />

      <div className={styles.backButton}>
        <LinkButton href="/work" text="Back" isLeftArrow />
      </div>
    </>
  )
}

import Hero from '../../../components/Hero/Hero'
import LinkButton from '../../../components/LinkButton/LinkButton'
import WorkList from '../../../components/WorkList/WorkList'
import { getPublicWork } from '../../../lib/microCMS/client'
import styles from '../Work.module.css'

export default async function Home() {
  const data = await getPublicWork()

  if (!data) return

  return (
    <>
      <Hero title="Work" subtitle="個人開発の制作実績紹介" />

      <WorkList data={data} />

      <div className={styles.backButton}>
        <LinkButton href="/work" text="Back" isLeftArrow />
      </div>
    </>
  )
}

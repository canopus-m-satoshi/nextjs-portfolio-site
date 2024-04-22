import WorkContents from '@/components/WorkContents/WorkContents'
import { getPublicWork } from '@/lib/microCMS/client'

export default async function Home() {
  const data = await getPublicWork()

  if (!data) return

  return <WorkContents data={data} subtitle="個人開発の制作実績紹介" />
}

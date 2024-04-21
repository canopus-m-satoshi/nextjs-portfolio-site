import WorkContents from '../../../../components/WorkContents/WorkContents'
import { getRestrictedWork } from '../../../../lib/microCMS/client'

export default async function Home() {
  const data = await getRestrictedWork()

  if (!data) return

  return (
    <WorkContents
      data={data}
      subtitle="正社員/フリーランス時代の制作実績紹介"
    />
  )
}

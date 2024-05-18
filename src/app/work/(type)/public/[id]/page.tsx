import WorkDetails from '@/components/WorkDetails/WorkDetails'
import { getWorkDetailsBySlug } from '@/lib/microCMS/client'
import { Work } from '@/types/work'

export default async function WorkDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const res: Work = await getWorkDetailsBySlug(params.id)
  const { role, url, tech, title, lead, description, thumbPc, thumbSp } = res

  if (!res) return null

  return (
    <WorkDetails
      role={role}
      url={url}
      tech={tech}
      title={title}
      lead={lead}
      description={description}
      thumbPc={thumbPc}
      thumbSp={thumbSp}
      backPath="/work/public"
    />
  )
}

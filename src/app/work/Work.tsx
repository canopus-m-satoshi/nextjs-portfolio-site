'use client'

import useSWR from 'swr'

import Hero from '../../components/Hero/Hero'
import LinkButton from '../../components/LinkButton/LinkButton'
import WorkList from '../../components/WorkList/WorkList'
import { WorkApiResponse } from '../../types/work'

const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Work = () => {
  const { data, error } = useSWR<WorkApiResponse>('/api/work', fetcher)

  return (
    <>
      <Hero title="Work" subtitle="制作実績紹介" />

      <p>
        制作実績につきましてはアイパスの入力が必要です。
        コンタクトページよりお問い合わせください
      </p>
      <div
        style={{
          marginTop: 'var(--space-xs)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href={formLink} text="コンタクトフォームへ" />
      </div>

      {data && <WorkList data={data} />}
    </>
  )
}
export default Work

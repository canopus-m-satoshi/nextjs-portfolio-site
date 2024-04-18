'use client'

import Link from 'next/link'

import Hero from '../../components/Hero/Hero'
import LinkButton from '../../components/LinkButton/LinkButton'

const workLink = 'https://www.resume.id/canopus/works'
const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

const Work = () => {
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
      <Link href="/work/test-site">テスト投稿</Link>
    </>
  )
}
export default Work

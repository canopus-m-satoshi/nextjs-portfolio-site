'use client'

import Hero from '../../components/hero'
import LinkButton from '../../components/LinkButton'
import Meta from '../../components/meta'

export default function Home() {
  const workLink = 'https://www.resume.id/canopus/works'
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

  return (
    <>
      {/* <Meta pageTitle="Work" pageDesc="制作実績紹介ページ" /> */}
      <Hero title="Work" subtitle="制作実績紹介" />

      <p>
        制作実績につきましては下記のサイトにて閲覧できます。
        <br />
        ※外部サイト【RESUME（レジュメ）】へ移動します。
      </p>
      <div
        style={{
          marginTop: 'var(--space-xs)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href={workLink} text="制作実績公開サイトへ" />
      </div>
      <br />
      <br />
      <br />
      <p>
        ※正社員時代に制作したサイト、フリーランス時代に制作させていただいたサイトの多くは契約上一般公開できません。
        <br />
        限定的に公開している制作サイトの閲覧を希望する方はお手数おかけしますが本サイトのコンタクトフォームもしくはRESUME（レジュメ）サイトのコンタクトフォームより閲覧希望の旨をお伝えください。
      </p>

      <div
        style={{
          marginTop: 'var(--space-xs)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href={formLink} text="コンタクトフォームへ" />
      </div>
    </>
  )
}

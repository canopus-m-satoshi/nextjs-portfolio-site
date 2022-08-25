import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'

import LinkButton from '@/components/linkButton'

export default function Work() {
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

  return (
    <Container>
      <Meta pageTitle="Work" pageDesc="制作実績紹介ページ" />
      <Hero title="Work" subtitle="制作実績紹介" />

      <p>
        正社員時代に制作したサイト、契約上一般公開できないサイトが多数ございます。
        <br />
        範囲を限定的に公開している制作サイトにつきましては下記サイトにて閲覧することが可能です。
        <br />
        閲覧希望の方はお手数おかけしますがコンタクトフォームより閲覧希望の旨をお伝えください。
      </p>

      <div
        style={{
          marginTop: 'var(--space-sm)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href={formLink} text="コンタクトフォームへ" />
      </div>
    </Container>
  )
}

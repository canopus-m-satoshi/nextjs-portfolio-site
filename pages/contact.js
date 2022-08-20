import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'

import LinkButton from '@/components/linkButton'

export default function Contact() {
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

  return (
    <Container>
      <Meta pageTitle="Contact" pageDesc="お問合せページです" />
      <Hero title="Contact" subtitle="お問合せはこちらから" />

      <p>
        仕事のご依頼、全ての制作実績を閲覧希望の方は下記のリンクよりお問い合わせください。
        <br />
        *Google Formへ遷移します
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

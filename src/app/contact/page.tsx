import Hero from '../../components/hero'
import LinkButton from '../../components/linkButton'
import Meta from '../../components/meta'

export default function Home() {
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

  return (
    <>
      {/* <Meta pageTitle="Contact" pageDesc="お問合せページです" /> */}
      <Hero title="Contact" subtitle="お問合せはこちらから" />

      <p>
        仕事のご依頼、全ての制作実績を閲覧希望の方はコンタクトフォームよりお問い合わせください。
        <br />
        ※外部サイト【Google Form】へ移動します。
      </p>

      <div
        style={{
          marginTop: 'var(--space-xs)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href={formLink} text="Google Formへ" />
      </div>
    </>
  )
}

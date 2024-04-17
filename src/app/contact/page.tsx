import { Metadata } from 'next'

import Hero from '../../components/Hero/Hero'
import LinkButton from '../../components/LinkButton/LinkButton'

export const metadata: Metadata = {
  title: 'Contact Page - Canopus Portfolio Site',
  description:
    'CANOPUSへの仕事依頼やポートフォリオ閲覧希望は、外部サイトのGoogle Formよりお問い合わせください。Webサイト制作、Webアプリ開発、技術コンサルティングなど、幅広いご要望にお応えします。丁寧なヒアリングと迅速な対応で、お客様の課題解決を支援いたします。',
}

export default function Home() {
  const formLink =
    'https://docs.google.com/forms/d/e/1FAIpQLSfrhmjGSxyxl_faEIuHG7FXqChLmOXky2SPzzDHxj5g5WSo1g/viewform?usp=sf_link'

  return (
    <>
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

import { Metadata } from 'next'

import Hero from '@/components/Hero/Hero'
import LinkButton from '@/components/LinkButton/LinkButton'

import styles from './Work.module.css'

export const metadata: Metadata = {
  title: 'Work Page - Canopus Portfolio Site',
  description:
    'CANOPUSの制作実績は、外部サイト「RESUME（レジュメ）」にて一部公開中。正社員・フリーランス時代の案件は契約上の理由から非公開ですが、限定公開している実績の閲覧を希望される方は、本サイトまたはRESUMEのコンタクトフォームよりお問い合わせください。お客様のニーズに合わせた最適なソリューションをご提案いたします。',
}

export default function Home() {
  return (
    <>
      <Hero title="Work" subtitle="制作実績紹介" />
      <p>
        正社員/フリーランス時代の制作実績の閲覧にはIDとパスワードが必要となります。
        <br />
        ページ閲覧希望の方はコンタクトページよりお問い合わせください。
      </p>

      <LinkButton
        href="/work/restricted"
        text="正社員/フリーランス時代の制作実績を閲覧希望の方はこちら"
      />

      <p className={styles.spacingLg}>
        個人で開発したアプリの紹介ページはこちらから閲覧ください。 <br />
        React, Next.jsを使用したアプリ開発をしております。
      </p>
      <LinkButton
        href="/work/public"
        text="個人開発の制作実績を閲覧希望の方はこちら"
      />
    </>
  )
}

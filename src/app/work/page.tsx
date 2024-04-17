import { Metadata } from 'next'

import Works from './Work'

export const metadata: Metadata = {
  title: 'Work Page - Canopus Portfolio Site',
  description:
    'CANOPUSの制作実績は、外部サイト「RESUME（レジュメ）」にて一部公開中。正社員・フリーランス時代の案件は契約上の理由から非公開ですが、限定公開している実績の閲覧を希望される方は、本サイトまたはRESUMEのコンタクトフォームよりお問い合わせください。お客様のニーズに合わせた最適なソリューションをご提案いたします。',
}

export default function Home() {
  return <Works />
}

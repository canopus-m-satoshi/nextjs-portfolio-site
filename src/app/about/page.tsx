import { Metadata } from 'next'

import About from './About'

export const metadata: Metadata = {
  title: 'About Page(CANOPUSについて) - Canopus Portfolio Site',
  description:
    '都内で活動する5年目のWebエンジニア。HTML/CSS/JSを使ったLP制作やWordpress開発に加え、React/Next.jsなどのモダン技術の習得にも注力。ITの力で企業の課題解決と自社サービス成長に貢献します。',
}

export default function Home() {
  return <About />
}

import './globals.css'

import type { Metadata } from 'next'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

export const metadata: Metadata = {
  title: 'Canopus Portfolio Site',
  description:
    '「CANOPUS」という屋号で都内にて活動しているフリーランスのフロントエンドエンジニアです。2020年よりエンジニアとしての活動を始めさまざまなWebサイト制作の案件に携わってきました。LPやWordpressを利用したWebサイト制作だけでなく、 アプリ開発も対応可能ですのでお気軽にご相談ください。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="jp">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

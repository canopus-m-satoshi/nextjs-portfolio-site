import '@/styles/globals.css'

import type { Metadata } from 'next'

import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'Canopus Portfolio Site',
  description: 'フルスタックエンジニアになりたいフロントエンドエンジニア',
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/ja-JP',
    },
  },
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

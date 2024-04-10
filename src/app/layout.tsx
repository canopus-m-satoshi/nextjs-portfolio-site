import './globals.css'

import type { Metadata } from 'next'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Search your Movie',
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

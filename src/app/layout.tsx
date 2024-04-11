import './globals.css'

import type { Metadata } from 'next'

import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'

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

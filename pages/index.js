import styles from '../styles/home.module.css'

import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Meta />
      <main className={styles.main}>
        <Hero
          title="CANOPUS"
          subtitle="Portfolio Site of Ssatohsi Matsushima"
        />
        <style jsx>{`
          .lead {
            font-weight: 500;
            text-align: center;
          }
        `}</style>
        <div className="lead">
          <p>
            「CANOPUS」という屋号で活動しているフリーランスのフロントエンドエンジニアです。
          </p>
          <p>Webサイト制作からアプリ開発まで対応できます。</p>
        </div>

        <div className={styles.links}>
          <Link href="/about">
            <a>To About ME</a>
          </Link>
          <Link href="/blog">
            <a>To Blog</a>
          </Link>
          <Link href="/work">
            <a>To Works</a>
          </Link>
          <Link href="/contact">
            <a>To Contact</a>
          </Link>
        </div>
      </main>
    </Container>
  )
}

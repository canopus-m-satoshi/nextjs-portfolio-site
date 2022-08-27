import styles from '../styles/home.module.css'

import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'
import LinkButton from '@/components/linkButton'

export default function Home() {
  return (
    <Container>
      <Meta />
      <div className={styles.wrapper}>
        <Hero
          title="CANOPUS"
          subtitle="Portfolio Site of Satoshi Matsushima"
          textCenter
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
          <LinkButton href="/about" text="About" />
          <LinkButton href="/blog" text="Blog" />
          <LinkButton href="/work" text="Work" />
          <LinkButton href="/contact" text="Contact" />
        </div>
      </div>
    </Container>
  )
}

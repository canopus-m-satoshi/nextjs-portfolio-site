import Container from '@/components/container'
import Hero from '@/components/hero'
import LinkButton from '@/components/linkButton'
import Meta from '@/components/meta'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Container>
      <Meta />
      <div className={styles.wrapper}>
        <Hero
          title="CANOPUS"
          subtitle="Portfolio Site of Satoshi Matsushima"
          textCenter
          glitchTitle
        />
        <style jsx>{`
          .lead {
            font-weight: 500;
            text-align: center;
          }
        `}</style>
        <div className="lead">
          <p>
            「CANOPUS」という屋号で都内にて活動しているフリーランスのフロントエンドエンジニアです。
          </p>
          <p>
            2020年よりエンジニアとしての活動を始めさまざまなWebサイト制作の案件に携わってきました。
            <br />
            Webサイト制作だけでなく、
            アプリ開発まで対応可能ですのでお気軽にご相談ください。
          </p>
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

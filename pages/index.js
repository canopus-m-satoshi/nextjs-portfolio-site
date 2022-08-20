import styles from '../styles/home.module.css'

import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'
import Link from 'next/link'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Container>
      <Meta />
      <main className={styles.main}>
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
          <Link href="/about">
            <a>
              <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
              <span>To About</span>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
              <span>To Blog</span>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
              <span>To Works</span>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
              <span>To Contact</span>
            </a>
          </Link>
        </div>
      </main>
    </Container>
  )
}

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
          subtitle="Portfolio Site of Ssatohsi Matsushima"
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
              <span>To About</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <span>To Blog</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
          <Link href="/work">
            <a>
              <span>To Works</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <span>To Contact</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </div>
      </main>
    </Container>
  )
}

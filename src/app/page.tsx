'use client'

import Hero from '@/components/Hero/Hero'
import LinkButton from '@/components/LinkButton/LinkButton'

import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Hero
          title="CANOPUS"
          subtitle="Portfolio Site of CANOPUS"
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
          <p>フルスタックエンジニアになりたいフロントエンドエンジニア</p>
        </div>

        <div className={styles.links}>
          <LinkButton href="/about" text="About" />
          <LinkButton href="/blog" text="Blog" />
          <LinkButton href="/work" text="Work" />
        </div>
      </div>
    </>
  )
}

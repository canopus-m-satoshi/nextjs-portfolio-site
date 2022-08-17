import styles from 'styles/hero.module.css'
import Image from 'next/image'

export default function Hero({ title, subtitle, textCenter = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={textCenter ? styles.subtitleCenter : styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

import styles from '../styles/hero.module.css'
import AnimatedText from './animatedText'

type Props = {
  title: string
  subtitle: string
  textCenter?: boolean
  glitchTitle?: boolean
}

export default function Hero({
  title,
  subtitle,
  textCenter = false,
  glitchTitle = false,
}: Props) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1
          className={glitchTitle ? styles.glitchTitle : styles.normalTitle}
          data-text={title}>
          {title}
        </h1>
        <p className={textCenter ? styles.subtitleCenter : styles.subtitle}>
          <AnimatedText animatedText={subtitle} />
        </p>
      </div>
    </div>
  )
}

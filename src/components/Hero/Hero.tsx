import AnimatedText from '../AnimatedText/AnimatedText'
import styles from './Hero.module.css'

type Props = {
  title: string
  subtitle: string
  textCenter?: boolean
  glitchTitle?: boolean
}

const Hero = ({
  title,
  subtitle,
  textCenter = false,
  glitchTitle = false,
}: Props) => {
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

export default Hero

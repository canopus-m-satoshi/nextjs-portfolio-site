import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from 'styles/hero.module.css'

import AnimatedText from './animatedText'

export default function Hero({
  title,
  subtitle,
  textCenter = false,
  glitchTitle = false,
}) {
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

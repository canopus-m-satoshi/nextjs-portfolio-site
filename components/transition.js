// CSS for framer emotion
import styles from 'styles/transition.module.css'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter()

  // animation ON/OFF
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.4,
      },
    },
    out: {
      x: '-100%',
      transition: {
        ease: 'easeIn',
        duration: 0.5,
        // delay: 0.3,
      },
    },
    in: {
      scale: 0.8,
      y: 100,
      x: '100%',
      transition: {
        ease: 'easeIn',
        duration: 0.5,
      },
    },
    center: {
      x: 0,
      scale: 0.8,
      transformOrigin: 'top',
      transition: {
        ease: 'easeIn',
        duration: 0.5,
      },
    },
    scaleUp: {
      scale: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
        // delay: 0.3,
      },
    },
  }

  return (
    <div className={styles.effect3}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : null}
          initial="in"
          animate={['center', 'scaleUp']}
          exit={['scaleDown', 'out']}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition

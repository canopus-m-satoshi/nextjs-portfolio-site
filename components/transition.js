// CSS for framer emotion
import styles from 'styles/transition.module.css'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

import { useRouter } from 'next/router'

const Transition = ({ children }) => {
  const { asPath } = useRouter()

  // animation ON/OFF
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  }

  return (
    <div className={styles.motionEffect}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : null}
          animate="in"
          initial="out"
          exit="out">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition

// CSS for framer emotion
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'

import { useTransitionFix } from '@/lib/useTransitionFix'

import styles from './Transition.module.css'

const Transition = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter()

  // Measure to transition animation
  const transitionCallback = useTransitionFix()

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
        delay: 0.5,
      },
    },
  }

  return (
    <div className={styles.motionEffect}>
      <AnimatePresence initial={false} onExitComplete={transitionCallback}>
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : undefined}
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

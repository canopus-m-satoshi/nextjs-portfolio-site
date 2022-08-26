import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useEffect } from 'react'

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 1, delay: 0.3 },
  },
  hidden: { opacity: 0, y: 100 },
}

export default function InViewMotion({ children }) {
  const controls = useAnimation()
  const scrollRef = useRef(null)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="square">
      {children}
    </motion.div>
  )
}

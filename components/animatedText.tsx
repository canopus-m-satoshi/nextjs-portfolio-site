import { motion } from 'framer-motion'

type Props = {
  animatedText: string
}

const AnimatedText = ({ animatedText }: Props) => {
  const line = animatedText

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5000,
        staggerChildren: 0.09,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.span variants={sentence} initial="hidden" animate="visible">
      {line.split('').map((char, index) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
export default AnimatedText

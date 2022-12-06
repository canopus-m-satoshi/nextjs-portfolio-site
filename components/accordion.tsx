import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimationControls } from 'framer-motion'
import { ReactNode, useState } from 'react'

import styles from '../styles/accordion.module.css'

type Props = {
  heading: string
  children: ReactNode
}

const Accordion = ({ heading, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpanded = () => {
    if (isExpanded) {
      controls.start({
        height: '0',
      })
    } else {
      controls.start({
        height: '100%',
      })
    }

    setIsExpanded(!isExpanded)
  }

  const controls = useAnimationControls()

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <button
          onClick={toggleExpanded}
          className={isExpanded ? styles.open : styles.close}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </div>
      <motion.div
        className={styles.accordion}
        animate={controls}
        transition={{ duration: 0.5 }}>
        <div className={styles.textInner}>{children}</div>
      </motion.div>
    </div>
  )
}

export default Accordion

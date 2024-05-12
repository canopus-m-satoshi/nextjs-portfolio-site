import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'

import styles from './Button.module.css'

type Props = {
  text: string
  isLeftArrow?: boolean
  onClick?: () => void
}

export default function Button({ text, onClick, isLeftArrow = false }: Props) {
  return (
    <button onClick={onClick} className={styles.button}>
      {isLeftArrow ? (
        <FaChevronLeft color={'#fff'} />
      ) : (
        <FaChevronRight color={'#fff'} />
      )}
      <span>{text}</span>
    </button>
  )
}

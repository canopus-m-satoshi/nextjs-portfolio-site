import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'

import styles from './LinkButton.module.css'

type Props = {
  href: string
  text: string
  isLeftArrow?: boolean
}

export default function LinkButton({ href, text, isLeftArrow = false }: Props) {
  return (
    <span className={styles.link}>
      <Link href={href}>
        {isLeftArrow ? (
          <FaChevronLeft color={'#fff'} />
        ) : (
          <FaChevronRight color={'#fff'} />
        )}
        <span>{text}</span>
      </Link>
    </span>
  )
}

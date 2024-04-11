import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/linkButton.module.css'

type Props = {
  href: string
  text: string
}

export default function LinkButton({ href, text }: Props) {
  return (
    <span className={styles.link}>
      <Link href={href}>
        <FaChevronRight color={'#fff'} />
        <span>{text}</span>
      </Link>
    </span>
  )
}

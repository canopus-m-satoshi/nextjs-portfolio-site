import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import styles from '../styles/linkButton.module.css'

type Props = {
  href: string
  text: string
}

export default function LinkButton({ href, text }: Props) {
  return (
    <span className={styles.link}>
      <Link href={href}>
        <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
        <span>{text}</span>
      </Link>
    </span>
  )
}

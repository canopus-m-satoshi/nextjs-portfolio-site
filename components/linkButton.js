import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import styles from '../styles/linkButton.module.css'

export default function LinkButton({ href, text }) {
  return (
    <span className={styles.link}>
      <Link href={href}>
        <a>
          <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
          <span>{text}</span>
        </a>
      </Link>
    </span>
  )
}

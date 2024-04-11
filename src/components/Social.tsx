import { SiZenn } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import styles from '../styles/social.module.css'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="https://twitter.com/canopus_sato" target="blank">
          <FaXTwitter />
        </Link>
      </li>
      <li>
        <Link href={'https://github.com/canopus-m-satoshi'} target="blank">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link href={'https://zenn.dev/sato_frontend'} target="blank">
          <SiZenn />
        </Link>
      </li>
    </ul>
  )
}
export default Social

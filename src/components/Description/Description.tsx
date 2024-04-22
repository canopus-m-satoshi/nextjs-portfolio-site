import Link from 'next/link'
import { VscMultipleWindows } from 'react-icons/vsc'

import { Work } from '@/types/work'

import styles from './Description.module.css'

type Props = Pick<Work, 'role' | 'url' | 'description'>

const Description = ({ role, url, description }: Props) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>Role</h2>
      <ul className={styles.list}>
        {role.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr className={styles.hr} />
      <h2 className={styles.title}>Site URL</h2>
      <Link href={url} className={styles.link} target="blank">
        <span>{url}</span>
        <VscMultipleWindows size={'1.2em'} className={styles.icon} />
      </Link>
      <hr className={styles.hr} />
      <h2 className={styles.title}>Description</h2>
      <p>{description}</p>
    </div>
  )
}
export default Description

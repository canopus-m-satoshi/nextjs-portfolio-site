import Image from 'next/image'

import { Work } from '@/types/work'

import styles from './siteView.module.css'

type Props = {
  thumbPc: Work['thumbPc']
  thumbSp: Work['thumbSp']
  alt: string
}

const SiteView = ({ thumbPc, thumbSp, alt }: Props) => {
  return (
    <div className={styles.flex}>
      <div className={styles.img}>
        <Image
          src={thumbPc.url}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <div className={`${styles.img} ${styles.mockupSp}`}>
        <Image
          src={thumbSp.url}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
export default SiteView

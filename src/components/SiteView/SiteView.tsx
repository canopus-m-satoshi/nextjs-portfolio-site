import Image from 'next/image'

import eyecatch from '../../images/my_picture.jpg'
import styles from './siteView.module.css'

const SiteView = () => {
  return (
    <div className={styles.img}>
      <Image
        src={eyecatch}
        alt=" "
        fill
        objectFit="cover"
        priority
        placeholder="blur"
      />
    </div>
  )
}
export default SiteView

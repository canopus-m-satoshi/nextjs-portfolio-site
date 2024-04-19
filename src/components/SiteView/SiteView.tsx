import Image from 'next/image'

import { Work } from '../../types/work'
import styles from './siteView.module.css'

type Props = {
  img: Work['img']
  alt: string
}

const SiteView = ({ img, alt }: Props) => {
  return (
    <>
      <div className={styles.img}>
        <Image src={img.url} alt={alt} fill objectFit="contain" priority />
      </div>
    </>
  )
}
export default SiteView

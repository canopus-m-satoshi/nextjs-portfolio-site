import { ReactNode } from 'react'

import styles from './Container.module.css'

type Props = {
  children: ReactNode
  large?: boolean
}

const Container = ({ children, large = false }: Props) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}
export default Container

import styles from '../styles/two-column.module.css'
import { ChildrenProps } from '../types/children-props'

export function TwoColumn({ children }: ChildrenProps) {
  return <div className={styles.flexContainer}>{children}</div>
}

export function TwoColumnMain({ children }: ChildrenProps) {
  return <div className={styles.main}>{children}</div>
}

export function TwoColumnSidebar({ children }: ChildrenProps) {
  return <div className={styles.sidebar}>{children}</div>
}

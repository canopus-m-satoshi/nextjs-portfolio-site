import styles from '../styles/post-body.module.css'
import { ChildrenProps } from '../types/children-props'

const PostBody = ({ children }: ChildrenProps) => {
  return <div className={styles.stack}>{children}</div>
}
export default PostBody

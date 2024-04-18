import styles from './CategoryList.module.css'

const CategoryList = () => {
  return (
    <ul className={styles.lists}>
      <li>HTML</li>
      <li>CSS</li>
      <li>SASS</li>
      <li>Javascript</li>
      <li>jQuery</li>
      <li>PHP</li>
    </ul>
  )
}
export default CategoryList

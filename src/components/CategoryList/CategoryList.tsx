import styles from './CategoryList.module.css'

type Props = {
  tech: string[]
}

const CategoryList = ({ tech }: Props) => {
  return (
    <div>
      {tech && (
        <ul className={styles.lists}>
          {tech.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default CategoryList

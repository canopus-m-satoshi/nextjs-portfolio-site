import styles from '../styles/footer.module.css'
import Container from './container'
import Social from './Social'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Social />
          <p>&copy; 2024 CANOPUS</p>
        </div>
      </Container>
    </footer>
  )
}
export default Footer

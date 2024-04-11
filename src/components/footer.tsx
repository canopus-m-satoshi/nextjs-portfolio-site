import styles from '../styles/footer.module.css'
import Container from './Container'
import Social from './Social'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Social />
          <p>&copy; 2022 CANOPUS</p>
        </div>
      </Container>
    </footer>
  )
}
export default Footer

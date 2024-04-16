import Container from '../Container/Container'
import Social from '../Social/Social'
import styles from './Footer.module.css'

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

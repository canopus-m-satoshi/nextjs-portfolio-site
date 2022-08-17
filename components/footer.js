import styles from 'styles/footer.module.css'

import Container from '@/components/container'
import Social from '@/components/Social'

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

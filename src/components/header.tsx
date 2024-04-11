import styles from '../styles/header.module.css'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <Container large>
      <header className={styles.header}>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </header>
    </Container>
  )
}
export default Header

import styles from '../styles/header.module.css'
import Container from './container'
import Logo from './logo'
import Nav from './nav'

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

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import styles from './header.module.css'

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

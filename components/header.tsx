import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

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

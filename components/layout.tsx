import styles from '../styles/layout.module.css'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
export default Layout

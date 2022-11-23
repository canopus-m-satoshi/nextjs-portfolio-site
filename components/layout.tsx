import styles from 'styles/layout.module.css'

import Footer from '@/components/footer'
import Header from '@/components/header'

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

import styles from 'styles/nav.module.css'

import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">Menu</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a onClick={closeNav}>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a onClick={closeNav}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav

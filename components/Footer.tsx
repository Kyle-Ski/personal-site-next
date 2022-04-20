import styles from '../styles/Footer.module.css'
import { FOOTER } from '../utils/constants'
import ContactIcons from './ContactIcons'

const Footer = () => (
  <div id={FOOTER} className={styles.footerWrapper}>
    <ContactIcons />
    <footer>© {new Date().getFullYear()} Kyle Czajkowski</footer>
  </div>
)

export default Footer

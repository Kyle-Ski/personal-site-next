import { Link } from '@nextui-org/react'
import styles from '../styles/Footer.module.css'
import { FOOTER } from '../utils/constants'
import ContactIcons from './ContactIcons'

const Footer = () => (
  <div id={FOOTER} className={styles.footerWrapper}>
    <ContactIcons />
    <footer><Link block style={{color: 'var(--color-green-0)'}} target={'_blank'} href={'https://github.com/Kyle-Ski/personal-site-next'}>© {new Date().getFullYear()} By Kyle Czajkowski</Link></footer>
  </div>
)

export default Footer

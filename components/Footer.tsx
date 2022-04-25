import { Link as LinkUi } from '@nextui-org/react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { FOOTER } from '../utils/constants'
import ContactIcons from './ContactIcons'

const Footer = () => (
  <div id={FOOTER} className={styles.footerWrapper}>
    <ContactIcons />
    <footer>
      <Link href="https://github.com/Kyle-Ski/personal-site-next">
        <LinkUi
          block
          style={{ color: 'var(--color-green-0)' }}
          target={'_blank'}
          href="https://github.com/Kyle-Ski/personal-site-next"
        >
          © {new Date().getFullYear()} By Kyle Czajkowski
        </LinkUi>
      </Link>
    </footer>
  </div>
)

export default Footer

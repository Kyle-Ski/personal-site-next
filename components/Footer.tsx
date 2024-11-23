'use client'

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FOOTER } from '../utils/constants';
import ContactIcons from './ContactIcons';

const Footer = () => (
  <div id={FOOTER} className={styles.footerWrapper}>
    <ContactIcons />
    <footer>
      <Link href="https://github.com/Kyle-Ski/personal-site-next" target="_blank" rel="noopener noreferrer">
        <span style={{ color: 'var(--color-green-0)' }}>
          © {new Date().getFullYear()} By Kyle Czajkowski
        </span>
      </Link>
    </footer>
  </div>
);

export default Footer;

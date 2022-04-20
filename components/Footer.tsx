import styles from '../styles/Footer.module.css'

const Footer = () => (
    <div className={styles.footerWrapper}>
         <footer >© {new Date().getFullYear()} Kyle Czajkowski</footer>
    </div>
)

export default Footer

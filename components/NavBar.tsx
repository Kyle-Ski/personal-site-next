import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import {
  ABOUT_TITLE,
  FOOTER,
  PERSONAL_TIMELINE_ANCHOR,
  PROJECTS_TITLE,
  SKILLS_TITLE,
} from '../utils/constants'
import ToggleDarkMode from './ToggleDarkMode'

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <nav role="navigation">
        <div className={styles.menuToggle}>
          <input type="checkbox" />

          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>

          <ul className={styles.menu}>
            <Link href={`#${ABOUT_TITLE}`}>
              <li>About</li>
            </Link>
            <Link href={`#${PERSONAL_TIMELINE_ANCHOR}`}>
              <li>Personal Timeline</li>
            </Link>
            <Link href={`#${PROJECTS_TITLE}`}>
              <li>Projects</li>
            </Link>
            <Link href={`#${SKILLS_TITLE}`}>
              <li>Skills</li>
            </Link>
            <Link href={`#${FOOTER}`}>
              <li>Get in Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
      <ToggleDarkMode />
    </div>
  )
}

export default NavBar

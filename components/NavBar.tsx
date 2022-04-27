import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import {
  ABOUT_TITLE,
  FOOTER,
  PERSONAL_TIMELINE_ANCHOR,
  PROJECTS_TITLE,
  RESUME_ANCHOR,
  SKILLS_TITLE,
} from '../utils/constants'
import ToggleDarkMode from './ToggleDarkMode'

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <nav role="navigation">
        <div className={styles.menuToggle}>
          <input type="checkbox" aria-label='Open site navigation'/>

          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>

          <ul className={styles.menu}>
            <Link passHref href={`#${ABOUT_TITLE}`}>
              <li>About</li>
            </Link>
            <Link passHref href={`#${PERSONAL_TIMELINE_ANCHOR}`}>
              <li>Personal Timeline</li>
            </Link>
            <Link passHref href={`#${PROJECTS_TITLE}`}>
              <li>Projects</li>
            </Link>
            <Link passHref href={`#${SKILLS_TITLE}`}>
              <li>Skills</li>
            </Link>
            <Link passHref href={`#${RESUME_ANCHOR}`}>
              <li>Resume</li>
            </Link>
            <Link passHref href={`#${FOOTER}`}>
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

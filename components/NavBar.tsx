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
            <a href={`#${ABOUT_TITLE}`}>
              <li>About</li>
            </a>
            <a href={`#${PERSONAL_TIMELINE_ANCHOR}`}>
              <li>Personal Timeline</li>
            </a>
            <a href={`#${PROJECTS_TITLE}`}>
              <li>Projects</li>
            </a>
            <a href={`#${SKILLS_TITLE}`}>
              <li>Skills</li>
            </a>
            <a href={`#${FOOTER}`}>
              <li>Get in Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      <ToggleDarkMode />
    </div>
  )
}

export default NavBar

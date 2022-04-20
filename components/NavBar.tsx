import styles from '../styles/NavBar.module.css'
import ToggleDarkMode from './ToggleDarkMode'
import { ABOUT_TITLE, PERSONAL_TIMELINE_ANCHOR, PROJECTS_TITLE, SKILLS_TITLE } from '../utils/constants'
import ContactIcons from './ContactIcons'

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
            <li>Get in contact:<ContactIcons /></li>
            <ToggleDarkMode />
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default NavBar

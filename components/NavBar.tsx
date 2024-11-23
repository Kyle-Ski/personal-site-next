import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import {
  ABOUT_TITLE,
  FOOTER,
  PERSONAL_TIMELINE_ANCHOR,
  PROJECTS_TITLE,
  RESUME_ANCHOR,
  SKILLS_TITLE,
  STRAVA_TITLE,
} from "../utils/constants";
import ToggleDarkMode from "./ToggleDarkMode";

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <nav role="navigation">
        <div className={styles.menuToggle}>
          <input type="checkbox" aria-label="Open site navigation" />

          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>
          <span className={styles.menuToggleSpan}></span>

          <ul className={styles.menu}>
            <li>
              <Link passHref href={`#${ABOUT_TITLE}`}>
                About
              </Link>
            </li>
            <li>
              <Link passHref href={`#${PERSONAL_TIMELINE_ANCHOR}`}>
                Personal Timeline
              </Link>
            </li>
            <li>
              <Link passHref href={`#${PROJECTS_TITLE}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link passHref href={`#${SKILLS_TITLE}`}>
                Skills
              </Link>
            </li>
            <li>
              <Link passHref href={`#${RESUME_ANCHOR}`}>
                Resume
              </Link>
            </li>
            <li>
              <Link passHref href={`#${STRAVA_TITLE}`}>
                Strava Runs
              </Link>
            </li>
            <li>
              <Link passHref href={`#${FOOTER}`}>
                Get in Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ToggleDarkMode />
    </div>
  );
};

export default NavBar;

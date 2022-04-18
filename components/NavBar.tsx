import styles from '../styles/NavBar.module.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ToggleDarkMode from './ToggleDarkMode'
import { ABOUT_TITLE, PERSONAL_TIMELINE_ANCHOR } from '../utils/constants'

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
            <a href={`#${ABOUT_TITLE}`}>
              <li>Contact</li>
            </a>
            <ToggleDarkMode />
          </ul>
        </div>
      </nav>

      <h3>Nav Bar</h3>
      {/* <Popup
        trigger={<div className={styles.navMenu}> Sub menu </div>}
        position="left top"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className={styles.menu}>
          <div className={styles.menu_item}> item 1</div>
          <div className={styles.menu_item}> item 2</div>
          <div className={styles.menu_item}> item 3</div>
        </div>
      </Popup> */}
    </div>
  )
}

export default NavBar

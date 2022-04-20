import { LIGHT_THEME } from '../utils/constants'
import utilStyles from '../styles/utils.module.css'
import { useDarkMode } from '../hooks/useDarkMode'
import styles from '../styles/DarkMode.module.css'

const ToggleDarkMode = () => {
  const { inactiveTheme, toggleTheme, activeTheme } = useDarkMode()
  return (
    <button
      className={styles.darkModeButton}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={toggleTheme}
    >
      {activeTheme === LIGHT_THEME ? (
        <span className={utilStyles.singleRow}>Toggle {inactiveTheme} mode</span>
      ) : (
        <span className={utilStyles.singleRow}>Toggle {inactiveTheme} mode</span>
      )}
    </button>
  )
}

export default ToggleDarkMode

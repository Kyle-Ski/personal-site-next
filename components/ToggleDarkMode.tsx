"use client"
import { LIGHT_THEME } from '../utils/constants'
import { useDarkMode } from '../hooks/useDarkMode'
import styles from '../styles/DarkMode.module.css'
import { BsMoonStarsFill, BsSunriseFill } from 'react-icons/bs'
import { Tooltip } from '@nextui-org/react'

const ToggleDarkMode = () => {
  const { inactiveTheme, toggleTheme, activeTheme } = useDarkMode()
  return (
    <Tooltip
      hideArrow
      css={{ backgroundColor: '#55893c' }}
      placement="leftStart"
      content={`Toggle ${inactiveTheme} mode`}
    >
      <button
        className={styles.darkModeButton}
        aria-label={`Change to ${inactiveTheme} mode`}
        title={`Change to ${inactiveTheme} mode`}
        type="button"
        onClick={toggleTheme}
      >
        {activeTheme === LIGHT_THEME ? (
          <span className={styles.buttonText}>
            {inactiveTheme === 'light' ? <BsSunriseFill /> : <BsMoonStarsFill />}
          </span>
        ) : (
          <span className={styles.buttonText}>
            {inactiveTheme === 'light' ? <BsSunriseFill /> : <BsMoonStarsFill />}
          </span>
        )}
      </button>
    </Tooltip>
  )
}

export default ToggleDarkMode

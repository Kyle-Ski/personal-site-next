import { createContext, FC, useContext, useEffect, useState } from 'react'
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_STRING,
  UNDEFINED_STRING,
} from '../utils/constants'
import utilStyles from '../styles/utils.module.css'

type inactiveThemeType = 'light' | 'dark'
interface DarkMode {
  activeTheme?: string
  toggleTheme: () => void
  inactiveTheme: inactiveThemeType
}

const DarkModeContext = createContext<DarkMode>({} as DarkMode)

const DarkModeProvider: FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<string | undefined>(
    typeof document !== UNDEFINED_STRING
      ? document?.body?.dataset?.theme
      : UNDEFINED_STRING
  )

  const inactiveTheme = activeTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME

  useEffect(() => {
    if (typeof document !== UNDEFINED_STRING && typeof window !== UNDEFINED_STRING) {
      const getUserPreference = () => {
        if (window?.localStorage?.getItem(THEME_STRING) !== null) {
          return window?.localStorage?.getItem(THEME_STRING)
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? DARK_THEME
          : LIGHT_THEME
      }
      const userPref = getUserPreference()
      if (userPref !== null) {
        setActiveTheme(userPref === undefined ? LIGHT_THEME : userPref)
        document.body.dataset.theme = userPref === undefined ? LIGHT_THEME : userPref
      }
      window.localStorage?.setItem(
        THEME_STRING,
        userPref === null ? LIGHT_THEME : userPref
      )
    }
  }, [])

  const toggleTheme = () => {
    if (typeof document !== UNDEFINED_STRING && typeof window !== UNDEFINED_STRING) {
      document.body.dataset.theme = inactiveTheme
      window.localStorage.setItem(THEME_STRING, inactiveTheme)
    }
    setActiveTheme(inactiveTheme)
  }

  const value = { activeTheme, toggleTheme, inactiveTheme }

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a BeerProvider')
  }
  return { ...context }
}

export { DarkModeProvider, useDarkMode }

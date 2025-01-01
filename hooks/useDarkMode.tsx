"use client";
import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_STRING,
  UNDEFINED_STRING,
} from "../utils/constants";

interface DarkMode {
  activeTheme?: string;
  toggleTheme: () => void;
  inactiveTheme: string;
}

const DarkModeContext = createContext<DarkMode>({} as DarkMode);

type Props = {
  children?: React.ReactNode
};

const DarkModeProvider: FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<string | undefined>(
    typeof document !== UNDEFINED_STRING
      ? document.body.dataset.theme
      : UNDEFINED_STRING
  );

  const inactiveTheme = activeTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

  useEffect(() => {
    if (typeof document !== UNDEFINED_STRING && typeof window !== UNDEFINED_STRING) {
      const getUserPreference = () => {
        const storedPreference = window.localStorage.getItem(THEME_STRING);
        if (storedPreference) return storedPreference;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? DARK_THEME
          : LIGHT_THEME;
      };

      const userPref = getUserPreference();
      setActiveTheme(userPref);
      document.body.dataset.theme = userPref;
      document.documentElement.classList.toggle("dark", userPref === DARK_THEME);
      window.localStorage.setItem(THEME_STRING, userPref);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== UNDEFINED_STRING) {
      document.body.dataset.theme = inactiveTheme;
      document.documentElement.classList.toggle("dark", inactiveTheme === DARK_THEME);
      window.localStorage.setItem(THEME_STRING, inactiveTheme);
    }
    setActiveTheme(inactiveTheme);
  };

  const value = { activeTheme, toggleTheme, inactiveTheme };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return { ...context };
};

export { DarkModeProvider, useDarkMode };

import { V as require_react, Y as __toESM, n as require_jsx_runtime, q as __exportAll } from "../../index.js";
import { a as THEME_STRING, o as UNDEFINED_STRING, r as LIGHT_THEME, t as DARK_THEME } from "./constants-DFxRiK_T.js";
//#region hooks/useDarkMode.tsx
var useDarkMode_exports = /* @__PURE__ */ __exportAll({
	DarkModeProvider: () => DarkModeProvider,
	useDarkMode: () => useDarkMode
});
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var DarkModeContext = (0, import_react.createContext)({});
var DarkModeProvider = ({ children }) => {
	const [activeTheme, setActiveTheme] = (0, import_react.useState)(typeof document !== "undefined" ? document.body.dataset.theme : UNDEFINED_STRING);
	const inactiveTheme = activeTheme === "light" ? DARK_THEME : LIGHT_THEME;
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined" && typeof window !== "undefined") {
			const getUserPreference = () => {
				const storedPreference = window.localStorage.getItem(THEME_STRING);
				if (storedPreference) return storedPreference;
				return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_THEME : LIGHT_THEME;
			};
			const userPref = getUserPreference();
			setActiveTheme(userPref);
			document.body.dataset.theme = userPref;
			document.documentElement.classList.toggle("dark", userPref === DARK_THEME);
			window.localStorage.setItem(THEME_STRING, userPref);
		}
	}, []);
	const toggleTheme = () => {
		if (typeof document !== "undefined") {
			document.body.dataset.theme = inactiveTheme;
			document.documentElement.classList.toggle("dark", inactiveTheme === DARK_THEME);
			window.localStorage.setItem(THEME_STRING, inactiveTheme);
		}
		setActiveTheme(inactiveTheme);
	};
	const value = {
		activeTheme,
		toggleTheme,
		inactiveTheme
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarkModeContext.Provider, {
		value,
		children
	});
};
var useDarkMode = () => {
	const context = (0, import_react.useContext)(DarkModeContext);
	if (!context) throw new Error("useDarkMode must be used within a DarkModeProvider");
	return { ...context };
};
//#endregion
export { useDarkMode_exports as n, useDarkMode as t };

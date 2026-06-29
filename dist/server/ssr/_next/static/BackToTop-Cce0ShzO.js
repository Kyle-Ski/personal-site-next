import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { n as IconContext } from "./iconBase-Bcz5pr_J.js";
import { t as BsFillArrowUpSquareFill } from "./bs-Dy5vldlX.js";
//#region components/BackToTop.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var BackToTop = () => {
	const [scrollPosition, setScrollPosition] = (0, import_react.useState)(0);
	const [showButton, setShowButton] = (0, import_react.useState)(false);
	const handleVisibleButton = () => {
		const position = window.scrollY;
		setScrollPosition(position);
		setShowButton(position > 100);
	};
	const handleScrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		window.addEventListener("scroll", handleVisibleButton);
		return () => window.removeEventListener("scroll", handleVisibleButton);
	}, [scrollPosition]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconContext.Provider, {
		value: { className: `scroll ${showButton ? "show-button" : "hide-button"}` },
		children: showButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BsFillArrowUpSquareFill, { onClick: handleScrollUp })
	});
};
//#endregion
export { BackToTop as default };

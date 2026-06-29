import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
//#region node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var NextStudioLayoutComponent = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	id: "sanity",
	"data-ui": "NextStudioLayout",
	style: {
		height: "100vh",
		maxHeight: "100dvh",
		overscrollBehavior: "none",
		WebkitFontSmoothing: "antialiased",
		overflow: "auto"
	},
	children
}), NextStudioLayout = (0, import_react.memo)(NextStudioLayoutComponent), NextStudioNoScript = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	style: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		background: "#fff",
		zIndex: 1
	},
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			textAlign: "center",
			fontFamily: "helvetica, arial, sans-serif"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "JavaScript disabled" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Please ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://www.enable-javascript.com/",
				children: "enable JavaScript"
			}),
			" in your browser and reload the page to proceed."
		] })]
	})
}) });
//#endregion
export { NextStudioNoScript as n, NextStudioLayout as t };

import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { n as NextStudioNoScript, t as NextStudioLayout } from "./NextStudioNoScript-RySHa0Rb.js";
//#region node_modules/next-sanity/dist/studio/client-component.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var NextStudioClientComponent = (0, import_react.lazy)(() => import("./NextStudio-Dklo3Oq9.js"));
function NextStudioLazyClientComponent(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextStudioClientComponent, { ...props })
	});
}
//#endregion
//#region node_modules/next-sanity/dist/studio.js
var viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover"
}, metadata = {
	referrer: "same-origin",
	robots: "noindex"
};
//#endregion
export { NextStudioLazyClientComponent as NextStudio, NextStudioLayout, NextStudioNoScript, metadata, viewport };

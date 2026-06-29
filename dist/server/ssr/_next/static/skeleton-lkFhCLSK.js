import { n as require_jsx_runtime } from "../../index.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
//#endregion
//#region components/ui/skeleton.tsx
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className = "", style, circle = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `animate-pulse bg-gradient-to-br from-[var(--color-bg-tertiary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] ${circle ? "rounded-full" : "rounded-lg"} ${className}`,
		style
	});
}
//#endregion
export { TrendingUp as n, Skeleton as t };

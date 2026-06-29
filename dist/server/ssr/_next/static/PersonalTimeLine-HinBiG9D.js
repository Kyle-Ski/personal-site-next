import { n as require_jsx_runtime } from "../../index.js";
import { i as PERSONAL_TIMELINE_ANCHOR } from "./constants-DFxRiK_T.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-DWelpZDx.js";
//#region components/PersonalTimeLine.tsx
var import_jsx_runtime = require_jsx_runtime();
var PersonalTimeLine = ({ timeline }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container mx-auto px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: PERSONAL_TIMELINE_ANCHOR,
			className: "text-3xl font-bold mb-8 text-center",
			children: "Personal Timeline"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-center space-y-6",
			children: timeline && timeline.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "w-full max-w-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-center text-xl font-semibold",
					children: item?.title || `Default Title ${index + 1}`
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-gray-500 dark:text-gray-400",
					children: item?.dateRange || `Default Date Range ${index + 1}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-gray-700 dark:text-gray-300",
					children: item?.description || `Default Description ${index + 1}`
				})] })]
			}, `${item?.title}${index}`))
		})]
	});
};
//#endregion
export { PersonalTimeLine as default };

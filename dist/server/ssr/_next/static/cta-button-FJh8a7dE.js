import { n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
//#region components/ui/cta-button.tsx
var import_jsx_runtime = require_jsx_runtime();
var baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-text-accent)]";
var solidStyle = {
	backgroundColor: "var(--color-text-accent)",
	color: "white"
};
var outlineStyle = {
	borderColor: "var(--color-text-accent)",
	color: "var(--color-text-accent)",
	borderWidth: 1,
	borderStyle: "solid",
	backgroundColor: "transparent"
};
function CtaButton(props) {
	const { children, variant = "solid", className = "" } = props;
	const style = variant === "solid" ? solidStyle : outlineStyle;
	const classes = `${baseClasses} ${className}`;
	if ("href" in props && props.href) {
		if (props.external) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: props.href,
			className: classes,
			style,
			target: "_blank",
			rel: "noopener noreferrer",
			children
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			href: props.href,
			className: classes,
			style,
			children
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: props.type ?? "button",
		onClick: props.onClick,
		className: classes,
		style,
		children
	});
}
//#endregion
export { CtaButton as default };

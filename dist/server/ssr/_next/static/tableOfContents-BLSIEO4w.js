import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as cn } from "./utils-CEeuMo-q.js";
//#region components/tableOfContents.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var TableOfContents = ({ content }) => {
	const [activeSection, setActiveSection] = (0, import_react.useState)("");
	const [headings, setHeadings] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const extractHeadings = (blocks) => {
			return blocks.filter((block) => block.style === "h3" || block.style === "h2" || block.style === "h1").map((block) => {
				const text = block.children[0]?.text || "";
				return {
					text,
					id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, ""),
					level: parseInt(block.style.charAt(1))
				};
			});
		};
		if (content?.length) setHeadings(extractHeadings(content));
	}, [content]);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveSection(entry.target.id);
			});
		}, { rootMargin: "-20% 0px -80% 0px" });
		headings.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});
		return () => observer.disconnect();
	}, [headings]);
	if (headings.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "hidden xl:flex xl:fixed xl:right-[max(2rem,calc(50%-45rem))] top-1/2 transform -translate-y-1/2 w-64",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-semibold mb-3 text-gray-800 dark:text-gray-100",
				children: "Jump to"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: headings.map(({ text, id, level }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					style: { paddingLeft: `${(level - 1) * .75}rem` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${id}`,
						className: cn("block py-1 text-sm transition-colors hover:text-[var--color-text-accent]", activeSection === id ? "text-[var--color-text-accent] font-medium" : "text-gray-600 dark:text-gray-400"),
						onClick: (e) => {
							e.preventDefault();
							document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
						},
						children: text
					})
				}, id))
			})]
		})
	});
};
//#endregion
export { TableOfContents as default };

import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as List } from "./list-CgkUiQet.js";
import { t as Compass } from "./compass-_eZhQ7RV.js";
import { t as Backpack } from "./backpack-UCyKRH3w.js";
import { t as Map } from "./map-xDjMLiU8.js";
import { t as ChevronDown } from "./chevron-down-QG7MwUIO.js";
//#region components/adventure/TripReportTableOfContents.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SECTION_REGISTRY = {
	"route-data": {
		title: "Route & Elevation",
		icon: Map,
		order: 1
	},
	"route-notes": {
		title: "Route Notes & Navigation",
		icon: Compass,
		order: 2
	},
	"gear-used": {
		title: "Essential Gear Used",
		icon: Backpack,
		order: 3
	}
};
function TripReportTableOfContents({ tripReport }) {
	const [tocItems, setTocItems] = (0, import_react.useState)([]);
	const [activeId, setActiveId] = (0, import_react.useState)("");
	const [userClicked, setUserClicked] = (0, import_react.useState)(false);
	const [showScrollIndicator, setShowScrollIndicator] = (0, import_react.useState)(false);
	const navRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setTimeout(() => {
			const foundSections = [];
			const foundHeadings = [];
			Object.entries(SECTION_REGISTRY).forEach(([sectionId, sectionInfo]) => {
				if (document.getElementById(sectionId)) foundSections.push({
					id: sectionId,
					title: sectionInfo.title,
					level: "section",
					icon: sectionInfo.icon,
					order: sectionInfo.order
				});
			});
			const headings = document.querySelectorAll(".adventure-content h1, .adventure-content h2, .adventure-content h3");
			let lastH1 = null;
			let lastH2 = null;
			headings.forEach((heading, index) => {
				const level = heading.tagName.toLowerCase();
				const text = heading.textContent || `Heading ${index + 1}`;
				const id = `heading-${index}`;
				if (Object.values(SECTION_REGISTRY).some((section) => section.title === text)) return;
				if (!heading.id) heading.id = id;
				if (level === "h1") {
					const h1Item = {
						id: heading.id,
						title: text,
						level,
						order: 1e3 + index,
						children: []
					};
					lastH1 = h1Item;
					lastH2 = null;
					foundHeadings.push(h1Item);
				} else if (level === "h2") {
					const h2Item = {
						id: heading.id,
						title: text,
						level,
						order: 1e3 + index,
						children: []
					};
					if (lastH1 && lastH1.children) lastH1.children.push(h2Item);
					else foundHeadings.push(h2Item);
					lastH2 = h2Item;
				} else if (level === "h3") {
					const h3Item = {
						id: heading.id,
						title: text,
						level,
						order: 1e3 + index
					};
					if (lastH2 && lastH2.children) lastH2.children.push(h3Item);
					else foundHeadings.push(h3Item);
				}
			});
			setTocItems([...foundSections, ...foundHeadings].sort((a, b) => a.order - b.order));
		}, 100);
	}, [tripReport]);
	(0, import_react.useEffect)(() => {
		const checkScrollable = () => {
			if (navRef.current) {
				const { scrollHeight, clientHeight } = navRef.current;
				setShowScrollIndicator(scrollHeight > clientHeight);
			}
		};
		checkScrollable();
		window.addEventListener("resize", checkScrollable);
		return () => window.removeEventListener("resize", checkScrollable);
	}, [tocItems]);
	(0, import_react.useEffect)(() => {
		if (tocItems.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			if (userClicked) return;
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveId(entry.target.id);
			});
		}, { rootMargin: "-10% 0px -70% 0px" });
		const observeItems = (items) => {
			items.forEach((item) => {
				const element = document.getElementById(item.id);
				if (element) observer.observe(element);
				if (item.children) observeItems(item.children);
			});
		};
		observeItems(tocItems);
		return () => observer.disconnect();
	}, [tocItems, userClicked]);
	(0, import_react.useEffect)(() => {
		if (!activeId || userClicked) return;
		const activeButton = navRef.current?.querySelector(`button[data-toc-id="${activeId}"]`);
		if (activeButton && navRef.current) {
			const navRect = navRef.current.getBoundingClientRect();
			const buttonRect = activeButton.getBoundingClientRect();
			if (buttonRect.top < navRect.top || buttonRect.bottom > navRect.bottom) activeButton.scrollIntoView({
				behavior: "smooth",
				block: "nearest"
			});
		}
	}, [activeId, userClicked]);
	const scrollToSection = (id) => {
		setUserClicked(true);
		setActiveId(id);
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			setTimeout(() => {
				setUserClicked(false);
			}, 800);
		}
	};
	const renderTOCItems = (items, depth = 0) => {
		return items.map((item) => {
			const isActive = activeId === item.id;
			const IconComponent = item.icon;
			const hasChildren = item.children && item.children.length > 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				"data-toc-id": item.id,
				onClick: () => scrollToSection(item.id),
				className: `
              w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition-all duration-200
              ${isActive ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-l-2 border-green-500 font-medium" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"}
              ${item.level === "h3" ? "ml-4" : ""}
              ${item.level === "h2" ? "ml-2" : ""}
              ${depth === 1 ? "ml-2" : ""}
              ${depth === 2 ? "ml-4" : ""}
            `,
				children: [IconComponent && item.level === "section" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-3 w-3 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate leading-relaxed",
					children: item.title
				})]
			}), hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: renderTOCItems(item.children, depth + 1) })] }, item.id);
		});
	};
	if (tocItems.length <= 2) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden xl:block fixed right-0.5 top-1/2 transform -translate-y-1/2 z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-56 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-sm text-gray-900 dark:text-gray-100",
						children: "Contents"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					ref: navRef,
					className: "space-y-1 max-h-96 overflow-y-auto scrollbar-thin",
					children: renderTOCItems(tocItems)
				}),
				showScrollIndicator && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none flex items-end justify-center pb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-gray-400 animate-bounce" })
				})
			]
		})
	});
}
//#endregion
export { TripReportTableOfContents };

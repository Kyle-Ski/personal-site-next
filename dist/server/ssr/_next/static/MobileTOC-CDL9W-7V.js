import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as ChevronLeft } from "./chevron-left-DVeC54vr.js";
import { t as ChevronRight } from "./chevron-right-ifsh_CDX.js";
import { t as List } from "./list-CgkUiQet.js";
import { t as Compass } from "./compass-_eZhQ7RV.js";
import { t as Backpack } from "./backpack-UCyKRH3w.js";
import { t as X } from "./x-C5WOl0l8.js";
import { t as Map } from "./map-xDjMLiU8.js";
//#region components/MobileTOC.tsx
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
function MobileTOC({ tripReport, content, contentType = "adventure" }) {
	const [tocItems, setTocItems] = (0, import_react.useState)([]);
	const [activeId, setActiveId] = (0, import_react.useState)("");
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const [userClicked, setUserClicked] = (0, import_react.useState)(false);
	const expandedRef = (0, import_react.useRef)(null);
	const scrollRef = (0, import_react.useRef)(null);
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
			const selector = contentType === "adventure" ? ".adventure-content h2, .adventure-content h3" : ".prose h1, .prose h2, .prose h3";
			document.querySelectorAll(selector).forEach((heading, index) => {
				const level = heading.tagName.toLowerCase();
				const text = heading.textContent || `Section ${index + 1}`;
				const id = heading.id || `heading-${index}`;
				if (Object.values(SECTION_REGISTRY).some((section) => section.title === text)) return;
				if (!heading.id) heading.id = id;
				foundHeadings.push({
					id: heading.id,
					title: text,
					level,
					order: 1e3 + index
				});
			});
			setTocItems([...foundSections, ...foundHeadings].sort((a, b) => a.order - b.order));
		}, 200);
	}, [
		tripReport,
		content,
		contentType
	]);
	(0, import_react.useEffect)(() => {
		if (tocItems.length === 0) return;
		const handleScroll = () => {
			if (userClicked) return;
			const sections = tocItems.map((item) => {
				const element = document.getElementById(item.id);
				if (!element) return null;
				const rect = element.getBoundingClientRect();
				return {
					id: item.id,
					top: rect.top + window.scrollY,
					bottom: rect.bottom + window.scrollY,
					element
				};
			}).filter((section) => section !== null);
			const viewportTop = window.scrollY + 80;
			let activeSection = sections[0]?.id || "";
			for (const section of sections) if (viewportTop >= section.top - 80) activeSection = section.id;
			else break;
			if (activeSection !== activeId) setActiveId(activeSection);
		};
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", throttledScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", throttledScroll);
	}, [
		tocItems,
		activeId,
		userClicked
	]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsVisible(scrollY > window.innerHeight * .6);
			if (userClicked) {
				const scrollTimeout = setTimeout(() => {
					setUserClicked(false);
				}, 150);
				return () => clearTimeout(scrollTimeout);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [userClicked]);
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			setUserClicked(true);
			setActiveId(id);
			setIsExpanded(false);
			element.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			setTimeout(() => setUserClicked(false), 800);
		}
	};
	const getCurrentIndex = () => tocItems.findIndex((item) => item.id === activeId);
	const getPreviousItem = () => {
		const currentIndex = getCurrentIndex();
		return currentIndex > 0 ? tocItems[currentIndex - 1] : null;
	};
	const getNextItem = () => {
		const currentIndex = getCurrentIndex();
		return currentIndex < tocItems.length - 1 ? tocItems[currentIndex + 1] : null;
	};
	const getCurrentItem = () => tocItems.find((item) => item.id === activeId);
	const handleScrollableTouch = (e) => {
		const element = scrollRef.current;
		if (!element) return;
		const { scrollTop, scrollHeight, clientHeight } = element;
		const atTop = scrollTop === 0;
		const atBottom = scrollTop + clientHeight >= scrollHeight;
		const touch = e.touches[0];
		const deltaY = touch.clientY - (element.dataset.touchStartY ? parseFloat(element.dataset.touchStartY) : touch.clientY);
		if (atTop && deltaY > 0 || atBottom && deltaY < 0) e.preventDefault();
		element.dataset.touchStartY = touch.clientY.toString();
	};
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (expandedRef.current && !expandedRef.current.contains(event.target)) setIsExpanded(false);
		};
		if (isExpanded) {
			document.addEventListener("mousedown", handleClickOutside);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.body.style.overflow = "unset";
		};
	}, [isExpanded]);
	if (tocItems.length <= 1) return null;
	const currentItem = getCurrentItem();
	const previousItem = getPreviousItem();
	const nextItem = getNextItem();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isVisible && !isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between max-w-screen-xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => previousItem && scrollToSection(previousItem.id),
					disabled: !previousItem,
					className: `flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors flex-shrink-0 ${previousItem ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200" : "text-gray-300 dark:text-gray-600 cursor-not-allowed"}`,
					title: previousItem?.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline truncate max-w-[60px]",
						children: previousItem?.title && previousItem.title.length > 12 ? `${previousItem.title.substring(0, 12)}...` : previousItem?.title
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsExpanded(true),
					className: "flex-1 mx-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full text-center min-w-0",
					title: currentItem?.title,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 min-w-0",
						children: [
							currentItem?.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(currentItem.icon, { className: "h-3 w-3 text-green-600 dark:text-green-400 flex-shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-sm text-green-700 dark:text-green-300 truncate",
								children: currentItem?.title && currentItem.title.length > 25 ? `${currentItem.title.substring(0, 25)}...` : currentItem?.title || "Select Section"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
								size: 12,
								className: "text-green-600 dark:text-green-400 flex-shrink-0"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => nextItem && scrollToSection(nextItem.id),
					disabled: !nextItem,
					className: `flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors flex-shrink-0 ${nextItem ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200" : "text-gray-300 dark:text-gray-600 cursor-not-allowed"}`,
					title: nextItem?.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline truncate max-w-[60px]",
						children: nextItem?.title && nextItem.title.length > 12 ? `${nextItem.title.substring(0, 12)}...` : nextItem?.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })]
				})
			]
		})
	}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "xl:hidden fixed inset-0 z-50 bg-black/50 flex items-end",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: expandedRef,
			className: "w-full bg-white dark:bg-gray-900 rounded-t-xl shadow-2xl max-h-[80vh] flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-sm",
						children: "Table of Contents"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsExpanded(false),
					className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 overflow-y-auto p-2 relative",
				onTouchStart: handleScrollableTouch,
				style: {
					WebkitOverflowScrolling: "touch",
					overscrollBehavior: "contain"
				},
				children: [tocItems.length > 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-gray-900 to-transparent pointer-events-none z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none z-10" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: tocItems.map((item, index) => {
						const isActive = activeId === item.id;
						const IconComponent = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollToSection(item.id),
							className: `w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${isActive ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"}`,
							children: [IconComponent && item.level === "section" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-4 w-4 text-green-600 dark:text-green-400" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-shrink-0 w-8 h-8 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}` })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 min-w-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `font-medium text-sm ${item.level === "h3" ? "ml-4" : ""}`,
									title: item.title,
									children: item.title.length > 45 ? `${item.title.substring(0, 45)}...` : item.title
								})
							})]
						}, item.id);
					})
				})]
			})]
		})
	})] });
}
//#endregion
export { MobileTOC };

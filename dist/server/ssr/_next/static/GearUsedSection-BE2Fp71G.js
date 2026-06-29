import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as ChevronRight } from "./chevron-right-ifsh_CDX.js";
import { t as Backpack } from "./backpack-UCyKRH3w.js";
import { t as ChevronDown } from "./chevron-down-QG7MwUIO.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-DWelpZDx.js";
import { n as createGearSlug } from "./gearUrlUtils-ClAC9m-o.js";
//#region node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
//#endregion
//#region components/adventure/GearUsedSection.tsx
var import_jsx_runtime = require_jsx_runtime();
var GEAR_CATEGORIES = {
	shelter: {
		emoji: "⛺",
		title: "Shelter & Sleep System"
	},
	clothing: {
		emoji: "👕",
		title: "Clothing & Layers"
	},
	navigation: {
		emoji: "🧭",
		title: "Navigation & Safety"
	},
	food: {
		emoji: "🍳",
		title: "Food & Cooking"
	},
	water: {
		emoji: "💧",
		title: "Water & Hydration"
	},
	pack: {
		emoji: "🎒",
		title: "Pack & Organization"
	},
	tools: {
		emoji: "🔧",
		title: "Tools & Repair"
	},
	other: {
		emoji: "📦",
		title: "Other Gear"
	}
};
function GearUsedSection({ gearUsed, availableGearSlugs }) {
	const [expandedCategories, setExpandedCategories] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	if (!gearUsed || gearUsed.length === 0) return null;
	const processedGear = gearUsed.reduce((acc, item) => {
		const category = item.category || "other";
		if (!acc[category]) acc[category] = [];
		acc[category].push(item);
		return acc;
	}, {});
	const categoriesWithGear = Object.entries(processedGear).filter(([_, items]) => items.length > 0).sort(([a], [b]) => {
		const categoryOrder = Object.keys(GEAR_CATEGORIES);
		const aIndex = categoryOrder.indexOf(a);
		const bIndex = categoryOrder.indexOf(b);
		if (aIndex === -1) return 1;
		if (bIndex === -1) return -1;
		return aIndex - bIndex;
	});
	const toggleCategory = (categoryKey) => {
		const newExpanded = new Set(expandedCategories);
		if (newExpanded.has(categoryKey)) newExpanded.delete(categoryKey);
		else newExpanded.add(categoryKey);
		setExpandedCategories(newExpanded);
	};
	if (categoriesWithGear.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "gear-used",
		className: "adventure-card mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "h-5 w-5 text-green-600" }), "Essential Gear Used"]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4",
			children: [categoriesWithGear.map(([categoryKey, items]) => {
				const category = GEAR_CATEGORIES[categoryKey] || GEAR_CATEGORIES.other;
				const isExpanded = expandedCategories.has(categoryKey);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-gray-200 dark:border-gray-700 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleCategory(categoryKey),
						className: "w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg",
						"aria-expanded": isExpanded,
						"aria-controls": `gear-category-${categoryKey}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: category.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-left",
									children: category.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: [
										"(",
										items.length,
										" item",
										items.length !== 1 ? "s" : "",
										")"
									]
								})
							]
						}), isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground flex-shrink-0" })]
					}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: `gear-category-${categoryKey}`,
						className: "px-4 pb-4 border-t border-gray-200 dark:border-gray-700",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4",
							children: items.map((item, index) => {
								const slug = createGearSlug(item.name || "");
								const gearHref = !!slug && availableGearSlugs.has(slug) ? `/gear?item=${slug}` : null;
								const cardContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-sm text-[var(--color-text-primary)]",
										children: item.name
									}),
									item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mt-1",
										children: item.description
									}),
									gearHref && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-[var(--color-text-secondary)] absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity" })
								] });
								return gearHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: gearHref,
									className: "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[var(--color-text-accent)] transition-colors relative block group",
									children: cardContent
								}, `${categoryKey}-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700",
									children: cardContent
								}, `${categoryKey}-${index}`);
							})
						})
					})]
				}, categoryKey);
			}), categoriesWithGear.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setExpandedCategories(new Set(categoriesWithGear.map(([key]) => key))),
						className: "text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors",
						children: "Expand All"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "•"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setExpandedCategories(/* @__PURE__ */ new Set()),
						className: "text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors",
						children: "Collapse All"
					})
				]
			})]
		})]
	});
}
//#endregion
export { GearUsedSection };

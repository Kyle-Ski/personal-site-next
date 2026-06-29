import { n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { n as CardContent, t as Card } from "./card-DWelpZDx.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Badge } from "./badge-CArIAVmm.js";
import { t as Star } from "./star-Bk6eeXH7.js";
import { i as hasReview, r as getReviewUrl } from "./gearUrlUtils-ClAC9m-o.js";
import { n as ExternalLink, t as DollarSign } from "./dollar-sign-BZr_YfaB.js";
import { t as Weight } from "./weight-D7CRzIGh.js";
import { t as getGearCardImageSizes } from "./imageHelpers-C9B0NUX_.js";
var GearFeatured_module_default = {
	featuredGrid: "_featuredGrid_19r65_1",
	featuredCard: "_featuredCard_19r65_8",
	imageWrapper: "_imageWrapper_19r65_20",
	image: "_image_19r65_20",
	imagePlaceholder: "_imagePlaceholder_19r65_38",
	categoryBadge: "_categoryBadge_19r65_43",
	content: "_content_19r65_56",
	itemTitle: "_itemTitle_19r65_61",
	itemProduct: "_itemProduct_19r65_68",
	brandBadge: "_brandBadge_19r65_74",
	specs: "_specs_19r65_81",
	spec: "_spec_19r65_81",
	packLists: "_packLists_19r65_95",
	packListLabel: "_packListLabel_19r65_101",
	packListTags: "_packListTags_19r65_107",
	packListTag: "_packListTag_19r65_107",
	link: "_link_19r65_122"
};
//#endregion
//#region components/gear/GearFeatured.tsx
var import_jsx_runtime = require_jsx_runtime();
var FeaturedGearReviewBadge = ({ reviewLink }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		href: getReviewUrl(reviewLink),
		className: "!inline-flex !items-center gap-1 !h-6 mb-3 !leading-none rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-300 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 12,
				className: "fill-current"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Review" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 10 })
		]
	});
};
var GearFeatured = ({ items }) => {
	const emojiMap = {
		"Ski Gear": "🎿",
		"Winter Gear": "❄️",
		"Backpacking Gear": "🎒",
		"Summer Gear": "☀️",
		"Climbing Gear": "🏔",
		"Layers": "🧦",
		"Cooking Tools": "🔥",
		"Safety Gear": "⛑",
		"Pack": "🧳"
	};
	const getCategoryEmoji = (category) => emojiMap[category] || "⭐️";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GearFeatured_module_default.featuredGrid,
		children: items.map((item) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: GearFeatured_module_default.featuredCard,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearFeatured_module_default.imageWrapper,
					children: [item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: item.imageUrl,
						alt: `${item.brand} ${item.title}` || item.title,
						width: 200,
						height: 200,
						sizes: getGearCardImageSizes(),
						loading: "lazy",
						placeholder: "empty",
						onError: (e) => {
							console.error("Featured gear image failed to load:", item.imageUrl);
							e.currentTarget.style.display = "none";
						},
						className: GearFeatured_module_default.image,
						unoptimized: !!item.imageUrl?.startsWith("/gear-images/")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: GearFeatured_module_default.imagePlaceholder,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getCategoryEmoji(item.category) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearFeatured_module_default.categoryBadge,
						children: [
							getCategoryEmoji(item.category),
							" ",
							item.category
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: GearFeatured_module_default.content,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: GearFeatured_module_default.itemTitle,
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: GearFeatured_module_default.itemProduct,
							children: item.product
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: item.brand && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: GearFeatured_module_default.brandBadge,
								children: item.brand
							})
						}),
						hasReview(item) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedGearReviewBadge, { reviewLink: item.reviewLink }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearFeatured_module_default.specs,
							children: [item.weight_oz && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearFeatured_module_default.spec,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.weight_oz, " oz"] })]
							}), item.cost && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearFeatured_module_default.spec,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", item.cost] })]
							})]
						}),
						item.packLists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearFeatured_module_default.packLists,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: GearFeatured_module_default.packListLabel,
								children: "Used in:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearFeatured_module_default.packListTags,
								children: [item.packLists.slice(0, 2).map((list, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: GearFeatured_module_default.packListTag,
									children: list
								}, index)), item.packLists.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: GearFeatured_module_default.packListTag,
									children: ["+", item.packLists.length - 2]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2 mt-4",
							children: item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								href: item.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: GearFeatured_module_default.link,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })]
							})
						})
					]
				})]
			}, item.id);
		})
	});
};
//#endregion
export { GearFeatured as default };

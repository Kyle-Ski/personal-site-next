import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Star } from "./star-Bk6eeXH7.js";
import { t as Target } from "./target-CaLEcjDI.js";
import { n as imgStrToBase64, r as shimmer } from "./imageHelpers-C9B0NUX_.js";
import { t as Award } from "./award-DGRe30pC.js";
//#region node_modules/lucide-react/dist/esm/icons/zap.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region components/gear/GearReviewsHero.tsx
var import_jsx_runtime = require_jsx_runtime();
function GearReviewsHero({ totalReviews = 0, averageRating = 0, categoriesCovered = 0, yearsOfTesting = 5 }) {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				setOffset(window.pageYOffset);
			};
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);
	const heroStats = [
		{
			label: "Gear Reviews",
			value: totalReviews > 0 ? `${totalReviews}+` : "Growing Library",
			icon: Star
		},
		{
			label: "Average Rating",
			value: averageRating > 0 ? `${averageRating.toFixed(1)}/5` : "High Standards",
			icon: Award
		},
		{
			label: "Categories",
			value: categoriesCovered > 0 ? `${categoriesCovered}+` : "Comprehensive",
			icon: Target
		},
		{
			label: "Testing Experience",
			value: `${yearsOfTesting}+ Years`,
			icon: Zap
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-4 overflow-hidden h-[80vh] flex items-center pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				id: "gearReviewsHeroImg",
				priority: true,
				src: "/blue-tent.jpg",
				alt: "Blue tent in mountain wilderness - gear testing environment",
				fill: true,
				placeholder: "blur",
				blurDataURL: `data:image/svg+xml;base64,${imgStrToBase64(shimmer(1200, 800))}`,
				quality: 100,
				style: {
					objectFit: "cover",
					transform: `translateY(${offset * .5}px)`
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto text-center relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-bold mb-6 text-white",
						style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
						children: ["Field-Tested", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-yellow-300",
							style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
							children: "Gear Reviews"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
						children: heroStats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "group relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-lg hover:from-white/20 hover:to-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {
													size: 24,
													className: "text-yellow-300",
													style: { filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))" }
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-white mb-2",
											style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
											children: stat.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-white/80 text-sm font-medium",
											style: { textShadow: "1px 1px 1px rgba(0,0,0,0.7)" },
											children: stat.label
										})
									]
								})]
							})
						}, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 animate-bounce",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-5 h-5 text-white",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								style: { filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M19 14l-7 7m0 0l-7-7m7 7V3"
								})
							})
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { GearReviewsHero as default };

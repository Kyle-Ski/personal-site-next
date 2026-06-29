import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as Mountain } from "./mountain-Df3gmQGj.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { n as imgStrToBase64, r as shimmer } from "./imageHelpers-C9B0NUX_.js";
import { t as Award } from "./award-DGRe30pC.js";
//#region node_modules/lucide-react/dist/esm/icons/timer.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Timer = createLucideIcon("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
//#endregion
//#region components/gear/GearHero.tsx
var import_jsx_runtime = require_jsx_runtime();
var GearHero = () => {
	const [offset, setOffset] = (0, import_react.useState)(0);
	const [imageLoaded, setImageLoaded] = (0, import_react.useState)(false);
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const handleScroll = (0, import_react.useCallback)(() => {
		setOffset(window.pageYOffset);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
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
			return () => window.removeEventListener("scroll", throttledScroll);
		}
	}, [handleScroll]);
	const handleImageLoad = (0, import_react.useCallback)(() => {
		setImageLoaded(true);
	}, []);
	const handleImageError = (0, import_react.useCallback)(() => {
		setImageError(true);
	}, []);
	const achievements = [
		{
			icon: Mountain,
			label: "60+ peaks above 13,000ft"
		},
		{
			icon: Award,
			label: "AIARE Certified"
		},
		{
			icon: MapPin,
			label: "Mt. Kilimanjaro & Mt. Baker"
		},
		{
			icon: Timer,
			label: "10+ years in the mountains"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-4 overflow-hidden h-[80vh] flex items-center pt-20",
		children: [
			!imageLoaded && !imageError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-8 h-8 animate-spin mx-auto mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Loading gear collection..."
					})]
				})
			}),
			imageError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "w-12 h-12 mx-auto mb-4 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-slate-300",
						children: "Gear ready for adventure"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					id: "gearHeroImg",
					priority: true,
					src: "/Tent-Baker.jpg",
					alt: "Mountain camping with gear - gear testing environment",
					fill: true,
					sizes: `
    (max-width: 640px) 640px,
    (max-width: 1024px) 1024px, 
    1920px
  `,
					placeholder: "blur",
					blurDataURL: `data:image/svg+xml;base64,${imgStrToBase64(shimmer(1200, 800))}`,
					quality: 85,
					onLoad: handleImageLoad,
					onError: handleImageError,
					style: {
						objectFit: "cover",
						transform: `translateY(${offset * .5}px)`,
						opacity: imageLoaded ? 1 : 0,
						transition: "opacity 0.5s ease-in-out"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `container mx-auto text-center relative z-10 transition-all duration-700 ${imageLoaded ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-6xl font-bold mb-6 text-white",
							style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
							children: ["Gear That Goes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-yellow-300",
								style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
								children: "the Distance"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8",
							children: achievements.map((achievement, index) => {
								const Icon = achievement.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "group relative",
									style: {
										animationDelay: `${index * 150}ms`,
										animation: imageLoaded ? "slideInUp 0.8s ease-out forwards" : "none"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-lg hover:from-white/20 hover:to-white/10 hover:scale-105",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex justify-center mb-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:bg-white/15 transition-all duration-300",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														size: 24,
														className: "text-yellow-300 group-hover:scale-110 transition-transform duration-300"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/90 text-sm font-medium leading-tight group-hover:text-white transition-colors duration-300",
												style: { textShadow: "1px 1px 1px rgba(0,0,0,0.7)" },
												children: achievement.label
											})]
										})]
									})
								}, index);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 animate-bounce transition-opacity duration-500",
							style: {
								opacity: imageLoaded ? 1 : .5,
								animationDelay: "1s"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300",
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				jsx: true,
				children: `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
			})
		]
	});
};
//#endregion
export { GearHero as default };

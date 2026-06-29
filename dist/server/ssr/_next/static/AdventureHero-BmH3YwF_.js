import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as Map } from "./map-xDjMLiU8.js";
import { t as Mountain } from "./mountain-Df3gmQGj.js";
import { n as useReducedMotion, t as useInView } from "./use-in-view-CPwjX96S.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { t as Calendar } from "./calendar-BHC_LtWi.js";
import { n as TrendingUp, t as Skeleton } from "./skeleton-lkFhCLSK.js";
import { t as Heart } from "./heart-B8wA1CLi.js";
//#region node_modules/lucide-react/dist/esm/icons/trophy.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trophy = createLucideIcon("trophy", [
	["path", {
		d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
		key: "1n3hpd"
	}],
	["path", {
		d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
		key: "rfe1zi"
	}],
	["path", {
		d: "M18 9h1.5a1 1 0 0 0 0-5H18",
		key: "7xy6bh"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6 9H4.5a1 1 0 0 1 0-5H6",
		key: "tex48p"
	}]
]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUp = createLucideIcon("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]);
//#endregion
//#region components/ui/counter.tsx
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, from = 0, duration = 1.2, suffix = "", prefix = "", decimals = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -10% 0px"
	});
	const prefersReducedMotion = useReducedMotion();
	const [value, setValue] = (0, import_react.useState)(prefersReducedMotion ? to : from);
	(0, import_react.useEffect)(() => {
		if (!inView || prefersReducedMotion) {
			if (prefersReducedMotion) setValue(to);
			return;
		}
		const startTime = performance.now();
		let frameId;
		const step = (now) => {
			const elapsed = (now - startTime) / 1e3;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(from + (to - from) * eased);
			if (progress < 1) frameId = requestAnimationFrame(step);
		};
		frameId = requestAnimationFrame(step);
		return () => cancelAnimationFrame(frameId);
	}, [
		inView,
		from,
		to,
		duration,
		prefersReducedMotion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			value.toFixed(decimals),
			suffix
		]
	});
}
//#endregion
//#region components/adventure/AdventureHero.tsx
var getOptimizedBase = (baseSrc) => {
	if (baseSrc.includes("cdn.sanity.io")) return null;
	const pathParts = baseSrc.split(".");
	if (pathParts.length < 2) return null;
	return `/optimized/${pathParts.slice(0, -1).join(".").replace("/", "")}`;
};
var AdventureHero = ({ backgroundImage = "/mountain-trail.JPG", stats, mainText1 = "Field Reports &", mainText2 = "Mountain Intel", mobileImagePosition = "center" }) => {
	const [offset, setOffset] = (0, import_react.useState)(0);
	const [imageLoaded, setImageLoaded] = (0, import_react.useState)(false);
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const [showOptimized, setShowOptimized] = (0, import_react.useState)(true);
	const [showSpinner, setShowSpinner] = (0, import_react.useState)(false);
	const imgRef = (0, import_react.useRef)(null);
	const optimizedBase = getOptimizedBase(backgroundImage);
	(0, import_react.useEffect)(() => {
		if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setImageLoaded(true);
	}, [backgroundImage]);
	(0, import_react.useEffect)(() => {
		if (imageLoaded || imageError) {
			setShowSpinner(false);
			return;
		}
		const t = setTimeout(() => setShowSpinner(true), 200);
		return () => clearTimeout(t);
	}, [imageLoaded, imageError]);
	const getMobilePositionClass = () => {
		switch (mobileImagePosition) {
			case "left": return "object-left";
			case "right": return "object-right";
			default: return "object-center";
		}
	};
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
		if (optimizedBase && showOptimized) setShowOptimized(false);
		else setImageError(true);
	}, [optimizedBase, showOptimized]);
	const iconMap = {
		"Mountain": Mountain,
		"MapPin": MapPin,
		"Calendar": Calendar,
		"Trophy": Trophy,
		"TrendingUp": TrendingUp,
		"ArrowUp": ArrowUp,
		"Map": Map,
		"Heart": Heart
	};
	const imgStyle = {
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		transform: `translateY(${offset * .5}px)`,
		opacity: imageLoaded ? 1 : 0,
		transition: "opacity 0.5s ease-in-out"
	};
	const imgClass = `sm:object-center ${getMobilePositionClass()}`;
	const overlayOpacity = Math.min(.4 + offset / 800, .75);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-4 overflow-hidden h-[80vh] flex items-center pt-20",
		children: [
			!imageLoaded && !imageError && showSpinner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "absolute inset-0 z-20 rounded-none" }),
			imageError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "w-12 h-12 mx-auto mb-4 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-slate-300",
						children: "Adventure awaits"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [optimizedBase && showOptimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						srcSet: `${optimizedBase}-mobile.avif 640w, ${optimizedBase}-tablet.avif 1024w, ${optimizedBase}-hero.avif 2880w`,
						sizes: "100vw",
						type: "image/avif"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						srcSet: `${optimizedBase}-mobile.webp 640w, ${optimizedBase}-tablet.webp 1024w, ${optimizedBase}-hero.webp 2880w`,
						sizes: "100vw",
						type: "image/webp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						srcSet: `${optimizedBase}-mobile.jpg 640w, ${optimizedBase}-tablet.jpg 1024w, ${optimizedBase}-hero.jpg 2880w`,
						sizes: "100vw",
						type: "image/jpeg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						ref: imgRef,
						src: `${optimizedBase}-hero.jpg`,
						alt: "Mountain trail adventure scene",
						onLoad: handleImageLoad,
						onError: handleImageError,
						style: imgStyle,
						className: imgClass
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: imgRef,
					src: backgroundImage,
					alt: "Mountain trail adventure scene",
					onLoad: handleImageLoad,
					onError: handleImageError,
					style: imgStyle,
					className: imgClass
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 transition-opacity duration-300",
					style: { background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity * .5}), transparent 30%, rgba(0,0,0,${overlayOpacity}))` }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `container mx-auto text-center relative z-10 transition-all duration-700 ${imageLoaded ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl lg:text-6xl font-bold mb-6 text-white",
							style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
							children: [mainText1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-amber-400",
								style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
								children: mainText2
							})]
						}),
						stats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
							children: stats.map((stat, index) => {
								const IconComponent = iconMap[stat.iconName] || Mountain;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
															size: 24,
															className: "text-amber-400",
															style: { filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))" }
														})
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-2xl font-bold text-white mb-2",
													style: { textShadow: "1px 1px 2px rgba(0,0,0,0.8)" },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatValue, { value: stat.value })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white/80 text-sm font-medium",
													style: { textShadow: "1px 1px 1px rgba(0,0,0,0.7)" },
													children: stat.label
												})
											]
										})]
									})
								}, index);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 animate-bounce",
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
/**
* Parses a stat value like "75+", "5.0", "1,234", "100%" and animates the
* numeric portion. Falls back to plain text if no number can be parsed.
*/
function AnimatedStatValue({ value }) {
	const match = value.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
	if (!match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value });
	const [, prefix, numStr, suffix] = match;
	const cleaned = numStr.replace(/,/g, "");
	const num = parseFloat(cleaned);
	if (Number.isNaN(num)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
		to: num,
		prefix,
		suffix,
		decimals: cleaned.includes(".") ? cleaned.split(".")[1].length : 0
	});
}
//#endregion
export { AdventureHero as default };

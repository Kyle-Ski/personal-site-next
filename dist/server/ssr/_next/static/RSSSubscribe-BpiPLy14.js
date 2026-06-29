import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as ChevronDown } from "./chevron-down-QG7MwUIO.js";
import { t as cn } from "./utils-CEeuMo-q.js";
import { t as Button } from "./button-7mFNbYQ4.js";
import { n as Copy, t as Check } from "./check-BlneLODE.js";
//#region node_modules/lucide-react/dist/esm/icons/rss.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rss = createLucideIcon("rss", [
	["path", {
		d: "M4 11a9 9 0 0 1 9 9",
		key: "pv89mb"
	}],
	["path", {
		d: "M4 4a16 16 0 0 1 16 16",
		key: "k0647b"
	}],
	["circle", {
		cx: "5",
		cy: "19",
		r: "1",
		key: "bfqh0e"
	}]
]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
//#endregion
//#region components/RSSSubscribe.tsx
var import_jsx_runtime = require_jsx_runtime();
function RSSSubscribe({ className = "", size = "sm", variant = "auto", feedType, showOtherFeeds = true, baseUrl = typeof window !== "undefined" ? window.location.origin : "" }) {
	const [currentPath, setCurrentPath] = (0, import_react.useState)("");
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [copiedFeed, setCopiedFeed] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") setCurrentPath(window.location.pathname);
	}, []);
	const feeds = [
		{
			key: "all",
			name: "All Posts",
			description: "Everything - trip reports, guides, gear reviews, and blog posts",
			url: `${baseUrl}/feed/all`,
			paths: [
				"/",
				"/about",
				"/contact",
				"/feed"
			]
		},
		{
			key: "blog",
			name: "Blog Posts",
			description: "Personal thoughts and outdoor musings",
			url: `${baseUrl}/feed/blog`,
			paths: ["/blog"]
		},
		{
			key: "trip-reports",
			name: "Trip Reports",
			description: "Detailed reports from outdoor adventures",
			url: `${baseUrl}/feed/trip-reports`,
			paths: ["/reports"]
		},
		{
			key: "guides",
			name: "Guides",
			description: "Route guides, gear guides, and planning resources",
			url: `${baseUrl}/feed/guides`,
			paths: ["/guides"]
		},
		{
			key: "gear-reviews",
			name: "Gear Reviews",
			description: "In-depth reviews of outdoor gear and equipment",
			url: `${baseUrl}/feed/gear-reviews`,
			paths: ["/gear"]
		}
	];
	const getPrimaryFeed = () => {
		if (feedType) return feeds.find((feed) => feed.key === feedType) || feeds[0];
		for (const feed of feeds) if (feed.paths.some((path) => {
			if (path === "/") return currentPath === "/";
			return currentPath.startsWith(path);
		})) return feed;
		return feeds[0];
	};
	const primaryFeed = getPrimaryFeed();
	const otherFeeds = feeds.filter((feed) => feed.key !== primaryFeed.key);
	const handleCopyFeed = async (feedUrl, feedName) => {
		try {
			await navigator.clipboard.writeText(feedUrl);
			setCopiedFeed(feedUrl);
			if (typeof window !== "undefined" && window.gtag) window.gtag("event", "rss_subscribe_attempt", {
				method: "copy_url",
				feed_type: feedName.toLowerCase().replace(/\s+/g, "_"),
				page_context: currentPath
			});
			setTimeout(() => setCopiedFeed(null), 2e3);
		} catch (err) {
			console.error("Failed to copy feed URL:", err);
			prompt("Copy this RSS feed URL:", feedUrl);
		}
	};
	const handleOpenFeed = (feedUrl, feedName) => {
		if (typeof window !== "undefined" && window.gtag) window.gtag("event", "rss_subscribe_attempt", {
			method: "direct_link",
			feed_type: feedName.toLowerCase().replace(/\s+/g, "_"),
			page_context: currentPath
		});
		window.open(feedUrl, "_blank");
	};
	const sizeConfig = {
		sm: {
			iconSize: "h-4 w-4",
			text: "text-xs",
			spacing: "gap-2",
			padding: "p-2"
		},
		md: {
			iconSize: "h-4 w-4",
			text: "text-sm",
			spacing: "gap-3",
			padding: "p-3"
		},
		lg: {
			iconSize: "h-5 w-5",
			text: "text-base",
			spacing: "gap-4",
			padding: "p-4"
		}
	};
	size ? sizeConfig[size] : sizeConfig["sm"];
	if (variant === "button-only") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		size: "sm",
		className: cn("text-orange-600 border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/20", "w-fit flex-shrink-0", className),
		onClick: () => handleOpenFeed(primaryFeed.url, primaryFeed.name),
		title: `Subscribe to ${primaryFeed.name} RSS feed`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2",
			children: "Subscribe"
		})]
	});
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2 bg-orange-50/80 border border-orange-200 rounded-lg px-3 py-2", "dark:bg-orange-900/20 dark:border-orange-800/50", "w-fit max-w-xs", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, { className: "h-4 w-4 text-orange-600 flex-shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-orange-900 dark:text-orange-100 truncate",
				children: primaryFeed.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1 ml-auto flex-shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => handleOpenFeed(primaryFeed.url, primaryFeed.name),
					className: "text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-800/30 text-xs h-7 px-2",
					children: "Subscribe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: cn("h-7 w-7", copiedFeed === primaryFeed.url ? "text-green-600" : "text-orange-600", "hover:bg-orange-100 dark:hover:bg-orange-800/30"),
					onClick: () => handleCopyFeed(primaryFeed.url, primaryFeed.name),
					title: copiedFeed === primaryFeed.url ? "Copied!" : "Copy RSS URL",
					children: copiedFeed === primaryFeed.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-fit max-w-sm bg-orange-50/80 border border-orange-200 rounded-lg p-3", "dark:bg-orange-900/20 dark:border-orange-800/50", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, { className: "h-4 w-4 text-orange-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-orange-900 dark:text-orange-100",
							children: "Subscribe to RSS"
						}) })]
					}), showOtherFeeds && otherFeeds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => setIsExpanded(!isExpanded),
						className: "text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-800/30 h-6 w-6 p-0",
						children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-white dark:bg-gray-800 rounded p-2 border border-orange-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate",
							children: primaryFeed.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-gray-600 dark:text-gray-400 truncate",
							children: primaryFeed.description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1 ml-2 flex-shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "default",
							size: "sm",
							onClick: () => handleOpenFeed(primaryFeed.url, primaryFeed.name),
							className: "bg-orange-600 hover:bg-orange-700 text-white text-xs h-7 px-2",
							children: "Subscribe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: cn("h-7 w-7", copiedFeed === primaryFeed.url ? "text-green-600 border-green-300" : ""),
							onClick: () => handleCopyFeed(primaryFeed.url, primaryFeed.name),
							title: copiedFeed === primaryFeed.url ? "Copied!" : "Copy RSS URL",
							children: copiedFeed === primaryFeed.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
						})]
					})]
				}),
				showOtherFeeds && isExpanded && otherFeeds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 pt-1 border-t border-orange-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-orange-700 dark:text-orange-300 font-medium",
						children: "Other feeds:"
					}), otherFeeds.map((feed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between bg-white dark:bg-gray-800 rounded p-2 border border-gray-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium text-gray-900 dark:text-gray-100 truncate",
								children: feed.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1 ml-2 flex-shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => handleOpenFeed(feed.url, feed.name),
								className: "text-xs h-6 px-2",
								children: "Subscribe"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: cn("h-6 w-6", copiedFeed === feed.url ? "text-green-600" : "text-gray-500"),
								onClick: () => handleCopyFeed(feed.url, feed.name),
								title: copiedFeed === feed.url ? "Copied!" : "Copy RSS URL",
								children: copiedFeed === feed.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2 w-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-2 w-2" })
							})]
						})]
					}, feed.url))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-orange-600 dark:text-orange-400",
					children: "Add to your RSS reader to get updates."
				})
			]
		})
	});
}
//#endregion
export { RSSSubscribe as t };

import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { i as FaTwitter, n as FaFacebook, r as FaLinkedinIn, t as FaBluesky } from "./fa6-DWMARgVA.js";
import { t as cn } from "./utils-CEeuMo-q.js";
import { n as CardContent, t as Card } from "./card-DWelpZDx.js";
import { t as Button } from "./button-7mFNbYQ4.js";
import { t as Share2 } from "./share-2-5NFWzUgt.js";
import { n as Copy, t as Check } from "./check-BlneLODE.js";
//#region components/SocialShare.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var platforms = [
	{
		name: "Twitter",
		icon: FaTwitter,
		shareUrl: (url, title) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
		color: "text-blue-400",
		hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
	},
	{
		name: "Facebook",
		icon: FaFacebook,
		shareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
		color: "text-blue-600",
		hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
	},
	{
		name: "LinkedIn",
		icon: FaLinkedinIn,
		shareUrl: (url, title, description) => {
			return `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({
				url,
				title,
				...description && { summary: description }
			}).toString()}`;
		},
		color: "text-blue-700",
		hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
	},
	{
		name: "Bluesky",
		icon: FaBluesky,
		shareUrl: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`,
		color: "text-sky-500",
		hoverColor: "hover:bg-sky-50 dark:hover:bg-sky-900/20"
	}
];
function SocialShare({ url, title, description, className = "", size = "md", variant = "buttons", showLabels = false }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const shareTitle = title || (typeof document !== "undefined" ? document.querySelector("meta[property=\"og:title\"]")?.getAttribute("content") || document.title : "");
	const shareDescription = description || (typeof document !== "undefined" ? document.querySelector("meta[property=\"og:description\"]")?.getAttribute("content") || document.querySelector("meta[name=\"description\"]")?.getAttribute("content") : "") || void 0;
	const handleShare = (platform) => {
		const shareUrl = platform.shareUrl(url, shareTitle, shareDescription);
		if (typeof window !== "undefined" && window.gtag) window.gtag("event", "share", {
			method: platform.name.toLowerCase(),
			content_type: getContentType(),
			content_id: getContentId()
		});
		window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes");
	};
	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			if (typeof window !== "undefined" && window.gtag) window.gtag("event", "share", {
				method: "copy_link",
				content_type: getContentType(),
				content_id: getContentId()
			});
			setTimeout(() => setCopied(false), 2e3);
		} catch (err) {
			console.error("Failed to copy link:", err);
			prompt("Copy this link:", url);
		}
	};
	const getContentType = () => {
		if (typeof window !== "undefined") {
			const pathname = window.location.pathname;
			if (pathname.includes("/blog/")) return "blog_post";
			if (pathname.includes("/reports/")) return "trip_report";
			if (pathname.includes("/gear/reviews/")) return "gear_review";
			if (pathname.includes("/guides/")) return "guide";
		}
		return "page";
	};
	const getContentId = () => {
		if (typeof window !== "undefined") {
			const segments = window.location.pathname.split("/");
			return segments[segments.length - 1] || "home";
		}
		return "unknown";
	};
	const config = {
		sm: {
			buttonSize: "h-8 w-8",
			iconSize: "h-4 w-4",
			spacing: "gap-2",
			text: "text-xs"
		},
		md: {
			buttonSize: "h-9 w-9",
			iconSize: "h-4 w-4",
			spacing: "gap-3",
			text: "text-sm"
		},
		lg: {
			buttonSize: "h-10 w-10",
			iconSize: "h-5 w-5",
			spacing: "gap-4",
			text: "text-sm"
		}
	}[size];
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: cn("bg-muted/30 border-border", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Share this post" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex", config.spacing),
					children: [platforms.map((platform) => {
						const Icon = platform.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: cn(config.buttonSize, platform.color, platform.hoverColor, "transition-colors"),
							onClick: () => handleShare(platform),
							title: `Share on ${platform.name}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: config.iconSize })
						}, platform.name);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: cn(config.buttonSize, copied ? "text-green-600" : "text-muted-foreground", "hover:bg-accent transition-colors"),
						onClick: handleCopyLink,
						title: copied ? "Link copied!" : "Copy link",
						children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: config.iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: config.iconSize })
					})]
				})]
			})
		})
	});
	if (variant === "minimal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center", config.spacing, className),
		children: [platforms.map((platform) => {
			const Icon = platform.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: cn(config.buttonSize, platform.color, platform.hoverColor, "transition-colors"),
				onClick: () => handleShare(platform),
				title: `Share on ${platform.name}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: config.iconSize })
			}, platform.name);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: cn(config.buttonSize, copied ? "text-green-600" : "text-muted-foreground", "hover:bg-accent transition-colors"),
			onClick: handleCopyLink,
			title: copied ? "Link copied!" : "Copy link",
			children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: config.iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: config.iconSize })
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap items-center", config.spacing, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Share:"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-wrap", config.spacing),
			children: [platforms.map((platform) => {
				const Icon = platform.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: showLabels ? "sm" : "icon",
					className: cn(!showLabels && config.buttonSize, platform.color, platform.hoverColor, "transition-colors border-border bg-background", "min-w-0 flex-shrink-0"),
					onClick: () => handleShare(platform),
					title: `Share on ${platform.name}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: config.iconSize }), showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("ml-1", config.text),
						children: platform.name
					})]
				}, platform.name);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: showLabels ? "sm" : "icon",
				className: cn(!showLabels && config.buttonSize, copied ? "text-green-600 border-green-200" : "text-muted-foreground", "transition-colors border-border bg-background", "hover:bg-accent min-w-0 flex-shrink-0"),
				onClick: handleCopyLink,
				title: copied ? "Link copied!" : "Copy link",
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: config.iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: config.iconSize }), showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("ml-1", config.text),
					children: copied ? "Copied!" : "Copy"
				})]
			})]
		})]
	});
}
//#endregion
export { SocialShare as default };

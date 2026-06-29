import { n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as Mountain } from "./mountain-Df3gmQGj.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { t as Package } from "./package-CaFHp-27.js";
import { t as Star } from "./star-Bk6eeXH7.js";
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Book = createLucideIcon("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]);
//#endregion
//#region components/navigation/AdventureNav.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdventureNav({ currentPage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t-2 border-[var(--color-text-accent)]",
		style: { background: "linear-gradient(135deg, var(--color-green)/15 0%, var(--color-orange)/12 30%, var(--color-green-1)/20 70%, var(--color-orange-1)/15 100%)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4 py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-semibold text-center mb-6 text-[var(--color-text-primary)]",
				children: "Explore More Adventures"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 max-w-7xl mx-auto",
				children: [
					{
						href: "/reports",
						label: "Trip Reports",
						description: "Recent adventures & conditions",
						icon: Mountain,
						key: "reports"
					},
					{
						href: "/gear",
						label: "Gear Room",
						description: "Complete gear collection",
						icon: Package,
						key: "gear"
					},
					{
						href: "/gear/reviews",
						label: "Gear Reviews",
						description: "Field-tested insights",
						icon: Star,
						key: "gear-reviews"
					},
					{
						href: "/guides",
						label: "Guides",
						description: "Planning & route guides",
						icon: Book,
						key: "guides"
					},
					{
						href: "/peaks",
						label: "Peak Tracker",
						description: "Summit journeys",
						icon: MapPin,
						key: "peaks"
					}
				].map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					href: page.href,
					className: `group p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${currentPage === page.key ? "bg-[var(--color-bg-secondary)] border-[var(--color-text-accent)] shadow-lg" : "bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm border-[var(--color-bg-tertiary)] hover:border-[var(--color-text-accent)] hover:bg-[var(--color-bg-secondary)] hover:shadow-md"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(page.icon, {
							size: 20,
							className: `transition-all duration-200 ${currentPage === page.key ? "text-[var(--color-text-accent)] scale-110" : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-accent)] group-hover:scale-105"}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: `font-medium transition-colors duration-200 ${currentPage === page.key ? "text-[var(--color-text-accent)] font-semibold" : "text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)]"}`,
							children: page.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-sm transition-colors duration-200 ${currentPage === page.key ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"}`,
						children: page.description
					})]
				}, page.key))
			})]
		})
	});
}
//#endregion
export { AdventureNav as t };

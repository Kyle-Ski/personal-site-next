import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as X } from "./x-C5WOl0l8.js";
import { n as Search, t as Funnel } from "./funnel-Bo19E8LP.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Calendar } from "./calendar-BHC_LtWi.js";
import { t as format } from "./format-C6isFgJB.js";
import AdventureHero from "./AdventureHero-BmH3YwF_.js";
import { t as RSSSubscribe } from "./RSSSubscribe-BpiPLy14.js";
//#region node_modules/lucide-react/dist/esm/icons/user.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
var BlogFiltering_module_default = {
	container: "_container_1ldk7_3",
	content: "_content_1ldk7_9",
	header: "_header_1ldk7_16",
	title: "_title_1ldk7_20",
	subtitle: "_subtitle_1ldk7_27",
	controlsWrapper: "_controlsWrapper_1ldk7_32",
	controlBar: "_controlBar_1ldk7_38",
	searchWrapper: "_searchWrapper_1ldk7_52",
	searchInput: "_searchInput_1ldk7_58",
	searchIcon: "_searchIcon_1ldk7_74",
	filterToggle: "_filterToggle_1ldk7_83",
	active: "_active_1ldk7_100",
	filterBadge: "_filterBadge_1ldk7_106",
	filterPanel: "_filterPanel_1ldk7_119",
	filterGroup: "_filterGroup_1ldk7_129",
	filterGroupTitle: "_filterGroupTitle_1ldk7_135",
	filterButtons: "_filterButtons_1ldk7_140",
	filterButton: "_filterButton_1ldk7_140",
	outdoor: "_outdoor_1ldk7_172",
	tech: "_tech_1ldk7_178",
	categoryBadge: "_categoryBadge_1ldk7_185",
	clearFilters: "_clearFilters_1ldk7_208",
	resultsCount: "_resultsCount_1ldk7_225",
	postsGrid: "_postsGrid_1ldk7_231",
	postCard: "_postCard_1ldk7_249",
	postLink: "_postLink_1ldk7_260",
	postImage: "_postImage_1ldk7_277",
	postContent: "_postContent_1ldk7_287",
	postMeta: "_postMeta_1ldk7_294",
	postTitle: "_postTitle_1ldk7_304",
	postCategories: "_postCategories_1ldk7_313",
	postExcerpt: "_postExcerpt_1ldk7_321",
	noResults: "_noResults_1ldk7_332",
	noResultsText: "_noResultsText_1ldk7_337",
	noResultsAction: "_noResultsAction_1ldk7_342"
};
//#endregion
//#region components/blog/BlogPageClient.tsx
var import_jsx_runtime = require_jsx_runtime();
function BlogPageClient({ posts, techOnly = false }) {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("");
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const filteredPosts = (0, import_react.useMemo)(() => {
		let filtered = posts;
		if (selectedCategory) filtered = filtered.filter((post) => post.categories.some((cat) => cat.title === selectedCategory));
		if (searchTerm) filtered = filtered.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) || post.categories.some((cat) => cat.title.toLowerCase().includes(searchTerm.toLowerCase())));
		return filtered;
	}, [
		posts,
		searchTerm,
		selectedCategory
	]);
	const clearFilters = () => {
		setSearchTerm("");
		setSelectedCategory("");
	};
	const getAvailableCategories = () => {
		return posts.flatMap((post) => post.categories).filter((cat, index, self) => index === self.findIndex((c) => c.title === cat.title)).map((cat) => cat.title);
	};
	const activeFiltersCount = [selectedCategory].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { marginTop: "4rem" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureHero, {
			backgroundImage: "/longs.jpg",
			mainText1: techOnly ? "Tech Blog" : "Blog Posts",
			mainText2: techOnly ? "Code, tutorials, and development insights" : "Code, mountains, and everything in between"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: BlogFiltering_module_default.container,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: BlogFiltering_module_default.content,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: BlogFiltering_module_default.header,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: BlogFiltering_module_default.title,
							children: techOnly ? "Tech Blog" : "Blog Posts"
						}), techOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: BlogFiltering_module_default.subtitle,
							children: "Web development tutorials, programming insights, and tech deep-dives"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: BlogFiltering_module_default.controlsWrapper,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: BlogFiltering_module_default.controlBar,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: BlogFiltering_module_default.searchWrapper,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										size: 20,
										className: BlogFiltering_module_default.searchIcon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: techOnly ? "Search tech posts..." : "Search posts...",
										value: searchTerm,
										onChange: (e) => setSearchTerm(e.target.value),
										className: BlogFiltering_module_default.searchInput
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setShowFilters(!showFilters),
									className: `${BlogFiltering_module_default.filterToggle} ${showFilters || activeFiltersCount > 0 ? BlogFiltering_module_default.active : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { size: 18 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" }),
										activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: BlogFiltering_module_default.filterBadge,
											children: activeFiltersCount
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSSSubscribe, { variant: "compact" })
							]
						}), showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: BlogFiltering_module_default.filterPanel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: BlogFiltering_module_default.filterGroup,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: BlogFiltering_module_default.filterGroupTitle,
									children: "Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: BlogFiltering_module_default.filterButtons,
									children: getAvailableCategories().map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setSelectedCategory(selectedCategory === category ? "" : category),
										className: `${BlogFiltering_module_default.filterButton} ${selectedCategory === category ? BlogFiltering_module_default.active : ""}`,
										children: category
									}, category))
								})]
							}), activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: BlogFiltering_module_default.clearFilters,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: clearFilters,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }), "Clear all filters"]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: BlogFiltering_module_default.resultsCount,
						children: [
							filteredPosts.length,
							" ",
							filteredPosts.length === 1 ? "post" : "posts",
							selectedCategory && ` in "${selectedCategory}"`
						]
					}),
					filteredPosts && filteredPosts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: BlogFiltering_module_default.postsGrid,
						children: filteredPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: BlogFiltering_module_default.postCard,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								href: `/blog/${post.slug}`,
								className: BlogFiltering_module_default.postLink,
								children: [post.mainImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: BlogFiltering_module_default.postImageWrapper,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
										src: post.mainImage,
										alt: post.title,
										width: 400,
										height: 200,
										className: BlogFiltering_module_default.postImage
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: BlogFiltering_module_default.postContent,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: BlogFiltering_module_default.postMeta,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: BlogFiltering_module_default.postDate,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), format(new Date(post.publishedAt), "MMM dd, yyyy")]
											}), post.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: BlogFiltering_module_default.postAuthor,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 14 }), post.author.name]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: BlogFiltering_module_default.postTitle,
											children: post.title
										}),
										post.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: BlogFiltering_module_default.postExcerpt,
											children: post.excerpt
										}),
										post.categories && post.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: BlogFiltering_module_default.postCategories,
											children: post.categories.filter((cat) => !cat.isOutdoor).slice(0, 3).map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `${BlogFiltering_module_default.categoryBadge} ${BlogFiltering_module_default.tech}`,
												children: category.title
											}, category._id))
										})
									]
								})]
							})
						}, post._id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: BlogFiltering_module_default.noResults,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: BlogFiltering_module_default.noResultsText,
							children: "No posts found matching your criteria."
						}), activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: clearFilters,
							className: BlogFiltering_module_default.noResultsAction,
							children: "Clear filters to see all posts"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { BlogPageClient as default };

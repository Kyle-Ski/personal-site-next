import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as X } from "./x-C5WOl0l8.js";
import { n as Search, t as Funnel } from "./funnel-Bo19E8LP.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as format } from "./format-C6isFgJB.js";
import { t as Star } from "./star-Bk6eeXH7.js";
import { t as GearReviews_module_default } from "./GearReviews.module-BKy_ASxY.js";
import { t as RSSSubscribe } from "./RSSSubscribe-BpiPLy14.js";
//#region components/gear/GearReviewClient.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function GearReviewsClient({ reviews }) {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedActivity, setSelectedActivity] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("");
	const [minRating, setMinRating] = (0, import_react.useState)(0);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const filteredReviews = (0, import_react.useMemo)(() => {
		let filtered = reviews;
		if (selectedActivity) filtered = filtered.filter((review) => review.activities?.includes(selectedActivity));
		if (selectedCategory) filtered = filtered.filter((review) => review.gearCategories.some((cat) => cat.title === selectedCategory));
		if (minRating > 0) filtered = filtered.filter((review) => review.overallRating >= minRating);
		if (searchTerm) filtered = filtered.filter((review) => review.title.toLowerCase().includes(searchTerm.toLowerCase()) || review.gearName.toLowerCase().includes(searchTerm.toLowerCase()) || review.brand.toLowerCase().includes(searchTerm.toLowerCase()) || review.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()));
		return filtered;
	}, [
		reviews,
		searchTerm,
		selectedActivity,
		selectedCategory,
		minRating
	]);
	const clearFilters = () => {
		setSearchTerm("");
		setSelectedActivity("");
		setSelectedCategory("");
		setMinRating(0);
	};
	const getAvailableActivities = () => {
		const activities = /* @__PURE__ */ new Set();
		reviews.forEach((review) => {
			review.activities?.forEach((activity) => activities.add(activity));
		});
		return Array.from(activities).sort();
	};
	const getAvailableCategories = () => {
		const categories = /* @__PURE__ */ new Set();
		reviews.forEach((review) => {
			review.gearCategories.forEach((cat) => categories.add(cat.title));
		});
		return Array.from(categories).sort();
	};
	const renderStars = (rating) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: GearReviews_module_default.starRating,
			children: [[
				1,
				2,
				3,
				4,
				5
			].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 16,
				className: star <= rating ? GearReviews_module_default.starFilled : GearReviews_module_default.starEmpty
			}, star)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: GearReviews_module_default.ratingText,
				children: [
					"(",
					rating,
					"/5)"
				]
			})]
		});
	};
	const activeFiltersCount = [
		selectedActivity,
		selectedCategory,
		minRating > 0 ? minRating.toString() : null
	].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GearReviews_module_default.container,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: GearReviews_module_default.content,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.header,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: GearReviews_module_default.title,
						children: "Gear Reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: GearReviews_module_default.subtitle,
						children: "In-depth reviews of outdoor gear, tested in real conditions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.controlsWrapper,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.controlBar,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviews_module_default.searchWrapper,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									size: 20,
									className: GearReviews_module_default.searchIcon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search gear, brands, or reviews...",
									value: searchTerm,
									onChange: (e) => setSearchTerm(e.target.value),
									className: GearReviews_module_default.searchInput
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setShowFilters(!showFilters),
								className: `${GearReviews_module_default.filterToggle} ${showFilters || activeFiltersCount > 0 ? GearReviews_module_default.active : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { size: 18 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" }),
									activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: GearReviews_module_default.filterBadge,
										children: activeFiltersCount
									})
								]
							})]
						}),
						showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.filterPanel,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviews_module_default.filterGroup,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: GearReviews_module_default.filterGroupTitle,
										children: "Activity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: GearReviews_module_default.filterButtons,
										children: getAvailableActivities().map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSelectedActivity(selectedActivity === activity ? "" : activity),
											className: `${GearReviews_module_default.filterButton} ${selectedActivity === activity ? GearReviews_module_default.active : ""}`,
											children: activity.charAt(0).toUpperCase() + activity.slice(1).replace("-", " ")
										}, activity))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviews_module_default.filterGroup,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: GearReviews_module_default.filterGroupTitle,
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: GearReviews_module_default.filterButtons,
										children: getAvailableCategories().map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSelectedCategory(selectedCategory === category ? "" : category),
											className: `${GearReviews_module_default.filterButton} ${selectedCategory === category ? GearReviews_module_default.active : ""}`,
											children: category
										}, category))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearReviews_module_default.filterGroup,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: GearReviews_module_default.filterGroupTitle,
										children: "Minimum Rating"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: GearReviews_module_default.filterButtons,
										children: [
											0,
											3,
											4,
											5
										].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setMinRating(rating),
											className: `${GearReviews_module_default.filterButton} ${minRating === rating ? GearReviews_module_default.active : ""}`,
											children: rating === 0 ? "All Ratings" : `${rating}+ Stars`
										}, rating))
									})]
								}),
								activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: GearReviews_module_default.clearFilters,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: clearFilters,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }), "Clear all filters"]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSSSubscribe, { variant: "compact" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.resultsCount,
					children: [
						filteredReviews.length,
						" ",
						filteredReviews.length === 1 ? "review" : "reviews",
						selectedActivity && ` for ${selectedActivity.replace("-", " ")}`,
						selectedCategory && ` in ${selectedCategory}`,
						minRating > 0 && ` with ${minRating}+ star rating`
					]
				}),
				filteredReviews && filteredReviews.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: GearReviews_module_default.reviewsGrid,
					children: filteredReviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: `/gear/reviews/${review.slug}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: GearReviews_module_default.reviewCard,
							children: [review.mainImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviews_module_default.imageWrapper,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									src: review.mainImage,
									alt: review.gearName,
									fill: true,
									sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
									className: GearReviews_module_default.reviewImage
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: GearReviews_module_default.ratingOverlay,
									children: renderStars(review.overallRating)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviews_module_default.reviewContent,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.gearInfo,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: GearReviews_module_default.brand,
											children: review.brand
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: GearReviews_module_default.gearName,
											children: review.gearName
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: GearReviews_module_default.reviewTitle,
										children: review.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.tags,
										children: [review.gearCategories.slice(0, 2).map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `${GearReviews_module_default.tag} ${GearReviews_module_default.category}`,
											children: category.title
										}, category._id)), review.activities?.slice(0, 2).map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `${GearReviews_module_default.tag} ${GearReviews_module_default.activity}`,
											children: activity.replace("-", " ")
										}, activity))]
									}),
									review.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: GearReviews_module_default.excerpt,
										children: review.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.meta,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
												dateTime: review.publishedAt,
												children: format(new Date(review.publishedAt), "MMM d, yyyy")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: review.author.name }),
											review.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: GearReviews_module_default.price,
												children: ["$", review.price]
											})] })
										]
									})
								]
							})]
						})
					}, review._id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.noResults,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: GearReviews_module_default.noResultsText,
						children: "No gear reviews found matching your criteria."
					}), activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: clearFilters,
						className: GearReviews_module_default.noResultsAction,
						children: "Clear filters to see all reviews"
					})]
				})
			]
		})
	});
}
//#endregion
export { GearReviewsClient as default };

import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as Compass } from "./compass-_eZhQ7RV.js";
import { t as X } from "./x-C5WOl0l8.js";
import { t as Mountain } from "./mountain-Df3gmQGj.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-DWelpZDx.js";
import { n as Search, t as Funnel } from "./funnel-Bo19E8LP.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Badge } from "./badge-CArIAVmm.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { t as Calendar } from "./calendar-BHC_LtWi.js";
import { t as format } from "./format-C6isFgJB.js";
import AdventureHero from "./AdventureHero-BmH3YwF_.js";
import { t as AdventureNav } from "./AdventureNav-Djj_9_8G.js";
import { t as GearReviews_module_default } from "./GearReviews.module-BKy_ASxY.js";
import { t as RSSSubscribe } from "./RSSSubscribe-BpiPLy14.js";
import { t as Target } from "./target-CaLEcjDI.js";
//#region node_modules/lucide-react/dist/esm/icons/book-open.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]);
//#endregion
//#region components/adventure/GuideCard.tsx
var import_jsx_runtime = require_jsx_runtime();
var GuideCard = ({ guide }) => {
	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
			case "easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-800";
			case "moderate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-800";
			case "difficult": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-800";
			case "expert": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-red-200 dark:border-red-800";
			default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
		}
	};
	function getContentTypeInfo(contentType) {
		switch (contentType) {
			case "route-guide": return {
				icon: Mountain,
				label: "Route Guide",
				color: "green"
			};
			case "gear-guide": return {
				icon: Target,
				label: "Gear Guide",
				color: "blue"
			};
			case "planning-guide": return {
				icon: MapPin,
				label: "Planning Guide",
				color: "purple"
			};
			case "skills-guide": return {
				icon: BookOpen,
				label: "Skills Guide",
				color: "orange"
			};
			default: return {
				icon: BookOpen,
				label: "Guide",
				color: "gray"
			};
		}
	}
	const contentTypeInfo = getContentTypeInfo(guide.contentType || "");
	const ContentTypeIcon = contentTypeInfo.icon;
	const guideDate = guide.date || guide.publishedAt;
	const formattedDate = guideDate ? format(new Date(guideDate), "MMM dd, yyyy") : "Date TBD";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		href: `/guides/${guide.slug}`,
		className: "block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-text-accent)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "group h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 adventure-card",
			children: [
				guide.mainImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: guide.mainImage,
						alt: guide.title,
						width: 600,
						height: 400,
						className: "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
						priority: false
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "line-clamp-2 group-hover:text-green-600 transition-colors",
							children: guide.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: getDifficultyColor(guide.difficulty),
							children: guide.difficulty || "All Levels"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentTypeIcon, { size: 14 }), contentTypeInfo.label]
							}),
							guide.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), guide.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), formattedDate]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "pt-0",
					children: [
						(guide.elevation || guide.distance) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground",
							children: [guide.elevation && guide.elevation > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { size: 14 }),
									guide.elevation.toLocaleString(),
									"'"
								]
							}), guide.distance && guide.distance > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { size: 14 }),
									guide.distance,
									" mi"
								]
							})]
						}),
						guide.activities && guide.activities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1 mb-3",
							children: [guide.activities.slice(0, 3).map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200",
								children: activity
							}, activity)), guide.activities.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-xs",
								children: ["+", guide.activities.length - 3]
							})]
						}),
						(!guide.activities || guide.activities.length === 0) && guide.tags && guide.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1 mb-3",
							children: [guide.tags.slice(0, 3).map((tag) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200",
									children: tag
								}, tag);
							}), guide.tags.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-xs",
								children: ["+", guide.tags.length - 3]
							})]
						}),
						guide.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3",
							children: guide.excerpt
						}),
						!guide.excerpt && guide.routeNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3",
							children: guide.routeNotes
						}),
						!guide.excerpt && !guide.routeNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3 italic",
							children: "Click to read the full guide..."
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region components/guides/GuidesClient.tsx
var GUIDE_TYPES = {
	"route": "Route Guides",
	"gear": "Gear Guides",
	"planning": "Planning Guides",
	"skills": "Skills Guides",
	"conditions": "Conditions Reports"
};
function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}
function GuidesClient({ guides }) {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedGuideType, setSelectedGuideType] = (0, import_react.useState)("");
	const [selectedDifficulty, setSelectedDifficulty] = (0, import_react.useState)("");
	const [selectedActivity, setSelectedActivity] = (0, import_react.useState)("");
	const [selectedSeason, setSelectedSeason] = (0, import_react.useState)("");
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [distanceRange, setDistanceRange] = (0, import_react.useState)([0, 50]);
	const [elevationRange, setElevationRange] = (0, import_react.useState)([0, 15e3]);
	const debouncedSearchTerm = useDebounce(searchTerm, 300);
	const { maxDistance, maxElevation } = (0, import_react.useMemo)(() => {
		const distances = guides.filter((g) => g.distance).map((g) => g.distance);
		const elevations = guides.filter((g) => g.elevationGain).map((g) => g.elevationGain);
		return {
			maxDistance: distances.length > 0 ? Math.max(...distances) : 50,
			maxElevation: elevations.length > 0 ? Math.max(...elevations) : 15e3
		};
	}, [guides]);
	(0, import_react.useEffect)(() => {
		setDistanceRange([0, maxDistance]);
		setElevationRange([0, maxElevation]);
	}, [maxDistance, maxElevation]);
	const filteredGuides = (0, import_react.useMemo)(() => {
		let filtered = guides;
		if (selectedGuideType) filtered = filtered.filter((guide) => guide.guideType === selectedGuideType || guide.contentType?.includes(selectedGuideType));
		if (selectedDifficulty) filtered = filtered.filter((guide) => guide.difficulty === selectedDifficulty);
		if (selectedActivity) filtered = filtered.filter((guide) => guide.activities?.some((activity) => activity.toLowerCase().includes(selectedActivity.toLowerCase())));
		if (selectedSeason) filtered = filtered.filter((guide) => guide.seasons?.includes(selectedSeason));
		if (distanceRange[0] > 0 || distanceRange[1] < maxDistance) filtered = filtered.filter((guide) => {
			if (!guide.distance) return true;
			return guide.distance >= distanceRange[0] && guide.distance <= distanceRange[1];
		});
		if (elevationRange[0] > 0 || elevationRange[1] < maxElevation) filtered = filtered.filter((guide) => {
			if (!guide.elevationGain) return true;
			return guide.elevationGain >= elevationRange[0] && guide.elevationGain <= elevationRange[1];
		});
		if (debouncedSearchTerm) {
			const searchLower = debouncedSearchTerm.toLowerCase();
			filtered = filtered.filter((guide) => guide.title.toLowerCase().includes(searchLower) || guide.excerpt?.toLowerCase().includes(searchLower) || guide.location?.toLowerCase().includes(searchLower) || guide.activities?.some((activity) => activity.toLowerCase().includes(searchLower)) || guide.recommendedGear?.some((gear) => gear.name.toLowerCase().includes(searchLower) || gear.category.toLowerCase().includes(searchLower)));
		}
		return filtered;
	}, [
		guides,
		debouncedSearchTerm,
		selectedGuideType,
		selectedDifficulty,
		selectedActivity,
		selectedSeason,
		distanceRange,
		elevationRange,
		maxDistance,
		maxElevation
	]);
	const getAvailableGuideTypes = (0, import_react.useCallback)(() => {
		const typesInData = /* @__PURE__ */ new Set();
		guides.forEach((guide) => {
			if (guide.guideType && guide.guideType in GUIDE_TYPES) typesInData.add(guide.guideType);
			if (guide.contentType) {
				const type = guide.contentType.replace("-guide", "");
				if (type in GUIDE_TYPES) typesInData.add(type);
			}
		});
		return Array.from(typesInData).sort();
	}, [guides]);
	const getAvailableActivities = (0, import_react.useCallback)(() => {
		const activities = /* @__PURE__ */ new Set();
		guides.forEach((guide) => {
			guide.activities?.forEach((activity) => activities.add(activity));
		});
		return Array.from(activities).sort();
	}, [guides]);
	const getAvailableSeasons = (0, import_react.useCallback)(() => {
		const seasons = /* @__PURE__ */ new Set();
		guides.forEach((guide) => {
			guide.seasons?.forEach((season) => seasons.add(season));
		});
		return Array.from(seasons).sort();
	}, [guides]);
	const getAvailableDifficulties = (0, import_react.useCallback)(() => {
		const difficulties = /* @__PURE__ */ new Set();
		guides.forEach((guide) => {
			if (guide.difficulty) difficulties.add(guide.difficulty);
		});
		return Array.from(difficulties).sort((a, b) => {
			const order = [
				"easy",
				"moderate",
				"difficult",
				"expert"
			];
			return order.indexOf(a) - order.indexOf(b);
		});
	}, [guides]);
	const clearFilters = () => {
		setSearchTerm("");
		setSelectedGuideType("");
		setSelectedDifficulty("");
		setSelectedActivity("");
		setSelectedSeason("");
		setDistanceRange([0, maxDistance]);
		setElevationRange([0, maxElevation]);
	};
	const activeFiltersCount = [
		selectedGuideType,
		selectedDifficulty,
		selectedActivity,
		selectedSeason,
		distanceRange[0] > 0 || distanceRange[1] < maxDistance ? "distance" : null,
		elevationRange[0] > 0 || elevationRange[1] < maxElevation ? "elevation" : null
	].filter(Boolean).length;
	guides.reduce((acc, guide) => {
		const type = guide.guideType || guide.contentType || "guide";
		acc[type] = (acc[type] || 0) + 1;
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen mt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureHero, {
				backgroundImage: "/guide-hero.jpg",
				mainText1: "Adventure",
				mainText2: "Guides",
				mobileImagePosition: "left"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearReviews_module_default.container,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.content,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: GearReviews_module_default.header,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: GearReviews_module_default.subtitle,
								children: "Comprehensive resources for planning your next adventure"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.controlsWrapper,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviews_module_default.controlBar,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.searchWrapper,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											size: 20,
											className: GearReviews_module_default.searchIcon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Search guides...",
											value: searchTerm,
											onChange: (e) => setSearchTerm(e.target.value),
											className: GearReviews_module_default.searchInput
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSSSubscribe, { variant: "compact" })
								]
							}), showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: GearReviews_module_default.filterPanel,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: "Guide Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: GearReviews_module_default.filterButtons,
											children: getAvailableGuideTypes().map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelectedGuideType(selectedGuideType === type ? "" : type),
												className: `${GearReviews_module_default.filterButton} ${selectedGuideType === type ? GearReviews_module_default.active : ""}`,
												children: GUIDE_TYPES[type]
											}, type))
										})]
									}),
									getAvailableDifficulties().length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: "Difficulty"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: GearReviews_module_default.filterButtons,
											children: getAvailableDifficulties().map((difficulty) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelectedDifficulty(selectedDifficulty === difficulty ? "" : difficulty),
												className: `${GearReviews_module_default.filterButton} ${selectedDifficulty === difficulty ? GearReviews_module_default.active : ""}`,
												children: difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
											}, difficulty))
										})]
									}),
									getAvailableActivities().length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: "Activity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: GearReviews_module_default.filterButtons,
											children: getAvailableActivities().map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelectedActivity(selectedActivity === activity ? "" : activity),
												className: `${GearReviews_module_default.filterButton} ${selectedActivity === activity ? GearReviews_module_default.active : ""}`,
												children: activity.charAt(0).toUpperCase() + activity.slice(1)
											}, activity))
										})]
									}),
									getAvailableSeasons().length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: "Best Season"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: GearReviews_module_default.filterButtons,
											children: getAvailableSeasons().map((season) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelectedSeason(selectedSeason === season ? "" : season),
												className: `${GearReviews_module_default.filterButton} ${selectedSeason === season ? GearReviews_module_default.active : ""}`,
												children: season.charAt(0).toUpperCase() + season.slice(1)
											}, season))
										})]
									}),
									guides.some((g) => g.distance || g.elevationGain) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [guides.some((g) => g.distance) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: [
												"Distance: ",
												distanceRange[0],
												" - ",
												distanceRange[1],
												" miles"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviews_module_default.rangeSlider,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "range",
												min: 0,
												max: maxDistance,
												value: distanceRange[0],
												onChange: (e) => setDistanceRange([parseInt(e.target.value), distanceRange[1]]),
												className: GearReviews_module_default.rangeInput
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "range",
												min: 0,
												max: maxDistance,
												value: distanceRange[1],
												onChange: (e) => setDistanceRange([distanceRange[0], parseInt(e.target.value)]),
												className: GearReviews_module_default.rangeInput
											})]
										})]
									}), guides.some((g) => g.elevationGain) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearReviews_module_default.filterGroup,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: GearReviews_module_default.filterGroupTitle,
											children: [
												"Elevation Gain: ",
												elevationRange[0],
												" - ",
												elevationRange[1],
												" ft"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviews_module_default.rangeSlider,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "range",
												min: 0,
												max: maxElevation,
												step: 100,
												value: elevationRange[0],
												onChange: (e) => setElevationRange([parseInt(e.target.value), elevationRange[1]]),
												className: GearReviews_module_default.rangeInput
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "range",
												min: 0,
												max: maxElevation,
												step: 100,
												value: elevationRange[1],
												onChange: (e) => setElevationRange([elevationRange[0], parseInt(e.target.value)]),
												className: GearReviews_module_default.rangeInput
											})]
										})]
									})] }),
									activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: GearReviews_module_default.clearFilters,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: clearFilters,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }), "Clear all filters"]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.resultsCount,
							children: [
								filteredGuides.length,
								" ",
								filteredGuides.length === 1 ? "guide" : "guides",
								selectedGuideType && ` (${GUIDE_TYPES[selectedGuideType]})`,
								selectedDifficulty && ` with ${selectedDifficulty} difficulty`,
								selectedActivity && ` for ${selectedActivity}`
							]
						}),
						filteredGuides && filteredGuides.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8",
							children: filteredGuides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideCard, { guide }, guide._id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.noResults,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: GearReviews_module_default.noResultsText,
								children: "No guides found matching your criteria."
							}), activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: clearFilters,
								className: GearReviews_module_default.noResultsAction,
								children: "Clear filters to see all guides"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureNav, { currentPage: "guides" })
		]
	});
}
//#endregion
export { GuidesClient as default };

import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as X } from "./x-C5WOl0l8.js";
import { t as Mountain } from "./mountain-Df3gmQGj.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-DWelpZDx.js";
import { n as Search, t as Funnel } from "./funnel-Bo19E8LP.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Badge } from "./badge-CArIAVmm.js";
import { t as MapPin } from "./map-pin-P4U4dbUJ.js";
import { t as Calendar } from "./calendar-BHC_LtWi.js";
import { n as TrendingUp } from "./skeleton-lkFhCLSK.js";
import { t as format } from "./format-C6isFgJB.js";
import AdventureHero from "./AdventureHero-BmH3YwF_.js";
import { t as AdventureNav } from "./AdventureNav-Djj_9_8G.js";
import { t as GearReviews_module_default } from "./GearReviews.module-BKy_ASxY.js";
import { t as RSSSubscribe } from "./RSSSubscribe-BpiPLy14.js";
//#region node_modules/lucide-react/dist/esm/icons/thermometer.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Thermometer = createLucideIcon("thermometer", [["path", {
	d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
	key: "17jzev"
}]]);
//#endregion
//#region components/adventure/TripReportCard.tsx
var import_jsx_runtime = require_jsx_runtime();
var TripReportCard = ({ trip }) => {
	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
			case "easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-800";
			case "moderate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-800";
			case "difficult": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-800";
			case "expert": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-red-200 dark:border-red-800";
			default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
		}
	};
	const tripDate = trip.date || trip.publishedAt;
	const formattedDate = tripDate ? format(new Date(tripDate), "MMM dd, yyyy") : "Date TBD";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		href: `/adventures/${trip.slug}`,
		className: "block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-text-accent)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "group h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 adventure-card",
			children: [
				trip.mainImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						src: trip.mainImage,
						alt: trip.title,
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
							children: trip.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: getDifficultyColor(trip.difficulty),
							children: trip.difficulty
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), trip.location || "Location TBD"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), formattedDate]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground",
							children: [
								trip.elevation && trip.elevation > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { size: 14 }),
										trip.elevation.toLocaleString(),
										"'"
									]
								}),
								trip.distance && trip.distance > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 14 }),
										trip.distance,
										" mi"
									]
								}),
								trip.weather?.temperature && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { size: 14 }),
										trip.weather.temperature.low,
										"°-",
										trip.weather.temperature.high,
										"°F"
									]
								})
							]
						}),
						trip.activities && trip.activities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1 mb-3",
							children: [trip.activities.slice(0, 3).map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200",
								children: activity
							}, activity)), trip.activities.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-xs",
								children: ["+", trip.activities.length - 3]
							})]
						}),
						(!trip.activities || trip.activities.length === 0) && trip.tags && trip.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1 mb-3",
							children: [trip.tags.slice(0, 3).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs border-green-200 text-green-800 dark:border-green-800 dark:text-green-200",
								children: tag
							}, tag)), trip.tags.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-xs",
								children: ["+", trip.tags.length - 3]
							})]
						}),
						trip.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3",
							children: trip.excerpt
						}),
						!trip.excerpt && trip.routeNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3",
							children: trip.routeNotes
						}),
						!trip.excerpt && !trip.routeNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							className: "line-clamp-3 italic",
							children: "Click to read the full adventure report..."
						})
					]
				})
			]
		})
	});
};
//#endregion
//#region components/adventure/AdventureClient.tsx
var CONTENT_TYPES = {
	"trip-report": "Trip Reports",
	"route-guide": "Route Guides",
	"gear-guide": "Gear Guides",
	"planning-guide": "Planning Guides",
	"skills-guide": "Skills Guides",
	"conditions-report": "Conditions Reports"
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
function AdventureClient({ adventures, stats }) {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedActivity, setSelectedActivity] = (0, import_react.useState)("");
	const [selectedContentType, setSelectedContentType] = (0, import_react.useState)("");
	const [selectedDifficulty, setSelectedDifficulty] = (0, import_react.useState)("");
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [distanceRange, setDistanceRange] = (0, import_react.useState)([0, 50]);
	const [elevationRange, setElevationRange] = (0, import_react.useState)([0, 15e3]);
	const [dateRange, setDateRange] = (0, import_react.useState)({
		start: "",
		end: ""
	});
	const debouncedSearchTerm = useDebounce(searchTerm, 300);
	const { maxDistance, maxElevation, minDate, maxDate } = (0, import_react.useMemo)(() => {
		const distances = adventures.filter((a) => a.distance).map((a) => a.distance);
		const elevations = adventures.filter((a) => a.elevation).map((a) => a.elevation);
		const dates = adventures.map((a) => a.date || a.publishedAt);
		return {
			maxDistance: distances.length ? Math.max(...distances) : 50,
			maxElevation: elevations.length ? Math.max(...elevations) : 15e3,
			minDate: dates.length ? Math.min(...dates.map((d) => new Date(d).getTime())) : Date.now(),
			maxDate: dates.length ? Math.max(...dates.map((d) => new Date(d).getTime())) : Date.now()
		};
	}, [adventures]);
	(0, import_react.useEffect)(() => {
		setDistanceRange([0, maxDistance]);
		setElevationRange([0, maxElevation]);
	}, [maxDistance, maxElevation]);
	const filteredAdventures = (0, import_react.useMemo)(() => {
		let filtered = adventures;
		if (selectedContentType) filtered = filtered.filter((adventure) => (adventure.contentType || "trip-report") === selectedContentType);
		if (selectedActivity) filtered = filtered.filter((adventure) => adventure.activities?.includes(selectedActivity));
		if (selectedDifficulty) filtered = filtered.filter((adventure) => adventure.difficulty === selectedDifficulty);
		filtered = filtered.filter((adventure) => {
			if (!adventure.distance) return true;
			return adventure.distance >= distanceRange[0] && adventure.distance <= distanceRange[1];
		});
		filtered = filtered.filter((adventure) => {
			if (!adventure.elevation) return true;
			return adventure.elevation >= elevationRange[0] && adventure.elevation <= elevationRange[1];
		});
		if (dateRange.start || dateRange.end) filtered = filtered.filter((adventure) => {
			const adventureDate = new Date(adventure.date || adventure.publishedAt);
			const start = dateRange.start ? new Date(dateRange.start) : /* @__PURE__ */ new Date(0);
			const end = dateRange.end ? new Date(dateRange.end) : /* @__PURE__ */ new Date();
			return adventureDate >= start && adventureDate <= end;
		});
		if (debouncedSearchTerm) {
			const searchLower = debouncedSearchTerm.toLowerCase();
			filtered = filtered.filter((adventure) => adventure.title.toLowerCase().includes(searchLower) || adventure.location?.toLowerCase().includes(searchLower) || adventure.excerpt?.toLowerCase().includes(searchLower) || adventure.routeNotes?.toLowerCase().includes(searchLower) || adventure.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) || adventure.activities?.some((activity) => activity.toLowerCase().includes(searchLower)));
		}
		return filtered;
	}, [
		adventures,
		debouncedSearchTerm,
		selectedActivity,
		selectedContentType,
		selectedDifficulty,
		distanceRange,
		elevationRange,
		dateRange
	]);
	const getAvailableActivities = (0, import_react.useCallback)(() => {
		const activities = /* @__PURE__ */ new Set();
		adventures.forEach((adventure) => {
			adventure.activities?.forEach((activity) => activities.add(activity));
		});
		return Array.from(activities).sort();
	}, [adventures]);
	const getAvailableContentTypes = (0, import_react.useCallback)(() => {
		const typesInData = /* @__PURE__ */ new Set();
		adventures.forEach((adventure) => {
			const contentType = adventure.contentType || "trip-report";
			if (contentType in CONTENT_TYPES) typesInData.add(contentType);
		});
		return Array.from(typesInData).sort();
	}, [adventures]);
	const getAvailableDifficulties = (0, import_react.useCallback)(() => {
		const difficulties = /* @__PURE__ */ new Set();
		adventures.forEach((adventure) => {
			if (adventure.difficulty) difficulties.add(adventure.difficulty);
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
	}, [adventures]);
	const clearFilters = () => {
		setSearchTerm("");
		setSelectedActivity("");
		setSelectedContentType("");
		setSelectedDifficulty("");
		setDistanceRange([0, maxDistance]);
		setElevationRange([0, maxElevation]);
		setDateRange({
			start: "",
			end: ""
		});
	};
	const activeFiltersCount = [
		selectedActivity,
		selectedContentType,
		selectedDifficulty,
		distanceRange[0] > 0 || distanceRange[1] < maxDistance ? "distance" : null,
		elevationRange[0] > 0 || elevationRange[1] < maxElevation ? "elevation" : null,
		dateRange.start || dateRange.end ? "date" : null
	].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "adventure-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureHero, {
				title: "Adventures in the Great Outdoors",
				subtitle: "Exploring as many peaks, trails, and backcountry lines as I can",
				backgroundImage: "/mountain-trail.JPG",
				stats: [
					{
						label: "Peaks Summited",
						value: stats.totalPeaks > 0 ? `${stats.totalPeaks}+` : "Getting Started",
						iconName: "Mountain"
					},
					{
						label: "Miles Adventured",
						value: stats.totalMiles > 0 ? `${stats.totalMiles.toLocaleString()}+` : "Counting...",
						iconName: "MapPin"
					},
					{
						label: "Elevation Gained",
						value: stats.totalElevationGain > 0 ? `${Math.round(stats.totalElevationGain / 1e3).toLocaleString()}k ft` : "Climbing...",
						iconName: "ArrowUp"
					},
					{
						label: "Highest Summit",
						value: "19,341 ft",
						iconName: "TrendingUp"
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearReviews_module_default.container,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearReviews_module_default.content,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.header,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: GearReviews_module_default.title,
								children: "Adventure Experience Archive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: GearReviews_module_default.subtitle,
								children: "Trip reports, route guides, gear insights, and planning resources from Colorado's peaks and beyond"
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
											placeholder: "Search adventures, locations, or activities...",
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
												children: "Content Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: GearReviews_module_default.filterButtons,
												children: getAvailableContentTypes().map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setSelectedContentType(selectedContentType === type ? "" : type),
													className: `${GearReviews_module_default.filterButton} ${selectedContentType === type ? GearReviews_module_default.active : ""}`,
													children: CONTENT_TYPES[type]
												}, type))
											})]
										}),
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviews_module_default.filterGroup,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: GearReviews_module_default.filterGroupTitle,
												children: [
													"Distance Range (",
													distanceRange[0],
													"-",
													distanceRange[1],
													" miles)"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: GearReviews_module_default.rangeContainer,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: "0",
													max: maxDistance,
													step: "0.5",
													value: distanceRange[0],
													onChange: (e) => setDistanceRange([Number(e.target.value), distanceRange[1]]),
													className: GearReviews_module_default.rangeSlider
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: "0",
													max: maxDistance,
													step: "0.5",
													value: distanceRange[1],
													onChange: (e) => setDistanceRange([distanceRange[0], Number(e.target.value)]),
													className: GearReviews_module_default.rangeSlider
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviews_module_default.filterGroup,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: GearReviews_module_default.filterGroupTitle,
												children: [
													"Elevation Range (",
													elevationRange[0].toLocaleString(),
													"-",
													elevationRange[1].toLocaleString(),
													" ft)"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: GearReviews_module_default.rangeContainer,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: "0",
													max: maxElevation,
													step: "100",
													value: elevationRange[0],
													onChange: (e) => setElevationRange([Number(e.target.value), elevationRange[1]]),
													className: GearReviews_module_default.rangeSlider
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: "0",
													max: maxElevation,
													step: "100",
													value: elevationRange[1],
													onChange: (e) => setElevationRange([elevationRange[0], Number(e.target.value)]),
													className: GearReviews_module_default.rangeSlider
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: GearReviews_module_default.filterGroup,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: GearReviews_module_default.filterGroupTitle,
												children: "Date Range"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: GearReviews_module_default.dateRangeContainer,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: GearReviews_module_default.dateInput,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "From:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "date",
														value: dateRange.start,
														onChange: (e) => setDateRange({
															...dateRange,
															start: e.target.value
														}),
														className: GearReviews_module_default.dateField
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: GearReviews_module_default.dateInput,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "To:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "date",
														value: dateRange.end,
														onChange: (e) => setDateRange({
															...dateRange,
															end: e.target.value
														}),
														className: GearReviews_module_default.dateField
													})]
												})]
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
								filteredAdventures.length,
								" ",
								filteredAdventures.length === 1 ? "adventure" : "adventures",
								selectedActivity && ` for ${selectedActivity.replace("-", " ")}`,
								selectedDifficulty && ` with ${selectedDifficulty} difficulty`,
								selectedContentType && ` (${CONTENT_TYPES[selectedContentType]})`
							]
						}),
						filteredAdventures && filteredAdventures.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8",
							children: filteredAdventures.map((adventure) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripReportCard, { trip: adventure }, adventure._id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearReviews_module_default.noResults,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: GearReviews_module_default.noResultsText,
								children: "No adventures found matching your criteria."
							}), activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: clearFilters,
								className: GearReviews_module_default.noResultsAction,
								children: "Clear filters to see all adventures"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureNav, { currentPage: "reports" })
		]
	});
}
//#endregion
export { AdventureClient as default };

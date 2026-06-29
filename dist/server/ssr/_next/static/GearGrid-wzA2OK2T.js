import { V as require_react, Y as __toESM, m as useSearchParams, n as require_jsx_runtime, p as useRouter } from "../../index.js";
import { t as Link } from "./link-tMsNEX__.js";
import { t as createLucideIcon } from "./createLucideIcon-BsuVW4Pb.js";
import { t as X } from "./x-C5WOl0l8.js";
import { n as CardContent, t as Card } from "./card-DWelpZDx.js";
import { t as Share2 } from "./share-2-5NFWzUgt.js";
import { n as Search, t as Funnel } from "./funnel-Bo19E8LP.js";
import { t as Image } from "./image-5Gzhpk71.js";
import { t as Badge } from "./badge-CArIAVmm.js";
import { t as Package } from "./package-CaFHp-27.js";
import { t as Star } from "./star-Bk6eeXH7.js";
import { a as parseGearFilters, i as hasReview, n as createGearSlug, r as getReviewUrl, t as buildGearUrl } from "./gearUrlUtils-ClAC9m-o.js";
import { n as ExternalLink, t as DollarSign } from "./dollar-sign-BZr_YfaB.js";
import { t as Weight } from "./weight-D7CRzIGh.js";
import { t as getGearCardImageSizes } from "./imageHelpers-C9B0NUX_.js";
//#region node_modules/lucide-react/dist/esm/icons/eye.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
var GearGrid_module_default = {
	container: "_container_rxw27_1",
	controlBar: "_controlBar_rxw27_5",
	searchWrapper: "_searchWrapper_rxw27_13",
	searchIcon: "_searchIcon_rxw27_19",
	searchInput: "_searchInput_rxw27_27",
	controls: "_controls_rxw27_43",
	filterButton: "_filterButton_rxw27_49",
	retiredButton: "_retiredButton_rxw27_50",
	active: "_active_rxw27_70",
	filterCount: "_filterCount_rxw27_77",
	sortSelect: "_sortSelect_rxw27_86",
	filtersPanel: "_filtersPanel_rxw27_96",
	filterGroup: "_filterGroup_rxw27_107",
	filterSelect: "_filterSelect_rxw27_123",
	clearButton: "_clearButton_rxw27_132",
	resultsInfo: "_resultsInfo_rxw27_151",
	gearGrid: "_gearGrid_rxw27_157",
	gearCard: "_gearCard_rxw27_164",
	retired: "_retired_rxw27_50",
	imageWrapper: "_imageWrapper_rxw27_180",
	image: "_image_rxw27_180",
	imagePlaceholder: "_imagePlaceholder_rxw27_198",
	retiredBadge: "_retiredBadge_rxw27_203",
	content: "_content_rxw27_215",
	itemTitle: "_itemTitle_rxw27_220",
	itemProduct: "_itemProduct_rxw27_227",
	brandBadge: "_brandBadge_rxw27_233",
	specs: "_specs_rxw27_240",
	spec: "_spec_rxw27_240",
	packLists: "_packLists_rxw27_254",
	packListLabel: "_packListLabel_rxw27_260",
	packListTags: "_packListTags_rxw27_266",
	packListTag: "_packListTag_rxw27_266",
	link: "_link_rxw27_281",
	noResults: "_noResults_rxw27_297",
	shareButton: "_shareButton_rxw27_313",
	linkContainer: "_linkContainer_rxw27_385",
	shareLink: "_shareLink_rxw27_408",
	toast: "_toast_rxw27_429",
	slideIn: "_slideIn_rxw27_1",
	toastContent: "_toastContent_rxw27_437",
	reviewCount: "_reviewCount_rxw27_508"
};
//#endregion
//#region components/gear/GearGrid.tsx
var import_jsx_runtime = require_jsx_runtime();
var GearReviewBadge = ({ reviewLink }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		href: getReviewUrl(reviewLink),
		className: "inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size: 12,
				className: "fill-current"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Review" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 10 })
		]
	});
};
var GearGrid = ({ gear, categories, brands, packLists }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const itemRefs = (0, import_react.useRef)({});
	const gearGridRef = (0, import_react.useRef)(null);
	const hasScrolledRef = (0, import_react.useRef)(false);
	const initialFilters = parseGearFilters(searchParams);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(initialFilters.category);
	const [selectedBrand, setSelectedBrand] = (0, import_react.useState)(initialFilters.brand);
	const [selectedPackList, setSelectedPackList] = (0, import_react.useState)(initialFilters.packList);
	const [showRetired, setShowRetired] = (0, import_react.useState)(false);
	const [sortBy, setSortBy] = (0, import_react.useState)("name");
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [toastMessage, setToastMessage] = (0, import_react.useState)("");
	const [showReviewedOnly, setShowReviewedOnly] = (0, import_react.useState)(false);
	const updateUrl = (newFilters) => {
		const url = buildGearUrl({
			category: newFilters.category || selectedCategory,
			brand: newFilters.brand || selectedBrand,
			packList: newFilters.packList || selectedPackList
		});
		router.push(url, { scroll: false });
	};
	const scrollToGearGrid = () => {
		if (gearGridRef.current) {
			const offsetPosition = gearGridRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};
	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		updateUrl({ category });
		if (category) {
			hasScrolledRef.current = true;
			scrollToGearGrid();
		}
	};
	const handleBrandChange = (brand) => {
		setSelectedBrand(brand);
		updateUrl({ brand });
		if (brand) {
			hasScrolledRef.current = true;
			scrollToGearGrid();
		}
	};
	const handlePackListChange = (packList) => {
		setSelectedPackList(packList);
		updateUrl({ packList });
		if (packList) {
			hasScrolledRef.current = true;
			scrollToGearGrid();
		}
	};
	const handleSearchChange = (search) => {
		setSearchTerm(search);
	};
	(0, import_react.useEffect)(() => {
		const itemSlug = searchParams.get("item");
		const hasFilters = selectedCategory || selectedBrand || selectedPackList;
		if (itemSlug) {
			hasScrolledRef.current = false;
			setTimeout(() => {
				const element = itemRefs.current[itemSlug];
				if (element) {
					element.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
					element.style.boxShadow = "0 0 0 3px rgba(34, 197, 94, 0.3)";
					setTimeout(() => {
						element.style.boxShadow = "";
					}, 2e3);
				}
			}, 100);
		} else if (hasFilters && !hasScrolledRef.current) setTimeout(() => {
			scrollToGearGrid();
			hasScrolledRef.current = true;
		}, 100);
		else if (!hasFilters) hasScrolledRef.current = false;
	}, [
		searchParams,
		gear,
		selectedCategory,
		selectedBrand,
		selectedPackList
	]);
	const getItemShareLink = (item) => {
		const itemSlug = createGearSlug(item.title);
		return buildGearUrl({
			category: selectedCategory,
			brand: selectedBrand,
			packList: selectedPackList
		}, itemSlug);
	};
	const copyItemLink = async (item) => {
		const url = `${window.location.origin}${getItemShareLink(item)}`;
		try {
			await navigator.clipboard.writeText(url);
			setToastMessage(`Link copied for ${item.title}`);
			setTimeout(() => setToastMessage(""), 3e3);
		} catch (err) {
			console.error("Failed to copy link:", err);
			setToastMessage("Failed to copy link");
			setTimeout(() => setToastMessage(""), 3e3);
		}
	};
	const filteredGear = (0, import_react.useMemo)(() => {
		let filtered = [...gear];
		if (!showRetired) filtered = filtered.filter((item) => !item.isRetired);
		if (showReviewedOnly) {
			filtered.length;
			filtered = filtered.filter((item) => {
				return hasReview(item);
			});
		}
		if (searchTerm) filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.product.toLowerCase().includes(searchTerm.toLowerCase()) || item.brand.toLowerCase().includes(searchTerm.toLowerCase()));
		if (selectedCategory) filtered = filtered.filter((item) => item.category === selectedCategory);
		if (selectedBrand) filtered = filtered.filter((item) => item.brand === selectedBrand);
		if (selectedPackList) filtered = filtered.filter((item) => item.packLists.includes(selectedPackList));
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "weight": return (b.weight_oz || 0) - (a.weight_oz || 0);
				case "cost": return (b.cost || 0) - (a.cost || 0);
				case "date": return new Date(b.acquiredOn || 0).getTime() - new Date(a.acquiredOn || 0).getTime();
				default: return a.title.localeCompare(b.title);
			}
		});
		return filtered;
	}, [
		gear,
		showReviewedOnly,
		searchTerm,
		selectedCategory,
		selectedBrand,
		selectedPackList,
		showRetired,
		sortBy
	]);
	const clearFilters = () => {
		setSearchTerm("");
		setSelectedCategory("");
		setSelectedBrand("");
		setSelectedPackList("");
		hasScrolledRef.current = false;
		setShowReviewedOnly(false);
		setShowRetired(false);
		router.push("/gear", { scroll: false });
	};
	const activeFiltersCount = [
		selectedCategory,
		selectedBrand,
		selectedPackList,
		showReviewedOnly ? "reviewed" : null
	].filter(Boolean).length;
	const getImageSrc = (item) => {
		return item.imageUrl;
	};
	(0, import_react.useMemo)(() => {
		return {
			totalItems: gear.filter((item) => showRetired || !item.isRetired).length,
			reviewedItems: gear.filter((item) => (showRetired || !item.isRetired) && hasReview(item)).length
		};
	}, [gear, showRetired]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: GearGrid_module_default.container,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: GearGrid_module_default.controlBar,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearGrid_module_default.searchWrapper,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 20,
						className: GearGrid_module_default.searchIcon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search gear...",
						value: searchTerm,
						onChange: (e) => handleSearchChange(e.target.value),
						className: GearGrid_module_default.searchInput
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearGrid_module_default.controls,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowFilters(!showFilters),
							className: `${GearGrid_module_default.filterButton} ${showFilters ? GearGrid_module_default.active : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { size: 18 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" }),
								activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: GearGrid_module_default.filterCount,
									children: activeFiltersCount
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowRetired(!showRetired),
							className: `${GearGrid_module_default.retiredButton} ${showRetired ? GearGrid_module_default.active : ""}`,
							children: [showRetired ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [showRetired ? "Hide" : "Show", " Retired"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowReviewedOnly(!showReviewedOnly),
							className: `${GearGrid_module_default.retiredButton} ${showReviewedOnly ? GearGrid_module_default.active : ""}`,
							title: `Show ${showReviewedOnly ? "all items" : "only reviewed items"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showReviewedOnly ? "Show All" : "Show Reviews" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sortBy,
							onChange: (e) => setSortBy(e.target.value),
							className: GearGrid_module_default.sortSelect,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "name",
									children: "Sort: Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "weight",
									children: "Sort: Weight"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "cost",
									children: "Sort: Cost"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "date",
									children: "Sort: Newest"
								})
							]
						})
					]
				})]
			}),
			showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: GearGrid_module_default.filtersPanel,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearGrid_module_default.filterGroup,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedCategory,
							onChange: (e) => handleCategoryChange(e.target.value),
							className: GearGrid_module_default.filterSelect,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All Categories"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: cat,
								children: cat
							}, cat))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearGrid_module_default.filterGroup,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "Brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedBrand,
							onChange: (e) => handleBrandChange(e.target.value),
							className: GearGrid_module_default.filterSelect,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All Brands"
							}), brands.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: brand,
								children: brand
							}, brand))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: GearGrid_module_default.filterGroup,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { children: "Pack List" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedPackList,
							onChange: (e) => handlePackListChange(e.target.value),
							className: GearGrid_module_default.filterSelect,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All Pack Lists"
							}), packLists.map((list) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: list,
								children: list
							}, list))]
						})]
					}),
					activeFiltersCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: clearFilters,
						className: GearGrid_module_default.clearButton,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }), "Clear Filters"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearGrid_module_default.resultsInfo,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Showing ",
					filteredGear.length,
					" items",
					showReviewedOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-green-600 dark:text-green-400 ml-2",
						children: "(reviewed only)"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: gearGridRef,
				className: GearGrid_module_default.gearGrid,
				children: filteredGear.map((item) => {
					const itemSlug = createGearSlug(item.title);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						ref: (el) => {
							itemRefs.current[itemSlug] = el;
						},
						className: `${GearGrid_module_default.gearCard} ${item.isRetired ? GearGrid_module_default.retired : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: GearGrid_module_default.imageWrapper,
							children: [getImageSrc(item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: getImageSrc(item),
								alt: `${item.brand} ${item.title}` || item.title,
								width: 200,
								height: 200,
								sizes: getGearCardImageSizes(),
								loading: "lazy",
								placeholder: "empty",
								onError: (e) => {
									console.error("Gear image failed to load:", item.imageUrl);
									e.currentTarget.style.display = "none";
								},
								className: GearGrid_module_default.image,
								unoptimized: !!item.imageUrl?.startsWith("/gear-images/")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: GearGrid_module_default.imagePlaceholder,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 40 })
							}), item.isRetired && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: GearGrid_module_default.retiredBadge,
								children: "Retired"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: GearGrid_module_default.content,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: GearGrid_module_default.itemTitle,
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: GearGrid_module_default.itemProduct,
									children: item.product
								}),
								item.brand && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: GearGrid_module_default.brandBadge,
									children: item.brand
								}),
								hasReview(item) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearReviewBadge, { reviewLink: item.reviewLink })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearGrid_module_default.specs,
									children: [item.weight_oz && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearGrid_module_default.spec,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.weight_oz, " oz"] })]
									}), item.cost && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearGrid_module_default.spec,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", item.cost] })]
									})]
								}),
								item.packLists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearGrid_module_default.packLists,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: GearGrid_module_default.packListLabel,
										children: "Used in:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: GearGrid_module_default.packListTags,
										children: [item.packLists.slice(0, 2).map((list, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: GearGrid_module_default.packListTag,
											children: list
										}, index)), item.packLists.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: GearGrid_module_default.packListTag,
											children: ["+", item.packLists.length - 2]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: GearGrid_module_default.linkContainer,
									children: [item.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										href: item.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: GearGrid_module_default.link,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => copyItemLink(item),
										className: GearGrid_module_default.shareLink,
										title: "Copy link to this item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Share" })]
									})]
								})
							]
						})]
					}, item.id);
				})
			}),
			filteredGear.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: GearGrid_module_default.noResults,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 48 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No gear found matching your filters" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: clearFilters,
						className: GearGrid_module_default.clearButton,
						children: "Clear Filters"
					})
				]
			}),
			toastMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: GearGrid_module_default.toast,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: GearGrid_module_default.toastContent,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: toastMessage })]
				})
			})
		]
	});
};
//#endregion
export { GearGrid as default };

//#region lib/gearUrlUtils.ts
/**
* Generate a URL-friendly slug from gear title
* In the components, we can now generate links like:
* const linkToSpecificGear = buildGearUrl(
* { category: 'ski-gear' }, 
* 'findr-102-skis'
* );  "/gear?category=ski-gear&item=findr-102-skis"
*
* Or just filters:
* const linkToCategory = buildGearUrl({ category: 'backpacking' }); 
* "/gear?category=backpacking"
*/
var createGearSlug = (title) => {
	return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
};
/**
* Build gear URL with filters and optional item
*/
var buildGearUrl = (filters, itemSlug) => {
	const params = new URLSearchParams();
	if (filters.category) params.set("category", filters.category);
	if (filters.brand) params.set("brand", filters.brand);
	if (filters.packList) params.set("packList", filters.packList);
	if (filters.search) params.set("search", filters.search);
	if (itemSlug) params.set("item", itemSlug);
	const queryString = params.toString();
	return queryString ? `/gear?${queryString}` : "/gear";
};
/**
* Parse URL search params to filter state
*/
var parseGearFilters = (searchParams) => {
	return {
		category: searchParams.get("category") || "",
		brand: searchParams.get("brand") || "",
		packList: searchParams.get("packList") || "",
		search: searchParams.get("search") || "",
		item: searchParams.get("item") || ""
	};
};
/**
* Get the full review URL path from the stored review link
*/
function getReviewUrl(reviewLink) {
	if (reviewLink.startsWith("/")) return `/gear/reviews${reviewLink}`;
	return `/gear/reviews/${reviewLink}`;
}
/**
* Check if a gear item has a review
*/
function hasReview(gearItem) {
	return !!(gearItem.reviewLink && gearItem.reviewLink.trim());
}
//#endregion
export { parseGearFilters as a, hasReview as i, createGearSlug as n, getReviewUrl as r, buildGearUrl as t };

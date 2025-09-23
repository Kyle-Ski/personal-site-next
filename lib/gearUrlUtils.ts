import { GearItem } from "./cmsProvider";

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
export const createGearSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();
};

/**
 * Find gear item by slug
 */
export const findGearBySlug = (gear: any[], slug: string) => {
    return gear.find(item => createGearSlug(item.title) === slug);
};

/**
 * Build gear URL with filters and optional item
 */
export const buildGearUrl = (filters: {
    category?: string;
    brand?: string;
    packList?: string;
    search?: string;
}, itemSlug?: string): string => {
    const params = new URLSearchParams();

    // Add filters
    if (filters.category) params.set('category', filters.category);
    if (filters.brand) params.set('brand', filters.brand);
    if (filters.packList) params.set('packList', filters.packList);
    if (filters.search) params.set('search', filters.search);

    // Add item
    if (itemSlug) params.set('item', itemSlug);

    const queryString = params.toString();
    return queryString ? `/gear?${queryString}` : '/gear';
};

/**
 * Parse URL search params to filter state
 */
export const parseGearFilters = (searchParams: URLSearchParams) => {
    return {
        category: searchParams.get('category') || '',
        brand: searchParams.get('brand') || '',
        packList: searchParams.get('packList') || '',
        search: searchParams.get('search') || '',
        item: searchParams.get('item') || '',
    };
};

/**
 * Safely encode filter values for URLs while preserving readability
 */
export const encodeFilterValue = (value: string): string => {
    return encodeURIComponent(value);
};

/**
 * Safely decode filter values from URLs
 */
export const decodeFilterValue = (value: string): string => {
    try {
        return decodeURIComponent(value);
    } catch {
        return value; // Return original if decoding fails
    }
};

/**
 * Get the full review URL path from the stored review link
 */
export function getReviewUrl(reviewLink: string): string {
  // Handle both "/slug" and "slug" formats
  if (reviewLink.startsWith('/')) {
    return `/gear/reviews${reviewLink}`
  }
  return `/gear/reviews/${reviewLink}`
}

/**
 * Check if a gear item has a review
 */
export function hasReview(gearItem: GearItem): boolean {
  return !!(gearItem.reviewLink && gearItem.reviewLink.trim())
}

/**
 * Get gear items that have reviews
 */
export function getGearWithReviews(gearItems: GearItem[]): GearItem[] {
  return gearItems.filter(hasReview)
}

/**
 * Get gear statistics including review count
 */
export function getGearStats(gearItems: GearItem[]) {
  const totalItems = gearItems.length
  const itemsWithReviews = getGearWithReviews(gearItems).length
  const retiredItems = gearItems.filter(item => item.isRetired).length
  const activeItems = totalItems - retiredItems
  
  return {
    totalItems,
    activeItems,
    retiredItems,
    itemsWithReviews,
    reviewPercentage: totalItems > 0 ? Math.round((itemsWithReviews / totalItems) * 100) : 0
  }
}
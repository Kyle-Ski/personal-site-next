/**
 * Generate a URL-friendly slug from gear title
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
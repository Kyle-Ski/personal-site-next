export interface HeroImageConfig {
  src: string;
  alt: string;
  title: string; // For OpenGraph title prefix
}

export const HERO_IMAGES: Record<string, HeroImageConfig> = {
  home: {
    src: '/CrestonesAtSunrise.jpeg',
    alt: 'Crestone Peaks at sunrise in Colorado',
    title: 'Developer & Adventurer'
  },
  adventures: {
    src: '/mountain-trail.JPG', 
    alt: 'Mountain trail adventure scene',
    title: 'Adventure Reports & Trail Intel'
  },
  gear: {
    src: '/Tent-Baker.jpg',
    alt: 'Mountain camping with gear - gear testing environment', 
    title: 'Field-Tested Mountain Gear'
  },
  gearReviews: {
    src: '/blue-tent.jpg',
    alt: 'Blue tent in mountain wilderness - gear testing environment',
    title: 'Field-Tested Gear Reviews'
  },
  blog: {
    src: '/CrestonesAtSunrise.jpeg', // Fallback to home hero
    alt: 'Crestone Peaks at sunrise in Colorado',
    title: 'Tech Blog & Adventure Stories'
  }
} as const;

export function getHeroImage(page: keyof typeof HERO_IMAGES): HeroImageConfig {
  return HERO_IMAGES[page];
}

// Helper function to create consistent OpenGraph metadata
export function createOpenGraphMeta(
  page: keyof typeof HERO_IMAGES,
  description: string,
  url: string,
  type: 'website' | 'article' = 'website'
) {
  const hero = getHeroImage(page);
  
  return {
    title: `${hero.title} | Kyle Czajkowski`,
    description,
    images: [hero.src],
    url,
    type,
    siteName: 'Kyle Czajkowski',
    locale: 'en_US',
  };
}

// Helper function to create consistent Twitter Card metadata  
export function createTwitterMeta(
  page: keyof typeof HERO_IMAGES,
  description: string,
  customTitle?: string
) {
  const hero = getHeroImage(page);
  
  return {
    card: 'summary_large_image' as const,
    creator: '@SkiRoyJenkins',
    title: customTitle || `${hero.title} | Kyle Czajkowski`,
    description,
    images: [hero.src],
  };
}

// Usage examples:
/*
// In your page metadata:
export const metadata = {
  title: 'Adventures | Kyle Czajkowski',
  description: 'Trail running, backpacking, skiing...',
  openGraph: createOpenGraphMeta(
    'adventures',
    'Trail running, backpacking, skiing...',
    'https://kyle.czajkowski.tech/adventures'
  ),
  twitter: createTwitterMeta(
    'adventures', 
    'Trail running, backpacking, skiing...'
  ),
  // ... other metadata
};
*/
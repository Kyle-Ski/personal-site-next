import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_KEY,
})

export const GEAR_DATABASE_ID = '4b1821fe-47eb-4140-9545-3376110383d5'

export interface GearItem1 {
  id: string
  title: string
  product: string
  brand: string
  category: string
  categoryColor?: string
  packLists: string[]
  weight_oz?: number
  weight_lb?: number
  weight_g?: number
  cost?: number
  description?: string
  acquiredOn?: string
  retiredOn?: string
  url?: string
  imageUrl?: string
  color?: string
  moreInfo?: string
  isRetired: boolean
  reviewLink: string | null
}

export const getAllGear = async (): Promise<GearItem1[]> => {
  try {
    const response = await notion.databases.query({
      database_id: GEAR_DATABASE_ID,
      page_size: 100,
    })

    const gear: GearItem1[] = response.results.map((page: any) => {
      const props = page.properties
      
      return {
        id: page.id,
        title: props.title?.title?.[0]?.plain_text || '',
        product: props.product?.rich_text?.[0]?.plain_text || '',
        brand: props.brand?.select?.name || '',
        category: props.category?.select?.name || 'Uncategorized',
        categoryColor: props.category?.select?.color || 'default',
        packLists: props.pack_list?.multi_select?.map((item: any) => item.name) || [],
        weight_oz: props.weight_oz?.number || null,
        weight_lb: props.weight_lb?.formula?.number || null,
        weight_g: props.weight_g?.number || null,
        cost: props.cost?.number || null,
        acquiredOn: props.acquired_on?.date?.start || null,
        retiredOn: props.retired_on?.date?.start || null,
        url: props.url?.url || null,
        imageUrl: props.img?.files?.[0]?.file?.url || props.img?.files?.[0]?.external?.url || null,
        color: props.color?.rich_text?.[0]?.plain_text || null,
        moreInfo: props.more_info?.rich_text?.[0]?.plain_text || null,
        isRetired: !!props.retired_on?.date?.start,
        reviewLink: props['review-link']?.rich_text?.[0]?.plain_text || null,
      }
    })

    // Continue fetching if there are more pages
    let hasMore = response.has_more
    let nextCursor = response.next_cursor

    while (hasMore && nextCursor) {
      const nextResponse = await notion.databases.query({
        database_id: GEAR_DATABASE_ID,
        page_size: 100,
        start_cursor: nextCursor,
      })

      const nextGear: GearItem1[] = nextResponse.results.map((page: any) => {
        const props = page.properties
        
        return {
          id: page.id,
          title: props.title?.title?.[0]?.plain_text || '',
          product: props.product?.rich_text?.[0]?.plain_text || '',
          brand: props.brand?.select?.name || '',
          category: props.category?.select?.name || 'Uncategorized',
          categoryColor: props.category?.select?.color || 'default',
          packLists: props.pack_list?.multi_select?.map((item: any) => item.name) || [],
          weight_oz: props.weight_oz?.number || null,
          weight_lb: props.weight_lb?.formula?.number || null,
          weight_g: props.weight_g?.number || null,
          cost: props.cost?.number || null,
          acquiredOn: props.acquired_on?.date?.start || null,
          retiredOn: props.retired_on?.date?.start || null,
          url: props.url?.url || null,
          imageUrl: props.img?.files?.[0]?.file?.url || props.img?.files?.[0]?.external?.url || null,
          color: props.color?.rich_text?.[0]?.plain_text || null,
          moreInfo: props.more_info?.rich_text?.[0]?.plain_text || null,
          isRetired: !!props.retired_on?.date?.start,
          reviewLink: props['review-link']?.rich_text?.[0]?.plain_text || null,
        }
      })

      gear.push(...nextGear)
      hasMore = nextResponse.has_more
      nextCursor = nextResponse.next_cursor
    }

    return gear
  } catch (error) {
    console.error('Error fetching gear from Notion:', error)
    return []
  }
}

// Get featured gear based on pack list frequency and importance
export const getFeaturedGear = (gear: GearItem1[]): GearItem1[] => {
  // Priority items that appear in multiple pack lists
  const priorityIds = [
    'FINDr 102 Skis', 
    'Trail Runners',
    'Backcountry Ski Boots',
    '2-Person Tent',
    'Insulated Sleeping Pad',
    'Trekking Poles'
  ]
  
  const featured = gear.filter(item => 
    !item.isRetired && (
      priorityIds.some(priority => {
        return item.title.toLowerCase().includes(priority.toLowerCase());
      })
    )
  ).slice(0, 6) // Limit to 6 featured items
  return featured
}

// Get unique categories from gear
export const getCategories = (gear: GearItem1[]): string[] => {
  const categories = new Set(gear.map(item => item.category))
  return Array.from(categories).filter(cat => cat !== 'Uncategorized').sort()
}

// Get unique brands from gear
export const getBrands = (gear: GearItem1[]): string[] => {
  const brands = new Set(gear.map(item => item.brand).filter(Boolean))
  return Array.from(brands).sort()
}

// Get unique pack lists from gear
export const getPackLists = (gear: GearItem1[]): string[] => {
  const packLists = new Set(gear.flatMap(item => item.packLists))
  return Array.from(packLists).sort()
}

// Calculate total weight for a set of gear
export const calculateTotalWeight = (gear: GearItem1[]): { oz: number, lb: number, g: number } => {
  const totalOz = gear.reduce((sum, item) => sum + (item.weight_oz || 0), 0)
  const totalG = gear.reduce((sum, item) => sum + (item.weight_g || 0), 0)
  
  return {
    oz: totalOz,
    lb: totalOz / 16,
    g: totalG
  }
}
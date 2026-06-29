import gearData from '@/data/notion-gear.json'
import { createGearSlug } from './gearUrlUtils'

let _slugCache: Set<string> | null = null

export function getAvailableGearSlugs(): Set<string> {
    if (!_slugCache) {
        _slugCache = new Set(
            gearData.gear.map((g: { title: string }) => createGearSlug(g.title))
        )
    }
    return _slugCache
}

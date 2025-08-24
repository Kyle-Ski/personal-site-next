import Link from 'next/link'
import { Mountain, Package, Star, MapPin } from 'lucide-react'

interface AdventureNavProps {
  currentPage: 'adventures' | 'gear' | 'gear-reviews' | 'peaks'
}

export function AdventureNav({ currentPage }: AdventureNavProps) {
  const adventurePages = [
    {
      href: '/adventures',
      label: 'Trip Reports',
      description: 'Recent adventures & conditions',
      icon: Mountain,
      key: 'adventures'
    },
    {
      href: '/gear',
      label: 'Gear Room',
      description: 'Complete gear collection',
      icon: Package,
      key: 'gear'
    },
    {
      href: '/gear/reviews',
      label: 'Gear Reviews',
      description: 'Field-tested insights',
      icon: Star,
      key: 'gear-reviews'
    },
    {
      href: '/peaks',
      label: 'Peak Tracker',
      description: 'Summit journeys',
      icon: MapPin,
      key: 'peaks'
    }
  ]

  return (
    <div className="bg-green-50 dark:bg-green-900/10 border-t border-green-200 dark:border-green-800">
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-lg font-semibold text-center mb-6 text-green-800 dark:text-green-200">
          Explore More Adventures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {adventurePages.map((page) => (
            <Link
              key={page.key}
              href={page.href}
              className={`group p-4 rounded-lg border transition-all duration-200 ${
                currentPage === page.key
                  ? 'border-green-500 bg-green-100 dark:bg-green-900/30'
                  : 'border-green-200 dark:border-green-700 hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <page.icon 
                  size={20} 
                  className={`${
                    currentPage === page.key 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-green-500 group-hover:text-green-600'
                  }`} 
                />
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  {page.label}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
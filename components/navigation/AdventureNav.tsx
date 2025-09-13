import Link from 'next/link'
import { Mountain, Package, Star, MapPin, BookIcon } from 'lucide-react'

interface AdventureNavProps {
  currentPage: 'reports' | 'gear' | 'gear-reviews' | 'peaks' | 'guides'
}

export function AdventureNav({ currentPage }: AdventureNavProps) {
  const adventurePages = [
    {
      href: '/reports',
      label: 'Trip Reports',
      description: 'Recent adventures & conditions',
      icon: Mountain,
      key: 'reports'
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
      href: '/guides',
      label: 'Guides',
      description: 'Planning & route guides',
      icon: BookIcon,
      key: 'guides'
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
    <div className="border-t-2 border-[var(--color-text-accent)]" style={{
      background: 'linear-gradient(135deg, var(--color-green)/15 0%, var(--color-orange)/12 30%, var(--color-green-1)/20 70%, var(--color-orange-1)/15 100%)'
    }}>
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-lg font-semibold text-center mb-6 text-[var(--color-text-primary)]">
          Explore More Adventures
        </h3>

        {/* Improved responsive grid for 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {adventurePages.map((page) => (
            <Link
              key={page.key}
              href={page.href}
              className={`group p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${currentPage === page.key
                ? 'bg-[var(--color-bg-secondary)] border-[var(--color-text-accent)] shadow-lg'
                : 'bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm border-[var(--color-bg-tertiary)] hover:border-[var(--color-text-accent)] hover:bg-[var(--color-bg-secondary)] hover:shadow-md'
                }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <page.icon
                  size={20}
                  className={`transition-all duration-200 ${currentPage === page.key
                    ? 'text-[var(--color-text-accent)] scale-110'
                    : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-accent)] group-hover:scale-105'
                    }`}
                />
                <h4 className={`font-medium transition-colors duration-200 ${currentPage === page.key
                  ? 'text-[var(--color-text-accent)] font-semibold'
                  : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)]'
                  }`}>
                  {page.label}
                </h4>
              </div>
              <p className={`text-sm transition-colors duration-200 ${currentPage === page.key
                ? 'text-[var(--color-text-primary)]'
                : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'
                }`}>
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
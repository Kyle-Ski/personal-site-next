import { Mountain, Compass, MapPin, Calendar } from 'lucide-react'

interface AdventureHeroProps {
    title: string
    subtitle: string
    backgroundImage?: string
    stats?: {
        label: string
        value: string
        icon: React.ComponentType<{ size?: number; className?: string }> | any
    }[]
}

const AdventureHero = ({ title, subtitle, backgroundImage, stats }: AdventureHeroProps) => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-full">
                            <Mountain className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                    </div>

                    <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${backgroundImage ? 'text-white' : 'text-foreground'
                        }`}>
                        {title}
                    </h1>

                    <p className={`text-xl lg:text-2xl mb-8 ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'
                        }`}>
                        {subtitle}
                    </p>

                    {/* Stats */}
                    {stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <div key={index} className={`text-center ${backgroundImage ? 'text-white' : 'text-foreground'
                                        }`}>
                                        <div className="flex justify-center mb-2">
                                            <Icon size={24} className={
                                                backgroundImage ? 'text-white/80' : 'text-green-600'
                                            } />
                                        </div>
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className={`text-sm ${backgroundImage ? 'text-white/70' : 'text-muted-foreground'
                                            }`}>
                                            {stat.label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdventureHero
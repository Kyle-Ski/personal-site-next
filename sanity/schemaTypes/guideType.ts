import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const guideType = defineType({
    name: 'guide',
    title: 'Guide',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Guide Title',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'guideType',
            type: 'string',
            title: 'Guide Type',
            options: {
                list: [
                    { title: 'Route Guide', value: 'route-guide' },
                    { title: 'Gear Guide', value: 'gear-guide' },
                    { title: 'Planning Guide', value: 'planning-guide' },
                    { title: 'Skills Guide', value: 'skills-guide' },
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
            title: 'Brief Description',
            rows: 3,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            description: 'This can be used to schedule post for publishing',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
            title: 'Body',
        }),

        // Universal fields for all guide types
        defineField({
            name: 'activities',
            type: 'array',
            title: 'Activities',
            description: 'Activities this guide covers',
            of: [{
                type: 'string',
                options: {
                    list: [
                        { title: 'Hiking', value: 'hiking' },
                        { title: 'Backpacking', value: 'backpacking' },
                        { title: 'Trail Running', value: 'trail-running' },
                        { title: 'Backcountry Skiing', value: 'backcountry-skiing' },
                        { title: 'Alpine Climbing', value: 'alpine-climbing' },
                        { title: 'Rock Climbing', value: 'rock-climbing' },
                        { title: 'Mountaineering', value: 'mountaineering' },
                        { title: 'Ski Touring', value: 'ski-touring' },
                        { title: 'Winter Hiking', value: 'winter-hiking' }
                    ]
                }
            }]
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            description: 'Tags for categorization and search',
            of: [{ type: 'reference', to: { type: 'category' } }]
        }),
        defineField({
            name: 'routeNotes',
            type: 'text',
            title: 'Planning Notes',
            description: 'Key information, tips, warnings, or planning notes',
            rows: 4
        }),

        // Route-specific fields (for route guides)
        defineField({
            name: 'routeInfo',
            type: 'object',
            title: 'Route Information',
            description: 'Fill this out for route guides',
            hidden: ({ document }) => document?.guideType !== 'route-guide',
            fields: [
                {
                    name: 'location',
                    type: 'string',
                    title: 'Location',
                    description: 'General area (e.g., "Mount Washington, New Hampshire")'
                },
                {
                    name: 'trailhead',
                    type: 'string',
                    title: 'Trailhead',
                    description: 'Specific starting point'
                },
                {
                    name: 'coordinates',
                    type: 'object',
                    title: 'GPS Coordinates',
                    description: 'Trailhead or key location coordinates',
                    fields: [
                        { name: 'lat', type: 'number', title: 'Latitude' },
                        { name: 'lng', type: 'number', title: 'Longitude' }
                    ]
                },
                {
                    name: 'distance',
                    type: 'number',
                    title: 'Distance (miles)',
                    description: 'Total trip distance in miles'
                },
                {
                    name: 'elevation',
                    type: 'number',
                    title: 'Peak Elevation (ft)',
                    description: 'Highest point elevation in feet'
                },
                {
                    name: 'elevationGain',
                    type: 'number',
                    title: 'Elevation Gain (ft)',
                    description: 'Total elevation gain in feet'
                },
                {
                    name: 'difficulty',
                    type: 'string',
                    title: 'Difficulty Rating',
                    options: {
                        list: [
                            { title: 'Easy', value: 'easy' },
                            { title: 'Moderate', value: 'moderate' },
                            { title: 'Difficult', value: 'difficult' },
                            { title: 'Expert', value: 'expert' }
                        ]
                    }
                },
                {
                    name: 'seasons',
                    type: 'array',
                    title: 'Best Seasons',
                    description: 'When is this route best?',
                    of: [{
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Spring', value: 'spring' },
                                { title: 'Summer', value: 'summer' },
                                { title: 'Fall', value: 'fall' },
                                { title: 'Winter', value: 'winter' }
                            ]
                        }
                    }]
                }
            ]
        }),

        // GPX file for route guides
        defineField({
            name: 'gpxFile',
            title: 'GPX Route File',
            type: 'file',
            description: 'Upload GPX file for route tracking and elevation profile',
            hidden: ({ document }) => document?.guideType !== 'route-guide',
            options: {
                accept: '.gpx'
            }
        }),

        // Weather info for route guides
        defineField({
            name: 'weather',
            type: 'object',
            title: 'Weather Information',
            description: 'Typical weather conditions and considerations',
            hidden: ({ document }) => document?.guideType !== 'route-guide',
            fields: [
                {
                    name: 'conditions',
                    type: 'string',
                    title: 'Typical Conditions',
                    options: {
                        list: [
                            { title: 'Clear', value: 'clear' },
                            { title: 'Partly Cloudy', value: 'partly-cloudy' },
                            { title: 'Variable', value: 'variable' },
                            { title: 'Afternoon Storms', value: 'afternoon-storms' },
                            { title: 'High Winds', value: 'high-winds' },
                            { title: 'Snow Possible', value: 'snow-possible' }
                        ]
                    }
                },
                {
                    name: 'temperature',
                    type: 'object',
                    title: 'Temperature Range',
                    fields: [
                        { name: 'low', type: 'number', title: 'Typical Low (°F)' },
                        { name: 'high', type: 'number', title: 'Typical High (°F)' }
                    ]
                }
            ]
        }),

        // Gear recommendations (universal - renamed from recommendedGear to match expected gearUsed)
        defineField({
            name: 'gearUsed',
            type: 'array',
            title: 'Key Gear & Equipment',
            description: 'Essential and recommended gear for this guide',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'name',
                        type: 'string',
                        title: 'Gear Name',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'category',
                        type: 'string',
                        title: 'Category',
                        options: {
                            list: [
                                { title: 'Footwear', value: 'footwear' },
                                { title: 'Clothing', value: 'clothing' },
                                { title: 'Backpack', value: 'backpack' },
                                { title: 'Shelter', value: 'shelter' },
                                { title: 'Navigation', value: 'navigation' },
                                { title: 'Safety', value: 'safety' },
                                { title: 'Cooking', value: 'cooking' },
                                { title: 'Hydration', value: 'hydration' },
                                { title: 'Electronics', value: 'electronics' },
                                { title: 'Climbing', value: 'climbing' },
                                { title: 'Ski Gear', value: 'ski-gear' },
                                { title: 'Winter Gear', value: 'winter-gear' }
                            ]
                        }
                    },
                    {
                        name: 'description',
                        type: 'text',
                        title: 'Description/Notes',
                        description: 'Why this gear is recommended or usage notes',
                        rows: 2
                    },
                    {
                        name: 'essential',
                        type: 'boolean',
                        title: 'Essential Item',
                        description: 'Mark if this gear is absolutely necessary',
                        initialValue: false
                    }
                ]
            }]
        }),

        // Achievement field (optional)
        defineField({
            name: 'achievement',
            type: 'object',
            title: 'Special Achievement',
            description: 'Mark if this guide represents a special milestone or achievement',
            fields: [
                {
                    name: 'type',
                    type: 'string',
                    title: 'Achievement Type',
                    options: {
                        list: [
                            { title: 'Final Peak in Series', value: 'final-peak' },
                            { title: 'First Peak/Route', value: 'first-peak' },
                            { title: 'Personal Record', value: 'personal-record' },
                            { title: 'Technical Achievement', value: 'technical-achievement' },
                            { title: 'Milestone Route', value: 'milestone-route' }
                        ]
                    }
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Achievement Title'
                },
                {
                    name: 'description',
                    type: 'text',
                    title: 'Description',
                    rows: 2
                }
            ]
        }),

        // Author field
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'author' }]
        }),

        // SEO and RSS fields
        defineField({
            name: 'includeInRSS',
            type: 'boolean',
            title: 'Include in RSS Feed',
            description: 'Toggle this when ready to notify RSS subscribers',
            initialValue: false
        }),
    ],

    preview: {
        select: {
            title: 'title',
            guideType: 'guideType',
            media: 'mainImage',
        },
        prepare(selection) {
            const { title, guideType } = selection
            const guideTypeLabels: Record<string, string> = {
                'route-guide': 'Route Guide',
                'gear-guide': 'Gear Guide',
                'planning-guide': 'Planning Guide',
                'skills-guide': 'Skills Guide'
            }

            return {
                title: title,
                subtitle: guideTypeLabels[guideType] || guideType,
                media: selection.media
            }
        },
    },
})
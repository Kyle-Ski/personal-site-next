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
                    { title: 'Route Guide', value: 'route' },
                    { title: 'Gear Guide', value: 'gear' },
                    { title: 'Planning Guide', value: 'planning' },
                    { title: 'Skills Guide', value: 'skills' },
                    { title: 'Conditions Report', value: 'conditions' },
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

        // Route-specific fields (conditional)
        defineField({
            name: 'routeInfo',
            type: 'object',
            title: 'Route Information',
            description: 'Only fill this out for route guides',
            hidden: ({ document }) => document?.guideType !== 'route',
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
                    name: 'distance',
                    type: 'number',
                    title: 'Distance (miles)',
                    description: 'Total trip distance in miles'
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
                    name: 'activities',
                    type: 'array',
                    title: 'Activities',
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
                                { title: 'Mountaineering', value: 'mountaineering' }
                            ]
                        }
                    }]
                },
                {
                    name: 'gpxFile',
                    title: 'GPX Route File',
                    type: 'file',
                    options: {
                        accept: '.gpx'
                    },
                    description: 'Upload GPX file for route tracking and elevation profile'
                },
                {
                    name: 'seasonality',
                    type: 'array',
                    title: 'Best Seasons',
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

        // Future gear linking
        defineField({
            name: 'recommendedGear',
            type: 'array',
            title: 'Recommended Gear',
            description: 'Link to specific gear items (future: will link to gear database)',
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
                                { title: 'Climbing', value: 'climbing' }
                            ]
                        }
                    },
                    {
                        name: 'essential',
                        type: 'boolean',
                        title: 'Essential Item',
                        description: 'Mark if this gear is absolutely necessary',
                        initialValue: false
                    },
                    {
                        name: 'notes',
                        type: 'text',
                        title: 'Notes',
                        description: 'Why this gear is recommended or usage notes',
                        rows: 2
                    }
                    // Future field: gearReference (reference to gear document)
                ]
            }]
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
                'route': 'Route Guide',
                'gear': 'Gear Guide',
                'planning': 'Planning Guide',
                'skills': 'Skills Guide',
                'conditions': 'Conditions Report'
            }

            return {
                title: title,
                subtitle: guideTypeLabels[guideType] || guideType,
                media: selection.media
            }
        },
    },
})
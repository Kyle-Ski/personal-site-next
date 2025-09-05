import { ClipboardImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const tripReportType = defineType({
    name: 'tripReport',
    title: 'Trip Report',
    type: 'document',
    icon: ClipboardImageIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Trip Title',
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
            name: 'contentType',
            type: 'string',
            options: {
                list: [
                    { title: 'Trip Report', value: 'trip-report' },
                    { title: 'Route Guide', value: 'route-guide' },
                    { title: 'Gear Guide', value: 'gear-guide' },
                    { title: 'Planning Guide', value: 'planning-guide' },
                    { title: 'Skills Guide', value: 'skills-guide' },
                    { title: 'Conditions Report', value: 'conditions-report' },
                ]
            }
        }),
        defineField({
            name: 'gpxFile',
            title: 'GPX Route File',
            type: 'file',
            options: {
                accept: '.gpx'
            },
            description: 'Upload GPX file for route tracking and elevation profile'
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
            title: 'Brief Description',
            rows: 3
        }),
        defineField({
            name: 'achievement',
            type: 'object',
            title: 'Special Achievement',
            description: 'Mark if this trip represents a special milestone or achievement',
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
                            { title: 'Anniversary Climb', value: 'anniversary' },
                            { title: 'Milestone Distance', value: 'milestone-distance' },
                            { title: 'Highest Peak Achieved', value: 'highest-peak' },
                            { title: 'Technical Achievement', value: 'technical-achievement' },
                            { title: 'Group/Family Milestone', value: 'group-achievement' },
                            { title: 'Weather Challenge', value: 'weather-challenge' },
                            { title: 'Multi-Day Record', value: 'multi-day-record' },
                            { title: 'Comeback/Return', value: 'comeback' },
                            { title: 'Other', value: 'other' }
                        ]
                    }
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Achievement Title',
                    description: 'e.g., "All 58 Colorado 14ers Complete!", "First Technical Alpine Route"',
                    validation: Rule => Rule.max(100)
                },
                {
                    name: 'description',
                    type: 'text',
                    title: 'Achievement Details',
                    description: 'Optional: Additional context about this achievement',
                    rows: 2
                }
            ]
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Hero Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Trip Date',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location/Peak Name',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'coordinates',
            type: 'geopoint',
            title: 'GPS Coordinates',
            description: 'Pin the location on the map'
        }),
        defineField({
            name: 'elevation',
            type: 'number',
            title: 'Peak Elevation (ft)',
            description: 'Elevation in feet'
        }),
        defineField({
            name: 'distance',
            type: 'number',
            title: 'Total Distance (miles)',
            description: 'Round trip distance in miles'
        }),
        defineField({
            name: 'elevationGain',
            type: 'number',
            title: 'Elevation Gain (ft)',
            description: 'Total elevation gain in feet'
        }),
        defineField({
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
        }),
        defineField({
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
        }),
        defineField({
            name: 'weather',
            type: 'object',
            title: 'Weather Conditions',
            fields: [
                {
                    name: 'conditions',
                    type: 'string',
                    title: 'Weather',
                    options: {
                        list: [
                            { title: 'Clear', value: 'clear' },
                            { title: 'Partly Cloudy', value: 'partly-cloudy' },
                            { title: 'Overcast', value: 'overcast' },
                            { title: 'Rain', value: 'rain' },
                            { title: 'Snow', value: 'snow' },
                            { title: 'Wind', value: 'wind' },
                            { title: 'Storm', value: 'storm' }
                        ]
                    }
                },
                {
                    name: 'temperature',
                    type: 'object',
                    title: 'Temperature Range',
                    fields: [
                        { name: 'low', type: 'number', title: 'Low (°F)' },
                        { name: 'high', type: 'number', title: 'High (°F)' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'gearUsed',
            type: 'array',
            title: 'Key Gear Used',
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
                                { title: '⛺ Shelter & Sleep System', value: 'shelter' },
                                { title: '👕 Clothing & Layers', value: 'clothing' },
                                { title: '🧭 Navigation & Safety', value: 'navigation' },
                                { title: '🍳 Food & Cooking', value: 'food' },
                                { title: '💧 Water & Hydration', value: 'water' },
                                { title: '🎒 Pack & Organization', value: 'pack' },
                                { title: '🔧 Tools & Repair', value: 'tools' },
                                { title: '📦 Other Gear', value: 'other' }
                            ]
                        },
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'description',
                        type: 'text',
                        title: 'Why you liked it',
                        description: 'Short explanation of why this gear was valuable',
                        rows: 2
                    }
                ],
                preview: {
                    select: {
                        title: 'name',
                        subtitle: 'category'
                    }
                }
            }],
            description: 'List the most important gear for this trip with categories and notes'
        }),
        defineField({
            name: 'routeNotes',
            type: 'text',
            title: 'Route Notes',
            description: 'Important navigation notes, waypoints, hazards, etc.',
            rows: 4
        }),
        defineField({
            name: 'includeInRSS',
            type: 'boolean',
            title: 'Include in RSS Feed',
            description: 'Toggle this when ready to notify RSS subscribers',
            initialValue: false
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
            title: 'Trip Report Content'
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            location: 'location',
            date: 'date',
            media: 'mainImage',
        },
        prepare(selection) {
            const { location, date } = selection
            return {
                ...selection,
                subtitle: `${location} • ${date ? new Date(date).toLocaleDateString() : 'No date'}`
            }
        },
    },
})
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
            name: 'excerpt',
            type: 'text',
            title: 'Brief Description',
            rows: 3
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
            of: [{ type: 'string' }],
            description: 'List the most important gear for this trip'
        }),
        defineField({
            name: 'routeNotes',
            type: 'text',
            title: 'Route Notes',
            description: 'Important navigation notes, waypoints, hazards, etc.',
            rows: 4
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
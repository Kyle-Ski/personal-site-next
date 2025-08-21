import { StarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const gearReviewType = defineType({
    name: 'gearReview',
    title: 'Gear Review',
    type: 'document',
    icon: StarIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Review Title',
            description: 'e.g., "Patagonia Houdini Jacket Review"',
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
            name: 'author',
            type: 'reference',
            to: { type: 'author' },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Product Image',
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
            name: 'gallery',
            type: 'array',
            title: 'Additional Images',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ]
                })
            ]
        }),

        // Gear-specific fields
        defineField({
            name: 'gearName',
            type: 'string',
            title: 'Gear Name',
            description: 'Official product name',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'brand',
            type: 'string',
            title: 'Brand',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'model',
            type: 'string',
            title: 'Model/Version',
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price (USD)',
            description: 'Price at time of review'
        }),
        defineField({
            name: 'overallRating',
            type: 'number',
            title: 'Overall Rating',
            description: 'Rating out of 5',
            validation: Rule => Rule.min(1).max(5).required(),
            options: {
                layout: 'radio',
                list: [
                    { title: '1 - Poor', value: 1 },
                    { title: '2 - Fair', value: 2 },
                    { title: '3 - Good', value: 3 },
                    { title: '4 - Very Good', value: 4 },
                    { title: '5 - Excellent', value: 5 }
                ]
            }
        }),

        // Categories and classification
        defineField({
            name: 'gearCategories',
            type: 'array',
            title: 'Gear Categories',
            of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
            description: 'What type of gear is this? (Hiking, Camping, Climbing, etc.)'
        }),
        defineField({
            name: 'seasons',
            type: 'array',
            title: 'Recommended Seasons',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Spring', value: 'spring' },
                    { title: 'Summer', value: 'summer' },
                    { title: 'Fall', value: 'fall' },
                    { title: 'Winter', value: 'winter' },
                    { title: 'Year-round', value: 'year-round' }
                ]
            }
        }),
        defineField({
            name: 'activities',
            type: 'array',
            title: 'Recommended Activities',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Hiking', value: 'hiking' },
                    { title: 'Backpacking', value: 'backpacking' },
                    { title: 'Climbing', value: 'climbing' },
                    { title: 'Mountaineering', value: 'mountaineering' },
                    { title: 'Trail Running', value: 'trail-running' },
                    { title: 'Camping', value: 'camping' },
                    { title: 'Skiing', value: 'skiing' },
                    { title: 'Snowboarding', value: 'snowboarding' }
                ]
            }
        }),

        // Review content
        defineField({
            name: 'excerpt',
            type: 'text',
            title: 'Short Summary',
            description: 'Brief summary of your review',
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'pros',
            type: 'array',
            title: 'Pros',
            of: [{ type: 'string' }],
            description: 'What you liked about this gear'
        }),
        defineField({
            name: 'cons',
            type: 'array',
            title: 'Cons',
            of: [{ type: 'string' }],
            description: 'What could be improved'
        }),

        // Detailed ratings
        defineField({
            name: 'detailedRatings',
            type: 'object',
            title: 'Detailed Ratings',
            fields: [
                {
                    name: 'durability',
                    type: 'number',
                    title: 'Durability',
                    validation: Rule => Rule.min(1).max(5),
                    options: {
                        layout: 'radio',
                        list: [1, 2, 3, 4, 5]
                    }
                },
                {
                    name: 'comfort',
                    type: 'number',
                    title: 'Comfort',
                    validation: Rule => Rule.min(1).max(5),
                    options: {
                        layout: 'radio',
                        list: [1, 2, 3, 4, 5]
                    }
                },
                {
                    name: 'performance',
                    type: 'number',
                    title: 'Performance',
                    validation: Rule => Rule.min(1).max(5),
                    options: {
                        layout: 'radio',
                        list: [1, 2, 3, 4, 5]
                    }
                },
                {
                    name: 'valueForMoney',
                    type: 'number',
                    title: 'Value for Money',
                    validation: Rule => Rule.min(1).max(5),
                    options: {
                        layout: 'radio',
                        list: [1, 2, 3, 4, 5]
                    }
                }
            ]
        }),

        // Technical specs
        defineField({
            name: 'specifications',
            type: 'object',
            title: 'Technical Specifications',
            fields: [
                {
                    name: 'weight',
                    type: 'string',
                    title: 'Weight',
                    description: 'e.g., "1.2 lbs" or "540g"'
                },
                {
                    name: 'dimensions',
                    type: 'string',
                    title: 'Dimensions',
                },
                {
                    name: 'materials',
                    type: 'array',
                    title: 'Materials',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'features',
                    type: 'array',
                    title: 'Key Features',
                    of: [{ type: 'string' }]
                }
            ]
        }),

        // Usage and testing
        defineField({
            name: 'testingConditions',
            type: 'text',
            title: 'Testing Conditions',
            description: 'Where and how you tested this gear'
        }),
        defineField({
            name: 'timeUsed',
            type: 'string',
            title: 'Time Used',
            description: 'How long you\'ve been using this gear',
            options: {
                list: [
                    { title: 'Less than 1 month', value: '<1-month' },
                    { title: '1-6 months', value: '1-6-months' },
                    { title: '6 months - 1 year', value: '6-12-months' },
                    { title: '1-2 years', value: '1-2-years' },
                    { title: '2+ years', value: '2+-years' }
                ]
            }
        }),

        // Purchase and recommendation
        defineField({
            name: 'purchaseLinks',
            type: 'array',
            title: 'Where to Buy',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        {
                            name: 'retailer',
                            type: 'string',
                            title: 'Retailer Name'
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'Purchase Link'
                        },
                        {
                            name: 'currentPrice',
                            type: 'number',
                            title: 'Current Price'
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: 'recommendedFor',
            type: 'text',
            title: 'Recommended For',
            description: 'Who would you recommend this gear to?'
        }),
        defineField({
            name: 'alternatives',
            type: 'text',
            title: 'Alternatives to Consider',
            description: 'Similar products worth considering'
        }),

        // Standard blog fields
        defineField({
            name: 'body',
            type: 'blockContent',
            title: 'Detailed Review',
            description: 'Your comprehensive review'
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published Date',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'updatedAt',
            type: 'datetime',
            title: 'Last Updated',
            description: 'When you last updated this review'
        })
    ],

    preview: {
        select: {
            title: 'gearName',
            brand: 'brand',
            rating: 'overallRating',
            media: 'mainImage',
        },
        prepare(selection) {
            const { brand, rating } = selection
            const stars = '★'.repeat(rating || 0) + '☆'.repeat(5 - (rating || 0))
            return {
                ...selection,
                subtitle: `${brand} • ${stars} (${rating}/5)`
            }
        },
    },
})
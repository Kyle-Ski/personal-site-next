import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
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
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Brief Description',
      description: 'This will appear in previews and search results',
      rows: 3
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
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
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      description: 'Feature this post on the homepage',
      initialValue: false
    }),
    // Outdoor-specific fields (optional, only for outdoor posts)
    defineField({
      name: 'outdoorData',
      type: 'object',
      title: 'Outdoor Activity Data',
      description: 'Fill this out if this is an outdoor/adventure post',
      fields: [
        {
          name: 'location',
          type: 'string',
          title: 'Location'
        },
        {
          name: 'coordinates',
          type: 'geopoint',
          title: 'GPS Coordinates'
        },
        {
          name: 'elevation',
          type: 'number',
          title: 'Elevation (ft)'
        },
        {
          name: 'distance',
          type: 'number',
          title: 'Distance (miles)'
        },
        {
          name: 'difficulty',
          type: 'string',
          title: 'Difficulty',
          options: {
            list: [
              { title: 'Easy', value: 'easy' },
              { title: 'Moderate', value: 'moderate' },
              { title: 'Difficult', value: 'difficult' },
              { title: 'Expert', value: 'expert' }
            ]
          }
        }
      ]
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      categories: 'categories'
    },
    prepare(selection) {
      const { author, categories } = selection
      const categoryList = categories?.map((cat: any) => cat.title).join(', ') || ''
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : ''} ${categoryList ? `• ${categoryList}` : ''}`
      }
    },
  },
})
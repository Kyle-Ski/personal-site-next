import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
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
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Category Color',
      options: {
        list: [
          { title: 'Green (Outdoor)', value: 'green' },
          { title: 'Blue (Tech)', value: 'blue' },
          { title: 'Orange (General)', value: 'orange' },
          { title: 'Purple (Personal)', value: 'purple' }
        ]
      },
      initialValue: 'green'
    }),
    defineField({
      name: 'isOutdoor',
      type: 'boolean',
      title: 'Outdoor Category',
      description: 'Check if this is an outdoor/adventure category',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
      isOutdoor: 'isOutdoor'
    },
    prepare(selection) {
      const { color, isOutdoor } = selection
      return {
        ...selection,
        subtitle: `${color} ${isOutdoor ? '• Outdoor' : '• Tech'}`
      }
    },
  },
})
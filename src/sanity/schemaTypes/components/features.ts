import { defineType, defineField } from 'sanity';

export const features = defineType({
  name: 'features',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the features section'
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      description: 'Description text below the title'
    }),
    defineField({
      name: 'features',
      title: 'Feature Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
            defineField({ 
              name: 'icon', 
              title: 'Icon Name', 
              type: 'string',
              description: 'Icon identifier (e.g., "star", "heart", "check")'
            })
          ]
        }
      ]
    })
  ]
});

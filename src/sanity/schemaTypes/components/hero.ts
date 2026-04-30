import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Array of title lines (e.g., ["Make high", "performance", "inevitable."])'
    }),
    defineField({
      name: 'italicLastWord',
      title: 'Italicize Last Word',
      type: 'boolean',
      description: 'Automatically italicize the last word in the title',
      initialValue: true
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Main description text below the title'
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'shelfItems',
      title: 'Hero Shelf Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number/Text', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'dashboard',
      title: 'Dashboard Data',
      type: 'object',
      fields: [
        defineField({
          name: 'overallScore',
          title: 'Overall Score',
          type: 'object',
          fields: [
            defineField({ name: 'score', title: 'Score', type: 'number' }),
            defineField({ name: 'responses', title: 'Responses', type: 'number' }),
            defineField({ name: 'completion', title: 'Completion %', type: 'number' }),
            defineField({ name: 'quarter', title: 'Quarter', type: 'string' }),
            defineField({ name: 'completedDate', title: 'Completed Date', type: 'string' })
          ]
        }),
        defineField({
          name: 'conditions',
          title: 'Conditions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'score', title: 'Score', type: 'number' }),
                defineField({ name: 'badge', title: 'Badge Type', type: 'string', 
                  options: {
                    list: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Focus Area', value: 'focus' },
                      { title: 'Unstable', value: 'unstable' }
                    ]
                  }
                }),
                defineField({ name: 'isFocus', title: 'Is Focus Area', type: 'boolean' })
              ]
            }
          ]
        }),
        defineField({
          name: 'quarterOverQuarter',
          title: 'Quarter Over Quarter Data',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'previous', title: 'Previous Score', type: 'number' }),
                defineField({ name: 'current', title: 'Current Score', type: 'number' })
              ]
            }
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare({ title, subtitle }) {
      const titleText = title && title.length > 0 ? title.join(' ') : 'Hero Section';
      return {
        title: titleText,
        subtitle: 'Hero Section',
        description: subtitle
      };
    }
  }
});

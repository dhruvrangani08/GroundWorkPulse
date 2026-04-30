import { defineType, defineField } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Groundwork',
    }),
    defineField({
      name: 'logoTagline',
      title: 'Logo Tagline',
      type: 'string',
      initialValue: 'Team Conditions. Clearly Measured.',
    }),
    defineField({
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'heading', type: 'string', title: 'Column Heading' }),
          defineField({
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string', title: 'Label' }),
                defineField({ name: 'href', type: 'string', title: 'URL or Email' }),
                defineField({ 
                  name: 'isEmail', 
                  type: 'boolean', 
                  title: 'Treat as Email Address',
                  initialValue: false,
                  description: 'Convert this link to a mailto: email address',
                }),
              ]
            }]
          }),
        ],
        preview: { select: { title: 'heading' } }
      }]
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Groundwork. All rights reserved.',
    }),
    defineField({
      name: 'bottomTagline',
      title: 'Bottom Tagline',
      type: 'string',
      initialValue: 'Flat fee. No per-seat pricing. Ever.',
    }),
  ],
})
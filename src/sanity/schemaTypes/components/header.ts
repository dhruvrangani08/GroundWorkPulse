import { defineType, defineField } from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Groundwork',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Logo Tagline',
      type: 'string',
      initialValue: 'Team Conditions. Clearly Measured.',
      description: 'The tagline shown below the logo e.g. "Team Conditions. Clearly Measured."',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Navigation Menu',
      type: 'array',
      description: 'The navigation links shown in the header.',
      validation: Rule => Rule.required().min(1).error('At least one menu item is required'),
      of: [
        {
          type: 'object',
          name: 'menuItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Menu Title',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'The label shown in the navigation e.g. "Services"',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              description: 'The URL this menu item links to e.g. "/services"',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'isEmail',
              title: 'Treat as Email Address',
              type: 'boolean',
              initialValue: false,
              description: 'Convert this link to a mailto: email address',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'link',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      description: 'The call-to-action button displayed on the right side of the header.',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get in touch',
          validation: Rule => Rule.required(),
          description: 'The label on the CTA button e.g. "Get in touch"',
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'string',
          initialValue: '/book.html',
          validation: Rule => Rule.required(),
          description: 'The URL the CTA button links to e.g. "/book.html"',
        }),
        defineField({
          name: 'isEmail',
          title: 'Treat as Email Address',
          type: 'boolean',
          initialValue: false,
          description: 'Convert this link to a mailto: email address',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Header',
        subtitle: '(Header)',
      }
    },
  },
})

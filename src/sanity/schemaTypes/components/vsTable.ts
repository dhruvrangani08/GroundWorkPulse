import { defineType, defineField } from 'sanity';

export const vsTable = defineType({
  title: 'VS Table Section',
  name: 'vsTable',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the section (uses default if not set)',
      initialValue: 'Where Groundwork<br><em>stacks up.</em>',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Text above the main title',
      initialValue: 'The comparison',
    }),
    defineField({
      name: 'competitorHeader',
      title: 'Competitor Column Header',
      type: 'string',
      description: 'Header text for the competitor column',
      initialValue: 'Most engagement tools',
    }),
    defineField({
      name: 'groundworkHeader',
      title: 'Groundwork Column Header',
      type: 'string',
      description: 'Header text for the Groundwork column',
      initialValue: 'Groundwork',
    }),
    defineField({
      name: 'tableRows',
      title: 'Table Rows',
      type: 'array',
      description: 'Comparison table rows',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'feature',
              title: 'Feature Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'competitorValue',
              title: 'Competitor Value',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'competitorHasCheck',
              title: 'Competitor Has Checkmark',
              type: 'boolean',
              description: 'Show checkmark instead of ✗ for competitor',
              initialValue: false,
            }),
            defineField({
              name: 'groundworkValue',
              title: 'Groundwork Value',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'groundworkHasCheck',
              title: 'Groundwork Has Checkmark',
              type: 'boolean',
              description: 'Show checkmark instead of ✓ for Groundwork',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              feature: 'feature',
              competitorValue: 'competitorValue',
              groundworkValue: 'groundworkValue',
            },
            prepare(selection) {
              const { feature, competitorValue, groundworkValue } = selection;
              return {
                title: feature,
                subtitle: `${competitorValue} vs ${groundworkValue}`,
              };
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      eyebrow: 'eyebrow',
    },
    prepare(selection) {
      const { title, eyebrow } = selection;
      return {
        title: 'VS Table Section',
        subtitle: eyebrow || 'Comparison table',
      };
    },
  },
});

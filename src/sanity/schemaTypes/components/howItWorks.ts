import { defineType, defineField } from 'sanity';

export const howItWorks = defineType({
  name: 'howItWorks',
  title: 'How It Works Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ]
          }
        }
      ],
      description: 'Main heading for the section (e.g., "From pulse to <em>insight</em> in hours.")',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Text displayed in the eyebrow area above the title (e.g., "How it works", "Process Overview")',
      initialValue: 'How it works'
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      description: 'Description text below the title'
    }),
    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      description: 'The steps that explain how the process works',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Step Number', type: 'string' }),
            defineField({ name: 'title', title: 'Step Title', type: 'string' }),
            defineField({ name: 'description', title: 'Step Description', type: 'text' })
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      eyebrowText: 'eyebrowText',
      subtitle: 'subtitle',
      steps: 'steps'
    },
    prepare({ title, eyebrowText, subtitle, steps }) {
      // Extract plain text from Portable Text block array
      const titleText =
        Array.isArray(title)
          ? title
              .map((block: any) =>
                Array.isArray(block?.children)
                  ? block.children.map((child: any) => child?.text ?? '').join('')
                  : ''
              )
              .join(' ')
          : 'How It Works Section';

      const stepsCount = Array.isArray(steps) ? steps.length : 0;

      return {
        title: titleText || 'How It Works Section',
        subtitle: subtitle
          ? `${subtitle.slice(0, 60)}${subtitle.length > 60 ? '…' : ''}`
          : `${stepsCount} step${stepsCount !== 1 ? 's' : ''}`,
      };
    }
  }
});

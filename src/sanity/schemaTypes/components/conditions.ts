import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'conditions',
  title: 'Six Conditions Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small text above the title',
      initialValue: 'What we measure'
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ],
      description: 'Main title with HTML support (supports strong and em tags)'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Description text below the title',
      rows: 3
    }),
    defineField({
      name: 'pillars',
      title: 'HPOS Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Pillar Name', type: 'string' }),
            defineField({ name: 'label', title: 'Pillar Label', type: 'string' })
          ]
        }
      ],
      description: 'Three pillars of the High-Performance Operating System',
      initialValue: [
        { name: 'Safety', label: 'Pillar 01' },
        { name: 'Understanding', label: 'Pillar 02' },
        { name: 'Connection', label: 'Pillar 03' }
      ]
    }),
    defineField({
      name: 'conditions',
      title: 'Six Conditions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Condition Number', type: 'string' }),
            defineField({ name: 'pillar', title: 'Pillar', type: 'string' }),
            defineField({ name: 'name', title: 'Condition Name', type: 'string' }),
            defineField({ name: 'question', title: 'Key Question', type: 'text' }),
            defineField({ name: 'when', title: 'When This Works', type: 'text' })
          ]
        }
      ],
      description: 'The six conditions that drive team performance'
    })
  ],
  preview: {
    select: {
      title: 'title',
      eyebrowText: 'eyebrowText',
      subtitle: 'subtitle',
      conditions: 'conditions'
    },
    prepare({ title, eyebrowText, subtitle, conditions }) {
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
          : 'Six Conditions Section';

      const conditionsCount = conditions ? conditions.length : 0;

      return {
        title: titleText || 'Six Conditions Section',
        subtitle: subtitle
          ? `${subtitle.slice(0, 60)}${subtitle.length > 60 ? '...' : ''}`
          : `${conditionsCount} conditions`,
      };
    }
  }
});

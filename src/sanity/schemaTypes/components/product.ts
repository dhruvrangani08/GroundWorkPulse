import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small text above the title',
      initialValue: 'The product'
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
    })
  ],
  preview: {
    select: {
      title: 'title',
      eyebrowText: 'eyebrowText',
      subtitle: 'subtitle'
    },
    prepare({ title, eyebrowText, subtitle }) {
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
          : 'Product Section';

      return {
        title: titleText || 'Product Section',
        subtitle: subtitle
          ? `${subtitle.slice(0, 60)}${subtitle.length > 60 ? '...' : ''}`
          : eyebrowText || 'The product',
      };
    }
  }
});

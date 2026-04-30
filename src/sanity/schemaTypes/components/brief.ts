import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brief',
  title: 'Brief Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small text above the title',
      initialValue: 'The Organizational Insight Brief'
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
      name: 'description',
      title: 'Description',
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
      description: 'Main description text (supports HTML)'
    }),
    defineField({
      name: 'additionalText',
      title: 'Additional Text',
      type: 'text',
      description: 'Additional text below description',
      rows: 2
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'text',
      description: 'Disclaimer text about sample excerpt',
      rows: 2
    }),
    defineField({
      name: 'documentTitle',
      title: 'Document Title',
      type: 'string',
      description: 'Title shown in the document header',
      initialValue: 'Organizational Insight Brief'
    }),
    defineField({
      name: 'documentSubtitle',
      title: 'Document Subtitle',
      type: 'string',
      description: 'Subtitle shown in the document header',
      initialValue: 'Sample · Confidential'
    }),
    defineField({
      name: 'briefBlocks',
      title: 'Brief Content Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Block Label', type: 'string' }),
            defineField({ 
              name: 'quote', 
              title: 'Block Quote', 
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
              ]
            })
          ]
        }
      ],
      description: 'Content blocks for the brief document'
    }),
    defineField({
      name: 'stampText',
      title: 'Stamp Text',
      type: 'string',
      description: 'Text shown in the stamp',
      initialValue: 'Sample\nexcerpt'
    })
  ],
  preview: {
    select: {
      title: 'title',
      eyebrowText: 'eyebrowText',
      documentTitle: 'documentTitle',
      briefBlocks: 'briefBlocks'
    },
    prepare({ title, eyebrowText, documentTitle, briefBlocks }) {
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
          : 'Brief Section';

      const blocksCount = briefBlocks ? briefBlocks.length : 0;

      return {
        title: titleText || 'Brief Section',
        subtitle: documentTitle || eyebrowText || `${blocksCount} content blocks`,
      };
    }
  }
});

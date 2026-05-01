import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'titleLines',
      title: 'Hero Title Lines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
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
              validation: Rule => Rule.required(),
              description: 'Title line text with HTML support (supports strong and em tags)'
            })
          ],
          preview: {
            select: {
              text: 'text'
            },
            prepare(selection) {
              const { text } = selection;
              const plainText = Array.isArray(text) ?
                text.map(t => typeof t === 'string' ? t : t._type === 'block' ? t.children?.map((c: any) => c.text).join('') || '' : '').join(' ') :
                text || '';
              return {
                title: plainText || 'Title Line'
              };
            }
          }
        }
      ],
      description: 'Array of title lines (add/remove as needed)'
    }),
    defineField({
      name: 'metaText',
      title: 'Hero Meta Text',
      type: 'string',
      description: 'Meta text displayed above the hero title (e.g., industry focus)'
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
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
      description: 'Sub title with HTML support (supports strong and em tags)'
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
            defineField({
              name: 'value', title: 'Value', type: 'array',
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
            }),
            defineField({
              name: 'label', title: 'Label', type: 'array',
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
            })
          ]
        }
      ]
    }),
  ],
  preview: {
    select: {
      titleLines: 'titleLines',
      subtitle: 'subtitle'
    },
    prepare({ titleLines, subtitle }) {
      const titleText = titleLines && titleLines.length > 0 ?
        titleLines.map((line: any) => {
          const text = line.text;
          const plainText = Array.isArray(text) ?
            text.map(t => typeof t === 'string' ? t : t._type === 'block' ? t.children?.map((c: any) => c.text).join('') || '' : '').join(' ') :
            text || '';
          return plainText;
        }).join(' ') : 'Hero Section';

      const subtitleText = subtitle && Array.isArray(subtitle) ?
        subtitle.map(t => typeof t === 'string' ? t : t._type === 'block' ? t.children?.map((c: any) => c.text).join('') || '' : '').join(' ') :
        subtitle || '';

      return {
        title: titleText,
        subtitle: 'Hero Section',
        description: subtitleText
      };
    }
  }
});

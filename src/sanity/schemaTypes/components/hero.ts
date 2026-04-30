import { defineType, defineField } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'titleLines',
      title: 'Title Lines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Line Text',
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
      name: 'italicLastWord',
      title: 'Italicize Last Word',
      type: 'boolean',
      description: 'Automatically italicize the last word in the title',
      initialValue: true
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
                defineField({
                  name: 'badge', title: 'Badge Type', type: 'string',
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

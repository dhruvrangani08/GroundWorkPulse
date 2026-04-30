import { defineType, defineField } from 'sanity';

export const credibilityLine = defineType({
  name: 'credibilityLine',
  title: 'Credibility Line Section',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Credibility Text',
      type: 'text',
      description: 'Main credibility statement text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'researchLink',
      title: 'Research Link',
      type: 'object',
      fields: [
        defineField({ 
          name: 'text', 
          title: 'Link Text', 
          type: 'string',
          initialValue: 'See the research'
        }),
        defineField({ 
          name: 'href', 
          title: 'Link URL', 
          type: 'string',
          initialValue: '/research.html'
        })
      ]
    })
  ],
  preview: {
    select: {
      text: 'text',
      researchLink: 'researchLink'
    },
    prepare({ text, researchLink }) {
      const titleText = text ? text.substring(0, 50) + (text.length > 50 ? '...' : '') : 'Credibility Line Section';
      return {
        title: titleText,
        subtitle: 'Credibility Line Section',
        description: researchLink?.href ? `Link: ${researchLink.href}` : 'No link configured'
      };
    }
  }
});

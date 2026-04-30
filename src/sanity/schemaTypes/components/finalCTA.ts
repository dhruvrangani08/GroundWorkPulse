import { defineType, defineField } from 'sanity';

export const finalCTA = defineType({
  title: 'Final CTA Section',
  name: 'finalCTA',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Text above the main title',
      initialValue: 'Measure what matters',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title of the section',
      initialValue: 'Measurement is<br><em>the foundation.</em>',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Text below the main title',
      initialValue: 'Without it, you are guessing about the thing that matters most.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Get in touch â',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: '/book.html',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      description: 'Small text below the CTA button',
      initialValue: 'We respond within one business day',
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
        title: 'Final CTA Section',
        subtitle: eyebrow || 'Call to action',
      };
    },
  },
});

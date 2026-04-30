import { defineType, defineField } from 'sanity';

export const pricing = defineType({
  title: 'Pricing Section',
  name: 'pricing',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Text above the main title',
      initialValue: 'Plans & pricing',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title of the section',
      initialValue: 'Simple <em>pricing.</em>',
    }),
    defineField({
      name: 'pricingFlag',
      title: 'Pricing Flag',
      type: 'string',
      description: 'Flag text displayed next to title',
      initialValue: 'No per-seat pricing. Ever.',
    }),
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      description: 'List of pricing plans',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'planType',
              title: 'Plan Type',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'planName',
              title: 'Plan Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'planTag',
              title: 'Plan Tagline',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'priceNumber',
              title: 'Price Number',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'pricePer',
              title: 'Price Period',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'isMostPopular',
              title: 'Most Popular Plan',
              type: 'boolean',
              description: 'Mark this plan as the most popular',
              initialValue: false,
            }),
            defineField({
              name: 'planFlag',
              title: 'Plan Flag',
              type: 'string',
              description: 'Flag text for this plan (e.g., "Most popular")',
            }),
            defineField({
              name: 'includedText',
              title: 'Included Text',
              type: 'string',
              description: 'Text above features list',
              initialValue: 'What is included',
            }),
            defineField({
              name: 'features',
              title: 'Plan Features',
              type: 'array',
              description: 'List of features included in this plan',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      text: 'text',
                    },
                    prepare(selection) {
                      const { text } = selection;
                      return {
                        title: `✓ ${text}`,
                      };
                    },
                  },
                },
              ],
              validation: Rule => Rule.required().min(1),
            }),
            defineField({
              name: 'commitmentText',
              title: 'Commitment Text',
              type: 'text',
              description: 'Description of who this plan is for',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Button Text',
              type: 'string',
              validation: Rule => Rule.required(),
              initialValue: 'Get started',
            }),
            defineField({
              name: 'ctaLink',
              title: 'CTA Button Link',
              type: 'string',
              validation: Rule => Rule.required(),
              initialValue: '/book.html',
            }),
            defineField({
              name: 'ctaStyle',
              title: 'CTA Button Style',
              type: 'string',
              options: {
                list: [
                  { title: 'Solid', value: 'solid' },
                  { title: 'Outline', value: 'outline' },
                ],
              },
              initialValue: 'outline',
            }),
          ],
          preview: {
            select: {
              planName: 'planName',
              planType: 'planType',
              priceNumber: 'priceNumber',
              isMostPopular: 'isMostPopular',
            },
            prepare(selection) {
              const { planName, planType, priceNumber, isMostPopular } = selection;
              return {
                title: planName,
                subtitle: `${planType} - $${priceNumber} ${isMostPopular ? '(Popular)' : ''}`,
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
        title: 'Pricing Section',
        subtitle: eyebrow || 'Pricing plans',
      };
    },
  },
});

import { defineField, defineType } from "sanity";

export const metaSection = defineType({
  name: "metaSection",
  title: "Meta Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "The title of the meta section",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "The meta title for SEO purposes",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      description: "The meta description for SEO purposes",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "metaImage",
      type: "image",
      description: "The meta image for SEO and social sharing",
      options: { hotspot: true},
      fields: [
        {
          name: "alt",
          type: "string",
          description: "Alternative text for the meta image, important for accessibility and SEO",
          title: "Alternative Text",
          validation: (Rule) => Rule.required()
        },
      ]
    }),
  ],
});

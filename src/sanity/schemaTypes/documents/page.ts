import { defineField, defineType } from 'sanity'
import { hero } from '../components/hero'
import { credibilityLine } from '../components/credibilityLine'
import { howItWorks } from '../components/howItWorks'
import product from '../components/product'
import conditions from '../components/conditions'
import brief from '../components/brief'
import { vsTable } from '../components/vsTable'
import { pricing } from '../components/pricing'
import { finalCTA } from '../components/finalCTA'

// Add every section type here - mirrors components/index.ts
const pageSections = [
    hero,
    credibilityLine,
    howItWorks,
    product,
    conditions,
    brief,
    vsTable,
    pricing,
    finalCTA
]

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({ 
            name: "title", 
            type: "string", 
            description: "The title of the page", 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: "slug", 
            type: "slug", 
            description: "The slug of the page", 
            options: { source: "title" },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'metaSections',
            title: 'Meta',
            type: 'array',
            description: 'Add meta information for SEO and social sharing',
            validation: Rule => Rule.required().max(1),
            of: [{ type: 'metaSection' }],
        }),
        defineField({
            name: 'sections',
            title: 'Page Sections',
            type: 'array',
            description: 'The sections that make up the page',
            of: pageSections.map(section => ({ type: section.name })),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
    },
})

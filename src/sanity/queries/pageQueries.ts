import {
  META_FRAGMENT,
  HERO_SECTION_FRAGMENT,
  CREDIBILITY_LINE_SECTION_FRAGMENT,
  HOW_IT_WORKS_SECTION_FRAGMENT,
  HEADER_FRAGMENT,
  FOOTER_FRAGMENT,
} from "./fragments";

// Layout query for header and footer
export const LAYOUT_QUERY = /* groq */ `
  {
    "header": ${HEADER_FRAGMENT},
    "footer": ${FOOTER_FRAGMENT}
  }
`;

// Home page specific query - DEBUG VERSION
export const HOME_QUERY = /* groq */ `
  *[_type == "page" && slug.current == "home"][0]
`;

// Healthcare page specific query
export const HEALTHCARE_QUERY = /* groq */ `
  *[_type == "page" && slug.current == "healthcare"][0]
`;

// Page query for dynamic routing
export const PAGE_QUERY = /* groq */ `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    metaSections[] {
      title,
      metaTitle,
      metaDescription,
      metaImage {
        asset-> {
          url,
          altText
        }
      }
    },
    sections[] {
      _type,
      ...select(
        _type == "hero" => {
          title,
          subtitle,
          ctaPrimary {
            label,
            href
          },
          ctaSecondary {
            label,
            href
          },
          shelfItems[] {
            number,
            label
          },
          dashboard {
            overallScore {
              score,
              responses,
              completion,
              quarter,
              completedDate
            },
            conditions[] {
              name,
              score,
              badge,
              isFocus
            },
            quarterOverQuarter[] {
              label,
              previous,
              current
            }
          }
        },
        _type == "credibilityLine" => {
          text,
          researchLink {
            text,
            href
          }
        },
        _type == "howItWorks" => {
          title,
          subtitle,
          steps[] {
            number,
            title,
            description
          }
        },
        _type == "product" => {
          eyebrowText,
          title,
          subtitle
        },
        _type == "conditions" => {
          eyebrowText,
          title,
          subtitle,
          pillars[] {
            name,
            label
          },
          conditions[] {
            number,
            pillar,
            name,
            question,
            when
          }
        },
        _type == "brief" => {
          eyebrowText,
          title,
          description,
          additionalText,
          disclaimer,
          documentTitle,
          documentSubtitle,
          briefBlocks[] {
            label,
            quote
          },
          stampText
        }
      )
    }
  }
`;

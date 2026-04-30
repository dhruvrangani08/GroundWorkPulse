// Query fragments for GroundWorkPulse

export const META_FRAGMENT = `
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
  }
`;

export const HERO_SECTION_FRAGMENT = `
  ...select(
    _type == "hero" => {
      _type,
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
    }
  )
`;

export const CREDIBILITY_LINE_SECTION_FRAGMENT = `
  ...select(
    _type == "credibilityLine" => {
      _type,
      text,
      researchLink {
        text,
        href
      }
    }
  )
`;

export const HOW_IT_WORKS_SECTION_FRAGMENT = `
  ...select(
    _type == "howItWorks" => {
      _type,
      title,
      subtitle,
      steps[] {
        number,
        title,
        description
      }
    }
  )
`;

export const HEADER_FRAGMENT = `
  *[_type == "header"][0] {
    tagline,
    menuItems[] {
      title,
      link
    },
    ctaButton {
      text,
      link
    }
  }
`;

export const FOOTER_FRAGMENT = `
  *[_type == "footer"][0] {
    logoText,
    logoTagline,
    columns[] {
      heading,
      links[] { label, href, isEmail }
    },
    copyright,
    bottomTagline
  }
`;

export const HERO_FRAGMENT = `
  *[_type == "hero"][0] {
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
  }
`;
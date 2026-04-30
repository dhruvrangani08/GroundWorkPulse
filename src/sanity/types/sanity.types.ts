// Sanity type definitions
export interface DropdownItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

export interface HeaderSection {
  logoText?: string;
  tagline?: string;
  menuItems?: {
    title: string
    link: string
  }[]
  ctaButton?: {
    text: string
    link: string
  }
}

export interface FooterSection {
  logoText?: string
  logoTagline?: string
  columns?: Array<{
    heading: string
    links: Array<{ label: string; href: string }>
  }>
  copyright?: string
  bottomTagline?: string
}

export interface SanityImage {
  asset?: {
    url?: string;
    _ref?: string;
    _type?: string;
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface HeroSection {
  _type: "heroSection";
  image?: SanityImage;
  mobileImage?: SanityImage;
  headingLine?: string;
  subHeadingLine?: string;
  bottomLine?: any[];
  buttonText?: string;
  buttonAction?: "openPage" | "openVideo" | "openThirdPartyUrl";
  redirectAction?: "sameTab" | "newTab";
  buttonLink?: string;
  imagePosition?: "left" | "right";
}

export interface ContentSection {
  _type: "contentSection";
  heading?: string;
  content?: any[];
  image?: SanityImage;
  layout?: "left-right" | "right-left" | "text-only" | "image-only";
}

export interface CtaSection {
  _type: "ctaSection";
  line1?: string;
  line2?: string;
  buttonText?: string;
  buttonAction?: "openPage" | "openThirdPartyUrl";
  redirectAction?: "sameTab" | "newTab";
  buttonLink?: string;
}

export type PageSection = HeroSection | ContentSection | CtaSection;

export interface PageData {
  title: string;
  slug: {
    current: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: any;
  };
  sections?: PageSection[];
}

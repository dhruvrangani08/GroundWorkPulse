// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from "@astrojs/vercel";
import { redirects } from './redirects';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';


const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const siteUrl = env.PUBLIC_SITE_URL;
export default defineConfig({
  site: siteUrl,
  redirects,
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    react(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    })
  ],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
# GroundWorkPulse

Astro + React + Sanity CMS project based on the danny-goldberg structure.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp env.example .env
```

3. Configure your Sanity project:
   - Create a new Sanity project at https://www.sanity.io/
   - Update `.env` with your project ID and dataset
   - Run `npm run sanity:deploy` to deploy schemas

4. Start development server:
```bash
npm run dev
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `layouts/` - Astro layouts
  - `pages/` - Astro pages
  - `sanity/` - Sanity CMS schemas and configuration
  - `styles/` - CSS/styling
  - `lib/` - Utility functions
  - `assets/` - Static assets

- `public/` - Public static files

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

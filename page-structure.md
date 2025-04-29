# Emerald Owl Productions - Page Structure

## Current Component Organization

Our application uses a modular component structure:

- **Home Components** (`src/components/home/`): Page-specific components for the home page
  - HeroBanner.tsx
  - AmericaBanner.tsx
  - VideoHighlight.tsx
  - ServiceHighlights.tsx
  - FeaturedSlider.tsx

- **Shared UI Components** (`src/components/shared/UI/`): Reusable UI elements across pages
  - Newsletter.tsx
  - ImageSlider.tsx

- **Layout Components** (`src/components/shared/Layout/`): Site-wide structure elements
  - Header.tsx
  - Footer.tsx

## Import Guidelines

When using components across the application, follow these import rules:

1. **Importing shared components**:
   - Always use relative paths that reference the shared directory
   - Example: `import ImageSlider from '../shared/UI/ImageSlider';`
   - Example: `import Header from '../shared/Layout/Header';`

2. **Importing page-specific components**:
   - For components in the same directory, use `./ComponentName`
   - For components from another page, use `../pageName/ComponentName`

3. **Common import errors to avoid**:
   - Using incorrect relative paths (check directory depth)
   - Importing from old component locations after restructuring
   - Using full paths from the project root when Next.js expects relative paths

## Adding New Pages

When adding new pages to the application, follow this structure:

1. **Create a new page file** in `src/app/` directory (Next.js App Router)
   - Example: `src/app/services/page.tsx` for a services page
   - Example: `src/app/about/page.tsx` for an about page

2. **Create page-specific components** in a dedicated directory
   - Create a new folder in `src/components/` named after the page
   - Example: `src/components/services/` for services page components
   - Example: `src/components/about/` for about page components

3. **Reuse shared components** where appropriate
   - Import layout components for consistent page structure
   - Utilize UI components for common interface elements

## Example Page Implementation

For a new "Services" page:

```tsx
// src/app/services/page.tsx
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesList from '../../components/services/ServicesList';
import ServicesCTA from '../../components/services/ServicesCTA';
import Newsletter from '../../components/shared/UI/Newsletter';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
```

## Component Organization Guidelines

1. **Component Naming**:
   - Use PascalCase for component files (e.g., `ServiceCard.tsx`)
   - Name components clearly based on their function

2. **Component Location**:
   - Page-specific components go in page-named folders
   - Reusable components belong in `shared/UI`
   - Layout components belong in `shared/Layout`

3. **Component Imports**:
   - Use absolute imports from project root when possible
   - Group imports logically (layout, page-specific, shared)

4. **Component Composition**:
   - Keep components focused on a single responsibility
   - Extract reusable parts to shared components
   - Pass data via props for component flexibility

By following these guidelines, we'll maintain a scalable and organized component structure as the application grows. 
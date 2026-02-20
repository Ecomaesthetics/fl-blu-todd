# Overview

This is a personal portfolio and contact website for Todd Greenbaum, a licensed insurance sales agent. The site serves as a professional landing page with sections for about, services, and contact information. It includes a contact form that saves inquiries to a PostgreSQL database and embeds a third-party insurance quote widget. The site uses a corporate blue color scheme with Montserrat/Open Sans typography.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: React 18 with TypeScript, bundled with Vite
- **Routing**: Wouter (lightweight client-side router) — single-page app with hash-based section navigation (Home, About, Services, Contact are all sections on one page)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming; fonts are Montserrat (headings) and Open Sans (body)
- **State Management**: TanStack React Query for server state; react-hook-form with Zod validation for forms
- **Animations**: Framer Motion for page transitions and element animations
- **Icons**: Lucide React and react-icons (for social icons like Facebook, Google)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

## Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed with tsx
- **API**: Single REST endpoint `POST /api/inquiries` for contact form submissions
- **Validation**: Zod schemas shared between client and server (defined in `shared/schema.ts`)
- **API Contract**: Shared route definitions in `shared/routes.ts` define method, path, input schema, and response schemas — used by both client hooks and server routes

## Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema**: Single `inquiries` table with fields: id, name, email, phone, message, createdAt, isRead
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)

## Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds client to `dist/public/`, esbuild bundles server to `dist/index.cjs`
- **Build script**: Custom `script/build.ts` that bundles specific dependencies into the server bundle to reduce cold start times

## Project Structure
```
client/           → React frontend
  src/
    components/   → App components (Navigation, ContactForm, QuoteWidget)
    components/ui/→ shadcn/ui component library
    hooks/        → Custom hooks (use-inquiries, use-toast, use-mobile)
    lib/          → Utilities (queryClient, cn helper)
    pages/        → Page components (Home, not-found)
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API route registration
  storage.ts      → Database access layer (IStorage interface + DatabaseStorage)
  db.ts           → Drizzle/pg pool setup
  vite.ts         → Vite dev middleware setup
  static.ts       → Production static file serving
shared/           → Shared code between client and server
  schema.ts       → Drizzle table definitions + Zod schemas
  routes.ts       → API contract definitions
attached_assets/  → Static assets (headshot image, branding data)
```

## Storage Pattern
The storage layer uses an `IStorage` interface with a `DatabaseStorage` implementation. This pattern allows swapping storage backends. Currently only `createInquiry` is implemented.

# External Dependencies

- **PostgreSQL**: Required database, connection via `DATABASE_URL` environment variable. Uses `pg` driver with `connect-pg-simple` for session support
- **Quote Widget**: Third-party insurance quote embed from `cdn.quoteandapply.io` loaded via script tag with key `14m9TyEp9Hcmlr-n` — renders inside a container div on the home page
- **Google Fonts**: Montserrat and Open Sans loaded via Google Fonts CDN
- **Social Links**: Facebook profile and Google Reviews integration (external links only, no API)
- **Replit Plugins**: Development-only plugins for error overlay, cartographer, and dev banner (`@replit/vite-plugin-*`)
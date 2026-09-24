# Changelog

All notable changes to the Deep Nap project will be documented in this file.

## [2026-09-25]

### Added & Changed
- **Website Color Palette Update:**
  - Standardized website-wide color palette with refreshed Primary Navy, Surface Cream/White backgrounds, and Accent Teal highlights.
  - Refined section background rhythms (`bg-surface-white` and `bg-surface`) across all landing pages, headers, footers, and product pages.
  - Updated global CSS variables and brand configurations to enforce uniform visual hierarchy across all components.

- **Quiz & Card UI Edits:**
  - Redesigned Mattress Finder Quiz card layouts and option selectors with updated icons, borders, and interactive selected states.
  - Enhanced product cards, support cards, and comparison cards across mattress and diwan cot listing pages.
  - Standardized card elevation/shadows, padding, badge tags, and typography weights for improved content readability and visual consistency.

- **Bulk Orders & B2B Card View:**
  - Transformed B2B and institutional order sections into a modern grid of structured, interactive cards (`BulkBanner` and `/b2b` cards).
  - Improved layout readability for bulk inquiries with clear iconography, benefit callouts, and direct WhatsApp / Inquiry CTAs.

- **Website Button Style Redesign:**
  - Overhauled all primary, secondary, and tertiary button components (`Buttons.tsx`).
  - Implemented fully rounded oval pill shapes (`rounded-full`), smooth hover state transitions, icon integrations, and standardized heights/padding across desktop and mobile form factors.

## [2026-09-24]

### Added & Changed
- **CTA Button UI Standardization:**
  - Standardized all Call-to-Action (CTA) buttons across the application to feature a fully rounded, oval pill shape (`rounded-full`), aligning with the primary header buttons.
  - Converted various inline text links with hover underlines (e.g., "Compare", "Enquire", "View Soft Mattresses", and "View our Google listing & reviews") into prominent `SecondaryButton` CTA components for better visibility and interaction.
- **Header & Footer Enhancements:**
  - Removed top blue Utility Bar to streamline navigation and adjusted layout padding (`pt-20`) so the hero carousel sits perfectly flush with the header.
  - Replaced broken image logos in header and footer with a prominent, heavy-weight text-based logo ("Deep Nap" - 36px).
  - Standardized navbar CTA button heights to `42px` and applied the classic WhatsApp brand green (`#25D366`) to the WhatsApp button.
- **Layout & Section Refinements:**
  - Standardized alternating section backgrounds (`bg-surface-white` vs `bg-surface`) across the homepage, eliminating hardcoded hex colors in `ConsultationBanner`, `VisitUs`, and correcting `ProductRange`.
  - Removed the "Book a store visit" button from the map card on the Visit Us homepage section.
- **Image Placeholder Replacements:**
  - Replaced all local placeholder images and broken Google user-content links across the codebase with functional Unsplash URLs via an automated script.
  - Generated a tracker document (`temporary_image_updates.md`) mapping all temporary image locations for future review.
- **Homepage Structure & Styling Update:**
  - Added new `HeroCarousel` component at the top of the homepage using `embla-carousel-react` for a premium, auto-playing image slider with dot navigation.
  - Reordered homepage layout: `HeroCarousel` -> `TrustStrip` -> `Hero` (Firmness Scale) -> `CustomSizeBuilder`.
  - Updated global body background to crisp white (`#FFFFFF`) to achieve a modern, airy layout.
  - Adjusted background colors on `ProductRange` and `TrustStrip` to maintain alternating white (`#FFFFFF`) and beige (`#F4F1ED`) sections.
- **Brand Identity 2026 Alignment:**
  - Integrated `Deep Nap Brand Identity.pdf` specifications.
  - Migrated primary brand font across headings and body to **Poppins** (`weights: 400, 500, 600, 700, 800`) via `next/font/google`.
  - Updated color palette: Primary & Deep Navy (`#05253E`), Cream/Surface (`#F4F1ED`), and added Accent Teal (`#2DB1B5`) & Accent Blue (`#7DBCCE`).
  - Increased headline weights (`display-hero` and `headline-lg` to 800 ExtraBold).
  - Added placeholders/developer notes in `Header.tsx` and `Footer.tsx` for upcoming 3-layer wave brand SVG logo assets.
  - Generated comprehensive client asset checklist docs (`docs/client-data-checklist.md` and `docs/client-data-checklist-by-page.md`).
- **Homepage Structure & Narrative:**
  - Swapped section order: moved `CustomSizeBuilder` immediately below `TrustStrip` to anchor on bespoke manufacturing earlier in the user journey.
  - Refined background contrast rhythm (`CustomSizeBuilder` on white, `SupportCards` on cream).

## [2026-09-23]

### Changed
- **Firmness Scale UI (Homepage):**
  - Upgraded range slider track to feature a dynamic `linear-gradient` fill expanding with the slider value in deep navy.
  - Darkened descriptive labels below the slider to Navy medium weight for improved contrast and readability.

## [2026-09-21]

### Added
- **Global Search & Edge Cases (Phase 14):**
  - Built `SearchOverlay.tsx` for real-time client-side searching across mattresses, diwan cots, and sleep guide articles.
  - Integrated global search modal trigger in `Header.tsx`.
  - Built custom `not-found.tsx` 404 error page adhering to Navy/Cream brand identity.
  - Built global `loading.tsx` skeleton layout to eliminate layout shifting during page transitions.
- **FAQ & Policy Pages (Phase 13):**
  - Created `src/data/faq.ts` dataset.
  - Built interactive `/faq` page with categorized accordions, live search, and sticky category sidebar.
  - Built plain-English, D2C policy pages: `/returns`, `/privacy`, and `/terms`.
- **Sleep Guide & Blog (Phase 12):**
  - Created `src/data/articles.ts` containing 5 localized sleep advice articles.
  - Built `/guide` index page with featured article and responsive card grid.
  - Built `/guide/[slug]` dynamic article route with custom markdown and blockquote rendering.
- **Warranty Registration (Phase 11):**
  - Built `/warranty` registration page with dynamic duration calculation based on mattress core type (`src/data/warranties.ts`).
  - Implemented dynamic confirmation UI displaying calculated warranty expiration dates.
- **Visit Page Refinements (Phase 10):**
  - Updated `/visit` with high-quality interior and factory photography.
  - Configured `next.config.ts` remote patterns for Unsplash image optimization.
- **B2B & Institutional Orders Vertical (Phase 7):**
  - Built `/b2b` institutional procurement page tailored for hotels, hostels, hospitals, builders, and designers.
  - Implemented `B2BForm` capturing organization details, buyer type, quantity, size schedules, and forwarding formatted BOQ inquiries to WhatsApp.
- **Consultation Booking Flow (Phase 7):**
  - Built `/book-consultation` supporting 3 distinct modes: 15-min Video Call, Coimbatore Home Visit, and Chinniyampalayam Unit Visit.
  - Interactive appointment scheduler with automated WhatsApp dispatch.
- **Our Manufacturing Page (Phase 7):**
  - Built `/manufacturing` detailing the 6-stage production process, machinery capabilities, raw material sourcing, and factory transparency story.
- **Visit the Unit & Showroom (Phase 7):**
  - Built `/visit` with embedded interactive Google Maps, turn-by-turn Coimbatore airport road directions, opening hours, and visit booking form.
- **Audit & Production Readiness Report:**
  - Created `docs/audit_report.md` tracking strict prompt constraints and production deployment roadmap.
- **Navigation Enhancements:**
  - Connected Header and Footer links for `/b2b`, `/visit`, `/manufacturing`, and `/book-consultation`.
- **Mattress Finder Quiz (Phase 6):**
  - Built a distraction-free, 5-step quiz wizard at `/quiz` with custom layout overrides (`ConditionalLayout`).
  - Implemented a heuristic scoring engine that analyzes sleeper profile, sleep position, health concerns, firmness preference, and size to rank all 13 catalog mattresses.
  - Designed interactive cards with Material Symbols, dynamic progress indicator, and smooth step navigation.
  - Added dynamic recommendations screen highlighting top 3 matches with match rationale and direct WhatsApp consultation handoff.
  - Added "Mattress Finder Quiz" navigation link in `Footer.tsx`.
- **Diwan Cots Vertical (Phase 5):**
  - Created `src/data/cots.ts` with mock furniture data and specifications.
  - Built `/diwan-cots` collection page with Finish and Storage filters.
  - Built `/diwan-cots/[slug]` detail page with image-based finish swatches and `CotConfigurator`.
  - Implemented the "Pairs Perfectly With" cross-selling engine that passes custom cot dimensions to the mattress configurator via URL params (`?prefillSize=LxW`).
- **Compare Feature (Phase 4):**
  - Upgraded `src/data/products.ts` with `buildTime` and `breathability` attributes.
  - Built the sliding "Compare Tray" on the `/mattresses` collection page for selecting up to 3 mattresses.
  - Built the sticky Comparison Matrix page at `/compare`.
- **Quote Checkout Flow (Phase 3):**
  - Built `/quote` page and interactive `QuoteForm` serving as the WhatsApp checkout flow.
  - Linked `ProductConfigurator` and `CustomSizeBuilder` CTAs to push data to the `/quote` URL.
- **Layout & Navigation:**
  - Added `ConditionalLayout` wrapper component to support conditional navigation layouts.
  - Connected navigation links in Header and Footer across all routes.

### Fixed
- **Dead Link Remediation (Codebase Audit):**
  - Mapped 'Get a quote', 'Book a store visit', and 'Compare' on Hero to `/mattresses`, `/visit`, and `/compare`.
  - Mapped 'Start the quiz' and firmness links on SupportCards to `/quiz` and parameterized mattress routes (`/mattresses?firmness=Soft`).
  - Mapped 'Enquire' links on ProductRange to parameterized mattress routes (`/mattresses?type=Latex`).
  - Mapped Consultation, Bulk, and Visit banners directly to their respective forms.
  - Converted `/warranty` form tooltip from a jumping anchor tag to an inert button.
  - Fixed missing `image` property mapping for Diwan Cots in `SearchOverlay.tsx`.

## [2026-09-19]
### Added
- **Quote Request Flow (Phase 3):**
  - Built `/quote` page serving as the WhatsApp-based checkout screen.
  - Linked `ProductConfigurator` and `CustomSizeBuilder` CTAs to push data to the `/quote` URL.
- **Mattress Detail & Custom Sizing (Phase 2):**
  - Built dynamic product pages (`/mattresses/[slug]`).
  - Created the robust `ProductConfigurator` component handling custom pricing formulas.
  - Created the standalone `/custom-size` bespoke request page.
  - Converted `/mattresses` into a Client Component to handle local React state for category filtering.
  - Resolved TypeScript strictness errors around `children` props in `WhatsAppButton`.

## [2026-09-18]
### Added
- **Foundation & Homepage (Phase 1):**
  - Initialized Next.js project with Tailwind CSS v4.
  - Configured design tokens, fonts, and core color palette.
  - Built reusable UI pieces: Navbar, Footer, Buttons.
  - Built the Homepage (`/`) with Hero, value propositions, and featured products grid.

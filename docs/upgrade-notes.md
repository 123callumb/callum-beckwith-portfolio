# Stack migration — 24 September 2026

## Subsequent single-page implementation

After reviewing the migration, Callum requested the removal of individual showcases and supplied his current leadership story and AI application areas. The homepage now covers PSSG/Capture Expense, natural-language configuration and information access, indirect data operations, condensed earlier experience and contact details. The old individual pages have been removed. The eight known old addresses permanently redirect to matching homepage sections in Next.js; static exports generate refresh pages with visible fallback links. See `docs/portfolio/redesign-brief.md` for the current design and `content/legacy-redirects.json` for the route mapping.

Validation for this phase: `npm run check`, 15 homepage/redirect/download checks, static export and all eight fallback pages, and Chrome checks at desktop, 390px and 320px. Keyboard skip navigation, section navigation, redirect landing, navigation back from a 404, reduced motion, and content with JavaScript disabled were checked. Public assets remain unchanged. No deployment, commit or push has been made.

The rest of this file records the preceding stack migration and its interim multi-page layout.

## Result

Migrated Next.js 12.3.1 / React 18.2 to Next.js 16.3.6 / React 19.3.0 and the App Router. The application now has three runtime dependencies. The previous Chakra UI, Emotion, Framer Motion, Vivus, intersection observer, timeline, icon and Sass packages were removed with their old components. Plain CSS and Server Components provide a minimal interim layout.

The original home, work listing, five project details, CV summary and contact routes remain available. All original public assets and three CV PDFs are unchanged. Shared metadata and per-page canonical URLs replace the old document/head setup. Mobile zoom is enabled, navigation uses native links, keyboard users have a skip link and visible focus, and content is present without animation or client-side fetching.

The complete single-page redesign is still a separate next phase. First confirm Callum's recent experience using [the archived portfolio notes](portfolio/README.md).

## Versions and compatibility

Versions were checked against the npm registry during the migration and are pinned in the lockfile.

- Next.js and Next.js lint rules: 16.3.6.
- React and React DOM: 19.3.0.
- Node.js runtime target: 24 LTS, with matching Node 24 type definitions.
- TypeScript: 6.0.3, strict mode.
- ESLint: 10.11.0 with current TypeScript and React Hooks rules.

TypeScript 7.0.2 was tested but is not supported by the current `typescript-eslint` parser (supported range is below 6.1). Retain TypeScript 6 until the parser supports 7. Next.js's bundled ESLint preset pulled in React/import/accessibility plugins that did not support ESLint 10; the configuration therefore uses the current Next.js and React Hooks rule packages directly rather than keeping deprecated ESLint 9.

## Validation

- Clean `npm ci` succeeded from the new lockfile, which remains uncommitted for review.
- `npm run check`: ESLint, route type generation, strict TypeScript and production build passed.
- `npm run test:smoke`: 15 checks covering nine existing routes, heading/landmark/canonical structure, image responses, three PDF downloads, unknown page/project 404s and non-public Markdown paths.
- Chrome browser checks covered every page at 1440, 390 and 320 pixels; checked horizontal overflow, image loading, keyboard skip navigation, client navigation, email links and browser exceptions. Desktop and mobile screenshots were visually inspected. This is a baseline accessibility check, not a full WCAG audit.
- Static export succeeded. All local links in 11 exported HTML files resolved, and all public assets were copied byte-for-byte. Repository Markdown is not served by the app or copied into the export.
- Original CVs were visually checked against their Markdown transcriptions; conflicting dates remain documented for Callum to resolve.
- Dependency installation reported zero known vulnerabilities at the time of the upgrade.

## Deployment boundary

No commit, push or deployment was performed. The production Vercel Git connection and dashboard overrides remain unverified. The optional Docker/Nginx configuration was updated to match the modern static export, but the container image was not built or run.

See the root README for local preview, validation, Vercel settings and optional static export commands.

## Official references

- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Vercel Node.js 24 support](https://vercel.com/changelog/node-js-24-lts-is-now-generally-available-for-builds-and-functions)

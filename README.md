# Callum Beckwith — portfolio

Single-page portfolio for [cbeckwith.co.uk](https://cbeckwith.co.uk). Next.js App Router, React, strict TypeScript, and plain CSS. The homepage introduces Callum's software leadership, practical AI work, recent experience and earlier background. Old showcase URLs lead to the relevant homepage sections.

## Start locally

Use Node.js 24 (`nvm use` if you use nvm).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build` followed by `npm start`.

## Checks

```sh
npm run check
```

Runs ESLint, route type generation, TypeScript and a production build. Next.js 16 does not run linting as part of `next build`, so keep the explicit lint step.

With the production server running, `npm run test:smoke` verifies homepage content and accessibility structure, all eight legacy redirects and their section targets, canonical metadata, true 404 responses and all four CV downloads. Set `PORTFOLIO_TEST_URL` to check a different local preview port.

ESLint uses the current Next.js and React Hooks rules directly, avoiding the older React/import plugins in `eslint-config-next`. TypeScript is pinned to 6.0.3 because the current `typescript-eslint` parser supports TypeScript below 6.1; TypeScript 7.0.2 was checked and is not supported by that parser yet. All other direct packages use the current release for their supported runtime line (Node types track Node 24).

## Content and structure

- Start with [the portfolio knowledge base](docs/portfolio/README.md) before editing copy. It contains the original biography, career history, project details, CV text and known discrepancies.
- `content/portfolio.json` holds the current profile, AI application areas, experience and condensed background. Precise metrics and the current HR product name await confirmation.
- `content/legacy-redirects.json` maps old page addresses to homepage sections.
- `docs/portfolio/sources/legacy-site-data.json` preserves the old structured content alongside the Markdown archive.
- `app/` contains Server Component pages, metadata and shared CSS.
- `public/` retains the original images, logos, favicons and PDF URLs.
- [The redesign brief](docs/portfolio/redesign-brief.md) records the phased approach and screenshot direction.

The old Chakra UI, Emotion, Framer Motion, Vivus and timeline packages have been removed. There is no UI provider or animation runtime. Project showcase pages and screenshots have been replaced by compact career and AI sections. The linked CV is explicitly labelled as historical.

## Vercel

Use the Next.js framework preset, Node.js 24, install command `npm ci`, and build command `npm run build`. Leave the output directory at the framework default. The homepage is statically prerendered. Old project, experience and contact URLs return permanent HTTP 308 redirects to homepage sections. The app has no API routes, forms, server actions or runtime data services.

The production domain was confirmed by Callum, but the Vercel project connection, production branch and dashboard overrides have not been verified. Before a future authorised deployment, check these against the settings above. No deployment has been triggered as part of this migration.

## Optional static export / Docker

```sh
npm run export-static
```

Creates `out/` with static HTML and assets. `npm run export` is an alias retained for old workflows; the removed `next export` command is no longer used. Images are served as existing assets without a runtime image optimisation service. Use a static server configured to resolve extensionless URLs to `.html` files and return `404.html` for missing routes.

Static exports cannot run Next.js HTTP redirects. The export script creates lightweight HTML refresh pages with canonical metadata and visible fallback links for the eight old addresses. On a static host these return HTML rather than HTTP 308; Vercel's normal Next.js deployment uses the permanent redirects.

After exporting, run `npm run build` again before `npm start` (the export replaces the `.next` build output).

The optional `dockerfile` builds the export with Node.js 24 and serves it with Nginx:

```sh
docker build -f dockerfile -t callum-portfolio .
docker run --rm -p 8080:80 callum-portfolio
```

## Working agreement

Stop for Callum's review after code changes. Do not commit, push or deploy unless explicitly requested.

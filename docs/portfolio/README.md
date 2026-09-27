# Portfolio knowledge base

Start here before writing biography or portfolio copy. These files preserve the old portfolio and bundled CVs before the 2026 rebuild, alongside dated updates supplied by Callum. The historical files are reference material, not an updated CV.

- **Read first: [Current positioning](current-positioning.md)** — Callum's updated account of Capture Expense, present leadership remit, desired AI focus, and facts still to confirm.

- [Profile](profile.md): biography, education, skills, interests and achievements.
- [Experience](experience.md): all nine role/client entries, responsibilities and conflicting dates.
- [Projects](projects.md): all five project descriptions, stacks, links and visual references.
- [Contact](contact.md): existing public contact details and links.
- [Assets](assets.md): retained images, logos and CVs.
- [CV transcriptions](sources/): separate text extractions of all three original PDFs.
- [2026 CV source](cv-2026-draft.html): editable HTML and [CSS](cv-2026-draft.css) based on the original two-column CV. Run `node scripts/render-cv.mjs` to export the review PDF and the site's public download. Confirm the contact number, Webur dates and historical referee details before using it outside the site.
- [Next content update](next-content-update.md): questions for Callum after the stack upgrade.
- [Redesign brief](redesign-brief.md): agreed sequence and the visual direction.

## How to use this material

The old source was captured from commit `f7015ef`; extraction date: 24 September 2026. “Current”, “Present” and “ongoing” in source material describe the old portfolio, not verified 2026 facts. Do not invent promotions, achievements, technologies, metrics, availability or dates. Keep source conflicts visible until Callum resolves them. New information explicitly supplied by Callum takes precedence; record when it was confirmed.

`content/portfolio.json` holds the current single-page rendering data: profile, professional strengths, an experience timeline and compact background. `sources/legacy-site-data.json` retains the full structured data from the earlier site, alongside the Markdown archive and CV transcriptions. Keep the relevant notes and rendering data in sync when updating facts. These docs are outside `public/` and are not website routes.

Historical source paths in these notes can be inspected in Git, for example `git show f7015ef:lib/services/CompanyManager.ts`. Existing public images and PDFs have not been replaced. The single-page design is implemented for review; further metrics and precise dates can be added when confirmed.

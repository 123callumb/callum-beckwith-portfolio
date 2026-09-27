# Redesign brief

Source: Callum's request and attached portfolio screenshot, 24 September 2026.

The supplied [design reference](design-reference.png) is preserved here for the next design session.

## Sequence

1. Preserve existing information in Markdown for future editing and LLM context.
2. Upgrade the stack and establish a small, maintainable foundation; obsolete UI dependencies may be removed.
3. Ask Callum about his current position and the last four years of work.
4. Design the complete single-page portfolio using the confirmed information.

## Direction

A professional, clean, accessible single-page portfolio with quick access to the information that matters. Treat the design as a fresh start. The reference uses a narrow centred page, strong introductory typography, generous whitespace, a restrained accent colour, rounded cards, a compact experience section, and personal touches.

The screenshot is visual inspiration. Its person, employer, job title, availability, location, reading list and music are not facts about Callum. Do not copy these or introduce maps, booking services or integrations without a content reason. Final section choices and styling come after the content update.

## Updated content direction — 24 September 2026

Callum reviewed the interim site and confirmed that the old project showcase cards should not remain the focus. The final front page should communicate his current leadership and applied AI work immediately. Refer to `current-positioning.md` before designing or writing copy.

- Lead with the personal greeting “Hi, I’m Callum”; use “I lead teams, modernise software and put AI to work” as a subtitle. Show current professional positioning in the introduction.
- Use plain section headings: “Experience”, “What I do” and “Background”, without duplicate numbered labels. Callum rejected “The story so far” as cringeworthy and “AI, software & leading a team” as unclear and needlessly repeating AI. Keep section titles descriptive rather than promotional.
- Use Capture Expense as concise evidence of taking a product from early development through growth; add a confirmed AI contribution and outcome.
- Follow with his current team remit and technical direction once the employer/product is confirmed.
- Write Background as a short connected narrative starting with the current PSSG/Cintra People HR role, then combining the CV’s engineering, delivery, mentoring and client-facing experience. Avoid a pair of old-project summaries. Keep full historical details in the Markdown archive.
- All essential professional information belongs on the front page. Dedicated work showcase pages are not required in the final design. When implementing their removal, redirect old public URLs to the relevant front-page section so existing links remain useful.
- Latest compact structure: personal introduction; career timeline including PSSG and Capture Expense; four brief strengths with AI first, followed by full-stack development, product direction and team leadership; condensed background; contact. Detailed AI configuration examples belong in the reference notes, not the main pitch.
- Callum subsequently clarified the milestone as over £1m in annual revenue and requested stronger homepage copy about his role in scaling Capture Expense. The introduction now uses “seven-figure business” in response to his request for broader wording, with the precise annual revenue measure retained in the reference notes. Credit his development leadership without implying sole responsibility for revenue, a zero-revenue starting point or multiple millions. Do not use unsupported market rankings or claims about specific AI features.

## Foundation decisions

### Implemented single-page direction

Callum explicitly requested action on the single-page direction after explaining his natural-language configuration, information access and indirect data-operation work. After subsequent feedback, the homepage contains a personal introduction, a compact career timeline with PSSG/Capture Expense and earlier development roles, four brief professional strengths, a condensed background section and contact details. No project screenshots or individual showcase pages remain in the UI.

The previous `/work` and five known project URLs redirect to `/#background`; `/cv-summary` redirects to `/#experience`; `/contact` redirects to `/#contact`. Next.js/Vercel returns permanent HTTP 308 redirects. The optional static export creates HTML refresh pages with visible fallback links for those addresses. Original public image/PDF paths are retained. The site now links to the updated 2026 CV, while the historical PDF URLs remain available.

### Technical foundation

- Next.js App Router and React, with TypeScript in strict mode.
- Server Components by default; add client-side code only for real interaction.
- Plain CSS replaces Chakra UI, Emotion and the previous animation/timeline libraries.
- Static generation for the existing routes, compatible with Vercel and a static export.
- Existing project, contact and CV-summary URLs continue working through redirects to the homepage sections described above.
- A compact page uses warm neutral colours, a chronological experience timeline and brief strengths with AI first. Callum prefers sparing pastel turquoise/green-blue accents over red/orange: muted teal for the large name, pale mint for text selection, and darker teal for small text and focus outlines to preserve readability. Following further feedback, the main button uses a deeper teal with white text so it stands out more clearly. The previous interim showcase layout has been replaced.
- Keyboard navigation, visible focus, native links, meaningful headings, image alternatives, responsive layouts and browser zoom support are baseline requirements.

## Review boundary

All changes stay local for Callum's review. Do not commit, push or deploy without an explicit request.

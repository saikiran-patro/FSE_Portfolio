# Sai Kiran Patro's portfolio

React portfolio with the existing charcoal/orange theme, professional presentation, responsive layouts, and a floating mobile dock. Personal interests are confined to About.

## Local development

- `npm install`
- `npm run dev` (defaults to http://localhost:3000)
- `npm test -- --watchAll=false --runInBand`
- `npm run build` (static production files in `build/`)

If port 3000 is busy, use `$env:PORT='3001'; npm run dev` in PowerShell.

Navigation uses URL hashes (`#home`, `#about`, `#resume`, `#projects`, `#youtube`, `#contact`) so direct links, reloads, and browser back/forward work on static hosting.

## Content

- `src/constants/portfolio.js`: contact details, navigation, skills, achievement evidence, and resume path.
- `src/components/Resume.js`: experience and education.
- `public/projects.json`: project descriptions, links, technologies, and thumbnails.
- `src/constants/ytLists.js`: YouTube videos.
- `public/Assets/Sai_Kiran_Patro_Resume.pdf`: the recruiter-facing download. The supplied India resume is preserved as the source.

## Regenerate the PDF

Run `python scripts/build_resume.py` with Python packages `reportlab` and `pypdf` installed. The script currently uses Windows Calibri fonts. It writes the one-page PDF to `output/pdf/`, validates the page count and key content, and updates the public download.

The PDF uses selectable text, conventional sections, and clickable contact/project/certification links. Claims and evidence links come from the supplied resume.

## Contact map and client projects

Run `node scripts/build_contact_map.cjs` to regenerate the local map SVG using the installed `svg-dotted-map` package. Geometry is generated ahead of time to keep first navigation responsive.

Ropana Ayurvedic Hospital is a featured freelance project in the portfolio only. Do not add it to the downloadable resume; the PDF generator explicitly checks its exclusion.

## UX notes

The outer frame is constrained to the viewport. Only the right content panel scrolls during browsing; the section header and profile stay in place. On short screens the profile can also be scrolled independently to keep its contact links reachable.

- Mobile: fixed floating dock with visible labels, current-page indicators, safe-area padding, and independent scrolling inside the content panel.
- Tablets: compact expandable profile with desktop section navigation.
- SVG cloud: local technology SVGs, AI tool icons, a pause control, reduced-motion support, and no network fetch at runtime.
- Contact: a locally cached Magic UI dotted map pointing to India, work-location preferences, email, phone, LinkedIn, copy-email action, and the existing Formspree form. Form submission requires the existing Formspree endpoint to remain active.
- Build assets stay in the current repository. No production deployment is configured by this change.

See `THIRD_PARTY_NOTICES.md` for asset and interaction sources.

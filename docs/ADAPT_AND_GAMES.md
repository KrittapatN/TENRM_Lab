# ADAPT-Nan and Game library

Both sections live in this React project and deploy with the lab website to GitHub Pages.

- `/adapt`: overview, about, research, curriculum, resources, people and contact.
- `/games`: searchable catalogue with topic and guide filters; each game has a detail page.

## Content sources

ADAPT text, partner names, 27 bilingual team entries, logo, partner artwork and curriculum diagram are based on the user-provided `ADAPT-Nan Website Architecture.docx`. Research details preserve the English source, with Thai summaries. The contact directory keeps the supplied names, including differences between the Thai and English versions that require editorial confirmation.

Game titles derive from the 11 game folders in the existing neighbouring collection. Short descriptions identify their topics; they do not invent rules, age ranges or participant counts. The game artwork is decorative and does not depict actual game components.

Two existing gameplay documents are included: `GreenroofGame_HowToPlay.pdf` and `คู่มิอเกม_final.pdf`. Their copies are under `public/games/`. Other theses, draft reports, presentations and internal documents have not been copied into the public website.

## Updating content

- `src/features/adapt/content.json`: research and bilingual team data.
- `src/features/adapt/Adapt.tsx`: project copy, curriculum and resource availability.
- `public/adapt/`: supplied branding and curriculum diagram.
- `src/features/games/content.json`: game catalogue. Add a PDF filename to `guide` only after placing that file in `public/games/`; use `null` when no public guide is available.
- `scripts/static-routes.mjs`: creates HTML entry files for ADAPT and game detail URLs. Update the route map when adding new ADAPT pages. Game detail entries are generated from the catalogue automatically.

## Still needed from the project

- Official ADAPT contact email, paper-library link and YouTube channel.
- Approved full curriculum documents, teaching videos and enrolment information.
- Field photographs and actual game cover images if desired.
- Editorial confirmation of names and curriculum details before promotion as an official project resource.

Missing resources are labelled as unavailable rather than linked to unrelated content. The older lab team and publications pages retain their existing sample content and are not used as ADAPT's directory or paper library.

## Checks

Run `npm run build` and `npm run lint`. Check every ADAPT page, the game catalogue, both guides, search and category filters, and English and Thai navigation at desktop and mobile widths. A build using `BASE_PATH=/TENRM_Lab/` matches production.

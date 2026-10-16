# TENRM Lab website — content guide

The site structure follows the "TENRM lab web" brief (Google Doc): Home, Academic, Dissemination, Social Engagement, Collaborators and Team, plus Contact. ADAPT-Nan (`/adapt`) and the Game library (`/games`) are linked from Social Engagement, Academic and the footer. The old `/research` and `/publications` addresses redirect to `/dissemination`.

## Where content lives

| Page | File | Notes |
| --- | --- | --- |
| Home photos | `src/data/home.ts` | Put images in `public/home/` and set `heroPhoto` / `photo` (e.g. `"home/fieldwork.jpg"`). Illustrations show until then. |
| Academic | `src/data/courses.ts` | Course list is empty until the lab supplies it. |
| Dissemination | `src/data/dissemination.ts` | Outputs, topic tags, map sites and partners. Each output can list `sites` (map pins) and `partners` (shown in its details). |
| Social Engagement | `src/data/engagement.ts` | STEAM EDU, Carbon School, Training, Academic service, Social impact. Add `summary`, lesson `items` and `links` as details arrive. |
| Collaborators | `src/data/collaborators.ts` | Institutions, type and where the collaboration appears on the site. |
| Team | `src/data/people.ts` | Lab leaders (PD, NRD, VA) and students. Put photos in `public/team/` and set `photo`. |

## Publication list

Built from the leaders' public Google Scholar records in October 2026 (PD and NRD profiles, and a Scholar search for VA because ResearchGate blocks automated access). Duplicate records, drafts and translations were merged. Titles link to the publisher where known, otherwise to a Google Scholar search for the title.

## To confirm with the lab

- Thai names, academic titles and photos for Nipada Ruankaew Disyatat and Varanya Aranyavalai; VA's affiliation.
- The About paragraph and research themes on Home (written from the publication record).
- Map locations: Khao Khiao training site (placed in Chon Buri), BEDO office, and which outputs belong to which site.
- Which outputs had partners other than CIRAD.
- Course list, student list, Carbon School lessons, and descriptions/photos/media for each Social Engagement activity.

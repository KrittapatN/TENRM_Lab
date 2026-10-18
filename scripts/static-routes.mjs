import { readFile, mkdir, writeFile } from 'node:fs/promises';

// Emit real HTML entries so shared links return 200 on GitHub Pages.
// Vite has already rewritten asset URLs using the configured BASE_PATH.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const games = JSON.parse(await readFile(new URL('../src/features/games/content.json', import.meta.url), 'utf8'));
const routes = {
  academic: 'Academic | TENRM Lab',
  dissemination: 'Dissemination | TENRM Lab',
  engagement: 'Social Engagement | TENRM Lab',
  collaborators: 'Collaborators | TENRM Lab',
  team: 'Team | TENRM Lab',
  contact: 'Contact | TENRM Lab',
  // Old addresses; the app redirects them to /dissemination.
  research: 'Dissemination | TENRM Lab',
  publications: 'Dissemination | TENRM Lab',
  adapt: 'ADAPT-Nan | Agroecology in Nan, Thailand',
  'adapt/about': 'About ADAPT-Nan | TENRM Lab',
  'adapt/research': 'ADAPT-Nan Research | TENRM Lab',
  'adapt/curriculum': 'ADAPT-Nan Curriculum | TENRM Lab',
  'adapt/curriculum/high-school': 'High School Learning | ADAPT-Nan',
  'adapt/curriculum/university': 'University BSc Curriculum | ADAPT-Nan',
  'adapt/resources': 'Learning Resources | ADAPT-Nan',
  'adapt/contacts': 'People and Contact | ADAPT-Nan',
  games: 'Game Library | TENRM Lab',
};
for (const game of games) routes[`games/${game.slug}`] = `${game.title.en} | TENRM Game Library`;
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
for (const [path, title] of Object.entries(routes)) {
  const directory = new URL(`../dist/${path}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html.replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`));
}
await writeFile(new URL('../dist/404.html', import.meta.url), html);
console.log(`Created ${Object.keys(routes).length} static route entries for GitHub Pages.`);

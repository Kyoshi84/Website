// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Data ostatniej aktualizacji kalendarza trafia do <lastmod> podstron /konferencje/.
const aktualizacjaKalendarza = JSON.parse(
  readFileSync(new URL('./src/data/konferencje.json', import.meta.url), 'utf8'),
).aktualizacja;

// Adres produkcyjny strony (Cloudflare Pages + darmowa subdomena Open Domains).
export default defineConfig({
  site: 'https://www.unclekyoshi.is-not-a.dev',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url.includes('/konferencje/')) {
          item.lastmod = new Date(`${aktualizacjaKalendarza}T00:00:00Z`).toISOString();
        }
        return item;
      },
    }),
  ],
});

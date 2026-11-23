// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adres produkcyjny strony (Cloudflare Pages + darmowa subdomena Open Domains).
export default defineConfig({
  site: 'https://www.unclekyoshi.is-not-a.dev',
  integrations: [sitemap()],
});

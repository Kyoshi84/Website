// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Po pierwszym wdrożeniu zmień na swój adres z Cloudflare Pages
// (np. https://jan-mejor.pages.dev) albo na własną domenę.
export default defineConfig({
  site: 'https://jan-mejor.pages.dev',
  integrations: [sitemap()],
});

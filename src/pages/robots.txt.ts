import type { APIRoute } from 'astro';

// robots.txt budowany z adresu strony (astro.config.mjs → site), więc po zmianie domeny nie trzeba go poprawiać.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

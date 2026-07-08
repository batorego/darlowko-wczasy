import { site } from '../data/site';

// Własny endpoint zamiast @astrojs/sitemap: zachowuje dotychczasowy adres
// /sitemap.xml (zgłoszony w GSC i robots.txt) i gwarantuje poprawne URL-e
// bez-www z rozszerzeniem .html.
const pages = [
  '',
  'oferta.html',
  'galeria.html',
  'informacje-praktyczne.html',
  'kontakt.html',
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${site.url}/${page}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

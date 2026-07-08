// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://darlowko-wczasy.pl',
  trailingSlash: 'never',
  // Zachowujemy istniejące, zaindeksowane URL-e z rozszerzeniem .html
  // (oferta.html, galeria.html, kontakt.html) — zero przekierowań.
  build: {
    format: 'file',
  },
});

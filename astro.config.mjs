import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL — db.ssu.ac.kr granted by the university (2026-07).
// DNS: ask SSU 정보화팀 for a CNAME record db.ssu.ac.kr → <org>.github.io,
// then set the same custom domain in the GitHub Pages settings.
export default defineConfig({
  site: 'https://db.ssu.ac.kr',
  trailingSlash: 'never',
  // 'file' emits dist/people.html (served at /people) instead of
  // dist/people/index.html (which GitHub Pages would 301 to /people/).
  // Keeps canonical/hreflang URLs identical to the finally-served URLs.
  // NOTE: routes that ALSO have a same-named directory (members/, ko/) get a
  // defensive X/index.html copy from scripts/postbuild.mjs so any host
  // resolution order serves them.
  build: { format: 'file' },
  integrations: [
    sitemap({
      // the SQL-console easter egg stays out of search
      filter: (page) => !page.includes('/console'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ko: 'ko' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: { prefixDefaultLocale: false },
  },
});

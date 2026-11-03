import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pages removed in the 2026-11 redesign → where their content lives now.
// Each gets an EN and a /ko redirect so old links keep working.
const moved = {
  people: 'members',
  'members/milandu-boussougou': 'members',
  'members/seonghun-hwang': 'members',
  alumni: 'members',
  news: '',
  software: 'research',
  join: '',
};
const redirects = Object.fromEntries(
  Object.entries(moved).flatMap(([from, to]) => [
    [`/${from}`, `/${to}`],
    [`/ko/${from}`, to ? `/ko/${to}` : '/ko'],
  ]),
);

export default defineConfig({
  // db.ssu.ac.kr is a CNAME to ssu-database-lab.github.io (public/CNAME).
  site: 'https://db.ssu.ac.kr',
  trailingSlash: 'never',
  // 'file' emits dist/members.html, served at /members without a 301 to /members/.
  // scripts/postbuild.mjs handles the X.html + X/ collisions this creates.
  build: { format: 'file' },
  redirects,
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page.endsWith(from)),
      i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko' } },
    }),
  ],
});

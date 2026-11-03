/* English lives at /…, Korean at /ko/…. UI text is in en.ts / ko.ts;
 * data files (src/data/) carry their own _en / _kr fields. */

import en, { type Dict } from './en';
import ko from './ko';

export type Lang = 'en' | 'ko';

const dicts: Record<Lang, Dict> = { en, ko };

/** UI text for a language: strings(lang).home.title */
export const strings = (lang: Lang): Dict => dicts[lang];

/** Fill {name}-style placeholders: fmt('Prof. {name}', { name: 'Park' }). */
export const fmt = (text: string, vars: Record<string, string>): string =>
  text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);

export const nav: { route: string; key: keyof Dict['nav'] }[] = [
  { route: '/professor', key: 'professor' },
  { route: '/members', key: 'members' },
  { route: '/research', key: 'research' },
  { route: '/publications', key: 'publications' },
  { route: '/patents', key: 'patents' },
  { route: '/gallery', key: 'gallery' },
];

/** getStaticPaths for pages in src/pages/[...lang]/: English at /…, Korean at /ko/…. */
export const langPaths = () => [
  { params: { lang: undefined }, props: { lang: 'en' as Lang } },
  { params: { lang: 'ko' }, props: { lang: 'ko' as Lang } },
];

/** '/members' → '/ko/members' for Korean. */
export function localize(lang: Lang, route: string): string {
  if (lang === 'en') return route;
  return route === '/' ? '/ko' : `/ko${route}`;
}

/** Served pathname → locale-less route ('/ko/members.html' → '/members'). */
export function routeOf(pathname: string): string {
  const path = pathname.replace(/\/+$/, '').replace(/\.html$/, '').replace(/\/index$/, '') || '/';
  if (path === '/ko') return '/';
  return path.startsWith('/ko/') ? path.slice(3) : path;
}

/* Stop the build if en.ts and ko.ts drift apart (a key or list item
 * added to one file but not the other). */
function missing(a: unknown, b: unknown, path: string): string[] {
  if (typeof a !== 'object' || a === null) return [];
  return Object.entries(a).flatMap(([key, value]) => {
    const here = path ? `${path}.${key}` : key;
    const other = (b as Record<string, unknown> | null)?.[key];
    return other === undefined ? [here] : missing(value, other, here);
  });
}
const drift = [...missing(en, ko, '').map((k) => `ko.ts lacks ${k}`), ...missing(ko, en, '').map((k) => `en.ts lacks ${k}`)];
if (drift.length) throw new Error(`i18n: ${drift.join('; ')}`);

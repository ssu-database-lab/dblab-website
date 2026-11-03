/* ============================================================
 * i18n helpers — Database Lab, Soongsil University
 *
 *   t(lang, key)             translated string (en fallback → key)
 *   localizePath(lang, path) '/people' → '/ko/people' when lang==='ko'
 *   stripLocale(path)        '/ko/people' → '/people' (route sans locale)
 *
 * English lives at /…, Korean at /ko/… (prefixDefaultLocale: false).
 * ============================================================ */

import { ui, type Lang, type UiKey } from './ui';

export type { Lang, UiKey };

/**
 * Look up a UI string. Unknown keys fall back to the English
 * dictionary, then to the key itself (so a missing translation
 * never crashes a build — it just shows the key).
 */
export function t(lang: Lang, key: UiKey | (string & {})): string {
  const dict: Record<string, string> = ui[lang] ?? ui.en;
  return dict[key] ?? (ui.en as Record<string, string>)[key] ?? key;
}

/**
 * Prefix a locale-less route with the language segment when needed.
 * Accepts routes like '/', '/people', '/publications?tag=vishing'.
 */
export function localizePath(lang: Lang, path: string): string {
  if (lang !== 'ko') return path;
  if (path === '/' || path === '') return '/ko';
  return path.startsWith('/') ? `/ko${path}` : `/ko/${path}`;
}

/**
 * Normalize a pathname to its clean served route: no trailing slash
 * (trailingSlash: 'never') and no build artifacts from
 * `build.format: 'file'` ('/people.html' → '/people', '/ko.html' → '/ko',
 * '/index.html' → '/').
 */
export function normalizePath(pathname: string): string {
  return (
    pathname
      .replace(/\/+$/, '')
      .replace(/\.html$/, '')
      .replace(/\/index$/, '') || '/'
  );
}

/**
 * Remove a trailing slash / '.html' suffix and the /ko locale prefix,
 * returning the canonical locale-less route.
 */
export function stripLocale(pathname: string): string {
  const path = normalizePath(pathname);
  if (path === '/ko') return '/';
  if (path.startsWith('/ko/')) return path.slice(3);
  return path;
}

/** Detect the locale of a pathname ('/ko/…' → 'ko', else 'en'). */
export function langFromPath(pathname: string): Lang {
  const path = normalizePath(pathname);
  return path === '/ko' || path.startsWith('/ko/') ? 'ko' : 'en';
}

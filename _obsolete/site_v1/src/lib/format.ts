/* ============================================================
 * Formatting helpers — Database Lab, Soongsil University
 *
 *   LAB_NAMES                canonical lab-member names (EN + KR)
 *   formatAuthors(authors)   safe HTML author line, lab members bolded
 *   formatDate(iso, lang)    'Jul 10, 2026' / '2026.07.10'
 * ============================================================ */

import type { Lang } from '../i18n/ui';

/**
 * Lab member names used to bold authors in publication lists
 * (per docs/build-contract.md). English and Korean renderings both
 * listed so entries match however the paper was published.
 */
export const LAB_NAMES: readonly string[] = [
  'Dong-Joo Park',
  '박동주',
  'Milandu Keith Moussavou Boussougou',
  'SeongHun Hwang',
  '황성훈',
  'Minhyuk Song',
  'Bongchan Jeong',
  'YuSeok Hwang',
] as const;

/** Escape a string for safe interpolation into HTML text content. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Case-insensitive containment check (names may carry suffixes like "(corresponding)"). */
function matchesLabName(author: string, names: readonly string[]): boolean {
  const haystack = author.trim().toLowerCase();
  return names.some((name) => {
    const needle = name.trim().toLowerCase();
    return haystack === needle || haystack.includes(needle);
  });
}

/**
 * Render an author list as a safe HTML string, wrapping lab members
 * in <b>…</b>. Authors are joined with ', ' in both languages
 * (publication author lines are never translated).
 *
 * Use with Astro's set:html:
 *   <p class="pub-au" set:html={formatAuthors(pub.authors, lang)} />
 *
 * An optional third argument lets callers extend the match list
 * (e.g. to bold alumni who were members when a paper was published).
 */
export function formatAuthors(
  authors: string[],
  _lang: Lang = 'en',
  names: readonly string[] = LAB_NAMES,
): string {
  return authors
    .map((author) => {
      const safe = escapeHtml(author.trim());
      return matchesLabName(author, names) ? `<b>${safe}</b>` : safe;
    })
    .join(', ');
}

const EN_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

/**
 * Format an ISO date string for display. Accepts full dates
 * ('2026-07-10'), year-months ('2026-07'), or bare years ('2026').
 *
 *   en: 'Jul 10, 2026' · 'Jul 2026' · '2026'
 *   ko: '2026.07.10'  · '2026.07'  · '2026'
 *
 * Parsed by string splitting (never via Date) to avoid timezone
 * off-by-one-day bugs in static builds.
 */
export function formatDate(iso: string, lang: Lang = 'en'): string {
  const [yearRaw, monthRaw, dayRaw] = iso.trim().split('-');
  const year = yearRaw ?? '';
  const month = monthRaw ? Number.parseInt(monthRaw, 10) : NaN;
  const day = dayRaw ? Number.parseInt(dayRaw, 10) : NaN;

  if (!year || Number.isNaN(month) || month < 1 || month > 12) return year || iso;

  if (lang === 'ko') {
    const mm = String(month).padStart(2, '0');
    if (Number.isNaN(day)) return `${year}.${mm}`;
    return `${year}.${mm}.${String(day).padStart(2, '0')}`;
  }

  const monthName = EN_MONTHS[month - 1];
  if (Number.isNaN(day)) return `${monthName} ${year}`;
  return `${monthName} ${day}, ${year}`;
}

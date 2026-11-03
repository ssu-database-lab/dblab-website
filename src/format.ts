import type { Lang } from './i18n';

/** 'A, B, C', with ', et al.' when the list is cut short. */
export const formatAuthors = (authors: string[], etal = false): string =>
  authors.join(', ') + (etal ? ', et al.' : '');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2026-07-01' → 'Jul 2026' / '2026.07'. Split by hand to avoid timezone shifts. */
export function formatMonth(iso: string, lang: Lang): string {
  const [y, m] = iso.split('-');
  if (!m) return y;
  return lang === 'ko' ? `${y}.${m}` : `${MONTHS[Number(m) - 1]} ${y}`;
}

/** '2024-02-20' → 'Feb 20, 2024' / '2024.02.20'. */
export function formatDay(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-');
  return lang === 'ko' ? `${y}.${m}.${d}` : `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

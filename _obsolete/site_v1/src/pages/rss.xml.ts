/**
 * RSS feed of lab news — one bilingual channel (EN item text first,
 * Korean in the description body), newest first, built from news.json.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import news from '../data/news.json';

const TAG_LABEL: Record<string, string> = {
  paper: 'Paper',
  award: 'Award',
  project: 'Project',
  lab: 'Lab',
  patent: 'Patent',
  talk: 'Talk',
};

export function GET(context: APIContext) {
  const site = context.site ?? new URL('https://db.ssu.ac.kr');
  return rss({
    title: 'Database Lab · Soongsil University — News',
    description:
      'Papers, awards, funded projects, and lab news from the Database Lab (데이터베이스연구실) at Soongsil University.',
    site,
    items: [...news]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((item) => ({
        title: `[${TAG_LABEL[item.tag] ?? item.tag}] ${item.text_en}`,
        description: `${item.text_en}\n\n${item.text_kr}`,
        pubDate: new Date(`${item.date}T09:00:00+09:00`),
        link: new URL('/news', site).href,
      })),
    customData: '<language>en</language>',
  });
}

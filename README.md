# DBLab · Soongsil University — Website

Website of DBLab (Prof. Dong-Joo Park), School of Computer Science and
Engineering, Soongsil University. Static site, English at `/…` and Korean at `/ko/…`,
deployed to GitHub Pages at <https://db.ssu.ac.kr> on every push to `main`.

Built with [Astro 5](https://astro.build), [Tailwind CSS 4](https://tailwindcss.com),
and [DaisyUI 5](https://daisyui.com). No client-side JavaScript.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

## Where to edit

| What | File |
| --- | --- |
| Page text (headings, intro, footer address) | `src/i18n/en.ts` and `src/i18n/ko.ts` |
| Members, alumni | `src/data/members.json`, `src/data/alumni.json` |
| Papers | `src/data/publications.bib` (see the comment at its top) |
| Patents | `src/data/patents.json` |
| News on the home page | `src/data/news.json` (newest six are shown) |
| Research areas, figures | `src/data/research.ts`, `public/assets/research/` |
| Funded projects | `src/data/projects.json` |
| Colors, fonts | `src/styles/site.css` (DaisyUI theme) |

`en.ts` and `ko.ts` must have the same keys. The editor marks a missing key in
`ko.ts`, and `npm run build` stops with `i18n: ko.ts lacks …` if they differ.
Data files carry both languages in `_en` / `_kr` fields; papers are listed once,
under their original titles.

To add a paper, copy its BibTeX from DBLP or Google Scholar into
`publications.bib`. LaTeX in the export (`{\"u}`, `Sang{-}Won`, `\&`, `--`) is
converted for display by `src/bib.ts`.

## Layout

```text
src/
├── pages/
│   ├── [...lang]/   one file per page; each builds /page and /ko/page
│   └── 404.astro
├── i18n/            en.ts, ko.ts (UI text), index.ts (helpers, nav, langPaths)
├── data/            content (publications.bib, JSON, research.ts)
├── layouts/         Base.astro: head, header, footer
├── bib.ts           BibTeX reader for publications.bib
├── format.ts        author lists, dates
└── styles/          site.css
```

Old URLs (`/people`, `/professor`, `/alumni`, `/news`, `/gallery`, `/software`,
`/patents`, `/join`) redirect to their new pages; see `astro.config.mjs`.
`scripts/postbuild.mjs` copies `X.html` to `X/index.html` where a route and a
directory share a name, so every host serves them.

The previous design (2026-07 to 2026-11) is kept in `_obsolete/site_v1/`.

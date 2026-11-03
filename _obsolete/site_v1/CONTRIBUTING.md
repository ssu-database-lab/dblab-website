# Contributing to the DB Lab website

Welcome! If you just joined the lab: updating this website is one JSON edit and one pull
request. You do not need to touch any Astro/HTML/CSS to add a paper, a news item, or a
member — all content lives in `src/data/`.

## One-time setup

```bash
git clone <repo-url> && cd dblab-website
npm install
npm run dev        # open http://localhost:4321 — pages hot-reload as you edit
```

## Ground rules (please read once)

- **Only publish verified facts.** If you are not sure (award claims, thesis titles,
  someone's current job), check the lab's internal content inventory first (kept outside
  this repository — ask the site maintainer) — anything flagged ⚠️ there needs the
  professor's confirmation before it goes on the site.
- **Never** add: students' personal phone numbers or other private info, and no award
  claims beyond the verified KIPS/ACK 2021 paper award unless newly verified.
- **Publication titles are never translated.** Enter them exactly as published (Korean
  papers keep their Korean titles).
- English at `/…`, Korean at `/ko/…`: data files carry `*_en` / `*_kr` field pairs where
  wording differs. If you can only write one language, fill `_en` and leave `_kr` the
  same or ask a labmate to translate — the site falls back to `_en` when `_kr` is missing.

## Add a paper in one PR (the common case)

Say your paper just got accepted. Here is the whole process:

**1. Create a branch**

```bash
git checkout -b add-paper-tkde2026
```

**2. Edit `src/data/publications.json`** — it is an array sorted **newest first**. Add
your entry at the position matching its year (top of its year group). A filled example
with every field:

```json
{
  "id": "access2025-bt",
  "year": 2025,
  "type": "IJ",
  "title": "Enhancing Korean Voice Phishing Detection with Back-Translation Data Augmentation and SMOTE",
  "authors": ["Milandu Keith Moussavou Boussougou", "Dong-Joo Park"],
  "venue": "IEEE Access 13:37946–37965",
  "venue_short": "IEEE Access",
  "doi": "10.1109/ACCESS.2025.3545250",
  "url": null,
  "kci": null,
  "citations": 12,
  "tags": ["vishing"],
  "award": null,
  "pdf": null,
  "code": null,
  "dataset": null,
  "bibtex": "@article{boussougou2025enhancing,\n  author  = {Boussougou, Milandu Keith Moussavou and Park, Dong-Joo},\n  title   = {Enhancing Korean Voice Phishing Detection with Back-Translation Data Augmentation and SMOTE},\n  journal = {IEEE Access},\n  volume  = {13},\n  pages   = {37946--37965},\n  year    = {2025},\n  doi     = {10.1109/ACCESS.2025.3545250}\n}",
  "review": null
}
```

**Field cheat-sheet**

| Field | What to put there |
|---|---|
| `id` | short unique slug: venue + year + hint, e.g. `"tkde2026-ftl"` |
| `year` | publication year (number) |
| `type` | `"IJ"` intl journal · `"IC"` intl conf · `"DJ"` domestic journal · `"DC"` domestic conf · `"DS"` dataset · `"UR"` under review / in prep |
| `title` | exact published title — never translated, keep `[sic]` typos if in the original |
| `authors` | array, published order, full names. Lab members are bolded automatically by name matching — use the same spelling as in `src/lib/format.ts` (`LAB_NAMES`) |
| `venue` | full venue string incl. volume/pages, e.g. `"IEEE Access 13:37946–37965"` |
| `venue_short` | short name shown in chips, e.g. `"IEEE Access"`, `"KCC 2025"` |
| `doi` | bare DOI (`"10.1109/…"`) or `null` — no `https://doi.org/` prefix |
| `url` / `kci` | landing-page URL / KCI article ID (`"ART00…"`) for domestic papers; else `null` |
| `citations` | citation count (number) or `null` — update occasionally, don't chase it |
| `tags` | 1–2 from the vocabulary below |
| `award` | short verified award string, e.g. `"KIPS/ACK 2021 Paper Award"`, else `null` |
| `pdf` / `code` / `dataset` | URLs or `null` |
| `bibtex` | real BibTeX string for IJ/IC entries with a DOI (`\n` for newlines); `null` otherwise |
| `review` | `null`, or a short note if a detail still needs verification, e.g. `"authorship incomplete — confirm"` — renders a subtle "under verification" mark |

**Tag vocabulary** (use these exact strings, nothing else):

- `flash-ftl` — flash storage, FTLs, B-trees on flash
- `forensics` — file/DB recovery, anti-forensics, SQLite forensics
- `indexing` — index structures, kNN / distance browsing queries
- `vishing` — voice-phishing detection, KorCCVi
- `nlp-metadata` — NER, copyright-metadata extraction, LLM pipelines
- `systems-other` — everything else (blockchain, IoT, misc systems)

**3. Check it renders**

```bash
npm run dev      # look at /publications — your entry should appear under its year
npm run build    # must finish without errors (JSON syntax mistakes fail here)
```

**4. Open the PR** — title like `Add paper: TKDE 2026 (flash-ftl)`. One paper per PR
keeps review trivial.

Bonus: the same paper is usually also a news item — add one in the same PR (below).

## Add a news item

Edit `src/data/news.json` (array, newest first):

```json
{
  "date": "2026-07-10",
  "tag": "paper",
  "text_en": "Two papers accepted at IC-EEECS 2026.",
  "text_kr": "IC-EEECS 2026에 논문 2편이 채택되었습니다."
}
```

`tag` is one of `"paper"`, `"award"`, `"project"`, `"dataset"`, `"lab"`. If you only know
the month, use the first of the month (`"2026-07-01"`). Keep texts to one sentence.

## Add or update a member

Edit `src/data/members.json` → the `current` array:

```json
{
  "name_en": "Gil-Dong Hong",
  "name_kr": "홍길동",
  "role_en": "M.S. Student",
  "role_kr": "석사과정",
  "photo": "/assets/people/gildong-hong.jpg",
  "email": "gildong@soongsil.ac.kr",
  "interests_en": "Flash storage, database forensics",
  "interests_kr": "플래시 스토리지, 데이터베이스 포렌식",
  "links": { "github": "https://github.com/…", "orcid": null, "dblp": null, "linkedin": null },
  "unverified": false
}
```

- Photo: drop a square-ish JPG (≥ 400×400, < 300 KB) into `public/assets/people/`,
  lowercase-hyphenated filename. No photo? Set `"photo": null` — the site renders an
  initial avatar automatically.
- Academic email only; never add phone numbers.
- When someone graduates, move them conceptually to `src/data/alumni.json`
  (`name_kr`, `name_en`, `degree` `"PhD"`/`"MS"`, `year`, `thesis_kr`, `thesis_en`,
  `now`, `unverified`) and remove them from `current`.

## Adding gallery photos

Adding photos to an existing event is a **file drop — no JSON editing**.

**1. Find the event's `id`** in `src/data/gallery.json` (e.g. `kcc2025`, `ack2021`).
Every event has a matching folder under `src/assets/gallery/`.

**2. Drop the image files into `src/assets/gallery/<event-id>/`**, e.g.
`src/assets/gallery/kcc2025/poster-session.jpg`. That's it — the build discovers them
automatically and renders them as grid tiles (newest event first, files in filename
order within an event — prefix with `01-`, `02-`, … if the order matters).

- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp` — **lowercase extensions only**
  (the build's file matching is case-sensitive; rename `IMG_1234.JPG` → `img-1234.jpg`).
- Keep files lean: longest side ≤ 1600 px, ideally < 500 KB — tiles open full-size in
  a lightbox, so what you drop is what visitors download.
- Files must sit inside an event folder; images placed directly in
  `src/assets/gallery/` are ignored.
- Auto-discovered photos get generated alt text ("<event title> — photo N"). If a photo
  deserves a real description (who/what is in it), add an explicit entry to the event's
  `photos` array instead (see below) — explicit entries carry curated bilingual alt text.

**Adding a new event** — append an object to `src/data/gallery.json` (array is sorted
**newest first**) and create its photo folder:

```json
{
  "id": "kcc2027",
  "date": "2027-06",
  "title_en": "KCC 2027 — Korea Computer Congress",
  "title_kr": "KCC 2027 — 한국컴퓨터종합학술대회",
  "venue": "Jeju",
  "type": "conference",
  "note_en": "One-sentence note on what happened.",
  "note_kr": "무슨 일이 있었는지 한 문장으로.",
  "photos": []
}
```

```bash
mkdir src/assets/gallery/kcc2027 && touch src/assets/gallery/kcc2027/.gitkeep
```

- `id` is the folder name: short, lowercase, letters+digits (venue + year, e.g.
  `"kcc2027"`, `"iceeecs2026"`). Must be unique.
- `date` is year-month (`"YYYY-MM"`); `type` is one of `"conference"`, `"workshop"`,
  `"award"`, `"lab"`; `venue` is a short place name (`"Jeju"`) or `""` when unknown.
- `photos` usually stays `[]` (drop files in the folder instead). Explicit entries are
  for photos that need curated alt text and render after the auto-discovered ones:

```json
"photos": [
  {
    "src": "/assets/gallery/2025-06-kcc-poster.jpg",
    "alt_en": "Lab members at the KCC 2025 poster session",
    "alt_kr": "KCC 2025 포스터 세션의 연구실 구성원들"
  }
]
```

  (for explicit entries the image lives in `public/assets/gallery/` and **both** alt
  texts are required).
- An event with no photos at all shows a "Photos coming soon / 사진 준비 중" tile —
  adding the event first and the photos later is perfectly fine.
- Get people's OK before publishing a photo of them; never include anything that reveals
  private info (badges with phone numbers, screens with credentials, …).

## Everything else

- Funded projects → `src/data/projects.json` · courses → `src/data/courses.json` ·
  datasets/software → `src/data/software.json`. Schemas follow the same pattern; copy an
  existing entry and adjust. The authoritative schema definitions live in the internal
  build contract (kept outside this repository — ask the site maintainer).
- Research-area copy → `src/data/research.ts` (TypeScript, four areas — edit prose only).
- Layout/design changes: talk to whoever maintains the site first; the internal design
  contract explains the token system and page structure.

## PR checklist

- [ ] `npm run build` passes locally
- [ ] JSON is valid (no trailing commas — the build catches this)
- [ ] Newest-first ordering preserved
- [ ] Facts verified (or `review` / `unverified` flag set)
- [ ] Both `_en` and `_kr` fields filled where they exist

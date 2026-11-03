/* Reads src/data/publications.bib. Handles what DBLP and Google Scholar
 * exports contain: {…} and "…" values, nested braces, LaTeX accents, \&,
 * {-}, and -- / ---. @string macros and # concatenation are not supported. */

export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
}

export interface Publication {
  key: string;
  year: number;
  title: string;
  authors: string[];
  etal: boolean;
  venue: string;
  award?: string;
  links: [label: string, href: string][];
}

/** Index of the brace that closes the one at `open`. */
function closingBrace(s: string, open: number): number {
  let depth = 0;
  for (let i = open; i < s.length; i++) {
    if (s[i] === '\\') i++;
    else if (s[i] === '{') depth++;
    else if (s[i] === '}' && --depth === 0) return i;
  }
  throw new Error(`publications.bib: unclosed brace near "${s.slice(open, open + 40)}"`);
}

function readFields(body: string): Record<string, string> {
  const fields: Record<string, string> = {};
  let i = 0;
  while (i < body.length) {
    const m = /^[\s,]*([\w-]+)\s*=\s*/.exec(body.slice(i));
    if (!m) break;
    i += m[0].length;
    let value: string;
    if (body[i] === '{') {
      const end = closingBrace(body, i);
      value = body.slice(i + 1, end);
      i = end + 1;
    } else if (body[i] === '"') {
      let end = i + 1;
      for (let depth = 0; end < body.length; end++) {
        if (body[end] === '\\') end++;
        else if (body[end] === '{') depth++;
        else if (body[end] === '}') depth--;
        else if (body[end] === '"' && depth === 0) break;
      }
      value = body.slice(i + 1, end);
      i = end + 1;
    } else {
      const bare = /^[^,\s]+/.exec(body.slice(i))?.[0] ?? '';
      value = bare;
      i += bare.length;
    }
    fields[m[1].toLowerCase()] = value;
  }
  return fields;
}

export function parseBib(src: string): BibEntry[] {
  const text = src.replace(/^[ \t]*%.*$/gm, '');
  const entries: BibEntry[] = [];
  let at = text.indexOf('@');
  while (at !== -1) {
    const head = /^@(\w+)\s*\{/.exec(text.slice(at));
    if (!head) throw new Error(`publications.bib: cannot read "${text.slice(at, at + 40)}"`);
    const open = at + head[0].length - 1;
    const close = closingBrace(text, open);
    const type = head[1].toLowerCase();
    if (!['comment', 'string', 'preamble'].includes(type)) {
      const body = text.slice(open + 1, close);
      const comma = body.indexOf(',');
      entries.push({ type, key: body.slice(0, comma).trim(), fields: readFields(body.slice(comma + 1)) });
    }
    at = text.indexOf('@', close);
  }
  return entries;
}

const ACCENTS: Record<string, string> = {
  '`': '̀', "'": '́', '^': '̂', '~': '̃', '=': '̄', u: '̆',
  '.': '̇', '"': '̈', r: '̊', H: '̋', v: '̌', c: '̧', k: '̨',
};
const LETTERS: Record<string, string> = {
  ss: 'ß', ae: 'æ', AE: 'Æ', oe: 'œ', OE: 'Œ', aa: 'å', AA: 'Å', o: 'ø', O: 'Ø', l: 'ł', L: 'Ł', i: 'i', j: 'j',
};

/** LaTeX-flavoured BibTeX text → plain Unicode. */
export function latexToText(s: string): string {
  return s
    .replace(/\\([`'^~=".])\s*\{?\s*\\?([A-Za-z])\s*\}?/g, (_, a: string, ch: string) => ch + ACCENTS[a])
    .replace(/\\([uvHcrk])\s*\{\s*\\?([A-Za-z])\s*\}/g, (_, a: string, ch: string) => ch + ACCENTS[a])
    .replace(/\\(ss|ae|AE|oe|OE|aa|AA|o|O|l|L|i|j)(?![A-Za-z])\s*/g, (_, l: string) => LETTERS[l])
    .replace(/(?<!\\)\$/g, '')
    .replace(/\\([&%$#_{}])/g, '$1')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/(?<!\\)~/g, ' ')
    .replace(/\\[A-Za-z]+\s*/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .normalize('NFC');
}

/** Split an author field on top-level "and" (braces protect corporate names). */
function splitAuthors(field: string): string[] {
  const names: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < field.length; i++) {
    if (field[i] === '{') depth++;
    else if (field[i] === '}') depth--;
    else if (depth === 0 && /^\sand\s/i.test(field.slice(i, i + 5))) {
      names.push(field.slice(start, i));
      start = i + 5;
    }
  }
  names.push(field.slice(start));
  return names.map((n) => n.trim()).filter(Boolean);
}

/** "Park, Dong-Joo" → "Dong-Joo Park"; "First Last" is kept as written. */
const displayName = (name: string) => {
  const [last, first] = latexToText(name).split(/,\s*/);
  return first ? `${first} ${last}` : last;
};

const raw = (v?: string) => v?.replace(/\\([&%$#_{}~])/g, '$1').trim() || undefined;

function venueOf(type: string, f: Record<string, string | undefined>): string {
  const note = f.note ? ` (${f.note})` : '';
  switch (type) {
    case 'article': {
      let v = f.journal ?? '';
      if (f.volume) v += ` ${f.volume}`;
      if (f.number) v += `(${f.number})`;
      if (f.pages) v += `:${f.pages}`;
      if (f.eid) v += `, Article ${f.eid}`;
      return v + note;
    }
    case 'inproceedings':
    case 'conference': {
      const volNo = [f.volume && `vol. ${f.volume}`, f.number && `no. ${f.number}`].filter(Boolean).join(' ');
      return [f.booktitle, f.address, volNo, f.pages && `pp. ${f.pages}`].filter(Boolean).join(', ') + note;
    }
    case 'unpublished':
      return f.note ?? '';
    default:
      return (f.howpublished ?? f.journal ?? f.booktitle ?? f.publisher ?? '') + note;
  }
}

export function toPublication(e: BibEntry): Publication {
  const text: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(e.fields)) text[k] = latexToText(v);
  const year = Number.parseInt(text.year ?? '', 10);
  if (!text.title || Number.isNaN(year)) throw new Error(`publications.bib: ${e.key} needs a title and a year`);

  const names = e.fields.author ? splitAuthors(e.fields.author) : [];
  const etal = names.at(-1)?.toLowerCase() === 'others';
  const doi = raw(e.fields.doi)?.replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
  const kci = raw(e.fields.kci);
  const links: [string, string | undefined][] = [
    ['DOI', doi && `https://doi.org/${doi}`],
    ['Link', !doi ? raw(e.fields.url) : undefined],
    ['PDF', raw(e.fields.pdf)],
    ['KCI', kci && `https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=${kci}`],
    ['Dataset', raw(e.fields.dataset)],
  ];

  return {
    key: e.key,
    year,
    title: text.title,
    authors: (etal ? names.slice(0, -1) : names).map(displayName),
    etal,
    venue: venueOf(e.type, text),
    award: text.award,
    links: links.filter((l): l is [string, string] => Boolean(l[1])),
  };
}

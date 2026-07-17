/**
 * Post-build de-collision pass.
 *
 * `build.format: 'file'` + dynamic routes emit sibling pairs like
 * `members.html` NEXT TO `members/` (detail pages) and `ko.html` NEXT TO
 * `ko/`. Whether `/members` then serves the .html file or 404s depends on
 * the host's file-vs-directory tie-break order, which differs between
 * servers and cannot be verified on GitHub Pages before launch.
 *
 * Fix: copy every colliding `X.html` to `X/index.html` so BOTH resolution
 * orders serve identical bytes (the canonical tag inside already points to
 * the extensionless URL, so SEO is unaffected).
 */
import { readdirSync, statSync, existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;

let copies = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      const sibling = p + '.html';
      if (existsSync(sibling)) {
        const idx = join(p, 'index.html');
        copyFileSync(sibling, idx);
        copies++;
        console.log(`[postbuild] ${sibling.replace(DIST, 'dist')} -> ${idx.replace(DIST, 'dist')}`);
      }
      walk(p);
    }
  }
};

walk(DIST);
console.log(`[postbuild] de-collided ${copies} route(s)`);

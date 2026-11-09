// Writes one prerendered page per language, built from dist/index.html
// (see src/entry-server.tsx): dist/index.html (ru) and dist/en/index.html.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const distDir = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);

const { renderPages } = await import(new URL('entry-server.js', ssrDir).href);

const ROOT = '<div id="root"></div>';
const HTML_LANG = /<html lang="[^"]*">/;
const TITLE = /<title>[\s\S]*?<\/title>/;
const DESCRIPTION = /(<meta\s+name="description"\s+content=")[^"]*(")/;

const template = await readFile(new URL('index.html', distDir), 'utf8');

for (const [name, found] of Object.entries({
  '#root': template.includes(ROOT),
  '</head>': template.includes('</head>'),
  '<html lang>': HTML_LANG.test(template),
  '<title>': TITLE.test(template),
  'meta description': DESCRIPTION.test(template),
})) {
  if (!found) throw new Error(`prerender: dist/index.html has no ${name}`);
}

const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

for (const page of renderPages()) {
  const file = new URL(page.file, distDir);
  // Replacer functions, so `$` in the text is never read as a pattern.
  const pageHtml = template
    .replace(HTML_LANG, () => `<html lang="${page.lang}">`)
    .replace(TITLE, () => `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      DESCRIPTION,
      (_, start, end) => `${start}${escapeHtml(page.description)}${end}`
    )
    .replace('</head>', () => `${page.head}\n  </head>`)
    .replace(ROOT, () => `<div id="root">${page.html}</div>`);

  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, pageHtml);
  console.log(`prerender: dist/${page.file}`);
}

await rm(ssrDir, { recursive: true, force: true });

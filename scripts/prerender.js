// Injects the server-rendered CV into dist/index.html (see src/entry-server.tsx).
import { readFile, rm, writeFile } from 'node:fs/promises';

const distDir = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);
const indexFile = new URL('index.html', distDir);

const { render } = await import(new URL('entry-server.js', ssrDir).href);
const { html, head } = render('/');

const ROOT = '<div id="root"></div>';
const template = await readFile(indexFile, 'utf8');

if (!template.includes(ROOT) || !template.includes('</head>')) {
  throw new Error('prerender: dist/index.html has no empty #root or </head>');
}

await writeFile(
  indexFile,
  template
    .replace('</head>', `${head}\n  </head>`)
    .replace(ROOT, `<div id="root">${html}</div>`)
);
await rm(ssrDir, { recursive: true, force: true });

console.log('prerender: dist/index.html');

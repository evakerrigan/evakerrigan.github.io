import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from '@/app/provider';
import { routes } from '@/app/router';
import { content } from '@/features/cv/data';
import { LANG_PATH, LANGS, type Lang } from '@/features/cv/i18n';
import { buildLangLinks, buildPersonJsonLd } from '@/features/cv/seo';

const render = (lang: Lang) => {
  const path = LANG_PATH[lang];
  const router = createMemoryRouter(routes, { initialEntries: [path] });

  const html = renderToString(
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );

  // `<` is escaped so the JSON can't close the <script> tag early.
  const jsonLd = JSON.stringify(buildPersonJsonLd(lang)).replace(
    /</g,
    '\\u003c'
  );
  const head = [
    buildLangLinks(lang),
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');

  return {
    // '/' -> 'index.html', '/en/' -> 'en/index.html'
    file: `${path.slice(1)}index.html`,
    lang,
    title: content[lang].meta.title,
    description: content[lang].meta.description,
    html,
    head,
  };
};

/**
 * Build-time render used by scripts/prerender.js: one HTML file per language,
 * with the CV text inside, so bots that don't run JavaScript still see it.
 */
export const renderPages = () => LANGS.map(render);

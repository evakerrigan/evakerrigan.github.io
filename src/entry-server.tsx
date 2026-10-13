import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from '@/app/provider';
import { routes } from '@/app/router';
import { buildPersonJsonLd } from '@/features/cv/seo';

/**
 * Build-time render used by scripts/prerender.js: puts the CV text into
 * dist/index.html so bots that don't run JavaScript still see the content.
 */
export const render = (url: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [url] });

  const html = renderToString(
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );

  // `<` is escaped so the JSON can't close the <script> tag early.
  const jsonLd = JSON.stringify(buildPersonJsonLd()).replace(/</g, '\\u003c');
  const head = `<script type="application/ld+json">${jsonLd}</script>`;

  return { html, head };
};

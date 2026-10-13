import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { AppLayout } from '@/components/layouts/app-layout';
import { HomeRoute } from './routes/home';
import { NotFoundRoute } from './routes/not-found';

// Shared with the build-time prerender (src/entry-server.tsx).
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
];

// Created lazily: the prerender imports `routes` in Node, where there is no
// `window` for a browser router.
export const createRouter = () => createBrowserRouter(routes);

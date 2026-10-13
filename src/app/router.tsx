import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@/components/layouts/app-layout';
import { HomeRoute } from './routes/home';
import { NotFoundRoute } from './routes/not-found';

export const router = createBrowserRouter([
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
]);

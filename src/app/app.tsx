import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './provider';
import { createRouter } from './router';

const router = createRouter();

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

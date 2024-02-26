import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const PageA = lazy(() => import('@/pages/pageA'));
const PageB = lazy(() => import('@/pages/pageB'));

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <PageA />,
  },
  {
    path: '/a',
    element: <PageA />,
  },
  {
    path: '/b',
    element: <PageB />,
  },
]);

export default routers;

/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Editor = lazy(() => import('@/pages/Editor'));
const Template = lazy(() => import('@/pages/Template'));

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Editor',
    element: <Editor />,
  },
  {
    path: '/template/:id',
    element: <Template />,
  },
]);

export default routers;

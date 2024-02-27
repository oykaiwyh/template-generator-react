import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { routers } from './routes';

const RouterView = () => (
  <Suspense fallback={<div>loading....</div>}>
    <RouterProvider router={routers} />
  </Suspense>
);

export default RouterView;

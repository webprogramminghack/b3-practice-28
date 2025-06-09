import { lazy, type ComponentType } from 'react';

interface Router {
  path: string;
  element: ComponentType;
}

export const routes: Router[] = [
  {
    path: '/',
    element: lazy(() => import('../components/pages/homepage')),
  },
  {
    path: '/pokemon/:id',
    element: lazy(() => import('../components/pages/detailpage')),
  },
  {
    path: '/search',
    element: lazy(() => import('../components/pages/searchpage')),
  },
];

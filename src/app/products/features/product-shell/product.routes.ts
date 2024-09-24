import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('../product-list/product-list.component'),
  },
] as Routes;

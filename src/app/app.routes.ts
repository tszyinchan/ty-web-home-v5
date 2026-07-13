import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home').then((m) => m.Home),
    data: { variant: 'general' },
  },
  {
    path: 'pwc',
    loadComponent: () => import('./features/home').then((m) => m.Home),
    data: { variant: 'pwc' },
  },
  {
    path: 'case/:slug',
    loadComponent: () =>
      import('./features/case-study').then((m) => m.CaseStudy),
  },
  { path: '**', redirectTo: '' },
];

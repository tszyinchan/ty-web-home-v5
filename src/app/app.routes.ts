import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home').then((m) => m.Home),
    data: { variant: 'general' },
  },
  {
    path: 'XXX',
    loadComponent: () => import('./features/home').then((m) => m.Home),
    data: { variant: 'XXX' },
  },
  {
    path: 'case/:slug',
    loadComponent: () =>
      import('./features/case-study').then((m) => m.CaseStudy),
  },
  { path: '**', redirectTo: '' },
];

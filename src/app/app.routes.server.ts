import { RenderMode, ServerRoute } from '@angular/ssr';
import { CASE_STUDIES } from './app.constants';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'case/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

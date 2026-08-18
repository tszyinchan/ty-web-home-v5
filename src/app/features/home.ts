import { Component, inject, input, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteSettingsService } from '../core/services/site-settings.service';
import { SeoService } from '../core/services/seo.service';
import { CaseCard } from '../shared/components/case-card';
import {
  APP_CONFIG,
  PAGE_VARIANTS,
  CASE_STUDIES,
  ABOUT_COPY,
  PROFILE_DATA,
  UI_COPY,
  SEO_DEFAULTS,
} from '../app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaseCard, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  settings = inject(SiteSettingsService).settings;
  variant = input<string>('general');
  private seo = inject(SeoService);

  pageVariant = computed(() => PAGE_VARIANTS[this.variant()] || PAGE_VARIANTS['general']);
  cases = computed(
    () =>
      this.pageVariant()
        ?.caseOrder.map((slug) => CASE_STUDIES[slug])
        .filter((c) => !!c) || [],
  );

  aboutCopy = ABOUT_COPY;
  profile = PROFILE_DATA;
  uiCopy = UI_COPY;
  appConfig = APP_CONFIG;

  constructor() {
    effect(() => {
      const currentVariant = this.pageVariant();
      const isTestVariant = currentVariant?.id === 'test';

      this.seo.updateMetaTags({
        title: isTestVariant
          ? `${this.appConfig.ownerName} | ${currentVariant.eyebrow}`
          : `${this.appConfig.ownerName} | Systems & Workflows`,
        description: isTestVariant ? currentVariant.intro : SEO_DEFAULTS.description,
        path: isTestVariant ? '/test' : '/',
        // The /test route is a temporary content-variant for internal review, not real content.
        robots: isTestVariant ? 'noindex, follow' : 'index, follow',
      });
    });
  }
}

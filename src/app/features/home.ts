import { Component, inject, input, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteSettingsService } from '../core/services/site-settings.service';
import { CaseCard } from '../shared/components/case-card';
import { Title } from '@angular/platform-browser';
import {
  APP_CONFIG,
  PAGE_VARIANTS,
  CASE_STUDIES,
  ABOUT_COPY,
  PROFILE_DATA,
  UI_COPY,
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
  private titleService = inject(Title);

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
      if (currentVariant && currentVariant.id !== 'general') {
        this.titleService.setTitle(`${this.appConfig.ownerName} | ${currentVariant.eyebrow}`);
      } else {
        this.titleService.setTitle(`${this.appConfig.ownerName} | Systems & Workflows`);
      }
    });
  }
}

import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteSettingsService } from '../core/services/site-settings.service';
import { CaseCardComponent } from '../shared/components/case-card';
import { PAGE_VARIANTS, CASE_STUDIES, ABOUT_COPY, PROFILE_DATA } from '../app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaseCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  settings = inject(SiteSettingsService).settings;

  variant = input<string>('general');

  pageVariant = computed(() => PAGE_VARIANTS[this.variant()]);
  cases = computed(() => this.pageVariant().caseOrder.map((slug) => CASE_STUDIES[slug]));

  aboutCopy = ABOUT_COPY;
  profile = PROFILE_DATA;
}

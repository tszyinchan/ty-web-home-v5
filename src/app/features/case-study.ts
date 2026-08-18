import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/services/seo.service';
import { APP_CONFIG, CASE_STUDIES, UI_COPY } from '../app.constants';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  slug = input<string>();
  uiCopy = UI_COPY;
  appConfig = APP_CONFIG;

  caseData = computed(() => {
    const currentSlug = this.slug();
    return currentSlug ? CASE_STUDIES[currentSlug] : undefined;
  });

  private seo = inject(SeoService);

  constructor() {
    effect(() => {
      const data = this.caseData();
      if (data) {
        this.seo.updateMetaTags({
          title: `${data.title} | ${this.appConfig.ownerName}`,
          description: data.shortSummary,
          path: `/case/${data.slug}`,
        });
      } else {
        this.seo.updateMetaTags({
          title: `${this.uiCopy.caseStudy.notFoundTitle} | ${this.appConfig.ownerName}`,
          description: this.uiCopy.caseStudy.notFoundDesc,
          robots: 'noindex, follow',
        });
      }
    });
  }
}

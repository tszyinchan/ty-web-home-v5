import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
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

  private titleService = inject(Title);

  constructor() {
    effect(() => {
      const data = this.caseData();
      if (data) {
        this.titleService.setTitle(`${data.title} | ${this.appConfig.ownerName}`);
      } else {
        this.titleService.setTitle(
          `${this.uiCopy.caseStudy.notFoundTitle} | ${this.appConfig.ownerName}`,
        );
      }
    });
  }
}

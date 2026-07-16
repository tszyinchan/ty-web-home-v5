import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APP_CONFIG, CASE_STUDIES, UI_COPY } from '../app.constants';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  template: `
  <main class="case-page">
    <div class="grid-layout">
      <div class="back-link-wrapper">
        <a routerLink="/" fragment="work" class="back-link">
          {{ uiCopy.caseStudy.backBtn }}
        </a>
      </div>

      @if (caseData(); as data) {
        <article class="case-article">
          <header class="case-header">
            <span class="eyebrow">{{ data.eyebrow }}</span>

            <h1 class="title">{{ data.title }}</h1>

            <p class="summary">{{ data.shortSummary }}</p>

            <div class="tags" aria-label="Project technologies and topics">
              @for (tag of data.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
          </header>

          <div class="logic-strip" aria-label="Delivery approach">
            @for (step of uiCopy.caseStudy.logicStrip; track step; let last = $last) {
              <span class="step">{{ step }}</span>

              @if (!last) {
                <span class="arrow" aria-hidden="true">→</span>
              }
            }
          </div>

          <section class="case-body">
            <div class="content-block">
              <h2>{{ uiCopy.caseStudy.contextTitle }}</h2>
              <p>{{ data.context }}</p>
            </div>

            <div class="content-block">
              <h2>{{ uiCopy.caseStudy.approachTitle }}</h2>
              <p>{{ data.approach }}</p>
            </div>

            <div class="content-block">
              <h2>{{ data.resolutionLabel }}</h2>
              <p>{{ data.resolution }}</p>
            </div>
          </section>
        </article>
      } @else {
        <div class="not-found">
          <h2>{{ uiCopy.caseStudy.notFoundTitle }}</h2>
          <p>{{ uiCopy.caseStudy.notFoundDesc }}</p>
          <a routerLink="/" fragment="work" class="return-home">
            {{ uiCopy.caseStudy.returnHomeBtn }}
          </a>
        </div>
      }
    </div>
  </main>
`,
  styles: `
  .case-page {
    padding: 3rem 0 6rem;
  }

  .back-link-wrapper {
    margin-bottom: 3.5rem;
  }

  .back-link {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .back-link::before {
    content: '←';
  }

  .back-link:hover {
    color: var(--color-accent);
  }

  .case-article {
    max-width: 68rem;
  }

  .case-header {
    max-width: 52rem;
    margin-bottom: 3rem;
  }

  .eyebrow {
    display: block;
    margin-bottom: 1rem;
    color: var(--color-accent);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .title {
    margin: 0 0 1.5rem;
    color: var(--color-text-primary);
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.25rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .summary {
    max-width: 46rem;
    margin: 0 0 2rem;
    color: var(--color-text-secondary);
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    line-height: 1.65;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 0.3rem 0.625rem;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    line-height: 1;
  }

  .logic-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 4rem;
    padding: 1rem 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .step {
    color: var(--color-text-primary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .arrow {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }

  .case-body {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    max-width: 44rem;
  }

  .content-block h2 {
    margin: 0 0 1rem;
    padding-bottom: 0.625rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-family: var(--font-display);
    font-size: 1.25rem;
  }

  .content-block p {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    line-height: 1.75;
  }

  .not-found {
    max-width: 44rem;
    padding: 4rem 0;
  }

  .not-found h2 {
    margin: 0 0 1rem;
    color: var(--color-text-primary);
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
  }

  .not-found p {
    margin: 0 0 2rem;
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .return-home {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    background: var(--color-text-primary);
    color: var(--color-bg-primary);
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .return-home:hover {
    opacity: 0.9;
  }

  @media (max-width: 639px) {
    .case-page {
      padding: 2rem 0 4rem;
    }

    .back-link-wrapper {
      margin-bottom: 2.5rem;
    }

    .title {
      font-size: clamp(2.25rem, 11vw, 3.25rem);
    }

    .logic-strip {
      gap: 0.625rem;
      margin-bottom: 3rem;
    }

    .case-body {
      gap: 3rem;
    }
  }
`,
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

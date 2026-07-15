import { Component, input, computed, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CASE_STUDIES } from '../app.constants';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="case-page grid-layout">
      <div class="back-link-wrapper">
        <a routerLink="/" class="back-link">← Back to work</a>
      </div>
      @if (caseData(); as data) {
        <article class="case-article">
          <header class="case-header">
            <span class="eyebrow">{{ data.eyebrow }}</span>
            <h1 class="title">{{ data.title }}</h1>
            <p class="summary">{{ data.shortSummary }}</p>
            <div class="tags">
              @for (tag of data.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
          </header>

          <div class="logic-strip" aria-hidden="true">
            <span class="step">Understand</span><span class="arrow">→</span>
            <span class="step">Structure</span><span class="arrow">→</span>
            <span class="step">Validate</span><span class="arrow">→</span>
            <span class="step">Release</span>
          </div>

          <section class="case-body">
            <div class="content-block">
              <h2>Context</h2>
              <p>{{ data.context }}</p>
            </div>
            <div class="content-block">
              <h2>Approach</h2>
              <p>{{ data.approach }}</p>
            </div>
            <div class="content-block">
              <h2>{{ data.resolutionLabel }}</h2>
              <p>{{ data.resolution }}</p>
            </div>
          </section>
        </article>
      } @else {
        <div class="not-found" style="text-align: center; padding: 6rem 0;">
          <h2
            style="font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-text-primary);"
          >
            Case Not Found
          </h2>
          <p
            style="color: var(--color-text-secondary); margin-bottom: 2.5rem; font-size: 1.125rem;"
          >
            The project you are looking for does not exist or has been removed.
          </p>
          <a
            routerLink="/"
            style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--color-text-primary); color: var(--color-bg-primary); text-decoration: none; border-radius: 4px; font-weight: 500; transition: opacity 0.2s;"
          >
            Return to Homepage
          </a>
        </div>
      }
    </main>
  `,
  styles: [
    `
      .case-page {
        /* 👇 修正：拆分 padding，保留 grid-layout 的左右留白 */
        padding-top: 3rem;
        padding-bottom: 6rem;
      }
      .back-link-wrapper {
        margin-bottom: 3rem;
      }
      .back-link {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: 0.875rem;
        transition: color 0.2s;
      }
      .back-link:hover {
        color: var(--color-accent);
      }
      .case-article {
        max-width: 48rem;
        margin: 0 auto;
      }
      .case-header {
        margin-bottom: 3rem;
        text-align: center;
      }
      .eyebrow {
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-accent);
        font-weight: 600;
        display: block;
        margin-bottom: 1rem;
      }
      .title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 4vw, 3rem);
        color: var(--color-text-primary);
        margin: 0 0 1.5rem 0;
        line-height: 1.2;
      }
      .summary {
        font-size: 1.25rem;
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
      }
      .tag {
        font-size: 0.75rem;
        padding: 0.25rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        color: var(--color-text-secondary);
      }

      .logic-strip {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1.5rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        margin-bottom: 4rem;
      }
      .step {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
        font-weight: 500;
      }
      .arrow {
        color: var(--color-border);
      }

      .case-body {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }
      .content-block h2 {
        font-family: var(--font-display);
        font-size: 1.25rem;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        color: var(--color-text-primary);
      }
      .content-block p {
        font-size: 1.125rem;
        line-height: 1.7;
        color: var(--color-text-secondary);
      }
    `,
  ],
})
export class CaseStudy {
  slug = input<string>();

  caseData = computed(() => {
    const currentSlug = this.slug();
    return currentSlug ? CASE_STUDIES[currentSlug] : undefined;
  });

  private titleService = inject(Title);

  constructor() {
    effect(() => {
      const data = this.caseData();
      if (data) {
        this.titleService.setTitle(`${data.title} | Jack Chan`);
      } else {
        this.titleService.setTitle('Case Not Found | Jack Chan');
      }
    });
  }
}

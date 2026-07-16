import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../core/models/site.models';


@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [RouterLink],
  template: `
  <a
    [routerLink]="['/case', caseData.slug]"
    class="case-card"
    [class.featured]="isFeatured"
    [attr.aria-label]="'Read case study: ' + caseData.title"
  >
    @if (isFeatured) {
      <div class="feature-index">
        <span class="feature-number">1</span>
        <span class="feature-label">Featured system</span>
      </div>
    }

    <div class="card-content">
      <span class="eyebrow">{{ caseData.eyebrow }}</span>

      <h3 class="title">{{ caseData.title }}</h3>

      <p class="summary">{{ caseData.shortSummary }}</p>

      <div class="card-footer">
        <div class="tags" aria-label="Project technologies and topics">
          @for (tag of caseData.tags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>

        <span class="action-link">
          {{ isFeatured ? 'View featured case' : 'Read case' }}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  </a>
`,
  styles: `
  .case-card {
    display: flex;
    height: 100%;
    padding: 2rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    background: var(--color-surface);
    color: inherit;
    text-decoration: none;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background-color 0.2s ease;
  }

  .case-card:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    background: var(--color-accent-surface);
  }

  .card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
  }

  .eyebrow {
    display: block;
    margin-bottom: 1rem;
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .title {
    margin: 0 0 1rem;
    color: var(--color-text-primary);
    font-family: var(--font-display);
    font-size: 1.5rem;
    line-height: 1.15;
  }

  .summary {
    flex-grow: 1;
    margin: 0 0 2rem;
    color: var(--color-text-secondary);
    font-size: 1rem;
    line-height: 1.6;
  }

  .card-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 2px;
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    line-height: 1;
  }

  .action-link {
    color: var(--color-text-primary);
    font-size: 0.875rem;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .case-card:hover .action-link {
    color: var(--color-accent);
  }

  .featured {
    display: grid;
    grid-template-columns: minmax(8rem, 1fr) minmax(0, 4fr);
    gap: 2rem;
    padding: 3rem;
    border-color: var(--color-accent);
    background: var(--color-accent-surface);
  }

  .feature-index {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .feature-number {
    color: var(--color-accent);
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -0.05em;
  }

  .feature-label {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .featured .title {
    max-width: 32rem;
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .featured .summary {
    max-width: 46rem;
    font-size: 1.125rem;
  }

  .featured .card-footer {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
  }

  @media (max-width: 767px) {
    .case-card {
      padding: 1.5rem;
    }

    .featured {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 2rem 1.5rem;
    }

    .featured .card-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .feature-number {
      font-size: 3rem;
    }
  }
`,
})
export class CaseCard {
  @Input({ required: true }) caseData!: CaseStudy;
  @Input() isFeatured = false;
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../core/models/site.models';


@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/case', caseData.slug]" class="case-card" [class.featured]="isFeatured">
      <div class="card-content">
        <span class="eyebrow">{{ caseData.eyebrow }}</span>
        <h3 class="title">{{ caseData.title }}</h3>
        <p class="summary">{{ caseData.shortSummary }}</p>
        <div class="tags">
          @for (tag of caseData.tags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>
        <div class="action-link">Read case ↗</div>
      </div>
    </a>
  `,
  styles: [
    `
      .case-card {
        display: block;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 4px;
        padding: 2rem;
        text-decoration: none;
        color: inherit;
        transition:
          transform 0.2s ease,
          background-color 0.2s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .case-card:hover {
        transform: translateY(-3px);
        background: var(--color-accent-surface);
        border-color: var(--color-accent);
      }
      .case-card:hover .action-link {
        color: var(--color-accent);
      }
      .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .eyebrow {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-secondary);
        margin-bottom: 1rem;
        display: block;
        font-weight: 600;
      }
      .title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        color: var(--color-text-primary);
      }
      .summary {
        font-size: 1rem;
        color: var(--color-text-secondary);
        margin-bottom: 2rem;
        line-height: 1.5;
        flex-grow: 1;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
      }
      .tag {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--color-border);
        border-radius: 2px;
        color: var(--color-text-secondary);
      }
      .action-link {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-text-primary);
        transition: color 0.2s ease;
      }
      @media (min-width: 768px) {
        .featured {
          padding: 3rem;
        }
        .featured .title {
          font-size: 2.25rem;
        }
        .featured .summary {
          font-size: 1.125rem;
          max-width: 80%;
        }
      }
    `,
  ],
})
export class CaseCard {
  @Input({ required: true }) caseData!: CaseStudy;
  @Input() isFeatured = false;
}

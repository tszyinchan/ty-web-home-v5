import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../core/models/site.models';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-card.html',
  styleUrl: './case-card.scss',
})
export class CaseCard {
  caseData = input.required<CaseStudy>();
  isFeatured = input(false);
}

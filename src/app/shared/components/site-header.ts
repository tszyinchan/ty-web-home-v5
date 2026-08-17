import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../app.constants';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  theme = inject(ThemeService);
  appConfig = APP_CONFIG;
}

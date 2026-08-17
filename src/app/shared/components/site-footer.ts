import { Component, inject } from '@angular/core';
import { SiteSettingsService } from '../../core/services/site-settings.service';
import { APP_CONFIG, UI_COPY } from '../../app.constants';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  settings = inject(SiteSettingsService).settings;

  currentYear = new Date().getFullYear();

  appConfig = APP_CONFIG;

  uiCopy = UI_COPY;
}

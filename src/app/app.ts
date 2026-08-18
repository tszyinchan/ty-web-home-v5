import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeBar } from './shared/components/notice-bar';
import { SiteFooter } from './shared/components/site-footer';
import { SiteHeader } from './shared/components/site-header';
import { SitePopup } from './shared/components/site-popup';
import { SeoService } from './core/services/seo.service';
import { SiteSettingsService } from './core/services/site-settings.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, NoticeBar, SitePopup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly seo = inject(SeoService);
  private readonly settings = inject(SiteSettingsService).settings;

  constructor() {
    const { linkedinUrl, githubUrl } = this.settings();
    const sameAs = [linkedinUrl, githubUrl].filter((url): url is string => !!url);
    this.seo.setPersonJsonLd(sameAs);
  }
}

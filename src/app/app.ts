import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeBarComponent } from './shared/components/notice-bar';
import { SiteFooterComponent } from './shared/components/site-footer';
import { SiteHeaderComponent } from './shared/components/site-header';
import { SitePopupComponent } from './shared/components/site-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, NoticeBarComponent, SitePopupComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

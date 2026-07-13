import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeBarComponent } from './shared/components/notice-bar';
import { SiteFooterComponent } from './shared/components/site-footer';
import { SiteHeaderComponent } from './shared/components/site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, NoticeBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

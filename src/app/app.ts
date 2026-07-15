import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeBar } from './shared/components/notice-bar';
import { SiteFooter } from './shared/components/site-footer';
import { SiteHeader } from './shared/components/site-header';
import { SitePopup } from './shared/components/site-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, NoticeBar, SitePopup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

import { Component, effect, inject, signal } from '@angular/core';
import { SiteSettingsService } from '../../core/services/site-settings.service';

@Component({
  selector: 'app-notice-bar',
  standalone: true,
  template: `
    @if (settings().noticeEnabled && settings().noticeMessage && !dismissed()) {
      <div class="notice-bar">
        <div class="notice-content">{{ settings().noticeMessage }}</div>
        @if (settings().noticeDismissible) {
          <button class="dismiss-btn" (click)="dismiss()" aria-label="Dismiss notice">×</button>
        }
      </div>
    }
  `,
  styles: [
    `
      .notice-bar {
        background-color: var(--color-accent);
        color: #ffffff;
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.875rem;
        position: relative;
      }
      .notice-content {
        text-align: center;
        font-weight: 500;
      }
      .dismiss-btn {
        position: absolute;
        right: 1rem;
        background: none;
        border: none;
        color: white;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        opacity: 0.8;
      }
      .dismiss-btn:hover {
        opacity: 1;
      }
    `,
  ],
})
export class NoticeBar {
  settings = inject(SiteSettingsService).settings;
  dismissed = signal(true);

  constructor() {
    effect(
      () => {
        const currentNotice = this.settings().noticeMessage;
        const isEnabled = this.settings().noticeEnabled;

        if (isEnabled && currentNotice) {
          const savedNotice = localStorage.getItem('tyweb_dismissed_notice');
          if (savedNotice !== currentNotice) {
            this.dismissed.set(false);
          }
        }
      },
      { allowSignalWrites: true },
    );
  }

  dismiss() {
    this.dismissed.set(true);
    const currentNotice = this.settings().noticeMessage;
    if (currentNotice) {
      localStorage.setItem('tyweb_dismissed_notice', currentNotice);
    }
  }
}

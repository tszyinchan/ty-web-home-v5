import { Component, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SiteSettingsService } from '../../core/services/site-settings.service';

@Component({
  selector: 'app-site-popup',
  standalone: true,
  template: `
    @if (settings().popupEnabled && !dismissed()) {
      <div class="popup-backdrop" (click)="dismiss()">
        <div class="popup-content" (click)="$event.stopPropagation()">
          @if (settings().popupTitle) {
            <h2 class="popup-title">{{ settings().popupTitle }}</h2>
          }
          @if (settings().popupMessage) {
            <p class="popup-body">{{ settings().popupMessage }}</p>
          }
          <button class="btn-primary" (click)="dismiss()">Close</button>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .popup-content {
        background-color: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 8px;
        padding: 2.5rem;
        max-width: 90%;
        width: 420px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        text-align: center;
        animation: popup-fade-in 0.3s ease-out forwards;
      }
      .popup-title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        color: var(--color-text-primary);
      }
      .popup-body {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      .btn-primary {
        display: inline-block;
        padding: 0.6rem 1.5rem;
        background: var(--color-text-primary);
        color: var(--color-bg-primary);
        border: none;
        font-family: inherit;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: opacity 0.2s;
      }
      .btn-primary:hover {
        opacity: 0.9;
      }
      @keyframes popup-fade-in {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `,
  ],
})
export class SitePopup implements OnInit {
  readonly settings = inject(SiteSettingsService).settings;
  readonly dismissed = signal(true);

  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hasSeenPopup = localStorage.getItem('tyweb_popup_dismissed');

    if (!hasSeenPopup) {
      this.dismissed.set(false);
    }
  }

  dismiss(): void {
    this.dismissed.set(true);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tyweb_popup_dismissed', 'true');
    }
  }
}

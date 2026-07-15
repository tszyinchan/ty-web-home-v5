import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { APP_CONFIG } from '../../app.constants';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <nav class="nav-container grid-layout">
        <!-- 👇 改為動態讀取 ownerName -->
        <a routerLink="/" class="logo">{{ appConfig.ownerName }}</a>
        <div class="nav-actions">
          <button (click)="theme.toggleTheme()" class="theme-toggle" aria-label="Toggle theme">
            @if (theme.isDarkMode()) {
              <span>Light</span>
            } @else {
              <span>Dark</span>
            }
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      .site-header {
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);
      }
      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.25rem;
        text-decoration: none;
        color: var(--color-text-primary);
      }
      .theme-toggle {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
      }
      .theme-toggle:hover {
        color: var(--color-text-primary);
        border-color: var(--color-text-secondary);
      }
    `,
  ],
})
export class SiteHeader {
  theme = inject(ThemeService);
  appConfig = APP_CONFIG;
}

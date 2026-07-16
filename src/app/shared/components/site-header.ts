import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../app.constants';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <nav class="nav-container grid-layout" aria-label="Primary">
        <a routerLink="/" class="logo">{{ appConfig.ownerName }}</a>

        <div class="nav-actions">
          <div class="nav-links">
            <a routerLink="/" fragment="work">Work</a>
            <a routerLink="/" fragment="profile">Profile</a>
            <a routerLink="/" fragment="contact">Contact</a>
          </div>

          <button
            type="button"
            class="theme-toggle"
            (click)="theme.toggleTheme()"
            [attr.aria-label]="theme.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            [attr.title]="theme.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            @if (theme.isDarkMode()) {
              <svg viewBox="0 0 24 24" aria-hidden="true" class="theme-icon">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M4.93 19.07l1.41-1.41"></path>
                <path d="M17.66 6.34l1.41-1.41"></path>
              </svg>
            } @else {
              <svg viewBox="0 0 24 24" aria-hidden="true" class="theme-icon">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
              </svg>
            }
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .site-header {
      padding: 1.5rem 0;
      border-bottom: 1px solid var(--color-border);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.25rem;
      text-decoration: none;
      color: var(--color-text-primary);
      white-space: nowrap;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--color-text-primary);
    }

    .theme-toggle {
      width: 2.5rem;
      height: 2.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 999px;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease,
        transform 0.2s ease;
      flex-shrink: 0;
    }

    .theme-toggle:hover {
      color: var(--color-text-primary);
      border-color: var(--color-text-secondary);
      transform: translateY(-1px);
    }

    .theme-icon {
      width: 1.1rem;
      height: 1.1rem;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    @media (max-width: 640px) {
      .nav-container {
        align-items: flex-start;
        flex-direction: column;
      }

      .nav-actions {
        width: 100%;
        justify-content: space-between;
      }

      .nav-links {
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
  `],
})
export class SiteHeader {
  theme = inject(ThemeService);
  appConfig = APP_CONFIG;
}
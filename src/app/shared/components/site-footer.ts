import { Component, inject } from '@angular/core';
import { SiteSettingsService } from '../../core/services/site-settings.service';
import { APP_CONFIG, UI_COPY } from '../../app.constants';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="grid-layout footer-content">
        <div class="footer-left">
          <!-- 👇 改用動態變數 -->
          <h2 class="footer-heading">{{ uiCopy.footer.heading }}</h2>
          <div class="footer-links">
            @if (settings().contactEmail) {
              <a
                [href]="'mailto:' + settings().contactEmail"
                target="_blank"
                rel="noopener noreferrer"
                >Email</a
              >
            }
            @if (settings().linkedinUrl) {
              <a [href]="settings().linkedinUrl" target="_blank" rel="noopener noreferrer"
                >LinkedIn</a
              >
            }
            @if (settings().githubUrl) {
              <a [href]="settings().githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
            }
            @if (settings().resumeUrl) {
              <a [href]="settings().resumeUrl" target="_blank" rel="noopener noreferrer">Resume</a>
            }
          </div>
        </div>

        <div class="footer-meta">
          <p class="copyright">
            &copy; {{ currentYear }} {{ appConfig.ownerName }}. All rights reserved.
          </p>
          <p class="version-info">
            Site v{{ appConfig.version.major }}.{{ appConfig.version.minor }}.{{
              appConfig.version.patch
            }}
            ({{ appConfig.versionDate }})
            <span class="divider">|</span>
            Content Updated: {{ appConfig.contentLastUpdated }}
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .site-footer {
        padding: 4rem 0;
        border-top: 1px solid var(--color-border);
        margin-top: 4rem;
        background: var(--color-surface);
      }
      .footer-content {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }
      @media (min-width: 768px) {
        .footer-content {
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }
      }
      .footer-left {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .footer-heading {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: var(--color-text-primary);
        margin: 0;
      }
      .footer-links {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      .footer-links a {
        color: var(--color-text-secondary);
        font-weight: 500;
        text-decoration: none;
        font-size: 0.875rem;
      }
      .footer-links a:hover {
        color: var(--color-accent);
      }
      .footer-meta {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.75rem;
        color: var(--color-text-secondary);
      }
      @media (min-width: 768px) {
        .footer-meta {
          text-align: right;
        }
      }
      .footer-meta p {
        margin: 0;
      }
      .divider {
        margin: 0 0.25rem;
        opacity: 0.5;
      }
    `,
  ],
})
export class SiteFooter {
  settings = inject(SiteSettingsService).settings;

  currentYear = new Date().getFullYear();

  appConfig = APP_CONFIG;

  uiCopy = UI_COPY;
}

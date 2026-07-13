import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDarkMode = signal<boolean>(false);

  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.initTheme();

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this.isDarkMode();
        if (isDark) {
          this.document.documentElement.classList.add('dark-theme');
        } else {
          this.document.documentElement.classList.remove('dark-theme');
        }
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  private initTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }
  }
}

import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDarkMode = signal<boolean>(false);

  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'tyweb_theme_pref';

  constructor() {
    this.initTheme();

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this.isDarkMode();
        if (isDark) {
          this.document.documentElement.classList.add('dark-theme');
          localStorage.setItem(this.STORAGE_KEY, 'dark');
        } else {
          this.document.documentElement.classList.remove('dark-theme');
          localStorage.setItem(this.STORAGE_KEY, 'light');
        }
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  private initTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY);
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        this.isDarkMode.set(mediaQuery.matches);
      }

      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.isDarkMode.set(e.matches);
        }
      });
    }
  }
}

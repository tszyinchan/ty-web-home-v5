import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_DEFAULTS, SITE_URL } from '../../app.constants';

export interface SeoData {
  title: string;
  description: string;
  /** Route path starting with '/', e.g. '/case/schema-sync'. Defaults to '/'. */
  path?: string;
  /** Defaults to 'index, follow'. Use 'noindex, follow' for content-variant/test routes. */
  robots?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  updateMetaTags(data: SeoData): void {
    const url = `${SITE_URL}${data.path ?? '/'}`;

    this.titleService.setTitle(data.title);

    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'robots', content: data.robots ?? 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: SEO_DEFAULTS.ogImage });

    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: SEO_DEFAULTS.ogImage });

    this.setCanonicalUrl(url);
  }

  /**
   * The canonical <link> lives in <head>, outside any component's template, so there is
   * no Angular binding surface for it — same accepted-exception category as ThemeService's
   * <html> class toggling. Angular has no built-in service for <link> tags (Meta only
   * covers <meta>), so direct, minimal DOM access here is the standard approach.
   */
  private setCanonicalUrl(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Injects the Person JSON-LD block once (called from the root App component). */
  setPersonJsonLd(sameAs: string[] = []): void {
    const { person } = SEO_DEFAULTS;
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.name,
      alternateName: person.alternateName,
      jobTitle: person.jobTitle,
      worksFor: {
        '@type': 'Organization',
        name: person.worksFor,
      },
      knowsAbout: person.knowsAbout,
      url: SITE_URL,
      description: SEO_DEFAULTS.description,
      ...(sameAs.length ? { sameAs } : {}),
    });
    this.document.head.appendChild(script);
  }
}

import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { SiteSettings } from '../models/site.models';

const DEFAULT_SETTINGS: SiteSettings = {
  contactEmail: 'mailto:contact@example.com',
  linkedinUrl: 'https://linkedin.com',
  githubUrl: 'https://github.com',
  resumeUrl: '#',
  noticeEnabled: false,
  noticeMessage: null,
  noticeDismissible: true,
  popupEnabled: false,
  popupTitle: null,
  popupMessage: null,
};

@Injectable({ providedIn: 'root' })
export class SiteSettingsService {
  private supabase = inject(SupabaseService).client;
  public settings = signal<SiteSettings>(DEFAULT_SETTINGS);

  async initializeSettings(): Promise<void> {
    try {
      const { data, error } = await this.supabase
        .from('tyweb_v5_settings')
        .select('*')
        .eq('singleton_key', 1)
        .eq('status', 1)
        .is('deleted_at', null)
        .maybeSingle();

      if (error || !data) {
        console.warn('Settings query failed or no record found. Using defaults.');
        return;
      }

      this.settings.set({
        contactEmail: data.contact_email || DEFAULT_SETTINGS.contactEmail,
        linkedinUrl: data.linkedin_url || DEFAULT_SETTINGS.linkedinUrl,
        githubUrl: data.github_url || DEFAULT_SETTINGS.githubUrl,
        resumeUrl: data.resume_url || DEFAULT_SETTINGS.resumeUrl,
        noticeEnabled: data.notice_enabled || false,
        noticeMessage: data.notice_message || null,
        noticeDismissible: data.notice_dismissible !== false,
        popupEnabled: data.popup_enabled || false,
        popupTitle: data.popup_title || null,
        popupMessage: data.popup_message || null,
      });
    } catch (e) {
      console.warn('Exception fetching settings, using defaults.', e);
    }
  }
}

export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  shortSummary: string;
  tags: string[];
  context: string;
  approach: string;
  resolutionLabel: 'Validation' | 'Resolution' | 'Principle';
  resolution: string;
}

export interface PageVariant {
  id: string;
  eyebrow: string;
  headline: string;
  intro: string;
  caseOrder: string[];
}

export interface SiteSettings {
  contactEmail: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  noticeEnabled: boolean;
  noticeMessage: string | null;
  noticeDismissible: boolean;
  popupEnabled: boolean;
  popupTitle: string | null;
  popupMessage: string | null;
}

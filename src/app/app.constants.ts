import { CaseStudy, PageVariant } from './core/models/site.models';

export const APP_CONFIG = {
  appName: 'Tsz Yin Chan | Systems, Workflows & Reliability',
  ownerName: 'Tsz Yin Chan',
  version: {
    major: 5,
    minor: 3,
    patch: 0,
  },
  versionDate: '2026-07-15',
  contentLastUpdated: '2026-07-15',
};

export const ABOUT_COPY = [
  'I work on the practical side of software delivery: understanding how a real process works, identifying where it can fail, and helping turn that understanding into clearer tools, test coverage, or automation.',
  'My experience spans internal systems, workflow validation, API-related troubleshooting, and small automation builds. I value solutions that are not only functional, but also understandable, testable, and maintainable by the people who rely on them.',
];

export const PROFILE_DATA = {
  experience: [
    {
      title: 'QA Tester, RPA Team',
      company: 'KPMG Canada · Contract',
      desc: 'Supports test planning, workflow review, change validation, and UAT-oriented delivery for enterprise automation processes.',
    },
    {
      title: 'Programmer',
      company: 'St. Teresa’s Hospital',
      desc: 'Worked on hospital systems, internal tools, API-related troubleshooting, regression checks, and continuity-focused workflow improvements.',
    },
    {
      title: 'System Engineer Intern',
      company: 'Multisoft Limited',
      desc: 'Supported environment setup, migration procedures, backups, IT operations, and early automation tooling.',
    },
  ],
  skills: [
    'Workflow analysis',
    'Automation',
    'Validation & UAT support',
    'Test design',
    'API troubleshooting',
    'SQL',
    'VB .NET',
    'Java',
    'PowerShell',
    'Angular',
  ],
  education: 'BSc in Computer Science · City University of Hong Kong',
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'schema-sync': {
    slug: 'schema-sync',
    title: 'Schema Synchronization Automation',
    eyebrow: 'Hospital systems · VB .NET · SQL',
    shortSummary:
      'A scheduled synchronization tool designed to reduce schema drift between central and local environments and support a more reliable downtime workflow.',
    tags: ['VB .NET', 'SQL', 'Automation', 'Validation'],
    context:
      'A local pharmacy environment could fall behind the central database structure used by the main system. During a server outage, that mismatch could leave staff working with an older interface and reduce continuity at a time when reliable access mattered most.',
    approach:
      'I built a VB .NET console application that compared schema metadata, generated the required update logic, and synchronized selected data between environments. The process was designed to run during lower-risk periods through a scheduler, reducing dependence on repeated manual preparation.',
    resolutionLabel: 'Validation',
    resolution:
      'I considered failure scenarios and post-sync checks as part of the delivery rather than treating a successful script run as sufficient. The goal was a repeatable process that could support operational continuity and be checked after each synchronization.',
  },

  'allergy-data': {
    slug: 'allergy-data',
    title: 'Allergy Data Optimization & Bug Resolution',
    eyebrow: 'Clinical workflow · API · Debugging',
    shortSummary:
      'Improved a slow allergy-information workflow while tracing a data-update issue in the underlying API behaviour and validating the revised retrieval approach.',
    tags: ['API', 'Performance', 'Regression testing', 'VB .NET'],
    context:
      'Clinical users needed timely access to allergy information, but the existing workflow was slow and certain deletion-type changes were not fully reflected by the update logic. The issue affected both usability and confidence in whether the displayed information was current.',
    approach:
      'I improved the in-application presentation of allergy information, including hospital-specific food-allergy details, and packaged shared logic for reuse across related systems. In parallel, I traced the data flow to distinguish application behaviour from limitations in the existing API retrieval pattern.',
    resolutionLabel: 'Resolution',
    resolution:
      'The investigation identified an endpoint-related limitation that affected how changes were retrieved. I revised the retrieval approach and carried out regression checks before release, focusing on whether the updated workflow handled expected changes consistently rather than only improving display speed.',
  },

  'copilot-workflow': {
    slug: 'copilot-workflow',
    title: 'Copilot-Assisted Test Scenario Design',
    eyebrow: 'AI workflow · Test design · Human review',
    shortSummary:
      'Used AI-assisted exploration to broaden test-scenario thinking for a process-heavy workflow, while keeping relevance, structure, and final validation under human review.',
    tags: ['Copilot', 'Test design', 'Process analysis', 'Review'],
    context:
      'A process-heavy reconciliation workflow required coverage across data conditions, formatting differences, and exception paths. The challenge was not simply to produce more test cases, but to explore possible scenarios without losing the practical structure needed for review and execution.',
    approach:
      'I used Copilot as an exploration aid to surface possible scenarios and questions, then reviewed, filtered, and organized the useful output into a practical test-plan and walkthrough structure. The workflow treated AI output as draft input, not as an authoritative testing decision.',
    resolutionLabel: 'Principle',
    resolution:
      'The value came from combining faster scenario exploration with reviewer judgment. Relevance, completeness, and correctness remained human responsibilities, helping keep the resulting test material aligned with the actual workflow rather than with generic AI-generated assumptions.',
  },

  'ftp-permission-automation': {
    slug: 'ftp-permission-automation',
    title: 'FTP Permission Automation',
    eyebrow: 'Early-career build · Java · Access control',
    shortSummary:
      'A small Java utility that turned a repetitive FTP setup task into a more consistent, structured, and testable permission-configuration workflow.',
    tags: ['Java', 'Automation', 'Permissions', 'Testing'],
    context:
      'Creating FTP folders and configuring access permissions required repeated manual command entry. This made routine setup slower and introduced avoidable risk from typos, inconsistent inputs, and incorrect permission assignments.',
    approach:
      'I built a Java utility that accepted basic setup information and converted it into a structured configuration process. The objective was to reduce repeated manual entry and make the setup steps easier to repeat and verify.',
    resolutionLabel: 'Validation',
    resolution:
      'I used dummy accounts to check whether the resulting permissions matched the intended access rules. Although it was an early-career utility, it established a practical pattern that still informs my work: reduce manual risk, make the process repeatable, and verify the result.',
  },
};

export const PAGE_VARIANTS: Record<string, PageVariant> = {
  general: {
    id: 'general',
    eyebrow: 'Selected systems work',
    headline: 'Building clearer, more reliable ways of working.',
    intro:
      'I work across internal tools, workflow improvement, automation, and validation—especially where a real process is fragile, repetitive, or difficult to maintain.',
    caseOrder: ['schema-sync', 'allergy-data', 'copilot-workflow', 'ftp-permission-automation'],
  },

  test: {
    id: 'test',
    eyebrow: 'Test variant',
    headline: 'Testing a tailored portfolio view.',
    intro:
      'A temporary route for testing alternate content order, messaging, and layout behaviour before creating a dedicated portfolio variant.',
    caseOrder: ['schema-sync', 'copilot-workflow', 'allergy-data', 'ftp-permission-automation'],
  },
};

export const UI_COPY = {
  home: {
    heroLabel: 'SYSTEMS / WORKFLOWS / RELIABILITY',
    exploreBtn: 'Explore selected work',
    aboutTitle: 'About',
    experienceTitle: 'Experience',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
  },

  caseStudy: {
    backBtn: 'Back to work',
    logicStrip: ['Understand', 'Structure', 'Validate', 'Release'],
    contextTitle: 'Context',
    approachTitle: 'Approach',
    notFoundTitle: 'Case Not Found',
    notFoundDesc: 'The project you are looking for does not exist or has been removed.',
    returnHomeBtn: 'Return to selected work',
  },

  footer: {
    heading: 'Open to thoughtful technical work.',
  },
};
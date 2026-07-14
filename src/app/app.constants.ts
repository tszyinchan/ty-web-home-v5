import { CaseStudy, PageVariant } from './core/models/site.models';

export const APP_CONFIG = {
  appName: 'Portfolio - Under Maintenance',
  version: {
    major: 5,
    minor: 1,
    patch: 0,
  },
  versionDate: '2026-07-14',
  contentLastUpdated: '2026-07-13',
};

// export const ABOUT_COPY = [
//   '🚧 This website is currently under maintenance. Content is being updated. 🚧',
//   'Please check back soon for the complete experience!',
// ];

// export const PROFILE_DATA = {
//   experience: [
//     {
//       title: 'RPA Junior QA Tester / Workflow Validation',
//       company: 'KPMG via Canadian Staffing Consultants Ltd.',
//       desc: 'QA, change validation, UAT support, test planning, and workflow review for enterprise automation.',
//     },
//     {
//       title: 'Programmer',
//       company: 'St. Teresa’s Hospital',
//       desc: 'Hospital systems, API-related logic, continuity workflows, regression testing, and internal tools.',
//     },
//     {
//       title: 'System Engineer Intern',
//       company: 'Multisoft Limited',
//       desc: 'IT support, migration procedures, backups, environment setup, and early automation tooling.',
//     },
//   ],
//   skills: [
//     'Workflow analysis',
//     'Automation',
//     'Validation',
//     'API troubleshooting',
//     'SQL',
//     'VB .NET',
//     'Java',
//     'PowerShell',
//     'Angular',
//   ],
//   education: 'BSc in Computer Science · City University of Hong Kong',
// };

// export const CASE_STUDIES: Record<string, CaseStudy> = {
//   'schema-sync': {
//     slug: 'schema-sync',
//     title: 'Schema Synchronization Automation',
//     eyebrow: 'Hospital systems · VB .NET · SQL',
//     shortSummary:
//       'A scheduled tool designed to reduce schema drift between central and local environments, supporting a more reliable downtime workflow.',
//     tags: ['VB .NET', 'SQL', 'Automation', 'Validation'],
//     context:
//       'A local pharmacy environment could fall behind the central database structure. During a server outage, that mismatch could limit the ability to use the current system version.',
//     approach:
//       'I built a console application that compared schema metadata, generated the required update logic, synchronized selected data, and ran during low-risk periods through a scheduler.',
//     resolutionLabel: 'Validation',
//     resolution:
//       'I planned failure scenarios and post-sync checks so the solution was evaluated for operational reliability, not only whether a script could run once.',
//   },
//   'allergy-data': {
//     slug: 'allergy-data',
//     title: 'Allergy Data Optimization & Bug Resolution',
//     eyebrow: 'Clinical workflow · API · Debugging',
//     shortSummary:
//       'Improving a slow allergy-information workflow while tracing and correcting a data-update issue in the underlying API behavior.',
//     tags: ['API', 'Performance', 'Regression testing', 'VB .NET'],
//     context:
//       'Clinical users experienced slow access to allergy information, while the existing update logic did not fully reflect deletion-type changes.',
//     approach:
//       'I designed a clearer in-application display, included hospital-specific food-allergy information, and packaged shared logic for reuse across systems.',
//     resolutionLabel: 'Resolution',
//     resolution:
//       'By tracing the API data flow, I identified an endpoint limitation and revised the retrieval approach. Regression checks followed before release.',
//   },
//   'copilot-workflow': {
//     slug: 'copilot-workflow',
//     title: 'Copilot-Assisted Workflow Design',
//     eyebrow: 'AI workflow · Test design · Review boundaries',
//     shortSummary:
//       'Using AI to broaden test-scenario thinking while keeping judgment, filtering, and final validation with the reviewer.',
//     tags: ['Copilot', 'Test design', 'Process analysis', 'Review'],
//     context:
//       'A process-heavy reconciliation workflow required careful coverage of data, formatting, and exception scenarios.',
//     approach:
//       'I used Copilot to expand possible scenarios, then filtered and organized them into a practical test plan and walkthrough structure.',
//     resolutionLabel: 'Principle',
//     resolution:
//       'The value was not automatic output. It was a review-driven workflow where AI accelerated exploration while human judgment remained responsible for relevance and correctness.',
//   },
//   'ftp-permission-automation': {
//     slug: 'ftp-permission-automation',
//     title: 'FTP Permission Automation',
//     eyebrow: 'Early-career build · Java · Access control',
//     shortSummary:
//       'A small Java utility that turned a repetitive, error-prone FTP setup process into a more consistent and testable workflow.',
//     tags: ['Java', 'Automation', 'Permissions', 'Testing'],
//     context:
//       'FTP folder creation and access configuration required repeated command entry, creating avoidable risk from typos and permission mistakes.',
//     approach:
//       'I built a Java tool that converted basic input into a structured setup process rather than depending on manual command entry.',
//     resolutionLabel: 'Validation',
//     resolution:
//       'I used dummy accounts to verify that the resulting permissions actually matched the intended access rules.',
//   },
// };

// export const PAGE_VARIANTS: Record<string, PageVariant> = {
//   general: {
//     id: 'general',
//     eyebrow: 'Selected systems work',
//     headline: 'Building clearer, more reliable ways of working.',
//     intro:
//       'I work across internal tools, workflow improvement, automation, and validation — especially where a real process is fragile, repetitive, or difficult to maintain.',
//     caseOrder: ['schema-sync', 'allergy-data', 'copilot-workflow', 'ftp-permission-automation'],
//   },
//   pwc: {
//     id: 'pwc',
//     eyebrow: 'Selected work for PwC',
//     headline: 'Technical delivery grounded in workflow clarity and reliable execution.',
//     intro:
//       'Selected examples of automation, system improvement, validation, and practical delivery in process-sensitive environments.',
//     caseOrder: ['schema-sync', 'copilot-workflow', 'allergy-data', 'ftp-permission-automation'],
//   },
// };

export const ABOUT_COPY = [
  '🚧 This website is currently under maintenance. Content is being updated. 🚧',
  'Please check back soon for the complete experience!'
];

export const PROFILE_DATA = {
  experience: [
    { title: '[Title Pending]', company: '[Company Pending]', desc: 'Experience details are currently hidden during maintenance.' }
  ],
  skills: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
  education: '[Education details temporarily hidden]'
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'schema-sync': {
    slug: 'schema-sync',
    title: 'Project Title Hidden',
    eyebrow: 'Category · Technology',
    shortSummary: 'Project summary is currently under maintenance.',
    tags: ['Pending'],
    context: 'Data temporarily redacted.',
    approach: 'Data temporarily redacted.',
    resolutionLabel: 'Validation',
    resolution: 'Data temporarily redacted.'
  },
  'allergy-data': {
    slug: 'allergy-data',
    title: 'Project Title Hidden',
    eyebrow: 'Category · Technology',
    shortSummary: 'Project summary is currently under maintenance.',
    tags: ['Pending'],
    context: 'Data temporarily redacted.',
    approach: 'Data temporarily redacted.',
    resolutionLabel: 'Validation',
    resolution: 'Data temporarily redacted.'
  },
  'copilot-workflow': {
    slug: 'copilot-workflow',
    title: 'Project Title Hidden',
    eyebrow: 'Category · Technology',
    shortSummary: 'Project summary is currently under maintenance.',
    tags: ['Pending'],
    context: 'Data temporarily redacted.',
    approach: 'Data temporarily redacted.',
    resolutionLabel: 'Validation',
    resolution: 'Data temporarily redacted.'
  },
  'ftp-permission-automation': {
    slug: 'ftp-permission-automation',
    title: 'Project Title Hidden',
    eyebrow: 'Category · Technology',
    shortSummary: 'Project summary is currently under maintenance.',
    tags: ['Pending'],
    context: 'Data temporarily redacted.',
    approach: 'Data temporarily redacted.',
    resolutionLabel: 'Validation',
    resolution: 'Data temporarily redacted.'
  }
};

export const PAGE_VARIANTS: Record<string, PageVariant> = {
  'general': {
    id: 'general',
    eyebrow: 'Selected systems work',
    headline: 'Site Under Maintenance',
    intro: 'This portfolio is currently being updated. Real data has been temporarily suspended.',
    caseOrder: ['schema-sync', 'allergy-data', 'copilot-workflow', 'ftp-permission-automation']
  },
  'XXX': {
    id: 'XXX',
    eyebrow: 'Private Variant',
    headline: 'Site Under Maintenance',
    intro: 'This specific portfolio view is currently under maintenance.',
    caseOrder: ['schema-sync', 'copilot-workflow', 'allergy-data', 'ftp-permission-automation']
  }
};
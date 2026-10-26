// Content model. To add a project: append an entry to `work.ts` (case study) or
// `lab` in the same file (small project), and drop images in public/img/<slug>/.

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One-line product pitch, written for a non-technical reader. */
  tagline: string;
  year: string;
  company: string;
  role: string;
  domain: 'DeFi' | 'Gaming' | 'Consumer' | 'Fintech';
  /** Accent hue (0-360) used for this project's card and page. */
  hue: number;
  liveUrl?: string;
  /** Short badge when the product is no longer live, e.g. 'Offline'. */
  status?: string;
  repoUrl?: string;
  stack: string[];
  /** Real, verifiable numbers only. Empty array is fine. */
  metrics: Metric[];
  /** The user/business problem, 2-3 sentences. */
  problem: string;
  /** Product decisions and trade-offs, 3-5 bullets. */
  decisions: string[];
  /** What I personally built, 3-5 bullets. */
  built: string[];
  /** Result / what it enabled, 1-2 sentences. */
  outcome: string;
  /** First shot is the case-study cover; the rest form the gallery. */
  shots: Shot[];
  /** Index into `shots` for the home-page card, if not the cover. */
  thumb?: number;
}

export interface LabItem {
  title: string;
  blurb: string;
  stack: string[];
  url?: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  /** Product-lens summary of the role, one sentence. */
  summary: string;
  points: string[];
  stack: string[];
}

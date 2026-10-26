// Everything about "me" that isn't a project or a job lives here.

export const profile = {
  name: 'Christian Dinata',
  role: 'Product Engineer',
  location: 'Indonesia',
  timezone: 'GMT+7',
  email: 'cdinata6@gmail.com',
  cv: '/CV_ChristianDinata.pdf',
  github: 'https://github.com/christiandinata',
  linkedin: 'https://linkedin.com/in/christiandinata',
  status: 'Open to Product Engineer roles',
  intro:
    'I’m Christian, a product engineer in Indonesia. I work with clients and users to pin down the real problem, help scope it, then build and ship it across frontend and backend. 4 years across fintech, gaming and consumer products; currently a full-stack engineer at Pixel8Labs.',
  summary:
    'Christian Dinata is a product engineer who works with clients and users to scope products, then builds and ships them across frontend and backend. 4 years across fintech, gaming and consumer products.',
  /** Square headshot in /public. Leave empty to show the monogram instead. */
  photo: '',
};

/** Headline proof points. Every number here must be on the CV. */
export const proof = [
  { value: '10+', unit: 'launches', label: 'handled on Ramen Finance, front to back' },
  { value: '1M+', unit: 'raised', label: 'in BERA, Berachain’s currency, across those launches' },
  { value: '+30%', unit: 'completion', label: 'in testing, after a research-led redesign' },
  { value: '4', unit: 'years', label: 'research, design, frontend, backend' },
];

/** Recruiter quick-scan card. */
export const glance = [
  { k: 'Looking for', v: 'Product Engineer (full‑stack)' },
  { k: 'Currently', v: 'Full‑stack Engineer, Pixel8Labs' },
  { k: 'Based in', v: 'Indonesia · GMT+7 · Remote-ready' },
  { k: 'Core stack', v: 'TypeScript, React/Next.js, Go, PostgreSQL' },
  { k: 'Also', v: 'Figma, user research, product analytics' },
  { k: 'Languages', v: 'English, Indonesian' },
  { k: 'Education', v: 'B.Eng. Electrical Engineering, ITB' },
];

/** The "How I work" loop. Each stage points at real evidence. */
export const loop = [
  {
    stage: 'Listen',
    principle: 'Shape the product around each client’s rules.',
    evidence: 'On Ramen Finance I handled 10+ launch partners, each with its own sale rules, timeline and community, from setup through to claims.',
    source: 'Ramen Finance · Pixel8Labs',
    slug: 'ramen-finance',
  },
  {
    stage: 'Research',
    principle: 'Talk to users before writing code.',
    evidence: 'Interviewed and surveyed 25+ users at Sustaination to find where people actually got stuck.',
    source: 'Sustaination · UI/UX',
  },
  {
    stage: 'Design',
    principle: 'Prototype the riskiest part first.',
    evidence: 'Built 15+ high-fidelity Figma prototypes; 3 of my recommendations were adopted by the product team.',
    source: 'Sustaination · UI/UX',
  },
  {
    stage: 'Ship',
    principle: 'Own the whole slice, frontend to backend.',
    evidence: 'Worked frontend and backend on the Ramen Finance launchpad and handled 10+ launches on it. For W3GG, shipped Xsolla subscriptions and Steam integration.',
    source: 'Ramen Finance',
    slug: 'ramen-finance',
  },
  {
    stage: 'Learn',
    principle: 'Measure, then iterate.',
    evidence: 'At Sustaination I used Google Analytics to find where users dropped off, then redesigned those flows. Task completion rose 30% in testing.',
    source: 'Sustaination · UI/UX',
  },
];

export const toolkit = [
  { group: 'Product', items: ['User interviews & surveys', 'Figma prototyping', 'Product analytics', 'Scoping & specs'] },
  { group: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Vite'] },
  { group: 'Backend', items: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'REST APIs'] },
  { group: 'Integrations', items: ['Payments (Xsolla)', 'Steam API', 'Wallet sign-in', 'Google Analytics'] },
  { group: 'Infra', items: ['GCP Cloud Run', 'Docker', 'GitHub Actions', 'CI/CD'] },
];

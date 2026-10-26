import { profile, proof, glance, loop, toolkit } from './content/profile';
import { work, lab } from './content/work';
import { experience } from './content/experience';
import type { CaseStudy, Shot } from './content/types';

const icon = {
  arrow: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  out: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  back: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  down: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>',
  copy: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/></svg>',
  search: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun: '<svg class="i i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="i i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/></svg>',
  github: '<svg class="i i-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg class="i i-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5Z"/></svg>',
  mail: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
};

export const SITE = 'https://christiandinata-portfolio.netlify.app';

/** Title + description per route; used at runtime and by the build-time prerender. */
export function pageMeta(c?: CaseStudy) {
  return c
    ? { title: `${c.title} — case study · ${profile.name}`, description: `${c.tagline} ${c.role}, ${c.company}.`, path: `/work/${c.slug}` }
    : { title: `${profile.name} — ${profile.role}`, description: profile.summary, path: '/' };
}

const pad = (n: number) => String(n + 1).padStart(2, '0');
const host = (url: string) => new URL(url).host.replace(/^www\./, '');
const tempHost = (url: string) => /\.(vercel|netlify)\.app$/.test(host(url));
const card = (src: string) => src.replace(/\.webp$/, '-card.webp');

function frame(shot: Shot, url: string | undefined, label: string, opts: { eager?: boolean; sizes?: string } = {}) {
  return `
    <div class="frame">
      <div class="frame-bar" aria-hidden="true"><i></i><i></i><i></i><span>${url && !tempHost(url) ? host(url) : label}</span></div>
      <img src="${card(shot.src)}" srcset="${card(shot.src)} 900w, ${shot.src} 1600w"
        sizes="${opts.sizes ?? '(min-width: 1100px) 620px, 92vw'}" alt="${shot.alt}"
        width="1600" height="900" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />
    </div>`;
}

export function nav() {
  return `
  <header class="nav" id="nav">
    <div class="wrap nav-in">
      <a href="/" class="brand" data-link aria-label="${profile.name}, home">
        <span class="brand-mark" aria-hidden="true">cd</span>
        <span class="brand-text"><b>${profile.name}</b><span>${profile.role}</span></span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="/#work" data-link data-spy="work">Work</a>
        <a href="/#approach" data-link data-spy="approach">Approach</a>
        <a href="/#experience" data-link data-spy="experience">Experience</a>
        <a href="/#contact" data-link data-spy="contact">Contact</a>
      </nav>
      <div class="nav-actions">
        <button class="icon-btn kbd-btn" data-palette aria-haspopup="dialog">${icon.search}<span class="sr">Search</span><kbd data-mod>⌘K</kbd></button>
        <button class="btn btn-ghost btn-sm nav-menu" data-palette aria-haspopup="dialog">Menu</button>
        <button class="icon-btn" data-theme-toggle aria-label="Dark mode" aria-pressed="false">${icon.sun}${icon.moon}</button>
        <a class="btn btn-ink btn-sm nav-cv" href="${profile.cv}" download><span>Résumé</span> ${icon.down}</a>
      </div>
    </div>
  </header>`;
}

export function footer() {
  return `
  <footer class="foot">
    <div class="wrap foot-in">
      <p>© ${new Date().getFullYear()} ${profile.name}. Designed and built by me — Vite, TypeScript, zero frameworks.</p>
      <p class="foot-links">
        <a href="${profile.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:${profile.email}">Email</a>
        <button data-palette class="linkish foot-k" aria-haspopup="dialog">Press <kbd data-mod>⌘K</kbd></button>
      </p>
    </div>
  </footer>`;
}

function sectionHead(id: string, kicker: string, title: string, lede?: string) {
  return `
    <div class="sec-head rv">
      <p class="kicker"><span>${kicker}</span></p>
      <h2 id="${id}-title">${title}</h2>
      ${lede ? `<p class="sec-lede">${lede}</p>` : ''}
    </div>`;
}

function caseCard(c: CaseStudy, i: number) {
  return `
    <li class="case rv" style="--h:${c.hue}">
      <a href="/work/${c.slug}" data-link class="case-link" aria-labelledby="case-${c.slug}">
        <div class="case-copy">
          <p class="case-meta"><span class="case-n">${pad(i)}</span>${c.domain} · ${c.year} · ${c.company}${c.status ? `<span class="pill"><span class="sr"> · Live site: </span>${c.status}</span>` : ''}</p>
          <h3 id="case-${c.slug}">${c.title}</h3>
          <p class="case-tag">${c.tagline}</p>
          <p class="case-role">${c.role}</p>
          <span class="case-cta">Read case study ${icon.arrow}</span>
        </div>
        <div class="case-visual">${frame(c.shots[c.thumb ?? 0], c.liveUrl, c.title)}</div>
      </a>
    </li>`;
}

function loopSection() {
  const n = loop.length;
  const nodes = loop
    .map((s, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const x = 50 + 40 * Math.cos(a);
      const y = 50 + 40 * Math.sin(a);
      return `<button class="orbit-node" role="tab" id="tab-${i}" aria-controls="loop-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-step="${i}" style="left:${x}%;top:${y}%"><span>${pad(i)}</span>${s.stage}</button>`;
    })
    .join('');
  return `
  <section class="sec approach" id="approach" aria-labelledby="approach-title">
    <div class="wrap">
      ${sectionHead('approach', 'How I work', 'One loop, from <em>conversation to launch</em>.', 'Product engineering is a loop, not a hand-off. I stay with the work from the first client call through release, and each step below is backed by something I have actually done.')}
      <div class="loop rv" data-loop>
        <div class="orbit" role="tablist" aria-label="Product loop stages">
          <svg class="orbit-ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="40" class="ring-track"/>
            <circle cx="50" cy="50" r="40" class="ring-progress" pathLength="100"/>
          </svg>
          <div class="orbit-core" aria-hidden="true"><span>Client</span><b>↻</b><span>Product</span></div>
          ${nodes}
        </div>
        <div class="loop-panel" id="loop-panel" role="tabpanel" aria-labelledby="tab-0">
          <button class="loop-toggle" data-loop-toggle aria-pressed="false" aria-label="Pause auto-advance"><i aria-hidden="true"></i></button>
          ${loop
            .map(
              (s, i) => `
            <article class="loop-step" data-step="${i}" ${i === 0 ? '' : 'hidden'}>
              <p class="loop-stage"><span>${pad(i)} / ${pad(n - 1)}</span>${s.stage}</p>
              <h3>${s.principle}</h3>
              <p class="loop-evidence">${s.evidence}</p>
              <p class="loop-source">${s.slug ? `<a href="/work/${s.slug}" data-link>${s.source} ${icon.arrow}</a>` : s.source}</p>
            </article>`,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>`;
}

export function home() {
  return `
  ${nav()}
  <main id="main" tabindex="-1">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="wrap hero-in">
        <div class="hero-copy">
          <p class="status intro"><span class="pulse" aria-hidden="true"></span>${profile.status}</p>
          <h1 id="hero-title" class="intro">I turn client briefs into <em>shipped&nbsp;products</em>.</h1>
          <p class="lede intro">${profile.intro}</p>
          <div class="ctas intro">
            <a class="btn btn-accent" href="/#work" data-link>See selected work ${icon.arrow}</a>
            <button class="btn btn-ghost" data-copy="${profile.email}">${icon.copy}<span>${profile.email}</span></button>
          </div>
        </div>
        <aside class="glance intro" aria-label="At a glance">
          <p class="glance-badge">For recruiters · the 30-second version</p>
          <div class="glance-head">
            ${profile.photo ? `<img src="${profile.photo}" alt="Portrait of ${profile.name}" width="64" height="64">` : '<span class="brand-mark glance-mark" aria-hidden="true">cd</span>'}
            <div><b>${profile.name}</b><span>${profile.role}</span></div>
          </div>
          <dl class="glance-list">
            ${glance.map((g) => `<div><dt>${g.k}</dt><dd>${g.v}</dd></div>`).join('')}
          </dl>
          <div class="glance-actions">
            <a class="btn btn-ink" href="${profile.cv}" download>${icon.down} Download résumé</a>
            <a class="icon-btn" href="${profile.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
            <a class="icon-btn" href="${profile.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon.github}</a>
          </div>
        </aside>
      </div>
      <div class="wrap">
        <ul class="proof" aria-label="Highlights">
          ${proof.map((p) => `<li class="rv"><p class="proof-v">${p.value}<span>${p.unit}</span></p><p class="proof-l">${p.label}</p></li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="sec" id="work" aria-labelledby="work-title">
      <div class="wrap">
        ${sectionHead('work', 'Selected work', 'Products I helped take <em>from brief to launch</em>.', 'Each one is a short case study: what the client needed, the product calls we made, what I shipped, and how it turned out.')}
        <ol class="cases">${work.map(caseCard).join('')}</ol>
      </div>
    </section>

    ${loopSection()}

    <section class="sec" id="experience" aria-labelledby="experience-title">
      <div class="wrap">
        ${sectionHead('experience', 'Experience', 'From frontend <em>to full product</em>.', 'Full-stack product work today, built on fintech, UX research and a frontend lead role before it.')}
        <ol class="roles">
          ${experience
            .map(
              (r) => `
            <li class="role rv">
              <p class="role-when">${r.period}</p>
              <div class="role-body">
                <h3>${r.title} <span>· ${r.company}</span></h3>
                <p class="role-sum">${r.summary}</p>
                <ul>${r.points.map((p) => `<li>${p}</li>`).join('')}</ul>
                <p class="chips">${r.stack.map((s) => `<span>${s}</span>`).join('')}</p>
              </div>
            </li>`,
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section class="sec" id="lab" aria-labelledby="lab-title">
      <div class="wrap">
        ${sectionHead('lab', 'Lab & toolkit', 'Smaller builds, <em>sharp tools</em>.')}
        <ul class="lab">
          ${lab
            .map(
              (l) => `
            <li class="lab-item rv">
              ${l.url ? `<a href="${l.url}" target="_blank" rel="noopener">` : '<div>'}
                <h3>${l.title}${l.url ? icon.out : ''}</h3>
                <p>${l.blurb}</p>
                <p class="chips">${l.stack.map((s) => `<span>${s}</span>`).join('')}</p>
              ${l.url ? '</a>' : '</div>'}
            </li>`,
            )
            .join('')}
        </ul>
        <div class="toolkit rv">
          ${toolkit.map((t) => `<div><h3>${t.group}</h3><ul>${t.items.map((x) => `<li>${x}</li>`).join('')}</ul></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec contact" id="contact" aria-labelledby="contact-title">
      <div class="wrap contact-in rv">
        <p class="kicker"><span>Contact</span></p>
        <h2 id="contact-title">Building something people <em>actually want?</em></h2>
        <p class="sec-lede">I'm looking for a product engineering role on a small team that ships. I usually reply within a day.</p>
        <div class="contact-actions">
          <a class="btn btn-accent btn-lg" href="mailto:${profile.email}">${icon.mail} ${profile.email}</a>
          <button class="btn btn-ghost btn-lg" data-copy="${profile.email}">${icon.copy}<span>Copy email</span></button>
          <a class="btn btn-ghost btn-lg" href="${profile.cv}" download>${icon.down} Résumé (PDF)</a>
        </div>
        <p class="contact-links">
          <a href="${profile.linkedin}" target="_blank" rel="noopener">${icon.linkedin} LinkedIn</a>
          <a href="${profile.github}" target="_blank" rel="noopener">${icon.github} GitHub</a>
        </p>
      </div>
    </section>
  </main>
  ${footer()}`;
}

export function caseStudy(c: CaseStudy) {
  const i = work.indexOf(c);
  const next = work[(i + 1) % work.length];
  const [cover, ...rest] = c.shots;
  return `
  ${nav()}
  <main id="main" tabindex="-1" class="cs" style="--h:${c.hue}">
    <div class="cs-glow" aria-hidden="true"></div>
    <div class="wrap">
      <a href="/#work" data-link class="back">${icon.back} All work</a>
      <header class="cs-head">
        <p class="case-meta"><span class="case-n">${pad(i)}</span>${c.domain} · ${c.year}${c.status ? `<span class="pill"><span class="sr"> · Live site: </span>${c.status}</span>` : ''}</p>
        <h1>${c.title}</h1>
        <p class="cs-tag">${c.tagline}</p>
        <dl class="cs-facts">
          <div><dt>Role</dt><dd>${c.role}</dd></div>
          <div><dt>Company</dt><dd>${c.company}</dd></div>
          <div><dt>Year</dt><dd>${c.year}</dd></div>
          <div><dt>Stack</dt><dd>${c.stack.join(', ')}</dd></div>
        </dl>
        ${
          c.liveUrl || c.repoUrl
            ? `<div class="ctas">
          ${c.liveUrl ? `<a class="btn btn-accent" href="${c.liveUrl}" target="_blank" rel="noopener">Open the live product ${icon.out}<span class="sr"> (${host(c.liveUrl)}, opens in a new tab)</span></a>` : ''}
          ${c.repoUrl ? `<a class="btn btn-ghost" href="${c.repoUrl}" target="_blank" rel="noopener">${icon.github} Source</a>` : ''}
        </div>`
            : ''
        }
      </header>
      <figure class="cs-cover">
        <button class="zoom" data-zoom="0" aria-label="Enlarge: ${cover.caption}">${frame(cover, c.liveUrl, c.title, { eager: true, sizes: '(min-width: 1200px) 1140px, 94vw' })}</button>
        <figcaption>${cover.caption}</figcaption>
      </figure>
      ${c.metrics.length ? `<dl class="cs-metrics rv">${c.metrics.map((m) => `<div><dt>${m.label}</dt><dd>${m.value}</dd></div>`).join('')}</dl>` : ''}
      <div class="cs-body">
        <aside class="cs-toc" aria-label="On this page">
          <p>On this page</p>
          <a href="#problem">The brief</a><a href="#decisions">Product calls</a><a href="#built">What I shipped</a><a href="#outcome">Outcome</a>${rest.length ? '<a href="#screens">Screens</a>' : ''}
        </aside>
        <div class="cs-content">
          <section id="problem" class="rv"><h2>The brief</h2><p class="cs-lead">${c.problem}</p></section>
          <section id="decisions" class="rv"><h2>Product calls we made</h2><ol class="calls">${c.decisions.map((d) => `<li>${d}</li>`).join('')}</ol></section>
          <section id="built" class="rv"><h2>What I shipped</h2><ul class="built">${c.built.map((d) => `<li>${d}</li>`).join('')}</ul></section>
          <section id="outcome" class="rv"><h2>Outcome</h2><p class="cs-outcome">${c.outcome}</p></section>
        </div>
      </div>
      ${
        rest.length
          ? `<section id="screens" class="cs-screens" aria-label="Screens">
              ${rest.map((s, k) => `<figure class="rv"><button class="zoom" data-zoom="${k + 1}" aria-label="Enlarge: ${s.caption}">${frame(s, c.liveUrl, c.title, { sizes: '(min-width: 900px) 560px, 94vw' })}</button><figcaption>${s.caption}</figcaption></figure>`).join('')}
            </section>`
          : ''
      }
      <a class="next rv" href="/work/${next.slug}" data-link style="--h:${next.hue}">
        <span>Next case study</span>
        <b>${next.title} ${icon.arrow}</b>
        <span class="next-tag">${next.tagline}</span>
      </a>
    </div>
    <dialog class="lightbox" aria-label="Screenshot viewer">
      <button class="lb-close icon-btn" aria-label="Close">✕</button>
      <button class="lb-nav lb-prev icon-btn" aria-label="Previous">${icon.back}</button>
      <figure><img alt="" /><figcaption></figcaption></figure>
      <button class="lb-nav lb-next icon-btn" aria-label="Next">${icon.arrow}</button>
    </dialog>
  </main>
  ${footer()}`;
}

export function notFound() {
  return `
  ${nav()}
  <main id="main" tabindex="-1" class="wrap nf">
    <p class="kicker"><span>404</span></p>
    <h1>That page didn't ship.</h1>
    <p class="sec-lede">The link may be old. The work is still here.</p>
    <a class="btn btn-accent" href="/" data-link>${icon.back} Back home</a>
  </main>
  ${footer()}`;
}

export function palette() {
  return `
  <dialog class="palette" aria-label="Search and jump">
    <div class="pal-in">
      <label class="pal-search">${icon.search}<input type="text" placeholder="Jump to a section or case study…" aria-label="Search" autocomplete="off" role="combobox" aria-expanded="true" aria-controls="pal-list"/><kbd>esc</kbd></label>
      <ul id="pal-list" role="listbox" aria-label="Results"></ul>
      <p class="pal-empty" hidden>Nothing matches. Try “work” or “email”.</p>
    </div>
  </dialog>
  <div class="toast" role="status" aria-live="polite"></div>`;
}

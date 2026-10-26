import './style.css';
import { profile } from './content/profile';
import { work } from './content/work';
import { home, caseStudy, notFound, palette, pageMeta } from './views';

const app = document.getElementById('app')!;
document.body.insertAdjacentHTML('beforeend', palette());
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOD = /mac|iphone|ipad/i.test((navigator as Navigator & { userAgentData?: { platform: string } }).userAgentData?.platform ?? navigator.platform) ? '⌘' : 'Ctrl ';

// ---------- Router ----------
let cleanup: (() => void)[] = [];
let lastPath = '';
// The build prerenders each route into #app; on first load we keep that DOM and only wire it up.
let hydrate = app.dataset.route === (location.pathname.replace(/\/+$/, '') || '/');

function render(focus = false) {
  lastPath = location.pathname;
  cleanup.forEach((f) => f());
  cleanup = [];
  const html = (markup: () => string) => {
    if (!hydrate) app.innerHTML = markup();
    hydrate = false;
  };
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const slug = path.match(/^\/work\/([\w-]+)$/)?.[1];
  const c = slug ? work.find((w) => w.slug === slug) : undefined;

  if (path === '/') {
    html(home);
    initLoop();
  } else if (c) {
    html(() => caseStudy(c));
    initLightbox(c.shots);
  } else {
    html(notFound);
  }
  const m = path === '/' || c ? pageMeta(c) : { title: `Not found · ${profile.name}`, description: profile.summary };
  document.title = m.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
  initReveal();
  initNavSpy();
  syncNav();
  syncThemeBtn();
  document.querySelectorAll('kbd[data-mod]').forEach((k) => (k.textContent = `${MOD}K`));
  scrollToHash();
  if (focus) document.getElementById('main')?.focus({ preventScroll: true });
}

function scrollToHash(smooth = false) {
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: smooth && !reduced ? 'smooth' : 'auto' });
  else window.scrollTo(0, 0);
}

function navigate() {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
  if (doc.startViewTransition && !reduced && !document.hidden) doc.startViewTransition(() => render(true)).ready.catch(() => {});
  else render(true);
}

function go(url: string) {
  const u = new URL(url, location.href);
  if (u.pathname + u.hash !== location.pathname + location.hash) history.pushState(null, '', u.pathname + u.hash);
  if (u.pathname === lastPath) scrollToHash(true);
  else navigate();
}

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[data-link]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  go(a.href);
});
addEventListener('popstate', () => (location.pathname === lastPath ? scrollToHash() : navigate()));

// ---------- Theme ----------
document.addEventListener('click', (e) => {
  if (!(e.target as Element).closest('[data-theme-toggle]')) return;
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  syncThemeBtn();
});
function syncThemeBtn() {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.setAttribute('aria-pressed', String(dark)));
}

// ---------- Copy email + toast ----------
const toast = document.querySelector<HTMLElement>('.toast')!;
let toastTimer = 0;
function say(msg: string) {
  toast.textContent = msg;
  toast.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('on'), 2200);
}
document.addEventListener('click', async (e) => {
  const b = (e.target as Element).closest<HTMLElement>('[data-copy]');
  if (!b) return;
  try {
    await navigator.clipboard.writeText(b.dataset.copy!);
    say('Email copied. Talk soon.');
  } catch {
    location.href = `mailto:${b.dataset.copy}`;
  }
});

// ---------- Nav: scrolled state + section spy ----------
function syncNav() {
  document.getElementById('nav')?.classList.toggle('scrolled', scrollY > 8);
}
addEventListener('scroll', syncNav, { passive: true });

function initNavSpy() {
  if (location.pathname !== '/') return;
  const links = document.querySelectorAll<HTMLElement>('[data-spy]');
  const sections = [...document.querySelectorAll<HTMLElement>('#main > section')];
  // Active = last section whose top has passed just under the sticky nav. Independent of viewport height.
  const spy = () => {
    const y = scrollY + 140;
    const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    const cur = atEnd ? sections[sections.length - 1].id : (sections.filter((s) => s.offsetTop <= y).pop()?.id ?? '');
    links.forEach((l) => l.toggleAttribute('aria-current', l.dataset.spy === cur));
  };
  spy();
  addEventListener('scroll', spy, { passive: true });
  cleanup.push(() => removeEventListener('scroll', spy));
}

// ---------- Scroll reveal ----------
function initReveal() {
  const els = document.querySelectorAll('.rv');
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
  cleanup.push(() => io.disconnect());
}

// ---------- "How I work" loop ----------
function initLoop() {
  const root = document.querySelector<HTMLElement>('[data-loop]');
  if (!root) return;
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('.orbit-node')];
  const steps = [...root.querySelectorAll<HTMLElement>('.loop-step')];
  const ring = root.querySelector<SVGCircleElement>('.ring-progress')!;
  const panel = root.querySelector<HTMLElement>('[role="tabpanel"]')!;
  const toggle = root.querySelector<HTMLButtonElement>('[data-loop-toggle]')!;
  let cur = 0;
  let timer = 0;

  const show = (i: number, focus = false) => {
    cur = (i + tabs.length) % tabs.length;
    tabs.forEach((t, k) => {
      t.setAttribute('aria-selected', String(k === cur));
      t.tabIndex = k === cur ? 0 : -1;
      t.classList.toggle('done', k < cur);
    });
    steps.forEach((s, k) => (s.hidden = k !== cur));
    panel.setAttribute('aria-labelledby', tabs[cur].id);
    ring.style.strokeDashoffset = String(100 - ((cur + 1) / tabs.length) * 100);
    if (focus) tabs[cur].focus();
  };
  // Auto-advance while on screen; any interaction stops it for good (WCAG 2.2.2), the button restarts it.
  let playing = !reduced;
  let visible = false;
  const sync = () => {
    clearInterval(timer);
    if (playing && visible) timer = window.setInterval(() => show(cur + 1), 5000);
    toggle.setAttribute('aria-pressed', String(!playing));
    root.classList.toggle('playing', playing);
  };
  const stop = () => ((playing = false), sync());
  const io = new IntersectionObserver(([en]) => ((visible = en.isIntersecting), sync()));
  io.observe(root);
  cleanup.push(() => (io.disconnect(), clearInterval(timer)));
  toggle.addEventListener('click', () => ((playing = !playing), sync()));
  tabs.forEach((t, k) => {
    t.addEventListener('click', () => (stop(), show(k)));
    t.addEventListener('keydown', (e) => {
      const to = { ArrowRight: cur + 1, ArrowDown: cur + 1, ArrowLeft: cur - 1, ArrowUp: cur - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (to === undefined) return;
      e.preventDefault();
      stop();
      show(to, true);
    });
  });
  root.querySelector('.orbit')!.addEventListener('focusin', stop);
  root.addEventListener('pointerenter', () => playing && stop());
  show(0);
  sync();
}

// ---------- Lightbox ----------
function initLightbox(shots: { src: string; alt: string; caption: string }[]) {
  const dlg = document.querySelector<HTMLDialogElement>('.lightbox');
  if (!dlg) return;
  const img = dlg.querySelector('img')!;
  const cap = dlg.querySelector('figcaption')!;
  let i = 0;
  const show = (k: number) => {
    i = (k + shots.length) % shots.length;
    img.src = shots[i].src;
    img.alt = shots[i].alt;
    cap.textContent = `${shots[i].caption}  ·  ${i + 1} / ${shots.length}`;
  };
  document.querySelectorAll<HTMLElement>('[data-zoom]').forEach((b) =>
    b.addEventListener('click', () => (show(+b.dataset.zoom!), dlg.showModal())),
  );
  dlg.querySelector('.lb-close')!.addEventListener('click', () => dlg.close());
  dlg.querySelector('.lb-prev')!.addEventListener('click', () => show(i - 1));
  dlg.querySelector('.lb-next')!.addEventListener('click', () => show(i + 1));
  dlg.addEventListener('click', (e) => e.target === dlg && dlg.close());
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  if (shots.length < 2) dlg.querySelectorAll<HTMLElement>('.lb-nav').forEach((b) => (b.hidden = true));
}

// ---------- Command palette ----------
type Cmd = { label: string; hint: string; run: () => void };
const cmds: Cmd[] = [
  { label: 'Selected work', hint: 'Section', run: () => go('/#work') },
  ...work.map((w) => ({ label: w.title, hint: `Case study · ${w.domain}`, run: () => go(`/work/${w.slug}`) })),
  { label: 'How I work', hint: 'Section', run: () => go('/#approach') },
  { label: 'Experience', hint: 'Section', run: () => go('/#experience') },
  { label: 'Lab & toolkit', hint: 'Section', run: () => go('/#lab') },
  { label: 'Contact', hint: 'Section', run: () => go('/#contact') },
  { label: 'Download résumé', hint: 'PDF', run: () => Object.assign(document.createElement('a'), { href: profile.cv, download: '' }).click() },
  { label: 'Copy email address', hint: profile.email, run: () => navigator.clipboard.writeText(profile.email).then(() => say('Email copied. Talk soon.')) },
  { label: 'LinkedIn', hint: 'External', run: () => open(profile.linkedin, '_blank', 'noopener') },
  { label: 'GitHub', hint: 'External', run: () => open(profile.github, '_blank', 'noopener') },
  { label: 'Toggle dark mode', hint: 'Theme', run: () => document.querySelector<HTMLElement>('[data-theme-toggle]')?.click() },
];

const pal = document.querySelector<HTMLDialogElement>('.palette')!;
const palInput = pal.querySelector('input')!;
const palList = pal.querySelector('ul')!;
const palEmpty = pal.querySelector<HTMLElement>('.pal-empty')!;
let palItems: Cmd[] = [];
let palIdx = 0;

function palRender() {
  const q = palInput.value.trim().toLowerCase();
  palItems = cmds.filter((c) => (c.label + ' ' + c.hint).toLowerCase().includes(q));
  palIdx = Math.min(palIdx, Math.max(0, palItems.length - 1));
  palList.innerHTML = palItems.length
    ? palItems
        .map((c, i) => `<li role="option" id="pal-${i}" aria-selected="${i === palIdx}" data-i="${i}"><span>${c.label}</span><small>${c.hint}</small></li>`)
        .join('')
    : '';
  palEmpty.hidden = palItems.length > 0;
  if (palItems.length) palInput.setAttribute('aria-activedescendant', `pal-${palIdx}`);
  else palInput.removeAttribute('aria-activedescendant');
  palList.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
}
function palOpen() {
  palInput.value = '';
  palIdx = 0;
  palRender();
  pal.showModal();
}
function palRun(i: number) {
  const c = palItems[i];
  if (!c) return;
  pal.close();
  c.run();
}
palInput.addEventListener('input', () => ((palIdx = 0), palRender()));
palInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    palIdx = (palIdx + (e.key === 'ArrowDown' ? 1 : -1) + palItems.length) % Math.max(1, palItems.length);
    palRender();
  } else if (e.key === 'Enter') palRun(palIdx);
});
palList.addEventListener('click', (e) => {
  const li = (e.target as Element).closest<HTMLElement>('[data-i]');
  if (li) palRun(+li.dataset.i!);
});
pal.addEventListener('click', (e) => e.target === pal && pal.close());
document.addEventListener('click', (e) => (e.target as Element).closest('[data-palette]') && palOpen());
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    pal.open ? pal.close() : palOpen();
  }
});

render();

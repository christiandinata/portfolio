import { defineConfig, type Plugin } from 'vite';
import type { OutputAsset } from 'rollup';
import { work } from './src/content/work';
import { profile } from './src/content/profile';
import { home, caseStudy, notFound, palette, pageMeta, SITE } from './src/views';

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Prerender every route to static HTML so search engines and link previews
// (LinkedIn, Slack) see real content, and generate the sitemap from work.ts.
function prerender(): Plugin {
  return {
    name: 'prerender',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html'] as OutputAsset;
      const tpl = String(index.source);
      const page = (body: string, m: { title: string; description: string; path: string }, type = 'article') => {
        const url = SITE + m.path;
        const set = (re: RegExp, v: string) => (html: string) => html.replace(re, (_, pre: string) => pre + attr(v));
        return [
          set(/(<title>)[^<]*/, m.title),
          set(/(name="description" content=")[^"]*/, m.description),
          set(/(property="og:title" content=")[^"]*/, m.title),
          set(/(property="og:description" content=")[^"]*/, m.description),
          set(/(property="og:url" content=")[^"]*/, url),
          set(/(property="og:type" content=")[^"]*/, type),
          set(/(rel="canonical" href=")[^"]*/, url),
        ]
          .reduce((html, f) => f(html), tpl)
          .replace('<div id="app"></div>', () => `<div id="app" data-route="${m.path}">${body}</div>`);
      };
      const emit = (fileName: string, source: string) => {
        // Cheap guard: fail the build on template slips instead of shipping them.
        if (/\bundefined\b|\[object Object\]/.test(source)) this.error(`${fileName} contains "undefined" or "[object Object]"`);
        this.emitFile({ type: 'asset', fileName, source });
      };
      for (const c of work) {
        if (!c.shots.length) this.error(`work.ts: "${c.slug}" needs at least one shot`);
        if (c.thumb !== undefined && !c.shots[c.thumb]) this.error(`work.ts: "${c.slug}" thumb ${c.thumb} is out of range`);
      }
      for (const hook of ['class="pal-empty"', 'id="pal-list"', 'class="toast"']) {
        if (!palette().includes(hook)) this.error(`palette() lost ${hook}, which main.ts depends on`);
      }

      index.source = page(home(), pageMeta(), 'profile');
      // work/<slug>.html is served at /work/<slug> by Netlify, matching the canonical (no trailing slash).
      for (const c of work) emit(`work/${c.slug}.html`, page(caseStudy(c), pageMeta(c)));
      const nf = page(notFound(), { title: `Not found · ${profile.name}`, description: profile.summary, path: '/404' }, 'website');
      emit('404.html', nf.replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />'));

      const urls = ['/', ...work.map((c) => `/work/${c.slug}`)];
      emit(
        'sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`,
      );
    },
  };
}

export default defineConfig({ plugins: [prerender()] });

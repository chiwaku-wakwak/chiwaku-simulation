// scripts/generate-sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/pendulum', changefreq: 'monthly', priority: 0.8 },
  { url: '/seismic', changefreq: 'monthly', priority: 0.8 },
  { url: '/gravitational-lens', changefreq: 'monthly', priority: 0.8 },
  { url: '/kelvin-helmholtz', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/access', changefreq: 'monthly', priority: 0.7 },
  // node --loader ts-node/esm scripts/generate-sitemap.ts
];

(async () => {
  const stream = new SitemapStream({ hostname: 'https://chiwaku-simulation-2025.vercel.app' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
  const write = createWriteStream('public/sitemap.xml');
  write.write(xml);
  write.end();
})();

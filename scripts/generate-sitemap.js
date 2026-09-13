// This script generates sitemap.xml from the tools config
// Run: node scripts/generate-sitemap.js
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsFile = readFileSync(resolve(__dirname, '../src/config/tools.ts'), 'utf-8');
const blogFile = readFileSync(resolve(__dirname, '../src/config/blogPosts.ts'), 'utf-8');

// Extract tool slugs ONLY from the `tools` array (category slugs live in a
// separate array and are NOT valid /tools/:slug routes).
const toolsArray = toolsFile.slice(toolsFile.indexOf('export const tools'));
const slugRegex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(toolsArray)) !== null) {
  if (!slugs.includes(match[1])) slugs.push(match[1]);
}

// Extract all blog slugs
const blogSlugRegex = /slug:\s*"([^"]+)"/g;
const blogSlugs = [];
while ((match = blogSlugRegex.exec(blogFile)) !== null) {
  blogSlugs.push(match[1]);
}

// Authoritative publish dates for blog posts (used as <lastmod>)
const blogDates = [];
const dateRegex = /date:\s*"([^"]+)"/g;
while ((match = dateRegex.exec(blogFile)) !== null) {
  blogDates.push(match[1]);
}

const BASE_URL = 'https://toolverse-hub.vercel.app';

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/tools', priority: '0.9', changefreq: 'weekly' },
  { loc: '/calculators', priority: '0.8', changefreq: 'weekly' },
  { loc: '/converters', priority: '0.8', changefreq: 'weekly' },
  { loc: '/text-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/generators', priority: '0.8', changefreq: 'weekly' },
  { loc: '/student-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/developer-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/design-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/finance', priority: '0.8', changefreq: 'weekly' },
  { loc: '/date-time', priority: '0.8', changefreq: 'weekly' },
  { loc: '/math-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/productivity', priority: '0.8', changefreq: 'weekly' },
  { loc: '/writing-tools', priority: '0.8', changefreq: 'weekly' },
  { loc: '/about', priority: '0.5', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.5', changefreq: 'monthly' },
  { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

for (const slug of slugs) {
  xml += `  <url>
    <loc>${BASE_URL}/tools/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

for (const [i, slug] of blogSlugs.entries()) {
  xml += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
${blogDates[i] ? `    <lastmod>${blogDates[i]}</lastmod>\n` : ''}    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

xml += `</urlset>
`;

const total = staticPages.length + slugs.length + blogSlugs.length;
writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`✅ Sitemap generated with ${total} URLs (${slugs.length} tools, ${blogSlugs.length} blog posts)`);

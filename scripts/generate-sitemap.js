// This script generates sitemap.xml from the tools config
// Run: node scripts/generate-sitemap.js
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const toolsFile = readFileSync(resolve(__dirname, '../src/config/tools.ts'), 'utf-8');
const blogFile = readFileSync(resolve(__dirname, '../src/config/blogPosts.ts'), 'utf-8');

// Extract all tool slugs
const slugRegex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(toolsFile)) !== null) {
  slugs.push(match[1]);
}

// Extract all blog slugs
const blogSlugRegex = /slug:\s*"([^"]+)"/g;
const blogSlugs = [];
while ((match = blogSlugRegex.exec(blogFile)) !== null) {
  blogSlugs.push(match[1]);
}

const BASE_URL = 'https://toolverse-hub.vercel.app';
const today = new Date().toISOString().split('T')[0];

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
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

for (const slug of slugs) {
  xml += `  <url>
    <loc>${BASE_URL}/tools/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

xml += `</urlset>
`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`✅ Sitemap generated with ${staticPages.length + slugs.length} URLs (${slugs.length} tools)`);

// from https://medium.com/spemer/creating-a-sitemap-generator-for-next-js-3102fb5a297e
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const DOMAIN = 'https://www.jonwalstedt.se';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby([
    // include
    '../pages/**/*.mdx',
    '../pages/*.mdx',
    // exclude
    '!../pages/_*.tsx',
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('../pages/', '')
          .replace('.mdx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;

        console.log(`found page: ${routePath}`);
        return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);
  fs.writeFileSync(
    '../public/sitemap/sitemap-common.xml',
    formattedSitemap,
    'utf8'
  );
})();

// from https://medium.com/spemer/creating-a-sitemap-generator-for-next-js-3102fb5a297e
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const webrootDomain = 'https://www.jonwalstedt.se';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby(['../public/sitemap/*.gz']);
  console.log('pages:', pages);
  const sitemapIndex = `
    ${pages
      .map((page) => {
        const path = page.replace('../public/', '');
        return `
          <sitemap>
            <loc>${`${webrootDomain}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
      })
      .join('')}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync('../public/sitemap.xml', formattedSitemap, 'utf8');
})();
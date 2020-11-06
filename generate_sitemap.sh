# yarn sitemap
echo "[generate_sitemap] removing old sitemaps"
cd public
rm -rf sitemap
mkdir sitemap
cd ..
cd scripts
echo "[generate_sitemap] generating new sitemaps"
node ./sitemap-common.js
node ./compress.js
node ./sitemap.js

echo "[generate_sitemap] send Google a ping to reindex"
curl http://google.com/ping?sitemap=http://www.jonwalstedt.se/sitemap.xml

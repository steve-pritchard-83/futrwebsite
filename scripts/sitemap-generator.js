const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [{ url: '/', changefreq: 'daily', priority: 1.0 }];

const sitemap = new SitemapStream({ hostname: 'https://futr.gg' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

links.forEach(link => {
  sitemap.write(link);
});

sitemap.end(); 
import rss from '@astrojs/rss';
import { a as getCollection } from './_...page_.astro.ed538750.mjs';
import { s as siteConfig } from './404.astro.547cac4c.mjs';
import '../../renderers.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'fs';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'node:path';
import 'mime/lite.js';
import 'path';
import 'html-escaper';
/* empty css                            */
const get = async () => {
  const posts = await getCollection("post");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://nitinsagar.in",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `posts/${post.slug}`
    }))
  });
};

export { get };

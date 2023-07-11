import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { k as deserializeManifest, renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'string-width';
import 'fs';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'node:path';
import 'mime/lite.js';
import 'path';
import 'html-escaper';

const _page0  = () => import('./renderers.mjs').then(n => n.n);
const _page1  = () => import('./chunks/index@_@astro.ca4c477a.mjs');
const _page2  = () => import('./chunks/_slug_.ee82c8cf.mjs');
const _page3  = () => import('./chunks/rss.c8abb9fe.mjs');
const _page4  = () => import('./chunks/about@_@astro.a19f139f.mjs');
const _page5  = () => import('./chunks/_slug_@_@astro.8546b122.mjs');
const _page6  = () => import('./chunks/_...f682631b.mjs');
const _page7  = () => import('./chunks/game@_@js.95b1ab39.mjs');
const _page8  = () => import('./chunks/index@_@astro.ca8c1aba.mjs');
const _page9  = () => import('./chunks/_...04e73873.mjs');
const _page10  = () => import('./chunks/404@_@astro.01ec628e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/og-image/[slug].png.ts", _page2],["src/pages/rss.xml.ts", _page3],["src/pages/about.astro", _page4],["src/pages/posts/[slug].astro", _page5],["src/pages/posts/[...page].astro", _page6],["src/pages/game.js", _page7],["src/pages/tags/index.astro", _page8],["src/pages/tags/[tag]/[...page].astro", _page9],["src/pages/404.astro", _page10]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"},{"type":"external","src":"/_astro/index.4fd0a78d.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[],"routeData":{"route":"/og-image/[slug]","type":"endpoint","pattern":"^\\/og-image\\/([^/]+?)\\.png$","segments":[[{"content":"og-image","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false},{"content":".png","dynamic":false,"spread":false}]],"params":["slug"],"component":"src/pages/og-image/[slug].png.ts","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.11ebd357.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/posts/[slug]","type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/posts/[...page]","type":"page","pattern":"^\\/posts(?:\\/(.*?))?\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/posts/[...page].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[],"routeData":{"route":"/game","type":"endpoint","pattern":"^\\/game$","segments":[[{"content":"game","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/game.js","pathname":"/game","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/tags/[tag]/[...page]","type":"page","pattern":"^\\/tags\\/([^/]+?)(?:\\/(.*?))?\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["tag","...page"],"component":"src/pages/tags/[tag]/[...page].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.37563612.js"},{"type":"external","value":"/_astro/page.756ffed2.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.bcbe4e26.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://nitinsagar.in","base":"/","compressHTML":true,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"dracula","wrap":true},"remarkPlugins":[null,null],"rehypePlugins":[],"remarkRehype":{"footnoteLabel":"Footnotes"},"gfm":false,"smartypants":true},"componentMetadata":[["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/og-image/[slug].png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og-image/[slug].png@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/posts/[slug].astro":"chunks/pages/_slug_.astro.a9acfdea.mjs","/src/pages/og-image/[slug].png.ts":"chunks/pages/_slug_.png.ts.bedb423e.mjs","/src/pages/about.astro":"chunks/pages/about.astro.2624a456.mjs","/src/pages/game.js":"chunks/pages/game.js.8c0b0833.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss.xml.ts.d4c19b00.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.ca4c477a.mjs","\u0000@astro-page:src/pages/og-image/[slug].png@_@ts":"chunks/_slug_.ee82c8cf.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss.c8abb9fe.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.a19f139f.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug_@_@astro.8546b122.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"chunks/_...f682631b.mjs","\u0000@astro-page:src/pages/game@_@js":"chunks/game@_@js.95b1ab39.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index@_@astro.ca8c1aba.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"chunks/_...04e73873.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.01ec628e.mjs","C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index.38003c48.mjs","C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index.80464e61.mjs","C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/content/post/markdown-elements/index.md":"chunks/index.d003b18e.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.11ebd357.js","/astro/hoisted.js?q=1":"_astro/hoisted.37563612.js","astro:scripts/page.js":"_astro/page.756ffed2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about-astro.850f94c9.png","/_astro/twinkle-star-latin-ext-400-normal.3d4662b4.woff2","/_astro/twinkle-star-latin-400-normal.9d640f66.woff2","/_astro/twinkle-star-vietnamese-400-normal.42999517.woff2","/_astro/twinkle-star-latin-ext-400-normal.f034b356.woff","/_astro/twinkle-star-vietnamese-400-normal.ec0a17bc.woff","/_astro/twinkle-star-latin-400-normal.0ad2ebac.woff","/_astro/_slug_.bcbe4e26.css","/_astro/index.4fd0a78d.css","/192x192.png","/512x512.png","/apple-touch-icon.png","/assumption.svg","/background.png","/doc.png","/favicon.ico","/Frame 1.png","/h.svg","/icon.svg","/manifest.webmanifest","/Plan.png","/robots.txt","/social-card.png","/story.jpeg","/y.svg","/_astro/hoisted.11ebd357.js","/_astro/hoisted.37563612.js","/_astro/page.756ffed2.js","/fonts/Inter-Black.ttf","/fonts/Inter-Bold.ttf","/fonts/Inter-ExtraBold.ttf","/fonts/Inter-ExtraLight.ttf","/fonts/Inter-Light.ttf","/fonts/Inter-Medium.ttf","/fonts/Inter-Regular.ttf","/fonts/Inter-SemiBold.ttf","/fonts/Inter-Thin.ttf","/fonts/roboto-mono-700.ttf","/fonts/roboto-mono-regular.ttf","/_astro/page.756ffed2.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

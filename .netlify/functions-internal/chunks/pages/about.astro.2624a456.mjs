import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, $ as $$Image } from '../../renderers.mjs';
import { a as aboutImg, $ as $$Base } from './404.astro.547cac4c.mjs';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:fs/promises';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'fs';
import 'mime/lite.js';
import 'path';
import 'html-escaper';
/* empty css                            */
const $$Astro = createAstro("https://nitinsagar.in");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const meta = {
    title: "About",
    description: "I'm a starter theme for Astro.build"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="space-y-6"><h1 class="title">About</h1><p class="font-Inter">
Hi, I’m a starter Astro. I’m particularly great for getting you started with your own blogging
			website.
</p><div class="flex justify-center">${renderComponent($$result2, "Image", $$Image, { "src": aboutImg, "alt": "A cartoon cactus looking at the 'Astro.build' logo", "loading": "eager", "fetchpriority": "high" })}</div><p>Here are my some of my awesome built in features:</p><ul class="list-inside list-disc"><li>I'm ultra fast as I'm a static site</li><li>I'm fully responsive</li><li>I come with a light and dark mode</li><li>I'm easy to customise and add additional content</li><li>I have Tailwind CSS styling</li><li>Shiki code syntax highlighting</li><li>Satori for auto generating OG images for blog posts</li></ul><link href="https://chilipepper.io/form/insane-green-pepperoncini-5bde3521-53b1-4bcc-8381-f75c009acd58">Hello
<p>
Clone or fork my
<a class="cactus-link inline-block" href="https://github.com/chrismwilliams/astro-cactus" target="_blank" rel="noopener noreferrer" aria-label="github repository">
repo
</a> if you like me!
</p></div>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/about.astro");

const $$file = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

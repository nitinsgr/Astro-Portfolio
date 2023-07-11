import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, $ as $$Image, b as addAttribute, f as renderSlot } from '../../renderers.mjs';
import { g as getFormattedDate, a as getCollection } from './_...page_.astro.ed538750.mjs';
import { $ as $$Base } from './404.astro.547cac4c.mjs';
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
const $$Astro$2 = createAstro("https://nitinsagar.in");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    content: { data }
  } = Astro2.props;
  data.publishDate.toISOString();
  getFormattedDate(data.publishDate, { month: "long" });
  function getTagColorClass(index) {
    const colorClasses = ["bg-green-100", "bg-blue-100", "bg-yellow-100"];
    return colorClasses[index % colorClasses.length];
  }
  return renderTemplate`${data.ogImage && renderTemplate`${maybeRenderHead()}<div class="aspect-h-9 max-w-5xl aspect-w-24 mb-6 prose max-w-none">${renderComponent($$result, "Image", $$Image, { "src": data.ogImage, "alt": data.description, "class": "object-fit", "loading": "eager", "8": true, "width": 600, "Add": true, "the": true, "width": true, "of": true, "your": true, "image": true, "here": true, "height": 400, "Add": true, "the": true, "height": true, "of": true, "your": true, "image": true, "here": true, "fetchpriority": "high" })}</div>`}<div class="flex flex-wrap "><div class=""><h1 class=" text-3xl font-semibold font-opensans leading-relaxed text-gray-900 dark:text-white">${data.title}</h1><p class="text-left text-gray-500 dark:text-gray-400 mt-2 mb-2">${data.description}</p></div>${!!data.tags?.length && renderTemplate`<div class="mt-1 flex flex-wrap gap-2 sm:mt-0"><p class="mr-2 mt-1 font-opensans text-[14px]">Tags:</p>${data.tags.map((tag, i) => renderTemplate`<div${addAttribute(` ${getTagColorClass(i)} pt-1 text-grey text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-black `, "class")}${addAttribute(i, "key")}><a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a></div>`)}</div>`}</div>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/blog/Hero.astro");

const $$Astro$1 = createAstro("https://nitinsagar.in");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const {
    data: { title, description, ogImage, publishDate, role, logo },
    slug
  } = post;
  const socialImage = ogImage ?? `/og-image/${slug}.png`;
  const logoImage = logo ?? `/logo/${slug}.png`;
  const articleDate = publishDate.toISOString();
  const { headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "meta": { title, description, articleDate, ogImage: socialImage, role, logo: logoImage } }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="gap-x-10 lg:flex lg:items-start">${!!headings.length && renderTemplate`<aside class="sticky top-32 order-2 -me-32 hidden basis-64 lg:block font-opensans"><h2 class="font-semibold text-2xl">Table of Contents</h2><ul class="mt-4 text-md">${headings.map(({ depth, slug: slug2, text }) => renderTemplate`<li class="line-clamp-2 hover:text-accent"><a${addAttribute(`block ${depth <= 2 ? "mt-3" : "mt-2 ps-3 text-[0.6875rem]"}`, "class")}${addAttribute(`#${slug2}`, "href")}${addAttribute(`Scroll to section: ${text}`, "aria-label")}><span class="mr-1">${"".repeat(depth)}</span>${text}</a></li>`)}</ul></aside>`}<article class="flex-grow break-words mx-w-32 "><div id="blog-hero">${renderComponent($$result2, "BlogHero", $$Hero, { "content": post })}</div><div class="grid grid-cols-2 mt-20"><div class="col-span-1"><!-- ... --></div><div class="col-span-2 flex items-center justify-center"><article class="prose max-w-3xl">${renderSlot($$result2, $$slots["default"])}</article></div></div><button class="sticky text-accent underline cursor-pointer"><a class="font-opensans text-xl font-bold" href="/">Go back to home</a></button></article></div><button id="to-top-btn" class="z-90 fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-zinc-200 text-3xl opacity-0 transition-all duration-300 hover:border-zinc-400 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 dark:bg-zinc-700 sm:end-8 sm:h-12 sm:w-12" aria-label="Back to Top" data-show="false"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg></button>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/layouts/BlogPost.astro");

const $$Astro = createAstro("https://nitinsagar.in");
const getStaticPaths = async () => {
  const blogEntries = await getCollection("post");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$BlogPost, { "post": entry }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[slug].astro");

const $$file = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };

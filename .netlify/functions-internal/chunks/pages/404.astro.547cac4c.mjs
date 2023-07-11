import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, F as Fragment, e as defineScriptVars, m as maybeRenderHead, f as renderSlot, g as renderHead, $ as $$Image } from '../../renderers.mjs';
/* empty css                            */import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:fs/promises';

const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Chris Williams",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "",
  // Meta property used as a default description meta property
  description: "An opinionated starter theme for Astro",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Sets the meta data theme-color, found in src/components/BaseHead.astro L:34. Toggling the dark mode will update the meta content with either light/dark color, implementation in src/layouts/Base.astro L:41.
  themeColorLight: "#fafafa",
  themeColorDark: "#1d1f21",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  }
};

const $$Astro$6 = createAstro("https://nitinsagar.in");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, ogImage, articleDate } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>${siteTitle}</title><!-- Icons / Favicon --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><meta name="title"${addAttribute(siteTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(siteConfig.author, "content")}><!-- Theme Colour --><meta name="theme-color"${addAttribute(siteConfig.themeColorLight, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(articleDate ? "article" : "website", "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteConfig.title, "content")}><meta property="og:locale"${addAttribute(siteConfig.ogLocale, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteConfig.author, "content")}><meta property="article:published_time"${addAttribute(articleDate, "content")}>` })}`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}><!-- RSS auto-discovery --><link rel="alternate" type="application/rss+xml"${addAttribute(siteConfig.title, "title")} href="/rss.xml">`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/BaseHead.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://nitinsagar.in");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  const { themeColorDark, themeColorLight } = siteConfig;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", `
	const root = document.documentElement;
	const colorThemeMetaTag = document.querySelector("meta[name='theme-color']");
	const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("theme");
	const userTheme =
		storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
	function setTheme(theme) {
		root.classList.toggle("dark", theme === "dark");
		colorThemeMetaTag.setAttribute("content", theme === "dark" ? themeColorDark : themeColorLight);
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}
	setTheme(userTheme);
	root.addEventListener("theme-change", (e) => {
		setTheme(e.detail.theme);
	});
})();<\/script>`])), defineScriptVars({ themeColorDark, themeColorLight }));
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/ThemeProvider.astro");

const MENU_LINKS = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about/"
  },
  {
    title: "Blog",
    path: "/posts/"
  }
];
const SOCIAL_LINKS = {
  github: "https://github.com/chrismwilliams/astro-cactus",
  twitter: "https://github.com/chrismwilliams/astro-cactus",
  discord: "https://github.com/chrismwilliams/astro-cactus",
  email: "me@example.com"
};

const $$Astro$4 = createAstro("https://nitinsagar.in");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const url = new URL(Astro2.request.url);
  return renderTemplate`<!-- <ThemeToggle /> -->${maybeRenderHead()}<header id="main-header" class="group relative mb-28 flex items-center sm:ps-[0] font-opensans"><div class="flex sm:flex-col"><a href="/" class="inline-flex items-center grayscale hover:filter-none sm:relative sm:inline-block"${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")}></a><nav id="navigation-menu" class="absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md bg-[--theme-menu-bg] py-4 text-accent shadow backdrop-blur group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none" aria-label="Main menu">${MENU_LINKS.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`px-4 py-4 sm:py-0 sm:hover:underline ${url.pathname === link.path ? "active-link bg-blue-900 text-white" : "bg-gray-50"}`, "class")}${addAttribute(url.pathname === link.path ? "page" : false, "aria-current")} rel="prefetch">${link.title}</a>`)}</nav></div><button id="toggle-navigation-menu" class="group relative ms-8 h-7 w-7 sm:invisible sm:hidden" type="button" aria-label="Open main menu" aria-expanded="false" aria-haspopup="menu"><svg id="line-svg" class="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path></svg><svg id="cross-svg" class="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100" class="text-accent" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></header>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/layout/Header.astro");

const $$Astro$3 = createAstro("https://nitinsagar.in");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top text-gray-500 sm:flex-row sm:justify-between sm:text-xs"><div class="me-0 sm:me-4">
Copyright &copy; ${year}<span class="mx-2" aria-label="rocket emoji">🚀</span>
Astro Cactus
</div><nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500">${MENU_LINKS.map((link) => renderTemplate`<a${addAttribute(link.path, "href")} class="px-4 py-2 sm:px-2 sm:py-0 sm:hover:text-textColor sm:hover:underline">${link.title}</a>`)}</nav></footer>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/layout/Footer.astro");

const $$Astro$2 = createAstro("https://nitinsagar.in");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:start-1 focus:top-1.5">skip to content
</a>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/SkipLink.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://nitinsagar.in");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { title, description = siteConfig.description, ogImage, articleDate, role, logo }
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", "", "</head><body>", "", "", '<main id="main" class="flex-1">', "</main>", '<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"><\/script></body></html>'])), addAttribute(siteConfig.lang, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImage, "role": role, "logo": logo, "articleDate": articleDate }), renderHead(), renderComponent($$result, "ThemeProvider", $$ThemeProvider, {}), renderComponent($$result, "SkipLink", $$SkipLink, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/layouts/Base.astro");

const aboutImg = {"src":"/_astro/about-astro.850f94c9.png","width":249,"height":450,"format":"png"};

const $$Astro = createAstro("https://nitinsagar.in");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const meta = {
    title: "Oops! You found a missing page!",
    description: "Oops! It looks like this page is lost in space!"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="title mb-6">404 | Oops something went wrong</h1><p class="mb-8">Please use the navigation to find your way back</p><div class="my-4 grid justify-center">${renderComponent($$result2, "Image", $$Image, { "class": "rotate-180", "src": aboutImg, "alt": "A cartoon cactus looking at the 'Astro.build' logo", "loading": "eager" })}</div>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/404.astro");

const $$file = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, SOCIAL_LINKS as S, _404 as _, aboutImg as a, siteConfig as s };

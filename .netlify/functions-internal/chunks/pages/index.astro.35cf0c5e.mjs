import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../renderers.mjs';
import { a as getCollection, s as sortMDByDate, $ as $$PostPreview, c as getUniqueTagsWithCount } from './_...page_.astro.ed538750.mjs';
import { S as SOCIAL_LINKS, $ as $$Base } from './404.astro.547cac4c.mjs';
/* empty css                           */
const $$Astro$2 = createAstro("https://nitinsagar.in");
const $$SocialList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialList;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-center gap-x-4 sm:items-center "><p>Find me on</p><ul class="flex flex-1 items-center gap-x-4 sm:flex-initial"><li><a class="inline-block p-2 sm:hover:text-link"${addAttribute(SOCIAL_LINKS.github, "href")} target="_blank" rel="noopener noreferrer"><svg class="h-6 w-6" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg><span class="sr-only">Github</span></a></li><li><a class="inline-block p-2 sm:hover:text-link"${addAttribute(SOCIAL_LINKS.twitter, "href")} target="_blank" rel="noopener noreferrer"><svg class="h-6 w-6" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg><span class="sr-only">Twitter</span></a></li><li><a class="inline-block p-2 sm:hover:text-link"${addAttribute(SOCIAL_LINKS.discord, "href")} target="_blank" rel="noopener noreferrer"><svg class="h-6 w-6" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path><path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path></svg><span class="sr-only">Discord</span></a></li><li><a class="inline-block p-2 sm:hover:text-link"${addAttribute(`mailto:${SOCIAL_LINKS.email}`, "href")}><svg class="h-6 w-6" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg><span class="sr-only">Email</span></a></li></ul></div>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/SocialList.astro");

const $$Astro$1 = createAstro("https://nitinsagar.in");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const MAX_POSTS = 10;
  const allPosts = await getCollection("post");
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Home" }, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="font-opensans sm:flex sm:flex-col sm:items-center lg:flex-row lg:justify-between font-bold astro-J7PV25F6"><div class="lg:w-1/2 lg:mr-10 astro-J7PV25F6"><h1 class="text-2xl lg:text-2xl leading-9 astro-J7PV25F6">Hi! Nitin here
			specialize in UX and Visual
<span class="relative astro-J7PV25F6"><span class="block absolute -inset-1 -skew-y-3 bg-blue-900 astro-J7PV25F6" aria-hidden="true"></span><span class="relative text-white astro-J7PV25F6">annoyed</span></span>
to help brands & products solve problems that matter.
			Advocating responsible, sustainable, and human user-centric solutions.
</h1>${renderComponent($$result2, "SocialList", $$SocialList, { "class": "astro-J7PV25F6" })}</div><div class="hidden lg:block sm:mt-5 astro-J7PV25F6"><img class="mx-auto astro-J7PV25F6" width="300px" height="300px" src="../../src/pages/og-image/imagee.jpg"></div></section><section aria-label="Blog post list" class="mt-16 astro-J7PV25F6"><h2 class="title mb-4 text-2xl font-opensans astro-J7PV25F6">Recent Work</h2><hr class="astro-J7PV25F6"><ul class="container mt-6 m-auto grid lg:grid-cols-2 gap-4 sm:grid-cols-1 astro-J7PV25F6">${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row astro-J7PV25F6">${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p, "class": "astro-J7PV25F6" })}</li>`)}</ul><div class="mt-32 astro-J7PV25F6"><h2 class="title mb-4 text-2xl font-opensans astro-J7PV25F6">What you'll get</h2><hr class="astro-J7PV25F6"><div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-2 font-opensans mt-8 astro-J7PV25F6"><a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 astro-J7PV25F6"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white astro-J7PV25F6">Noteworthy technology acquisitions 2021</h5><p class="font-normal text-gray-700 dark:text-gray-400 astro-J7PV25F6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p></a><a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 astro-J7PV25F6"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white astro-J7PV25F6">Noteworthy technology acquisitions 2021</h5><p class="font-normal text-gray-700 dark:text-gray-400 astro-J7PV25F6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p></a><a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 astro-J7PV25F6"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white astro-J7PV25F6">Noteworthy technology acquisitions 2021</h5><p class="font-normal text-gray-700 dark:text-gray-400 astro-J7PV25F6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p></a><a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 astro-J7PV25F6"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white astro-J7PV25F6">Noteworthy technology acquisitions 2021</h5><p class="font-normal text-gray-700 dark:text-gray-400 astro-J7PV25F6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p></a></div><div class="astro-J7PV25F6"></div></div></section>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/index.astro");

const $$file$1 = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://nitinsagar.in");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("post");
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    title: "All Tags",
    description: "All Tags from my blogs"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="title mb-6">Tags</h1><ul class="space-y-4">${Object.entries(allTags).map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2"><a class="cactus-link inline-block"${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View posts with the tag: ${tag}`, "title")} rel="prefetch">
&#35;${tag}</a><span class="inline-block">
- ${val} Post${val > 1 && "s"}</span></li>`)}</ul>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/index.astro");

const $$file = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };

import { h as createCollectionToGlobResultMap, i as createGetCollection, j as createGetEntryBySlug, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../renderers.mjs';
import { s as siteConfig, $ as $$Base } from './404.astro.547cac4c.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/markdown-elements/index.md": () => import('../index.38003c48.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"markdown-elements":"/src/content/post/markdown-elements/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/markdown-elements/index.md": () => import('../index.80464e61.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

function sortMDByDate(posts = []) {
  return posts.sort(
    (a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
  );
}
function getUniqueTags(posts = []) {
  const uniqueTags = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    post.data.tags.map((tag) => uniqueTags.add(tag));
  });
  return Array.from(uniqueTags);
}
function getUniqueTagsWithCount(posts = []) {
  return posts.reduce((prev, post) => {
    const runningTags = { ...prev };
    post.data.tags.forEach((tag) => {
      runningTags[tag] = (runningTags[tag] || 0) + 1;
    });
    return runningTags;
  }, {});
}

const $$Astro$3 = createAstro("https://nitinsagar.in");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, as: Element = "div", withDesc = false } = Astro2.props;
  getFormattedDate(post.data.publishDate, { month: "long" });
  return renderTemplate`${maybeRenderHead()}<div class="container m-auto grid font-opensans"><div class="font-opensans">${post.data.ogImage && renderTemplate`<img width="400" height="400"${addAttribute(post.data.ogImage, "src")}${addAttribute(post.data.title, "alt")}>`}${renderComponent($$result, "Element", Element, {}, { "default": ($$result2) => renderTemplate`<a${addAttribute(`/posts/${post.slug}/`, "href")} class="text-xl decoration-none no-underline font-opensans font-bold" rel="prefetch">${post.data.title}</a>` })}</div></div>`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/blog/PostPreview.astro");

const $$Astro$2 = createAstro("https://nitinsagar.in");
const $$Paginator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { prevUrl, nextUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="flex items-center gap-x-4">${prevUrl && renderTemplate`<a class="sm:hover:text-accent me-auto py-2"${addAttribute(prevUrl.url, "href")} rel="prefetch">${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="sm:hover:text-accent ms-auto py-2"${addAttribute(nextUrl.url, "href")} rel="prefetch">${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/components/Paginator.astro");

const $$Astro$1 = createAstro("https://nitinsagar.in");
const getStaticPaths$1 = async ({ paginate }) => {
  const allPosts = await getCollection("post");
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPosts);
  return paginate(allPostsByDate, { props: { uniqueTags }, pageSize: 10 });
};
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { page, uniqueTags } = Astro2.props;
  const meta = {
    title: "Posts",
    description: "A collection of posts by me for an Asto starter theme"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        url: page.url.prev,
        text: `\u2190 Previous Posts`
      }
    },
    ...page.url.next && {
      nextUrl: {
        url: page.url.next,
        text: `Next Posts \u2192`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="title mb-6">Posts</h1><div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"><section aria-label="Blog post list"><ul class="space-y-8 text-start">${page.data.map((p) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full">${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p, "as": "h2", "withDesc": true })}</li>`)}</ul>${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })}</section>${uniqueTags.length && renderTemplate`<aside><h2 class="mb-4 flex items-center text-lg font-semibold"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path><path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path><path d="M6 9h-.01"></path></svg>
Tags
</h2><ul class="flex flex-wrap gap-2 text-bgColor">${uniqueTags.map((tag) => renderTemplate`<li><a class="flex items-center justify-center rounded-lg bg-accent p-1"${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View all posts with the tag: ${tag}`, "aria-label")}>${tag}</a></li>`)}</ul><span class="mt-4 block sm:text-end"><a class="sm:hover:text-accent" href="/tags/" aria-label="View all blog categories">
View all →
</a></span></aside>`}</div>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[...page].astro");

const $$file$1 = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/posts/[...page].astro";
const $$url$1 = "/posts/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://nitinsagar.in");
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getCollection("post");
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPostsByDate);
  return uniqueTags.map((tag) => {
    const filterPosts = allPostsByDate.filter((post) => post.data.tags?.includes(tag));
    return paginate(filterPosts, {
      params: { tag },
      pageSize: 10
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    title: `Tag: ${tag}`,
    description: `View all posts with the tag - ${tag}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        url: page.url.prev,
        text: `\u2190 Previous Tags`
      }
    },
    ...page.url.next && {
      nextUrl: {
        url: page.url.next,
        text: `Next Tags \u2192`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="title mb-6 flex items-center"><a href="/tags/" class="text-accent sm:hover:underline">Tags</a><span class="me-3 ms-2">→</span><span class="text-xl">#${tag}</span></h1><section aria-label="Blog post list"><ul class="space-y-8">${page.data.map((p) => renderTemplate`<li class="flex flex-col flex-wrap gap-2 sm:flex-row [&_q]:basis-full">${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p, "as": "h2", "withDesc": true })}</li>`)}</ul>${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })}</section>` })}`;
}, "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/[tag]/[...page].astro");

const $$file = "C:/Users/nitin/OneDrive/Documents/Cloning/astro-theme-cactus/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostPreview as $, ____page_$1 as _, getCollection as a, getEntryBySlug as b, getUniqueTagsWithCount as c, ____page_ as d, getFormattedDate as g, sortMDByDate as s };

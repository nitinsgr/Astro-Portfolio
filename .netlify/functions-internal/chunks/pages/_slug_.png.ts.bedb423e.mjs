import { b as getEntryBySlug, g as getFormattedDate, a as getCollection } from './_...page_.astro.ed538750.mjs';
import 'node:fs';
import 'node:path';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
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
import 'mime/lite.js';
import 'path';
import 'html-escaper';
/* empty css                            */
const markup = (title, pubDate) => html`<div
	tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]"
>
	<div tw="flex flex-col flex-1 w-full p-10 justify-center">
		<p tw="text-2xl mb-6">${pubDate}</p>
		<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
	</div>
	<div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
		<div tw="flex items-center">
			<svg height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 480">
				<path
					d="M181.334 93.333v-40L226.667 80v40l-45.333-26.667ZM136.001 53.333 90.667 26.667v426.666L136.001 480V53.333Z"
					fill="#B04304"
				></path>
				<path
					d="m136.001 119.944 45.333-26.667 45.333 26.667-45.333 26.667-45.333-26.667ZM90.667 26.667 136.001 0l45.333 26.667-45.333 26.666-45.334-26.666ZM181.334 53.277l45.333-26.666L272 53.277l-45.333 26.667-45.333-26.667ZM0 213.277l45.333-26.667 45.334 26.667-45.334 26.667L0 213.277ZM136 239.944l-45.333-26.667v53.333L136 239.944Z"
					fill="#FF5D01"
				></path>
				<path
					d="m136 53.333 45.333-26.666v120L226.667 120V80L272 53.333V160l-90.667 53.333v240L136 480V306.667L45.334 360V240l45.333-26.667v53.334L136 240V53.333Z"
					fill="#53C68C"
				></path>
				<path d="M45.334 240 0 213.334v120L45.334 360V240Z" fill="#B04304"></path>
			</svg>
			<p tw="ml-3 font-semibold">${siteConfig.title}</p>
		</div>
		<p>by ${siteConfig.author}</p>
	</div>
</div>`;
async function get({ params: { slug } }) {
  const post = await getEntryBySlug("post", slug);
  const title = post?.data.title ?? siteConfig.title;
  const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
    weekday: "long",
    month: "long"
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return {
    body: png,
    encoding: "binary"
  };
}
const getStaticPaths = async () => {
  const posts = await getCollection("post");
  return posts.filter(({ data }) => !data.ogImage).map(({ slug }) => ({ params: { slug } }));
};

export { get, getStaticPaths };

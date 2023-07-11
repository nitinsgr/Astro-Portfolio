import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import prefetch from "@astrojs/prefetch";
import m2dx from "astro-m2dx";
import markdoc from "@astrojs/markdoc";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://nitinsagar.in",

	markdown: {
		remarkPlugins: [remarkToc, m2dx],
		remarkRehype: {
			footnoteLabel: "Footnotes",
		},
		gfm: false,
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	experimental: {
		assets: true,
	},
	image: {
		// https://docs.astro.build/en/guides/assets/#using-sharp
		service: sharpImageService(),
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
		markdoc(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	output: "server",
	adapter: netlify(),
});

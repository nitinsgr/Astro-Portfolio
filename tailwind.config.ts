import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	darkMode: "class",
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			colors: {
				bgColor: "var(--theme-bg)",
				textColor: "var(--theme-text)",
				link: "var(--theme-link)",
				accent: "var(--theme-accent)",
				"accent-2": "var(--theme-accent-2)",
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
			},

			fontFamily: {
				opensans: ['"Inter-Bold"', "sans-serif"],
				// Add the new font here
				regular: ['"Inter-Regular"', "serif"],
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
				md: {
					css: {
						h2: {
							fontSize: "88px",
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@sira-ui/tailwind"),
		require("@tailwindcss/aspect-ratio"),
		require("flowbite/plugin"),
		plugin(function ({ addComponents }) {
			addComponents({
				".cactus-link": {
					"@apply bg-[size:100%_6px] bg-bottom bg-repeat-x": {},
					backgroundImage:
						"linear-gradient(transparent,transparent 5px,var(--theme-text) 5px,var(--theme-text))",
					"&:hover": {
						backgroundImage:
							"linear-gradient(transparent,transparent 4px,var(--theme-link) 4px,var(--theme-link))",
					},
				},
				".title": {
					"@apply text-2xl font-semibold text-accent-2": {},
				},
			});
		}),
	],
} satisfies Config;

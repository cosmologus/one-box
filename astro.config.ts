// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), alpinejs()],

	vite: {
		plugins: [tailwindcss()],
	},
	site: "https://cosmologus.github.io",
	base: "work-schedule-astro",
});

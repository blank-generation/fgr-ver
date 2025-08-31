import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  // site: 'https://blank-generation.github.io',
  // base: '/fgr-astro',
  integrations: [tailwind(), mdx()]
});
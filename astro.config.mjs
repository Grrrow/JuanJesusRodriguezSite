// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl'
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK')
console.log(env.STORYBLOK_API_KEY)

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), basicSsl()]
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_API_KEY,
      components: {
        page: 'storyblok/page',
        header: 'storyblok/header',
        menuItem: 'storyblok/menuItem',
      },
      apiOptions: {
        region: 'es',
      },
    })
  ],
});
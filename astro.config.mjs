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
        Hero: 'storyblok/Hero',
        video: 'storyblok/video',
        section: 'storyblok/section',
        headerSection: 'storyblok/headerSection',
        biography: 'storyblok/biography',
        gallerySection: 'storyblok/gallerySection',
        videoSection: 'storyblok/videoSection',
        videoItem: 'storyblok/videoItem',
        eventSection: 'storyblok/eventSection',
        event: 'storyblok/event',
        reviewGroup: 'storyblok/reviewGroup',
        reviewContent: 'storyblok/reviewSection',
        reviewItem: 'storyblok/reviewItem',
        quote: 'storyblok/quote',
        theatreList: 'storyblok/theatreList',
        theatre: 'storyblok/theatre',
      },
      apiOptions: {
        region: 'es',
      },
    })
  ],
});
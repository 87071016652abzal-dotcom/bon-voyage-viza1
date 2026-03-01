import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // или просто @astrojs/vercel

export default defineConfig({
  output: 'server', // ОБЯЗАТЕЛЬНО должно быть server или hybrid
  adapter: vercel(),
});
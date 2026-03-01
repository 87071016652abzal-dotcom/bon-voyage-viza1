import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Адаптер для работы сервера на Vercel

export default defineConfig({
  // 1. Указываем, что сайт должен работать как сервер (SSR)
  // Это нужно, чтобы ваш код на Astro.request.method === "POST" срабатывал
  output: 'server', 

  // 2. Подключаем адаптер Vercel
  adapter: vercel(),
});
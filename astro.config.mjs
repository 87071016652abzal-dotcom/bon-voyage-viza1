import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Эта строка разрешает серверный код и отправку форм (убирает ошибку 403)
  output: 'server', 
  adapter: vercel(),
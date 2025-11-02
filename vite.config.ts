import contentCollections from '@content-collections/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command }) => {
  return {
    ssr: {
      noExternal: command === 'build' ? ['@phosphor-icons/react'] : undefined,
    },
    server: {
      host: true,
    },
    plugins: [
      tailwindcss({ optimize: { minify: true } }),
      contentCollections(),
      tsconfigPaths(),
      tanstackStart({
        sitemap: {
          enabled: true,
          host: 'https://rizeforge.com',
        },
        // spa: {
        //   enabled: true,
        //   prerender: {
        //     crawlLinks: true,
        //   },
        // },
        prerender: {
          enabled: true,
          autoSubfolderIndex: true,
          crawlLinks: true,
          failOnError: false,
        },
      }),
      react(),
      netlify({}),
    ],
  }
})

import { cloudflare } from '@cloudflare/vite-plugin'
import contentCollections from '@content-collections/vite'
// import netlify from '@netlify/vite-plugin-tanstack-start'
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
      cloudflare({ viteEnvironment: { name: 'ssr' } }),
      tailwindcss({ optimize: { minify: true } }),
      contentCollections(),
      tsconfigPaths(),
      tanstackStart({
        sitemap: {
          enabled: true,
          host: 'https://rizeforge.com',
          outputPath: '/public/sitemap.xml',
        },
        // prerender: {
        //   enabled: true,
        //   autoSubfolderIndex: true,
        //   crawlLinks: false,
        //   failOnError: false,
        // },
      }),
      react(),
      // netlify({}),
    ],
  }
})

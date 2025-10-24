import { cloudflare } from '@cloudflare/vite-plugin'
import contentCollections from '@content-collections/vite'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
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
      cloudflare({
        viteEnvironment: { name: 'ssr' },
        configPath: './wrangler.jsonc',
        experimental: {},
      }),
      contentCollections(),
      tsconfigPaths(),
      tanstackStart({
        prerender: {
          // Currently cloudflare does not support prerendering
          enabled: false,
        },
      }),
      viteReact(),
    ],
  }
})

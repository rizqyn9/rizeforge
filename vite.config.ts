import { cloudflare } from '@cloudflare/vite-plugin'
import contentCollections from '@content-collections/vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
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
      reactRouter(),
      tsconfigPaths(),
    ],
  }
})

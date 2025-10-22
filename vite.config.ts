import contentCollections from '@content-collections/vite'
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from '@cloudflare/vite-plugin'

const config = defineConfig({
  plugins: [
    contentCollections({ configPath: './content-collection.ts' }),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config

// export default wrapVinxiConfigWithSentry(config, {
//   org: process.env.VITE_SENTRY_ORG,
//   project: process.env.VITE_SENTRY_PROJECT,
//   authToken: process.env.SENTRY_AUTH_TOKEN,
//   // Only print logs for uploading source maps in CI
//   // Set to `true` to suppress logs
//   silent: !process.env.CI,
// })

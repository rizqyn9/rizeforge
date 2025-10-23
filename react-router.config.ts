import type { Config } from '@react-router/dev/config'

export default {
  future: {
    unstable_viteEnvironmentApi: true,
    unstable_splitRouteModules: true,
    unstable_subResourceIntegrity: true,
  },
  // prerender({ getStaticPaths }) {
  //   return getStaticPaths()
  // },
} satisfies Config

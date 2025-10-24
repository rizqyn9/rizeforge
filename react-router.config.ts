import type { Config } from '@react-router/dev/config'

// @ts-ignore
// import posts from './.content-collections/generated/allPosts'

export default {
  ssr: true,
  future: {
    unstable_viteEnvironmentApi: true,
    unstable_splitRouteModules: true,
    unstable_subResourceIntegrity: true,
  },
  // prerender: true,
  // prerender({ getStaticPaths }) {
  //   const paths = getStaticPaths()
  //   posts.map(post => {
  //     paths.push('/blog/' + post._meta.fileName)
  //   })
  //   return paths
  // },
} satisfies Config

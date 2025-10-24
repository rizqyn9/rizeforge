import { generateRemixSitemap } from '@forge42/seo-tools/remix/sitemap'

import type { Route } from './+types/sitemap.xml'

export const loader = async ({ request }: Route.LoaderArgs) => {
  const { routes } = await import('virtual:react-router/server-build')

  const filteredRoutes = Object.values(routes).filter(
    route => !(route?.path === undefined && route?.index !== true)
  )

  const { origin } = new URL(request.url)
  const sitemap = await generateRemixSitemap({
    domain: origin,
    ignore: [],
    // @ts-expect-error
    routes: filteredRoutes,
    sitemapData: {
      lastUpdated: new Date(),
    },
  })

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

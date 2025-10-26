import { generateRobotsTxt } from '@forge42/seo-tools/robots'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const domain = new URL(request.url).origin
        const robotsTxt = generateRobotsTxt([
          {
            userAgent: '*',
            allow: ['/'],
            sitemap: [`${domain}/sitemap.xml`],
          },
        ])

        return new Response(robotsTxt, {
          headers: {
            'Content-Type': 'text/plain',
          },
        })
      },
    },
  },
})

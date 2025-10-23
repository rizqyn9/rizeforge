import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('routes/layout.tsx', [
    index('routes/index.tsx'),
    layout('routes/blog/layout.tsx', [route('blog', 'routes/blog/index.tsx')]),
    route('about', 'routes/about.tsx'),
    route('contact', 'routes/contact.tsx'),
  ]),
  route('sitemap.xml', 'routes/sitemap.xml.ts'),
  route('robots.txt', 'routes/robots.txt.ts'),
] satisfies RouteConfig

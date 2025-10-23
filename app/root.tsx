import {
  href,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'

import './styles/tailwind.css'

import { Button } from './components/ui/button'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='dark scroll-pt-20 scroll-smooth bg-background text-pretty text-foreground scheme-dark'
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#171717'></meta>
        <Meta />
        <Links />
      </head>
      <body className='flex min-h-dvh flex-col'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let [message, details] = ['Oops!', 'An unexpected error occurred.']
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='container flex min-h-screen flex-col items-center justify-center gap-4 p-8'>
      <h1 className='text-6xl font-bold text-neutral-200'>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full overflow-x-auto p-4'>
          <code>{stack}</code>
        </pre>
      )}
      <Button asChild>
        <Link prefetch='intent' to={href('/')}>
          Go Home!
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <path
              d='M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z'
              opacity='0.2'
            ></path>
            <path d='M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z'></path>
          </svg>
        </Link>
      </Button>
    </main>
  )
}

export const meta: Route.MetaFunction = ({ data, error, location: { pathname } }) => {
  if (!data) {
    return []
  }
  const { origin } = data
  const currentUrl = origin + pathname
  // const ogImageUrl = origin + ogImage;

  const title =
    isRouteErrorResponse(error) && error.status === 404 ? 'Page not found | Rizeforge' : 'Rizeforge'
  const description =
    'Passionate fullstack developer dedicated to creating beautiful and functional web applications.'

  return [
    {
      title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:site_name',
      content: 'Rizqy Prastya Ari Nugroho',
    },
    { tagName: 'link', rel: 'canonical', href: currentUrl },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:title',
      content: title,
    },
    // { property: "og:image", content: ogImageUrl },
    { property: 'og:image:alt', content: title },
    { property: 'og:url', content: currentUrl },
    { property: 'og:description', content: description },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:site',
      content: '@nikolailehbrink',
    },
    {
      property: 'twitter:creator',
      content: '@nikolailehbrink',
    },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Person',
        url: origin,
        description,
        name: 'Nikolai Lehbrink',
        // sameAs: SOCIAL_MEDIA_PROFILES.map((profile) => profile.href),
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'mail@nikolailehbr.ink',
        },
      },
    },
  ]
}

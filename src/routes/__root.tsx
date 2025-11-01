import * as React from 'react'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { GoogleTagManagerProvider } from '@tracktor/react-google-tag-manager'

import { Footer } from '~/components/block/footer'
import { Header } from '~/components/block/header'

import { metaDefault, scriptDefault } from '~/lib/seo'

import tailwindCss from '../styles/tailwind.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: metaDefault,
    links: [
      { rel: 'stylesheet', href: tailwindCss },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: scriptDefault,
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='dark scroll-pt-20 scroll-smooth bg-fd-background text-pretty text-fd-foreground scheme-dark'
    >
      <head>
        <HeadContent />
      </head>
      <body className='flex min-h-lvh flex-col'>
        <GoogleTagManagerProvider id='G-1ZRRQ5YQ1N'>
          <Header />
          <main className='flex grow flex-col'>{children}</main>
          <Footer />
        </GoogleTagManagerProvider>
        <Scripts />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-1ZRRQ5YQ1N' />
      </body>
    </html>
  )
}

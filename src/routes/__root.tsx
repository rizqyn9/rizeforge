import * as React from 'react'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import { Footer } from '~/components/block/footer'
import { Header } from '~/components/block/header'

import tailwindCss from '../styles/tailwind.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      { rel: 'stylesheet', href: tailwindCss },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '180x180',
      //   href: '/apple-touch-icon.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '32x32',
      //   href: '/favicon-32x32.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '16x16',
      //   href: '/favicon-16x16.png',
      // },
      // { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
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
        <Header />
        <main className='flex grow flex-col'>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

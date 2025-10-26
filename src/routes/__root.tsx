import * as React from 'react'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import { Footer } from '~/components/block/footer'
import { Header } from '~/components/block/header'

import { CONFIG } from '~/config/config'
import { metaDefault, scriptDefault } from '~/lib/seo'

import tailwindCss from '../styles/tailwind.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: metaDefault,
    links: [
      { rel: 'stylesheet', href: tailwindCss },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: CONFIG.HOST },
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
        <Header />
        <main className='flex grow flex-col'>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

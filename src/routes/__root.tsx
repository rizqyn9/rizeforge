import * as React from 'react'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { GoogleTagManagerProvider } from '@tracktor/react-google-tag-manager'

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
        <GoogleTagManagerProvider id={CONFIG.GTM_ID}>
          <Header />
          <main className='flex grow flex-col'>{children}</main>
          <Footer />
        </GoogleTagManagerProvider>
        <Scripts />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GTM_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${CONFIG.GTM_ID}');
            `,
          }}
        />
      </body>
    </html>
  )
}

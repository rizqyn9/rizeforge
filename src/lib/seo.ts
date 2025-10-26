import { profile } from '@forge42/seo-tools/structured-data/profile'
import { AnyRouteMatch } from '@tanstack/react-router'

import { CONFIG } from '~/config/config'

const MAIN_OG_IMAGE = `${CONFIG.HOST}/og-main.png`

export const metaDefault: AnyRouteMatch['meta'] = [
  // Basic setup
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
  { title: `${CONFIG.APP_NAME} | Software Engineer & Fullstack Developer` },
  {
    name: 'description',
    content:
      'A full-stack software engineer passionate about crafting performant, user-focused web applications and sharing knowledge through my tech blog.',
  },
  { name: 'author', content: 'Rizqy Prastya Ari Nugroho' },
  {
    name: 'keywords',
    content:
      'software engineer, fullstack developer, web developer, javascript, react, nodejs, typescript, portfolio, blog, tech, frontend, backend',
  },
  {
    name: 'robots',
    content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  { property: 'og:type', content: 'website' },
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:site_name', content: CONFIG.APP_NAME },
  { property: 'og:title', content: `${CONFIG.APP_NAME} | Software Engineer & Fullstack Developer` },
  {
    property: 'og:description',
    content: `Personal portfolio and blog of ${CONFIG.APP_NAME}, full-stack developer specializing in React, Node.js, and modern web technologies.`,
  },
  { property: 'og:url', content: CONFIG.HOST },
  { property: 'og:image', content: MAIN_OG_IMAGE },
  { property: 'og:image:alt', content: `${CONFIG.APP_NAME} portfolio preview` },

  // Twitter Card
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: `@${CONFIG.TWITTER_USERNAME}` },
  { name: 'twitter:creator', content: `@${CONFIG.TWITTER_USERNAME}` },
  {
    name: 'twitter:title',
    content: `${CONFIG.APP_NAME} | Software Engineer & Fullstack Developer`,
  },
  {
    name: 'twitter:description',
    content:
      'Explore my projects, experience, and blogs about software engineering, React, Node.js, and fullstack development.',
  },
  { name: 'twitter:image', content: MAIN_OG_IMAGE },

  // Theme & mobile enhancements
  { name: 'theme-color', content: '#0f172a' },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
]

export const jsonLdPerson = profile({
  '@type': 'ProfilePage',
  name: CONFIG.APP_NAME,
  url: CONFIG.HOST,
  image: `${CONFIG.HOST}/icon-large.svg`,
  sameAs: [
    `https://twitter.com/${CONFIG.TWITTER_USERNAME}`,
    `https://x.com/${CONFIG.TWITTER_USERNAME}`,
    CONFIG.MEDIUM_LINK,
    CONFIG.BLUSKY_LINK,
    CONFIG.LINKEDIN_LINK,
    CONFIG.GITHUB_LINK,
  ],
  accountablePerson: {
    '@type': 'Person',
    name: 'Rizqy Prastya Ari Nugroho',
    url: CONFIG.HOST,
    image: 'https://ik.imagekit.io/connect2203/rdevblog/me_uxL2hLXqt.png?updatedAt=1701761952485',
    jobTitle: 'Fullstack Software Engineer',
    description:
      'Fullstack software engineer specializing in React, Node.js, and modern web development. Creator of projects and blogs about technology and engineering best practices.',
    sameAs: [
      `https://twitter.com/${CONFIG.TWITTER_USERNAME}`,
      `https://x.com/${CONFIG.TWITTER_USERNAME}`,
      CONFIG.MEDIUM_LINK,
      CONFIG.BLUSKY_LINK,
      CONFIG.LINKEDIN_LINK,
      CONFIG.GITHUB_LINK,
    ],
  },
})

export const scriptDefault: AnyRouteMatch['scripts'] = [
  {
    type: 'application/ld+json',
    children: JSON.stringify(jsonLdPerson),
  },
]

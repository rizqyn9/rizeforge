import { profile } from '@forge42/seo-tools/structured-data/profile'
import { webApp } from '@forge42/seo-tools/structured-data/web-app'
import { AnyRouteMatch } from '@tanstack/react-router'
import type * as s from 'schema-dts'

import { AUTHOR, CONFIG } from '~/config/config'

const MAIN_OG_IMAGE = `${CONFIG.HOST}/og-main.png`

export const metaDefault: AnyRouteMatch['meta'] = [
  // Basic setup
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
  { title: `${CONFIG.APP_NAME} | Software Engineer & Fullstack Developer` },
  {
    name: 'description',
    content: `I'm ${AUTHOR}, a full-stack software engineer passionate about crafting performant, user-focused web applications and sharing knowledge through my tech blog.`,
  },
  { name: 'author', content: AUTHOR },
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
    content: `Portfolio and blog of ${AUTHOR}, a full-stack engineer specializing in React, Node.js, and modern web technologies.`,
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
    content: `Explore ${AUTHOR}'s projects, experience, and blogs about fullstack development, React, Node.js, and software engineering.`,
  },
  { name: 'twitter:image', content: MAIN_OG_IMAGE },

  // Theme & mobile enhancements
  { name: 'theme-color', content: '#0f172a' },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
]

// Base URLs & constants
const HOST = CONFIG.HOST
const PERSON_ID = `${HOST}/#person-me`
const WEBSITE_ID = `${HOST}/#web-site`
const WEBPAGE_ID = `${HOST}/#web-page`

// --- PERSON ---
const personJsonLd: s.Person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Rizqy Prastya Ari Nugroho',
  additionalName: 'Rizqy',
  email: 'mail@rizeforge.com',
  knowsLanguage: ['English', 'Indonesian'],
  nationality: 'Indonesia',
  skills: ['React', 'Node.js', 'TypeScript', 'Web Development', 'Software Engineering'],
  url: HOST,
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
}

// --- WEBSITE ---
const webSiteJsonLd: s.WebSite = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: CONFIG.APP_NAME,
  url: HOST,
  publisher: { '@id': PERSON_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${HOST}/search?q={search_term_string}`,
  },
}

// --- WEBAPP ---
const webAppJsonLd = webApp({
  '@type': 'WebApplication',
  name: CONFIG.APP_NAME,
  url: HOST,
  description:
    'Personal portfolio and blog of Rizqy Prastya Ari Nugroho, full-stack developer specializing in React, Node.js, and modern web technologies.',
  applicationCategory: 'Web development',
  browserRequirements: 'Requires JavaScript',
  softwareVersion: '1.0.0',
  operatingSystem: 'All',
})

// --- PROFILE PAGE ---
const jsonLdProfile = profile({
  '@type': 'ProfilePage',
  name: CONFIG.APP_NAME,
  url: HOST,
  image: `${HOST}/icon-large.svg`,
  sameAs: personJsonLd.sameAs,
  accountablePerson: {
    '@id': PERSON_ID,
  },
})

// --- WEBPAGE (root) ---
const webPageJsonLd: s.WebPage = {
  '@type': 'WebPage',
  '@id': WEBPAGE_ID,
  name: CONFIG.APP_NAME,
  description: `Portfolio and blog of ${AUTHOR}, a full-stack engineer specializing in React, Node.js, and modern web technologies.`,
  url: HOST,
  inLanguage: 'en-US',
  mainEntity: { '@id': PERSON_ID }, // ✅ FIXED mainEntity
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
}

// --- COMBINED SCRIPT OUTPUT ---
export const scriptDefault: AnyRouteMatch['scripts'] = [
  {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [personJsonLd, webSiteJsonLd, webPageJsonLd, webAppJsonLd, jsonLdProfile],
    }),
  },
]

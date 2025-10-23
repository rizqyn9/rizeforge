import { useEffect, useState } from 'react'

import { ScrollIcon } from '~/components/icons'
import { DottedGlowBackground } from '~/components/ui/dotted-glow-background'
import { ShimmerButton } from '~/components/ui/shimmer-button'
import { StripedPattern } from '~/components/ui/stripped-pattern'

import { SOCIALS } from '~/config/socials'
import { cx } from '~/lib/cva'

export default function Page() {
  return (
    <>
      <Header />
      <DotBackgroundDemo />
      {/* <MainSection /> */}
      <FeaturedPosts />
    </>
  )
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cx(
        'fixed top-0 right-0 left-0 z-50 flex w-full flex-col border-b transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/20 backdrop-blur-md' : 'border-b-transparent'
      )}
    >
      <section className='relative container mx-auto flex h-16 w-full items-center justify-between px-3'>
        <Logo />
      </section>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex items-center justify-center capitalize'>
      <p className='font-black uppercase'>Rizeforge</p>
    </div>
  )
}

function MainSection() {
  return (
    <div className='relative container mx-auto min-h-dvh px-4'>
      {/* <DottedGlowBackground
        className='pointer-events-none mask-radial-to-90% mask-[radial-gradient(400px_circle_at_center,white,transparent)]'
        color='rgba(0,0,0,0.7)'
        glowColor='rgba(0, 170, 255, 0.85)'
        darkGlowColor='rgba(0, 170, 255, 0.85)'
        colorLightVar='--color-zinc-900'
        colorDarkVar='--color-zinc-100'
        glowColorLightVar='--color-zinc-900'
      /> */}
      <StripedPattern className='mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-300 opacity-40' />
      <HeroContent />
    </div>
  )
}

export function DotBackgroundDemo() {
  return (
    <div className='relative flex min-h-dvh w-full items-center justify-center bg-black'>
      <div
        className={cx(
          'absolute inset-0',
          'bg-size-[20px_20px]',
          'bg-[radial-gradient(#404040_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' />
      <HeroContent />
      <ScrollMotion />
    </div>
  )
}

function HeroContent() {
  return (
    <div className='z-20 flex min-h-svh flex-col justify-center px-8 md:items-center'>
      <h1 className='text-3xl font-semibold md:text-4xl'>Hi there, i'm Rizqy</h1>

      <div className='mt-8 text-left text-lg md:max-w-2xl md:text-center md:text-xl'>
        <p className='text-gray-300'>
          <b className='text-foreground'>Fullstack Engineer</b> and mostly{' '}
          <b className='text-foreground'>Frontend Engineer</b> with a passion for building
          high-performance web applications that scale.
        </p>
      </div>

      <div className='mt-6 flex gap-4'>
        {/* <button>More about me</button> */}
        <ShimmerButton>Connect with me</ShimmerButton>
      </div>

      <div className='mt-6 flex flex-row gap-4'>
        {SOCIALS.map(({ label, href, icon }) => (
          <a
            title={label}
            key={label}
            href={href}
            target='_blank'
            rel='noreferrer'
            className='[&>svg]:size-6'
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

function ScrollMotion() {
  return (
    <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center'>
      <div className=''>
        <ScrollIcon />
      </div>
      <p className='mt-2 text-sm tracking-wider'>[ scroll ]</p>
    </div>
  )
}

function FeaturedPosts() {
  return (
    <div className='relative container mx-auto flex flex-col bg-black px-8 py-16'>
      <div className='flex items-center justify-between py-4'>
        <div>
          <h2 className='text-4xl font-semibold'>
            <span>Featured</span>
            <span className='bg-linear-to-br from-white/30 via-white/90 to-white/30 bg-clip-text font-black text-transparent transition-colors'>
              &nbsp;Posts
            </span>
          </h2>
        </div>

        <p className='animate-pulse underline underline-offset-8'>[ SEE MORE ]</p>
      </div>
      {/* Border gradient */}
      <div className='flex h-1 animate-pulse items-center justify-center bg-linear-to-t from-white/70 to-transparent'></div>
      <p className='mt-8 text-center text-sm tracking-wider text-gray-300 lg:max-w-[50%] lg:text-left'>
        A collection of my thoughts, ideas, and experiences. I write about various topics, including
        web development, technology, and personal topics.
      </p>
      <div className='mt-8'>
        <ul className='grid grid-cols-3 gap-4'>
          <FeaturedPostCard />
          <FeaturedPostCard />
          <FeaturedPostCard />
          <FeaturedPostCard />
          <FeaturedPostCard />
        </ul>
      </div>
    </div>
  )
}

interface FeaturedPostCardProps {
  slug: string
  title: string
  description: string
  image: string
}

function FeaturedPostCard() {
  return (
    <li className='group offset-border relative flex flex-col rounded-lg border bg-neutral-900 transition-colors hover:bg-neutral-800'>
      <a
        className='absolute inset-0 z-20'
        href='/blog/prevent-form-spamming-honeypot'
        data-discover='true'
      >
        <span className='sr-only'>Link to article</span>
      </a>
      <div className='z-10 flex flex-col gap-3 rounded-lg border-neutral-700 p-4 hover:bg-neutral-800'>
        <div className='aspect-video shrink-0'>
          <img src='https://images.unsplash.com/photo-1566410824233-a8011929225c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670' />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 text-xs text-muted-foreground'>
            <time
              dateTime='2025-09-29T08:00:00.000Z'
              data-slot='badge'
              className='[a&amp;,button&amp;]:hover:bg-primary/75 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent bg-primary px-1.5 py-1 text-xs whitespace-nowrap text-primary-foreground transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-sky-500/20 dark:text-sky-400 dark:aria-invalid:ring-destructive/40'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 256 256'
              >
                <path d='M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z' opacity='0.2'></path>
                <path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z'></path>
              </svg>
              Sep 29, 2025
            </time>
            <span
              data-slot='badge'
              className='[a&amp;,button&amp;]:hover:bg-secondary/40 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent bg-secondary px-1.5 py-1 text-xs whitespace-nowrap text-secondary-foreground transition-colors group-hover:bg-neutral-700 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 256 256'
              >
                <path d='M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z' opacity='0.2'></path>
                <path d='M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z'></path>
              </svg>
              5 min read
            </span>
          </div>
          <h2 className='text-xl font-bold'>
            Prevent AI Bots from spamming your forms with honeypots
          </h2>
          <p className='line-clamp-2 text-sm text-muted-foreground'>
            Learn how to implement a honeypot to protect your form from spam submissions by AI or
            regular bots.
          </p>
        </div>
      </div>
    </li>
  )
}

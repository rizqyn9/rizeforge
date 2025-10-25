import { createFileRoute } from '@tanstack/react-router'

import { PostCard } from '~/components/block/post-card'
import { ScrollIcon } from '~/components/icons'
import { LightStick } from '~/components/ui/light-stick'
import { ShimmerButton } from '~/components/ui/shimmer-button'

import { SOCIALS } from '~/config/socials'
import { getBlogs } from '~/lib/blogs'
import { cx } from '~/lib/cva'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <ProjectSection />
    </>
  )
}

export function HeroSection() {
  return (
    <div className='relative container flex min-h-160 w-full items-center justify-center md:min-h-lvh'>
      <div
        className={cx(
          'absolute inset-0',
          'bg-size-[20px_20px]',
          'bg-[radial-gradient(#404040_1.3px,transparent_1px)]'
        )}
      />
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-fd-background mask-[radial-gradient(circle_at_center,transparent_10%,var(--color-background)_60%)]' />
      <HeroContent />
      <ScrollMotion />
    </div>
  )
}

function HeroContent() {
  return (
    <div
      className={cx(
        'z-20 flex h-full flex-col items-center justify-center',
        'animate-in duration-1000 blur-in-lg'
      )}
    >
      <h1 className='text-3xl font-semibold md:text-4xl'>Hi there, i&apos;m Rizqy</h1>

      <div className='mt-6 px-8 text-center md:mt-8 md:max-w-2xl md:px-0 md:text-xl'>
        <p className='text-gray-100 [&>b]:text-brand'>
          <b>Fullstack Engineer</b> and mostly <b>Frontend Engineer</b> with a passion for building
          high-performance web applications that scale.
        </p>
      </div>

      <div className='mt-6 flex gap-4 md:mt-8'>
        <ShimmerButton>Connect with me</ShimmerButton>
      </div>

      <div className='mt-8 flex flex-row gap-4'>
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
    <div
      className={cx(
        'absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center',
        'animate-in duration-1000 fade-in-0 slide-in-from-bottom-80'
      )}
    >
      <div className='animate-caret-blink'>
        <ScrollIcon />
      </div>
      <p className='mt-2 text-sm tracking-wider'>[ scroll ]</p>
    </div>
  )
}

function FeaturedPosts() {
  return (
    <div className='relative container flex max-w-4xl flex-col items-stretch py-16'>
      <div className='flex items-center justify-between py-4'>
        <h2 className='text-2xl font-bold'>Blogs</h2>
        <p className='animate-pulse'>[ see more ]</p>
      </div>
      <LightStick direction={'x'} />
      <p className='mx-auto mt-8 max-w-lg text-left text-white/80 lg:text-center'>
        A collection of my thoughts, ideas, and experiences. I write about various topics, including
        web development, technology, and personal topics.
      </p>
      <div className='mt-8'>
        <ul className='grid gap-4'>
          {getBlogs({ limit: 3 }).map(post => (
            <PostCard
              key={post.frontmatter.slug}
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              description={post.frontmatter.summary}
              image={post.frontmatter.image}
              publishedAt={post.frontmatter.publishedAt}
              readingTime={post.frontmatter.readingTime}
            />
          ))}
        </ul>
      </div>
      <div className='mt-6 flex items-center justify-center'>
        <a
          data-slot='button'
          className='inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground shadow-xs transition-all outline-none hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0'
          href='/blog'
          data-discover='true'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <path d='M216,64V184H40V64Z' opacity='0.2'></path>
            <path d='M120,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h72A8,8,0,0,1,120,64Zm-8,32H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,72h72a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm72,24H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z'></path>
          </svg>
          View all posts
        </a>
      </div>
    </div>
  )
}

function ProjectSection() {
  return (
    <div className='relative container flex max-w-4xl flex-col items-stretch py-16'>
      <div className='flex items-center justify-between py-4'>
        <div>
          <h2 className='text-2xl font-bold text-primary-foreground'>Projects</h2>
        </div>
        <p className='animate-pulse'>[ see more ]</p>
      </div>
      <LightStick direction={'x'} />
      <p className='mx-auto mt-8 max-w-lg text-center text-sm text-gray-300'>
        A collection of my thoughts, ideas, and experiences. I write about various topics, including
        web development, technology, and personal topics.
      </p>
      <div className='mt-8'>
        {/* <ul className='grid gap-4 md:grid-cols-2'>
          {MOCK_PROJECTS.map(project => (
            <ProjectCard {...project} key={project.slug} />
          ))}
        </ul> */}
      </div>
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'

import { PostCard } from '~/components/block/post-card'

import { getBlogs } from '~/lib/blogs'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='relative container flex max-w-3xl grow flex-col pt-navbar'>
      {/* <Spotlight /> */}
      <div className='flex flex-col items-center justify-center pt-16'>
        <h1 className='text-3xl font-semibold'>Blogs</h1>
        <h2 className='mt-3 max-w-md px-6 text-center'>
          A collection of my thoughts, ideas, and experiences.
          <br />I write about various topics, including web development, technology, and personal
          topics.
        </h2>
      </div>
      <div className='mx-auto mb-16 flex grow flex-col items-stretch justify-center gap-4 pt-16'>
        {getBlogs({}).map(post => (
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
      </div>
    </div>
  )
}

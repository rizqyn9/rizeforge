import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'

import CodeBlock from '~/components/ui/code-block'

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const slug = params.slug
    const post = allBlogs.find(post => post.frontmatter.slug === slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => {
    return {
      meta: [
        { title: loaderData?.frontmatter.title },
        { name: 'description', content: loaderData?.frontmatter.summary },
        //
      ],
    }
  },
})

function RouteComponent() {
  const { mdx, frontmatter } = Route.useLoaderData()
  const { title, publishedAt, banner } = frontmatter

  return (
    <>
      <div className='pointer-events-none absolute -z-1'>
        <div className='relative h-80 overflow-hidden blur-sm'>
          <img
            src={banner}
            alt={banner}
            title={banner}
            fetchPriority='high'
            width='1200'
            height='480'
            decoding='async'
            data-nimg='1'
            className='w-full'
          />
          <div className='absolute inset-0 z-1 bg-linear-to-t from-fd-background via-transparent to-transparent' />
        </div>
      </div>
      <div className='relative container max-w-4xl pt-navbar'>
        <div className='my-16 flex flex-col gap-8'>
          <div className='flex flex-col'>
            <h1 className='text-center text-3xl font-semibold'>{title}</h1>
            <hr className='mt-8 mb-4' />
            <div className='flex flex-row items-center justify-between gap-2 text-sm'>
              <p className='font-semibold'>Rizqy Nugroho</p>
              <p>{publishedAt}</p>
            </div>
            <hr className='mt-4' />
          </div>
          <div className='prose-sm'>
            <MDXContent
              components={{
                pre: props => {
                  console.log({ props })
                  return <CodeBlock {...props} data-no-copy={false} />
                },
                Custom: props => {
                  console.log(props)
                  return <pre {...props} />
                },
              }}
              code={mdx}
            />
          </div>
        </div>
      </div>
    </>
  )
}

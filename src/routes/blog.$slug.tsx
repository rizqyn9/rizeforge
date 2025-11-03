import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'

import { Badge } from '~/components/ui/badge'
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
  const { title, publishedAt, banner, tags } = frontmatter
  // const gtm = useGoogleTagManager()

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.dataLayer = window.dataLayer || []
  //     function gtag() {
  //       dataLayer.push(arguments)
  //     }
  //     gtag('js', new Date())

  //     gtag('config', 'G-1ZRRQ5YQ1N')
  //   }
  // }, [])

  return (
    <>
      <div className='pointer-events-none absolute inset-x-0 -z-1'>
        <div className='relative h-80 w-full overflow-hidden blur-sm'>
          <img
            src={banner}
            alt={banner}
            title={banner}
            fetchPriority='high'
            width='1200'
            height='480'
            decoding='async'
            data-nimg='1'
            className='w-full object-cover'
          />
          <div className='absolute inset-0 z-1 bg-linear-to-t from-fd-background via-transparent to-transparent' />
        </div>
      </div>
      <div className='relative container max-w-4xl pt-navbar'>
        <div className='my-16 flex flex-col gap-8'>
          <div className='flex flex-col'>
            <h1 className='text-center text-4xl font-semibold'>{title}</h1>
            {tags?.length && (
              <div className='mx-auto mt-6 mb-3 flex max-w-[70%] flex-wrap items-center justify-center gap-1.5'>
                {tags.map((tag, index) => (
                  <Badge key={index} variant='tag'>
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <hr className='mt-14 mb-4' />
            <div className='flex flex-row items-center justify-between gap-2 px-4 text-sm'>
              <p className='font-semibold'>Rizqy Nugroho</p>
              <p>{publishedAt}</p>
            </div>
            <hr className='mt-4' />
          </div>
          <div className='shiki prose-base'>
            <MDXContent
              components={{
                pre: CodeBlock,
              }}
              code={mdx}
            />
          </div>
        </div>
      </div>
    </>
  )
}

import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
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
  const { mdx, file } = Route.useLoaderData()

  return (
    <div className='container max-w-3xl pt-navbar'>
      <div className='my-16 flex flex-col gap-8'>
        <Link to='/blog' className='text-primary-foreground'>
          ← Back to Blogs
        </Link>
        <div className='shiki prose-sm'>
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
        <div className='prose-sm'>
          <h1>Dangerous</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: file,
            }}
          />
        </div>
      </div>
    </div>
  )
}

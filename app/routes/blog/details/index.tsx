import { allPosts } from 'content-collections'
import { SafeMdxRenderer } from 'safe-mdx'

import CodeBlock from '~/components/ui/code-block'

import type { Route } from './+types'

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params
  const blog = allPosts.find(post => post._meta.path === slug)

  if (!blog) {
    throw new Response('Not Found', { status: 404 })
  }

  return {
    title: 'Blog Details',
    blog,
  }
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { blog } = loaderData
  const ast = JSON.parse(blog.astString)

  return (
    <div className='container pt-navbar'>
      <h1>Blog Details</h1>
      <div className='shiki prose-sm'>
        {/* <MDXContent code={blog.mdx} /> */}
        <SafeMdxRenderer
          // markdown={blog.content}
          markdown={blog.mdx}
          mdast={ast}
          renderNode={node => {
            if (node.type === 'code') {
              return (
                <CodeBlock
                  data-language={'tsx'}
                  data-code={node.value}
                  data-filename={'app/components/TableOfContents.tsx'}
                >
                  {node.value}
                </CodeBlock>
              )
            }

            return undefined
          }}
        />
      </div>
    </div>
  )
}

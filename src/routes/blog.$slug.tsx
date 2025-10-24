import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { SafeMdxRenderer } from 'safe-mdx'

import CodeBlock from '~/components/ui/code-block'

export const Route = createFileRoute('/blog/$slug')({
  loader({ params }) {
    const { slug } = params

    const blog = allPosts.find(post => post._meta.path === slug)
    if (!blog) {
      throw notFound()
    }

    return blog
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { astString, mdx } = Route.useLoaderData()
  const ast = JSON.parse(astString)

  return (
    <div className='container pt-navbar'>
      <h1>Blog Details</h1>
      <div className='shiki prose-sm'>
        <SafeMdxRenderer
          markdown={mdx}
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

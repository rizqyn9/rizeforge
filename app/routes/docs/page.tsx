import { docs } from '@docs'
import { toClientRenderer } from 'fumadocs-mdx/runtime/vite'

import { source } from '~/lib/source'

import type { Route } from './+types/page'

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'].split('/').filter(v => v.length > 0)
  const page = source.getPage(slugs)
  if (!page) throw new Response('Not found', { status: 404 })
  return {
    path: page.path,
  }
}
const renderer = toClientRenderer(docs.doc, ({ default: Mdx, frontmatter }) => {
  return (
    <div className='prose'>
      <h1>{frontmatter.title}</h1>
      <Mdx />
    </div>
  )
})
export default function Page(props: Route.ComponentProps) {
  const { path } = props.loaderData
  const Content = renderer[path]
  return <Content />
}

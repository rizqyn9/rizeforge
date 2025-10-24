import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'
import { compileMDX } from '@content-collections/mdx'
import rehypeShiki from '@shikijs/rehype'
import { mdxParse } from 'safe-mdx/parse'
import { z } from 'zod'

import { transformerCodeBlock } from './app/lib/transformer-code-block'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
  async transform(data, context) {
    const astString = JSON.stringify(mdxParse(data.content))
    const mdx = await compileMDX(context, data)
    const md = await compileMarkdown(context, data, {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: 'vitesse-dark',
            inline: 'tailing-curly-colon',
            transformers: [transformerCodeBlock],
          },
        ],
      ],
      allowDangerousHtml: true,
    })
    return {
      ...data,
      astString,
      mdx,
      md,
    }
  },
})

export default defineConfig({
  collections: [posts],
})

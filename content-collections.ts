import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeShiki from '@shikijs/rehype'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { z } from 'zod'

import { remarkHeading } from '~/lib/mdx/remark-heading'
import { transformerCodeBlock } from '~/lib/transformer-code-block'

const blogs = defineCollection({
  name: 'blogs',
  directory: 'content/blogs',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    banner: z.string().optional(),
    publishedAt: z.string(),
  }),
  async transform(data, context) {
    const mdx = await compileMDX(context, data, {
      remarkPlugins: [remarkParse, remarkGfm, [remarkHeading, { generateToc: true }], remarkRehype],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: 'dark-plus',
            transformers: [transformerCodeBlock()],
          },
        ],
      ],
    })

    return {
      _raw: data,
      frontmatter: {
        slug: data._meta.path,
        title: data.title,
        tags: data.tags,
        summary: data.summary,
        publishedAt: data.publishedAt,
        readingTime: '5 min read',
        banner:
          data.banner ??
          'https://images.unsplash.com/photo-1566410824233-a8011929225c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
      },
      mdx,
    }
  },
})

export default defineConfig({
  collections: [blogs],
})

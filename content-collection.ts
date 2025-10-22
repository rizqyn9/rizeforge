import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const blogs = defineCollection({
  name: 'blogs',
  directory: 'content/blogs',
  include: ['**/*.mdx', '**/*.md'],
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
})

export default defineConfig({
  collections: [blogs],
})

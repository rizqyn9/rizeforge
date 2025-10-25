import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import unifiedInferGitMeta from 'unified-infer-git-meta'

import { transformerCodeBlock } from '../transformer-code-block'
import { rehypeCode } from './rehype-code'
import { remarkHeading } from './remark-heading'

export async function contentCollectionExtractor(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHeading, { generateToc: true })
    .use(unifiedInferGitMeta)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: 'dark-plus',
      transformers: [transformerCodeBlock()],
    })
    .use(rehypeCode)
    .use(rehypeStringify)
    .process(content)

  return result
}

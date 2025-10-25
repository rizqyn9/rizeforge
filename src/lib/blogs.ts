import { allBlogs } from 'content-collections'

export function getBlogs(opts: { limit?: number }) {
  return allBlogs.slice(0, opts.limit || allBlogs.length)
}

import { allPosts } from 'content-collections'
import { Link } from 'react-router'

export default function Page() {
  return (
    <div className='container'>
      <div className='pt-navbar'>
        <h1 className='text-3xl font-bold'>Blog</h1>
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        {allPosts.map(post => (
          <Link key={post.title} to={`/blog/${post._meta.path}`}>
            <div key={post._meta.filePath}>
              <h2 className='text-2xl font-bold'>{post.title}</h2>
              <p>{post.summary}</p>
              {`/blog/${post._meta.path}`}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

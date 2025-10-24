import { Link } from '@tanstack/react-router'

export interface PostCardProps {
  slug: string
  title: string
  description: string
  image: string
  publishedAt: string
  readingTime: string
}

export function PostCard({
  slug,
  title,
  description,
  image,
  publishedAt,
  readingTime,
}: PostCardProps) {
  return (
    <li
      className='group offset-border relative flex flex-col rounded-lg border bg-neutral-900 transition-colors hover:bg-neutral-800'
      title={title}
    >
      <Link
        className='absolute inset-0 z-20'
        data-discover='true'
        to='/blog/$slug'
        params={{ slug }}
      >
        <span className='sr-only'>Link to article</span>
      </Link>
      <div className='z-10 flex flex-col gap-3 rounded-lg border-neutral-700 p-4 hover:bg-neutral-800'>
        <div className='offset-border aspect-video shrink-0 overflow-hidden rounded-sm'>
          <img src={image} alt={title} />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 text-xs text-muted-foreground'>
            <time
              dateTime='2025-09-29T08:00:00.000Z'
              data-slot='badge'
              className={`inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent bg-primary px-1.5 py-1 text-xs whitespace-nowrap text-primary-foreground transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-sky-500/20 dark:text-sky-400 dark:aria-invalid:ring-destructive/40`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 256 256'
              >
                <path d='M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z' opacity='0.2'></path>
                <path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z'></path>
              </svg>
              {publishedAt}
            </time>
            <span
              data-slot='badge'
              className={`inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent bg-secondary px-1.5 py-1 text-xs whitespace-nowrap text-secondary-foreground transition-colors group-hover:bg-neutral-700 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 256 256'
              >
                <path d='M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z' opacity='0.2'></path>
                <path d='M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z'></path>
              </svg>
              {readingTime}
            </span>
          </div>
          <h2 className='line-clamp-2 text-xl font-bold'>{title}</h2>
          <p className='line-clamp-2 text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </li>
  )
}

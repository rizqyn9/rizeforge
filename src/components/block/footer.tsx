export function Footer() {
  return (
    <footer className='relative container flex w-full items-center justify-between border-t'>
      <div>
        <p className='text-sm text-gray-300'>
          © {new Date().getFullYear()} Rizqy. All rights reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 py-8'>
        <a
          href='https://github.com/rizqy'
          target='_blank'
          rel='noreferrer'
          className='text-sm font-semibold text-gray-300 transition-colors hover:text-foreground'
        >
          GitHub
        </a>
        <a
          href='https://twitter.com/rizqy'
          target='_blank'
          rel='noreferrer'
          className='text-sm font-semibold text-gray-300 transition-colors hover:text-foreground'
        >
          Twitter
        </a>
      </div>
    </footer>
  )
}

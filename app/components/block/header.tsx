import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { cx } from '~/lib/cva'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cx(
        'fixed top-0 right-0 left-0 z-50 flex w-full flex-col border-b transition-all ease-in-out',
        isScrolled ? 'bg-background/10 backdrop-blur-md' : 'border-b-transparent'
      )}
    >
      <section className='relative container flex h-16 w-full items-center justify-between'>
        <div className='relative flex items-center justify-center'>
          <Link
            to='/'
            className='absolute inset-0 z-20 flex items-center justify-center'
            aria-label='Back to home'
          >
            <span className='sr-only'>Back to home</span>
          </Link>
          <img src='/logo-dark.svg' width='213' height='28' className='w-24' />
        </div>

        <div>
          <nav className='flex items-center gap-3'>
            {MENU.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className='text-sm font-semibold text-gray-300 transition-colors hover:text-foreground'
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </header>
  )
}

const MENU = [
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

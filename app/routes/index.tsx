import { useId } from 'react'

import { ShimmerButton } from '~/components/ui/shimmer-button'

import { SOCIALS } from '~/config/socials'
import { cx } from '~/lib/cva'

export default function Page() {
  return <MainSection />
}

function MainSection() {
  return (
    <div className='container mx-auto min-h-dvh px-4'>
      <StripedPattern className='mask-[radial-gradient(400px_circle_at_center,white,transparent)] text-gray-300 opacity-40' />
      <div className='flex min-h-svh flex-col justify-center md:items-center'>
        <h1 className='text-4xl font-semibold'>Hi there, i'm Rizqy</h1>

        <div className='mt-6 max-w-2xl text-left text-xl md:text-center'>
          <p className='text-gray-300'>
            <b className='text-foreground'>Fullstack Engineer</b> and mostly{' '}
            <b className='text-foreground'>Frontend Engineer</b> with a passion for building
            high-performance web applications that scale.
          </p>
        </div>

        <div className='mt-6 flex gap-4'>
          <ShimmerButton>Connect with me</ShimmerButton>
          <button>More about me</button>
        </div>

        <div className='mt-6 flex flex-row gap-4'>
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              title={label}
              key={label}
              href={href}
              target='_blank'
              rel='noreferrer'
              className='size-8'
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

interface StripedPatternProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'left' | 'right'
}

export function StripedPattern({
  direction = 'left',
  className,
  width = 30,
  height = 30,
  ...props
}: StripedPatternProps) {
  const id = useId()
  const w = Number(width)
  const h = Number(height)

  return (
    <svg
      aria-hidden='true'
      className={cx('pointer-events-none absolute inset-0 h-full w-full stroke-[0.5]', className)}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <pattern id={id} width={w} height={h} patternUnits='userSpaceOnUse'>
          {direction === 'left' ? (
            <>
              <line x1='0' y1={h} x2={w} y2='0' stroke='currentColor' />
              <line x1={-w} y1={h} x2='0' y2='0' stroke='currentColor' />
              <line x1={w} y1={h} x2={w * 2} y2='0' stroke='currentColor' />
            </>
          ) : (
            <>
              <line x1='0' y1='0' x2={w} y2={h} stroke='currentColor' />
              <line x1={-w} y1='0' x2='0' y2={h} stroke='currentColor' />
              <line x1={w} y1='0' x2={w * 2} y2={h} stroke='currentColor' />
            </>
          )}
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  )
}

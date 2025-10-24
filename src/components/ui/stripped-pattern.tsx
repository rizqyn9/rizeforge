import { useId } from 'react'

import { cx } from '~/lib/cva'

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

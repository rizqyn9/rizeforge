import type { ComponentProps, CSSProperties } from 'react'

import { cx } from '~/lib/cva'

interface ShimmerButtonProps extends ComponentProps<'button'> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '0.2em',
  shimmerDuration = '1s',
  borderRadius = '50px',
  background = 'oklch(0.209 0 0)',
  className,
  children,
  ref,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          '--spread': '120deg',
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        } as CSSProperties
      }
      className={cx(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]',
        'transform-gpu transition-transform duration-300 ease-in-out hover:text-brand active:translate-y-px',
        className
      )}
      ref={ref}
      {...props}
    >
      {/* spark container */}
      <div className={cx('@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]')}>
        <div className='absolute inset-0 aspect-[1] h-[100cqh] animate-shimmer-slide rounded-none [mask:none]'>
          <div className='absolute -inset-full w-auto [translate:0_0] rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--color-brand)_var(--spread),transparent_var(--spread))]' />
        </div>
      </div>
      {children}

      {/* Highlight */}
      <div
        className={cx(
          'absolute inset-0 size-full',
          'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',
          'transform-gpu transition-all duration-300 ease-in-out',
          'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',
          'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
        )}
      />

      {/* backdrop */}
      <div
        className={cx(
          'absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]'
        )}
      />
    </button>
  )
}

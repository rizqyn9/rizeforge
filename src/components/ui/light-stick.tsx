import { cx } from '~/lib/cva'

type LightStickProps = {
  direction: 'x' | 'y'
  className?: string
}

export function LightStick(props: LightStickProps) {
  const { direction, className } = props

  return (
    <div className={cx([direction === 'x' ? 'stick-x' : 'stick-y', className])}>
      <div className={cx([direction === 'x' ? 'stick-runner-x' : 'stick-runner-y'])} />
    </div>
  )
}

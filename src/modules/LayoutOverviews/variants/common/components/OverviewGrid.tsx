import { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BaseComponentTypes } from '@/common/types/components'

interface OverviewGridProps extends BaseComponentTypes {}

const OverviewGrid: FunctionComponent<OverviewGridProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'h-full grid bg-white rounded-md p-3 gap-2 select-none',
        className
      )}
    >
      {children}
    </div>
  )
}

export default OverviewGrid

import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { BaseComponentTypes } from '@/common/types/components'

interface ToolTipProps extends BaseComponentTypes {
  tooltip: string
  placement?: 'top' | 'left' | 'bottom' | 'right'
}

export const ToolTip: FunctionComponent<ToolTipProps> = ({
  children,
  tooltip,
  placement = 'top',
  className,
}) => {
  let placementClass = 'bottom-full mb-2 left-[50%] translate-x-[-50%]'
  switch (placement) {
    case 'bottom':
      placementClass = 'top-full mt-2 left-[50%] translate-x-[-50%]'
      break
    case 'left':
      placementClass = 'right-full top-[50%] translate-y-[-50%] mr-2'
      break
    case 'right':
      placementClass = 'left-full ml-2 top-[50%] translate-y-[-50%]'
      break
    default:
      placementClass = 'bottom-full mb-2 left-[50%] translate-x-[-50%]'
      break
  }

  return (
    <div className="group relative flex">
      {children}
      <span
        className={classNames(
          'text-sm shadow-md inline-flex items-center justify-center w-max',
          'invisible group-hover:visible opacity-0 group-hover:opacity-100 z-50',
          'transition bg-black text-white p-1 px-2 rounded absolute',
          placementClass,
          className
        )}
      >
        {tooltip}
      </span>
    </div>
  )
}

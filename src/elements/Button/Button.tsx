import { FC, ReactNode, memo, forwardRef } from 'react'
import classNames from 'classnames'
import { BaseComponentTypes } from '@/common/types/components'

interface ButtonProps extends BaseComponentTypes {
  isActive?: boolean
  icon?: ReactNode
  iconOnClick?: () => void
  iconPlace?: 'left' | 'right'
}

const Button: FC<ButtonProps> = ({
  children,
  isActive,
  icon,
  iconPlace = 'right',
  className,
  iconOnClick,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'p-1 px-2 rounded-md flex items-center justify-between gap-x-1 cursor-pointer',
        isActive
          ? 'bg-gray-700 hover:bg-gray-600 text-lightColor text-base'
          : 'bg-gray-200 hover:bg-gray-100',
        iconPlace === 'right' && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      <button>{children}</button>
      <div
        className="hover:text-red-400"
        onClick={(e) => {
          e.stopPropagation()
          iconOnClick?.()
        }}
      >
        {icon}
      </div>
    </div>
  )
}

export default Button

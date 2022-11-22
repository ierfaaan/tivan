/* eslint-disable react/button-has-type */
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { BaseComponentTypes } from '@/common/types/components'

interface IconButtonProps extends BaseComponentTypes {
  icon: ReactNode
  varient?: 'outline' | 'standard'
  isActive?: boolean
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  varient = 'outline',
  isActive = false,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-gray-400 hover:text-gray-600 p-1 h-[32px] w-[32px] transition-all ease-in-out duration-300',
        varient === 'outline' &&
          'border border-gray-400 hover:border-gray-500 rounded-md',
        isActive && 'text-primary',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton

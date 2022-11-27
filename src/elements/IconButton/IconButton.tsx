/* eslint-disable react/button-has-type */
import classNames from 'classnames'
import { createElement, FC } from 'react'
import { BaseComponentTypesWithIcon } from '@/common/types/components'

interface IconButtonProps extends BaseComponentTypesWithIcon {
  varient?: 'outline' | 'standard'
  isActive?: boolean
}

export const IconButton: FC<IconButtonProps> = ({
  varient = 'outline',
  isActive = false,
  className,
  iconProps,
  icon,
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
      {createElement(icon!, iconProps)}
    </button>
  )
}

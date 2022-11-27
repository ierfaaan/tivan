import React, { FC, createElement } from 'react'
import { IconType } from '@react-icons/all-files'
import classNames from 'classnames'
import { BaseComponentTypesWithIcon } from '@/common/types/components'

interface ButtonProps extends Omit<BaseComponentTypesWithIcon, 'icon'> {
  isActive?: boolean
  iconOnClick?: () => void
  iconPlace?: 'left' | 'right'
  icon: IconType | null
}

export const Button: FC<ButtonProps> = ({
  children,
  isActive,
  iconPlace = 'right',
  className,
  iconProps,
  icon,
  iconOnClick,
  ...props
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    iconOnClick?.()
  }
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
      <button type="button">{children}</button>
      {icon && (
        <button type="button" className="hover:text-red-400" onClick={onClickHandler}>
          {createElement(icon, iconProps)}
        </button>
      )}
    </div>
  )
}

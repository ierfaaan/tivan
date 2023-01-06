import classNames from 'classnames'
import { FunctionComponent, useEffect } from 'react'
import { BaseComponentTypes } from '@/common/types/components'
import { CloseIcon } from '@/common/icons'
import { IconButton } from '@/elements'

interface DrawerProps extends BaseComponentTypes {
  isOpen: boolean
  onClose: () => void
  direction?: 'right' | 'left' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'xl'
}

interface DrawerHeaderProps extends BaseComponentTypes {
  onClose: () => void
  title?: string
}
interface DrawerType extends FunctionComponent<DrawerProps> {
  Body: React.FC<BaseComponentTypes>
  Header: React.FC<DrawerHeaderProps>
  Footer: React.FC<BaseComponentTypes>
}

export const Drawer: DrawerType = ({
  isOpen,
  onClose,
  size = 'md',
  direction = 'left',
  children,
  className,
}): JSX.Element => {
  let classes = ''
  let openClass = ''
  let drawerSize = ''

  switch (size) {
    case 'sm':
      drawerSize =
        direction === 'left' || direction === 'right' ? 'w-[350px]' : 'h-[350px]'
      break
    case 'md':
      drawerSize =
        direction === 'left' || direction === 'right' ? 'w-[450px]' : 'h-[450px]'
      break
    case 'xl':
      drawerSize =
        direction === 'left' || direction === 'right' ? 'w-[550px]' : 'h-[550px]'
      break
    default:
      drawerSize =
        direction === 'left' || direction === 'right' ? 'w-[350px]' : 'h-[350px]'
      break
  }

  switch (direction) {
    case 'bottom':
      classes = 'right-0 left-0 bottom-0'
      openClass = isOpen ? 'translate-y-[0]' : 'translate-y-[100%]'
      break
    case 'top':
      classes = 'right-0 left-0 top-0'
      openClass = isOpen ? 'translate-y-[0]' : 'translate-y-[-100%]'
      break
    case 'left':
      classes = 'left-0 bottom-0 top-0'
      openClass = isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
      break
    case 'right':
      classes = 'right-0 bottom-0 top-0'
      openClass = isOpen ? 'translate-x-[0]' : 'translate-x-[100%]'
      break
    default:
      break
  }

  return (
    <>
      <div
        className={classNames(
          'fixed left-0 top-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.4)]',
          !isOpen && 'hidden'
        )}
        onClick={onClose}
      />
      <div
        className={classNames(
          'bg-white shadow-2xl fixed z-50 transition-transform duration-[0.5s] flex flex-col',
          classes,
          openClass,
          drawerSize,
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

Drawer.Header = ({ children, title, className, onClose }): JSX.Element => {
  return (
    <div className={classNames('p-4 border-b border-gray-400', className)}>
      {title && (
        <div className="w-full flex items-center justify-between font-semibold text-xl">
          <h2>{title}</h2>
          <IconButton icon={CloseIcon} varient="standard" onClick={onClose} />
        </div>
      )}
      {children !== undefined && <div className="w-full mt-3">{children}</div>}
    </div>
  )
}

Drawer.Body = ({ children, className }): JSX.Element => (
  <div className={classNames(className, 'space-y-3 overflow-auto flex-1 p-4 pb-[72px]')}>
    {children}
  </div>
)

Drawer.Footer = ({ children, className }): JSX.Element => (
  <div
    className={classNames(
      'absolute bg-white border-t border-gray-400 bottom-0 left-[0] right-[0] p-4 flex gap-2',
      className
    )}
  >
    {children}
  </div>
)

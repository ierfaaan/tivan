import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  direction?: 'right' | 'left' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'xl'
}

export const Drawer: FunctionComponent<DrawerProps> = ({
  isOpen,
  onClose,
  size = 'md',
  direction = 'left',
  children,
}) => {
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
          'bg-white shadow-2xl fixed z-50 transition-transform duration-[0.5s]',
          classes,
          openClass,
          drawerSize
        )}
      >
        {children}
      </div>
    </>
  )
}

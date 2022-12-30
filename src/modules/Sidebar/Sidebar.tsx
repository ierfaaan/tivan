import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { Anchor } from '@/elements'
import { MenuList, Monitors } from './components'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const [sideBarState, setSideBarState] = useState(true)
  return (
    <div
      className={classNames(
        sideBarState ? 'w-[60px]' : 'w-[10px]',
        'py-3 relative shadow-sm h-full bg-lightColor'
      )}
    >
      <Anchor
        className="left-0 top-[50%] translate-x-[-50%]"
        onClick={() => setSideBarState((prevState) => !prevState)}
      />
      <div
        className={classNames(
          'h-full flex-col items-center justify-end',
          sideBarState ? 'flex' : 'hidden'
        )}
      >
        <MenuList />
        <Monitors />
      </div>
    </div>
  )
}
export default Sidebar

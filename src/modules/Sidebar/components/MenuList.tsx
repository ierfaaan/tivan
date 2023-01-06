import { FunctionComponent, useState } from 'react'
import { IconButton } from '@/elements'
import { LetterIcon, LogOutIcon, SettingIcon, UserIcon } from '@/common/icons'
import { Drawer } from '@/common/components'

interface MenuListProps {}

const MenuList: FunctionComponent<MenuListProps> = () => {
  const [isOpenSetting, setIsOpenSetting] = useState(false)
  const [isOpenMessages, setIsOpenessages] = useState(false)

  const onCloseDrawerSetting = () => {
    setIsOpenSetting(false)
  }

  const onCloseDrawerMessages = () => {
    setIsOpenessages(false)
  }

  const onOpenDrawerSetting = () => {
    setIsOpenSetting(true)
  }

  const onOpenDrawerMessages = () => {
    setIsOpenessages(true)
  }

  return (
    <div className="mb-auto flex flex-col gap-y-4">
      <IconButton
        varient="standard"
        icon={LetterIcon}
        iconProps={{
          size: '30px',
        }}
        onClick={onOpenDrawerMessages}
      />
      <IconButton
        varient="standard"
        icon={SettingIcon}
        iconProps={{
          size: '30px',
        }}
        onClick={onOpenDrawerSetting}
      />
      <IconButton
        varient="standard"
        icon={UserIcon}
        iconProps={{
          size: '30px',
        }}
      />
      <IconButton
        varient="standard"
        icon={LogOutIcon}
        iconProps={{
          size: '30px',
        }}
      />
      <Drawer isOpen={isOpenSetting} onClose={onCloseDrawerSetting}>
        Setting
      </Drawer>
      <Drawer isOpen={isOpenMessages} onClose={onCloseDrawerMessages}>
        Messages
      </Drawer>
    </div>
  )
}

export default MenuList
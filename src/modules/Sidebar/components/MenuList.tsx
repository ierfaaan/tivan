import { FunctionComponent } from 'react'
import { IconButton } from '@/elements'
import { LetterIcon, LogOutIcon, SettingIcon, UserIcon } from '@/common/icons'

interface MenuListProps {}

const MenuList: FunctionComponent<MenuListProps> = () => {
  return (
    <div className="mb-auto flex flex-col gap-y-4">
      <IconButton
        varient="standard"
        icon={LetterIcon}
        iconProps={{
          size: '30px',
        }}
      />
      <IconButton
        varient="standard"
        icon={SettingIcon}
        iconProps={{
          size: '30px',
        }}
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
    </div>
  )
}

export default MenuList

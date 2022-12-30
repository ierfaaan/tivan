import { FunctionComponent } from 'react'
import { IconButton } from '@/elements'
import { LSIcon } from '@/common/icons'

interface LSConnectionProps {}

const LSConnection: FunctionComponent<LSConnectionProps> = () => {
  return (
    <IconButton
      varient="standard"
      iconProps={{ size: '100%', color: 'green' }}
      className="w-[30px] h-[30px]"
      icon={LSIcon}
    />
  )
}

export default LSConnection

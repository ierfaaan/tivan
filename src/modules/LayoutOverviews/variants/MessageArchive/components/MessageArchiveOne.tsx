import { FC } from 'react'
import { OverviewBox, OverviewGrid } from '../../common/components'

interface MessageArchiveOneProps {}

const MessageArchiveOne: FC<MessageArchiveOneProps> = () => {
  return (
    <OverviewGrid>
      <OverviewBox>آرشیو پیام ها</OverviewBox>
    </OverviewGrid>
  )
}

export default MessageArchiveOne

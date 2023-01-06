import { FunctionComponent } from 'react'
import { Button } from '@/elements'
import { Drawer } from '@/common/components'
import { MessageBox } from './components'

interface DrawerMarketMessageProps {
  isOpen: boolean
  onCloseHandler: $VoidFunc
}
const DrawerMarketMessage: FunctionComponent<DrawerMarketMessageProps> = ({
  isOpen,
  onCloseHandler,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onCloseHandler} className="flex flex-col">
      <Drawer.Header onClose={onCloseHandler} title="پیام ها" />
      <Drawer.Body>
        <MessageBox />
      </Drawer.Body>
      <Drawer.Footer>
        <Button className="w-[33.33%]">مشاهده همه</Button>
        <Button className="w-[33.33%]">آرشیو پیام ها</Button>
        <Button className="w-[33.33%]">بارگزاری مجدد</Button>
      </Drawer.Footer>
    </Drawer>
  )
}

export default DrawerMarketMessage

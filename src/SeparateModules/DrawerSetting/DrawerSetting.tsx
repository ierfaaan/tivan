import { FunctionComponent } from 'react'
import { Tab } from '@headlessui/react'
import { Drawer } from '@/common/components'
import { Button } from '@/elements'
import { TabSetting, TabsSeeting } from './components'
import { TABS_DATA } from './constants'

interface DrawerSettingProps {
  isOpen: boolean
  onCloseHandler: $VoidFunc
}

const DrawerSetting: FunctionComponent<DrawerSettingProps> = ({
  isOpen,
  onCloseHandler,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onCloseHandler}>
      <Tab.Group>
        <Drawer.Header
          title="مدیریت تنظیمات"
          onClose={onCloseHandler}
          className="flex flex-col items-start"
        >
          <TabsSeeting data={TABS_DATA} />
        </Drawer.Header>
        <Drawer.Body>
          <TabSetting data={TABS_DATA} />
        </Drawer.Body>
        <Drawer.Footer>
          <Button className="grow">ذخیره</Button>
          <Button className="grow">انصراف</Button>
          <Button>تنظیمات پیش فرض</Button>
        </Drawer.Footer>
      </Tab.Group>
    </Drawer>
  )
}

export default DrawerSetting

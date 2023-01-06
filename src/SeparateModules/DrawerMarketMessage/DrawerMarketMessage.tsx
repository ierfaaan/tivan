import { FunctionComponent } from 'react'
import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'
import { Drawer } from '@/common/components'
import { CheckedIcon, ChevronDownIcon } from '@/common/icons'
import { Button, ToolTip } from '@/elements'

interface DrawerMarketMessageProps {
  isOpen: boolean
  onCloseHandler: $VoidFunc
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const DrawerMarketMessage: FunctionComponent<DrawerMarketMessageProps> = ({
  isOpen,
  onCloseHandler,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onCloseHandler} className="flex flex-col">
      <Drawer.Header onClose={onCloseHandler}>
        <h1>پیام ها</h1>
      </Drawer.Header>
      <Drawer.Body>
        {data.map((item) => (
          <Disclosure key={item}>
            {({ open }) => (
              <div className="space-y-1">
                <Disclosure.Button className="w-full bg-slate-100 p-2 rounded-md">
                  <div className="flex gap-2 w-full items-center">
                    <ToolTip tooltip="خوانده شد" placement="left">
                      <CheckedIcon color="green" />
                    </ToolTip>
                    <p className="ml-auto font-semibold">
                      این پیام از طرف ناظر بازار است
                    </p>
                    <ChevronDownIcon
                      className={classNames(
                        'transition-transform',
                        open ? 'rotate-180 transform' : ''
                      )}
                    />
                  </div>
                </Disclosure.Button>
                <div
                  className={classNames(
                    'max-h-0 overflow-hidden transition-all duration-[0.3s] px-2',
                    open ? 'max-h-[100px] py-2' : ''
                  )}
                >
                  <Disclosure.Panel className="text-gray-500" static>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است
                  </Disclosure.Panel>
                </div>
              </div>
            )}
          </Disclosure>
        ))}
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

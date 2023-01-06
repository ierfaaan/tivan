import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { Button } from '@/elements'

interface TabsProps {
  data: {
    id: number
    title: string
    tabComponent: FunctionComponent
  }[]
}
const Tabs: FunctionComponent<TabsProps> = ({ data }) => {
  return (
    <Tab.List className="flex gap-4">
      {data.map(({ title, id }) => (
        <Tab className="w-[50%]" key={id}>
          {({ selected }) => (
            <Button className={classNames('py-2 w-full')} isActive={selected}>
              {title}
            </Button>
          )}
        </Tab>
      ))}
    </Tab.List>
  )
}

export default Tabs

import { FunctionComponent, createElement } from 'react'
import { Tab } from '@headlessui/react'

interface TabProps {
  data: {
    id: number
    title: string
    tabComponent: FunctionComponent
  }[]
}

const TabSetting: FunctionComponent<TabProps> = ({ data }) => {
  return (
    <Tab.Panels>
      {data.map(({ tabComponent, id }) => (
        <Tab.Panel key={id}>{createElement(tabComponent)}</Tab.Panel>
      ))}
    </Tab.Panels>
  )
}

export default TabSetting

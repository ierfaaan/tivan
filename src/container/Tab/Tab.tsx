import { FC, createElement, Suspense } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import { TabsFilterByMonitorSelector } from '@/store/monitors'

interface TabProps {
  monitorId: string
}

const Tab: FC<TabProps> = ({ monitorId }) => {
  const tabs = useAppSelector(TabsFilterByMonitorSelector(monitorId))
  return (
    <>
      {tabs?.map((tab) => (
        <div
          className={classNames(
            'bg-gray-700 rounded-lg h-full',
            tab.isActive ? 'flex' : 'hidden'
          )}
          key={tab.id}
        >
          <Suspense fallback="loading...">
            {createElement(tab?.layout.component)}
          </Suspense>
        </div>
      ))}
    </>
  )
}
export default Tab

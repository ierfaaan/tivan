import { FC, useEffect } from 'react'
import classNames from 'classnames'
import { Tabs } from './components'
import { useAppSelector } from '@/store'
import { ActiveMonitorIdSelector } from '@/store/monitors'
import Tab from '../Tab/Tab'

interface MonitorsProps {
  id: string
  name: string
}

const Monitors: FC<MonitorsProps> = ({ id, children, name }) => {
  const activeMonitorId = useAppSelector(ActiveMonitorIdSelector)

  return (
    <div
      className={classNames(
        id !== activeMonitorId ? 'hidden' : 'flex',
        'flex-1 h-full flex-col gap-3 w-full'
      )}
    >
      <Tabs monitorId={id} />
      <Tab monitorId={id} />
    </div>
  )
}

export default Monitors

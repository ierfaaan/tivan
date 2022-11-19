import { FC } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import { ActiveMonitorIdSelector } from '@/store/monitors'

interface MonitorsProps {
  id: string
}

const Monitors: FC<MonitorsProps> = ({ id, children }) => {
  const activeMonitorId = useAppSelector(ActiveMonitorIdSelector)

  return (
    <div
      className={classNames(
        id !== activeMonitorId ? 'hidden' : 'flex',
        'flex-1 h-full flex-col gap-3 w-full'
      )}
    >
      {children}
    </div>
  )
}

export default Monitors

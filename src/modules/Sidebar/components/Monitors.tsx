import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { MonitorIcon } from '@/common/icons'
import { IconButton, ToolTip } from '@/elements'
import { ActiveMonitorIdSelector, changeActiveMonitor } from '@/store/monitors'
import { useAppDispatch, useAppSelector } from '@/store'
import { useSetting } from '@/api/Setting'

interface MonitorsProps {}

const Monitors: FC<MonitorsProps> = () => {
  const { data, isSuccess } = useSetting()
  const activeMonitorId = useAppSelector(ActiveMonitorIdSelector)
  const dispatch = useAppDispatch()

  let content: JSX.Element | JSX.Element[] = (
    <Skeleton width="40px" height="40px" count={5} />
  )

  if (isSuccess) {
    content = data?.monitors.map((monitor, index) => {
      return (
        <ToolTip key={monitor.id} tooltip={monitor.name} placement="left">
          <IconButton
            varient="standard"
            isActive={monitor.id === activeMonitorId}
            icon={MonitorIcon}
            iconProps={{
              size: '30px',
            }}
            onClick={() => {
              dispatch(changeActiveMonitor(index))
            }}
            className="w-[40px] h-[40px]"
          />
        </ToolTip>
      )
    })
  }

  return (
    <div className="flex  flex-col items-center gap-y-2 justify-center">{content}</div>
  )
}
export default Monitors

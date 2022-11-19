import React, { useEffect } from 'react'
import { useSetting } from '@/api/Setting'
import { AppLayout } from '@/layouts'
import { useAppDispatch, useAppSelector } from '@/store'
import { ActiveMonitorIdSelector, initializeMonitors } from '@/store/monitors'
import Monitors from '../Monitor/Monitors'
import Tab from '../Tab/Tab'

const App = () => {
  const { data, isSuccess } = useSetting()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isSuccess) return
    dispatch(initializeMonitors(data.monitors))
  }, [isSuccess])

  return (
    <AppLayout>
      {data?.monitors.map(({ id, name }) => {
        return <Monitors id={id} key={id} name={name} />
      })}
    </AppLayout>
  )
}

export default App

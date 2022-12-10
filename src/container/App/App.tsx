import React, { useEffect } from 'react'
import { useSetting } from '@/api/Setting'
import AppLayout from '@/layouts/AppLayout'
import { useAppDispatch } from '@/store'
import { initializeMonitors } from '@/store/monitors'
import Monitors from '../Monitor/Monitors'
import Tab from '../Tab/Tab'
import { Tabs } from '../Monitor/components'
import { SettingModelModel } from '@/models/Setting'

const App = () => {
  const { data, isSuccess } = useSetting()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isSuccess) return
    dispatch(initializeMonitors(data.monitors))
    SettingModelModel.setting = data
  }, [isSuccess])

  return (
    <AppLayout>
      {data?.monitors.map(({ id }) => {
        return (
          <Monitors id={id} key={id}>
            <Tabs monitorId={id} />
            <Tab monitorId={id} />
          </Monitors>
        )
      })}
    </AppLayout>
  )
}

export default App

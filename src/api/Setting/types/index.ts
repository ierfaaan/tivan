import { FunctionComponent, ReactElement } from 'react'

export type TabType = {
  id: string
  title: string
  isActive: boolean
  closable?: boolean
  layout: {
    component: any
    commonProps: Record<string, any>
  }
  data: Record<string, any>
}

export type MonitorType = {
  name: string
  id: string
  tabs: Array<TabType>
}

export type GlobalSettingResponseType = {
  monitor_count: number
  tab_count: number
}
export type GlobalSettingResultType = {
  monitors: Array<MonitorType>
  tabCount: number
}

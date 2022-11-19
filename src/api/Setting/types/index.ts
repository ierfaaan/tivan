export type TabType = {
  id: string
  title: string
  monitorId: string
  isActive: boolean
  layout: {
    component: React.FunctionComponent
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

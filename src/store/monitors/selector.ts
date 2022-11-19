import { RootState } from '@/store'

export const activeMonitorSelector = (state: RootState) => {
  return state.monitorReducer.monitors?.[state.monitorReducer.activeMonitorIndex]
}
export const ActiveMonitorIdSelector = (state: RootState) =>
  state.monitorReducer.monitors?.[state.monitorReducer.activeMonitorIndex]?.id

export const TabsFilterByMonitorSelector = (monitorId: string) => (state: RootState) => {
  return state.monitorReducer.monitors.find((monitor) => monitor.id === monitorId)?.tabs
}

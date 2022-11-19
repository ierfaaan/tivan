import { MonitorType, TabType } from '@/api/Setting/types'

export type initialMonitorsStateType = {
  activeMonitorIndex: number
  monitors: Array<MonitorType> | []
}

export type BaseActionType = {
  type: string
}

export interface AddCategoryTabActionType extends BaseActionType {
  payload: TabType
}

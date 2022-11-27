import { MonitorType, TabType } from '@/api/Setting/types'

export type InitialMonitorsStateType = {
  activeMonitorIndex: number
  monitors: Array<MonitorType> | []
}

export type BaseActionType = {
  type: string
}

export interface AddCategoryTabActionType extends BaseActionType {
  payload: TabType
}

export interface AddNewTabActionType extends BaseActionType {
  payload: TabType
}

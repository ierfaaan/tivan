import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { SettingModelModel } from '@/models/Setting'
import { AddCategoryTabActionType, initialMonitorsStateType } from './types'

const initialState: initialMonitorsStateType = {
  activeMonitorIndex: 0,
  monitors: [],
}

// #1* TODO:: If Other Monitors Was Empty Should Show NewTab

export const monitorSlice = createSlice({
  initialState,
  name: 'monitors',
  reducers: {
    changeActiveMonitor(state, action) {
      state.activeMonitorIndex = action.payload
    },
    initializeMonitors(state, action) {
      state.monitors = action.payload
    },
    clearTabs(state) {
      const activeMonitor = state.monitors?.[state.activeMonitorIndex]
      activeMonitor.tabs = []
    },
    addNewTab() {},
    addTabWithIndex() {},
    addCategoryTab(state, action: AddCategoryTabActionType) {
      const tabCount = state.monitors?.[state.activeMonitorIndex].tabs.length
      if (SettingModelModel.tabCount && tabCount + 1 > SettingModelModel.tabCount) {
        toast.error(`حداکثر تعداد مجاز ${SettingModelModel.tabCount} تب میباشد`)
        return
      }
      const activeMonitor = state.monitors?.[state.activeMonitorIndex]
      activeMonitor.tabs.forEach((item) => {
        item.isActive = false
      })
      activeMonitor?.tabs.push(action.payload)
    },
    changeIndexTab(state, action) {
      const { dragIndex } = action.payload
      const { hoverIndex } = action.payload
      const activeMonitor = state.monitors[state.activeMonitorIndex]
      const hoverTab = activeMonitor.tabs[hoverIndex]
      const [tab] = activeMonitor.tabs.splice(dragIndex, 1, hoverTab)
      activeMonitor.tabs[hoverIndex] = tab
    },
    changeActiveTab(state, action) {
      const nextTabIndex = action.payload
      const activeMonitor = state.monitors?.[state.activeMonitorIndex]
      activeMonitor.tabs.forEach((tab) => {
        tab.isActive = false
      })
      activeMonitor.tabs[nextTabIndex].isActive = true
    },
    removeTab(state, action) {
      const tabRemovedIndex = action.payload
      const activeMonitor = state.monitors[state.activeMonitorIndex]
      activeMonitor.tabs.splice(tabRemovedIndex, 1)
      if (!activeMonitor.tabs.some((tab) => tab.isActive)) {
        const nextTab =
          state.monitors[state.activeMonitorIndex].tabs[Math.max(tabRemovedIndex - 1, 0)]
        if (nextTab) nextTab.isActive = true
      }
    },
  },
})

export default monitorSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { AddCategoryTabActionType, initialMonitorsStateType } from './types'

const initialState: initialMonitorsStateType = {
  activeMonitorIndex: 0,
  monitors: [],
}

// #5 TODO::Add Clear Tabs reducers
// #6 TODO::Add Limitation For Tab Add And Show Alert

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
    addNewTab() {},
    addTabWithIndex() {},
    addCategoryTab(state, action: AddCategoryTabActionType) {
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

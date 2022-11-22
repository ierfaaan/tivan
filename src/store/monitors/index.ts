import { monitorSlice } from './slice'

export * from './selector'
export const {
  changeActiveMonitor,
  addCategoryTab,
  addNewTab,
  addTabWithIndex,
  changeActiveTab,
  initializeMonitors,
  removeTab,
  changeIndexTab,
  clearTabs,
} = monitorSlice.actions
export { default as monitorReducer } from './slice'

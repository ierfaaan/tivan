import { GlobalSettingResponseType, GlobalSettingResultType } from './types'

const monitorDto = (monitorCount: number) => {
  return Array.from(Array(monitorCount).keys()).map((item) => {
    // #1 TODO::Add Statistics Tab For First Monitor
    // #2 TODO::Add Category Tab For Other Monitor Except First Monitor
    return {
      id: item.toString(),
      name: `monitor${item}`,
      tabs: [],
    }
  })
}

export const globalSettingDto = (
  data: GlobalSettingResponseType
): GlobalSettingResultType => {
  return {
    monitors: monitorDto(data.monitor_count),
    tabCount: data.tab_count,
  }
}

import { GlobalSettingResponseType, GlobalSettingResultType } from './types'

const monitorDto = (monitorCount: number) => {
  return Array.from(Array(monitorCount).keys()).map((item) => {
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

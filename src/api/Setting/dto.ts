import { CategoryLayout, StatisticLayout } from '@/layouts'
import { GlobalSettingResponseType, GlobalSettingResultType, MonitorType } from './types'

const monitorDto = (monitorCount: number): Array<MonitorType> => {
  return Array.from(Array(monitorCount).keys()).map((item) => {
    if (item === 0) {
      return {
        id: item.toString(),
        name: `monitor${item}`,
        tabs: [
          {
            id: 'StatisticLayout',
            title: 'عملکرد',
            isActive: true,
            closable: false,
            data: {},
            layout: {
              commonProps: {},
              component: StatisticLayout,
            },
          },
        ],
      }
    } else {
      return {
        id: item.toString(),
        name: `monitor${item}`,
        tabs: [
          {
            id: 'CategoryLayout',
            title: 'تب جدید',
            isActive: true,
            data: {},
            closable: false,
            layout: {
              commonProps: {},
              component: CategoryLayout,
            },
          },
        ],
      }
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

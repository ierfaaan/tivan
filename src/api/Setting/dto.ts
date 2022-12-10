import CategoryLayout from '@/layouts/CategoryLayout'
import StatisticLayout from '@/layouts/StatisticLayout'
import { GlobalSettingResponseType, GlobalSettingResultType, MonitorType } from './types'

const monitorDto = (monitorCount: number): Array<MonitorType> => {
  return Array.from(Array(monitorCount).keys()).map((item) => {
    if (item === 0) {
      return {
        id: item.toString(),
        name: `میزکار ${item + 1}`,
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
    }
    return {
      id: item.toString(),
      name: `میزکار ${item + 1}`,
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

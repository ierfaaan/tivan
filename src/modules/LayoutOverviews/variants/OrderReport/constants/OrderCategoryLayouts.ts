import { OpenOrderReport, OrderHistory, TodayOrderReport } from '../components'

export const OrderReportLayouts = [
  {
    id: 1,
    title: 'گزارش سفارشات امروز',
    description: '',
    component: TodayOrderReport,
  },
  {
    id: 2,
    title: 'گزارش سفارشات باز',
    description: '',
    component: OpenOrderReport,
  },
  {
    id: 3,
    title: 'سابقه سفارشات',
    description: '',
    component: OrderHistory,
  },
]

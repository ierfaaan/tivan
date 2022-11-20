import { TodayTransaction, TransactionHistory } from '../components'

export const TransactionReportLayouts = [
  {
    id: 1,
    title: 'گزارش معاملات امروز',
    description: '',
    component: TodayTransaction,
  },
  {
    id: 2,
    title: 'سابقه معاملات',
    description: '',
    component: TransactionHistory,
  },
]

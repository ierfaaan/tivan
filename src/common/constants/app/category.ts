import { FunctionComponent } from 'react'
import { TabType } from '@/api/Setting/types'
import { CategoryType } from '@/common/types'
import CategoryLayout from '@/layouts/CategoryLayout'
import {
  SendOrder,
  OrderCategory,
  MarketView,
  MessageArchive,
  OrderReport,
  SubsidiaryPaper,
  TransactionReport,
} from '@/modules/LayoutOverviews/variants'

export const CreateCategoryLayout = (id: string, monitorId: string): TabType => ({
  id,
  monitorId,
  title: 'تب جدید',
  isActive: true,
  data: {},
  layout: {
    commonProps: {},
    component: CategoryLayout,
  },
})
export const Categories: CategoryType = {
  SendOrder: {
    id: 1,
    name: 'ارسال سفارش',
    overview: SendOrder,
  },
  OrderReport: {
    id: 2,
    name: 'گزارش سفارش',
    overview: OrderCategory,
  },
  TransactionReport: {
    id: 3,
    name: 'گزارش معاملات',
    overview: TransactionReport,
  },
  OrderCategory: {
    id: 4,
    name: 'دسته سفارش',
    overview: OrderCategory,
  },
  MarketView: {
    id: 5,
    name: 'نمای بازار',
    overview: MarketView,
  },
  CustomerGroup: {
    id: 6,
    name: 'مدیریت گروه مشتریان',
    overview: OrderCategory,
  },
  MessageArchive: {
    id: 7,
    name: 'آرشیو پیام ها',
    overview: MessageArchive,
  },
  SubsidiaryPaper: {
    id: 8,
    name: 'اوراق تبعی',
    overview: SubsidiaryPaper,
  },
}

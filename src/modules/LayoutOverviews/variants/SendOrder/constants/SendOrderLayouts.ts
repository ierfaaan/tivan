import {
  SendOrderFive,
  SendOrderFour,
  SendOrderOne,
  SendOrderThree,
  SendOrderTwo,
} from '../components'

export const SendOrderLayouts = [
  {
    id: 1,
    title: 'ارسال سفارش یک',
    description: 'مناسب برای صفحه نمایش های کوچک',
    component: SendOrderOne,
  },
  {
    id: 2,
    title: 'ارسال سفارش دو',
    description: 'مناسب برای صفحه نمایش های کوچک',
    component: SendOrderTwo,
  },
  {
    id: 3,
    title: 'ارسال سفارش سه',
    description: 'مناسب برای صفحه نمایش های کوچک',
    component: SendOrderThree,
  },
  {
    id: 4,
    title: 'ارسال سفارش چهار',
    description: 'مناسب برای صفحه نمایش های بزرگ',
    component: SendOrderFour,
  },
  {
    id: 5,
    title: 'ارسال سفارش پنج',
    description: 'مناسب برای صفحه نمایش های کوچک',
    component: SendOrderFive,
  },
]

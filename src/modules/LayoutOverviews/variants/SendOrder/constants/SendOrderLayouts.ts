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
    description: 'پنجره ارسال سفارش با کلید میانبر - عمق بازار',
    component: SendOrderOne,
  },
  {
    id: 2,
    title: 'ارسال سفارش دو',
    description: 'پنجره ارسال سفارش با کلید میانبر',
    component: SendOrderTwo,
  },
  {
    id: 3,
    title: 'ارسال سفارش سه',
    description: 'پنجره ارسال سفارش در داخل صفحه',
    component: SendOrderThree,
  },
  {
    id: 4,
    title: 'ارسال سفارش چهار',
    description: 'مخصوص مانیتور های کوچک و لپتاپ',
    component: SendOrderFour,
  },
  {
    id: 5,
    title: 'ارسال سفارش پنج',
    description: 'پنجره ارسال سفارش افقی',
    component: SendOrderFive,
  },
]

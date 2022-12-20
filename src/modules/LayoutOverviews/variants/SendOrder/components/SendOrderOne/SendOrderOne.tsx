import { lazy } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addNewTab } from '@/store/monitors'
import { OverviewBox, OverviewGrid } from '../../../common/components'
import SendOrderOneLayout from '@/layouts/SendOrderOneLayout'

interface SendOrderOneProps {}

const SendOrderOne: React.FC<SendOrderOneProps> = () => {
  const dispatch = useDispatch()
  return (
    <OverviewGrid
      className="grid-cols-3 grid-rows-5"
      onClick={() => {
        dispatch(
          addNewTab({
            id: nanoid(),
            data: {},
            isActive: true,
            layout: {
              component: SendOrderOneLayout,
              commonProps: {},
            },
            title: 'ارسال سفارش یک',
          })
        )
      }}
    >
      <OverviewBox className="col-[1/4]">جستجو نماد</OverviewBox>
      <OverviewBox className="row-[2/6]">جزئیات نماد</OverviewBox>
      <div className="row-[2/6] col-[2/3] grid grid-rows-3 gap-3">
        <OverviewBox>گزارش سفارشات در حال خرید</OverviewBox>
        <OverviewBox>گزارش سفارشات در حال فروش</OverviewBox>
        <OverviewBox>گزارش معاملات</OverviewBox>
      </div>
      <OverviewBox className="row-[2/6] col-[3/4]">
        عمق بازار و 5 مظنه (به صورت تب)
      </OverviewBox>
    </OverviewGrid>
  )
}

export default SendOrderOne

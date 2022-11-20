import { OverviewBox, OverviewGrid } from '../../../common/components'

interface SendOrderFiveProps {}

const SendOrderFive: React.FC<SendOrderFiveProps> = () => {
  return (
    <OverviewGrid className="grid-cols-3 grid-rows-5">
      <OverviewBox className="col-[1/4]">جستجو نماد</OverviewBox>
      <OverviewBox className="row-[3/6] col-[1/2]">جزئیات نماد</OverviewBox>
      <OverviewBox className="col-[1/3] row-[2/3]">ارسال سفارش</OverviewBox>
      <div className="col-[2/4] row-[3/6] gap-3 grid grid-cols-2 grid-rows-2 w-full h-full">
        <OverviewBox>گزارش سفارشات در حال خرید</OverviewBox>
        <OverviewBox>گزارش سفارشات در حال فروش</OverviewBox>
        <OverviewBox>گزارش معاملات</OverviewBox>
        <OverviewBox>گزارش سفارشات خطا</OverviewBox>
      </div>
      <OverviewBox className="row-[2/3] col-[3/4]">عمق بازار یا 5 مظنه</OverviewBox>
    </OverviewGrid>
  )
}

export default SendOrderFive

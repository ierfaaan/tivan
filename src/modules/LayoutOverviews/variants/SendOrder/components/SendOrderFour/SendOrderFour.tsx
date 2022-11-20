import { OverviewBox, OverviewGrid } from '../../../common/components'

interface SendOrderFourProps {}

const SendOrderFour: React.FC<SendOrderFourProps> = () => {
  return (
    <OverviewGrid className="grid-cols-3 grid-rows-5">
      <OverviewBox className="col-[1/4]">جستجو نماد</OverviewBox>
      <OverviewBox className="row-[3/6] col-[3/4]">جزئیات نماد</OverviewBox>
      <OverviewBox className="col-[1/3] row-[2/3]">ارسال سفارش</OverviewBox>
      <OverviewBox className="row-[3/6] col-[1/3] flex flex-col gap-3">
        <p>گزارش سفارشات در حال خرید</p>
        <p>گزارش سفارشات در حال فروش</p>
        <p>گزارش سفارشات در حال خطا</p>
        <p>گزارش معاملات</p>
      </OverviewBox>
      <OverviewBox className="row-[2/3] col-[3/4]">عمق بازار یا 5 مظنه</OverviewBox>
    </OverviewGrid>
  )
}

export default SendOrderFour

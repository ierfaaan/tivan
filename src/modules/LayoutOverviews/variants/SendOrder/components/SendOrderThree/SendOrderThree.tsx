import { OverviewBox, OverviewGrid } from '../../../common/components'

interface SendOrderThreeProps {}

const SendOrderThree: React.FC<SendOrderThreeProps> = () => {
  return (
    <OverviewGrid className="grid-cols-3 grid-rows-5">
      <OverviewBox className="col-[1/4]">جستجو نماد</OverviewBox>
      <OverviewBox className="row-[2/4]">جزئیات نماد</OverviewBox>
      <OverviewBox className="row-[2/4]">ارسال سفارش</OverviewBox>
      <OverviewBox className="row-[4/6] col-[1/2]">گزارش سفارشات در حال خرید</OverviewBox>
      <OverviewBox className="row-[4/6] col-[2/3]">گزارش سفارشات در حال فروش</OverviewBox>
      <OverviewBox className="row-[4/6] col-[3/4]">گزارش معاملات</OverviewBox>
      <OverviewBox className="row-[2/4] col-[3/4]">عمق بازار یا 5 مظنه</OverviewBox>
    </OverviewGrid>
  )
}

export default SendOrderThree

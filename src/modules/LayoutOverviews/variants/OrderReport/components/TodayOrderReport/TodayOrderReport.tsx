import { OverviewBox, OverviewGrid } from '../../../common/components'

interface TodayOrderReportProps {}

const TodayOrderReport: React.FC<TodayOrderReportProps> = () => {
  return (
    <OverviewGrid className="grid-cols-4 grid-row-2 ">
      <OverviewBox className="col-[1/2] row-[1/2]">
        <p>جزئیات نماد</p>
      </OverviewBox>
      <OverviewBox className="col-[1/2] row-[2/3] flex flex-col gap-1">
        <p>عمق بازار</p>
        <p>5 مظنه</p>
      </OverviewBox>
      <OverviewBox className="col-[2/5] row-[1/3]">گزارش سفارشات روز</OverviewBox>
    </OverviewGrid>
  )
}

export default TodayOrderReport

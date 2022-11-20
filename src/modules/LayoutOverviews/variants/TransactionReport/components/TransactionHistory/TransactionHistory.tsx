import { OverviewBox, OverviewGrid } from '../../../common/components'

interface TransactionHistoryProps {}

const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  return (
    <OverviewGrid className="grid-rows-5">
      <OverviewBox className="row-[1/2]">فیلتر اطلاعات</OverviewBox>
      <OverviewBox className="row-[2/6]">سابقه معاملات</OverviewBox>
    </OverviewGrid>
  )
}

export default TransactionHistory

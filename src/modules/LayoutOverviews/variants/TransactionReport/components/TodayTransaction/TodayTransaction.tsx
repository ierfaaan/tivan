import { OverviewBox, OverviewGrid } from '../../../common/components'

interface TodayTransactionProps {}

const TodayTransaction: React.FC<TodayTransactionProps> = () => {
  return (
    <OverviewGrid>
      <OverviewBox>گزارش معاملات روز</OverviewBox>
    </OverviewGrid>
  )
}

export default TodayTransaction

import { OverviewBox, OverviewGrid } from '../../../common/components'

interface OrderHistoryProps {}

const OrderHistory: React.FC<OrderHistoryProps> = () => {
  return (
    <OverviewGrid className="grid-rows-5">
      <OverviewBox className="row-[1/2]">فیلتر اطلاعات</OverviewBox>
      <OverviewBox className="row-[2/6]">سابقه سفارشات</OverviewBox>
    </OverviewGrid>
  )
}

export default OrderHistory

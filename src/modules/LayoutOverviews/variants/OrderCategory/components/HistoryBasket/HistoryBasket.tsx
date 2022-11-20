import { OverviewBox, OverviewGrid } from '../../../common/components'

interface HistoryBasketProps {}

const HistoryBasket: React.FC<HistoryBasketProps> = () => {
  return (
    <OverviewGrid className="grid-rows-5">
      <OverviewBox className="row-[1/6] col-[1/2]">محتوای سبد</OverviewBox>
      <OverviewBox className="row-[1/6] col-[2/4]">
        سبدهای نمونه و سبد های در حال انتظار
      </OverviewBox>
    </OverviewGrid>
  )
}

export default HistoryBasket

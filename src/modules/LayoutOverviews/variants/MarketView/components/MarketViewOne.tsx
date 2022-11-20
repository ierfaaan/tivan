import { FC } from 'react'
import { OverviewBox, OverviewGrid } from '../../common/components'

interface MarketViewOneProps {}

const MarketViewOne: FC<MarketViewOneProps> = () => {
  return (
    <OverviewGrid className="grid-rows-4">
      <OverviewBox>گروه ها | دیدبان</OverviewBox>
      <OverviewBox className="row-[2/5]">نمای بازار</OverviewBox>
    </OverviewGrid>
  )
}

export default MarketViewOne

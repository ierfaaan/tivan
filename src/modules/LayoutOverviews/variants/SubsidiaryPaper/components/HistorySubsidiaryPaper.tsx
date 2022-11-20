import { FC } from 'react'
import { OverviewBox, OverviewGrid } from '../../common/components'

interface HistorySubsidiaryPaperProps {}

const HistorySubsidiaryPaper: FC<HistorySubsidiaryPaperProps> = () => {
  return (
    <OverviewGrid className="grid-rows-4">
      <OverviewBox>فیلتر اطلاعات</OverviewBox>
      <OverviewBox className="row-[2/5]">
        اطلاعات درخواست های تسویه اوراق تبعی
      </OverviewBox>
    </OverviewGrid>
  )
}

export default HistorySubsidiaryPaper

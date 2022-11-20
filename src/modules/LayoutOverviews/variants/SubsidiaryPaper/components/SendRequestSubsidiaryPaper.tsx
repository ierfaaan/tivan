import { FC } from 'react'
import { OverviewBox, OverviewGrid } from '../../common/components'

interface SendRequestSubsidiaryPaperProps {}

const SendRequestSubsidiaryPaper: FC<SendRequestSubsidiaryPaperProps> = () => {
  return (
    <OverviewGrid className="grid-rows-4">
      <OverviewBox>فیلتر اطلاعات</OverviewBox>
      <OverviewBox className="row-[2/5]">اطلاعات اوراق تبعی قابل تسویه</OverviewBox>
    </OverviewGrid>
  )
}

export default SendRequestSubsidiaryPaper

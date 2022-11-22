import { FunctionComponent } from 'react'
import { OverviewBox, OverviewGrid } from '../../common/components'

interface CustomerGroupOneProps {}

export const CustomerGroupOne: FunctionComponent<CustomerGroupOneProps> = () => {
  return (
    <OverviewGrid>
      <OverviewBox>گروه مشتریان</OverviewBox>
    </OverviewGrid>
  )
}

import React from 'react'
import { LayoutOverviewTemplate } from '../../template'

import { CustomerGroupLayouts } from './constants'

interface CustomerGroupProps {}

export const CustomerGroup: React.FC<CustomerGroupProps> = () => {
  return (
    <>
      {CustomerGroupLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

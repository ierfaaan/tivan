import React from 'react'
import { LayoutOverviewTemplate } from '@/modules/LayoutOverviews/template'

import { OrderReportLayouts } from './constants'

interface OrderReportProps {}

export const OrderReport: React.FC<OrderReportProps> = () => {
  return (
    <>
      {OrderReportLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

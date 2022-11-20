import React from 'react'
import { LayoutOverviewTemplate } from '@/modules/LayoutOverviews/template'

import { TransactionReportLayouts } from './constants'

interface TransactionReportProps {}

export const TransactionReport: React.FC<TransactionReportProps> = () => {
  return (
    <>
      {TransactionReportLayouts.map(
        ({ component: Component, description, id, title }) => {
          return (
            <LayoutOverviewTemplate key={id} title={title} description={description}>
              <Component />
            </LayoutOverviewTemplate>
          )
        }
      )}
    </>
  )
}

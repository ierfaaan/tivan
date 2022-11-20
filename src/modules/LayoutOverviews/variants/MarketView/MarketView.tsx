import React from 'react'
import { LayoutOverviewTemplate } from '../../template'

import { MarketViewLayouts } from './constants'

interface MarketViewProps {}

export const MarketView: React.FC<MarketViewProps> = () => {
  return (
    <>
      {MarketViewLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

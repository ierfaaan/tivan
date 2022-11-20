import React from 'react'
import { LayoutOverviewTemplate } from '@/modules/LayoutOverviews/template'

import { SendOrderLayouts } from './constants'

interface SendOrderProps {}

export const SendOrder: React.FC<SendOrderProps> = () => {
  return (
    <>
      {SendOrderLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

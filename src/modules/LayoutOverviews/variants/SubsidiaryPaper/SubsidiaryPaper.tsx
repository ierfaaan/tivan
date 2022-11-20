import React from 'react'
import { LayoutOverviewTemplate } from '@/modules/LayoutOverviews/template'

import { SubsidiaryPaperLayouts } from './constants'

interface SubsidiaryPaperProps {}

export const SubsidiaryPaper: React.FC<SubsidiaryPaperProps> = () => {
  return (
    <>
      {SubsidiaryPaperLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

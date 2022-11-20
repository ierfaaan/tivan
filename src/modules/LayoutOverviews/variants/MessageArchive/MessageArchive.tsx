import React from 'react'
import { LayoutOverviewTemplate } from '@/modules/LayoutOverviews/template'

import { MessageArchiveLayouts } from './constants'

interface MessageArchiveProps {}

export const MessageArchive: React.FC<MessageArchiveProps> = () => {
  return (
    <>
      {MessageArchiveLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

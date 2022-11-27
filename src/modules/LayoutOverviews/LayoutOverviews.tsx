/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Categories } from '@/common/constants/app'

interface LayoutOverviewsProps {
  activeCategoryId: number
}

const LayoutOverviews: React.FC<LayoutOverviewsProps> = ({ activeCategoryId }) => {
  return (
    <div className="bg-white flex-1 grid grid-cols-3 gap-8 content-start h-full flex-wrap rounded-md p-5">
      {Object.keys(Categories).map((key) => {
        const OverViewComponent =
          Categories[key].id === activeCategoryId && Categories[key].overview
        return OverViewComponent ? <OverViewComponent key={key} /> : null
      })}
    </div>
  )
}

export default LayoutOverviews

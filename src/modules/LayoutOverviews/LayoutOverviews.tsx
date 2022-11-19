import React from 'react'
import { Categories } from '@/common/constants/app'

interface LayoutOverviewsProps {
  activeCategoryId: number
}

const LayoutOverviews: React.FC<LayoutOverviewsProps> = ({ activeCategoryId }) => {
  return (
    <div className="bg-white grid grid-cols-3 gap-3 content-start flex-1 h-full flex-wrap rounded-md p-3">
      {Object.keys(Categories).map((key) => {
        const OverViewComponent =
          Categories[key].id === activeCategoryId && Categories[key].overview
        return OverViewComponent ? <OverViewComponent key={key} /> : null
      })}
    </div>
  )
}

export default LayoutOverviews

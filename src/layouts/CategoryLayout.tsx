import { FC, useState, memo } from 'react'
import { CategoryList, LayoutOverviews } from '@/modules'

interface CategoryLayoutProps {}

const CategoryLayout: FC<CategoryLayoutProps> = () => {
  const [activeCategoryId, seActiveCategoryId] = useState(1)

  return (
    <div className="h-full flex gap-3 w-full">
      <CategoryList
        activeCategoryId={activeCategoryId}
        seActiveCategoryId={seActiveCategoryId}
      />
      <LayoutOverviews activeCategoryId={activeCategoryId} />
    </div>
  )
}

export default memo(CategoryLayout)

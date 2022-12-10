import { FC, memo } from 'react'

interface StatisticLayoutProps {}

const StatisticLayout: FC<StatisticLayoutProps> = () => {
  return <div className="h-full flex gap-3 w-full">StatisticLayout</div>
}

export const StatisticLayoutMemoized = memo(StatisticLayout)

import { FunctionComponent } from 'react'
import { TrendingUpIcon } from '@/common/icons'

interface WholeMarketDetailsProps {}

const WholeMarketDetails: FunctionComponent<WholeMarketDetailsProps> = () => {
  const indexPercent = 4.5
  const wholeIndex = 16473145
  const todayIndex = 7091738
  return (
    <div className="flex items-center ml-auto gap-3">
      <p>کل</p>
      <p>{wholeIndex.toLocaleString()}</p>
      <div className="flex items-center text-green-600 gap-2">
        <span>({todayIndex.toLocaleString()})</span>
        <span>
          <TrendingUpIcon />
        </span>
        <span>({indexPercent}%)</span>
      </div>
    </div>
  )
}

export default WholeMarketDetails

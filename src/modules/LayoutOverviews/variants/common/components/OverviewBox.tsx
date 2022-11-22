import { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BaseComponentTypes } from '@/common/types/components'

interface OverviewBoxProps extends BaseComponentTypes {}

const OverviewBox: FunctionComponent<OverviewBoxProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'border-2 border-gray-400 text-gray-400 text-md  p-3 center text-center rounded-md',
        className
      )}
    >
      {children}
    </div>
  )
}

export default OverviewBox

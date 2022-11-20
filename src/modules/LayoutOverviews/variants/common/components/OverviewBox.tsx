import { BaseComponentTypes } from '@/common/types/components'
import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface OverviewBoxProps extends BaseComponentTypes {}

const OverviewBox: FunctionComponent<OverviewBoxProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'border-2 border-gray-400 text-sm center text-center rounded-md',
        className
      )}
    >
      {children}
    </div>
  )
}

export default OverviewBox

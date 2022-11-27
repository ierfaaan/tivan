import classNames from 'classnames'
import { FC } from 'react'
import { BaseComponentTypes } from '@/common/types/components'

interface AnchorProps extends BaseComponentTypes {
  type?: 'vertical' | 'horizontal'
}

export const Anchor: FC<AnchorProps> = ({ className, type = 'vertical', ...props }) => {
  return (
    <div
      className={classNames(
        type === 'vertical' ? 'flex-col' : 'flex-row',
        'absolute flex gap-1 p-1 shadow-lg bg-white border border-gray-600 cursor-pointer rounded-lg',
        className
      )}
      {...props}
    >
      <div className="w-[5px] h-[5px] bg-gray-700 rounded-full" />
      <div className="w-[5px] h-[5px] bg-gray-700 rounded-full" />
      <div className="w-[5px] h-[5px] bg-gray-700 rounded-full" />
    </div>
  )
}

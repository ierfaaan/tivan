import { FC } from 'react'
import classNames from 'classnames'
import { SearchIsinMemo } from '@/modules'

interface SendOrderOneLayoutProps {}
export const SendOrderOneLayout: FC<SendOrderOneLayoutProps> = () => {
  const commonClass: ClassName = 'bg-white overflow-hidden rounded-md center'

  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr] grid-rows-[50px_1fr_1fr_1fr] w-full gap-3">
      <div className={classNames('col-[1/4]', commonClass)}>
        <SearchIsinMemo />
      </div>
      <div className={classNames('row-[2/5]', commonClass)}>ISIN Details</div>
      <div className={classNames('row-[2/3]', commonClass)}>buy</div>
      <div className={classNames('row-[3/4]', commonClass)}>sell</div>
      <div className={classNames('row-[4/5]', commonClass)}>trade</div>
      <div className={classNames('row-[2/5]', commonClass)}>marketDepth</div>
    </div>
  )
}

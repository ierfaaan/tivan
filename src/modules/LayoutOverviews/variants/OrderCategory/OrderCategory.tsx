import React from 'react'
import { LayoutOverviewTemplate } from '../../template'
import { HistoryBasket, OrderCategoryOne } from './components'
import { OrderCategoryLayouts } from './constants'

interface OrderCategoryProps {}
export const OrderCategory: React.FC<OrderCategoryProps> = () => {
  return (
    <>
      {OrderCategoryLayouts.map(({ component: Component, description, id, title }) => {
        return (
          <LayoutOverviewTemplate key={id} title={title} description={description}>
            <Component />
          </LayoutOverviewTemplate>
        )
      })}
    </>
  )
}

import { OverviewBox, OverviewGrid } from '../../../common/components'

interface OrderCategoryOneProps {}

const OrderCategoryOne: React.FC<OrderCategoryOneProps> = () => {
  return (
    <OverviewGrid className="grid-cols-4">
      <OverviewBox className="row-[1/2] col-[1/5]">فرم ساخت دسته سفارش</OverviewBox>
      <OverviewBox className="row-[2/4] col-[1/2]">
        سبدهای نمونه و سبد های در حال انتظار
      </OverviewBox>
      <OverviewBox className="row-[2/4] col-[2/5]">محتوای سبد</OverviewBox>
      <OverviewBox className="row-[4/6] col-[1/3]">سفارشات امروز</OverviewBox>
      <OverviewBox className="row-[4/6] col-[3/5]">سفارشات خطا</OverviewBox>
    </OverviewGrid>
  )
}

export default OrderCategoryOne

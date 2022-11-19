import classNames from 'classnames'
import { Categories } from '@/common/constants/app'
import { ArrowLeftIcon } from '@/common/icons'
import { IconButton } from '@/elements'

interface CategoryListProps {
  seActiveCategoryId: React.Dispatch<React.SetStateAction<number>>
  activeCategoryId: number
}

const CategoryList: React.FC<CategoryListProps> = ({
  activeCategoryId,
  seActiveCategoryId,
}) => {
  return (
    <div className="w-[230px] flex flex-col py-4  h-full rounded-md bg-white">
      {Object.keys(Categories).map((key) => (
        <div
          onMouseEnter={() => seActiveCategoryId(Categories[key].id)}
          key={key}
          className={classNames(
            Categories[key].id === activeCategoryId && 'bg-gray-100',
            'p-3 pr-4 pl-1  cursor-pointer hover:bg-gray-100 flex items-center justify-between'
          )}
        >
          <p className="font-bold text-slate-700">{Categories[key].name}</p>
          <IconButton varient="standard" icon={<ArrowLeftIcon />} className="text-xl" />
        </div>
      ))}
    </div>
  )
}

export default CategoryList

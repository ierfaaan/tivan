import { nanoid } from '@reduxjs/toolkit'
import { FC, useCallback } from 'react'
import { CreateCategoryLayout } from '@/common/constants/app'
import { PlusIcon, TrashIcon } from '@/common/icons'
import { IconButton, ToolTip } from '@/elements'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  addCategoryTab,
  changeIndexTab,
  clearTabs,
  TabsFilterByMonitorSelector,
} from '@/store/monitors'

import TabBox from './TabBox'

interface TabsProps {
  monitorId: string
}

const Tabs: FC<TabsProps> = ({ monitorId }) => {
  const dispatch = useAppDispatch()
  const tabs = useAppSelector(TabsFilterByMonitorSelector(monitorId))

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch(changeIndexTab({ dragIndex, hoverIndex }))
  }, [])

  const createNewCategoryLayoutHandler = () => {
    dispatch(addCategoryTab(CreateCategoryLayout(nanoid())))
  }
  const clearTabsHandler = () => {
    dispatch(clearTabs())
  }
  return (
    <div className="w-100 h-[60px] flex-shrink-0 bg-white rounded-b-lg px-3 flex items-center gap-3">
      <ToolTip tooltip="پاک کردن همه ی تب ها" placement="bottom">
        <IconButton
          className="text-red-400 hover:text-red-600 border-red-400 hover:border-red-600"
          icon={<TrashIcon />}
          onClick={clearTabsHandler}
        />
      </ToolTip>
      <ToolTip tooltip="افزودن تب جدید" placement="bottom">
        <IconButton icon={<PlusIcon />} onClick={createNewCategoryLayoutHandler} />
      </ToolTip>
      <div className="flex items-center gap-3">
        {tabs?.map(({ id, title, isActive, closable = true }, index) => (
          <TabBox
            index={index}
            id={id}
            isActive={isActive}
            closable={closable}
            title={title}
            key={id}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  )
}

export default Tabs

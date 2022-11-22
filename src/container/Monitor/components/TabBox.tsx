import { useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'

import { useDrag, useDrop } from 'react-dnd'
import type { Identifier, XYCoord } from 'dnd-core'
import { changeActiveTab, removeTab } from '@/store/monitors'
import { Button } from '@/elements'
import { CloseIcon } from '@/common/icons'

interface TabBoxProps {
  isActive: boolean
  closable: boolean
  index: number
  title: string
  id: string
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

type DragItem = {
  index: number
  id: string
  type: string
}

const TabBox: React.FC<TabBoxProps> = ({
  index,
  isActive,
  title,
  closable,
  id,
  moveCard,
}) => {
  const dispatch = useDispatch()

  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>(
    {
      accept: 'Tab',
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item: DragItem, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }

        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
      },
    }
  )

  const [{ isDragging }, drag] = useDrag({
    type: 'Tab',
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <Button
        icon={isActive && closable ? <CloseIcon /> : null}
        isActive={isActive}
        onClick={() => dispatch(changeActiveTab(index))}
        iconOnClick={() => dispatch(removeTab(index))}
      >
        {title}
      </Button>
    </div>
  )
}

export default TabBox

import { FC } from 'react'
import { useClock } from '@/libs/Clock'

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const time = useClock()
  return <p className="min-w-[150px] text-left ">{time}</p>
}

export default Clock

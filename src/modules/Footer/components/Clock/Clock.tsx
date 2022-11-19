import { FC } from 'react'
import { useClock } from '@/libs/Clock'

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const time = useClock()
  return <p className="text-xl pt-2">{time}</p>
}

export default Clock

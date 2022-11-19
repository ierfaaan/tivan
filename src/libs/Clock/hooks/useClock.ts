import { useContext } from 'react'
import { ClockConetxt } from '../provider/ClockProvider'

export const useClock = () => {
  const time = useContext(ClockConetxt)
  if (time === '') {
    throw new Error('Add ClockContext Provider Inside the tree!')
  }
  return time
}

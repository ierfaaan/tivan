import { LightstreamerClient, StatusWidget, Subscription } from 'lightstreamer-client-web'
import { createContext, FC, useEffect, useState } from 'react'

export const ClockConetxt = createContext('')

const ClockProvider: FC = ({ children }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const client = new LightstreamerClient(
      'http://172.23.44.1:8081',
      'STOCKLISTDEMO_REMOTE'
    )

    client.addListener(new StatusWidget('left', '50%', false))

    const subscription = new Subscription('MERGE', ['tadbirtime'], ['time'])

    client.connectionDetails.setUser('Erfan')
    client.connect()
    subscription.setRequestedSnapshot('no')
    subscription.setDataAdapter('clock')
    subscription.addListener({
      onItemUpdate: (updateInfo) => {
        try {
          const value = updateInfo.getValue('time')

          const serverTime = value.split(' ')[1].split(':')

          const hours = serverTime[0]
          const minutes = serverTime[1]
          const seconds = serverTime[2]

          const newDate = new Date()

          newDate.setHours(+hours)
          newDate.setMinutes(+minutes)
          newDate.setSeconds(+seconds)

          setTime(newDate)
        } catch (error) {
          console.log(error)
        }
      },
    })
    client.subscribe(subscription)
    return () => client.unsubscribe(subscription)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const nextTime = new Date(prevTime)
        nextTime.setSeconds(nextTime.getSeconds() + 1)
        return nextTime
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <ClockConetxt.Provider value={time.toLocaleTimeString('en', { hour12: false })}>
      {children}
    </ClockConetxt.Provider>
  )
}

export default ClockProvider

import { FC, useState } from 'react'
import classNames from 'classnames'
import { Footer, Sidebar } from '@/modules'
import { useTheme } from '@/hooks'

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      className={classNames(
        'pl-3 flex h-screen gap-3 bg-gray-700 overflow-x-hidden',
        theme
      )}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 gap-3 h-full">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout

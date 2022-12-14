import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'
import { store } from '@/store'
import { queryClient } from '@/config'
import { ClockProvider } from '@/libs/Clock'
import { ToastContainer } from 'react-toastify'

interface AppProviderProps {}

export const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <ToastContainer
                theme="colored"
                position="bottom-left"
                hideProgressBar
                autoClose={4000}
                limit={4}
                rtl
              />
              <ClockProvider>{children}</ClockProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </DndProvider>
    </>
  )
}

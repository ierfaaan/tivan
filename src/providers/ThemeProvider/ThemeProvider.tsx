import React, { createContext, FunctionComponent, useState } from 'react'
import { ThemeEnum } from '@/common/types'

interface ThemeProviderProps {}
type SetContextType = React.Dispatch<React.SetStateAction<ThemeEnum>>

export const ThemeContext = createContext('')
const ThemeContextProvider = ThemeContext.Provider

export const SetThemeContext = createContext<SetContextType>(() => ThemeEnum.BLUE)
const SetThemeContextProvider = SetThemeContext.Provider

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeEnum.BLUE)

  return (
    <ThemeContextProvider value={theme}>
      <SetThemeContextProvider value={setTheme}>{children}</SetThemeContextProvider>
    </ThemeContextProvider>
  )
}

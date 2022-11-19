import React from 'react'
import { SetThemeContext } from '@/providers/ThemeProvider/ThemeProvider'

export const useSetTheme = () => {
  return React.useContext(SetThemeContext)
}

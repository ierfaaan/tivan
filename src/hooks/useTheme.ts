import React from 'react'
import { ThemeContext } from '@/providers/ThemeProvider/ThemeProvider'

export const useTheme = () => {
  return React.useContext(ThemeContext)
}

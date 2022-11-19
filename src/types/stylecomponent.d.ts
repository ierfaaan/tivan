// import original module declarations
import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      error: string
      success: string
      warning: string
      info: string
      text: string
      grayText: string
      brand: {
        buy: string
        sell: string
        primary: string
      }
    }
  }
}

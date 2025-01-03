'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0%;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16 - 62.5% (1.4rem = 14px)
  }

  html,body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, '' ;
  }
`

export default GlobalStyles

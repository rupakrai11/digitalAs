import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
  }
  body {
    will-change: color, background-color;
    transition: color 0.2s ease-out, background-color 0.2s ease-out;
    &.light-mode {
      color: black;
      background-color: white;
    }
    &.dark-mode {
      color: white;
      background-color: black;
    }
  }
  h1 {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
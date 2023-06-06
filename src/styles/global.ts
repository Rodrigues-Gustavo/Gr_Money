import { DefaultTheme, createGlobalStyle } from 'styled-components'

interface ITheme extends DefaultTheme {
  white: string;
  'gray-100': string;
  'gray-300': string;
  'gray-400': string;
  'gray-500': string;
  'gray-600': string;
  'gray-700': string;
  'gray-800': string;
  'gray-900': string;
  'green-300': string;
  'green-500': string;
  'green-700': string;
  'red-300': string;
  'red-500': string;
  'red-700': string;
}


export const GlobalStyle = createGlobalStyle<{theme: ITheme}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
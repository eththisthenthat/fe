import { createGlobalStyle } from 'styled-components'
import shorthand from './shorthand'
export default createGlobalStyle`
  ${shorthand()}
  body{
    height: 100%;
    margin: 0;
  }
  :focus {
    outline: none;
  }
`
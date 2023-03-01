import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FB6B6B;
}
`

export default GlobalStyle;
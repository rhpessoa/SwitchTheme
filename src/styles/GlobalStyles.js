import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  h1{
    text-align: center;
  }
  button{
    background-color: ${(props) => props.theme.backgroundButton};
    color: ${(props) => props.theme.text};
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import background from "assets/images/logo.png";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-position: center top 200px;
    background-repeat: no-repeat;
    background-size: 400px;
    background-color: #C0C0C0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyles;

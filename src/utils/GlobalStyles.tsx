import { createGlobalStyle } from "styled-components";
import background from "assets/images/vancouver-background.jpg";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-position: top center;
    background-attachment:scroll;
    background-size: cover;
    font-family: Open-Sans, Helvetica, Sans-Serif;

   

  }
`;

export default GlobalStyles;

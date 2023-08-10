import { createGlobalStyle } from "styled-components";
import InterRegularWoff from "../../assets/fonts/Inter-Regular.woff";
import InterRegularWoff2 from "../../assets/fonts/Inter-Regular.woff2";
import InterBoldWoff from "../../assets/fonts/Inter-Bold.woff";
import InterBoldWoff2 from "../../assets/fonts/Inter-Bold.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularWoff2}) format("woff2"),
    url(${InterRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldWoff2}) format("woff2"),
    url(${InterBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  } 

  #root {
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize};
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme.textColor};
  }
`;

export default GlobalStyle;

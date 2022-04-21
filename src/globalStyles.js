/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = css`
  @font-face {
    font-family: "Roboto";
    src: url("/Roboto-Regular.woff2") format("woff2"),
      url("/Roboto-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/Roboto-Medium.woff2") format("woff2"),
      url("/Roboto-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

export default styles;

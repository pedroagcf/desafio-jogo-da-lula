import { css } from "@emotion/react";
import theme from "./theme";

export const globalStyle = css`
    * {
      font-family: 'Inter', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    @font-face {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 150%;
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap')
    }
    body {
      background-color: ${theme.colors.gray[900]};
    }
  `
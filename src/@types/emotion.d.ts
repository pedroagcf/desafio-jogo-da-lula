import "@emotion/react";

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        light: string;
        base: string;
        dark: string;
      };
      gray: {
        900: string;
        700: string;
        500: string;
        200: string;
        100: string;
      };
    };
  }
}

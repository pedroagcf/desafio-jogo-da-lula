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


// colors: {
//   primary: {
//     light: '#FDC3E9',
//     base: '#ED1B76',
//     dark: '#B02E5D'
//   },
//   gray: {
//     900: '#111928',
//     700: '#374151',
//     500: '#6B7280',
//     200: '#E5E7EB',
//     100: '#F9FAFB',
//   }
// },
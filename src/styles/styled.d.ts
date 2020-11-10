import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      md: string;
      lg: string;
      xl: string;
    };
    color: {
      primary: string;
      attention: string;
      body: string;
      white: string;
      lightGrey: string;
      darkGrey: string;
    };
  }
}
